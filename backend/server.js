// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Aspiration from "./models/aspiration.js"; // relative
import cron from "node-cron";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ---- Connect to MongoDB Atlas ----
const MONGO_URI = process.env.MONGO_URI || "";
if (!MONGO_URI) {
  console.error("MONGO_URI not set in .env");
  process.exit(1);
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// ---- Nodemailer transporter (Brevo/SMTP or other SMTP) ----
if (!process.env.BREVO_USER || !process.env.BREVO_SMTP_KEY) {
  console.error("Email config missing in .env (BREVO_USER, BREVO_SMTP_KEY)");
}
  // we don't exit - app can still run without email if you want


const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

// optional verify transporter at startup (non-blocking)
transporter.verify((err, success) => {
  if (err) console.warn("Warning: email transporter verify failed:", err.message || err);
  else console.log("✅ Email transporter ready");
});

// ---- Helpers ----
function nl2br(s) {
  return String(s || "").replace(/\n/g, "<br/>");
}

function formatDateTime(d) {
  return new Date(d).toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    dateStyle: "full",
    timeStyle: "short"
  });
}

// ---- POST /api/aspirations ----
app.post("/api/aspirations", async (req, res) => {
  try {
    const { name, class: studentClass, category, message } = req.body;

    if (!message || message.trim().length < 20) {
      return res.status(400).json({ success: false, message: "Aspirasi minimal 20 karakter." });
    }

    const isAnonymous = !(name && name.trim()) && !(studentClass && studentClass.trim());
    const displayName = isAnonymous ? "Anonim" : (name || "").trim();
    const displayClass = isAnonymous ? "-" : (studentClass || "").trim();

    // save to DB
    const asp = await Aspiration.create({
      name: displayName,
      class: displayClass,
      category: category || "Umum",
      message: message.trim()
    });

    // send immediate short notification? controlled via env
    if (process.env.NOTIFY_ON_CREATE !== "false") {
      try {
        const subjectPrefix = isAnonymous ? "[Anonim] " : "";
        const subject = `${subjectPrefix}Aspirasi Baru (${asp.category})`;

        const html = `
          <div style="font-family: Arial, sans-serif; color:#333;">
            <h3 style="margin-bottom:0.2rem">📬 Aspirasi Baru (${asp.category})</h3>
            <p style="margin:0.2rem 0"><strong>Nama:</strong> ${displayName}</p>
            <p style="margin:0.2rem 0"><strong>Kelas:</strong> ${displayClass}</p>
            <hr/>
            <p style="white-space:pre-wrap">${nl2br(asp.message)}</p>
            <hr/>
            <small>Dikirim: ${formatDateTime(asp.createdAt)}</small>
          </div>
        `;

        // short text notification: only first 120 chars to save token/quota
        const shortText = asp.message.length > 120 ? asp.message.slice(0, 117) + "..." : asp.message;

        await transporter.sendMail({
          from: `"Website Sekolah" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_TO,
          subject,
          text: `Aspirasi Baru (${asp.category})\nNama: ${displayName}\nKelas: ${displayClass}\n\n${shortText}\n\n(Detail tersimpan di DB)`,
          html
        });

        // mark notified true (optional)
        asp.notified = true;
        await asp.save();
        console.log("✅ Notified via email:", subject);
      } catch (emailErr) {
        console.error("❌ Gagal kirim notifikasi email:", emailErr.message || emailErr);
        // Do NOT delete DB entry — keep it; can retry later with digest / admin tool
      }
    }

    return res.json({ success: true, message: "Aspirasi berhasil disimpan." });
  } catch (err) {
    console.error("POST /api/aspirations error:", err);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});

// ---- Optional: GET /api/aspirations (read-only, paginated) ----
app.get("/api/aspirations", async (req, res) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Number(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const docs = await Aspiration.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
    const total = await Aspiration.countDocuments();
    res.json({ success: true, data: docs, page, limit, total });
  } catch (err) {
    console.error("GET /api/aspirations error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// ---- Optional daily digest cron (runs at 18:00 WIB -> 11:00 UTC depending on DST) ----
// default disabled; enable by setting DAILY_DIGEST_CRON="0 11 * * *" (UTC 11:00 = 18:00 WIB)
const digestCron = process.env.DAILY_DIGEST_CRON || "";
if (digestCron) {
  cron.schedule(digestCron, async () => {
    try {
      console.log("🕒 Running daily digest job...");
      // find today's not-yet-notified items (or you can use any logic)
      const since = new Date();
      since.setDate(since.getDate() - 1);
      const items = await Aspiration.find({ createdAt: { $gte: since } }).sort({ createdAt: 1 }).lean();
      if (!items.length) {
        console.log("No items for digest today.");
        return;
      }

      const html = `
        <div style="font-family: Arial, sans-serif;">
          <h3>📋 Rekap Aspirasi Hari Ini (${formatDateTime(new Date())})</h3>
          ${items
            .map(
              (it, idx) => `
            <div style="margin-bottom: 12px; padding: 8px; border-radius:6px; background:#fff;">
              <p style="margin:0"><strong>#${idx + 1} — ${it.category}</strong></p>
              <p style="margin:0"><small>${formatDateTime(it.createdAt)}</small></p>
              <p style="margin:6px 0 0 0"><strong>Nama:</strong> ${it.name} — <strong>Kelas:</strong> ${it.class}</p>
              <p style="margin:6px 0 0 0; white-space:pre-wrap">${nl2br(it.message)}</p>
            </div>`
            )
            .join("")}
        </div>
      `;

      await transporter.sendMail({
        from: `"Website Sekolah" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `Rekap Aspirasi Harian — ${formatDateTime(new Date())}`,
        html
      });
      console.log("✅ Daily digest sent.");
    } catch (err) {
      console.error("❌ Daily digest failed:", err);
    }
  });
}

// ---- Start server ----
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend berjalan di port ${PORT}`));

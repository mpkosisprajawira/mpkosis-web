// backend/routes/aspirationRoutes.js
import express from "express";
import { sendMail } from "../utils/mailer.js";

const router = express.Router();

// POST /api/aspirations
router.post("/", async (req, res) => {
  try {
    const { name, class: studentClass, message } = req.body;

    if (!message || message.trim().length < 20) {
      return res.status(400).json({
        success: false,
        message: "Aspirasi minimal 20 karakter.",
      });
    }

    // kirim email lewat mailer.js
    const mailResult = await sendMail({
      name: name || "Anonim",
      class: studentClass || "-",
      message,
    });

    if (!mailResult.success) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengirim aspirasi. Coba lagi nanti.",
        error: mailResult.error,
      });
    }

    // jika berhasil
    res.status(200).json({
      success: true,
      message: "Aspirasi berhasil dikirim!",
    });
  } catch (error) {
    console.error("❌ Error di /api/aspirations:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server.",
      error: error.message,
    });
  }
});

export default router;

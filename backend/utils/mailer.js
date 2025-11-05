import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Logo from ".../src/assets/logo1.png";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_HOST,
  port: process.env.BREVO_PORT,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

export const sendEmail = async (name, email, message) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "Aspirasi Baru (Umum)",
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; background-color: #F5E8C7; color: #3E2C2C;">
        <div style="max-width: 650px; margin: auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border: 1px solid #E0C9A6;">
          
          <!-- Header -->
          <div style="background-color: #6B4F4F; color: #F5E8C7; padding: 25px; text-align: center;">
            <img src="{Logo}" alt="Logo Sekolah" width="80" style="margin-bottom: 10px; border-radius: 8px;">
            <h2 style="margin: 0; font-weight: 600;">MPK-OSIS SMKN 1 Kedungwuni</h2>
            <p style="margin: 5px 0; font-size: 14px;">Layanan Aspirasi Siswa Praja Wira</p>
          </div>

          <!-- Body -->
          <div style="padding: 25px;">
            <h3 style="color: #6B4F4F; margin-top: 0;">📩 Aspirasi Baru Diterima</h3>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Pesan:</strong></p>
            <div style="background:#F5E8C7; padding:12px 15px; border-radius:8px; border-left:5px solid #6B4F4F; font-style:italic;">
              ${message}
            </div>
            <br>
            <p style="font-size: 13px; color: #7A5C5C;">Email ini dikirim otomatis oleh sistem PrajaWira Aspirasi.</p>
          </div>

          <!-- Footer -->
          <div style="background-color: #EED9B7; text-align: center; padding: 12px; font-size: 13px; color: #4B3A3A;">
            © 2025 MPK-OSIS SMKN 1 Kedungwuni — Semua Hak Dilindungi
          </div>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  console.log("✅ Email terkirim ke", process.env.EMAIL_TO);
};

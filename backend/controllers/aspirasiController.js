import { sendMail } from "../utils/mailer.js";

export const kirimAspirasi = async (req, res) => {
  try {
    const { nama, kelas, kategori, isi } = req.body;

    const html = `
      <h2>📬 Aspirasi Baru</h2>
      <p><b>Nama:</b> ${nama || "Anonim"}</p>
      <p><b>Kelas:</b> ${kelas || "-"}</p>
      <p><b>Kategori:</b> ${kategori}</p>
      <p><b>Isi Aspirasi:</b></p>
      <p>${isi}</p>
    `;

    await sendMail(
      "mpkosisprajawira@gmail.com", // tujuan email
      "Aspirasi Baru dari Website",
      html
    );

    res.status(200).json({ message: "Aspirasi berhasil dikirim" });
  } catch (error) {
    res.status(500).json({ message: "Gagal mengirim aspirasi" });
  }
};

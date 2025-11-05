import mongoose from "mongoose";

const AspirationSchema = new mongoose.Schema({
  name: { type: String, default: "Anonim" },
  class: { type: String, default: "-" },
  category: { type: String, default: "Umum" },
  message: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date() },
  notified: { type: Boolean, default: false } // apakah sudah dikirim notifikasi email
});

export default mongoose.models.Aspiration ||
  mongoose.model("Aspiration", AspirationSchema);

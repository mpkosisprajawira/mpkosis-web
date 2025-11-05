import React from "react";
import { Mail, Instagram, MapPin, } from "lucide-react";
import { menuItems } from "../config/menu";

interface FooterProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentPage }) => {
  // ✅ Tambahkan menu Event secara manual jika belum ada di config/menu
  const extendedMenu = [
    ...menuItems,
    { id: "events", label: "Event" }, // 👈 tambahan menu baru
  ].filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.id === item.id) // hindari duplikat jika sudah ada
  );

  return (
    <footer className="bg-brown-800 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ABOUT SECTION */}
          <div>
            <h3 className="text-lg font-bold mb-3">MPK-OSIS Praja Wira</h3>
            <p className="text-sm text-cream-200 leading-relaxed">
              Majelis Permusyawaratan Kelas dan Organisasi Siswa Intra Sekolah
              SMK Negeri 1 Kedungwuni. Menjadi jembatan aspirasi siswa menuju
              perubahan positif.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-3">Menu Cepat</h3>
            <ul className="space-y-2 text-sm">
              {extendedMenu.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`hover:text-gold-400 transition-colors ${
                      currentPage === item.id ? "text-gold-400 font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-bold mb-3">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-400" />
                <span>mpkosisprajawira@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-gold-400" />
                <span>@mpkosis.skensakdw</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold-400" />
                <span>SMK Negeri 1 Kedungwuni</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-brown-700 mt-10 pt-6 text-center">
          <p className="text-sm text-cream-300">
            &copy; 2025 MPK-OSIS Praja Wira SMK Negeri 1 Kedungwuni. Semua hak
            dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import Logo from "../assets/logo1.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Tambahkan item baru untuk Event
  const menuItems = [
    { id: "home", label: "Beranda" },
    { id: "about", label: "Tentang Kami" },
    { id: "events", label: "Event" },
    { id: "aspiration", label: "Kirim Aspirasi" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Kontak" },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-9xl mx-auto pl-3 pr-6 sm:pl-6 sm:pr-8 lg:pl-8 lg:pr-10">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* 🔰 Logo + Judul */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity"
            onClick={() => handleNavigation("home")}
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-14 w-auto md:h-16 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <h1 className="text-2xl font-bold text-brown-800">
                Praja Wira
              </h1>
              <p className="text-sm md:text-base text-brown-600">
                MPK–OSIS SMKN 1 Kedungwuni
              </p>
            </div>
          </div>

          {/* 🖥️ Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative font-medium transition-all duration-200 pb-1 ${
                  currentPage === item.id
                    ? "text-brown-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brown-700"
                    : "text-gray-700 hover:text-brown-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 📱 Tombol Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-brown-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brown-700" />
            ) : (
              <Menu className="h-6 w-6 text-brown-700" />
            )}
          </button>
        </div>

        {/* 📱 Menu Navigasi Mobile */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left font-medium px-2 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? "bg-brown-100 text-brown-700"
                      : "text-gray-700 hover:text-brown-700 hover:bg-brown-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Tombol spesial di bawah menu */}
              <button
                onClick={() => handleNavigation("events")}
                className="flex items-center justify-center gap-2 mt-2 bg-brown-600 text-white font-semibold py-2.5 rounded-lg hover:bg-brown-700 transition-colors"
              >
                <CalendarDays className="h-4 w-4" />
                Lihat Event
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

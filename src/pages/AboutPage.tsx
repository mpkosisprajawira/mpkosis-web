import React from "react";
import {
  Crown,
  Pen,
  DollarSign,
  HeartHandshake,
  Mountain,
  Compass,
  Flag,
  Shield,
  Briefcase,
  HeartPulse,
  Palette,
  Cpu,
  Languages,
} from "lucide-react";

const AboutPage: React.FC = () => {
  // ==== STRUKTUR PENGURUS ====
  const coreLeaders = [
    { position: "Ketua MPK", name: "Alifan Daffa AR.R", class: "XI TKJ 1", icon: <Crown className="h-8 w-8 text-white" /> },
    { position: "Wakil Ketua MPK", name: "M. Acegaf Alkhaidar", class: "XI TKJ 1", icon: <Crown className="h-8 w-8 text-white" /> },
  ];

  const osisLeaders = [
    { position: "Ketua 1 OSIS", name: "Ricky Wahyu Pratama", class: "XI TKR 3", icon: <Crown className="h-8 w-8 text-white" /> },
    { position: "Ketua Umum OSIS", name: "Nazril Ardianto", class: "XI TKR 3", icon: <Crown className="h-8 w-8 text-white" /> },
    { position: "Ketua 2 OSIS", name: "Haedar Arsyad", class: "XI TPEM 1", icon: <Crown className="h-8 w-8 text-white" /> },
  ];

  const coreStaff = [
    { position: "Sekretaris MPK", name: "hh", class: "XI RPL 1", icon: <Pen className="h-8 w-8 text-white" /> },
    { position: "Bendahara MPK", name: "hh", class: "X MM 1", icon: <DollarSign className="h-8 w-8 text-white" /> },
    { position: "Sekretaris OSIS", name: "Farid Rahman", class: "X AK 1", icon: <Pen className="h-8 w-8 text-white" /> },
    { position: "Bendahara OSIS", name: "Far", class: "X AK 1", icon: <DollarSign className="h-8 w-8 text-white" /> },
  ];

  // ==== SEKSIBIDANG (10 BIDANG + ANGGOTA) ====
  const divisions = [
    {
      title: "Keagamaan",
      icon: <HeartHandshake className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C", "Nama D"],
    },
    {
      title: "Pecinta Alam",
      icon: <Mountain className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C"],
    },
    {
      title: "Pramuka",
      icon: <Compass className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C", "Nama D", "Nama E"],
    },
    {
      title: "Olahraga",
      icon: <Flag className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C", "Nama D"],
    },
    {
      title: "Kebangsaan",
      icon: <Shield className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C"],
    },
    {
      title: "Kewirausahaan",
      icon: <Briefcase className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C", "Nama D"],
    },
    {
      title: "PMR",
      icon: <HeartPulse className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C"],
    },
    {
      title: "Kesenian",
      icon: <Palette className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C", "Nama D"],
    },
    {
      title: "Teknologi",
      icon: <Cpu className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C", "Nama D", "Nama E"],
    },
    {
      title: "Bahasa Inggris",
      icon: <Languages className="h-6 w-6 text-white" />,
      members: ["Nama A", "Nama B", "Nama C"],
    },
  ];

  // ==== KOMPONEN CARD ====
  const Card = ({ member }: any) => (
    <div className="bg-cream-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
      <div className="bg-brown-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
        {member.icon}
      </div>
      <h4 className="text-lg font-bold text-brown-800">{member.position}</h4>
      <p className="text-base text-gray-700">{member.name}</p>
      <p className="text-sm text-gray-500">{member.class}</p>
    </div>
  );

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-brown-600 to-brown-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang MPK–OSIS Praja Wira</h1>
        <p className="text-xl text-cream-100 max-w-3xl mx-auto">
          Mengenal lebih dekat struktur organisasi yang berperan dalam membentuk karakter, aspirasi,
          dan semangat kebersamaan siswa SMK Negeri 1 Kedungwuni.
        </p>
      </section>

      {/* STRUKTUR ORGANISASI */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-brown-800 text-center mb-10">
              Pengurus Harian
            </h2>

            {/* Baris 1: Ketua & Wakil Ketua MPK */}
            <div className="grid grid-cols-2 gap-6 justify-center md:w-2/3 mx-auto mb-10">
              {coreLeaders.map((member, i) => (
                <Card key={i} member={member} />
              ))}
            </div>

            {/* Baris 2: Ketua OSIS (Umum, 1, 2) */}
            <div className="grid grid-cols-3 gap-6 justify-center mb-10">
              {osisLeaders.map((member, i) => (
                <Card key={i} member={member} />
              ))}
            </div>

            {/* Baris 3-4: Sekretaris & Bendahara */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {coreStaff.map((member, i) => (
                <Card key={i} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEKSIBIDANG */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown-800 text-center mb-10">
            Seksi Bidang
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((div, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all text-center"
              >
                <div className="flex items-center justify-center bg-brown-600 w-12 h-12 rounded-full mx-auto mb-4">
                  {div.icon}
                </div>
                <h3 className="text-xl font-semibold text-brown-800 mb-3">{div.title}</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  {div.members.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Bergabunglah dalam Membangun SMK yang Lebih Baik
        </h2>
        <p className="text-xl text-cream-100 mb-8">
          Aspirasi dan partisipasi kalian adalah kunci kemajuan sekolah kita bersama.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gold-400 hover:bg-gold-500 text-brown-800 font-bold py-3 px-6 rounded-lg transition-colors">
            Kirim Aspirasi
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-brown-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Hubungi Kami
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

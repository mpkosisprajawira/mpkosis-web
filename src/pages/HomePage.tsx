import React from "react";
import {
  ArrowRight,
  Users,
  MessageSquare,
  Target,
  Award,
  CalendarDays,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-cream-50">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-brown-600 to-brown-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Suara Kalian,
            <span className="block text-gold-400">Masa Depan Kita</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream-100 max-w-3xl mx-auto">
            Aspirasi Siswa, Aksi Nyata MPK-OSIS SMKN 1 Kedungwuni. Mari bersama
            membangun SMK Negeri 1 Kedungwuni yang lebih baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("aspiration")}
              className="bg-gold-400 hover:bg-gold-500 text-brown-800 font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center group"
            >
              Kirim Aspirasi
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="border-2 border-white hover:bg-white hover:text-brown-800 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Tentang Kami
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-cream-50 to-transparent" />
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="h-8 w-8 text-white" />, num: "1500+", label: "Siswa Terdaftar" },
              { icon: <MessageSquare className="h-8 w-8 text-white" />, num: "500+", label: "Aspirasi Ditindaklanjuti" },
              { icon: <Target className="h-8 w-8 text-white" />, num: "25+", label: "Program Terealisasi" },
              { icon: <Award className="h-8 w-8 text-white" />, num: "15+", label: "Kegiatan per Tahun" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-brown-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-brown-800 mb-2">
                  {item.num}
                </h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
<section className="py-20 bg-gradient-to-br from-cream-100 via-white to-cream-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
        MPK & OSIS Praja Wira
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Dua organisasi yang berjalan beriringan dalam semangat kebijaksanaan dan
        kepemimpinan, membentuk karakter siswa SMK Negeri 1 Kedungwuni menuju masa depan gemilang.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
      {/* MPK SECTION */}
      <div className="relative bg-gradient-to-br from-brown-700 to-brown-600 text-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute top-0 right-0 opacity-10 text-[180px] font-extrabold">MPK</div>
        <div className="p-10 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-3 rounded-full shadow-md">
              <img
                src="/images/MPK.PNG"
                alt="Logo MPK"
                className="h-10 w-10 object-contain rounded-full"
              />
            </div>
            <h3 className="text-3xl font-bold">Majelis Perwakilan Kelas</h3>
          </div>
          <p className="text-cream-100 mb-6">
            MPK adalah lembaga legislatif siswa yang berperan sebagai penyalur aspirasi
            dan pengawas pelaksanaan program kerja OSIS. Kami menjunjung tinggi nilai-nilai
            keadilan, transparansi, dan kebijaksanaan dalam setiap tindakan.
          </p>
          <div className="bg-brown-800 bg-opacity-40 rounded-xl p-6 backdrop-blur-sm">
            <h4 className="text-2xl font-semibold text-gold-300 mb-2">Visi</h4>
            <p className="text-cream-100 mb-4">
              Mewujudkan MPK SMKN 1 Kedungwuni sebagai organisasi yang profesional, berakhlak mulia, dan berlandaskan kekeluargaan demi terciptanya lingkungan sekolah yang demokratis dan berkualitas
            </p>
            <h4 className="text-2xl font-semibold text-gold-300 mb-2">Misi</h4>
            <ul className="list-disc list-inside text-cream-100 space-y-1">
              <li>Mengedepankan nilai ketuhanan yang maha esa.</li>
              <li>Mengembangkan organisasi mpk yang profesional dan berintegritas.</li>
              <li>Melaksanakan fungsi pengawasan dan aspirasi secara transparan.</li>
              <li>Mengoptimalkan sinergi antara mpk, osis dan organisasi lainnya agar dapat berjalan secara efektif, efisien, dan sesuai dengan kebutuhan siswa.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* OSIS SECTION */}
      <div className="relative bg-gradient-to-br from-gold-300 to-gold-500 text-brown-900 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute top-0 right-0 opacity-10 text-[180px] font-extrabold">OSIS</div>
        <div className="p-10 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-3 rounded-full shadow-md">
              <img
                src="/images/OSIS.PNG"
                alt="Logo OSIS"
                className="h-10 w-10 object-contain rounded-full"
              />
            </div>
            <h3 className="text-3xl font-bold">Organisasi Siswa Intra Sekolah</h3>
          </div>
          <p className="text-brown-800 mb-6">
            OSIS adalah pelaksana kegiatan siswa yang bertujuan mengembangkan potensi, kreativitas,
            dan semangat kebersamaan. Kami menjadi motor penggerak kegiatan positif dan inovatif di sekolah.
          </p>
          <div className="bg-white bg-opacity-40 rounded-xl p-6 backdrop-blur-sm">
            <h4 className="text-2xl font-semibold text-brown-800 mb-2">Visi</h4>
            <p className="mb-4">
              Menjadikan osis sebagai organisasi yang berkhlak mulia, komunikatif, berintegritas, berkualitas dan peduli terhadap lingkungan serta menjadi wadah yang mendukung potensi siswa dan peduli terhadap lingkungan.
            </p>
            <h4 className="text-2xl font-semibold text-brown-800 mb-2">Misi</h4>
            <ul className="list-disc list-inside space-y-1 text-brown-900">
              <li>Konsistensi atas keimanan dan ketaqwaan kepada Tuhan yang maha Esa.</li>
              <li>Menanamkan Nilai kejujuran, disiplin, dan tanggung jawab.</li>
              <li>Memperkuat hubungan komunikasi yang baik antara Osis, Guru, Siswa, dan Organisasi.</li>
              <li>Memberikan kinerja yang transparansi.</li>
              <li>Memberikan dukungan kepada setiap organisasi yang ada di SMK Negeri 1 Kedungwuni untuk berkembang.</li>
              <li>Mewujudkan budaya sekolah hijau yang sehat, asri, dan nyaman.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button
        onClick={() => onNavigate("about")}
        className="bg-brown-700 hover:bg-brown-800 text-white font-bold py-4 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
      >
        Pelajari Lebih Lanjut Tentang Kami
      </button>
    </div>
  </div>
</section>

      {/* NEW: EVENT PREVIEW SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-6">
            Event & Kegiatan Terbaru
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Ikuti berbagai kegiatan seru, pelatihan, dan acara inspiratif yang
            diselenggarakan oleh MPK-OSIS Praja Wira setiap bulannya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-cream-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left max-w-sm mx-auto">
              <h3 className="text-xl font-bold text-brown-800 mb-2">
                Leadership Workshop
              </h3>
              <p className="text-gray-700 mb-4">
                Pelatihan pengembangan diri untuk meningkatkan kemampuan komunikasi dan kepemimpinan siswa.
              </p>
              <button
                onClick={() => onNavigate("events")}
                className="text-brown-700 font-semibold hover:text-brown-900 flex items-center gap-1 transition-colors"
              >
                Selengkapnya <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-cream-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left max-w-sm mx-auto">
              <h3 className="text-xl font-bold text-brown-800 mb-2">
                Open Forum Bulanan
              </h3>
              <p className="text-gray-700 mb-4">
                Forum terbuka untuk seluruh siswa menyampaikan ide dan kritik secara langsung kepada pengurus.
              </p>
              <button
                onClick={() => onNavigate("events")}
                className="text-brown-700 font-semibold hover:text-brown-900 flex items-center gap-1 transition-colors"
              >
                Lihat Jadwal <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={() => onNavigate("events")}
              className="bg-brown-600 hover:bg-brown-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <CalendarDays className="h-5 w-5" />
              Lihat Semua Event
            </button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-brown-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ada Aspirasi, Kritik, atau Saran?
          </h2>
          <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Kami siap mendengar dan menindaklanjuti setiap masukan dari siswa.
            Suara kalian adalah kekuatan untuk perubahan yang lebih baik.
          </p>
          <button
            onClick={() => onNavigate("aspiration")}
            className="bg-gold-400 hover:bg-gold-500 text-brown-800 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Sampaikan Aspirasimu Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

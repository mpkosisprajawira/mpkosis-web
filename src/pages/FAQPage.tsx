import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      question: "Apa itu MPK-OSIS Praja Wira?",
      answer: "MPK-OSIS Praja Wira adalah organisasi siswa intra sekolah yang menggabungkan Majelis Permusyawaratan Kelas (MPK) dan Organisasi Siswa Intra Sekolah (OSIS) SMK Negeri 1 Kedungwuni. Kami berperan sebagai wadah aspirasi siswa dan penghubung antara siswa dengan pihak sekolah. Nama 'Praja Wira' berarti ksatria muda, mencerminkan semangat kepemimpinan yang bijaksana dan bertanggung jawab."
    },
    {
      question: "Bagaimana cara kerja aspirasi yang dikirim?",
      answer: "Setiap aspirasi yang masuk akan melalui proses sebagai berikut: 1) Pencatatan dan verifikasi kelayakan, 2) Diskusi internal tim MPK-OSIS, 3) Konsultasi dengan guru pembimbing jika diperlukan, 4) Penyampaian ke pihak terkait (kepala sekolah, wakil kepala sekolah, atau guru), 5) Tindak lanjut dan implementasi solusi, 6) Pelaporan hasil kepada siswa melalui pengumuman resmi atau komunikasi langsung."
    },
    {
      question: "Berapa lama waktu respon untuk aspirasi yang dikirim?",
      answer: "Kami berkomitmen memberikan respon dalam waktu maksimal 7 hari kerja untuk aspirasi umum. Untuk kasus yang mendesak atau krusial, kami akan merespon dalam waktu 1-3 hari kerja. Jika proses penyelesaian membutuhkan waktu lebih lama, kami akan memberikan update berkala tentang perkembangan yang ada."
    },
    {
      question: "Apakah benar-benar aman mengirim aspirasi anonim?",
      answer: "Ya, sistem kami menjamin 100% keamanan identitas untuk aspirasi anonim. Data yang dikirim secara anonim tidak menyimpan informasi pribadi apapun dan tidak dapat dilacak kembali ke pengirim. Bahkan pengurus MPK-OSIS tidak dapat mengetahui siapa pengirim aspirasi anonim tersebut."
    },
    {
      question: "Jenis aspirasi apa saja yang dapat diterima?",
      answer: "Kami menerima berbagai jenis aspirasi yang berkaitan dengan kehidupan sekolah, antara lain: fasilitas sekolah (gedung, lab, perpustakaan), kegiatan pembelajaran dan ekstrakurikuler, kebijakan sekolah, masalah sosial antar siswa, usulan program atau kegiatan baru, kritik konstruktif terhadap sistem yang ada, dan saran perbaikan untuk lingkungan sekolah. Aspirasi harus disampaikan dengan bahasa yang sopan dan konstruktif."
    },
    {
      question: "Bagaimana cara mengetahui perkembangan aspirasi yang telah dikirim?",
      answer: "Perkembangan aspirasi dapat diikuti melalui beberapa cara: 1) Pengumuman resmi melalui media sosial MPK-OSIS (@mpkosis_prajaWira), 2) Papan pengumuman sekolah, 3) Bulletin berkala yang diterbitkan MPK-OSIS, 4) Kontak langsung jika Anda mencantumkan identitas dan kontak, 5) Rapat koordinasi kelas yang akan diinformasikan melalui ketua kelas masing-masing."
    },
    {
      question: "Apakah ada aspirasi yang tidak akan ditindaklanjuti?",
      answer: "Aspirasi yang tidak akan ditindaklanjuti adalah yang: mengandung unsur SARA, bullying, atau ujaran kebencian; bersifat pribadi yang tidak berkaitan dengan kepentingan umum siswa; melanggar norma kesopanan atau menggunakan bahasa kasar; berisi tuduhan tanpa dasar atau fitnah; meminta hal-hal yang melanggar aturan sekolah atau hukum; atau tidak konstruktif dan hanya berisi keluhan tanpa solusi. Namun, kami akan tetap memberikan tanggapan dan penjelasan untuk setiap aspirasi yang masuk."
    },
    {
      question: "Bagaimana cara bergabung dengan MPK-OSIS Praja Wira?",
      answer: "Rekrutment anggota MPK-OSIS dilakukan setiap tahun ajaran baru melalui proses seleksi yang terbuka. Persyaratan umum meliputi: memiliki prestasi akademik yang baik, tidak pernah melakukan pelanggaran berat, memiliki jiwa kepemimpinan dan komunikasi yang baik, serta komitmen untuk mengabdi kepada siswa. Informasi rekrutment akan diumumkan melalui media resmi sekolah dan sosial media MPK-OSIS."
    },
    {
      question: "Apa program unggulan MPK-OSIS Praja Wira?",
      answer: "Program unggulan kami meliputi: 1) 'Suara Praja' - program aspirasi dan mediasi siswa, 2) 'Praja Peduli' - program kepedulian sosial dan lingkungan, 3) 'Praja Kreatif' - pengembangan bakat dan minat siswa, 4) 'Praja Prestasi' - kompetisi dan lomba untuk meningkatkan prestasi, 5) 'Praja Harmoni' - program kerukunan dan anti-bullying, dan 6) 'Praja Wira Talk' - diskusi dan seminar pengembangan diri."
    },
    {
      question: "Bagaimana cara menghubungi MPK-OSIS secara langsung?",
      answer: "Anda dapat menghubungi kami melalui beberapa cara: Email resmi (mpkosis@smkn1kedungwuni.sch.id), Instagram (@mpkosis_prajaWira), WhatsApp official (nomor tersedia di halaman kontak), datang langsung ke ruang MPK-OSIS (lantai 2 gedung A), atau melalui kotak aspirasi yang tersedia di beberapa titik strategis sekolah. Kami siap melayani setiap hari sekolah dari pukul 07.00-15.00 WIB."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brown-600 to-brown-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-16 w-16 text-gold-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">FAQ</h1>
          </div>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering diajukan tentang 
            MPK-OSIS Praja Wira dan layanan aspirasi siswa.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left hover:bg-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-brown-800 pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-6 w-6 text-brown-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-brown-600 flex-shrink-0" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-brown-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Tidak Menemukan Jawaban yang Anda Cari?
            </h2>
            <p className="text-cream-100 mb-6">
              Jangan ragu untuk menghubungi kami secara langsung. Tim MPK-OSIS Praja Wira 
              siap membantu menjawab pertanyaan dan mendengarkan aspirasi Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-400 hover:bg-gold-500 text-brown-800 font-bold py-3 px-6 rounded-lg transition-colors">
                Hubungi Kami
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-brown-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Kirim Aspirasi
              </button>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-4">Tips Menggunakan Website Ini</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Kirim Aspirasi Efektif</h4>
                <p className="text-blue-600">
                  Gunakan bahasa yang jelas, spesifik, dan konstruktif. Sertakan konteks 
                  masalah dan usulan solusi jika memungkinkan.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Pantau Perkembangan</h4>
                <p className="text-blue-600">
                  Ikuti media sosial resmi kami dan cek pengumuman sekolah untuk 
                  update terbaru tentang tindak lanjut aspirasi.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Mode Anonim</h4>
                <p className="text-blue-600">
                  Gunakan fitur anonim jika merasa perlu keamanan ekstra. 
                  Identitas Anda dijamin 100% aman dan tidak dapat dilacak.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Kontak Langsung</h4>
                <p className="text-blue-600">
                  Untuk kasus mendesak atau butuh diskusi lebih lanjut, 
                  jangan ragu menghubungi kami melalui kontak yang tersedia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
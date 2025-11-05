import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Resmi',
      value: 'mpkosis@smkn1kedungwuni.sch.id',
      description: 'Untuk aspirasi dan komunikasi resmi',
    },
    {
      icon: Phone,
      title: 'WhatsApp Official',
      value: '+62 812-3456-7890',
      description: 'Layanan cepat untuk konsultasi',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@mpkosis.skensakdw',
      description: 'Update kegiatan dan informasi terbaru',
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Ruang MPK-OSIS',
      description: 'SMK Negeri 1 Kedungwuni',
    },
  ];

  const operationalHours = [
    { day: 'Senin - Kamis', hours: '07.00 - 15.00 WIB' },
    { day: 'Jumat', hours: '07.00 - 12.00 WIB' },
    { day: 'Weekend & Libur', hours: 'Layanan Online Saja' },
  ];

  if (isSubmitted) {
    return (
      <div className="bg-cream-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-brown-800 mb-4">
              Pesan Berhasil Terkirim!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Terima kasih telah menghubungi kami. Pesan Anda akan kami balas 
              dalam waktu maksimal 2x24 jam melalui email atau kontak yang Anda berikan.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-brown-600 hover:bg-brown-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Kirim Pesan Lain
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brown-600 to-brown-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto">
            Kami siap mendengar dan membantu Anda. Jangan ragu untuk menghubungi 
            MPK-OSIS Praja Wira melalui berbagai cara yang tersedia.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-brown-800 mb-8">Informasi Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-brown-600 p-3 rounded-full">
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brown-800 mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-brown-600 font-medium mb-2">
                          {contact.value}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-brown-800 mb-8">Jam Operasional</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-brown-600 mr-3" />
                  <h3 className="text-xl font-semibold text-brown-800">Layanan MPK-OSIS</h3>
                </div>
                <div className="space-y-4">
                  {operationalHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-brown-600 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gold-50 rounded-lg">
                  <p className="text-sm text-gold-800">
                    <strong>Catatan:</strong> Untuk kasus mendesak di luar jam operasional, 
                    Anda dapat menghubungi WhatsApp official atau mengirim aspirasi melalui website ini.
                  </p>
                </div>
              </div>

              {/* Quick Response Options */}
              <div className="bg-cream-100 rounded-lg p-6">
                <h3 className="text-lg font-bold text-brown-800 mb-4">Respon Cepat</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">WhatsApp</span>
                    <span className="text-green-600 font-semibold">≤ 2 Jam</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Email</span>
                    <span className="text-blue-600 font-semibold">≤ 24 Jam</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Instagram DM</span>
                    <span className="text-purple-600 font-semibold">≤ 6 Jam</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Form Kontak</span>
                    <span className="text-brown-600 font-semibold">≤ 48 Jam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="bg-brown-600 p-3 rounded-full mr-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brown-800">Kirim Pesan</h2>
                <p className="text-gray-600">Isi form untuk menghubungi kami langsung</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition-colors"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition-colors"
                    placeholder="nama@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subjek <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition-colors"
                >
                  <option value="">Pilih Subjek</option>
                  <option value="aspirasi">Aspirasi Siswa</option>
                  <option value="kerjasama">Kerjasama & Partnership</option>
                  <option value="informasi">Permintaan Informasi</option>
                  <option value="kegiatan">Usulan Kegiatan</option>
                  <option value="keluhan">Keluhan & Masukan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition-colors resize-vertical"
                  placeholder="Tulis pesan Anda dengan jelas dan detail..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-brown-600 hover:bg-brown-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Kirim Pesan
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                  className="px-6 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold rounded-lg transition-colors"
                >
                  Reset Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
import React, { useState } from 'react';
import { Send, CheckSquare, Square, MessageSquare } from 'lucide-react';

const AspirationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    aspiration: '',
    isAnonymous: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAnonymousToggle = () => {
    setFormData(prev => ({
      ...prev,
      isAnonymous: !prev.isAnonymous,
      name: !prev.isAnonymous ? '' : prev.name,
      class: !prev.isAnonymous ? '' : prev.class,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.aspiration.trim().length < 20) {
      alert('Aspirasi minimal 20 karakter agar dapat diproses.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/aspirations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          class: formData.class,
          category: 'Umum',
          message: formData.aspiration,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert('Gagal mengirim aspirasi: ' + (data.error || data.message));
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Terjadi kesalahan koneksi ke server.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-cream-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckSquare className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-brown-800 mb-4">
              Aspirasi Berhasil Terkirim!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Terima kasih telah mempercayai kami. Aspirasi Anda akan kami proses 
              dan tindaklanjuti dengan sebaik-baiknya dalam waktu maksimal 7 hari kerja.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-brown-600 hover:bg-brown-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Kirim Aspirasi Lain
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brown-600 to-brown-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kirim Aspirasi</h1>
        <p className="text-lg max-w-2xl mx-auto text-cream-100">
          Suara kalian adalah kekuatan perubahan. Sampaikan aspirasi, kritik, dan saran 
          untuk membangun SMK Negeri 1 Kedungwuni yang lebih baik.
        </p>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="bg-brown-600 p-3 rounded-full mr-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brown-800">Form Aspirasi Siswa</h2>
                <p className="text-gray-600">Isi form dengan jujur dan konstruktif</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Anonymous Toggle */}
              <div className="bg-gold-50 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-brown-800">Mode Anonim</h3>
                  <p className="text-sm text-gray-600">
                    Aktifkan jika ingin mengirim aspirasi tanpa identitas
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAnonymousToggle}
                  className="flex items-center space-x-2 text-brown-600 hover:text-brown-800 transition-colors"
                >
                  {formData.isAnonymous ? (
                    <CheckSquare className="h-6 w-6" />
                  ) : (
                    <Square className="h-6 w-6" />
                  )}
                  <span>Kirim Anonim</span>
                </button>
              </div>

              {/* Name and Class */}
              {!formData.isAnonymous && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Kelas</label>
                    <input
                      type="text"
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500"
                      placeholder="Contoh: XII TKJ 1"
                    />
                  </div>
                </div>
              )}

              {/* Aspiration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Isi Aspirasi <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="aspiration"
                  value={formData.aspiration}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 resize-vertical"
                  placeholder="Sampaikan aspirasi, kritik, atau saran Anda dengan jelas dan konstruktif."
                />
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-brown-600 hover:bg-brown-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {loading ? 'Mengirim...' : <><Send className="mr-2 h-5 w-5" />Kirim Aspirasi</>}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ name: '', class: '', aspiration: '', isAnonymous: false })}
                  className="px-6 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold rounded-lg transition-colors"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AspirationForm;

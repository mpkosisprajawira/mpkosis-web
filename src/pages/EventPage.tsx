import React from "react";
import { Calendar, Clock, MapPin, ArrowRight, Image as ImageIcon } from "lucide-react";

interface EventPageProps {
  onNavigate?: (page: string) => void;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  type: "upcoming" | "past";
}

const events: Event[] = [
  {
    id: 1,
    title: "Student Leadership Workshop",
    date: "2025-11-05",
    time: "09:00 - 15:00",
    location: "Aula SMKN 1 Kedungwuni",
    description:
      "Workshop sehari penuh untuk mengembangkan kemampuan kepemimpinan, kolaborasi tim, dan public speaking bagi seluruh perwakilan siswa.",
    type: "upcoming",
  },
  {
    id: 2,
    title: "Praja Wira Open Forum",
    date: "2025-11-12",
    time: "13:00 - 15:00",
    location: "Auditorium",
    description:
      "Forum terbuka bulanan untuk siswa menyampaikan ide, kritik, dan aspirasi langsung kepada MPK-OSIS Praja Wira.",
    type: "upcoming",
  },
  {
    id: 3,
    title: "School Environment Day",
    date: "2025-11-20",
    time: "07:00 - 12:00",
    location: "Halaman Sekolah",
    description:
      "Kegiatan bakti lingkungan untuk mempercantik area sekolah melalui penanaman pohon dan gotong royong kebersihan.",
    type: "upcoming",
  },
  {
    id: 4,
    title: "Annual School Festival 2025",
    date: "2025-10-10",
    location: "Kompleks Sekolah",
    description:
      "Festival tahunan penuh kemeriahan selama tiga hari dengan penampilan seni, bazar makanan, lomba, dan pameran kelas.",
    type: "past",
  },
  {
    id: 5,
    title: "Sports Day Championship",
    date: "2025-09-15",
    location: "Lapangan Utama",
    description:
      "Kompetisi olahraga antar kelas mencakup basket, voli, sepak bola, dan atletik. Tim Merah menjadi juara tahun ini!",
    type: "past",
  },
];

const EventPage: React.FC<EventPageProps> = ({ onNavigate }) => {
  const upcomingEvents = events.filter((e) => e.type === "upcoming");
  const pastEvents = events.filter((e) => e.type === "past");

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-brown-600 to-brown-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Kegiatan & Event</h1>
        <p className="text-xl text-cream-100 max-w-3xl mx-auto">
          Pantau berbagai kegiatan seru MPK-OSIS Praja Wira dan jadilah bagian dari momen berharga di SMKN 1 Kedungwuni!
        </p>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brown-800 text-center mb-12">Event Mendatang</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-bold text-brown-800 mb-2">{event.title}</h3>
                <div className="space-y-1 mb-3 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brown-600" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brown-600" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brown-600" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
              </div>
              <button className="mt-auto flex items-center gap-2 text-brown-700 font-semibold hover:text-brown-900 transition-colors">
                Lihat Detail
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown-800 text-center mb-12">Event Sebelumnya</h2>
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="flex items-center justify-center bg-brown-100 w-20 h-20 rounded-full">
                  <ImageIcon className="h-10 w-10 text-brown-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brown-800 mb-1">{event.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-brown-600" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-brown-600" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-brown-600 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Punya Ide untuk Acara Selanjutnya?</h2>
          <p className="text-lg text-cream-100 mb-8">
            MPK-OSIS selalu terbuka untuk ide kegiatan baru. Sampaikan usulanmu melalui halaman aspirasi!
          </p>
          <button
            onClick={() => onNavigate && onNavigate("aspiration")}
            className="bg-gold-400 hover:bg-gold-500 text-brown-800 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Kirim Aspirasi
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventPage;

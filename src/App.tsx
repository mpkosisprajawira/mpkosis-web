import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AspirationForm from './pages/AspirationForm';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import EventPage from './pages/EventPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // ⬇️ setiap currentPage berubah, scroll ke atas
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'aspiration':
        return <AspirationForm />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      case 'events':
        return <EventPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Promotions from '@/components/Promotions';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AuthModal, { type AuthMode } from '@/components/AuthModal';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { navLinks } from '@/data';

export default function App() {
  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const [activePage, setActivePage] = useState('inicio');
  useScrollReveal(activePage);

  const openWhatsApp = () => {
    window.open('https://wa.me/', '_blank', 'noopener,noreferrer');
  };
  const goToPage = (id: string) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const startOrder = () => goToPage('productos');

  const renderPage = () => {
    switch (activePage) {
      case 'inicio':
        return <Hero onOrder={startOrder} onWhatsApp={openWhatsApp} onNavigate={goToPage} />;
      case 'nosotros':
        return <About />;
      case 'servicios':
        return <Services />;
      case 'productos':
        return <Products onOrder={startOrder} />;
      case 'promociones':
        return <Promotions onOrder={startOrder} />;
      case 'como-funciona':
        return <HowItWorks />;
      case 'beneficios':
        return <Benefits onRegister={() => setAuthMode('register')} />;
      case 'faq':
        return <FAQ />;
      case 'contacto':
        return <Contact onWhatsApp={openWhatsApp} />;
      default:
        return <Hero onOrder={startOrder} onWhatsApp={openWhatsApp} onNavigate={goToPage} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Fixed background image */}
      <div
        className="fixed inset-0 -z-50 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo.jpeg')" }}
      />
      <div className="fixed inset-0 -z-40 bg-gradient-to-b from-brand-950/70 via-brand-900/55 to-brand-950/70" />

      <Navbar
        onLogin={() => setAuthMode('login')}
        onRegister={() => setAuthMode('register')}
        onOrder={startOrder}
        activePage={activePage}
        onNavigate={goToPage}
      />
      <main key={activePage} className="animate-fade-in pt-20">
        {renderPage()}
      </main>
      <Footer onOrder={startOrder} onWhatsApp={openWhatsApp} onNavigate={goToPage} navLinks={navLinks} />
      <WhatsAppFloat onClick={openWhatsApp} />
      <AuthModal
        mode={authMode}
        onClose={() => setAuthMode(null)}
        onSwitch={(m) => setAuthMode(m)}
      />
    </div>
  );
}

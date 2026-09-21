import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Dining from './components/Dining';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ReservationSection from './components/ReservationSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import MobileFloatingBar from './components/MobileFloatingBar';

export default function App() {
  const reservationRef = useRef(null);

  const handleOpenReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory-100 flex flex-col selection:bg-gold-500/30 selection:text-gold-300">
      {/* Sticky Luxury Header */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenReservation={handleOpenReservation} />
        <About />
        <Dining onOpenReservation={handleOpenReservation} />
        <Experience onOpenReservation={handleOpenReservation} />
        <Gallery />
        <Reviews />
        <ReservationSection sectionRef={reservationRef} />
        <LocationSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Floating Action CTA */}
      <MobileFloatingBar onOpenReservation={handleOpenReservation} />
    </div>
  );
}

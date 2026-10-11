import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Zones from './components/Zones';
import BookingSection from './components/BookingSection';
import Pricing from './components/Pricing';
import Tournaments from './components/Tournaments';
import EventsGallery from './components/EventsGallery';
import WaitlistBanner from './components/WaitlistBanner';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';

export default function App() {
  const [selectedZoneForBooking, setSelectedZoneForBooking] = useState(null);

  const handleSelectZone = (zoneId) => {
    setSelectedZoneForBooking(zoneId);
  };

  const handleBookNowClick = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-midnight text-white selection:bg-electric selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Sticky Navbar */}
      <Navbar onBookClick={handleBookNowClick} />

      <main>
        {/* 2. Hero Section with Live Countdown */}
        <Hero />

        {/* 3. Zones: Snooker & Pool, Private Cinema, Sim Racing, PS5, TT, Foosball, Carrom, Ludo, Chai Bar */}
        <Zones onSelectZone={handleSelectZone} />

        {/* 4. Interactive Booking Form & Confirmation Pass */}
        <BookingSection
          selectedZoneId={selectedZoneForBooking}
          setSelectedZoneId={setSelectedZoneForBooking}
        />

        {/* 5. Pricing and Memberships (3 tiers with Pro highlighted) */}
        <Pricing />

        {/* 6. Tournaments: upcoming events & registration modal */}
        <Tournaments />

        {/* 7. Events, Gallery & Construction Progress Strip */}
        <EventsGallery />

        {/* 8. Waitlist Banner with Early-Bird Perks */}
        <WaitlistBanner />

        {/* 9. Contact, Location, Map & WhatsApp/Instagram Links */}
        <ContactLocation />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

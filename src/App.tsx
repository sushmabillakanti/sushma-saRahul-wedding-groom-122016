/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoupleSection } from './components/CoupleSection';
import { MuhurthamSection } from './components/MuhurthamSection';
import { EventsTimeline } from './components/EventsTimeline';
import { VenueSection } from './components/VenueSection';
import { WishesGuestbook } from './components/WishesGuestbook';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { PetalShower } from './components/PetalShower';
import { RSVPModal } from './components/RSVPModal';
import { SaveTheDateCard } from './components/SaveTheDateCard';

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B] relative">
      {/* Background Falling Flower Petals Canvas (Always On) */}
      <PetalShower />

      {/* Auspicious Shehnai / Bansuri Ambient Sound Player */}
      <AudioPlayer />

      {/* Top Bar Navigation */}
      <Navbar onOpenRsvp={() => setIsRsvpOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Invocation, Couple, Countdown & Actions */}
        <Hero
          onOpenRsvp={() => setIsRsvpOpen(true)}
          onOpenCard={() => setIsCardOpen(true)}
        />

        {/* The Couple (Sai Rahul & Sushma) & Love Story */}
        <CoupleSection />

        {/* Auspicious 9:27 PM Sumuhurtham & Sacred Vedic Ceremonies */}
        <MuhurthamSection />

        {/* Complete Ceremonies Itinerary */}
        <EventsTimeline />

        {/* Venue, Route, Cab Bookings & Travel Guide */}
        <VenueSection />

        {/* Guest Blessings & Wishes Wall */}
        <WishesGuestbook />
      </main>

      {/* Respectful Family Footer */}
      <Footer
        onOpenRsvp={() => setIsRsvpOpen(true)}
        onOpenCard={() => setIsCardOpen(true)}
      />

      {/* RSVP Modal */}
      <RSVPModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
      />

      {/* Digital Save The Date / Lagna Patrika Invitation Card */}
      <SaveTheDateCard
        isOpen={isCardOpen}
        onClose={() => setIsCardOpen(false)}
      />
    </div>
  );
}

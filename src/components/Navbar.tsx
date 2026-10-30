import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenRsvp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRsvp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAFC]/95 backdrop-blur-md border-b border-[#D4AF37]/30 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="font-royal text-lg md:text-xl font-bold tracking-wider text-[#162E5B] whitespace-nowrap shrink-0 hover:text-[#AA771C] transition-colors"
        >
          SAI RAHUL &amp; SUSHMA
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-widest uppercase text-[#475569]">
          <a
            href="#hero"
            className="hover:text-[#162E5B] transition-colors whitespace-nowrap shrink-0"
          >
            Invitation
          </a>
          <a
            href="#couple"
            className="hover:text-[#162E5B] transition-colors whitespace-nowrap shrink-0"
          >
            Our Story
          </a>
          <a
            href="#muhurtham"
            className="hover:text-[#162E5B] transition-colors whitespace-nowrap shrink-0"
          >
            Muhurtham
          </a>
          <a
            href="#events"
            className="hover:text-[#162E5B] transition-colors whitespace-nowrap shrink-0"
          >
            Ceremonies
          </a>
          <a
            href="#venue"
            className="hover:text-[#162E5B] transition-colors whitespace-nowrap shrink-0"
          >
            Venue
          </a>
          <a
            href="#wishes"
            className="hover:text-[#162E5B] transition-colors whitespace-nowrap shrink-0"
          >
            Blessings
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRsvp}
            className="px-5 py-2 text-xs font-royal font-bold tracking-widest uppercase text-[#FFF8E7] bg-gradient-to-r from-[#162E5B] to-[#0F223D] rounded-lg border border-[#D4AF37]/50 hover:from-[#1F3E75] hover:to-[#162E5B] shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-95"
          >
            RSVP
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 md:hidden text-[#162E5B] hover:text-[#AA771C] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D4AF37]/20 bg-[#F8FAFC] px-6 py-4 flex flex-col gap-3 text-xs uppercase font-royal font-medium tracking-wider text-[#475569]">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#162E5B]"
          >
            Invitation
          </a>
          <a
            href="#couple"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#162E5B]"
          >
            The Couple &amp; Story
          </a>
          <a
            href="#muhurtham"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#162E5B]"
          >
            Auspicious Muhurtham
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#162E5B]"
          >
            Ceremonies Schedule
          </a>
          <a
            href="#venue"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#162E5B]"
          >
            Venue &amp; Location
          </a>
          <a
            href="#wishes"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-[#162E5B]"
          >
            Guest Blessings
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRsvp();
              }}
              className="w-full py-2.5 text-center text-xs font-royal font-bold text-[#FFF8E7] bg-[#162E5B] rounded-md shadow-sm"
            >
              Respond to RSVP
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

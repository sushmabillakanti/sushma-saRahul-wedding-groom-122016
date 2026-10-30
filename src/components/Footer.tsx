import React from 'react';
import { Heart, Sparkles, MapPin, Phone, Calendar } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface FooterProps {
  onOpenRsvp?: () => void;
  onOpenCard?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#0B192E] text-[#F8FAFC] pt-16 pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#D4AF37]/20">
          {/* Col 1: Wordmark & Family Invitation */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-royal text-2xl font-bold text-[#F3E5AB] tracking-wide">
              SAI RAHUL &amp; SUSHMA
            </h3>
            <p className="font-serif-display italic text-sm text-[#F1F5F9]/80 leading-relaxed max-w-sm">
              "Two lives, two hearts, joined together in friendship, united forever in sacred marriage."
            </p>
            <p className="text-xs text-[#CBD5E1]/80">
              We look forward to welcoming you and your family to celebrate the auspicious Sumuhurtham on 12th November 2026.
            </p>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-royal text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5E1]/80">
              <li>
                <a href="#hero" className="hover:text-[#F3E5AB] transition-colors">Wedding Invitation</a>
              </li>
              <li>
                <a href="#couple" className="hover:text-[#F3E5AB] transition-colors">The Groom &amp; Bride</a>
              </li>
              <li>
                <a href="#muhurtham" className="hover:text-[#F3E5AB] transition-colors">Auspicious 9:27 PM Muhurtham</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#F3E5AB] transition-colors">Ceremony Schedule</a>
              </li>
              <li>
                <a href="#venue" className="hover:text-[#F3E5AB] transition-colors">Venue &amp; Location Guide</a>
              </li>
              <li>
                <a href="#wishes" className="hover:text-[#F3E5AB] transition-colors">Blessings Wall</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Ceremony Times */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-royal text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Important Timings
            </h4>
            <div className="text-xs space-y-2 text-[#CBD5E1]/80">
              <p>
                <strong className="text-white">Sumuhurtham:</strong> Thursday, 12 Nov 2026 · 9:27 PM
              </p>
              <p>
                <strong className="text-white">Venue:</strong> {WEDDING_DETAILS.venueName}
              </p>
              <p>
                <strong className="text-white">Helpline:</strong> {WEDDING_DETAILS.contactPhone}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom quiet credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8]">
          <p>
            || శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు ||
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with love for the wedding of Sai Rahul &amp; Sushma
          </p>
          <p>
            12 November 2026 · Khammam
          </p>
        </div>
      </div>
    </footer>
  );
};

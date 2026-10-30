import React from 'react';
import { Clock, Calendar, Sparkles, Flame, Heart, BellRing, Sun, ShieldCheck } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export const MuhurthamSection: React.FC = () => {
  const calDesc = `Auspicious Sumuhurtham at 9:27 PM (Vrishabha Lagnam). Holy Matrimony of Sai Rahul & Sushma. Venue: ${WEDDING_DETAILS.venueName}.`;
  const googleCalUrl = createGoogleCalendarUrl(
    'Sai Rahul & Sushma Wedding Sumuhurtham (9:27 PM)',
    calDesc,
    WEDDING_DETAILS.venueLocation,
    '2026-11-12T20:30:00+05:30',
    '2026-11-12T23:30:00+05:30'
  );

  return (
    <section id="muhurtham" className="py-20 bg-royal-pattern text-white relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#D4AF37]/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-royal text-xs tracking-[0.25em] uppercase text-[#F3E5AB] font-bold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>సుముహూర్తం · Auspicious Sumuhurtham</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </p>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF8E7] mb-4">
            Thursday, 12th November 2026
          </h2>

          <div className="inline-block py-2 px-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 backdrop-blur-sm mb-4">
            <span className="font-royal text-lg sm:text-2xl font-bold text-[#F3E5AB] tracking-wider">
              MUHURTHAM: 9:27 PM IST
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#FCECD1]/80 max-w-xl mx-auto leading-relaxed">
            Calculated by revered Vedic scholars during the auspicious Vrishabha Lagnam, marking the celestial alignment for eternal love, health, and prosperity.
          </p>
        </div>

        {/* Sacred Mandap Banner with generated visual */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative aspect-[16/8] sm:aspect-[16/7] bg-[#0B192E]">
          <img
            src="./sacred_mandap_decor.jpg"
            alt="Sacred Wedding Mandap and Havan Fire"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192E] via-[#0B192E]/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-royal tracking-widest text-[#F3E5AB] block mb-1">
                Sacred Altar (కల్యాణ వేదిక)
              </span>
              <h3 className="font-royal text-xl sm:text-2xl font-bold text-white">
                M.M.R Convention Hall
              </h3>
            </div>
            <div className="flex gap-2">
              <a
                href={googleCalUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#D4AF37] hover:bg-[#B8860B] text-[#0B192E] font-royal font-bold text-xs tracking-wider uppercase rounded-lg shadow-md transition-all flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                Add Muhurtham to Calendar
              </a>
              <button
                onClick={() => downloadIcsFile(
                  'Sai Rahul & Sushma Wedding Muhurtham (9:27 PM)',
                  calDesc,
                  WEDDING_DETAILS.venueLocation,
                  '2026-11-12T20:30:00+05:30',
                  '2026-11-12T23:30:00+05:30'
                )}
                className="px-4 py-2 bg-black/50 hover:bg-black/70 text-white font-royal text-xs tracking-wider uppercase rounded-lg border border-[#D4AF37]/40 transition-all"
              >
                Download .ICS
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars of the Sumuhurtham Vedic Rituals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#102444]/80 backdrop-blur-md p-6 rounded-xl border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#F3E5AB] mb-4">
              <Sun className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <span className="text-[11px] font-royal text-[#D4AF37] tracking-widest uppercase block mb-1">
              MUHURTHAM: 9:27 PM
            </span>
            <h4 className="font-serif-display text-lg font-bold text-[#FFF8E7] mb-2">
              Jeelakarra-Bellam
            </h4>
            <p className="text-xs text-[#FCECD1]/80 leading-relaxed">
              Placing sacred cumin and jaggery on each other's head at 9:27 PM, symbolizing inseparable bonding through sweet and bitter tides of life.
            </p>
          </div>

          <div className="bg-[#102444]/80 backdrop-blur-md p-6 rounded-xl border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#F3E5AB] mb-4">
              <Heart className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <span className="text-[11px] font-royal text-[#D4AF37] tracking-widest uppercase block mb-1">
              Sacred Golden Thread
            </span>
            <h4 className="font-serif-display text-lg font-bold text-[#FFF8E7] mb-2">
              Mangalasutra Dharana
            </h4>
            <p className="text-xs text-[#FCECD1]/80 leading-relaxed">
              Sai Rahul ties the sacred Mangalasutram with three knots representing Manasa (mind), Vacha (speech), and Karmana (deed).
            </p>
          </div>

          <div className="bg-[#102444]/80 backdrop-blur-md p-6 rounded-xl border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#F3E5AB] mb-4">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <span className="text-[11px] font-royal text-[#D4AF37] tracking-widest uppercase block mb-1">
              Joyous Shower of Pearls
            </span>
            <h4 className="font-serif-display text-lg font-bold text-[#FFF8E7] mb-2">
              Talambralu Mahotsavam
            </h4>
            <p className="text-xs text-[#FCECD1]/80 leading-relaxed">
              Showering fragrant turmeric rice and pearls upon each other amidst joyous laughter, music, and cheerful applause from family and friends.
            </p>
          </div>

          <div className="bg-[#102444]/80 backdrop-blur-md p-6 rounded-xl border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#F3E5AB] mb-4">
              <Flame className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <span className="text-[11px] font-royal text-[#D4AF37] tracking-widest uppercase block mb-1">
              The Seven Sacred Steps
            </span>
            <h4 className="font-serif-display text-lg font-bold text-[#FFF8E7] mb-2">
              Saptapadi &amp; Homam
            </h4>
            <p className="text-xs text-[#FCECD1]/80 leading-relaxed">
              Walking seven holy steps around the sacred Agni fire, promising mutual respect, nourishment, strength, and lifelong companionship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

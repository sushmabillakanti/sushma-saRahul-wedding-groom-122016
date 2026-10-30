import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Download, Sparkles } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { createGoogleCalendarUrl } from '../utils/calendar';

interface HeroProps {
  onOpenRsvp: () => void;
  onOpenCard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRsvp, onOpenCard }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DETAILS.weddingDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const calendarDesc = `Auspicious Sumuhurtham at 9:27 PM (Vrishabha Lagnam). Join us to celebrate the holy matrimony of Sai Rahul & Sushma at ${WEDDING_DETAILS.venueName}.`;
  const googleCalUrl = createGoogleCalendarUrl(
    'Sai Rahul & Sushma Wedding Ceremony',
    calendarDesc,
    WEDDING_DETAILS.venueLocation,
    '2026-11-12T19:00:00+05:30',
    '2026-11-13T01:00:00+05:30'
  );

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-mandala-pattern pt-8 pb-16">
      {/* Subtle traditional corner border ornaments */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/40 pointer-events-none hidden sm:block"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]/40 pointer-events-none hidden sm:block"></div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Sacred Sanskrit Invocation */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 text-xs tracking-widest uppercase text-[#5A6E85]">
            <span>శ్రీరస్తు</span>
            <span aria-hidden="true">·</span>
            <span>శుభమస్తు</span>
            <span aria-hidden="true">·</span>
            <span>అవిఘ్నమస్తు</span>
          </div>
          <p className="font-serif-display text-sm md:text-base text-[#AA771C] tracking-[0.25em] uppercase font-bold mb-3">
            సత్యాల వారి ఆహ్వానము
          </p>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Invocation & Names */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            <span className="font-script text-2xl md:text-3xl text-[#162E5B] mb-2 font-medium">
              Together with our families
            </span>

            <p className="text-sm md:text-base text-[#475569] font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed mb-4">
              We cordially invite you to share our joy as we celebrate the sacred wedding ceremony of
            </p>

            <h1 className="font-royal text-4xl sm:text-5xl md:text-6xl text-[#162E5B] font-bold tracking-tight mb-3">
              <span>SAI RAHUL</span>
              <span className="block sm:inline font-script text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] font-normal mx-3 my-1 sm:my-0">
                and
              </span>
              <span>SUSHMA</span>
            </h1>

            {/* Clean unboxed metadata with typographic separators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-sm md:text-base font-semibold text-[#162E5B] mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#AA771C]" />
                {WEDDING_DETAILS.displayDate}
              </span>
              <span aria-hidden="true" className="text-[#AA771C]">·</span>
              <span className="flex items-center gap-1.5 text-[#B8860B]">
                <Clock className="w-4 h-4" />
                Muhurtham: {WEDDING_DETAILS.muhurthamTime}
              </span>
            </div>

            <p className="text-sm text-[#475569] max-w-xl mx-auto lg:mx-0 mb-6 flex items-start justify-center lg:justify-start gap-2">
              <MapPin className="w-4 h-4 text-[#162E5B] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0F172A]">{WEDDING_DETAILS.venueName}</strong>, {WEDDING_DETAILS.venueLocation}
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <button
                onClick={onOpenRsvp}
                className="px-6 py-3 bg-[#162E5B] hover:bg-[#0F223D] text-[#FFF8E7] font-royal font-semibold text-xs tracking-widest uppercase rounded-lg shadow-md border border-[#D4AF37]/60 transition-all hover:shadow-lg active:scale-95"
              >
                RSVP for Wedding
              </button>

              <a
                href={googleCalUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-white hover:bg-slate-50 text-[#162E5B] font-royal font-semibold text-xs tracking-widest uppercase rounded-lg border border-[#D4AF37]/60 shadow-sm transition-all hover:border-[#AA771C] flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#AA771C]" />
                Add to Calendar
              </a>

              <button
                onClick={onOpenCard}
                className="px-4 py-3 bg-[#F0F4F8] hover:bg-[#E2E8F0] text-[#1E293B] font-royal font-semibold text-xs tracking-widest uppercase rounded-lg border border-slate-200 transition-all flex items-center gap-1.5"
                title="View and download Digital Save the Date Invitation Card"
              >
                <Download className="w-3.5 h-3.5 text-[#AA771C]" />
                Digital Invite
              </button>
            </div>

            {/* Parents Mention with graceful editorial typography - Groom's Side First */}
            <div className="pt-4 border-t border-[#D4AF37]/20 text-xs text-[#64748B] flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div>
                <span className="font-semibold text-[#162E5B] uppercase tracking-wider block">Groom's Parents:</span>
                <span>{WEDDING_DETAILS.parents.groom}</span>
              </div>
              <div className="hidden sm:block text-[#D4AF37]">•</div>
              <div>
                <span className="font-semibold text-[#162E5B] uppercase tracking-wider block">Bride's Parents:</span>
                <span>{WEDDING_DETAILS.parents.bride}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Couple Frame & Live Countdown */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Elegant Royal Arch Photo Frame */}
            <div className="relative p-2 rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-[#D4AF37] via-[#AA771C] to-[#162E5B] shadow-2xl max-w-sm sm:max-w-md w-full">
              <div className="relative overflow-hidden rounded-t-[136px] rounded-b-xl aspect-[4/5] bg-stone-100">
                <img
                  src="./assets/aistudio/012A4283_a1e50937.JPG"
                  alt="Sai Rahul and Sushma"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192E]/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                  <p className="font-royal text-sm font-semibold tracking-wider text-[#F3E5AB]">
                    Sumuhurtham: 12 Nov 2026 · 9:27 PM
                  </p>
                  <p className="font-script text-xl text-white/95">
                    Two Souls, One Sacred Journey
                  </p>
                </div>
              </div>
            </div>

            {/* Countdown Floating Card with Tabular Numerals */}
            <div className="w-full max-w-sm sm:max-w-md -mt-6 relative z-10 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-[#D4AF37]/40 text-center">
              <div className="text-[11px] font-royal tracking-widest uppercase text-[#AA771C] font-bold mb-3 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Auspicious Muhurtham Countdown</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>

              <div className="grid grid-cols-4 gap-2 text-slate-800">
                <div className="p-2 bg-[#F8FAFC] rounded-lg border border-slate-200">
                  <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-[#162E5B] block">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Days</span>
                </div>
                <div className="p-2 bg-[#F8FAFC] rounded-lg border border-slate-200">
                  <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-[#162E5B] block">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Hours</span>
                </div>
                <div className="p-2 bg-[#F8FAFC] rounded-lg border border-slate-200">
                  <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-[#162E5B] block">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Mins</span>
                </div>
                <div className="p-2 bg-[#F8FAFC] rounded-lg border border-slate-200">
                  <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-[#162E5B] block">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Secs</span>
                </div>
              </div>

              <p className="mt-2.5 text-[11px] text-[#64748B] italic">
                Counting down to 9:27 PM on 12th November 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

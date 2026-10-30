import React, { useState } from 'react';
import { MapPin, Navigation, Car, Phone, Copy, Check } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${WEDDING_DETAILS.venueName}, ${WEDDING_DETAILS.venueLocation}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="py-20 bg-[#F8FAFC] border-t border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-royal text-xs tracking-widest uppercase text-[#AA771C] font-semibold mb-2">
            Location &amp; Travel
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#162E5B] font-bold tracking-tight mb-4">
            Venue &amp; Getting There
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Conveniently situated in Kothuru, Khammam with dedicated parking and easy accessibility for all guests and family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Venue Highlight Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-royal font-bold uppercase tracking-wider text-[#AA771C] mb-2">
                <MapPin className="w-4 h-4 text-[#162E5B]" />
                <span>Ceremony Grounds</span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#162E5B] mb-3">
                {WEDDING_DETAILS.venueName}
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {WEDDING_DETAILS.venueLocation}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={WEDDING_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-[#162E5B] hover:bg-[#0F223D] text-white font-royal font-semibold text-xs tracking-wider uppercase rounded-lg shadow-sm transition-all flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  Open in Google Maps
                </a>

                <a
                  href={`https://maps.apple.com/?q=${encodeURIComponent(WEDDING_DETAILS.venueName + ' Khammam')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#1E293B] font-royal font-semibold text-xs tracking-wider uppercase rounded-lg transition-all flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#162E5B]" />
                  Apple Maps
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#1E293B] font-royal font-semibold text-xs tracking-wider uppercase rounded-lg transition-all flex items-center gap-2"
                  title="Copy address to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Address Copied' : 'Copy Address'}</span>
                </button>
              </div>

              {/* Travel guidelines */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-[#162E5B]">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                      Valet &amp; Parking Facilities
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Complimentary valet and spacious guest parking available at the grand porch with parking space for 600+ vehicles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Assistance contact */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-[#475569]">
              <span>Need help with routes or logistics?</span>
              <div className="flex items-center gap-3 font-semibold text-[#162E5B]">
                <a
                  href={`tel:${WEDDING_DETAILS.contactPhone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#162E5B]/10 hover:bg-[#162E5B]/20 text-[#162E5B] font-semibold transition-colors border border-[#162E5B]/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#AA771C]" />
                  <span>{WEDDING_DETAILS.contactPhone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Styled Map Preview Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-md flex flex-col">
            <div className="relative h-64 sm:h-80 bg-slate-200 w-full overflow-hidden">
              {/* Stylized custom map container with Google Maps direct embed */}
              <iframe
                title="Wedding Venue Location Map"
                src="https://maps.google.com/maps?q=M.M.R+Convention+Hall+Kothuru+Khammam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter saturate-150"
                loading="lazy"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-royal font-bold text-[#162E5B] shadow">
                {WEDDING_DETAILS.venueName}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-royal text-sm font-bold uppercase text-[#162E5B] mb-2 tracking-wider">
                  Cab &amp; Transit Quick Links
                </h4>
                <p className="text-xs text-[#64748B] mb-4">
                  Tap below to open your preferred rideshare app with destination set to the venue:
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={`https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=${encodeURIComponent(WEDDING_DETAILS.venueName)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-black text-center font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    Ride with Uber
                  </a>
                  <a
                    href={`https://book.olacabs.com/?drop_name=${encodeURIComponent(WEDDING_DETAILS.venueName)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-blue-900 text-center font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    Ride with Ola
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                <a
                  href={WEDDING_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-royal font-bold text-[#AA771C] hover:text-[#162E5B] uppercase tracking-wider inline-flex items-center gap-1"
                >
                  Open Full Navigation in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

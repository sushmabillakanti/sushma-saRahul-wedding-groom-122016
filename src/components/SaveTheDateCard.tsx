import React, { useRef } from 'react';
import { X, Printer, Share2, Download, Sparkles } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { getWhatsAppShareUrl } from '../utils/calendar';

interface SaveTheDateCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SaveTheDateCard: React.FC<SaveTheDateCardProps> = ({ isOpen, onClose }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    window.open(getWhatsAppShareUrl(), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-xl w-full my-6 flex flex-col items-center">
        {/* Top Floating Controls */}
        <div className="flex items-center justify-between w-full mb-3 text-white">
          <span className="text-xs font-royal uppercase tracking-wider text-[#F3E5AB]">
            Digital Invitation Card (లగ్న పత్రిక)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Print Invitation Card"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleWhatsAppShare}
              className="p-2 rounded-full bg-emerald-600/80 hover:bg-emerald-600 text-white transition-colors"
              title="Share on WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Royal Invitation Card */}
        <div
          ref={cardRef}
          className="w-full bg-[#FFFDF7] p-8 sm:p-10 rounded-2xl border-4 border-[#D4AF37] shadow-2xl relative text-center text-[#2E1A11] print:border-2 print:shadow-none"
        >
          {/* Inner Gold Inset Border */}
          <div className="absolute inset-3 border border-[#AA771C]/40 rounded-xl pointer-events-none"></div>

          {/* Corner traditional filigree icons */}
          <div className="text-[#D4AF37] text-xs font-serif-display uppercase tracking-widest mb-1">
            || श्री गणेशाय नमः || ॐ श्री वेङ्कटेश्वराय नमः ||
          </div>

          <p className="font-serif-display text-xs text-[#162E5B] font-bold tracking-widest uppercase mb-4">
            శుభ లగ్న పత్రిక · Wedding Invitation
          </p>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-md mx-auto mb-6">
            With the divine grace of Almighty God and affectionate blessings of our parents, we solicit your esteemed presence and blessings with family on the auspicious occasion of the wedding of
          </p>

          {/* Groom & Bride Royal Lockup */}
          <div className="py-2 mb-4">
            <span className="text-[11px] font-royal uppercase tracking-widest text-[#AA771C] block">
              Chi.
            </span>
            <h2 className="font-royal text-3xl sm:text-4xl font-bold text-[#162E5B] tracking-tight">
              Sai Rahul
            </h2>
            <p className="text-xs text-[#64748B] mt-1">
              (Son of {WEDDING_DETAILS.parents.groom})
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 my-2 text-[#AA771C]">
            <span className="h-[1px] w-12 bg-[#D4AF37]/50"></span>
            <span className="font-script text-3xl sm:text-4xl text-[#AA771C] font-normal">weds</span>
            <span className="h-[1px] w-12 bg-[#D4AF37]/50"></span>
          </div>

          <div className="py-2 mb-6">
            <span className="text-[11px] font-royal uppercase tracking-widest text-[#AA771C] block">
              Chi. La. Sow.
            </span>
            <h2 className="font-royal text-3xl sm:text-4xl font-bold text-[#162E5B] tracking-tight">
              Sushma
            </h2>
            <p className="text-xs text-[#64748B] mt-1">
              (Daughter of {WEDDING_DETAILS.parents.bride})
            </p>
          </div>

          {/* Sumuhurtham Highlight Box */}
          <div className="bg-[#F0F5FA] border border-[#D4AF37] rounded-xl p-4 max-w-md mx-auto mb-6">
            <span className="text-[10px] font-royal uppercase tracking-widest text-[#162E5B] font-bold block mb-1">
              సుముహూర్తం · Auspicious Sumuhurtham
            </span>
            <p className="font-serif-display text-lg sm:text-xl font-bold text-[#0F223D]">
              Thursday, 12th November 2026 at 9:27 PM
            </p>
            <p className="text-xs text-[#64748B] mt-0.5">
              (Vrishabha Lagna Sumuhurthe · Jeelakarra-Bellam)
            </p>
          </div>

          {/* Venue */}
          <div className="text-xs text-[#475569] space-y-1 mb-6">
            <span className="font-royal font-bold text-[#162E5B] uppercase tracking-wider block">
              Kalyana Vedika:
            </span>
            <p className="font-bold text-sm text-[#0F172A]">{WEDDING_DETAILS.venueName}</p>
            <p>{WEDDING_DETAILS.venueLocation}</p>
          </div>

          {/* Closing blessings note */}
          <div className="pt-4 border-t border-[#D4AF37]/30 text-[11px] text-[#64748B] italic">
            "Your gracious presence is our most treasured blessing."
          </div>
        </div>

        {/* Bottom helper */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-[#162E5B] hover:bg-[#0F223D] text-[#F8FAFC] font-royal font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center gap-2 border border-[#D4AF37]/50"
          >
            <Printer className="w-4 h-4 text-[#D4AF37]" />
            Print / Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

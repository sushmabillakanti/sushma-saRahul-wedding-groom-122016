import React, { useState } from 'react';
import { X, CheckCircle, HeartHandshake, Sparkles, Send } from 'lucide-react';
import { WEDDING_EVENTS, WEDDING_DETAILS } from '../data/weddingData';
import { RSVPFormData } from '../types';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessCelebrate?: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose, onSuccessCelebrate }) => {
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: '',
    emailOrPhone: '',
    guestCount: 2,
    attendingEvents: ['kalyanam', 'reception'],
    dietaryPreference: 'Traditional South Indian Festive Feast',
    specialNote: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCheckboxChange = (eventId: string) => {
    setFormData(prev => {
      const exists = prev.attendingEvents.includes(eventId);
      if (exists) {
        return { ...prev, attendingEvents: prev.attendingEvents.filter(id => id !== eventId) };
      } else {
        return { ...prev, attendingEvents: [...prev.attendingEvents, eventId] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.emailOrPhone.trim()) return;

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('sushma_sai_rahul_rsvps') || '[]');
      existing.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('sushma_sai_rahul_rsvps', JSON.stringify(existing));
    } catch (err) {
      // ignore
    }

    setSubmitted(true);
    if (onSuccessCelebrate) {
      onSuccessCelebrate();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FFFDF9] rounded-2xl max-w-lg w-full border border-[#D4AF37]/50 shadow-2xl overflow-hidden my-8">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#162E5B] to-[#0B192E] px-6 py-4 text-white flex items-center justify-between border-b border-[#D4AF37]/40">
          <div>
            <span className="text-[10px] uppercase font-royal tracking-widest text-[#F3E5AB] font-semibold block">
              Wedding of Sai Rahul &amp; Sushma
            </span>
            <h3 className="font-serif-display text-xl font-bold text-white">
              RSVP &amp; Guest Attendance
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-[#162E5B] rounded-full flex items-center justify-center mx-auto shadow-inner border border-blue-200">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h4 className="font-serif-display text-2xl font-bold text-[#162E5B]">
              Thank You, {formData.fullName}!
            </h4>
            <p className="text-sm text-[#475569] leading-relaxed max-w-md mx-auto">
              Your response has been confirmed. Sai Rahul, Sushma, and their families eagerly await welcoming you with warmth and love on 12th November 2026.
            </p>
            <div className="p-4 bg-[#F0F5FA] rounded-xl border border-[#D4AF37]/40 text-xs text-[#162E5B] space-y-1">
              <p className="font-royal font-bold">Sumuhurtham: 12 Nov 2026 at 9:27 PM</p>
              <p>{WEDDING_DETAILS.venueName}, {WEDDING_DETAILS.venueLocation}</p>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#162E5B] text-[#F8FAFC] rounded-lg font-royal text-xs uppercase tracking-wider font-semibold shadow hover:bg-[#0F223D] border border-[#D4AF37]/40"
            >
              Close &amp; Continue Exploring
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left max-h-[75vh] overflow-y-auto">
            <p className="text-xs text-[#735F4C]">
              Kindly confirm your presence by 20th October 2026 to help us arrange pleasant hospitality and banquets for you and your family.
            </p>

            <div>
              <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Smt. &amp; Sri Dr. V. Murthy"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#162E5B]/40 focus:border-[#162E5B]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-1">
                  Mobile Number / Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+91 9876543210"
                  value={formData.emailOrPhone}
                  onChange={e => setFormData({ ...formData, emailOrPhone: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#162E5B]/40 focus:border-[#162E5B]"
                />
              </div>

              <div>
                <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-1">
                  Number of Attendees
                </label>
                <select
                  value={formData.guestCount}
                  onChange={e => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#162E5B]/40 focus:border-[#162E5B]"
                >
                  <option value={1}>1 Guest (Just Me)</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Family)</option>
                  <option value={5}>5+ Guests</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-2">
                Ceremonies You Plan to Attend
              </label>
              <div className="space-y-2 text-xs">
                {WEDDING_EVENTS.map(evt => (
                  <label
                    key={evt.id}
                    className="flex items-center gap-3 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.attendingEvents.includes(evt.id)}
                      onChange={() => handleCheckboxChange(evt.id)}
                      className="w-4 h-4 text-[#162E5B] rounded border-slate-300 focus:ring-[#162E5B]"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-[#0F172A]">{evt.title}</span>
                      <span className="text-slate-500 block text-[11px]">{evt.displayDate} · {evt.time}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-1">
                Dietary &amp; Feast Preference
              </label>
              <select
                value={formData.dietaryPreference}
                onChange={e => setFormData({ ...formData, dietaryPreference: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#162E5B]/40 focus:border-[#162E5B]"
              >
                <option value="Traditional South Indian Festive Feast">Traditional South Indian Royal Sadhya Feast (Pure Veg)</option>
                <option value="Multi-cuisine North & South Indian Buffet">Multi-cuisine Gourmet Buffet (Veg)</option>
                <option value="Jain Food / Sattvic Food">Jain Food / Sattvic Food (No Onion / Garlic)</option>
                <option value="Kids Friendly Mild Meal">Kids-friendly Mild Options</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-1">
                Special Requests / Hotel Accommodation Assistance
              </label>
              <textarea
                rows={2}
                placeholder="Let us know if you require airport pickup, hotel stay coordination, or special assistance..."
                value={formData.specialNote}
                onChange={e => setFormData({ ...formData, specialNote: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#162E5B]/40 focus:border-[#162E5B]"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#162E5B] to-[#0B192E] hover:from-[#0F223D] hover:to-[#07111F] text-[#F8FAFC] font-royal font-bold text-xs tracking-widest uppercase rounded-lg shadow-md border border-[#D4AF37]/50 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Confirm Attendance (RSVP)</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

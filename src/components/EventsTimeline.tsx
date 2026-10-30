import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Music, Flame, HeartHandshake, Crown, ExternalLink } from 'lucide-react';
import { WEDDING_EVENTS, WEDDING_DETAILS } from '../data/weddingData';
import { WeddingEvent } from '../types';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export const EventsTimeline: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('all');

  const filteredEvents = WEDDING_EVENTS.filter(evt => {
    if (selectedDay === 'all') return true;
    return evt.date === selectedDay;
  });

  const getEventIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Music': return <Music className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Crown': return <Crown className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleAddEventToCalendar = (evt: WeddingEvent) => {
    const startTime = evt.date === '2026-11-11' && evt.id === 'haldi' ? '2026-11-11T10:00:00+05:30'
      : evt.date === '2026-11-11' ? '2026-11-11T18:30:00+05:30'
      : evt.date === '2026-11-12' && evt.id === 'snathakam' ? '2026-11-12T16:30:00+05:30'
      : evt.date === '2026-11-12' ? '2026-11-12T19:30:00+05:30'
      : '2026-11-13T19:00:00+05:30';

    const endTime = evt.date === '2026-11-11' && evt.id === 'haldi' ? '2026-11-11T14:00:00+05:30'
      : evt.date === '2026-11-11' ? '2026-11-11T23:30:00+05:30'
      : evt.date === '2026-11-12' && evt.id === 'snathakam' ? '2026-11-12T18:30:00+05:30'
      : evt.date === '2026-11-12' ? '2026-11-13T01:00:00+05:30'
      : '2026-11-13T23:30:00+05:30';

    const url = createGoogleCalendarUrl(
      `Sai Rahul & Sushma: ${evt.title}`,
      `${evt.description}\nVenue: ${evt.venue}, ${evt.address}\nAttire: ${evt.attire}`,
      `${evt.venue}, ${evt.address}`,
      startTime,
      endTime
    );

    window.open(url, '_blank');
  };

  return (
    <section id="events" className="py-20 bg-[#F8FAFC] border-t border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-royal text-xs tracking-widest uppercase text-[#AA771C] font-semibold mb-2">
            Ceremonial Itinerary
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#162E5B] font-bold tracking-tight mb-4">
            Wedding Events &amp; Celebrations
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Every moment is steeped in joy, sacred chants, music, and love. We request your gracious presence at each ceremony.
          </p>
        </div>

        {/* Day Filter Segmented Controls */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-100/90 rounded-xl max-w-md mx-auto mb-12 border border-slate-200">
          <button
            onClick={() => setSelectedDay('all')}
            className={`px-4 py-2 text-xs font-royal font-semibold tracking-wider rounded-lg transition-all ${
              selectedDay === 'all'
                ? 'bg-[#162E5B] text-[#FFF8E7] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Days
          </button>
          <button
            onClick={() => setSelectedDay('2026-11-11')}
            className={`px-3 py-2 text-xs font-royal font-semibold tracking-wider rounded-lg transition-all ${
              selectedDay === '2026-11-11'
                ? 'bg-[#162E5B] text-[#FFF8E7] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            11 Nov (Haldi)
          </button>
          <button
            onClick={() => setSelectedDay('2026-11-12')}
            className={`px-3 py-2 text-xs font-royal font-semibold tracking-wider rounded-lg transition-all ${
              selectedDay === '2026-11-12'
                ? 'bg-[#162E5B] text-[#FFF8E7] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            12 Nov (Wedding)
          </button>
        </div>

        {/* Events Cards */}
        <div className="space-y-6">
          {filteredEvents.map((evt, idx) => (
            <div
              key={evt.id}
              className={`rounded-2xl p-6 sm:p-8 transition-all border ${
                evt.isMuhurtham
                  ? 'bg-gradient-to-br from-[#F0F5FA] to-[#E3ECF6] border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/50'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Left side: Icon, Telugu Title, Name & Details */}
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-white"
                    style={{ backgroundColor: evt.attireColorHint }}
                  >
                    {getEventIcon(evt.iconName)}
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-serif-display text-xs text-[#AA771C] font-semibold">
                        {evt.teluguTitle}
                      </span>
                      {evt.isMuhurtham && (
                        <span className="text-[10px] uppercase font-royal font-bold bg-[#162E5B] text-[#F3E5AB] px-2.5 py-0.5 rounded-full tracking-wider border border-[#D4AF37]/40">
                          Main Muhurtham
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#162E5B]">
                      {evt.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#475569] font-medium">
                      <span className="flex items-center gap-1.5 font-semibold text-[#162E5B]">
                        <Calendar className="w-3.5 h-3.5 text-[#AA771C]" />
                        {evt.displayDate}
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="flex items-center gap-1.5 font-semibold text-[#AA771C]">
                        <Clock className="w-3.5 h-3.5" />
                        {evt.time}
                      </span>
                    </div>

                    {evt.muhurthamTime && (
                      <p className="text-xs font-royal font-bold text-[#162E5B] bg-blue-50/80 inline-block px-2.5 py-1 rounded border border-blue-200">
                        ✨ Exact Sumuhurtham: {evt.muhurthamTime}
                      </p>
                    )}

                    <p className="text-sm text-[#334155] leading-relaxed pt-1">
                      {evt.description}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
                      <span className="flex items-center gap-1 text-[#475569]">
                        <MapPin className="w-3.5 h-3.5 text-[#162E5B]" />
                        <span><strong>Venue:</strong> {evt.venue}</span>
                      </span>

                      <span className="flex items-center gap-1.5 text-[#475569]">
                        <span
                          className="w-3 h-3 rounded-full border border-slate-300 shrink-0"
                          style={{ backgroundColor: evt.attireColorHint }}
                        />
                        <span><strong>Attire:</strong> {evt.attire}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side: Calendar Actions */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-2.5 shrink-0 pt-2 md:pt-0">
                  <button
                    onClick={() => handleAddEventToCalendar(evt)}
                    className="w-full md:w-auto px-4 py-2 text-xs font-royal font-semibold tracking-wider uppercase text-[#162E5B] bg-[#F0F5FA] hover:bg-[#E3ECF6] rounded-lg border border-[#D4AF37]/50 shadow-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#AA771C]" />
                    <span>Add to Google Cal</span>
                  </button>
                  <a
                    href={WEDDING_DETAILS.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full md:w-auto px-4 py-2 text-xs font-royal font-semibold tracking-wider uppercase text-[#334155] bg-white hover:bg-slate-50 rounded-lg border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#162E5B]" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

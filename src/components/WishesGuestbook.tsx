import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Blessing } from '../types';
import { INITIAL_BLESSINGS } from '../data/weddingData';

export const WishesGuestbook: React.FC = () => {
  const [blessings, setBlessings] = useState<Blessing[]>(() => {
    try {
      const saved = localStorage.getItem('sushma_sai_rahul_blessings');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_BLESSINGS;
  });

  const [name, setName] = useState('');
  const [relationOrCity, setRelationOrCity] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTag, setSelectedTag] = useState('🪷 Mangalashasanam');
  const [submitted, setSubmitted] = useState(false);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      localStorage.setItem('sushma_sai_rahul_blessings', JSON.stringify(blessings));
    } catch (e) {
      // ignore
    }
  }, [blessings]);

  const handleLike = (id: string) => {
    if (likedIds[id]) return; // already liked
    setLikedIds(prev => ({ ...prev, [id]: true }));
    setBlessings(prev =>
      prev.map(b => (b.id === id ? { ...b, likes: b.likes + 1 } : b))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: `blessing-${Date.now()}`,
      name: name.trim(),
      relationOrCity: relationOrCity.trim() || 'Well-wisher',
      message: message.trim(),
      tag: selectedTag,
      timestamp: 'Just now',
      likes: 1
    };

    setBlessings(prev => [newBlessing, ...prev]);
    setName('');
    setRelationOrCity('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const tagOptions = [
    '🪷 Mangalashasanam',
    '💐 Best Wishes',
    '🪔 Shubh Vivah',
    '✨ Eternal Love',
    '🎊 Hearty Congratulations'
  ];

  return (
    <section id="wishes" className="py-20 bg-[#F8FAFC] border-t border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-royal text-xs tracking-widest uppercase text-[#AA771C] font-semibold mb-2">
            Shower Your Blessings
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#162E5B] font-bold tracking-tight mb-4">
            Wishes &amp; Blessings Wall
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Your heartfelt prayers and warm words are the greatest gifts for Sai Rahul &amp; Sushma as they begin their sacred married life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form on Left (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-md">
            <h3 className="font-serif-display text-xl font-bold text-[#162E5B] mb-2 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#AA771C]" />
              <span>Write a Blessing</span>
            </h3>
            <p className="text-xs text-[#64748B] mb-6">
              Leave a loving note, sacred sloka, or congratulatory message for the groom and bride.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! Your heartfelt blessing has been shared on the wall.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#162E5B]/40 focus:border-[#162E5B]"
                />
              </div>

              <div>
                <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-1.5">
                  Relation / City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Groom's Cousin, Dallas / Friend, Khammam"
                  value={relationOrCity}
                  onChange={e => setRelationOrCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#162E5B]/40 focus:border-[#162E5B]"
                />
              </div>

              <div>
                <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-1.5">
                  Choose Blessing Theme
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {tagOptions.map(tag => (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1 text-xs rounded-full border transition-all ${
                        selectedTag === tag
                          ? 'bg-[#162E5B] text-white border-[#162E5B]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-royal font-semibold uppercase tracking-wider text-[#1E293B] mb-1.5">
                  Your Blessing Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="May God bless Sai Rahul & Sushma with eternal love, harmony, good health, and joyful moments together..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#162E5B]/40 focus:border-[#162E5B]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#162E5B] hover:bg-[#0F223D] text-[#FFF8E7] font-royal font-semibold text-xs tracking-widest uppercase rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Post Blessing on Wall</span>
              </button>
            </form>
          </div>

          {/* Blessings Feed on Right (7 cols) */}
          <div className="lg:col-span-7 space-y-4 max-h-[620px] overflow-y-auto pr-2">
            {blessings.map(b => (
              <div
                key={b.id}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-royal font-bold text-[#162E5B]">
                      {b.name}
                    </span>
                    <span className="text-[11px] text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {b.tag}
                    </span>
                  </div>

                  <p className="text-[11px] text-[#64748B] mb-3">
                    {b.relationOrCity} · {b.timestamp}
                  </p>

                  <p className="text-sm text-[#334155] leading-relaxed italic">
                    "{b.message}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 font-royal">
                    Blessing for Sai Rahul &amp; Sushma
                  </span>

                  <button
                    onClick={() => handleLike(b.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                      likedIds[b.id]
                        ? 'text-[#162E5B] bg-blue-50 font-bold'
                        : 'text-slate-500 hover:text-[#162E5B] hover:bg-slate-50'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedIds[b.id] ? 'fill-current' : ''}`} />
                    <span className="font-mono tabular-nums">{b.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

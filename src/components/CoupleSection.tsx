import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { STORY_MILESTONES } from '../data/weddingData';

export const CoupleSection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  return (
    <section id="couple" className="py-20 bg-[#F8FAFC] border-t border-[#D4AF37]/20 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Story Milestones Section */}
        <div className="bg-[#EEF4FA] rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/35 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-script text-2xl text-[#162E5B] block font-medium">
              Our Journey
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
              How Destiny Wrote Our Story
            </h3>
          </div>

          {/* Interactive milestone navigation tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
            {STORY_MILESTONES.map((milestone, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStoryIndex(idx)}
                className={`px-4 py-2 rounded-lg text-xs font-royal font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeStoryIndex === idx
                    ? 'bg-[#162E5B] text-[#FFF8E7] shadow-sm border border-[#D4AF37]/60'
                    : 'bg-white text-[#475569] border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {milestone.yearOrPhase}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 max-w-3xl mx-auto shadow-sm">
            <div className="flex items-center gap-3 text-xs font-bold text-[#AA771C] uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Chapter {activeStoryIndex + 1}: {STORY_MILESTONES[activeStoryIndex].yearOrPhase}</span>
            </div>
            <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#162E5B] mb-3">
              {STORY_MILESTONES[activeStoryIndex].title}
            </h4>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-4">
              {STORY_MILESTONES[activeStoryIndex].description}
            </p>
            {STORY_MILESTONES[activeStoryIndex].quote && (
              <div className="bg-[#F8FAFC] p-4 rounded-lg border-l-2 border-[#D4AF37] italic text-xs sm:text-sm text-[#162E5B]">
                {STORY_MILESTONES[activeStoryIndex].quote}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

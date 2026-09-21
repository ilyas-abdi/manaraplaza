import React from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience({ onOpenReservation }) {
  const experiences = RESORT_DATA.experiences;

  return (
    <section id="experience" className="py-24 sm:py-32 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-gold-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ivory-50 tracking-tight">
            The Manara Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory-300/80 font-light leading-relaxed">
            Designed for refined comfort, exceptional taste, and contemporary community life in Mogadishu.
          </p>
        </div>

        {/* 4 Core Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card rounded-3xl overflow-hidden group hover:border-gold-500/40 transition-all duration-500 flex flex-col"
            >
              {/* Card Media Banner */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-charcoal-950/85 backdrop-blur-md text-gold-400 border border-gold-500/30">
                    {exp.category}
                  </span>
                </div>

                {/* Index Pill */}
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-mono text-gold-400">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 group-hover:text-gold-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-3 text-sm text-ivory-300/85 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {exp.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-800/80 border border-white/5 text-xs text-ivory-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-gold-400" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-ivory-400 uppercase tracking-widest font-medium">
                    Manara Plaza Resort
                  </span>
                  <button
                    onClick={onOpenReservation}
                    className="text-xs font-bold uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-1 group-hover:translate-x-1 duration-200"
                  >
                    <span>Connect</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Code2, Palette, TrendingUp, ArrowRight } from 'lucide-react';
import { CORE_PILLARS } from '../data/agencyData';

const iconMap = {
  Code2: Code2,
  Palette: Palette,
  TrendingUp: TrendingUp,
};

export default function Pillars({ onSelectPillar }) {
  return (
    <section className="py-20 bg-dark-900/60 border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
              The Three Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-syne font-bold text-white mt-2">
              Everything Your Business Needs to Thrive Digitally.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md mt-4 md:mt-0 text-sm">
            We bridge the gap between creative design, modern web engineering, and aggressive business growth.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Code2;
            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl bg-dark-850/90 border border-neutral-800 p-8 hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-1.5 shadow-card-dark flex flex-col justify-between"
              >
                {/* Top glow accent */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold-400/0 to-transparent group-hover:via-gold-400/80 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-dark-800 border border-neutral-700/60 flex items-center justify-center text-gold-accent group-hover:bg-gold-500/10 group-hover:border-gold-400/40 transition-colors">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-syne font-extrabold text-neutral-700 group-hover:text-gold-500/40 transition-colors">
                      {pillar.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-syne font-bold text-white group-hover:text-gold-light transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-accent uppercase tracking-wider mt-1 mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-800">
                    {pillar.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-dark-950 text-neutral-300 border border-neutral-800 group-hover:border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#services"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-gold-accent hover:text-white uppercase tracking-wider group-hover:translate-x-1 transition-all"
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white">
            Built on Trust. Proven by Results.
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Hear what our clients and partners say about our design standards and seamless execution.
          </p>
        </div>

        {/* Testimonials 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-dark-900/90 border border-neutral-800 p-8 sm:p-10 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1 shadow-card-dark flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-6 text-gold-accent">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-gold-500/20 mb-3" />

                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic mb-8 font-light">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-amber-600 p-0.5 shadow-sm">
                  <div className="w-full h-full rounded-full bg-dark-950 flex items-center justify-center font-syne font-bold text-sm text-gold-accent">
                    {t.clientName.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-syne font-bold text-white">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {t.role}, <span className="text-gold-accent">{t.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST, AGENCY_INFO } from '../data/agencyData';

export default function ServicesList() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Video', 'AI & Innovation', 'Creative'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4">
          <span>Our Capabilities</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-syne font-extrabold text-white">
          Complete Digital & Creative{' '}
          <span className="block mt-1 gold-text-gradient">Services.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          From full-stack web platforms and signature branding to cinematic video editing and AI business solutions, explore our 13 specialized service offerings.
        </p>

        {/* Category Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-400 text-dark-950 font-bold shadow-gold-glow'
                  : 'bg-dark-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="rounded-3xl bg-dark-900 border border-neutral-800 p-8 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1 shadow-card-dark flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-400/10 text-gold-accent border border-gold-400/30">
                    {svc.category}
                  </span>
                  <span className="text-xs text-neutral-400">{svc.timeline}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-syne font-bold text-white group-hover:text-gold-light transition-colors mb-2">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {svc.shortDesc}
                </p>

                {/* Key Deliverables sample */}
                <div className="pt-4 border-t border-neutral-800/80 mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {svc.deliverables.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Bottom */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <Link
                  to={`/services/${svc.id}`}
                  className="text-xs font-bold text-gold-accent hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Detailed Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(`Hi THEVISUAL.IN, I would like to enquire about ${svc.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="mt-20 max-w-5xl mx-auto px-4">
        <div className="p-8 sm:p-10 rounded-3xl bg-dark-850 border border-gold-400/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-syne font-bold text-white">
              Need a Customized Digital Package?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              Combine websites, branding, video editing, and AI into one seamless sprint.
            </p>
          </div>
          <Link
            to="/start-a-project"
            className="px-6 py-3 rounded-xl bg-gold-400 text-dark-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:bg-gold-300 transition-all shrink-0"
          >
            Build Custom Quote ↗
          </Link>
        </div>
      </section>

    </div>
  );
}

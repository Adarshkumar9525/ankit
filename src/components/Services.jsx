import React, { useState } from 'react';
import { Globe, Sparkles, Megaphone, Video, Cpu, CheckCircle2, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICES, AGENCY_INFO } from '../data/agencyData';

const iconMap = {
  Globe: Globe,
  Sparkles: Sparkles,
  Megaphone: Megaphone,
  Video: Video,
  Cpu: Cpu,
};

export default function Services({ onOpenQuoteWithService }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Branding & Design', 'Social Media & Marketing', 'Video Production', 'AI & Automation'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white">
            Bespoke Services Engineered for Impact.
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Every service is executed with deep strategic intent, contemporary aesthetic standards, and cutting-edge digital technology.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-bold shadow-gold-glow'
                  : 'bg-dark-850/80 text-neutral-300 hover:text-white hover:bg-dark-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            const waInquiryUrl = `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(`Hi THEVISUAL.IN, I am interested in your ${service.title} service. Could you share more details and pricing?`)}`;

            return (
              <div
                key={service.id}
                className="rounded-3xl bg-dark-900/90 border border-neutral-800/90 hover:border-gold-400/40 p-8 sm:p-10 transition-all duration-300 hover:shadow-card-dark flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-dark-800 border border-neutral-700/60 flex items-center justify-center text-gold-accent group-hover:bg-gold-500/10 group-hover:border-gold-400/40 transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-400/10 text-gold-accent border border-gold-400/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white group-hover:text-gold-light transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-6 border-t border-neutral-800 mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                      What You Receive:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                          <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Meta & Actions */}
                <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <Clock className="w-4 h-4 text-gold-accent" />
                    <span>Turnaround: <strong className="text-neutral-200">{service.timeline}</strong></span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={waInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition-colors"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onOpenQuoteWithService(service.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold-400/10 hover:bg-gold-400 text-gold-accent hover:text-dark-950 border border-gold-400/40 text-xs font-bold transition-all duration-200"
                    >
                      <span>Get Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play, Sparkles, ExternalLink } from 'lucide-react';
import { PORTFOLIO_LIST } from '../data/agencyData';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Websites', 'Branding', 'Video Production'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_LIST
    : PORTFOLIO_LIST.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#08080B] text-white relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio & Live Work</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
              Our Work & <span className="gold-text-gradient">Client Deliverables.</span>
            </h2>
            <p className="mt-3 text-neutral-400 text-sm max-w-lg leading-relaxed font-light">
              Explore our live commercial client platforms, responsive digital systems, brand identities, and high-impact social video reels.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#111218] border border-white/10 self-start lg:self-end">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'text-neutral-950 shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
                style={
                  activeFilter === filter
                    ? { background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)' }
                    : {}
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-[#0F1015] border border-white/10 hover:border-gold-400/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1015] via-[#0F1015]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Corner Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md border ${
                    !item.isConcept
                      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                      : 'bg-black/70 text-[#E5BD70] border-gold-400/30'
                  }`}>
                    {item.badge}
                  </span>

                  {item.liveUrl ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-[#E5BD70] hover:text-black flex items-center justify-center transition-all duration-300 shadow z-10"
                      title="Visit Live"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={`/portfolio/${item.id}`}
                      className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-[#E5BD70] hover:text-black flex items-center justify-center transition-all duration-300 shadow z-10"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                {/* Video Play Overlay */}
                {item.hasPlay && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-black ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-6">
                <span className="text-[11px] font-semibold text-[#E5BD70] uppercase tracking-wider block mb-1">
                  {item.categoryLabel || item.tag}
                </span>
                <Link to={`/portfolio/${item.id}`}>
                  <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#E5BD70] transition-colors mb-2">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light line-clamp-2">
                  {item.description || item.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <Link
                    to={`/portfolio/${item.id}`}
                    className="text-neutral-400 hover:text-white font-medium transition-colors"
                  >
                    View Case Study
                  </Link>
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E5BD70] hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>Live Link</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all hover:scale-[1.02]"
          >
            <span>View Full Portfolio & Case Studies</span>
            <ArrowRight className="w-4 h-4 text-[#E5BD70]" />
          </Link>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Tag } from 'lucide-react';
import { PORTFOLIO_LIST } from '../data/agencyData';

export default function PortfolioList() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Websites', 'Branding', 'Video Production', 'AI Content', 'Digital Campaigns'];

  const filtered = selectedCategory === 'All'
    ? PORTFOLIO_LIST
    : PORTFOLIO_LIST.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4">
          <span>Our Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-syne font-extrabold text-white">
          Selected Works &{' '}
          <span className="gold-text-gradient">Case Studies.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          Explore our visual identities, responsive web platforms, commercial videos, and AI creative executions.
        </p>

        {/* Categories */}
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

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.id}`}
              className="group rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-card-dark flex flex-col justify-between block"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dark-950/80 text-gold-accent border border-gold-400/30 backdrop-blur-md">
                      {item.categoryLabel}
                    </span>
                    {item.isConcept && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-neutral-900/80 text-neutral-300 border border-neutral-700 backdrop-blur-md">
                        Concept Work
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-syne font-bold text-white group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gold-accent font-semibold mt-0.5 mb-3">
                    {item.type}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400">View Deliverables</span>
                <span className="text-gold-accent font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Case Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Concept Disclaimer Note */}
      <div className="mt-16 text-center max-w-xl mx-auto px-4">
        <p className="text-xs text-neutral-500">
          *In alignment with professional transparency, projects created as design explorations or conceptual prototypes are explicitly labeled as <em>Concept Work</em>.
        </p>
      </div>

    </div>
  );
}

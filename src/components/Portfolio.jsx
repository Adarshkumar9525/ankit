import React, { useState } from 'react';
import { ExternalLink, X, ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { PORTFOLIO_PROJECTS, AGENCY_INFO } from '../data/agencyData';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = ['All', 'Web Development', 'Branding', 'Video & Motion', 'Social Media', 'AI & Solutions'];

  const filteredProjects = selectedFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="portfolio" className="py-24 bg-dark-900/50 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white mt-2">
              Featured Case Studies & Concepts.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md mt-4 md:mt-0 text-sm">
            A curation of bespoke websites, iconic visual brands, commercial videos, and AI creative executions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === filter
                  ? 'bg-gold-400 text-dark-950 font-bold shadow-gold-glow'
                  : 'bg-dark-850 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer rounded-2xl bg-dark-850/90 border border-neutral-800/90 overflow-hidden hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-dark flex flex-col justify-between"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-dark-950/80 backdrop-blur-md text-gold-accent border border-gold-400/30">
                    {project.categoryTag}
                  </span>
                </div>

                {/* View Case Study pill */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-400 text-dark-950 text-xs font-bold shadow-gold-glow">
                    <span>View Case</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-syne font-bold text-white group-hover:text-gold-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gold-accent font-medium mt-1 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.stats}</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-dark-850 via-dark-800 to-dark-850 border border-gold-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-syne font-bold text-white">
              Have a custom project in mind?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              We create custom prototypes and tailored proposals tailored to your unique requirements.
            </p>
          </div>
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gold-400 text-dark-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:bg-gold-300 transition-all shrink-0"
          >
            Discuss on WhatsApp ↗
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-dark-900 border border-gold-400/30 rounded-3xl p-6 sm:p-8 shadow-card-dark text-left">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-dark-800 text-neutral-400 hover:text-white border border-neutral-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 relative">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-dark-950/90 text-gold-accent border border-gold-400/40">
                  {activeModalProject.categoryTag}
                </span>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white">
              {activeModalProject.title}
            </h3>
            <p className="text-sm font-semibold text-gold-accent mt-1 mb-4">
              {activeModalProject.tagline}
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-light">
              {activeModalProject.description}
            </p>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 mb-6">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                Verified Outcome
              </span>
              <p className="text-sm text-emerald-200 font-medium">
                {activeModalProject.stats}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                Scope & Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalProject.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA in Modal */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Want a similar solution for your brand?
              </span>
              <a
                href={`https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(`Hi THEVISUAL.IN, I saw your case study on ${activeModalProject.title} and would love to build something similar.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-bold text-sm shadow-gold-glow flex items-center gap-2"
              >
                <span>Inquire for Similar Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

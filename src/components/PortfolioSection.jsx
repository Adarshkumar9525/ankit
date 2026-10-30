import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play, Sparkles } from 'lucide-react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Websites', 'Branding', 'Social Media', 'Video Production', 'AI Content'];

  const projects = [
    {
      id: 'luxury-travel-portal',
      title: 'Voyage Luxe Global',
      category: 'Websites',
      tag: 'Website Development',
      badge: 'Client Project',
      image: '/images/project-travel-hd.jpg',
      desc: 'High-speed bespoke luxury travel booking and curation experience with dynamic itinerary builder.',
    },
    {
      id: 'aurora-fashion-ecommerce',
      title: 'Aura Maison Apparel',
      category: 'Websites',
      tag: 'E-Commerce Platform',
      badge: 'Design Exploration',
      image: '/images/project-fashion-hd.jpg',
      desc: 'Editorial fashion web store with fluid lookbooks, interactive sizing calculators, and smooth checkout.',
    },
    {
      id: 'gourmet-restaurant-branding',
      title: 'Solstice Dining Club',
      category: 'Branding',
      tag: 'Brand Identity & Print',
      badge: 'Client Project',
      image: '/images/project-gourmet-hd.jpg',
      desc: 'Complete fine-dining visual identity system, embossed stationery, typography guide, and digital menu.',
    },
    {
      id: 'apex-fitness-campaign',
      title: 'Apex Athletic Club',
      category: 'Social Media',
      tag: 'Social Media Growth',
      badge: 'Client Project',
      image: '/images/project-fitness-hd.jpg',
      hasPlay: true,
      desc: 'High-energy organic reel campaign, transformation storytelling, and targeted member acquisition.',
    },
    {
      id: 'skyline-architecture-identity',
      title: 'Monolith Architecture',
      category: 'Branding',
      tag: 'Corporate Identity',
      badge: 'Design Exploration',
      image: '/images/project-architecture-hd.jpg',
      desc: 'Minimalist brand system for modern architects featuring geometric vector marks and portfolio curation.',
    },
    {
      id: 'fintech-saas-dashboard',
      title: 'Nova Financial Suite',
      category: 'Websites',
      tag: 'Fintech Platform & UI',
      badge: 'Design Exploration',
      image: '/images/project-fintech-hd.jpg',
      desc: 'Next-generation web application interface for real-time portfolio management and crypto tracking.',
    },
    {
      id: 'aurora-perfume-packaging',
      title: 'Elysian Fragrances',
      category: 'Branding',
      tag: 'Luxury Packaging',
      badge: 'Design Exploration',
      image: '/images/project-perfume-hd.jpg',
      desc: 'Sensory luxury packaging design, glass bottle 3D mockup, and tactile box embossing specifications.',
    },
    {
      id: 'solaris-music-festival',
      title: 'Solaris Sound Festival',
      category: 'Video Production',
      tag: 'Cinematic Reel & Film',
      badge: 'Client Project',
      image: '/images/project-festival-hd.jpg',
      hasPlay: true,
      desc: 'Fast-paced event recap reel with customized sound design, typography sync, and vibrant color grade.',
    },
    {
      id: 'ai-synthesized-creative',
      title: 'Synthetic Fashion Visuals',
      category: 'AI Content',
      tag: 'AI-Generated Campaign',
      badge: 'AI Exploration',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      desc: 'Generative media explorations combining synthetic high-fashion models with surreal architectural backdrops.',
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
              Our Work & <span className="gold-text-gradient">Design Explorations.</span>
            </h2>
            <p className="mt-3 text-neutral-400 text-sm max-w-lg leading-relaxed font-light">
              A curated selection of our commercial client deliverables and conceptual design explorations across digital touchpoints.
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
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#E5BD70] border border-gold-400/30">
                    {item.badge}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white group-hover:bg-[#E5BD70] group-hover:text-black flex items-center justify-center transition-all duration-300 shadow">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
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
                  {item.tag}
                </span>
                <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#E5BD70] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {item.desc}
                </p>
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

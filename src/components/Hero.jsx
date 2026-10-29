import React from 'react';
import { ArrowUpRight, Sparkles, MessageCircle, ShieldCheck, Zap, Award, Layers } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden transition-opacity duration-1000 animate-in fade-in"
      style={{
        backgroundImage: "url('/images/gold-abstract.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Subtle black gradient overlay ensuring text readability while keeping gold light trails striking */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-950/60 to-dark-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(7,7,9,0.75)_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full gold-badge backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-gold-accent">
              Your Complete Digital & Creative Partner
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-extrabold tracking-tight leading-[1.08] text-white">
            Ideas into Digital.{' '}
            <span className="block mt-2 gold-text-gradient">
              We Build. We Create. We Grow.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
            From your signature brand identity to high-converting modern websites, cinematic video campaigns, and AI-powered business automations.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-950 font-syne font-bold text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <a
              href="#portfolio"
              className="px-8 py-4 rounded-xl bg-dark-850 hover:bg-dark-800 text-white font-medium text-base border border-neutral-700/60 hover:border-gold-400/50 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Our Work</span>
            </a>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-medium text-base border border-emerald-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Dedicated Visual Showcase Frame */}
          <div className="mt-12 sm:mt-16 relative rounded-3xl overflow-hidden border border-gold-400/40 shadow-card-dark aspect-[16/9] sm:aspect-[21/9] group bg-dark-900">
            <img
              src="/images/ai-installation.jpg"
              alt="THEVISUAL.IN Creative Technology & AI Art Installation"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950/40 via-transparent to-dark-950/40 pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-wrap items-center justify-between gap-4 z-10 text-left">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold block mb-1">
                  Creative Technology & AI Innovation
                </span>
                <h3 className="text-xl sm:text-2xl font-syne font-bold text-white">
                  Ideas into Digital.
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 bg-dark-950/85 backdrop-blur-md px-4 py-2 rounded-xl border border-gold-400/30 shadow-lg">
                <span className="text-gold-accent font-bold">13 Specialized Capabilities</span>
                <span>•</span>
                <span>Direct Founder Access (Ankit)</span>
              </div>
            </div>
          </div>

          {/* Target Customers Strip from Brochure */}
          <div className="mt-12 pt-8 border-t border-neutral-800/60">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Trusted by Ambitious Brands Across Diverse Industries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-300">
              {['Startups', 'Retail & E-commerce', 'Real Estate', 'Healthcare & Clinics', 'Creators & Influencers', 'Modern Enterprises'].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-dark-850/80 border border-neutral-800/80 hover:border-gold-400/30 transition-colors"
                >
                  ✦ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Agency Statistics Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-dark-900/80 border border-neutral-800 hover:border-gold-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 text-gold-accent mb-2">
              <Zap className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Turnaround</span>
            </div>
            <div className="text-2xl sm:text-3xl font-syne font-bold text-white">7–14 Days</div>
            <p className="text-xs text-neutral-400 mt-1">Rapid, uncompromising delivery</p>
          </div>

          <div className="p-5 rounded-2xl bg-dark-900/80 border border-neutral-800 hover:border-gold-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 text-gold-accent mb-2">
              <Layers className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Synergy</span>
            </div>
            <div className="text-2xl sm:text-3xl font-syne font-bold text-white">Full-Stack</div>
            <p className="text-xs text-neutral-400 mt-1">Web, Brand, Video & AI all-in-one</p>
          </div>

          <div className="p-5 rounded-2xl bg-dark-900/80 border border-neutral-800 hover:border-gold-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 text-gold-accent mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Satisfaction</span>
            </div>
            <div className="text-2xl sm:text-3xl font-syne font-bold text-white">99.8%</div>
            <p className="text-xs text-neutral-400 mt-1">Pixel-perfect revisions guaranteed</p>
          </div>

          <div className="p-5 rounded-2xl bg-dark-900/80 border border-neutral-800 hover:border-gold-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 text-gold-accent mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Direct Access</span>
            </div>
            <div className="text-2xl sm:text-3xl font-syne font-bold text-white">Founder Led</div>
            <p className="text-xs text-neutral-400 mt-1">Direct communication with Ankit</p>
          </div>
        </div>

      </div>
    </section>
  );
}

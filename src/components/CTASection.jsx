import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function CTASection({ onOpenQuoteModal }) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#060709] text-white overflow-hidden border-b border-white/5">
      {/* Intense centered golden radial atmospheric glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(229,189,112,0.12) 0%, rgba(213,175,99,0.04) 50%, transparent 75%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Decorative Gold Sparkles / Particles */}
      <div className="absolute top-12 left-1/4 w-2 h-2 rounded-full bg-[#E5BD70] opacity-40 blur-[1px] animate-pulse" />
      <div className="absolute bottom-16 right-1/4 w-3 h-3 rounded-full bg-[#E5BD70] opacity-30 blur-[2px] animate-pulse" />
      <div className="absolute top-1/3 right-1/6 w-1.5 h-1.5 rounded-full bg-white opacity-50" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Gold Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Transformation</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.08] mb-6">
          READY TO BUILD <br />
          <span className="gold-text-gradient">SOMETHING GREAT?</span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Let's turn your next idea into a powerful digital experience with creative design, modern technology, and direct founder collaboration.
        </p>

        {/* Two CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 rounded-full text-neutral-950 font-extrabold text-sm tracking-wide shadow-xl hover:shadow-2xl hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
              boxShadow: '0 10px 30px rgba(229,189,112,0.3)'
            }}
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 font-bold text-sm border border-emerald-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] flex items-center gap-3 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Trust Note */}
        <div className="mt-12 flex items-center justify-center gap-8 text-xs text-neutral-400">
          <span>✓ Direct Founder Response</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Custom Strategy & Scope</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Clear Delivery Milestones</span>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ onOpenQuoteModal }) {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Creative Direction',
      desc: 'Distinctive visual storytelling that separates your brand from competitors.'
    },
    {
      icon: Cpu,
      title: 'Modern Technology',
      desc: 'High-speed React web stacks, clean code, and scalable architecture.'
    },
    {
      icon: Layers,
      title: 'End-to-End Solutions',
      desc: 'From initial identity to live web apps, reels, and digital advertising.'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Driven',
      desc: 'Conversion-optimized user funnels designed to produce tangible inquiries.'
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#08080B] text-neutral-100 overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About THEVISUALS.IN</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-5xl text-white leading-[1.12] tracking-tight">
            We Combine <span className="gold-text-gradient">Artistry</span> with Modern Engineering.
          </h2>
        </div>

        {/* Two-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Creative Workspace Photography with Gold Border Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold-400/20 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80" 
                alt="THEVISUALS.IN Creative Team Collaboration and Design Sprint" 
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080B] via-[#08080B]/30 to-transparent" />
              
              {/* Floating overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0F1015]/90 backdrop-blur-xl border border-gold-400/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/20 flex items-center justify-center text-[#E5BD70] font-syne font-bold">
                    V
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-sm text-white">Direct Founder Collaboration</h4>
                    <p className="text-xs text-neutral-400">Led by Ankit • Focused on quality, speed, and clear communication</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Corner Element */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#E5BD70] rounded-tr-2xl pointer-events-none opacity-60" />
          </div>

          {/* Right Column: Company Overview & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white leading-snug">
              Your Complete Digital & Creative Partner.
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              THEVISUALS.IN was founded with a singular purpose: to replace fragmented, slow agency models with a unified powerhouse for creative design, modern web development, and digital marketing.
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed">
              We work collaboratively with forward-thinking businesses, ambitious startups, and retail brands to build digital assets that look extraordinary and function seamlessly. We focus on real craft, sensible architecture, and continuous performance.
            </p>

            {/* 2x2 Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={item.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold-400/30 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold-400/10 flex items-center justify-center text-[#E5BD70] mb-3">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="font-syne font-bold text-sm text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/20 transition-all"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-neutral-950 font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
                }}
              >
                <span>Work with Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

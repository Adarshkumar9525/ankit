import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  MessageCircle 
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { 
  NikeLogo, 
  ZomatoLogo, 
  BoatLogo, 
  AjioLogo, 
  SpotifyLogo, 
  SnapdealLogo, 
  BharatPeLogo 
} from '../components/Icons';

// Section Components
import MovingStrip from '../components/MovingStrip';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TechStackSection from '../components/TechStackSection';
import EngagementModels from '../components/EngagementModels';
import WhyChooseSection from '../components/WhyChooseSection';
import DigitalSolutions from '../components/DigitalSolutions';
import IndustriesSection from '../components/IndustriesSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

// Hook: Respect prefers-reduced-motion
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

// Interactive Word Component — magnetic hover + gold shimmer + subtle scale
function InteractiveWord({ children, className = '', delay = 0, goldAccent = false }) {
  const wordRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = useCallback((e) => {
    if (reducedMotion) return;
    if (!wordRef.current) return;
    const rect = wordRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Magnetic pull — max 6px offset
    const dx = (e.clientX - centerX) * 0.08;
    const dy = (e.clientY - centerY) * 0.08;
    const maxPull = 6;
    setOffset({
      x: Math.max(-maxPull, Math.min(maxPull, dx)),
      y: Math.max(-maxPull, Math.min(maxPull, dy))
    });
  }, [reducedMotion]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <span
      ref={wordRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hero-interactive-word inline-block cursor-default ${goldAccent ? 'hero-word-gold' : 'hero-word-white'} ${className}`}
      style={{
        transform: reducedMotion
          ? 'none'
          : `translate(${offset.x}px, ${offset.y}px) scale(${isHovering ? 1.06 : 1})`,
        transition: isHovering
          ? 'transform 0.15s ease-out'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </span>
  );
}

export default function Home({ onOpenQuoteModal }) {
  return (
    <div className="bg-[#070709] text-neutral-100 overflow-x-hidden selection:bg-gold-400 selection:text-black">
      
      {/* ========================================================
          SECTION 01: HERO SECTION WITH FULL-SCREEN BACKGROUND IMAGE
          ======================================================== */}
      <section 
        id="hero" 
        className="relative z-0 min-h-[92vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          isolation: 'isolate',
          backgroundImage: "url('/images/hero-bg-workspace.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Cinematic Gradient Overlay (45%–60% opacity with smooth edge feathering) */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: 'linear-gradient(180deg, rgba(7, 7, 9, 0.68) 0%, rgba(7, 7, 9, 0.50) 45%, rgba(7, 7, 9, 0.72) 80%, rgba(7, 7, 9, 0.96) 100%)',
          }}
        />

        {/* Subtle Radial Golden Atmospheric Lighting for depth */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(229, 189, 112, 0.10) 0%, rgba(7, 7, 9, 0.35) 55%, rgba(7, 7, 9, 0.70) 100%)',
          }}
        />

        {/* Soft atmospheric centered background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gold-400/10 rounded-full blur-[170px] pointer-events-none" />

        {/* Top and Bottom Feathering / Vignette */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#070709]/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#070709] to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Category Tagline */}
          <div className="flex items-center justify-center mb-6 hero-fade-tagline">
            <span className="text-xs uppercase font-semibold tracking-[0.24em] text-neutral-300 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15 shadow-lg">
              CREATIVE &nbsp;|&nbsp; DIGITAL &nbsp;|&nbsp; TECHNOLOGY &nbsp;|&nbsp; GROWTH
            </span>
          </div>

          {/* Main Headline: WE BUILD. WE CREATE. WE GROW. (Using clamp() for fluid typography) */}
          <h1 className="font-syne font-extrabold text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.05] tracking-tight text-white max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            <span className="block overflow-hidden pb-1">
              <span className="hero-reveal-line-1 flex justify-center gap-[0.25em]">
                <InteractiveWord delay={0.12}>WE</InteractiveWord>
                <InteractiveWord delay={0.18}>BUILD.</InteractiveWord>
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-reveal-line-2 flex justify-center gap-[0.25em]">
                <InteractiveWord delay={0.28}>WE</InteractiveWord>
                <InteractiveWord delay={0.34}>CREATE.</InteractiveWord>
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-reveal-line-3 flex justify-center gap-[0.25em]">
                <InteractiveWord delay={0.44}>WE</InteractiveWord>
                <InteractiveWord delay={0.5} goldAccent>GROW.</InteractiveWord>
              </span>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-7 text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] hero-fade-subheading">
            We transform ideas into powerful digital experiences through creative design, modern technology, and intelligent solutions.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 hero-fade-actions">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-full text-neutral-950 font-extrabold text-sm tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5"
              style={{
                background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
                boxShadow: '0 8px 30px rgba(229,189,112,0.35)'
              }}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href="#portfolio"
              className="px-7 py-4 rounded-full bg-black/40 hover:bg-black/60 text-white font-medium text-sm border border-white/30 hover:border-white/60 backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 shadow-lg hover:scale-[1.03]"
            >
              <span>Explore Our Work</span>
              <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
              </div>
            </a>
          </div>

          {/* Social Proof: 100+ Brands Trust Us */}
          <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-4 hero-fade-social">
            <div className="inline-flex items-center gap-4 bg-black/45 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-1.jpg"
                  alt="Brand Partner"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-2.jpg"
                  alt="Brand Partner"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-3.jpg"
                  alt="Brand Partner"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-4.jpg"
                  alt="Brand Partner"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-5.jpg"
                  alt="Brand Partner"
                />
              </div>
              <div className="text-left">
                <span className="font-syne font-bold text-white text-sm block leading-none">
                  100+
                </span>
                <span className="text-[11px] text-neutral-300 font-medium">
                  Brands Trust Us
                </span>
              </div>
            </div>
          </div>

          {/* Trust Metric Counters Row (NBT Reference UX with backdrop glass card) */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto text-center bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 shadow-2xl">
            <div>
              <span className="font-syne font-black text-2xl sm:text-3xl text-[#E5BD70] block leading-none drop-shadow">
                100+
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-300 font-semibold block mt-1.5">
                Projects Delivered
              </span>
            </div>
            <div>
              <span className="font-syne font-black text-2xl sm:text-3xl text-white block leading-none drop-shadow">
                99%
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-300 font-semibold block mt-1.5">
                Client Satisfaction
              </span>
            </div>
            <div>
              <span className="font-syne font-black text-2xl sm:text-3xl text-[#E5BD70] block leading-none drop-shadow">
                7–14d
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-300 font-semibold block mt-1.5">
                Fast Turnaround
              </span>
            </div>
            <div>
              <span className="font-syne font-black text-2xl sm:text-3xl text-white block leading-none drop-shadow">
                24/7
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-300 font-semibold block mt-1.5">
                Direct Founder Care
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 02: MOVING SERVICES STRIP (MARQUEE)
          ======================================================== */}
      <MovingStrip />


      {/* ========================================================
          SECTION 03: TRUSTED BY BUSINESSES ACROSS INDUSTRIES
          ======================================================== */}
      <section className="bg-[#0B0C10] text-neutral-300 border-b border-white/5 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Left Tag */}
            <div className="flex items-center gap-2 shrink-0 md:pr-8 md:border-r md:border-white/10">
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">
                TRUSTED BY BUSINESSES ACROSS INDUSTRIES
              </span>
            </div>

            {/* Client Brand Logos */}
            <div className="flex items-center justify-between md:justify-around flex-wrap gap-6 sm:gap-8 flex-1 text-neutral-500">
              <div className="hover:text-white transition-colors cursor-pointer">
                <NikeLogo className="h-5 w-auto" />
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                <ZomatoLogo className="text-xl" />
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                <BoatLogo className="text-xl" />
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                <AjioLogo className="text-base" />
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                <SpotifyLogo className="text-sm" />
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                <SnapdealLogo className="text-sm" />
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                <BharatPeLogo className="text-sm" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 04: ABOUT THEVISUALS.IN
          ======================================================== */}
      <AboutSection onOpenQuoteModal={onOpenQuoteModal} />


      {/* ========================================================
          SECTION 05: SERVICES GRID (9 CORE CAPABILITIES)
          ======================================================== */}
      <ServicesSection />


      {/* ========================================================
          SECTION 06: TECHNOLOGIES & TOOLS (NBT REFERENCE UX)
          ======================================================== */}
      <TechStackSection onOpenQuoteModal={onOpenQuoteModal} />


      {/* ========================================================
          SECTION 07: INTELLIGENT DIGITAL SOLUTIONS
          ======================================================== */}
      <DigitalSolutions onOpenQuoteModal={onOpenQuoteModal} />


      {/* ========================================================
          SECTION 08: INDUSTRIES WE SERVE (8 SECTORS)
          ======================================================== */}
      <IndustriesSection onOpenQuoteModal={onOpenQuoteModal} />


      {/* ========================================================
          SECTION 09: OUR WORK / PORTFOLIO (FILTER TABS & CARDS)
          ======================================================== */}
      <PortfolioSection />


      {/* ========================================================
          SECTION 10: ENGAGEMENT & COLLABORATION MODELS (NBT UX)
          ======================================================== */}
      <EngagementModels onOpenQuoteModal={onOpenQuoteModal} />


      {/* ========================================================
          SECTION 11: WHY CHOOSE THEVISUALS.IN (01 TO 06 BENEFITS)
          ======================================================== */}
      <WhyChooseSection />


      {/* ========================================================
          SECTION 12: OUR 6-STEP PROCESS (HORIZONTAL / VERTICAL TIMELINE)
          ======================================================== */}
      <ProcessSection />


      {/* ========================================================
          SECTION 13: TESTIMONIALS & TRUST CAROUSEL
          ======================================================== */}
      <TestimonialsSection />


      {/* ========================================================
          SECTION 14: FINAL FULL-WIDTH CALL TO ACTION
          ======================================================== */}
      <CTASection onOpenQuoteModal={onOpenQuoteModal} />


      {/* ========================================================
          SECTION 15: DIRECT INQUIRY & CONTACT SECTION
          ======================================================== */}
      <ContactSection />

    </div>
  );
}

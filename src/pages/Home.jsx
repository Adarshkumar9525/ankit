import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  MessageCircle 
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

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
          SECTION 01: CINEMATIC HORIZONTAL HERO SECTION
          ======================================================== */}
      <section 
        id="hero" 
        className="relative z-0 min-h-[92vh] lg:min-h-[96vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-cover bg-no-repeat"
        style={{ 
          isolation: 'isolate',
          backgroundImage: "url('/images/hero-bg-workspace.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Directional Horizontal Dark Gradient Overlay: Deep black on the left, clear on the right */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: 'linear-gradient(to right, rgba(7, 7, 9, 0.96) 0%, rgba(7, 7, 9, 0.90) 38%, rgba(7, 7, 9, 0.55) 65%, rgba(7, 7, 9, 0.15) 100%)',
          }}
        />

        {/* Top & Bottom Vignettes for Smooth Transitions */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#070709]/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#070709] to-transparent pointer-events-none" />

        {/* Soft atmospheric golden glow blob on left */}
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl text-left pt-4 lg:pt-0">
            
            {/* Category Tagline */}
            <div className="flex items-center gap-2 mb-6 hero-fade-tagline">
              <span className="text-xs uppercase font-semibold tracking-[0.24em] text-neutral-400">
                CREATIVE &nbsp;|&nbsp; MARKETING &nbsp;|&nbsp; DIGITAL &nbsp;|&nbsp; GROWTH
              </span>
            </div>

            {/* Main Headline: WE CREATE / BRANDS THAT / GROW. */}
            <h1 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-[68px] leading-[1.04] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              <span className="block overflow-hidden pb-1">
                <span className="hero-reveal-line-1 flex gap-[0.25em]">
                  <InteractiveWord delay={0.12}>WE</InteractiveWord>
                  <InteractiveWord delay={0.18}>CREATE</InteractiveWord>
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-reveal-line-2 flex gap-[0.25em]">
                  <InteractiveWord delay={0.28}>BRANDS</InteractiveWord>
                  <InteractiveWord delay={0.34}>THAT</InteractiveWord>
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-reveal-line-3 flex gap-[0.25em]">
                  <InteractiveWord delay={0.44} goldAccent>GROW.</InteractiveWord>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-lg hero-fade-subheading">
              Strategy. Design. Content. Technology.<br />
              Everything your brand needs — in one place.
            </p>

            {/* Action Buttons: Get a Quote → and Our Work */}
            <div className="mt-8 flex flex-wrap items-center gap-4 hero-fade-actions">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-3.5 rounded-full text-neutral-950 font-extrabold text-sm tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5"
                style={{
                  background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
                  boxShadow: '0 8px 25px rgba(229,189,112,0.25)'
                }}
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="#portfolio"
                className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/25 hover:border-white/50 backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 shadow-md hover:scale-[1.02]"
              >
                <span>Our Work</span>
                <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                </div>
              </a>
            </div>

            {/* Social Proof: 100+ Brands Trust Us */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4 hero-fade-social">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-1.jpg"
                  alt="Brand Partner"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-2.jpg"
                  alt="Brand Partner"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-3.jpg"
                  alt="Brand Partner"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-4.jpg"
                  alt="Brand Partner"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0C0D0E] object-cover"
                  src="/images/avatar-5.jpg"
                  alt="Brand Partner"
                />
              </div>
              <div>
                <span className="font-syne font-bold text-white text-base block leading-none">
                  100+
                </span>
                <span className="text-xs text-neutral-400 font-medium">
                  Brands Trust Us
                </span>
              </div>
            </div>

            {/* Trust Metric Counters Row */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <span className="font-syne font-black text-2xl sm:text-3xl text-[#E5BD70] block leading-none">
                  100+
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mt-1.5">
                  Projects Delivered
                </span>
              </div>
              <div>
                <span className="font-syne font-black text-2xl sm:text-3xl text-white block leading-none">
                  99%
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mt-1.5">
                  Client Satisfaction
                </span>
              </div>
              <div>
                <span className="font-syne font-black text-2xl sm:text-3xl text-[#E5BD70] block leading-none">
                  7–14d
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mt-1.5">
                  Fast Turnaround
                </span>
              </div>
              <div>
                <span className="font-syne font-black text-2xl sm:text-3xl text-white block leading-none">
                  24/7
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mt-1.5">
                  Direct Founder Care
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Right: Scroll to explore with animated arrow */}
        <a 
          href="#services"
          className="absolute bottom-6 right-6 lg:bottom-8 lg:right-10 z-20 hidden sm:inline-flex items-center gap-2 text-[11px] tracking-widest uppercase font-bold text-neutral-300 hover:text-white bg-black/60 hover:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold-400/30 hover:border-gold-400/60 shadow-xl transition-all hover:scale-[1.03] group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E5BD70] group-hover:translate-x-1 transition-transform" />
        </a>
      </section>


      {/* ========================================================
          SECTION 02: MOVING SERVICES STRIP (MARQUEE)
          ======================================================== */}
      <MovingStrip />


      {/* ========================================================
          SECTION 03: ABOUT THEVISUALS.IN
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

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
  // Subtle 3D Mouse Tilt State & Handler for Showcase on Desktop
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const showcaseRef = useRef(null);

  const handlePointerMove = (e) => {
    // Only track real desktop mouse pointers (disable for touch/pen devices)
    if (e.pointerType !== 'mouse') return;

    // Respect user's prefers-reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (!showcaseRef.current) return;
    const rect = showcaseRef.current.getBoundingClientRect();
    
    // Normalized coordinates from -1 to 1
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    // Maximum rotation of approximately 3 degrees
    const maxTilt = 3;
    const rotateX = Math.max(-maxTilt, Math.min(maxTilt, -y * maxTilt));
    const rotateY = Math.max(-maxTilt, Math.min(maxTilt, x * maxTilt));

    setTilt({ rotateX, rotateY });
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div className="bg-[#070709] text-neutral-100 overflow-x-hidden selection:bg-gold-400 selection:text-black">
      
      {/* ========================================================
          SECTION 01: HERO SECTION
          ======================================================== */}
      <section 
        id="hero" 
        className="relative z-0 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-r from-[#070709] via-[#0B0C0E] to-[#121316]"
        style={{ isolation: 'isolate' }}
      >
        {/* Soft atmospheric background glow */}
        <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Typography, Tagline, CTAs, Avatars */}
            <div className="lg:col-span-6 xl:col-span-6 pt-4 lg:pt-0">
              
              {/* Category Tagline */}
              <div className="flex items-center gap-2 mb-6 hero-fade-tagline">
                <span className="text-xs uppercase font-semibold tracking-[0.24em] text-neutral-400">
                  CREATIVE &nbsp;|&nbsp; DIGITAL &nbsp;|&nbsp; TECHNOLOGY &nbsp;|&nbsp; GROWTH
                </span>
              </div>

              {/* Main Headline: WE BUILD. WE CREATE. WE GROW. */}
              <h1 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-[68px] leading-[1.04] tracking-tight text-white">
                <span className="block overflow-hidden pb-1">
                  <span className="hero-reveal-line-1 flex gap-[0.25em]">
                    <InteractiveWord delay={0.12}>WE</InteractiveWord>
                    <InteractiveWord delay={0.18}>BUILD.</InteractiveWord>
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="hero-reveal-line-2 flex gap-[0.25em]">
                    <InteractiveWord delay={0.28}>WE</InteractiveWord>
                    <InteractiveWord delay={0.34}>CREATE.</InteractiveWord>
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="hero-reveal-line-3 flex gap-[0.25em]">
                    <InteractiveWord delay={0.44}>WE</InteractiveWord>
                    <InteractiveWord delay={0.5} goldAccent>GROW.</InteractiveWord>
                  </span>
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-lg hero-fade-subheading">
                We transform ideas into powerful digital experiences through creative design, modern technology, and intelligent solutions.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 hero-fade-actions">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-8 py-3.5 rounded-full text-neutral-950 font-extrabold text-sm tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5"
                  style={{
                    background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
                    boxShadow: '0 8px 25px rgba(229,189,112,0.25)'
                  }}
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <a
                  href="#portfolio"
                  className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/25 hover:border-white/50 backdrop-blur-md transition-all duration-300 flex items-center gap-2.5"
                >
                  <span>Explore Our Work</span>
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

              {/* Trust Metric Counters Row (NBT Reference UX) */}
              <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
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

            {/* Right Column: Visual Setup with 3D Workspace Photo */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              
              {/* Showcase 3D Perspective Wrapper & Mouse Tracker */}
              <div
                ref={showcaseRef}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                className="relative"
                style={{ perspective: '1200px' }}
              >
                {/* Golden Radial Glow */}
                <div 
                  className="absolute -inset-4 sm:-inset-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,_rgba(229,189,112,0.18)_0%,_rgba(213,175,99,0.05)_50%,_transparent_75%)] blur-2xl pointer-events-none hero-glow-pulse -z-10"
                  aria-hidden="true"
                />

                {/* Subtle Desktop 3D Mouse-Tilt Container */}
                <div
                  className="transform-gpu will-change-transform"
                  style={{
                    transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                    transition: isHovered 
                      ? 'transform 0.12s ease-out' 
                      : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Continuous Floating Animation */}
                  <div className="hero-showcase-float">
                    <div className="relative group select-none">
                      {/* Workspace photography with laptop, mug, books, plant & feathered left edge */}
                      <img
                        src="/images/hero-reference-desk-feathered.png"
                        alt="THEVISUALS.™ Creative Workspace Studio with Laptop, Coffee Mug and Brand Books"
                        className="w-full h-auto object-contain object-right drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                        loading="eager"
                      />

                      {/* Bottom Right: Scroll to explore */}
                      <a 
                        href="#services"
                        className="absolute bottom-3 right-3 z-20 hidden sm:flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-bold text-neutral-400 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-400/30 shadow-lg hover:text-white transition-colors"
                      >
                        <span>SCROLL TO EXPLORE</span>
                        <ArrowRight className="w-3 h-3 text-[#E5BD70]" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

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

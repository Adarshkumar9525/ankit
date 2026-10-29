import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  Monitor, 
  PenTool, 
  Video, 
  Palette, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Clock, 
  TrendingUp, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { AGENCY_INFO, PROCESS_STEPS } from '../data/agencyData';
import { 
  InstagramIcon,
  NikeLogo, 
  ZomatoLogo, 
  BoatLogo, 
  AjioLogo, 
  SpotifyLogo, 
  SnapdealLogo, 
  BharatPeLogo 
} from '../components/Icons';

export default function Home({ onOpenQuoteModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

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

  // Service cards matching Section 03 screenshot
  const services = [
    {
      id: 'website-development',
      title: 'Website Development',
      desc: 'Modern, fast & conversion-focused websites',
      icon: Monitor,
      path: '/services/website-development'
    },
    {
      id: 'logo-branding',
      title: 'Logo & Branding',
      desc: 'Unique identity for your business',
      icon: PenTool,
      path: '/services/logo-branding'
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      desc: 'Strategy, content & ads that bring results',
      icon: InstagramIcon,
      path: '/services/social-media-marketing'
    },
    {
      id: 'reel-shoot-video-editing',
      title: 'Reel Shoot & Video Editing',
      desc: 'High-quality videos for your brand',
      icon: Video,
      path: '/services/reel-shoot-video-editing'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      desc: 'Posters, banners, catalogs & more',
      icon: Palette,
      path: '/services/graphic-design'
    },
    {
      id: 'ai-automation-solutions',
      title: 'AI Automation & Solutions',
      desc: 'Automate your business with AI tools',
      icon: Cpu,
      path: '/services/ai-automation-solutions'
    }
  ];

  // High Definition Recent Projects from Unsplash
  const projects = [
    {
      id: 'travel-agency-website',
      category: 'Websites',
      title: 'Website Design',
      client: 'Travel Agency',
      image: '/images/project-travel-hd.jpg',
      hasPlay: false,
      tag: 'Web Design'
    },
    {
      id: 'festive-sale-campaign',
      category: 'Social Media',
      title: 'Social Media',
      client: 'Clothing Brand',
      image: '/images/project-fashion-hd.jpg',
      hasPlay: true,
      tag: 'Festive Campaign'
    },
    {
      id: 'restaurant-menu-design',
      category: 'Graphics',
      title: 'Menu Design',
      client: 'Restaurant',
      image: '/images/project-gourmet-hd.jpg',
      hasPlay: false,
      tag: 'Print & Digital'
    },
    {
      id: 'gym-brand-cinematic-reel',
      category: 'Video Editing',
      title: 'Reel Editing',
      client: 'Gym Brand',
      image: '/images/project-fitness-hd.jpg',
      hasPlay: true,
      tag: 'Cinematic Reel'
    },
    {
      id: 'skyline-real-estate-branding',
      category: 'Branding',
      title: 'Branding',
      client: 'Real Estate',
      image: '/images/project-architecture-hd.jpg',
      hasPlay: false,
      tag: 'Identity Suite'
    },
    {
      id: 'fintech-saas-platform',
      category: 'Websites',
      title: 'SaaS Platform',
      client: 'Fintech Studio',
      image: '/images/project-fintech-hd.jpg',
      hasPlay: false,
      tag: 'Web & Dashboard'
    },
    {
      id: 'aurora-luxury-perfume',
      category: 'Branding',
      title: 'Luxury Perfume',
      client: 'Aurora Paris',
      image: '/images/project-perfume-hd.jpg',
      hasPlay: false,
      tag: 'Packaging & Brand'
    },
    {
      id: 'music-festival-cinematic',
      category: 'Video Editing',
      title: 'Music Festival',
      client: 'Solaris Beats',
      image: '/images/project-festival-hd.jpg',
      hasPlay: true,
      tag: 'Aftermovie'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const filters = ['All', 'Websites', 'Social Media', 'Branding', 'Video Editing', 'Graphics'];

  return (
    <div className="bg-[#0C0D0E] text-neutral-100">
      
      {/* ========================================================
          SECTION 01: HERO SECTION
          ======================================================== */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0C0D0E]">
        {/* Soft ambient background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Typography, Tagline, CTAs, Avatars */}
            <div className="lg:col-span-6 xl:col-span-6 pt-4 lg:pt-0">
              
              {/* Category Tagline */}
              <div className="flex items-center gap-2 mb-6 hero-fade-tagline">
                <span className="text-xs uppercase font-semibold tracking-[0.2em] text-neutral-400">
                  CREATIVE &nbsp;|&nbsp; MARKETING &nbsp;|&nbsp; DIGITAL &nbsp;|&nbsp; GROWTH
                </span>
              </div>

              {/* Main Headline with Staggered Upward Line Reveal */}
              <h1 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-[68px] leading-[1.04] tracking-tight text-white">
                <span className="block overflow-hidden pb-1">
                  <span className="hero-reveal-line-1">WE CREATE</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="hero-reveal-line-2">BRANDS THAT</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="hero-reveal-line-3 text-[#D5BA93]">GROW.</span>
                </span>
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-lg hero-fade-subheading">
                Strategy. Design. Content. Technology.<br />
                Everything your brand needs — in one place.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 hero-fade-actions">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-8 py-3.5 rounded-full bg-[#EDE4D8] hover:bg-white text-neutral-900 font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <Link
                  to="/portfolio"
                  className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/25 hover:border-white/50 backdrop-blur-md transition-all duration-300 flex items-center gap-2.5"
                >
                  <span>Our Work</span>
                  <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                  </div>
                </Link>
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

            </div>

            {/* Right Column: Visual Setup with Cursive Script & 3D Workspace Photo */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              
              {/* Showcase 3D Perspective Wrapper & Mouse Tracker */}
              <div
                ref={showcaseRef}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                className="relative"
                style={{ perspective: '1200px' }}
              >
                {/* Subtle, slowly moving blurred golden radial glow behind the showcase */}
                <div 
                  className="absolute -inset-4 sm:-inset-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,_rgba(229,189,112,0.22)_0%,_rgba(213,175,99,0.07)_50%,_transparent_75%)] blur-2xl pointer-events-none hero-glow-pulse -z-10"
                  aria-hidden="true"
                />

                {/* Subtle Desktop 3D Mouse-Tilt Container (max ~3deg) */}
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
                  {/* Continuous Floating Animation (translateY(-12px), 5.5s loop) */}
                  <div className="hero-showcase-float">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                      
                      {/* Script Overlay: Ideas Design Results */}
                      <div className="absolute top-6 left-6 z-20 pointer-events-none select-none">
                        <span className="font-script text-3xl sm:text-4xl text-white/85 tracking-wide block drop-shadow-md -rotate-6">
                          Ideas
                        </span>
                        <span className="font-script text-3xl sm:text-4xl text-white/85 tracking-wide block drop-shadow-md ml-3 -rotate-3">
                          Design
                        </span>
                        <span className="font-script text-3xl sm:text-4xl text-white/85 tracking-wide block drop-shadow-md ml-6 -rotate-6">
                          Results
                        </span>
                      </div>

                      {/* Workspace photography with laptop, mug, notebook, plant */}
                      <img
                        src="/images/hero-workspace.png"
                        alt="Creative Agency Digital Workspace - THEVISUALS.™"
                        className="w-full h-auto object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
                      />

                      {/* Bottom Right: Scroll to explore */}
                      <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-bold text-neutral-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        <span>SCROLL TO EXPLORE</span>
                        <ArrowRight className="w-3 h-3 text-gold-300" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 02: TRUSTED BY BUSINESSES ACROSS INDUSTRIES
          ======================================================== */}
      <section className="bg-[#F1EEE9] text-neutral-900 border-y border-[#E3DFD5] py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left Tag */}
            <div className="flex items-center gap-2 shrink-0 md:pr-8 md:border-r md:border-neutral-300">
              <span className="text-xs font-bold tracking-wider uppercase text-neutral-800">
                TRUSTED BY BUSINESSES ACROSS INDUSTRIES
              </span>
            </div>

            {/* Client Brand Logos */}
            <div className="flex items-center justify-between md:justify-around flex-wrap gap-6 sm:gap-8 flex-1 text-neutral-700 opacity-90">
              <div className="hover:text-black hover:opacity-100 transition-all cursor-pointer">
                <NikeLogo className="h-5 w-auto" />
              </div>
              <div className="hover:text-black hover:opacity-100 transition-all cursor-pointer">
                <ZomatoLogo className="text-xl" />
              </div>
              <div className="hover:text-black hover:opacity-100 transition-all cursor-pointer">
                <BoatLogo className="text-xl" />
              </div>
              <div className="hover:text-black hover:opacity-100 transition-all cursor-pointer">
                <AjioLogo className="text-base" />
              </div>
              <div className="hover:text-black hover:opacity-100 transition-all cursor-pointer">
                <SpotifyLogo className="text-sm" />
              </div>
              <div className="hover:text-black hover:opacity-100 transition-all cursor-pointer">
                <SnapdealLogo className="text-sm" />
              </div>
              <div className="hover:text-black hover:opacity-100 transition-all cursor-pointer">
                <BharatPeLogo className="text-sm" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 03: OUR SERVICES
          ======================================================== */}
      <section id="services" className="bg-[#F1EEE9] text-neutral-900 pt-16 pb-20 border-b border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold tracking-widest uppercase text-neutral-600">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-neutral-950 leading-tight">
                Everything You Need<br />
                to Build & Grow Your Brand
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-md">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                From strategy to execution, we provide end-to-end digital solutions for modern businesses.
              </p>
              <Link
                to="/services"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all text-xs font-semibold"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 6 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {services.map((srv) => {
              const IconComp = srv.icon;
              return (
                <Link
                  key={srv.id}
                  to={srv.path}
                  className="bg-white rounded-2xl p-5 border border-[#E3DFD5] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Top Icon & Small Circle Arrow */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="font-syne font-bold text-sm text-neutral-950 group-hover:text-gold-600 transition-colors mb-2 leading-snug">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center text-[11px] font-semibold text-neutral-700 group-hover:text-black">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 04: FEATURED WORK / RECENT PROJECTS
          ======================================================== */}
      <section id="portfolio" className="bg-[#F1EEE9] text-neutral-900 pt-16 pb-20 border-b border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold tracking-widest uppercase text-neutral-600">
                  FEATURED WORK
                </span>
              </div>
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-neutral-950">
                Our Recent Projects
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-md">
                Real brands. Real results. Take a look at some of our latest work.
              </p>
              
              <div className="mt-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <span>View Full Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Filter Tabs matching screenshot */}
            <div className="flex flex-wrap items-center gap-2 bg-white/70 backdrop-blur-md p-1.5 rounded-full border border-[#E3DFD5] self-start lg:self-end">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeFilter === f
                      ? 'bg-neutral-950 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* 5 Project Cards Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {filteredProjects.map((proj) => (
              <Link
                key={proj.id}
                to={`/portfolio`}
                className="group flex flex-col"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-200 border border-[#E3DFD5] shadow-sm group-hover:shadow-md transition-all">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Play Icon Overlay for Videos */}
                  {proj.hasPlay && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-9 h-9 rounded-full bg-white/90 text-neutral-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950 ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-6 h-6 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Card Title & Client */}
                <div className="mt-3">
                  <h3 className="font-syne font-bold text-sm text-neutral-950 group-hover:text-gold-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium">
                    {proj.client}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 05: HOW WE WORK (4-STEP PROCESS)
          ======================================================== */}
      <section id="process" className="py-20 bg-[#0C0D0E] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="mb-3">
                <span className="text-xs font-bold tracking-widest uppercase text-gold-300">
                  OUR PROCESS
                </span>
              </div>
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
                How We Bring Your Vision to Life
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md">
              A refined four-stage methodology ensuring predictable excellence, rapid delivery, and transparent collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div 
                key={step.step}
                className="bg-neutral-900/60 rounded-2xl p-6 border border-white/10 hover:border-gold-400/40 transition-all duration-300 relative group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 mb-4 group-hover:bg-gold-400 group-hover:text-dark-950 transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 06: TESTIMONIALS & TRUST
          ======================================================== */}
      <section id="testimonials" className="py-20 bg-[#F1EEE9] text-neutral-900 border-b border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="mb-3">
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-600">
                CLIENT TESTIMONIALS
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-neutral-950">
              Trusted by Ambitious Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-[#E3DFD5] shadow-sm flex flex-col justify-between">
              <p className="text-sm text-neutral-700 italic leading-relaxed mb-6">
                "THEVISUALS completely transformed our digital presence. Within 60 days of launching the new website and branding, our conversion rates tripled."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <img src="/images/avatar-1.jpg" alt="Client" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-syne font-bold text-xs text-neutral-950">Aarav Mehta</h4>
                  <p className="text-[11px] text-neutral-500">Founder, Skyline Estates</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E3DFD5] shadow-sm flex flex-col justify-between">
              <p className="text-sm text-neutral-700 italic leading-relaxed mb-6">
                "Their video editing and reel production are cinematic tier. We saw an immediate surge in organic social engagement and follower loyalty."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <img src="/images/avatar-2.jpg" alt="Client" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-syne font-bold text-xs text-neutral-950">Priya Sharma</h4>
                  <p className="text-[11px] text-neutral-500">Marketing Head, Zenith Apparel</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E3DFD5] shadow-sm flex flex-col justify-between">
              <p className="text-sm text-neutral-700 italic leading-relaxed mb-6">
                "Exceptional communication and direct founder involvement from Ankit. They don't just deliver files; they deliver real business growth."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <img src="/images/avatar-4.jpg" alt="Client" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-syne font-bold text-xs text-neutral-950">Rohan Kapoor</h4>
                  <p className="text-[11px] text-neutral-500">Managing Director, Nova Tech</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 07: HIGH-CONVERSION CTA BANNER
          ======================================================== */}
      <section className="py-20 bg-[#0C0D0E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-gold-400/5 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Ready to Build a Brand That Grows?
          </h2>
          <p className="mt-4 text-base text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
            Let's discuss your project today. Get custom strategy, tailored timelines, and direct founder support.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 rounded-full bg-[#EDE4D8] hover:bg-white text-neutral-900 font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:scale-[1.02] flex items-center gap-2.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-emerald-950/60 hover:bg-emerald-900/70 text-emerald-300 font-semibold text-sm border border-emerald-500/30 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

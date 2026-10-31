import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  ArrowRight, 
  ChevronDown, 
  MessageCircle, 
  Monitor, 
  Palette, 
  Share2, 
  TrendingUp, 
  Video, 
  Sparkles, 
  Cpu, 
  PenTool, 
  Layers,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1200));
  
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const drawerRef = useRef(null);
  const location = useLocation();

  // Track window resize & orientation for adaptive viewport detection
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Track scroll position for backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open to prevent background jitter
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside and Escape key handling for dropdown & drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navServices = [
    { name: 'Website Development', path: '/services/website-development', icon: Monitor, desc: 'High-speed React & Next.js web applications' },
    { name: 'Branding & Logo Design', path: '/services/logo-design-and-branding', icon: Palette, desc: 'Signature visual identities & brand books' },
    { name: 'Social Media Management', path: '/services/social-media-management', icon: Share2, desc: 'Strategic content, feed curation & growth' },
    { name: 'Digital Marketing & Ads', path: '/services/digital-marketing', icon: TrendingUp, desc: 'Data-driven high-ROI paid ad funnels' },
    { name: 'Reels & Video Production', path: '/services/reel-shooting-and-video-editing', icon: Video, desc: 'Cinematic reel shooting & dynamic editing' },
    { name: 'AI Video & Content', path: '/services/ai-video-and-ai-advertising', icon: Sparkles, desc: 'AI-assisted video generation & media' },
    { name: 'AI Automation', path: '/services/ai-automation', icon: Cpu, desc: 'Automated CRM, lead routing & workflows' },
    { name: 'Graphic Design', path: '/services/poster-banner-and-graphic-design', icon: PenTool, desc: 'High-conversion posters, banners & assets' },
    { name: 'Business Solutions', path: '/services/business-digital-solutions', icon: Layers, desc: 'Custom enterprise software & ERP tools' },
  ];

  // Core navigation items displayed directly in navbar when space permits
  const primaryLinks = [
    { name: 'Home', target: 'hero', path: '/' },
    { name: 'Services', target: 'services', path: '/services', hasDropdown: true },
    { name: 'Our Work', target: 'portfolio', path: '/portfolio' },
    { name: 'About Us', target: 'about', path: '/about', hideOnMedium: true },
    { name: 'Contact', target: 'contact', path: '/contact' }
  ];

  // Secondary items placed inside the accessible hamburger menu drawer
  const secondaryLinks = [
    { name: 'Technologies', target: 'technologies', path: '/#technologies', desc: 'Modern tech stack & scalable frameworks' },
    { name: 'Industries', target: 'industries', path: '/#industries', desc: 'Sectors & enterprise verticals we power' },
    { name: 'Engagement Models', target: 'engagement', path: '/#engagement', desc: 'Flexible dedicated teams & fixed-scope pods' },
    { name: 'Why Choose Us', target: 'why-choose-us', path: '/#why-choose-us', desc: 'Founder care, 7-14d speed & 99% satisfaction' }
  ];

  // Smooth scroll handler for anchor links
  const handleNavClick = (e, item) => {
    if (location.pathname === '/' && item.target) {
      const el = document.getElementById(item.target);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        return;
      }
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    setServicesDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 header-gold-glow ${
          scrolled ? 'py-3 shadow-2xl scrolled' : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(7,7,9,0.98) 0%, rgba(14,13,10,0.97) 50%, rgba(7,7,9,0.98) 100%)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled 
            ? '1px solid rgba(213,175,99,0.25)' 
            : '1px solid transparent',
          boxShadow: scrolled 
            ? '0 4px 30px rgba(0,0,0,0.7), 0 1px 0 rgba(229,189,112,0.15)' 
            : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Brand Logo & Tagline */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <img 
                src="/images/logo-symbol-gold.png" 
                alt="THEVISUALS.IN Emblem" 
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="font-syne font-extrabold text-base tracking-wider text-white leading-tight flex items-center">
                  THEVISUALS<span className="text-[#E5BD70]">.IN</span>
                </span>
                <span className="text-[8px] font-semibold tracking-widest text-neutral-400 uppercase leading-none mt-0.5 hidden sm:block">
                  WE BUILD · WE CREATE · WE GROW
                </span>
              </div>
            </Link>

            {/* Desktop / Tablet Adaptive Navigation Links */}
            {/* Displayed smoothly from 768px and up (including mobile desktop mode at ~980px) */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-7">
              {primaryLinks.map((item) => {
                // For "About Us", hide on medium (768-1150px) to prevent collision in mobile desktop mode
                const isMediumHidden = item.hideOnMedium ? 'hidden xl:block' : '';

                if (item.hasDropdown) {
                  return (
                    <div 
                      key={item.name}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={handleMouseEnterDropdown}
                      onMouseLeave={handleMouseLeaveDropdown}
                    >
                      <button
                        type="button"
                        onClick={handleServicesClick}
                        className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-[#E5BD70] transition-colors flex items-center gap-1.5 py-2 cursor-pointer focus:outline-none"
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span className={servicesDropdownOpen ? 'text-[#E5BD70]' : ''}>{item.name}</span>
                        <ChevronDown 
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            servicesDropdownOpen ? 'rotate-180 text-[#E5BD70]' : 'text-neutral-400'
                          }`} 
                        />
                      </button>

                      {/* Services Mega-Menu Dropdown */}
                      {servicesDropdownOpen && (
                        <div 
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-[110] w-[740px] max-w-[calc(100vw-32px)]"
                          onMouseEnter={handleMouseEnterDropdown}
                          onMouseLeave={handleMouseLeaveDropdown}
                        >
                          <div 
                            className="relative rounded-2xl p-6 border border-gold-400/35 animate-in fade-in slide-in-from-top-2 duration-200"
                            style={{
                              backgroundColor: '#0B0C10',
                              boxShadow: '0 30px 70px -10px rgba(0, 0, 0, 0.98), 0 0 35px rgba(229, 189, 112, 0.12)'
                            }}
                          >
                            {/* Header Bar */}
                            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#E5BD70] shadow-[0_0_8px_#E5BD70]" />
                                <span className="text-xs font-bold uppercase tracking-wider text-[#E5BD70]">
                                  Our Specialized Capabilities
                                </span>
                              </div>
                              <Link 
                                to="/services" 
                                onClick={() => setServicesDropdownOpen(false)}
                                className="text-xs font-medium text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors group"
                              >
                                <span>Explore All Services</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#E5BD70] group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            </div>

                            {/* 3x3 Grid of 9 Service Cards */}
                            <div className="grid grid-cols-3 gap-3">
                              {navServices.map((srv) => {
                                const IconComponent = srv.icon;
                                return (
                                  <Link
                                    key={srv.name}
                                    to={srv.path}
                                    onClick={() => setServicesDropdownOpen(false)}
                                    className="group p-3.5 rounded-xl bg-[#121319] hover:bg-[#1A1C25] border border-white/10 hover:border-gold-400/50 transition-all duration-200 flex flex-col justify-between shadow-md"
                                  >
                                    <div>
                                      <div className="flex items-center gap-2.5 mb-2">
                                        <div className="w-7 h-7 rounded-lg bg-gold-400/10 flex items-center justify-center text-[#E5BD70] group-hover:bg-[#E5BD70] group-hover:text-black transition-colors shrink-0">
                                          <IconComponent className="w-3.5 h-3.5 stroke-[2]" />
                                        </div>
                                        <span className="text-xs font-bold text-white group-hover:text-[#E5BD70] transition-colors leading-tight">
                                          {srv.name}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed font-light">
                                        {srv.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Footer Quick Action */}
                            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                              <span>Need custom agency deliverables?</span>
                              <button
                                onClick={() => {
                                  setServicesDropdownOpen(false);
                                  onOpenQuoteModal();
                                }}
                                className="text-xs font-bold text-[#E5BD70] hover:text-white transition-colors flex items-center gap-1"
                              >
                                <span>Request a Custom Quote →</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`${isMediumHidden} text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-[#E5BD70] transition-colors duration-200 cursor-pointer`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Elements (WhatsApp + Universal Hamburger Trigger) */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
              
              {/* WhatsApp Quick Chat (Responsive hide on very small screens) */}
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 text-xs font-semibold backdrop-blur-md transition-all hover:scale-[1.03]"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Universal Priority+ Hamburger Button */}
              {/* Visible on Mobile, Mobile-Desktop mode, and Desktop as a luxury "MENU" trigger */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/15 text-neutral-200 hover:text-[#E5BD70] border border-white/15 hover:border-gold-400/40 transition-all text-xs font-semibold tracking-wider uppercase group shrink-0 focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-controls="navigation-drawer"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open all navigation links"}
              >
                <span className="hidden sm:inline text-neutral-300 group-hover:text-[#E5BD70] text-[11px] font-bold">
                  {mobileMenuOpen ? 'CLOSE' : 'MENU'}
                </span>
                <div className="w-5 h-5 flex flex-col justify-center items-end gap-1">
                  {mobileMenuOpen ? (
                    <X className="w-4 h-4 text-[#E5BD70]" />
                  ) : (
                    <>
                      <span className="w-4.5 h-[2px] bg-[#E5BD70] group-hover:w-4.5 transition-all rounded-full" />
                      <span className="w-3 h-[2px] bg-neutral-300 group-hover:bg-[#E5BD70] group-hover:w-4.5 transition-all rounded-full" />
                      <span className="w-4 h-[2px] bg-[#E5BD70] group-hover:w-4.5 transition-all rounded-full" />
                    </>
                  )}
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================
          SLIDE-OVER NAVIGATION DRAWER (ACCESSIBLE ACROSS ALL SIZES)
          ======================================================== */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[115] transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sidebar */}
          <aside
            id="navigation-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Directory"
            className="fixed top-0 right-0 bottom-0 w-full max-w-md sm:max-w-lg bg-[#0A0B0E] border-l border-gold-400/25 z-[120] flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.9)] animate-in slide-in-from-right duration-300 overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#070709]">
              <div className="flex items-center gap-2.5">
                <img 
                  src="/images/logo-symbol-gold.png" 
                  alt="THEVISUALS.IN" 
                  className="w-7 h-7 object-contain" 
                />
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-sm text-white tracking-wider">
                    THEVISUALS<span className="text-[#E5BD70]">.IN</span>
                  </span>
                  <span className="text-[9px] text-[#E5BD70] tracking-widest uppercase font-semibold">
                    Complete Navigation
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-[#E5BD70] border border-white/10 hover:border-gold-400/40 transition-all focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-white/5 space-y-6">
              
              {/* Category 1: Main Pages */}
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E5BD70] block mb-3">
                  PRIMARY NAVIGATION
                </span>
                <div className="flex flex-col gap-1">
                  {primaryLinks.map((item) => {
                    if (item.hasDropdown) {
                      return (
                        <div key={item.name} className="py-1">
                          <button
                            type="button"
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="w-full text-sm font-semibold uppercase tracking-wider py-2 text-neutral-200 hover:text-[#E5BD70] flex items-center justify-between"
                          >
                            <span className={mobileServicesOpen ? 'text-[#E5BD70]' : ''}>{item.name}</span>
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform duration-300 ${
                                mobileServicesOpen ? 'rotate-180 text-[#E5BD70]' : 'text-neutral-400'
                              }`} 
                            />
                          </button>

                          {/* Collapsible Services Accordion inside drawer */}
                          {mobileServicesOpen && (
                            <div className="pl-2 pb-2 pt-2 flex flex-col gap-2 animate-in fade-in duration-200">
                              {navServices.map((srv) => {
                                const IconComponent = srv.icon;
                                return (
                                  <Link
                                    key={srv.name}
                                    to={srv.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2.5 rounded-xl bg-[#121318] border border-white/5 hover:border-gold-400/30 flex items-center gap-3 text-xs text-neutral-200 hover:text-[#E5BD70] transition-colors"
                                  >
                                    <div className="w-6 h-6 rounded-md bg-gold-400/10 flex items-center justify-center text-[#E5BD70] shrink-0">
                                      <IconComponent className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-semibold">{srv.name}</span>
                                  </Link>
                                );
                              })}
                              <Link
                                to="/services"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xs font-bold text-[#E5BD70] hover:underline pt-1 pl-1 flex items-center gap-1"
                              >
                                <span>Explore All Services & Capabilities →</span>
                              </Link>
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <a
                        key={item.name}
                        href={item.path}
                        onClick={(e) => handleNavClick(e, item)}
                        className="text-sm font-semibold uppercase tracking-wider py-2.5 text-neutral-200 hover:text-[#E5BD70] flex items-center justify-between group transition-colors"
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#E5BD70] group-hover:translate-x-1 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Category 2: Agency Sections & Capabilities */}
              <div className="pt-6">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E5BD70] block mb-3">
                  AGENCY DEEP-DIVES
                </span>
                <div className="flex flex-col gap-2">
                  {secondaryLinks.map((sec) => (
                    <a
                      key={sec.name}
                      href={sec.path}
                      onClick={(e) => handleNavClick(e, sec)}
                      className="p-3 rounded-xl bg-[#121319] hover:bg-[#1A1C25] border border-white/5 hover:border-gold-400/40 flex items-center justify-between group transition-all"
                    >
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#E5BD70] block transition-colors">
                          {sec.name}
                        </span>
                        <span className="text-[11px] text-neutral-400 font-light block mt-0.5">
                          {sec.desc}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#E5BD70] group-hover:translate-x-0.5 transition-all shrink-0 ml-3" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Category 3: Direct Connect & Contact Info */}
              <div className="pt-6">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E5BD70] block mb-3">
                  DIRECT CONTACT
                </span>
                <div className="space-y-2 text-xs text-neutral-300">
                  <a 
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-colors text-neutral-300 hover:text-white"
                  >
                    <Mail className="w-4 h-4 text-[#E5BD70]" />
                    <span>{AGENCY_INFO.email}</span>
                  </a>
                  <a 
                    href={`tel:${AGENCY_INFO.phone}`}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-colors text-neutral-300 hover:text-white"
                  >
                    <Phone className="w-4 h-4 text-[#E5BD70]" />
                    <span>{AGENCY_INFO.phone}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-white/10 bg-[#070709] shrink-0 flex flex-col gap-3">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-full text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
                }}
              >
                <span>Start a Project with Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

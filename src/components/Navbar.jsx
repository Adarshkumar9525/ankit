import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
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
  Layers 
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close desktop dropdown
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

  const navLinks = [
    { name: 'Home', target: 'hero', path: '/' },
    { name: 'About Us', target: 'about', path: '/about' },
    { name: 'Services', target: 'services', path: '/services', hasDropdown: true },
    { name: 'Technologies', target: 'technologies', path: '/#technologies' },
    { name: 'Our Work', target: 'portfolio', path: '/portfolio' },
    { name: 'Industries', target: 'industries', path: '/#industries' },
    { name: 'Models', target: 'engagement', path: '/#engagement' },
    { name: 'Why Us', target: 'why-choose-us', path: '/#why-choose-us' },
    { name: 'Contact', target: 'contact', path: '/contact' }
  ];

  const handleNavClick = (e, item) => {
    if (location.pathname === '/') {
      const el = document.getElementById(item.target);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        return;
      }
    }
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

  const handleServicesClick = (e, item) => {
    e.preventDefault();
    setServicesDropdownOpen((prev) => !prev);
  };

  return (
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
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
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
              <span className="text-[8px] font-semibold tracking-widest text-neutral-400 uppercase leading-none mt-0.5">
                WE BUILD · WE CREATE · WE GROW
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((item) => {
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
                      onClick={(e) => handleServicesClick(e, item)}
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

                    {/* Services Mega-Menu Dropdown with Solid Opaque Background & High Stacking */}
                    {servicesDropdownOpen && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-[110] w-[740px] max-w-[calc(100vw-32px)]"
                        onMouseEnter={handleMouseEnterDropdown}
                        onMouseLeave={handleMouseLeaveDropdown}
                      >
                        {/* Solid 100% Opaque Box */}
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

                          {/* 3x3 Grid of 9 Service Cards with Solid Backgrounds */}
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
                  className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-[#E5BD70] transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-3">
            
            {/* WhatsApp Quick Chat */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 text-xs font-semibold backdrop-blur-md transition-all hover:scale-[1.03]"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Golden "Start a Project" Button */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 sm:px-6 py-2.5 rounded-full text-neutral-950 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#E5BD70]/25 hover:scale-[1.03] active:scale-[0.98] shrink-0"
              style={{
                background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
              }}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-neutral-300 hover:text-[#E5BD70] hover:bg-white/5 transition-colors"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer with Solid Opaque Background & Responsive Services Accordion */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden border-b border-gold-400/25 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto"
          style={{
            backgroundColor: '#0A0B0E',
            boxShadow: '0 20px 40px rgba(0,0,0,0.95)'
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="border-b border-white/5">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full text-sm font-semibold uppercase tracking-wider py-2.5 text-neutral-200 hover:text-[#E5BD70] flex items-center justify-between"
                    >
                      <span className={mobileServicesOpen ? 'text-[#E5BD70]' : ''}>{item.name}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileServicesOpen ? 'rotate-180 text-[#E5BD70]' : 'text-neutral-400'
                        }`} 
                      />
                    </button>

                    {/* Mobile Services Accordion */}
                    {mobileServicesOpen && (
                      <div className="pl-2 pb-3 pt-1 flex flex-col gap-2 animate-in fade-in duration-200">
                        {navServices.map((srv) => {
                          const IconComponent = srv.icon;
                          return (
                            <Link
                              key={srv.name}
                              to={srv.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="p-2.5 rounded-xl bg-[#121318] border border-white/5 hover:border-gold-400/30 flex items-center gap-3 text-xs text-neutral-200 hover:text-[#E5BD70]"
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
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="text-xs font-bold text-[#E5BD70] hover:underline pt-1 pl-1 flex items-center gap-1"
                        >
                          <span>Explore All 13 Offerings →</span>
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
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-semibold uppercase tracking-wider py-2.5 text-neutral-200 hover:text-[#E5BD70] border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Chat with Ankit on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-full text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
                }}
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

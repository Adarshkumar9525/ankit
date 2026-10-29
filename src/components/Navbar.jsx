import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageCircle, LayoutDashboard } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-950/95 backdrop-blur-xl border-b border-gold-400/15 py-3 shadow-card-dark' 
        : 'bg-dark-950/70 backdrop-blur-md py-4 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0 mr-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-0.5 shadow-gold-glow transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-950 rounded-[6px] flex items-center justify-center">
                <span className="font-syne font-extrabold text-xs text-gold-accent tracking-tighter">TV</span>
              </div>
            </div>
            <div>
              <span className="font-syne font-bold text-base tracking-wide text-white flex items-center gap-0.5">
                THEVISUAL<span className="text-gold-accent">.IN</span>
              </span>
              <span className="block text-[8px] font-medium tracking-widest text-neutral-400 uppercase -mt-0.5">
                Digital · Creative · AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-accent font-semibold'
                      : 'text-neutral-300 hover:text-gold-accent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/admin"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-dark-900 text-gold-accent border border-gold-400/30 hover:border-gold-400 transition-all duration-200"
              title="Creative Studio Admin Dashboard"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-gold-accent" />
              <span className="hidden xl:inline">Dashboard</span>
            </Link>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-950 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-gold-accent hover:bg-white/5 transition-colors"
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-900/98 backdrop-blur-2xl border-b border-gold-500/20 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium py-2 transition-colors ${
                    isActive ? 'text-gold-accent font-bold pl-2 border-l-2 border-gold-400' : 'text-neutral-200 hover:text-gold-accent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <Link
                to="/admin"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-850 text-gold-accent border border-gold-400/30 font-semibold text-sm"
              >
                <LayoutDashboard className="w-4 h-4 text-gold-accent" />
                <span>Agency Admin Dashboard</span>
              </Link>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp ({AGENCY_INFO.phone})</span>
              </a>

              <Link
                to="/start-a-project"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-950 font-bold text-sm flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

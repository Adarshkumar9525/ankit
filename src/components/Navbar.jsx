import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, LayoutDashboard, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { VisualsLogoMark } from './Icons';

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
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/#process' },
    { name: 'Testimonies', path: '/#testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0A0B0D]/95 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with User's Official Emblem */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img 
              src="/images/logo-symbol-gold.png" 
              alt="THEVISUALS.IN Emblem" 
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-syne font-extrabold text-base tracking-wider text-white leading-tight flex items-center">
                THEVISUALS<span className="text-gold-300">.IN</span>
              </span>
              <span className="text-[8px] font-semibold tracking-widest text-neutral-400 uppercase leading-none mt-0.5">
                We Create · You Grow
              </span>
            </div>
          </Link>

          {/* Center Navigation Links matching user screenshot */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isAnchor = link.path.startsWith('/#');
              if (isAnchor) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive && link.path !== '/#process' && link.path !== '/#testimonials'
                        ? 'text-white font-semibold'
                        : 'text-neutral-300 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right CTA Button matching user screenshot "Get a Quote →" */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/admin"
              className="text-neutral-400 hover:text-gold-300 p-2 rounded-full hover:bg-white/5 transition-colors"
              title="Creative Studio Admin"
            >
              <LayoutDashboard className="w-4 h-4" />
            </Link>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-[#EDE4D8] hover:bg-white text-neutral-900 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0E12]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-base font-medium py-2 text-neutral-200 hover:text-gold-300"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <Link
                to="/admin"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-850 text-gold-300 border border-white/10 font-semibold text-sm"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Agency Admin Dashboard</span>
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-full bg-[#EDE4D8] text-neutral-900 font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

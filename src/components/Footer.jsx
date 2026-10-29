import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MessageCircle } from 'lucide-react';
import { InstagramIcon, VisualsLogoMark } from './Icons';
import { AGENCY_INFO, SERVICES_LIST } from '../data/agencyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0B0D] border-t border-neutral-800 text-neutral-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <VisualsLogoMark className="w-8 h-8 text-gold-400" />
              <div className="flex items-baseline">
                <span className="font-syne font-extrabold text-lg tracking-wider text-white">
                  THEVISUALS<span className="text-gold-300">.</span>
                </span>
                <span className="text-[10px] text-neutral-400 font-semibold tracking-tighter ml-0.5">™</span>
              </div>
            </Link>

            <p className="text-sm text-neutral-300 max-w-sm font-light leading-relaxed">
              <strong>{AGENCY_INFO.tagline}</strong> — {AGENCY_INFO.supportingTagline} Complete partner for bespoke website development, luxury branding, video editing, and AI business solutions.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-900 border border-neutral-800 hover:border-emerald-500 text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={AGENCY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-900 border border-neutral-800 hover:border-gold-400 text-gold-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-dark-900 border border-neutral-800 hover:border-gold-400 text-gold-accent flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${AGENCY_INFO.rawPhone}`}
                className="w-9 h-9 rounded-lg bg-dark-900 border border-neutral-800 hover:border-gold-400 text-gold-accent flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-gold-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold-accent transition-colors">All Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold-accent transition-colors">Our Work</Link></li>
              <li><Link to="/careers" className="hover:text-gold-accent transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-gold-accent transition-colors">Blog / Insights</Link></li>
              <li><Link to="/start-a-project" className="hover:text-gold-accent transition-colors">Start a Project</Link></li>
              <li><Link to="/admin" className="text-gold-accent hover:underline flex items-center gap-1 font-semibold"><span>Admin Dashboard</span> ↗</Link></li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Key Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LIST.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="hover:text-gold-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-gold-accent font-semibold hover:underline">
                  View All 13 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <a href={`tel:${AGENCY_INFO.rawPhone}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {AGENCY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <InstagramIcon className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <a href={AGENCY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {AGENCY_INFO.instagram}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block px-4 py-2 rounded-lg bg-dark-900 border border-neutral-700 hover:border-gold-400 text-xs text-white font-medium transition-colors"
                >
                  Contact Page & Form →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Dynamic Year and Legal Links */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} {AGENCY_INFO.name}. All rights reserved. Directed by {AGENCY_INFO.founder}.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gold-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold-accent transition-colors">
              Terms & Conditions
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-gold-accent transition-colors group"
            >
              <span>Back to top</span>
              <div className="w-6 h-6 rounded-full bg-dark-900 border border-neutral-800 flex items-center justify-center group-hover:border-gold-400">
                <ArrowUp className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

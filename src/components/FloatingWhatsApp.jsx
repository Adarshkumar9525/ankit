import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const location = useLocation();

  const getContextualWhatsAppUrl = () => {
    const path = location.pathname;
    let message = "Hi THEVISUAL.IN, I would like to discuss a project. Please let me know how we can get started.";

    if (path.includes('services/website-development') || path.includes('development')) {
      message = "Hi THEVISUAL.IN, I am interested in your Website Development services. Could you share project timelines and pricing?";
    } else if (path.includes('services/logo-design-and-branding') || path.includes('branding')) {
      message = "Hi THEVISUAL.IN, I am interested in developing a luxury brand identity and logo. How can we get started?";
    } else if (path.includes('social-media') || path.includes('marketing')) {
      message = "Hi THEVISUAL.IN, I would like to inquire about your Social Media Management and Advertising campaigns.";
    } else if (path.includes('video') || path.includes('reel')) {
      message = "Hi THEVISUAL.IN, I need video editing and commercial reel production for my brand.";
    } else if (path.includes('ai-') || path.includes('automation')) {
      message = "Hi THEVISUAL.IN, I am interested in AI content creation and business workflow automation solutions.";
    } else if (path.includes('start-a-project') || path.includes('quote')) {
      message = "Hi THEVISUAL.IN, I would like to get a formal quote for my upcoming project.";
    } else if (path.includes('careers')) {
      message = "Hi THEVISUAL.IN, I am reaching out regarding career opportunities and speculative application at your agency.";
    }

    return `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Speech bubble notification */}
      {showTooltip && (
        <div className="mb-3 max-w-xs p-3.5 rounded-2xl bg-dark-900 border border-emerald-500/30 text-white shadow-2xl relative animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-neutral-500 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              Ankit @ THEVISUAL.IN
            </span>
          </div>
          <p className="text-xs text-neutral-200 leading-snug">
            Need high-end websites, luxury branding, or video? Chat with us directly on WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getContextualWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-sm shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-syne tracking-wide">WhatsApp Us</span>
      </a>

    </div>
  );
}

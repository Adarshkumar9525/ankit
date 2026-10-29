import React from 'react';

export function VisualsLogoMark({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Dynamic angular origami/faceted 'V' monogram */}
      <polygon points="4,7 20,35 15,35 0,7" fill="#E5BD70" fillOpacity="0.8" />
      <polygon points="36,7 20,35 25,35 40,7" fill="#FFFFFF" fillOpacity="0.9" />
      <polygon points="12,7 20,24 28,7 22,7 20,13 18,7" fill="#E5BD70" />
      <polygon points="20,15 24,7 16,7" fill="#D5AF63" />
      <polygon points="14,14 20,28 26,14 20,20" fill="#FFFFFF" fillOpacity="0.85" />
    </svg>
  );
}

export function NikeLogo({ className = "h-5 w-auto" }) {
  return (
    <svg viewBox="0 0 100 35" fill="currentColor" className={className}>
      <path d="M96.5 0.5C82.4 9.8 45.2 31.8 35.6 34.9C29.6 36.8 19.3 35.4 12.8 29.8C5.2 23.3 5.4 13.9 13.2 11.2C22.6 8 36.1 16.5 39.5 19.3C35.2 16.5 24.1 8.8 14.5 9.8C6.1 10.7 0.8 19.8 4.2 27.2C8.6 36.8 23.9 37.1 33.2 33.6C44.7 29.2 87.2 6.5 96.5 0.5Z" />
    </svg>
  );
}

export function ZomatoLogo({ className = "h-5 w-auto" }) {
  return (
    <span className={`font-black italic tracking-tighter lowercase ${className} select-none`}>
      zomato
    </span>
  );
}

export function BoatLogo({ className = "h-5 w-auto" }) {
  return (
    <span className={`font-black tracking-normal lowercase flex items-center ${className} select-none`}>
      bo<span className="italic font-bold">A</span>t
    </span>
  );
}

export function AjioLogo({ className = "h-5 w-auto" }) {
  return (
    <span className={`font-bold tracking-widest uppercase ${className} select-none`}>
      AJIO
    </span>
  );
}

export function SpotifyLogo({ className = "h-5 w-auto" }) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-bold ${className} select-none`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M7 9c3.5-1 7.5-.7 10.5 1" stroke="#F1EEE9" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M7.8 12c2.8-.8 6-.5 8.4.8" stroke="#F1EEE9" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M8.5 15c2.2-.6 4.7-.4 6.6.6" stroke="#F1EEE9" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
      <span>Spotify</span>
    </div>
  );
}

export function SnapdealLogo({ className = "h-5 w-auto" }) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-bold ${className} select-none`}>
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M2 5L10 1L18 5L10 9L2 5Z" />
        <path d="M2 10L10 14L18 10L10 6L2 10Z" opacity="0.6" />
      </svg>
      <span>snapdeal</span>
    </div>
  );
}

export function BharatPeLogo({ className = "h-5 w-auto" }) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-bold ${className} select-none`}>
      <div className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center text-[9px] font-black">
        B
      </div>
      <span>BharatPe</span>
    </div>
  );
}

export function InstagramIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

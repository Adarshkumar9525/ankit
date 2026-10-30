import React from 'react';

export default function MovingStrip() {
  const items = [
    'WEBSITE DEVELOPMENT',
    'BRANDING',
    'DIGITAL MARKETING',
    'VIDEO PRODUCTION',
    'AI SOLUTIONS',
    'CREATIVE DESIGN',
    'AUTOMATION',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#0A0A0E] border-y border-gold-400/20 py-4.5 select-none z-20">
      {/* Subtle edge fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0E] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {/* Render 2 sets for endless seamless loop */}
        {[...Array(2)].map((_, setIdx) => (
          <div key={setIdx} className="flex items-center gap-10">
            {items.map((item, idx) => (
              <div key={`${setIdx}-${idx}`} className="flex items-center gap-10">
                <span 
                  className={`font-syne font-extrabold text-sm sm:text-base tracking-[0.22em] transition-colors ${
                    idx % 2 === 0 
                      ? 'text-[#E5BD70]' 
                      : 'text-neutral-200 hover:text-white'
                  }`}
                >
                  {item}
                </span>
                <span className="text-[#D5AF63] text-sm opacity-70">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

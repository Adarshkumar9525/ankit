import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function IndustriesSection({ onOpenQuoteModal }) {
  const industries = [
    {
      name: 'Real Estate & Architecture',
      desc: 'Luxury property showcases, 3D floor plan presentations, and high-conversion buyer lead funnels.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'E-Commerce & Retail',
      desc: 'Fast, conversion-engineered storefronts, product video reels, and high-ROAS Meta ad creative campaigns.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Food & Upscale Dining',
      desc: 'Cinematic culinary reels, mobile-first QR menus, and local brand presence that turns foodies into regulars.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Fitness & Wellness',
      desc: 'High-energy fitness brand identities, dynamic workout reels, and membership onboarding platforms.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Healthcare & Clinics',
      desc: 'Trustworthy, clean medical websites, intuitive patient appointment booking, and verified credentials.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Education & Academies',
      desc: 'Modern student enrollment portals, interactive course previews, and promotional video campaigns.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Professional Services',
      desc: 'Authoritative digital presence for corporate law practices, financial advisories, and management consultants.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Startups & Tech',
      desc: 'Rapid brand launch kits, investor-ready pitch deck styling, and responsive product landing pages.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="industries" className="py-24 sm:py-32 bg-[#060709] text-white relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sectors We Empower</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.14]">
            Industries <span className="gold-text-gradient">We Serve.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            We adapt our creative and technological strategies to meet the specific demands, compliance requirements, and customer expectations of your industry.
          </p>
        </div>

        {/* 8 Industries Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              onClick={onOpenQuoteModal}
              className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-400/50 cursor-pointer transition-all duration-500 shadow-xl"
            >
              {/* Background Image */}
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-[#060709]/70 to-transparent group-hover:via-[#060709]/50 transition-colors duration-500" />

              {/* Content Box */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-syne font-bold text-lg text-white group-hover:text-[#E5BD70] transition-colors leading-tight">
                    {ind.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#E5BD70] group-hover:text-black flex items-center justify-center text-white transition-all shrink-0 ml-2">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed font-light">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

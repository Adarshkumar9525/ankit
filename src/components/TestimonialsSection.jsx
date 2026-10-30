import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Aarav Mehta',
      role: 'Managing Director, Skyline Luxury Estates',
      avatar: '/images/avatar-1.jpg',
      quote: 'THEVISUALS.IN elevated our brand aesthetic beyond what we thought possible. Their website architecture and architectural reel production gave us instant credibility with high-net-worth real estate buyers.',
      tags: 'Web Development & Video Production'
    },
    {
      name: 'Priya Sharma',
      role: 'Creative Director, Zenith Apparel',
      avatar: '/images/avatar-2.jpg',
      quote: 'Working directly with Ankit was refreshing. There was zero agency fluff or delay. The bespoke lookbook styling and responsive frontend they built gave our label a true luxury editorial presence.',
      tags: 'Brand Identity & Web Store'
    },
    {
      name: 'Rohan Kapoor',
      role: 'Founder & CEO, Apex Athletic',
      avatar: '/images/avatar-3.jpg',
      quote: 'Their short-form reel editing and Meta advertising funnels generated a huge spike in qualified gym memberships within 45 days. They truly understand pacing, audio hooks, and conversion psychology.',
      tags: 'Social Media & Ad Creative'
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#090A0D] text-white relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Endorsements</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
              Trusted by Ambitious Brands <br />
              <span className="gold-text-gradient">& Growth-Focused Founders.</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-gold-400 hover:text-black border border-white/10 flex items-center justify-center transition-all duration-300"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-gold-400 hover:text-black border border-white/10 flex items-center justify-center transition-all duration-300"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={item.name}
              className={`p-8 rounded-3xl bg-[#0F1016] border transition-all duration-500 flex flex-col justify-between shadow-xl ${
                idx === activeIndex 
                  ? 'border-gold-400/50 shadow-gold-glow' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#E5BD70]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold-400/20" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-400/30"
                />
                <div>
                  <h4 className="font-syne font-bold text-sm text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light">
                    {item.role}
                  </p>
                  <span className="text-[10px] text-[#E5BD70] font-semibold uppercase tracking-wider block mt-0.5">
                    {item.tags}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Disclosure */}
        <p className="text-center text-xs text-neutral-500 mt-10 font-light">
          Representative client feedback showcasing past agency deliverables and scope across creative & technical engagements.
        </p>

      </div>
    </section>
  );
}

import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyChooseSection() {
  const reasons = [
    {
      num: '01',
      title: 'Business-Focused Approach',
      desc: 'We align every creative and digital activity directly with your commercial goals, customer growth, and business success.',
      highlight: 'Commercial Impact'
    },
    {
      num: '02',
      title: 'Creative & Customised Solutions',
      desc: 'No generic templates or one-size-fits-all formulas. We create tailored solutions that reflect your brand’s unique identity and story.',
      highlight: 'Tailored Execution'
    },
    {
      num: '03',
      title: 'Clear Communication & Collaboration',
      desc: 'Direct founder collaboration, milestone-based updates, and transparent communication throughout your entire project.',
      highlight: 'Direct Accountability'
    },
    {
      num: '04',
      title: 'Strategic Content Planning',
      desc: 'Structured content calendars, engaging post designs, and high-retention reel storytelling to engage your target audience consistently.',
      highlight: 'Targeted Engagement'
    },
    {
      num: '05',
      title: 'Focus on Brand Identity & Online Visibility',
      desc: 'We work to make your brand more visible, recognizable, and deeply connected with the right audience across touchpoints.',
      highlight: 'Brand Recognition'
    },
    {
      num: '06',
      title: 'Continuous Improvement Based on Performance',
      desc: 'We review campaign performance, analyse audience responses, and continuously identify opportunities to optimize and improve results.',
      highlight: 'Performance-Driven'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-[#070709] text-white relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold-400/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why THEVISUALS.IN</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.14]">
            Why Modern Businesses <br />
            <span className="gold-text-gradient">Choose to Partner With Us.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            We hold ourselves to uncompromising standards of aesthetic precision, technical stability, and transparent collaboration.
          </p>
        </div>

        {/* 6 Benefit Cards in Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item) => (
            <div 
              key={item.num}
              className="relative p-8 rounded-3xl bg-[#0D0E13] border border-white/5 hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
              style={{
                boxShadow: '0 15px 35px -15px rgba(0,0,0,0.8)'
              }}
            >
              <div>
                {/* Large Stylized Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-syne font-black text-4xl text-neutral-700 group-hover:text-[#E5BD70] transition-colors">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-400/10 text-[#E5BD70] border border-gold-400/20">
                    {item.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#E5BD70] transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* Bottom decorative gold dash */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#E5BD70]" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Belief Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-gold-500/10 via-amber-500/10 to-transparent border border-gold-400/30 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#E5BD70] font-bold block mb-2">
            Our Belief
          </span>
          <p className="text-lg sm:text-2xl font-syne font-bold text-white leading-relaxed">
            "We believe every business deserves the opportunity to build a strong digital presence, regardless of its size."
          </p>
        </div>

      </div>
    </section>
  );
}

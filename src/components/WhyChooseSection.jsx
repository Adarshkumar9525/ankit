import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyChooseSection() {
  const reasons = [
    {
      num: '01',
      title: 'Creative Thinking',
      desc: 'We reject generic templates and cookie-cutter approaches. Every design begins with a blank slate, genuine curiosity, and a focus on creating a memorable brand identity.',
      highlight: 'Distinctive Visual Identity'
    },
    {
      num: '02',
      title: 'Modern Technology',
      desc: 'We engineer using clean semantic code, modern frameworks (React, Next.js, Tailwind), and performant asset optimization to deliver sub-second load times.',
      highlight: 'Built for Speed & Reliability'
    },
    {
      num: '03',
      title: 'Complete Digital Solutions',
      desc: 'No need to coordinate between multiple disconnected freelancers. We handle brand design, web development, video editing, and social media under one roof.',
      highlight: 'Unified Brand Cohesion'
    },
    {
      num: '04',
      title: 'User-Focused Design',
      desc: 'Aesthetics matter, but clarity drives conversions. Every interface is laid out with intuitive navigation, readable typography, and intentional customer journeys.',
      highlight: 'Conversion-Optimized UX'
    },
    {
      num: '05',
      title: 'Transparent Communication',
      desc: 'Work directly with founder Ankit and our core team. We provide milestone updates, clear deadlines, and honest feedback throughout the entire project lifecycle.',
      highlight: 'Direct Founder Collaboration'
    },
    {
      num: '06',
      title: 'Tailored Business Solutions',
      desc: 'Every business has distinct customer demographics and price points. We customize your digital presence to match your specific commercial goals.',
      highlight: 'Engineered for Real Growth'
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

      </div>
    </section>
  );
}

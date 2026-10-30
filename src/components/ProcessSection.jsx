import React from 'react';
import { Search, Compass, PenTool, CheckCircle, Rocket, TrendingUp, Sparkles } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      icon: Search,
      desc: 'We analyze your commercial goals, study audience demographics, inspect competitor gaps, and define precise functional parameters.',
    },
    {
      num: '02',
      title: 'Plan',
      icon: Compass,
      desc: 'We construct detailed wireframes, user flow diagrams, creative moodboards, and deliverable sprint milestones.',
    },
    {
      num: '03',
      title: 'Create',
      icon: PenTool,
      desc: 'Our design and engineering team develops custom visual identities, semantic React codebases, and cinematic video assets.',
    },
    {
      num: '04',
      title: 'Review',
      icon: CheckCircle,
      desc: 'Rigorous cross-browser QA, mobile responsiveness checks, load time benchmarking, and structured client revision cycles.',
    },
    {
      num: '05',
      title: 'Deliver',
      icon: Rocket,
      desc: 'Production deployment with SSL certificates, technical SEO optimization, domain configuration, and master vector handoffs.',
    },
    {
      num: '06',
      title: 'Grow',
      icon: TrendingUp,
      desc: 'Continuous performance tracking, Meta ad scaling, content refresh cadence, and automated inbound funnel upgrades.',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#07080B] text-white relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-gold-400/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Methodology</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.14]">
            How We Work: <span className="gold-text-gradient">The 6-Step Blueprint.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            A disciplined, transparent delivery framework engineered to eliminate guesswork and deliver measurable commercial results.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (lg+) */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting Line */}
          <div className="absolute top-8 left-12 right-12 h-[2px] bg-gradient-to-r from-gold-400/10 via-[#E5BD70] to-gold-400/10 z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.num} className="flex flex-col items-center text-center group">
                  {/* Step Node with Number */}
                  <div className="w-16 h-16 rounded-full bg-[#0D0E13] border-2 border-gold-400/40 group-hover:border-[#E5BD70] group-hover:scale-110 flex items-center justify-center text-[#E5BD70] transition-all duration-300 shadow-xl mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-extrabold text-[#E5BD70] tracking-widest uppercase mb-1">
                    Step {step.num}
                  </span>

                  <h3 className="font-syne font-bold text-lg text-white mb-2 group-hover:text-[#E5BD70] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-light px-2">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline (< lg) */}
        <div className="lg:hidden relative pl-6 border-l-2 border-gold-400/30 space-y-10 ml-4">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.num} className="relative group">
                {/* Node on Line */}
                <div className="absolute -left-[35px] top-0 w-10 h-10 rounded-full bg-[#0D0E13] border-2 border-[#E5BD70] flex items-center justify-center text-[#E5BD70]">
                  <IconComponent className="w-4 h-4" />
                </div>

                <div className="bg-[#0F1015] p-6 rounded-2xl border border-white/5">
                  <span className="text-[10px] font-bold text-[#E5BD70] uppercase tracking-widest block mb-1">
                    Step {step.num}
                  </span>
                  <h3 className="font-syne font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Clock, Shield, RefreshCw, Zap, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function EngagementModels({ onOpenQuoteModal }) {
  const models = [
    {
      id: 'fixed-price',
      title: 'Fixed-Price Project',
      subtitle: 'Best for Defined Scope',
      icon: Shield,
      badge: 'Most Popular',
      desc: 'Ideal for clearly defined website launches, rebrands, and promotional video shoots with established milestones and deliverables.',
      features: [
        'Guaranteed budget with zero hidden fees',
        'Milestone-based delivery schedule',
        'Strict delivery deadline & launch target',
        'Structured review & revision rounds',
        'Full vector & code source handoff'
      ],
      isPopular: true,
    },
    {
      id: 'monthly-retainer',
      title: 'Monthly Growth Retainer',
      subtitle: 'Best for Continuous Scaling',
      icon: RefreshCw,
      badge: 'High Value',
      desc: 'Partner with us as your dedicated digital & creative department. Continuous reel production, social graphics, and web enhancements every month.',
      features: [
        'Guaranteed monthly design & video hours',
        'Bi-weekly strategy & performance calls',
        'Priority task turnaround (24–48 hours)',
        'Ongoing website maintenance & SEO updates',
        'Direct Slack / WhatsApp channel with Ankit'
      ],
      isPopular: false,
    },
    {
      id: 'dedicated-sprint',
      title: 'Dedicated Creative Sprint',
      subtitle: 'Best for Rapid MVP Launch',
      icon: Zap,
      badge: 'Fast-Track',
      desc: 'Exclusive, high-intensity focus from our core team to design, build, and deploy an MVP web app or comprehensive brand identity within 7–14 days.',
      features: [
        '100% exclusive focus on your project',
        'Daily morning standups & async video updates',
        'Rapid wireframing to live staging in days',
        'Same-day revision turnaround',
        'Launch-day live technical support'
      ],
      isPopular: false,
    },
    {
      id: 'hybrid-custom',
      title: 'Custom Hybrid Scope',
      subtitle: 'Best for Enterprise & Scaling Brands',
      icon: Clock,
      badge: 'Tailored',
      desc: 'Customized hybrid arrangement blending fixed web engineering deliverables with flexible monthly creative retainers and ad campaigns.',
      features: [
        'Custom modular contract terms',
        'Blended technical & marketing resources',
        'Scalable hours based on seasonal campaigns',
        'Full multi-channel creative direction',
        'Executive founder-level advisory'
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="engagement" className="py-24 sm:py-32 bg-[#060709] text-white relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-gold-400/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collaboration Frameworks</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
            Flexible Engagement Models <br />
            <span className="gold-text-gradient">Tailored to Your Stage of Growth.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            Choose the engagement model that best aligns with your timeline, internal bandwidth, and budget parameters.
          </p>
        </div>

        {/* 4 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model) => {
            const IconComp = model.icon;
            return (
              <div
                key={model.id}
                className={`p-7 rounded-3xl bg-[#0D0F15] border transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                  model.isPopular
                    ? 'border-gold-400/60 shadow-gold-glow relative'
                    : 'border-white/5 hover:border-gold-400/30'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-[#E5BD70] group-hover:bg-[#E5BD70] group-hover:text-black transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span 
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        model.isPopular 
                          ? 'bg-[#E5BD70] text-black' 
                          : 'bg-white/5 text-neutral-400 border border-white/5'
                      }`}
                    >
                      {model.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#E5BD70] uppercase tracking-wider block mb-1">
                    {model.subtitle}
                  </span>

                  <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#E5BD70] transition-colors mb-3">
                    {model.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                    {model.desc}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-2.5 pt-4 border-t border-white/5 mb-8">
                    {model.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E5BD70] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Select Button */}
                <button
                  onClick={onOpenQuoteModal}
                  className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    model.isPopular
                      ? 'text-neutral-950 shadow-md hover:scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                  style={
                    model.isPopular
                      ? { background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)' }
                      : {}
                  }
                >
                  <span>Select Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

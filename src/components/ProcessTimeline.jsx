import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Proven Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white">
            Our 6-Step Execution Roadmap.
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            From initial concept to deployment and scaling, our systematic workflow ensures complete transparency and predictable high-quality delivery.
          </p>
        </div>

        {/* 6-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl bg-dark-900/90 border border-neutral-800/90 p-8 hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-1 group shadow-card-dark flex flex-col justify-between"
            >
              {/* Step indicator badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-dark-950 font-syne font-extrabold text-lg flex items-center justify-center shadow-gold-glow">
                  {step.step}
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  Phase {step.step}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-syne font-bold text-white group-hover:text-gold-light transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-gold-accent uppercase tracking-wider mt-1 mb-3">
                  {step.phase}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-2">
                {step.keyActions.map((action, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Workflow Guarantee note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            ✦ All milestones are tracked with direct client approval stages before progressing to subsequent phases.
          </p>
        </div>

      </div>
    </section>
  );
}

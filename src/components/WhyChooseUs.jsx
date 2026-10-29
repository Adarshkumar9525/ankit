import React from 'react';
import { Layers, Zap, Sparkles, UserCheck, CheckCircle2, XCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/agencyData';

const iconMap = {
  Layers: Layers,
  Zap: Zap,
  Sparkles: Sparkles,
  UserCheck: UserCheck,
};

export default function WhyChooseUs() {
  const comparison = [
    {
      feature: "Project Execution",
      others: "Juggling 4-5 disconnected freelancers with endless miscommunications",
      theVisual: "Unified digital partner handling Web, Branding, Content & AI under one roof"
    },
    {
      feature: "Turnaround Time",
      others: "2 to 4 months of corporate bureaucracy and missed deadlines",
      theVisual: "Agile 7 to 20-day delivery sprints with structured milestone approvals"
    },
    {
      feature: "Aesthetic Standard",
      others: "Outdated generic templates that look identical to competitors",
      theVisual: "Bespoke luxury aesthetics, custom typography & conversion-led layouts"
    },
    {
      feature: "Modern Capabilities",
      others: "Traditional slow workflows with zero AI leverage or automations",
      theVisual: "AI-assisted media generation and business workflow automations"
    },
    {
      feature: "Communication",
      others: "Junior account managers with delayed email responses",
      theVisual: "Direct access to Founder Ankit via WhatsApp & personal calls"
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      
      {/* Background ambient */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-3">
            <span>The Competitive Edge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white">
            Why Ambitious Brands Partner With Us.
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            We eliminate the friction of modern digital growth by merging uncompromising luxury craftsmanship with rapid execution.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-dark-900/90 border border-neutral-800 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1 group shadow-card-dark"
              >
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-neutral-700/60 flex items-center justify-center text-gold-accent mb-6 group-hover:bg-gold-500/10 group-hover:border-gold-400/40 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-syne font-bold text-white group-hover:text-gold-light transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table / Matrix */}
        <div className="rounded-3xl bg-dark-900/95 border border-neutral-800 overflow-hidden shadow-card-dark">
          <div className="p-6 sm:p-8 border-b border-neutral-800 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-syne font-bold text-white">
              The Standard Agency Experience vs.{' '}
              <span className="gold-text-gradient">THEVISUAL.IN</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Here is how our boutique partnership creates tangible value for your business.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-dark-950/60 text-xs uppercase tracking-wider text-neutral-400">
                  <th className="py-4 px-6 font-semibold">Aspect</th>
                  <th className="py-4 px-6 font-semibold text-neutral-400">Typical Freelancer / Agency</th>
                  <th className="py-4 px-6 font-semibold text-gold-accent bg-gold-400/5">THEVISUAL.IN Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {comparison.map((row, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-white text-xs sm:text-sm whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-xs sm:text-sm text-neutral-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-xs sm:text-sm text-neutral-200 bg-gold-400/5 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                        <span className="text-white">{row.theVisual}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

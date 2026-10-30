import React from 'react';
import { Monitor, Cpu, Sparkles, Layers, Palette, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DigitalSolutions({ onOpenQuoteModal }) {
  const solutions = [
    {
      id: 'modern-websites',
      title: 'Modern Websites & Web Apps',
      category: 'Engineering & UX',
      desc: 'Bespoke web experiences developed with React, Next.js, and modern headless CMS architecture. Ultra-fast loading speeds, frictionless navigation, and optimized for maximum inbound conversion.',
      icon: Monitor,
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Mobile First'],
      colSpan: 'lg:col-span-8',
      isFeatured: true
    },
    {
      id: 'business-automation',
      title: 'Business Automation',
      category: 'Smart Operations',
      desc: 'Connect your lead funnels, WhatsApp communications, CRM pipelines, and client onboarding into an effortless automated flow.',
      icon: Cpu,
      tags: ['WhatsApp API', 'CRM', 'Webhooks'],
      colSpan: 'lg:col-span-4'
    },
    {
      id: 'ai-content',
      title: 'AI-Powered Content & Avatars',
      category: 'Next-Gen Media',
      desc: 'Supercharge creative output with AI video synthesis, hyper-realistic voiceover rendering, and dynamic personalized advertising creative variations.',
      icon: Sparkles,
      tags: ['AI Reels', 'Generative Media', 'Scale'],
      colSpan: 'lg:col-span-4'
    },
    {
      id: 'branding-systems',
      title: 'End-to-End Branding Systems',
      category: 'Visual Identity',
      desc: 'Comprehensive visual systems that span vector logos, luxury packaging, brand guidelines, typography rules, and multi-format stationery suites.',
      icon: Palette,
      tags: ['Vector Marks', 'Brand Guidelines', 'Packaging'],
      colSpan: 'lg:col-span-4'
    },
    {
      id: 'digital-experiences',
      title: 'Immersive Digital Experiences',
      category: 'Creative Technology',
      desc: 'Interactive 3D showcases, motion-designed landing pages, and cinematic reel production that captivate attention and drive engagement.',
      icon: Layers,
      tags: ['3D Motion', 'Micro-interactions', 'Video Production'],
      colSpan: 'lg:col-span-4'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#08090C] text-white relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-gold-400/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creativity Meets Technology</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
              Intelligent Digital Solutions <br />
              <span className="gold-text-gradient">Engineered for the Modern Web.</span>
            </h2>
          </div>

          <p className="max-w-md text-neutral-400 text-sm leading-relaxed">
            We bridge the gap between creative visual artistry and intelligent engineering to build digital products that captivate and convert.
          </p>
        </div>

        {/* Dynamic Bento-Style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {solutions.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`${item.colSpan} relative rounded-3xl p-8 bg-[#0D0F15] border border-white/5 hover:border-gold-400/30 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-[#E5BD70] group-hover:bg-[#E5BD70] group-hover:text-black transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-xl sm:text-2xl text-white group-hover:text-[#E5BD70] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/5 text-neutral-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

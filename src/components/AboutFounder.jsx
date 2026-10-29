import React from 'react';
import { Award, Target, HeartHandshake, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { AGENCY_INFO } from '../data/agencyData';

export default function AboutFounder() {
  return (
    <section id="about" className="py-24 bg-dark-900/60 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Founder & Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-dark-800 to-dark-900 border border-gold-400/30 p-8 sm:p-10 shadow-card-dark overflow-hidden">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Founder Avatar / Insignia */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 p-0.5 shadow-gold-glow">
                  <div className="w-full h-full rounded-[14px] bg-dark-950 flex items-center justify-center">
                    <span className="font-syne font-extrabold text-3xl text-gold-accent">A</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-syne font-bold text-white">
                    {AGENCY_INFO.founder}
                  </h3>
                  <p className="text-xs font-semibold text-gold-accent uppercase tracking-wider">
                    Founder & Creative Technologist
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    THEVISUAL.IN Studio
                  </p>
                </div>
              </div>

              {/* Founder Statement Quote */}
              <blockquote className="text-sm sm:text-base text-neutral-200 italic leading-relaxed border-l-2 border-gold-400 pl-4 py-1 mb-8">
                "Our single mission is to transform raw ideas into digital powerhouses. We don't believe in vanity aesthetics that don't convert; we engineer websites, brands, and visual media that create tangible enterprise value."
              </blockquote>

              {/* Contact / Social Quick Links */}
              <div className="space-y-3 pt-6 border-t border-neutral-800 text-xs">
                <a
                  href={`tel:${AGENCY_INFO.rawPhone}`}
                  className="flex items-center gap-3 text-neutral-300 hover:text-gold-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-accent" />
                  <span>{AGENCY_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="flex items-center gap-3 text-neutral-300 hover:text-gold-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-accent" />
                  <span>{AGENCY_INFO.email}</span>
                </a>
                <a
                  href={AGENCY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-gold-accent transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-gold-accent" />
                  <span>{AGENCY_INFO.instagram}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Agency Philosophy & Vision */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Behind THEVISUAL.IN</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white leading-tight">
              Crafting The Future of{' '}
              <span className="gold-text-gradient">Digital Presence.</span>
            </h2>

            <p className="mt-6 text-base text-neutral-300 leading-relaxed font-light">
              Founded on the belief that modern businesses deserve more than cookie-cutter templates, <strong>THEVISUAL.IN</strong> operates as a specialized full-stack digital creative agency. We combine high-end design sensibilities with modern software engineering and AI capabilities.
            </p>

            <p className="mt-4 text-base text-neutral-300 leading-relaxed font-light">
              Whether you are a startup getting your first brand identity, a real estate agency demanding an interactive sales portal, a retail brand needing viral reels, or a corporation automating client workflows — we execute each project with obsession over detail.
            </p>

            {/* Core Values 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="p-4 rounded-xl bg-dark-850 border border-neutral-800">
                <Target className="w-6 h-6 text-gold-accent mb-2" />
                <h4 className="text-sm font-syne font-bold text-white">Precision</h4>
                <p className="text-xs text-neutral-400 mt-1">Every pixel and code line serves a commercial purpose.</p>
              </div>

              <div className="p-4 rounded-xl bg-dark-850 border border-neutral-800">
                <Award className="w-6 h-6 text-gold-accent mb-2" />
                <h4 className="text-sm font-syne font-bold text-white">Excellence</h4>
                <p className="text-xs text-neutral-400 mt-1">Uncompromising aesthetic and performance benchmarks.</p>
              </div>

              <div className="p-4 rounded-xl bg-dark-850 border border-neutral-800">
                <HeartHandshake className="w-6 h-6 text-gold-accent mb-2" />
                <h4 className="text-sm font-syne font-bold text-white">Partnership</h4>
                <p className="text-xs text-neutral-400 mt-1">Direct founder transparency and long-term scaling.</p>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-10">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-bold text-sm shadow-gold-glow hover:scale-[1.02] transition-all"
              >
                <span>Connect Directly with Ankit</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

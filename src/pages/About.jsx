import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Award, HeartHandshake, ShieldCheck, ArrowUpRight, MessageCircle, Phone, Mail } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { AGENCY_INFO, PROCESS_STEPS } from '../data/agencyData';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      
      {/* Hero Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4">
            <span>About THEVISUAL.IN</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-syne font-extrabold text-white">
            Ideas into Digital.{' '}
            <span className="block mt-2 gold-text-gradient">
              We Build. We Create. We Grow.
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            THEVISUAL.IN is an agile, boutique digital and creative agency founded to help modern businesses establish a distinctive, trustworthy, and high-converting digital presence.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-dark-900/60 border-y border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold block mb-2">
                Who We Are
              </span>
              <h2 className="text-3xl font-syne font-bold text-white mb-4">
                A Modern Creative & Digital Studio
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-4">
                In an era crowded with generic website builders and template-driven agencies, <strong>THEVISUAL.IN</strong> takes a deliberate, craft-first approach. We operate as a focused creative partner combining modern frontend engineering, luxury brand design, cinematic video editing, and practical AI automation.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                We work directly with startups, local businesses, retail brands, creators, and growing enterprises. By avoiding unnecessary corporate layers, we provide fast delivery, transparent milestone reviews, and honest collaboration.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-dark-850 border border-gold-400/30 shadow-card-dark">
              <h3 className="text-xl font-syne font-bold text-white mb-4">
                Our Operating Philosophy
              </h3>
              <ul className="space-y-3.5 text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-400/20 text-gold-accent flex items-center justify-center shrink-0 mt-0.5">✦</div>
                  <span><strong>Zero Fake Fluff:</strong> We never promise overnight millions or fake rankings. We build solid, high-converting digital assets that work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-400/20 text-gold-accent flex items-center justify-center shrink-0 mt-0.5">✦</div>
                  <span><strong>Direct Access:</strong> No junior account managers. You collaborate directly with our creative lead.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-400/20 text-gold-accent flex items-center justify-center shrink-0 mt-0.5">✦</div>
                  <span><strong>End-to-End Synergy:</strong> Your website, brand typography, video reels, and ads all talk the exact same visual language.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-gold-400/10 text-gold-accent flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-syne font-bold text-white mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                To become the most dependable and design-forward boutique digital partner for ambitious businesses—turning ideas into impactful digital platforms that foster genuine growth and elevate brand prestige.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-gold-400/10 text-gold-accent flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-syne font-bold text-white mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                To deliver bespoke websites, authentic branding, cinematic video content, and smart AI automations with uncompromising aesthetic standards, rapid turnaround, and transparent communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-dark-900/60 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
              Principles We Live By
            </span>
            <h2 className="text-3xl font-syne font-bold text-white mt-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-dark-850 border border-neutral-800">
              <Award className="w-6 h-6 text-gold-accent mb-3" />
              <h4 className="text-lg font-syne font-bold text-white mb-1">Craftsmanship</h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                Every line of code and visual pixel is polished with care. We take pride in clean typography, fast performance, and aesthetic elegance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-dark-850 border border-neutral-800">
              <ShieldCheck className="w-6 h-6 text-gold-accent mb-3" />
              <h4 className="text-lg font-syne font-bold text-white mb-1">Honesty & Clarity</h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                We believe in realistic timelines, transparent pricing, and direct communication. No hidden fees or misleading promises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-dark-850 border border-neutral-800">
              <HeartHandshake className="w-6 h-6 text-gold-accent mb-3" />
              <h4 className="text-lg font-syne font-bold text-white mb-1">Partnership</h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                We treat our clients' businesses as our own. We stay available post-launch to help you scale, iterate, and adapt to modern tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-dark-850 to-dark-900 border border-gold-400/40 shadow-card-dark">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 p-0.5 shadow-gold-glow shrink-0">
                <div className="w-full h-full rounded-[14px] bg-dark-950 flex items-center justify-center font-syne font-extrabold text-4xl text-gold-accent">
                  A
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <span className="text-xs uppercase tracking-wider text-gold-accent font-semibold">
                  Founder & Lead Creator
                </span>
                <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white mt-1 mb-3">
                  {AGENCY_INFO.founder}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-6">
                  "I started THEVISUAL.IN because businesses deserve a single, trustworthy partner who understands both the art of design and the engineering of modern websites. When you work with us, you are collaborating directly with creators who care about your commercial success."
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs">
                  <a
                    href={`tel:${AGENCY_INFO.rawPhone}`}
                    className="flex items-center gap-2 text-neutral-300 hover:text-gold-accent transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-accent" />
                    <span>{AGENCY_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="flex items-center gap-2 text-neutral-300 hover:text-gold-accent transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold-accent" />
                    <span>{AGENCY_INFO.email}</span>
                  </a>
                  <a
                    href={AGENCY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-300 hover:text-gold-accent transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-gold-accent" />
                    <span>{AGENCY_INFO.instagram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center border-t border-neutral-800">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-syne font-bold text-white mb-4">
            Want to Discuss a Project or Collaboration?
          </h2>
          <p className="text-sm text-neutral-300 font-light mb-8">
            Connect directly with us to explore how we can support your business goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/start-a-project"
              className="px-7 py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-dark-950 font-bold text-sm shadow-gold-glow transition-all"
            >
              Start a Project
            </Link>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 font-medium text-sm transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

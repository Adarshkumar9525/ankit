import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  Sparkles, 
  Share2, 
  Video, 
  TrendingUp, 
  Palette, 
  Globe, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle,
  Search,
  PenTool,
  Rocket
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { 
  AGENCY_INFO, 
  OUR_VISION, 
  OUR_MISSION, 
  CORE_SERVICES_SUMMARY, 
  HOW_WE_WORK_STEPS, 
  WHY_CHOOSE_US, 
  CORE_BELIEF 
} from '../data/agencyData';

export default function About() {
  const serviceIcons = [Share2, Video, TrendingUp, Palette, Globe, Layers];

  return (
    <div className="pt-24 pb-20">
      
      {/* Hero Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-syne font-extrabold text-white leading-tight">
            We Don't Just Build Your Digital Presence.{' '}
            <span className="block mt-2 gold-text-gradient">
              We Help Your Business Grow.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
            THEVISUALS.IN is a creative digital marketing and business growth agency focused on helping businesses build a strong online presence, connect with their target audience, and grow in the digital world.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 bg-dark-900/60 border-y border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold block mb-2">
                Our Story & Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-syne font-bold text-white mb-4">
                Tailored Solutions for Every Business Story
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-4">
                We understand that every business has a different story, different goals, and different challenges. That's why we don't believe in one-size-fits-all marketing solutions.
              </p>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-4">
                Our approach combines creativity, strategic thinking, digital marketing, and technology to create solutions that help businesses stand out from the competition.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                From building your social media presence to creating engaging content and running targeted advertising campaigns, we work to make your brand more visible, recognizable, and connected with the right audience.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-dark-850 to-dark-900 border border-gold-400/30 shadow-card-dark relative">
              <div className="w-12 h-12 rounded-2xl bg-gold-400/10 text-gold-accent flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gold-accent font-bold block mb-2">
                Our Core Goal
              </span>
              <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white mb-4 leading-snug">
                Our Goal is Simple:
              </h3>
              <p className="text-lg sm:text-xl text-neutral-200 font-medium leading-relaxed mb-6">
                "To turn your business goals into <span className="gold-text-gradient font-bold">meaningful digital growth</span>."
              </p>
              <div className="pt-6 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-gold-accent" />
                <span>Creative Strategy • Digital Impact • Real Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold text-white">
              What We Do
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              We provide creative and digital solutions designed to help businesses grow, attract customers, and strengthen their brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES_SUMMARY.map((service, idx) => {
              const IconComp = serviceIcons[idx] || Sparkles;
              return (
                <div
                  key={service.id}
                  className="p-7 rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between group shadow-card-dark hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gold-400/10 text-gold-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-600 group-hover:text-gold-accent transition-colors">
                        {service.num}
                      </span>
                    </div>
                    <h3 className="text-xl font-syne font-bold text-white group-hover:text-gold-light transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center gap-1.5 text-xs text-gold-accent font-semibold">
                    <span>Delivered with precision</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-dark-900/60 border-y border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold block mb-2">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold text-white">
              How We Work
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              We believe that successful marketing starts with understanding the business. That's why we follow a structured approach:
            </p>
          </div>

          <div className="space-y-4">
            {HOW_WE_WORK_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 sm:p-7 rounded-2xl bg-dark-850 border border-neutral-800 hover:border-gold-400/30 transition-all flex flex-col sm:flex-row sm:items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-dark-950 border border-gold-400/30 text-gold-accent flex items-center justify-center shrink-0 font-syne font-black text-lg group-hover:border-gold-400 group-hover:scale-105 transition-all">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-syne font-bold text-white group-hover:text-gold-light transition-colors mb-1">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose THEVISUALS.IN? */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold block mb-2">
              Our Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold text-white">
              Why Choose THEVISUALS.IN?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/30 transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-gold-400/10 text-gold-accent flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-syne font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Belief Callout Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-gold-500/10 via-amber-500/10 to-transparent border border-gold-400/30 text-center">
            <span className="text-xs uppercase tracking-widest text-gold-accent font-bold block mb-2">
              Our Core Belief
            </span>
            <p className="text-lg sm:text-2xl font-syne font-bold text-white max-w-3xl mx-auto leading-relaxed">
              "{CORE_BELIEF}"
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-dark-900/60 border-y border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-dark-850 border border-neutral-800 hover:border-gold-400/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-gold-400/10 text-gold-accent flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-syne font-bold text-white mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {OUR_VISION}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-dark-850 border border-neutral-800 hover:border-gold-400/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-gold-400/10 text-gold-accent flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-syne font-bold text-white mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {OUR_MISSION}
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
                  "I started THEVISUALS.IN because businesses deserve a single, trustworthy partner who understands both the art of design and the engineering of modern websites. When you work with us, you are collaborating directly with creators who care about your commercial success."
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

      {/* Closing Call to Action */}
      <section className="py-20 text-center border-t border-neutral-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-400/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THEVISUALS.IN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white mb-4 leading-tight">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="gold-text-gradient">Great Together.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 font-medium mb-3">
            Your business has a story. Let's make the digital world notice it.
          </p>
          <p className="text-xs sm:text-sm text-gold-accent font-semibold uppercase tracking-widest mb-4">
            THEVISUALS.IN — Creative Ideas. Digital Impact. Business Growth.
          </p>
          <p className="text-sm text-neutral-400 font-light mb-8">
            Have a project in mind? Let's talk.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/start-a-project"
              className="px-8 py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-dark-950 font-bold text-sm shadow-gold-glow transition-all hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-dark-900 hover:bg-dark-850 text-white border border-neutral-700 hover:border-gold-400/40 font-semibold text-sm transition-all"
            >
              Get in Touch
            </Link>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 font-medium text-sm transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

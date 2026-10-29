import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles, Globe, Palette, Film, Megaphone, Cpu } from 'lucide-react';
import { AGENCY_INFO, SERVICES_LIST, PORTFOLIO_LIST, PROCESS_STEPS, WHY_CHOOSE_US } from '../data/agencyData';

export default function Home() {
  const featuredServices = SERVICES_LIST.slice(0, 6);
  const featuredPortfolio = PORTFOLIO_LIST.slice(0, 4);

  return (
    <div className="pt-20">
      
      {/* 1. Hero Section with User's Uploaded Black & Gold Abstract Artwork */}
      <section 
        className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden transition-opacity duration-1000 animate-in fade-in"
        style={{
          backgroundImage: "url('/images/gold-abstract.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Subtle black gradient overlay ensuring text readability while keeping gold light trails striking */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-950/60 to-dark-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(7,7,9,0.75)_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full gold-badge backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-gold-accent">
                {AGENCY_INFO.supportingTagline}
              </span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-extrabold tracking-tight leading-[1.08] text-white">
              We Build. We Create.{' '}
              <span className="block mt-2 gold-text-gradient">
                We Grow.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
              From powerful websites and memorable branding to digital marketing and AI-powered business solutions, we help businesses build their digital presence.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/start-a-project"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-950 font-syne font-bold text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </Link>

              <Link
                to="/portfolio"
                className="px-8 py-4 rounded-xl bg-dark-850/90 hover:bg-dark-800 text-white font-medium text-base border border-neutral-700/60 hover:border-gold-400/50 backdrop-blur-md transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Our Work</span>
              </Link>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 font-medium text-base border border-emerald-500/30 backdrop-blur-md transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Dedicated Premium Visual Section Showcasing the AI Art Installation Artwork */}
          <div className="mt-12 sm:mt-16 relative rounded-3xl overflow-hidden border border-gold-400/40 shadow-card-dark aspect-[16/9] sm:aspect-[21/9] group bg-dark-900">
            <img
              src="/images/ai-installation.jpg"
              alt="THEVISUAL.IN Creative Technology & AI Art Installation"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              loading="eager"
            />
            {/* Soft dark luxury vignette overlay to blend with the obsidian & gold aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950/40 via-transparent to-dark-950/40 pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-wrap items-center justify-between gap-4 z-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold block mb-1">
                  Creative Technology & AI Innovation
                </span>
                <h3 className="text-xl sm:text-2xl font-syne font-bold text-white">
                  Ideas into Digital.
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 bg-dark-950/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-gold-400/30 shadow-lg">
                <span className="text-gold-accent font-bold">13 Specialized Capabilities</span>
                <span>•</span>
                <span>Direct Founder Access (Ankit)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Services Overview */}
      <section className="py-24 bg-dark-900/60 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white mt-2">
                Services Engineered for Impact.
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-sm font-bold text-gold-accent hover:text-white flex items-center gap-2"
            >
              <span>Explore All 13 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((svc) => (
              <div
                key={svc.id}
                className="rounded-2xl bg-dark-850/90 border border-neutral-800 p-8 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1 shadow-card-dark flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-400/10 text-gold-accent border border-gold-400/20">
                      {svc.category}
                    </span>
                    <span className="text-xs text-neutral-400">{svc.timeline}</span>
                  </div>

                  <h3 className="text-xl font-syne font-bold text-white group-hover:text-gold-light transition-colors mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <Link
                    to={`/services/${svc.id}`}
                    className="text-xs font-bold text-gold-accent hover:text-white flex items-center gap-1.5"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(`Hi THEVISUAL.IN, I would like to inquire about ${svc.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Featured Portfolio (Genuine Concept Projects) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white mt-2">
                Selected Works & Concepts.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mt-3 md:mt-0">
              *Clearly labeled concept work showcasing our aesthetic standards, technical capability, and execution style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPortfolio.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 overflow-hidden transition-all duration-300 shadow-card-dark block"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dark-950/80 text-gold-accent border border-gold-400/30 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                    {project.isConcept && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-neutral-900/80 text-neutral-300 border border-neutral-700 backdrop-blur-md">
                        Concept Work
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-syne font-bold text-white group-hover:text-gold-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gold-accent font-semibold mt-1 mb-3">
                    {project.type}
                  </p>
                  <p className="text-sm text-neutral-300 font-light line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">View Case Study & Scope</span>
                    <span className="text-gold-accent font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-white font-semibold text-sm border border-neutral-700 hover:border-gold-400 transition-colors"
            >
              <span>View All Portfolio Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Why Choose THEVISUAL.IN */}
      <section className="py-24 bg-dark-900/60 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
              The Value Proposition
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white mt-2">
              Why Choose THEVISUAL.IN
            </h2>
            <p className="mt-4 text-base text-neutral-300">
              We bridge the gap between creative design, modern web engineering, and commercial results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-dark-850/90 border border-neutral-800 hover:border-gold-400/40 transition-all duration-300 shadow-card-dark"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-accent flex items-center justify-center mb-5 font-syne font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-syne font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. How We Work (6-Step Process) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white mt-2">
              How We Work.
            </h2>
            <p className="mt-4 text-base text-neutral-300">
              Our six-step process ensures structured planning, zero confusion, and consistent high-quality delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all duration-300 shadow-card-dark group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-dark-950 font-syne font-extrabold text-lg flex items-center justify-center shadow-gold-glow">
                    {step.step}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-2xl font-syne font-bold text-white group-hover:text-gold-light transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-gold-accent uppercase tracking-wider mt-1 mb-3">
                  {step.phase}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Final Call to Action */}
      <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 border-t border-neutral-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold block mb-3">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-6xl font-syne font-extrabold text-white">
            Ready to Build Something Great?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
            Whether you need a high-converting website, luxury brand identity, or AI business automation, we are ready to bring your ideas into digital reality.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/start-a-project"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-950 font-syne font-bold text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Link>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 font-semibold text-base border border-emerald-500/40 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>

          <div className="mt-10 text-xs text-neutral-400">
            Direct response from Founder <strong>Ankit (+91 9156694311)</strong> • No spam, honest timelines
          </div>
        </div>
      </section>

    </div>
  );
}

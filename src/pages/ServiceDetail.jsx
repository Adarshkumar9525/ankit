import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MessageCircle, CheckCircle2, Clock, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES_LIST, PORTFOLIO_LIST, AGENCY_INFO } from '../data/agencyData';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES_LIST.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find related services
  const relatedServices = SERVICES_LIST.filter((s) =>
    service.relatedIds?.includes(s.id)
  );

  // Find matching portfolio concepts
  const relevantPortfolio = PORTFOLIO_LIST.filter(
    (p) => p.categoryLabel.toLowerCase().includes(service.category.toLowerCase()) ||
           p.deliverables.some(d => d.toLowerCase().includes(service.title.toLowerCase().split(' ')[0]))
  );

  const waUrl = `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(
    `Hi THEVISUAL.IN, I am interested in your ${service.title} service. Could you share more details and pricing?`
  )}`;

  return (
    <div className="pt-24 pb-20">
      
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-gold-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Main Service Header */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-400/10 text-gold-accent border border-gold-400/30">
            {service.category}
          </span>
          <span className="text-xs text-neutral-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-accent" />
            <span>Turnaround: <strong className="text-white">{service.timeline}</strong></span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold text-white leading-tight">
          {service.title}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to={`/start-a-project?service=${encodeURIComponent(service.title)}`}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-bold text-sm shadow-gold-glow flex items-center gap-2"
          >
            <span>Enquire for this Service</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 font-semibold text-sm flex items-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Discuss on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Problem & Solution Breakdown */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Problem */}
          <div className="p-8 rounded-3xl bg-dark-900 border border-rose-500/20 shadow-card-dark">
            <div className="flex items-center gap-2.5 text-rose-400 font-bold text-xs uppercase tracking-wider mb-4">
              <AlertCircle className="w-4 h-4" />
              <span>The Core Challenge Addressed</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {service.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl bg-dark-900 border border-gold-400/30 shadow-card-dark">
            <div className="flex items-center gap-2.5 text-gold-accent font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Our Strategic Approach</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {service.solution}
            </p>
          </div>

        </div>
      </section>

      {/* Deliverables & Scope Checklist */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-850 border border-neutral-800 shadow-card-dark">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-gold-accent font-bold">
              Complete Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-syne font-bold text-white mt-1">
              Included Deliverables & Scope
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-dark-900 border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-neutral-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 text-xs text-neutral-400">
            ✦ All scopes include milestone approvals and direct revision cycles prior to final source handover.
          </div>
        </div>
      </section>

      {/* Relevant Portfolio Examples (if available) */}
      {relevantPortfolio.length > 0 && (
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-gold-accent font-bold">
              Related Work
            </span>
            <h2 className="text-2xl font-syne font-bold text-white mt-1">
              Relevant Concepts & Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relevantPortfolio.map((p) => (
              <Link
                key={p.id}
                to={`/portfolio/${p.id}`}
                className="group rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 p-4 transition-all block"
              >
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-base font-syne font-bold text-white group-hover:text-gold-light">
                  {p.title}
                </h4>
                <p className="text-xs text-gold-accent mt-0.5">{p.type}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-gold-accent font-bold">
              Complementary Capabilities
            </span>
            <h2 className="text-2xl font-syne font-bold text-white mt-1">
              Related Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.id}`}
                className="p-5 rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/30 transition-all block group"
              >
                <span className="text-[11px] uppercase tracking-wider text-gold-accent font-semibold block mb-1">
                  {rel.category}
                </span>
                <h4 className="text-sm font-syne font-bold text-white group-hover:text-gold-light mb-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  {rel.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action Bar */}
      <section className="mt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-dark-850 to-dark-900 border border-gold-400/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card-dark">
          <div>
            <h3 className="text-xl sm:text-2xl font-syne font-bold text-white">
              Ready to start with {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              We can provide a preliminary estimate and project roadmap within 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={`/start-a-project?service=${encodeURIComponent(service.title)}`}
              className="px-6 py-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-dark-950 font-bold text-xs sm:text-sm shadow-gold-glow"
            >
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

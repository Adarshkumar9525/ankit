import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageCircle, Code, Layers } from 'lucide-react';
import { PORTFOLIO_LIST, AGENCY_INFO } from '../data/agencyData';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PORTFOLIO_LIST.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const waUrl = `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(
    `Hi THEVISUAL.IN, I saw your case study on ${project.title} and would like to build a similar project for my brand.`
  )}`;

  return (
    <div className="pt-24 pb-20">
      
      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-gold-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Main Case Header */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-400/10 text-gold-accent border border-gold-400/30">
            {project.categoryLabel}
          </span>
          {project.isConcept && (
            <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-700">
              Concept Exploration
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold text-white">
          {project.title}
        </h1>
        <p className="text-sm sm:text-base font-semibold text-gold-accent mt-2 mb-6">
          {project.type}
        </p>

        {/* Feature Image Banner */}
        <div className="rounded-3xl overflow-hidden aspect-[16/9] border border-neutral-800 shadow-card-dark mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-8 space-y-8">
            <div>
              <h3 className="text-xl font-syne font-bold text-white mb-3">
                Project Overview
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-syne font-bold text-white mb-3">
                Client Objective & Core Challenge
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed font-light">
                {project.clientGoal}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-syne font-bold text-white mb-4">
                Scope & Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-900 border border-neutral-800 text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-dark-900 border border-neutral-800 shadow-card-dark">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-4">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-lg bg-dark-950 text-neutral-300 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                  Want a Similar Outcome?
                </span>
                <Link
                  to={`/start-a-project?service=${encodeURIComponent(project.title)}`}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-bold text-xs flex items-center justify-center gap-2 shadow-gold-glow mb-3"
                >
                  <span>Enquire for Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

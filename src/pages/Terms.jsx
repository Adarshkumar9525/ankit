import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function Terms() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-gold-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold-400/10 text-gold-accent flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-wider text-gold-accent font-bold">Standard Terms</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold text-white mb-8">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          <p>
            Welcome to <strong>THEVISUAL.IN</strong>. By accessing our website (<strong>{AGENCY_INFO.website}</strong>) or engaging our digital, branding, video, or web development services, you agree to these practical operational terms.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">1. Scope of Work & Quotations</h2>
            <p>
              All project estimates, proposals, and deliverables are provided on a scope-agreed basis prior to commencing work. Any material alterations or additions to the deliverables requested after project kickoff will be quoted and billed as a scope revision.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">2. Payment Milestones</h2>
            <p>
              Standard engagements require an initial deposit (typically 50%) to reserve project capacity and initiate discovery/design, with the remaining balance due upon final milestone review and prior to public deployment or source code release.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">3. Intellectual Property</h2>
            <p>
              Upon receipt of full payment, all custom deliverables created specifically for the client (including approved brand logos, custom website source code, and edited video masters) become the property of the client. THEVISUAL.IN reserves the right to showcase approved work within our agency portfolio and case studies unless restricted by an explicit Non-Disclosure Agreement (NDA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">4. Realistic Expectations & No Guarantees</h2>
            <p>
              While we adhere to the highest aesthetic and engineering standards, digital outcomes depend on multiple external factors (such as market competition, client offer, ad spend, and search engine algorithm updates). We do not make unsupported claims of guaranteed rankings or immediate revenue figures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">5. Governing Law & Inquiries</h2>
            <p>
              Any inquiries regarding commercial agreements or questions about these terms can be directed to Founder Ankit via email at{' '}
              <a href={`mailto:${AGENCY_INFO.email}`} className="text-gold-accent hover:underline">
                {AGENCY_INFO.email}
              </a>{' '}
              or by phone at {AGENCY_INFO.phone}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

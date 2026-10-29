import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function PrivacyPolicy() {
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
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase tracking-wider text-gold-accent font-bold">Legal Notice</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold text-white mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          <p>
            Last Updated: October 2026. This Privacy Notice describes how <strong>THEVISUAL.IN</strong> collects, uses, and safeguards information when you visit our website (<strong>{AGENCY_INFO.website}</strong>), reach out via WhatsApp, submit project enquiries, or apply for recruitment opportunities.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">1. Information We Collect</h2>
            <p>
              We only collect personal information that you voluntarily choose to provide to us. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
              <li><strong>Contact Information:</strong> Your name, business name, phone number, and email address when submitting an enquiry or contact request.</li>
              <li><strong>Project Details:</strong> Information regarding your project brief, budget preferences, timeline, and reference links.</li>
              <li><strong>Careers Information:</strong> Resume files (PDFs), LinkedIn or portfolio URLs, and work experience provided when applying for openings.</li>
              <li><strong>Technical Logs:</strong> Basic anonymous web analytics such as browser type, page views, and timestamps to ensure website uptime and performance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">2. How We Use Your Information</h2>
            <p>
              Your information is used strictly for legitimate business communication:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
              <li>To evaluate project briefs and provide preliminary estimates or proposals.</li>
              <li>To communicate with you via WhatsApp or Email regarding your specific request.</li>
              <li>To evaluate candidate qualifications for published job vacancies.</li>
              <li>We never sell, rent, or trade your personal data to third-party marketing companies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">3. Direct Messaging and WhatsApp</h2>
            <p>
              When initiating contact via WhatsApp through our site links, conversations take place on the WhatsApp platform subject to WhatsApp’s own privacy terms and end-to-end encryption standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">4. Data Security & Retention</h2>
            <p>
              We take reasonable administrative measures to ensure that your project briefs and contact details are stored securely. We retain enquiry records only for the period necessary to conduct commercial correspondence or as required for bookkeeping.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-syne font-bold text-white">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions about this privacy statement, or wish to update or delete your submitted information, please email us directly at{' '}
              <a href={`mailto:${AGENCY_INFO.email}`} className="text-gold-accent hover:underline">
                {AGENCY_INFO.email}
              </a>{' '}
              or contact Founder Ankit at {AGENCY_INFO.phone}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

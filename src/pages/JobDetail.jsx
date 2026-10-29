import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle2, Upload, Send, ShieldCheck } from 'lucide-react';
import { JOB_OPENINGS, AGENCY_INFO } from '../data/agencyData';

export default function JobDetail() {
  const { id } = useParams();
  const job = JOB_OPENINGS.find((j) => j.id === id);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolioUrl: '',
    experience: '',
    coverLetter: '',
    consent: false
  });
  const [resumeName, setResumeName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload your resume in PDF format only.');
        e.target.value = '';
        return;
      }
      setResumeName(file.name);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) {
      alert('Please consent to the recruitment privacy notice before submitting.');
      return;
    }
    const body = `Job Application for: ${job.title}\n\nCandidate Details:\n• Name: ${form.fullName}\n• Email: ${form.email}\n• Phone: ${form.phone}\n• Portfolio/LinkedIn: ${form.portfolioUrl}\n• Experience: ${form.experience}\n• Cover Note:\n${form.coverLetter}\n\n(Resume file: ${resumeName || 'Will attach in reply'})`;
    
    const mailto = `mailto:${AGENCY_INFO.email}?subject=${encodeURIComponent(`Job Application: ${job.title} - ${form.fullName}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-gold-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Openings</span>
        </Link>
      </div>

      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Job Header */}
        <div className="p-8 sm:p-10 rounded-3xl bg-dark-900 border border-neutral-800 shadow-card-dark mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-400/10 text-gold-accent border border-gold-400/30">
              {job.department}
            </span>
            <span className="text-xs text-neutral-300 px-3 py-1 rounded-full bg-dark-800 border border-neutral-700">
              {job.type}
            </span>
            <span className="text-xs text-neutral-400">
              Deadline: {job.deadline}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-syne font-extrabold text-white">
            {job.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold-accent" />
              <span>{job.workArrangement} ({job.location})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold-accent" />
              <span>Experience: {job.experience}</span>
            </div>
          </div>
        </div>

        {/* Job Details Content */}
        <div className="space-y-10">
          
          <div>
            <h3 className="text-xl font-syne font-bold text-white mb-3">
              Role Description
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {job.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-syne font-bold text-white mb-4">
              Core Responsibilities
            </h3>
            <ul className="space-y-2.5">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-syne font-bold text-white mb-4">
              Required Skills & Qualifications
            </h3>
            <ul className="space-y-2.5">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Application Form */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-dark-850 border border-gold-400/30 shadow-card-dark">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-gold-accent font-bold">
              Direct Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-syne font-bold text-white mt-1">
              Apply for {job.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Complete the form below. Your application is reviewed directly by our leadership.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase text-neutral-400 font-bold mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-neutral-400 font-bold mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase text-neutral-400 font-bold mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-neutral-400 font-bold mb-1.5">
                  Portfolio or GitHub / LinkedIn URL *
                </label>
                <input
                  type="url"
                  required
                  value={form.portfolioUrl}
                  onChange={(e) => setForm({ ...form, portfolioUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase text-neutral-400 font-bold mb-1.5">
                Relevant Years of Experience
              </label>
              <input
                type="text"
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                placeholder="e.g. 1.5 years building React websites"
                className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-neutral-400 font-bold mb-1.5">
                Upload Resume (PDF format only)
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleResumeUpload}
                className="w-full text-xs text-neutral-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-dark-800 file:text-gold-accent hover:file:bg-dark-700"
              />
              {resumeName && (
                <span className="text-xs text-emerald-400 mt-1.5 block">Selected: {resumeName}</span>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase text-neutral-400 font-bold mb-1.5">
                Cover Note / Introduction
              </label>
              <textarea
                rows={3}
                value={form.coverLetter}
                onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                placeholder="Tell us why you would be a great fit for THEVISUAL.IN..."
                className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
              />
            </div>

            <div className="flex items-start gap-2.5 pt-2">
              <input
                type="checkbox"
                id="job-consent"
                required
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-0.5 rounded border-neutral-700 bg-dark-950 text-gold-accent focus:ring-0"
              />
              <label htmlFor="job-consent" className="text-xs text-neutral-400 leading-snug">
                I confirm the information provided is accurate and consent to THEVISUAL.IN reviewing my application materials for this opening.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-950 font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Submit Application via Email</span>
            </button>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-center text-xs">
                Your email client has opened with your application details. Please hit send to deliver your application to the recruitment desk.
              </div>
            )}
          </form>

        </div>

      </section>

    </div>
  );
}

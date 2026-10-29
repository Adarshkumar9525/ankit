import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, ArrowUpRight, Send, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { JOB_OPENINGS, AGENCY_INFO } from '../data/agencyData';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [showSpeculativeModal, setShowSpeculativeModal] = useState(false);
  const [speculativeForm, setSpeculativeForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    roleInterest: 'Frontend Developer',
    linkedinOrPortfolio: '',
    experience: '',
    note: '',
    consent: false
  });
  const [speculativeSuccess, setSpeculativeSuccess] = useState(false);
  const [resumeFileName, setResumeFileName] = useState('');

  const departments = ['All', 'Engineering', 'Creative & Media', 'Design'];

  const filteredJobs = selectedDepartment === 'All'
    ? JOB_OPENINGS
    : JOB_OPENINGS.filter((j) => j.department === selectedDepartment);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload your resume in PDF format only.');
        e.target.value = '';
        return;
      }
      setResumeFileName(file.name);
    }
  };

  const handleSpeculativeSubmit = (e) => {
    e.preventDefault();
    if (!speculativeForm.consent) {
      alert('Please consent to the recruitment privacy notice to proceed.');
      return;
    }
    // Format speculative application
    const msg = `Hi THEVISUAL.IN Recruitment,\n\nI am submitting a Speculative Profile for future openings:\n• Name: ${speculativeForm.fullName}\n• Email: ${speculativeForm.email}\n• Phone: ${speculativeForm.phone}\n• Role of Interest: ${speculativeForm.roleInterest}\n• Portfolio/LinkedIn: ${speculativeForm.linkedinOrPortfolio}\n• Experience: ${speculativeForm.experience}\n• Intro: ${speculativeForm.note}`;
    
    // Open WhatsApp / mailto option
    const mailto = `mailto:${AGENCY_INFO.email}?subject=${encodeURIComponent(`Speculative Application: ${speculativeForm.fullName} - ${speculativeForm.roleInterest}`)}&body=${encodeURIComponent(msg)}`;
    window.location.href = mailto;
    setSpeculativeSuccess(true);
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Careers Hero */}
      <section className="py-16 md:py-24 text-center max-w-4xl mx-auto px-4 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4">
          <Briefcase className="w-3.5 h-3.5 text-gold-accent" />
          <span>Join Our Growing Team</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-syne font-extrabold text-white">
          Build Your Career With{' '}
          <span className="gold-text-gradient">THEVISUAL.IN</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
          Explore opportunities to work on websites, branding, digital marketing, video production, and AI-powered creative solutions.
        </p>

        {/* Department Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedDepartment === dept
                  ? 'bg-gold-400 text-dark-950 font-bold shadow-gold-glow'
                  : 'bg-dark-900 border border-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Job Listings Grid or Empty State */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all duration-300 shadow-card-dark flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-400/10 text-gold-accent border border-gold-400/30">
                      {job.department}
                    </span>
                    <span className="text-xs text-neutral-400">{job.type}</span>
                  </div>

                  <h3 className="text-xl font-syne font-bold text-white group-hover:text-gold-light transition-colors mb-2">
                    {job.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-neutral-400 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold-accent" />
                      <span>{job.workArrangement} ({job.location})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gold-accent" />
                      <span>Exp: {job.experience}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-3 leading-relaxed mb-6">
                    {job.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <Link
                    to={`/careers/${job.id}`}
                    className="text-xs font-bold text-gold-accent hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Role Details & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Professional No Openings State */
          <div className="p-12 rounded-3xl bg-dark-900 border border-neutral-800 text-center max-w-2xl mx-auto shadow-card-dark">
            <Briefcase className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
            <h3 className="text-2xl font-syne font-bold text-white mb-2">
              No Current Openings in this Department
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
              We don't have any open positions right now. However, we're always interested in connecting with talented people. Send us your profile for future opportunities.
            </p>
            <button
              onClick={() => setShowSpeculativeModal(true)}
              className="px-6 py-3 rounded-xl bg-gold-400 text-dark-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:bg-gold-300 transition-all"
            >
              Submit Speculative Profile
            </button>
          </div>
        )}

        {/* Speculative Application Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-dark-850 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card-dark">
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-syne font-bold text-white">
              Don't See Your Exact Role?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              We frequently collaborate with freelance designers, developers, video editors, and AI creative specialists.
            </p>
          </div>
          <button
            onClick={() => setShowSpeculativeModal(true)}
            className="px-6 py-3 rounded-xl bg-gold-400/10 hover:bg-gold-400 text-gold-accent hover:text-dark-950 border border-gold-400/40 text-xs sm:text-sm font-bold transition-all shrink-0"
          >
            Send Profile for Future Roles ↗
          </button>
        </div>
      </section>

      {/* Speculative Application Modal */}
      {showSpeculativeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-dark-900 border border-gold-400/40 rounded-3xl p-6 sm:p-8 text-left shadow-card-dark">
            <button
              onClick={() => setShowSpeculativeModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-dark-800 text-neutral-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-syne font-bold text-white mb-2">
              Speculative Profile Submission
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Submit your profile directly to our recruitment email for upcoming project-based and full-time vacancies.
            </p>

            <form onSubmit={handleSpeculativeSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase text-neutral-400 font-bold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={speculativeForm.fullName}
                    onChange={(e) => setSpeculativeForm({ ...speculativeForm, fullName: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-neutral-400 font-bold mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={speculativeForm.email}
                    onChange={(e) => setSpeculativeForm({ ...speculativeForm, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase text-neutral-400 font-bold mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={speculativeForm.phone}
                    onChange={(e) => setSpeculativeForm({ ...speculativeForm, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-neutral-400 font-bold mb-1">Role of Interest</label>
                  <select
                    value={speculativeForm.roleInterest}
                    onChange={(e) => setSpeculativeForm({ ...speculativeForm, roleInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-gold-400"
                  >
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="Video Editor & Reels">Video Editor & Reels</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Social Media Manager">Social Media Manager</option>
                    <option value="AI Creative Specialist">AI Creative Specialist</option>
                    <option value="Internship">Internship Opportunity</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase text-neutral-400 font-bold mb-1">Portfolio or LinkedIn URL *</label>
                <input
                  type="url"
                  required
                  value={speculativeForm.linkedinOrPortfolio}
                  onChange={(e) => setSpeculativeForm({ ...speculativeForm, linkedinOrPortfolio: e.target.value })}
                  placeholder="https://behance.net/..., github.com/..., or linkedin.com/..."
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-neutral-400 font-bold mb-1">Resume (PDF)</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleResumeChange}
                  className="w-full text-xs text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-dark-800 file:text-gold-accent hover:file:bg-dark-700"
                />
                {resumeFileName && (
                  <span className="text-[11px] text-emerald-400 mt-1 block">Attached: {resumeFileName}</span>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase text-neutral-400 font-bold mb-1">Brief Introduction</label>
                <textarea
                  rows={2}
                  value={speculativeForm.note}
                  onChange={(e) => setSpeculativeForm({ ...speculativeForm, note: e.target.value })}
                  placeholder="Tell us about your key skills and availability..."
                  className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-gold-400"
                />
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={speculativeForm.consent}
                  onChange={(e) => setSpeculativeForm({ ...speculativeForm, consent: e.target.checked })}
                  className="mt-0.5 rounded border-neutral-700 bg-dark-950 text-gold-accent focus:ring-0"
                />
                <label htmlFor="consent" className="text-[11px] text-neutral-400 leading-snug">
                  I consent to THEVISUAL.IN securely storing my contact details and profile solely for recruitment and evaluation purposes.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-bold text-xs sm:text-sm shadow-gold-glow flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit Profile via Email</span>
              </button>

              {speculativeSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-center text-xs">
                  Your email client has opened with your application. Our recruitment desk will review it.
                </div>
              )}
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

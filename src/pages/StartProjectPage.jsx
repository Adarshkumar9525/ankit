import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, MessageCircle, CheckCircle2, Sparkles, Clock, Calculator, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO, SERVICES_LIST } from '../data/agencyData';

export default function StartProjectPage() {
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedServices: prefilledService ? [prefilledService] : ['Website Development'],
    budget: '₹35,000 – ₹75,000',
    timeline: 'Standard (2–3 Weeks)',
    description: '',
    referenceUrl: ''
  });

  const [status, setStatus] = useState({ type: null, message: '' });

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        selectedServices: [prefilledService]
      }));
    }
  }, [prefilledService]);

  const budgetOptions = [
    '₹20,000 – ₹40,000',
    '₹40,000 – ₹80,000',
    '₹80,000 – ₹1,50,000',
    '₹1,50,000+'
  ];

  const timelineOptions = [
    'Urgent / Rush (7–10 Days)',
    'Standard (2–3 Weeks)',
    'Phased Milestones / Flexible'
  ];

  const toggleService = (title) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(title);
      if (exists) {
        if (prev.selectedServices.length === 1) return prev; // keep at least one
        return { ...prev, selectedServices: prev.selectedServices.filter(s => s !== title) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, title] };
      }
    });
  };

  const constructFormattedSummary = () => {
    let msg = `PROJECT ENQUIRY FOR THEVISUAL.IN\n`;
    msg += `---------------------------------\n`;
    msg += `Client Name: ${formData.name}\n`;
    if (formData.company) msg += `Company / Brand: ${formData.company}\n`;
    msg += `Phone / WhatsApp: ${formData.phone}\n`;
    msg += `Email: ${formData.email}\n`;
    msg += `Required Services:\n - ${formData.selectedServices.join('\n - ')}\n`;
    msg += `Estimated Budget: ${formData.budget}\n`;
    msg += `Desired Timeline: ${formData.timeline}\n`;
    if (formData.referenceUrl) msg += `Reference URL: ${formData.referenceUrl}\n`;
    if (formData.description) msg += `Project Description:\n${formData.description}\n`;
    return msg;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus({ type: 'error', message: 'Please complete the required fields (Name, Phone, Email).' });
      return;
    }
    const text = constructFormattedSummary();
    const url = `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setStatus({ type: 'success', message: 'Redirected to WhatsApp with your prefilled proposal. Hit send to connect with Ankit.' });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus({ type: 'error', message: 'Please complete the required fields (Name, Phone, Email).' });
      return;
    }
    const text = constructFormattedSummary();
    const mailto = `mailto:${AGENCY_INFO.email}?subject=${encodeURIComponent(`New Project Enquiry: ${formData.name} (${formData.company || 'Direct'})`)}&body=${encodeURIComponent(text)}`;
    window.location.href = mailto;
    setStatus({ type: 'success', message: 'Your email application has opened with your inquiry brief. Please send it to submit.' });
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
          <span>Start a Project</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-syne font-extrabold text-white">
          Let's Scope Your{' '}
          <span className="gold-text-gradient">Next Project.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          Tell us about your requirements, timeline, and goals. We will prepare an honest roadmap and preliminary budget estimate within 24 hours.
        </p>
      </section>

      {/* Main Form Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-900 border border-gold-400/30 shadow-card-dark">
          
          <form className="space-y-10">
            
            {/* Step 1: Select Services */}
            <div>
              <label className="text-xs sm:text-sm uppercase tracking-wider font-bold text-gold-accent flex items-center justify-between mb-4">
                <span>1. Select Required Services (Multi-select)</span>
                <span className="text-xs text-neutral-400 font-normal">{formData.selectedServices.length} selected</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {SERVICES_LIST.map((svc) => {
                  const isChecked = formData.selectedServices.includes(svc.title);
                  return (
                    <button
                      type="button"
                      key={svc.id}
                      onClick={() => toggleService(svc.title)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-gold-400/10 border-gold-400 text-white shadow-gold-glow'
                          : 'bg-dark-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center border text-[10px] ${
                        isChecked ? 'bg-gold-400 border-gold-400 text-dark-950 font-bold' : 'border-neutral-700'
                      }`}>
                        {isChecked && '✓'}
                      </div>
                      <span className="text-xs font-semibold leading-snug">{svc.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs sm:text-sm uppercase tracking-wider font-bold text-gold-accent block mb-3">
                  2. Target Investment Budget
                </label>
                <div className="space-y-2">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-left ${
                        formData.budget === b
                          ? 'bg-gold-400 text-dark-950 border-gold-400'
                          : 'bg-dark-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs sm:text-sm uppercase tracking-wider font-bold text-gold-accent block mb-3">
                  3. Desired Completion Timeline
                </label>
                <div className="space-y-2">
                  {timelineOptions.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setFormData({ ...formData, timeline: t })}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-left ${
                        formData.timeline === t
                          ? 'bg-gold-400 text-dark-950 border-gold-400'
                          : 'bg-dark-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="pt-6 border-t border-neutral-800">
              <label className="text-xs sm:text-sm uppercase tracking-wider font-bold text-gold-accent block mb-4">
                4. Your Contact Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikramaditya"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Aura Atelier Ltd"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                  Reference Website or Inspiration URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.referenceUrl}
                  onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                  Project Description & Goals
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us what you want to achieve, key deliverables, and any specific questions..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            {/* Status alerts */}
            {status.type === 'error' && (
              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs sm:text-sm">
                {status.message}
              </div>
            )}
            {status.type === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm">
                {status.message}
              </div>
            )}

            {/* Submission Actions */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                ✦ Direct consultation with Founder <strong>Ankit ({AGENCY_INFO.phone})</strong>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit via Email</span>
                </button>
              </div>
            </div>

          </form>

        </div>
      </section>

    </div>
  );
}

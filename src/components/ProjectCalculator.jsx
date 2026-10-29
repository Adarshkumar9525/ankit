import React, { useState } from 'react';
import { Calculator, Send, MessageCircle, Check, ArrowRight, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function ProjectCalculator({ defaultService = null }) {
  const [selectedServices, setSelectedServices] = useState(
    defaultService ? [defaultService] : ['Modern Web & Digital Platforms']
  );
  const [selectedTimeline, setSelectedTimeline] = useState('Standard (2-3 Weeks)');
  const [selectedBudget, setSelectedBudget] = useState('₹35,000 – ₹75,000');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [submittedStatus, setSubmittedStatus] = useState(false);

  const availableServices = [
    { id: 'web', name: 'Modern Web & Digital Platforms', basePrice: 25000 },
    { id: 'brand', name: 'Luxury Brand Identity & Design System', basePrice: 18000 },
    { id: 'social', name: 'Performance Marketing & Social Strategy', basePrice: 20000 },
    { id: 'video', name: 'Cinematic Video Editing & Commercial Reels', basePrice: 15000 },
    { id: 'ai', name: 'AI Solutions & Workflow Automation', basePrice: 22000 },
  ];

  const timelines = [
    { id: 'rush', name: 'Rush Delivery (7–10 Days)', multiplier: 1.25 },
    { id: 'standard', name: 'Standard (2-3 Weeks)', multiplier: 1.0 },
    { id: 'flexible', name: 'Flexible / Phased Milestone', multiplier: 0.95 },
  ];

  const budgets = [
    '₹20,000 – ₹40,000',
    '₹40,000 – ₹80,000',
    '₹80,000 – ₹1,50,000',
    '₹1,50,000+'
  ];

  const toggleService = (name) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  // Build WhatsApp prefilled message
  const generateWhatsAppMessage = () => {
    let msg = `Hi THEVISUAL.IN!\n\nI would like to start a project:\n`;
    if (clientName) msg += `• Name: ${clientName}\n`;
    if (clientPhone) msg += `• Contact: ${clientPhone}\n`;
    if (clientEmail) msg += `• Email: ${clientEmail}\n`;
    msg += `• Selected Services:\n  - ${selectedServices.join('\n  - ')}\n`;
    msg += `• Timeline: ${selectedTimeline}\n`;
    msg += `• Target Budget: ${selectedBudget}\n`;
    if (projectNotes) msg += `• Project Brief: ${projectNotes}\n`;
    msg += `\nPlease let me know your availability for a quick consultation.`;
    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const encoded = generateWhatsAppMessage();
    const url = `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    let body = `Name: ${clientName}\nPhone: ${clientPhone}\nEmail: ${clientEmail}\nServices: ${selectedServices.join(', ')}\nTimeline: ${selectedTimeline}\nBudget: ${selectedBudget}\nNotes: ${projectNotes}`;
    const mailto = `mailto:${AGENCY_INFO.email}?subject=${encodeURIComponent(`New Project Inquiry from ${clientName || 'Website'}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmittedStatus(true);
  };

  return (
    <section id="calculator" className="py-24 bg-dark-900/80 border-t border-neutral-800 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-gold-accent" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white">
            Plan Your Project & Get Instant Estimate.
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Select your requirements below. You can send the proposal directly to our team via WhatsApp or Email.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-dark-850/90 border border-gold-400/30 rounded-3xl p-6 sm:p-10 shadow-card-dark backdrop-blur-xl">
          
          <form className="space-y-10">
            
            {/* Step 1: Services */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm uppercase tracking-wider font-bold text-gold-accent flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gold-400 text-dark-950 text-xs flex items-center justify-center font-bold">1</span>
                  Select Required Services (Select all that apply)
                </label>
                <span className="text-xs text-neutral-400">{selectedServices.length} selected</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableServices.map((svc) => {
                  const isChecked = selectedServices.includes(svc.name);
                  return (
                    <button
                      type="button"
                      key={svc.id}
                      onClick={() => toggleService(svc.name)}
                      className={`p-4 rounded-xl text-left border transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-gold-400/10 border-gold-400 text-white shadow-gold-glow'
                          : 'bg-dark-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 border transition-colors ${
                        isChecked ? 'bg-gold-400 border-gold-400 text-dark-950' : 'border-neutral-700 bg-dark-950'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-white block">
                          {svc.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Timeline */}
            <div>
              <label className="text-sm uppercase tracking-wider font-bold text-gold-accent flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-gold-400 text-dark-950 text-xs flex items-center justify-center font-bold">2</span>
                Desired Delivery Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelines.map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setSelectedTimeline(t.name)}
                    className={`p-3.5 rounded-xl text-center border text-xs sm:text-sm font-semibold transition-all ${
                      selectedTimeline === t.name
                        ? 'bg-gold-400 text-dark-950 border-gold-400 shadow-gold-glow'
                        : 'bg-dark-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Budget Range */}
            <div>
              <label className="text-sm uppercase tracking-wider font-bold text-gold-accent flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-gold-400 text-dark-950 text-xs flex items-center justify-center font-bold">3</span>
                Estimated Investment Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`p-3 rounded-xl text-center border text-xs sm:text-sm font-semibold transition-all ${
                      selectedBudget === b
                        ? 'bg-gold-400 text-dark-950 border-gold-400 shadow-gold-glow'
                        : 'bg-dark-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Contact & Project Notes */}
            <div className="pt-4 border-t border-neutral-800">
              <label className="text-sm uppercase tracking-wider font-bold text-gold-accent flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-gold-400 text-dark-950 text-xs flex items-center justify-center font-bold">4</span>
                Your Details & Project Brief
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1.5 font-medium">Your Name / Company</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1.5 font-medium">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1.5 font-medium">Email Address</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1.5 font-medium">Tell us about your project or current challenges</label>
                <textarea
                  rows={3}
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  placeholder="Tell us what you're building, target audience, any competitor references or specific requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 text-center sm:text-left">
                ✦ Direct quote routed to Founder <strong>Ankit ({AGENCY_INFO.phone})</strong>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit via Email</span>
                </button>
              </div>
            </div>

            {submittedStatus && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-center text-sm">
                Thank you! Your email client has been opened. We will review your project brief within 24 hours.
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

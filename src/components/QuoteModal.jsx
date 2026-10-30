import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, Sparkles, Check } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function QuoteModal({ isOpen, onClose, preselectedService }) {
  const [selectedServices, setSelectedServices] = useState([
    preselectedService || 'Modern Web & Digital Platforms'
  ]);
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [clientTimeline, setClientTimeline] = useState('Standard (2-3 Weeks)');
  const [projectDetails, setProjectDetails] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setSelectedServices([preselectedService]);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const servicesList = [
    'Modern Web & Digital Platforms',
    'Luxury Brand Identity & Design System',
    'Performance Marketing & Social Strategy',
    'Cinematic Video Editing & Commercial Reels',
    'AI Solutions & Workflow Automation'
  ];

  const handleToggle = (s) => {
    if (selectedServices.includes(s)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(item => item !== s));
      }
    } else {
      setSelectedServices([...selectedServices, s]);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    let msg = `Hi THEVISUAL.IN,\n\nI would like to start a project:\n`;
    if (clientName) msg += `• Name: ${clientName}\n`;
    if (clientContact) msg += `• Contact: ${clientContact}\n`;
    msg += `• Services: ${selectedServices.join(', ')}\n`;
    msg += `• Timeline: ${clientTimeline}\n`;
    if (projectDetails) msg += `• Details: ${projectDetails}\n`;
    const url = `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-dark-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-dark-900 border border-gold-400/40 rounded-3xl p-6 sm:p-8 shadow-card-dark text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-dark-800 text-neutral-400 hover:text-white border border-neutral-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
            <span>Fast Project Initiation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white">
            Start Your Project with <span className="gold-text-gradient">THEVISUAL.IN</span>
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">
            Fill in your project goals and connect with Founder Ankit immediately.
          </p>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
          
          {/* Services Selector */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
              Select Desired Services
            </label>
            <div className="space-y-2">
              {servicesList.map((svc, i) => {
                const active = selectedServices.includes(svc);
                return (
                  <button
                    type="button"
                    key={i}
                    onClick={() => handleToggle(svc)}
                    className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                      active
                        ? 'bg-gold-400/10 border-gold-400 text-white'
                        : 'bg-dark-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span>{svc}</span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                      active ? 'bg-gold-400 border-gold-400 text-dark-950' : 'border-neutral-700'
                    }`}>
                      {active && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1.5">
                Your Name / Brand *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Vikramaditya"
                className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1.5">
                Phone or WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={clientContact}
                onChange={(e) => setClientContact(e.target.value)}
                placeholder="+91 91566 94311"
                className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1.5">
              Target Completion Timeline
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Rush (7–10 Days)', 'Standard (2-3 Weeks)', 'Flexible'].map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setClientTimeline(time)}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                    clientTimeline === time
                      ? 'bg-gold-400 text-dark-950 border-gold-400'
                      : 'bg-dark-950 text-neutral-300 border-neutral-800'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1.5">
              Project Description / Specific Requirements
            </label>
            <textarea
              rows={3}
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder="Tell us what you need, current website URL if any, or any questions..."
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
            />
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-950 font-syne font-bold text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Submit via WhatsApp</span>
          </button>

          <p className="text-center text-xs text-neutral-400">
            ✦ Messages sent directly to Founder <strong>Ankit (+91 9156694311)</strong>. We respect your confidentiality.
          </p>

        </form>

      </div>
    </div>
  );
}

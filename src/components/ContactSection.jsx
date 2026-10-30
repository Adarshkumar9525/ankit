import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, ArrowUpRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { AGENCY_INFO } from '../data/agencyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website Development',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Website Development',
    'Branding and Logo Design',
    'Social Media Management',
    'Digital Marketing and Advertising',
    'Reel Shooting and Video Editing',
    'AI Video and AI Content',
    'AI Automation',
    'Graphic Design and Product Creatives',
    'Business Digital Solutions',
    'Other / Custom Scope'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone / WhatsApp number';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please share a brief note about your project';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Send formatted message via WhatsApp
    const text = `Hi THEVISUALS.IN!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Interested: ${formData.service}\n\nProject Brief:\n${formData.message}`;
    const url = `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Website Development',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#070709] text-white relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-gold-400/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
            Let's Start a <span className="gold-text-gradient">Conversation.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            Have an upcoming project, rebrand, or marketing campaign? Contact our studio directly via WhatsApp, email, or our inquiry form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Card */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 rounded-3xl bg-gradient-to-br from-emerald-950/60 to-[#0F1015] border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                  Instant Response
                </span>
              </div>
              <h3 className="text-xl font-syne font-bold text-white group-hover:text-emerald-300 transition-colors">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-neutral-300 mt-1 mb-4 font-light leading-relaxed">
                Fastest way to discuss project requirements, deliverables, and estimated timelines.
              </p>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <span>{AGENCY_INFO.phone}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Email Contact Card */}
            <a
              href={`mailto:${AGENCY_INFO.email}`}
              className="group block p-7 rounded-3xl bg-[#0F1015] border border-white/10 hover:border-gold-400/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-400/10 text-[#E5BD70] flex items-center justify-center border border-gold-400/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-neutral-400">
                  Official Email
                </span>
              </div>
              <h3 className="text-xl font-syne font-bold text-white group-hover:text-[#E5BD70] transition-colors">
                Send an Email
              </h3>
              <p className="text-xs text-neutral-300 mt-1 mb-4 font-light leading-relaxed">
                For detailed briefs, RFP documents, contracts, and agency partnerships.
              </p>
              <div className="text-sm font-bold text-[#E5BD70] flex items-center gap-1.5 break-all">
                <span>{AGENCY_INFO.email}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-3xl bg-[#0F1015] border border-white/10 hover:border-gold-400/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E5BD70] group-hover:bg-[#E5BD70] group-hover:text-black transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-sm text-white group-hover:text-[#E5BD70] transition-colors">Follow Our Work</h4>
                    <p className="text-xs text-neutral-400">{AGENCY_INFO.instagram}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white" />
              </div>
            </a>

          </div>

          {/* Right Column: Lead Form with Visual Validation */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0E13] border border-white/10 shadow-2xl relative">
              
              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium">
                    Thank you! Your project brief has been opened in WhatsApp. We will connect with you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border ${
                      errors.name ? 'border-red-400/70 focus:border-red-400' : 'border-white/10 focus:border-[#E5BD70]'
                    } text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@company.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border ${
                        errors.email ? 'border-red-400/70 focus:border-red-400' : 'border-white/10 focus:border-[#E5BD70]'
                      } text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border ${
                        errors.phone ? 'border-red-400/70 focus:border-red-400' : 'border-white/10 focus:border-[#E5BD70]'
                      } text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#14151C] border border-white/10 text-white text-sm focus:border-[#E5BD70] focus:outline-none transition-colors"
                  >
                    {services.map((srv) => (
                      <option key={srv} value={srv} className="bg-[#0D0E13] text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Project Brief / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand goals, target timeline, or specific deliverables..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border ${
                      errors.message ? 'border-red-400/70 focus:border-red-400' : 'border-white/10 focus:border-[#E5BD70]'
                    } text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-neutral-950 font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)',
                  }}
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Send Project Inquiry</span>
                </button>

                <p className="text-center text-[11px] text-neutral-500 font-light mt-3">
                  We respect your confidentiality. Direct reply from founder Ankit within 24 hours.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

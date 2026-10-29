import React, { useState } from 'react';
import { Phone, Mail, Globe, MessageCircle, Send, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { AGENCY_INFO } from '../data/agencyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Web Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi THEVISUAL.IN!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Interested: ${formData.service}\n\nProject Brief:\n${formData.message}`;
    const url = `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-gold-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white">
            Let's Build Something Exceptional.
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Have an upcoming project, rebrand, or campaign? Connect with us via WhatsApp, call, or project inquiry form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Card */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/60 to-dark-900 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:shadow-card-dark"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                  Instant Response
                </span>
              </div>
              <h3 className="text-xl font-syne font-bold text-white group-hover:text-emerald-300 transition-colors">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-neutral-300 mt-1 mb-4">
                Quickest way to discuss deliverables, budget, and project availability.
              </p>
              <div className="text-base font-bold text-emerald-400 flex items-center gap-1.5">
                <span>{AGENCY_INFO.phone}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${AGENCY_INFO.email}`}
              className="group block p-6 sm:p-8 rounded-3xl bg-dark-900/90 border border-neutral-800 hover:border-gold-400/40 transition-all duration-300 hover:shadow-card-dark"
            >
              <div className="w-12 h-12 rounded-2xl bg-dark-800 text-gold-accent flex items-center justify-center border border-neutral-700/60 mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-syne font-bold text-white group-hover:text-gold-light transition-colors">
                Direct Email
              </h3>
              <p className="text-xs text-neutral-300 mt-1 mb-4">
                Send formal RFPs, briefs, or presentation decks.
              </p>
              <div className="text-sm font-semibold text-gold-accent break-all flex items-center gap-1.5">
                <span>{AGENCY_INFO.email}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </div>
            </a>

            {/* Instagram & Social Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/90 border border-neutral-800">
              <div className="flex items-center gap-3 mb-4">
                <InstagramIcon className="w-5 h-5 text-gold-accent" />
                <h4 className="text-base font-syne font-bold text-white">Social Presence</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Instagram</span>
                  <a
                    href={AGENCY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gold-accent hover:underline flex items-center gap-1"
                  >
                    <span>{AGENCY_INFO.instagram}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Website</span>
                  <span className="font-medium text-neutral-400">{AGENCY_INFO.website}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Business Hours</span>
                  <span className="font-medium text-neutral-400">10:00 AM – 8:00 PM IST</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-dark-850/90 border border-neutral-800 shadow-card-dark">
              <h3 className="text-2xl font-syne font-bold text-white mb-2">
                Send a Direct Project Brief
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-8">
                Fill out the quick form below and it will open directly in WhatsApp with your message prefilled.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Roy"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 91566 94311"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@brand.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 focus:border-gold-400 text-white text-sm focus:outline-none"
                    >
                      <option value="Web Development">Web Development & Digital Platforms</option>
                      <option value="Luxury Branding & Design">Luxury Branding & Identity</option>
                      <option value="Social Media & Marketing">Performance Marketing & Social Media</option>
                      <option value="Video Production">Cinematic Video & Commercial Reels</option>
                      <option value="AI Solutions & Automation">AI Solutions & Automation</option>
                      <option value="Full Digital Package">Full Digital Synergy Package (All Services)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                    Project Goals / Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you want to achieve, timeline, competitor references, or specific questions..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 focus:border-gold-400 text-white placeholder-neutral-600 text-sm focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-950 font-syne font-bold text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Inquiry to WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-400 font-medium">
                    Redirecting to WhatsApp to send your inquiry...
                  </p>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

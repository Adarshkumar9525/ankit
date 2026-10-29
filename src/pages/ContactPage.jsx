import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, ArrowUpRight, Clock, Globe } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { AGENCY_INFO } from '../data/agencyData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Contact Form Message:\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n• Subject: ${formData.subject}\n• Message:\n${formData.message}`;
    
    // Send to WhatsApp
    const url = `https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4">
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-syne font-extrabold text-white">
          Contact{' '}
          <span className="gold-text-gradient">THEVISUAL.IN</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          We are ready to answer your questions, consult on your upcoming projects, and provide straightforward advice.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct channels cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Click-to-call */}
            <a
              href={`tel:${AGENCY_INFO.rawPhone}`}
              className="p-6 rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all flex items-center gap-4 block group"
            >
              <div className="w-12 h-12 rounded-2xl bg-dark-800 text-gold-accent flex items-center justify-center border border-neutral-700/60 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase text-neutral-400 font-bold block">Click to Call</span>
                <span className="text-base sm:text-lg font-syne font-bold text-white group-hover:text-gold-light">
                  {AGENCY_INFO.phone}
                </span>
              </div>
            </a>

            {/* Click-to-email */}
            <a
              href={`mailto:${AGENCY_INFO.email}`}
              className="p-6 rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all flex items-center gap-4 block group"
            >
              <div className="w-12 h-12 rounded-2xl bg-dark-800 text-gold-accent flex items-center justify-center border border-neutral-700/60 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-xs uppercase text-neutral-400 font-bold block">Click to Email</span>
                <span className="text-sm sm:text-base font-semibold text-white group-hover:text-gold-light break-all">
                  {AGENCY_INFO.email}
                </span>
              </div>
            </a>

            {/* WhatsApp Direct */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-all flex items-center gap-4 block group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="text-xs uppercase text-emerald-300 font-bold block">Instant Chat</span>
                <span className="text-base sm:text-lg font-syne font-bold text-white group-hover:text-emerald-300">
                  WhatsApp Conversation
                </span>
              </div>
            </a>

            {/* Social Media Details */}
            <div className="p-6 rounded-3xl bg-dark-900 border border-neutral-800 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                Online Presence
              </h4>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-300 flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-gold-accent" />
                  <span>Instagram</span>
                </span>
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
              <div className="flex items-center justify-between text-sm pt-2 border-t border-neutral-800">
                <span className="text-neutral-300 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gold-accent" />
                  <span>Official Website</span>
                </span>
                <span className="text-neutral-400">{AGENCY_INFO.website}</span>
              </div>
              <div className="flex items-center justify-between text-sm pt-2 border-t border-neutral-800">
                <span className="text-neutral-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-accent" />
                  <span>Office Hours</span>
                </span>
                <span className="text-neutral-400">10:00 AM – 8:00 PM IST</span>
              </div>
            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-dark-850 border border-neutral-800 shadow-card-dark">
              <h3 className="text-2xl font-syne font-bold text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-8">
                Fill in the details below and we will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Branding & Design">Branding & Design</option>
                      <option value="Social Media & Marketing">Social Media & Marketing</option>
                      <option value="Video Editing & Reels">Video Editing & Reels</option>
                      <option value="AI Solutions & Automation">AI Solutions & Automation</option>
                      <option value="Career & Collaboration">Career & Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-neutral-400 font-semibold mb-1.5">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project or what you are looking for..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-950 font-syne font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Message via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-400">
                    Redirecting to WhatsApp to send your message directly to Ankit...
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

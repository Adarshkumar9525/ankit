import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/agencyData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-dark-900/60 border-t border-neutral-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Clear, transparent answers on our process, pricing, and execution.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-dark-850/90 border-gold-400/40 shadow-card-dark'
                    : 'bg-dark-900/80 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="text-base sm:text-lg font-syne font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                    isOpen
                      ? 'bg-gold-400 text-dark-950 border-gold-400 rotate-180'
                      : 'border-neutral-700 text-neutral-400 bg-dark-950'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed font-light border-t border-neutral-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

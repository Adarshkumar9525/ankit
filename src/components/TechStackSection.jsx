import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Sparkles, 
  Server, 
  Palette, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function TechStackSection({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Web & Frontend', icon: Code2 },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'ai', name: 'AI & Automation', icon: Sparkles },
    { id: 'backend', name: 'Backend & Cloud', icon: Server },
    { id: 'creative', name: 'Creative & Motion', icon: Palette },
  ];

  const technologies = {
    frontend: [
      { name: 'React.js', desc: 'Component architecture & reactive UI', badge: 'Core' },
      { name: 'Next.js', desc: 'Server-side rendering & speed', badge: 'Production' },
      { name: 'Tailwind CSS', desc: 'Utility-first modern design systems', badge: 'Styling' },
      { name: 'TypeScript', desc: 'Type-safe scalable JavaScript', badge: 'Reliability' },
      { name: 'Vite', desc: 'Lightning-fast builds & bundling', badge: 'Tooling' },
      { name: 'HTML5 / Modern CSS', desc: 'Semantic SEO and accessible markup', badge: 'Standards' },
    ],
    mobile: [
      { name: 'React Native', desc: 'Native iOS & Android from one codebase', badge: 'Mobile' },
      { name: 'Flutter', desc: 'High-performance multi-platform UI', badge: 'Cross-Platform' },
      { name: 'Progressive Web Apps', desc: 'Installable web apps with offline support', badge: 'PWA' },
      { name: 'Tailored App UI/UX', desc: 'Native gesture controls and micro-interactions', badge: 'Experience' },
      { name: 'Mobile API Sync', desc: 'Real-time push notifications and data sync', badge: 'Architecture' },
      { name: 'Responsive Layouts', desc: 'Flawless across all phone & tablet viewports', badge: 'Responsive' },
    ],
    ai: [
      { name: 'OpenAI & Claude APIs', desc: 'Intelligent generative text & workflow routing', badge: 'LLMs' },
      { name: 'AI Video Synthesis', desc: 'Dynamic synthetic media & commercial avatars', badge: 'Generative' },
      { name: 'WhatsApp Business API', desc: 'Automated 24/7 lead capture & reply bots', badge: 'Automation' },
      { name: 'Custom CRM Webhooks', desc: 'Automatic inquiry logging into Google Sheets & CRM', badge: 'Workflows' },
      { name: 'Prompt Engineering', desc: 'Custom fine-tuned prompts for marketing copy', badge: 'Content' },
      { name: 'AI Content Pipelines', desc: 'Automated batch reel ideas & hashtag generation', badge: 'Productivity' },
    ],
    backend: [
      { name: 'Node.js & Express', desc: 'Lightweight, scalable REST API services', badge: 'Backend' },
      { name: 'Vercel & Netlify', desc: 'Global edge deployment with 99.99% uptime', badge: 'Hosting' },
      { name: 'Serverless Functions', desc: 'Cost-effective server-side event processing', badge: 'Cloud' },
      { name: 'PostgreSQL / Supabase', desc: 'Relational data management & secure auth', badge: 'Database' },
      { name: 'REST & GraphQL APIs', desc: 'Clean, documented endpoints for integrations', badge: 'APIs' },
      { name: 'SSL & Cloudflare CDN', desc: 'Enterprise DDOS protection and global caching', badge: 'Security' },
    ],
    creative: [
      { name: 'Figma', desc: 'Collaborative UI wireframing and interactive prototypes', badge: 'Design' },
      { name: 'Adobe Premiere Pro', desc: 'Cinematic video pacing, cuts, and 9:16 reels', badge: 'Video' },
      { name: 'Adobe After Effects', desc: 'Dynamic motion typography, SFX & VFX', badge: 'Motion' },
      { name: 'Adobe Illustrator', desc: 'Scalable vector logos, branding marks, and favicons', badge: 'Vector' },
      { name: 'Adobe Photoshop', desc: 'High-resolution photo manipulation and product retouching', badge: 'Raster' },
      { name: 'Sound Design & SFX', desc: 'Curated licensed music and synced audio hooks', badge: 'Audio' },
    ],
  };

  return (
    <section id="technologies" className="py-24 sm:py-32 bg-[#08090C] text-white relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Technology Stack</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
            Technologies & Tools <br />
            <span className="gold-text-gradient">We Leverage to Build Your Brand.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            We build exclusively with production-proven, ultra-fast frameworks and industry-standard creative suites to ensure high performance, security, and scalability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-neutral-950 shadow-lg shadow-gold-400/20 scale-[1.03]'
                    : 'bg-[#111218] text-neutral-400 border border-white/10 hover:text-white hover:border-gold-400/30'
                }`}
                style={
                  isActive
                    ? { background: 'linear-gradient(135deg, #FFF1D2 0%, #E5BD70 50%, #C89B3C 100%)' }
                    : {}
                }
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-neutral-950' : 'text-[#E5BD70]'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies[activeTab].map((tech) => (
            <div
              key={tech.name}
              className="p-6 rounded-2xl bg-[#0D0F14] border border-white/5 hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-syne font-bold text-lg text-white group-hover:text-[#E5BD70] transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-400/10 text-[#E5BD70] border border-gold-400/20">
                    {tech.badge}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {tech.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-neutral-400 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5BD70]" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Prompt */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-neutral-400 mb-4 font-light">
            Need a custom tech stack or platform integration for your company?
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-gold-400 hover:text-black border border-white/10 hover:border-gold-400 text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            <span>Discuss Technical Requirements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

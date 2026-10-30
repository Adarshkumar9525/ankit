import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Palette, 
  Share2, 
  TrendingUp, 
  Video, 
  Sparkles, 
  Cpu, 
  PenTool, 
  Layers, 
  ArrowRight,
  ArrowUpRight 
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'website-development',
      title: 'Website Development',
      badge: 'Core Service',
      desc: 'Bespoke, high-performance websites engineered with React, Next.js, and Tailwind CSS. Built for speed, mobile responsiveness, and high conversion.',
      icon: Monitor,
      path: '/services/website-development',
      featured: true,
    },
    {
      id: 'logo-design-and-branding',
      title: 'Branding and Logo Design',
      badge: 'Identity',
      desc: 'Signature logos, color systems, typography guides, and complete brand identity packages that command market authority.',
      icon: Palette,
      path: '/services/logo-design-and-branding',
      featured: true,
    },
    {
      id: 'social-media-management',
      title: 'Social Media Management',
      badge: 'Growth',
      desc: 'Systematic content calendars, feed aesthetics, and organic growth strategies across Instagram, LinkedIn, and Facebook.',
      icon: Share2,
      path: '/services/social-media-management',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Advertising',
      badge: 'Performance',
      desc: 'Targeted Meta and Google ad campaigns optimized for return on ad spend (ROAS), customer acquisition, and verified lead flow.',
      icon: TrendingUp,
      path: '/services/digital-marketing',
    },
    {
      id: 'reel-shooting-and-video-editing',
      title: 'Reel Shooting & Video Editing',
      badge: 'Cinematic',
      desc: 'Dynamic 9:16 short-form video production with viral hooks, custom sound effects, color grading, and engaging typography.',
      icon: Video,
      path: '/services/reel-shooting-and-video-editing',
    },
    {
      id: 'ai-video-and-ai-advertising',
      title: 'AI Video and AI Content',
      badge: 'Next-Gen',
      desc: 'Next-generation AI-assisted media creation, digital avatars, and rapid marketing variations tailored for high-volume content.',
      icon: Sparkles,
      path: '/services/ai-video-and-ai-advertising',
    },
    {
      id: 'ai-automation',
      title: 'AI Automation & Workflows',
      badge: 'Efficiency',
      desc: 'Custom automation for CRM systems, WhatsApp chatbots, lead routing, and operational pipelines that save hours every week.',
      icon: Cpu,
      path: '/services/ai-automation',
    },
    {
      id: 'poster-banner-and-graphic-design',
      title: 'Graphic Design & Product Creatives',
      badge: 'Creative',
      desc: 'High-impact promotional posters, e-commerce product banners, brochures, and commercial graphics designed to persuade.',
      icon: PenTool,
      path: '/services/poster-banner-and-graphic-design',
    },
    {
      id: 'business-digital-solutions',
      title: 'Business Digital Solutions',
      badge: 'Enterprise',
      desc: 'Custom internal software, client portals, booking funnels, and integrated digital tools designed around your business workflow.',
      icon: Layers,
      path: '/services/business-digital-solutions',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#090A0D] text-white relative overflow-hidden border-b border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-[#E5BD70] text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Our Capabilities</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
              Everything Your Brand Needs <br />
              <span className="gold-text-gradient">Under One Roof.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              From creative design to modern web frameworks and AI workflows, we engineer complete digital solutions tailored for growth.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#E5BD70] hover:text-white transition-colors group"
            >
              <span>Explore All 13 Service Offerings</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 9 Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <Link
                key={srv.id}
                to={srv.path}
                className="group relative rounded-2xl p-7 bg-[#101117]/80 hover:bg-[#151620] border border-white/5 hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
                style={{
                  boxShadow: '0 10px 30px -15px rgba(0,0,0,0.7)'
                }}
              >
                <div>
                  {/* Top Bar: Icon + Badge + Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-[#E5BD70] group-hover:bg-[#E5BD70] group-hover:text-black transition-colors duration-300">
                      <IconComp className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10 group-hover:border-gold-400/30 group-hover:text-white transition-colors">
                        {srv.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gold-400 group-hover:text-black flex items-center justify-center text-neutral-400 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-syne font-bold text-lg text-white group-hover:text-[#E5BD70] transition-colors mb-2.5">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {srv.desc}
                  </p>
                </div>

                {/* Bottom link line */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-[#E5BD70] transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  TrendingUp, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  DollarSign, 
  ArrowUpRight, 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Layers, 
  Sparkles, 
  Users, 
  Activity, 
  BarChart3, 
  Phone, 
  Mail,
  ChevronRight,
  Shield,
  RefreshCw
} from 'lucide-react';
import { AGENCY_INFO, SERVICES_LIST } from '../data/agencyData';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [leadFilter, setLeadFilter] = useState('all');
  const [searchLeadQuery, setSearchLeadQuery] = useState('');

  // Sample real-time incoming enquiries state
  const [enquiries, setEnquiries] = useState([
    {
      id: 'LEAD-101',
      name: 'Rohan Singhania',
      company: 'Aura Lifestyle Group',
      phone: '+91 98201 45892',
      email: 'rohan@auralifestyle.in',
      service: 'Website Development & Branding',
      budget: '₹80,000 – ₹1,50,000',
      timeline: 'Standard (2–3 Weeks)',
      time: '14 mins ago',
      status: 'New',
      unread: true,
      notes: 'Needs bespoke e-commerce store with dark luxury branding for a high-end apparel line.'
    },
    {
      id: 'LEAD-102',
      name: 'Dr. Meera Nambiar',
      company: 'Verdant Aesthetics Clinic',
      phone: '+91 97112 34091',
      email: 'meera@verdantcare.org',
      service: 'Social Media & Performance Ads',
      budget: '₹40,000 – ₹80,000',
      timeline: 'Rush (7–10 Days)',
      time: '1 hour ago',
      status: 'In Discussion',
      unread: false,
      notes: 'Wants monthly reels shooting and targeted Meta ads for clinical lead generation.'
    },
    {
      id: 'LEAD-103',
      name: 'Karan Varma',
      company: 'Skyline Reality Developers',
      phone: '+91 99304 88210',
      email: 'karan@skylinerealty.co.in',
      service: 'Business Digital Solutions',
      budget: '₹1,50,000+',
      timeline: 'Phased Milestones',
      time: '3 hours ago',
      status: 'Quotation Sent',
      unread: false,
      notes: 'Interactive 3D villa showcase portal with WhatsApp sales agent routing.'
    },
    {
      id: 'LEAD-104',
      name: 'Priyanka Sen',
      company: 'Artisan Botanicals',
      phone: '+91 98450 12789',
      email: 'priyanka@artisanbotanicals.com',
      service: 'Product & Promotional Videos',
      budget: '₹40,000 – ₹80,000',
      timeline: 'Standard (2–3 Weeks)',
      time: 'Yesterday',
      status: 'Converted',
      unread: false,
      notes: 'Cinematic 4K teaser reels and product macro showcase.'
    }
  ]);

  // Active client sprint progress
  const [projects, setProjects] = useState([
    {
      id: 'PRJ-801',
      title: 'Aura Atelier Luxury Brand & Web Flagship',
      client: 'Aura Atelier Ltd',
      type: 'Web Dev & Brand Identity',
      progress: 85,
      phase: 'Phase 04 — Review & Feedback',
      status: 'In Review',
      deadline: 'Oct 31, 2026',
      assignedLead: 'Ankit',
      priority: 'High'
    },
    {
      id: 'PRJ-802',
      title: 'Vanguard Heights 3D Property Showcase',
      client: 'Vanguard Real Estate',
      type: 'Interactive Next.js Portal',
      progress: 65,
      phase: 'Phase 03 — Frontend Engineering',
      status: 'On Track',
      deadline: 'Nov 06, 2026',
      assignedLead: 'Ankit + Dev Lead',
      priority: 'Urgent'
    },
    {
      id: 'PRJ-803',
      title: 'HyperVision AI Synthetic Video Campaign',
      client: 'HyperVision Tech',
      type: 'AI Video & Automation',
      progress: 40,
      phase: 'Phase 02 — Storyboard & Generation',
      status: 'Active Sprint',
      deadline: 'Nov 12, 2026',
      assignedLead: 'Ankit',
      priority: 'Normal'
    },
    {
      id: 'PRJ-804',
      title: 'Nexus Pay Cross-Border Treasury Hub',
      client: 'Nexus Global',
      type: 'Enterprise FinTech Interface',
      progress: 95,
      phase: 'Phase 05 — Production Deployment',
      status: 'Launch Prep',
      deadline: 'Oct 29, 2026',
      assignedLead: 'Frontend Engineering',
      priority: 'High'
    }
  ]);

  const toggleLeadStatus = (id, newStatus) => {
    setEnquiries(prev => prev.map(lead => lead.id === id ? { ...lead, status: newStatus, unread: false } : lead));
  };

  const filteredLeads = enquiries.filter(lead => {
    const matchesFilter = leadFilter === 'all' || lead.status.toLowerCase().includes(leadFilter.toLowerCase());
    const matchesSearch = lead.name.toLowerCase().includes(searchLeadQuery.toLowerCase()) ||
                          lead.company.toLowerCase().includes(searchLeadQuery.toLowerCase()) ||
                          lead.service.toLowerCase().includes(searchLeadQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-dark-950 text-neutral-100 min-h-screen">
      
      {/* 1. CREATIVE AGENCY WORKSPACE INSPIRATION HEADER */}
      <section className="relative overflow-hidden border-b border-gold-500/20">
        
        {/* Creative Agency Workspace Photo with Moody Dark Lighting */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85" 
            alt="THEVISUAL.IN Creative Agency Workspace Studio"
            className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-[1.25] saturate-[0.85]"
          />
          {/* Dark luxury radial vignette and subtle gold atmospheric mesh */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/85 to-dark-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(213,175,99,0.15)_0%,_transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-400/20 text-gold-accent border border-gold-400/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Creative Studio Live</span>
                </span>
                <span className="text-xs text-neutral-400">
                  Director: <strong className="text-white">{AGENCY_INFO.founder}</strong>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white tracking-tight">
                Agency Control Center &{' '}
                <span className="gold-text-gradient">Workspace.</span>
              </h1>
              
              <p className="mt-2 text-sm text-neutral-300 max-w-2xl font-light">
                Real-time project pipeline, client conversion metrics, revenue telemetry, and communication management for <strong>{AGENCY_INFO.name}</strong>.
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/start-a-project"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-dark-950 font-bold text-xs sm:text-sm shadow-gold-glow flex items-center gap-2 hover:scale-[1.02] transition-all"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Simulate Client Brief</span>
              </Link>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:border-emerald-400 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Founder WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Studio Telemetry Badges */}
          <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2.5 text-neutral-300">
              <Activity className="w-4 h-4 text-gold-accent shrink-0" />
              <span>Studio Workload: <strong className="text-white">82% Capacity</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>On-Time Milestone Rate: <strong className="text-white">99.8%</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-300">
              <Clock className="w-4 h-4 text-gold-accent shrink-0" />
              <span>Average Turnaround: <strong className="text-white">11.4 Days</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-300">
              <Shield className="w-4 h-4 text-gold-accent shrink-0" />
              <span>Direct Founder Oversight: <strong className="text-emerald-400">Active</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TABBED NAVIGATION */}
      <section className="bg-dark-900 border-b border-neutral-800 sticky top-16 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto py-3 no-scrollbar text-xs sm:text-sm">
            {[
              { id: 'overview', label: 'Overview & Telemetry', icon: BarChart3 },
              { id: 'pipeline', label: 'Project Pipeline (4 Active)', icon: Layers },
              { id: 'enquiries', label: `Incoming Leads (${enquiries.length})`, icon: MessageCircle },
              { id: 'services', label: 'Service Inventory (13)', icon: Sparkles }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gold-400 text-dark-950 font-bold shadow-gold-glow'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DASHBOARD MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

        {/* TAB 1: OVERVIEW & TELEMETRY */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top 4 KPI Animated Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Card 1: Revenue Pipeline */}
              <div className="p-6 rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all shadow-card-dark group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Monthly Pipeline</span>
                  <div className="w-9 h-9 rounded-xl bg-gold-400/10 text-gold-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                    <DollarSign className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-syne font-extrabold text-white">₹4,85,000</div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+28.4% vs last month</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-2">Active booked deliverables</p>
              </div>

              {/* Card 2: Active Projects */}
              <div className="p-6 rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all shadow-card-dark group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Live Project Sprints</span>
                  <div className="w-9 h-9 rounded-xl bg-gold-400/10 text-gold-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-syne font-extrabold text-white">4 Active</div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-gold-accent">
                  <span>3 In Review • 1 Launch Prep</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-2">Milestone tracking 100% synchronized</p>
              </div>

              {/* Card 3: Inbound Leads */}
              <div className="p-6 rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all shadow-card-dark group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Inquiries This Month</span>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-syne font-extrabold text-white">34 Total</div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>18 WhatsApp leads converted</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-2">52.9% average conversion rate</p>
              </div>

              {/* Card 4: Turnaround Velocity */}
              <div className="p-6 rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all shadow-card-dark group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Turnaround Velocity</span>
                  <div className="w-9 h-9 rounded-xl bg-gold-400/10 text-gold-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-syne font-extrabold text-white">11.4 Days</div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                  <span>2.6 days ahead of 14-day SLA</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-2">Bespoke design without delays</p>
              </div>

            </div>

            {/* Performance Charts & Service Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left: Monthly Growth Telemetry Chart (8 Cols) */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-dark-900 border border-neutral-800 shadow-card-dark">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-syne font-bold text-white flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-gold-accent" />
                      <span>Revenue & Inbound Inquiries Telemetry</span>
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      6-Month trajectory across website dev, branding, and video editing campaigns
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <span className="w-3 h-3 rounded-full bg-gold-400"></span>
                      <span>Revenue (₹)</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <span className="w-3 h-3 rounded-full bg-neutral-600"></span>
                      <span>Leads</span>
                    </span>
                  </div>
                </div>

                {/* Interactive SVG Bar & Area Chart */}
                <div className="pt-4">
                  <div className="h-64 flex items-end justify-between gap-3 sm:gap-6 border-b border-neutral-800 pb-2">
                    {[
                      { month: 'May', val: 45, rev: '₹2.1L', leads: 14 },
                      { month: 'Jun', val: 58, rev: '₹2.8L', leads: 19 },
                      { month: 'Jul', val: 70, rev: '₹3.4L', leads: 24 },
                      { month: 'Aug', val: 65, rev: '₹3.2L', leads: 22 },
                      { month: 'Sep', val: 82, rev: '₹3.9L', leads: 29 },
                      { month: 'Oct (Current)', val: 98, rev: '₹4.85L', leads: 34 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
                        
                        {/* Hover Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-dark-800 border border-gold-400/40 text-[11px] p-2 rounded-lg pointer-events-none mb-1 text-center shadow-lg">
                          <p className="font-bold text-white">{item.rev}</p>
                          <p className="text-gold-accent">{item.leads} Inquiries</p>
                        </div>

                        {/* Visual Bar with Gradient */}
                        <div 
                          style={{ height: `${item.val}%` }}
                          className={`w-full max-w-[48px] rounded-t-lg transition-all duration-500 group-hover:scale-105 ${
                            idx === 5
                              ? 'bg-gradient-to-t from-gold-600 via-gold-400 to-amber-200 shadow-gold-glow'
                              : 'bg-gradient-to-t from-dark-800 via-neutral-700 to-neutral-500'
                          }`}
                        />
                        <span className={`text-[11px] font-medium ${idx === 5 ? 'text-gold-accent font-bold' : 'text-neutral-400'}`}>
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                    <span>Baseline: Q2 2026</span>
                    <span className="text-emerald-400 font-semibold">+130% Growth Since May</span>
                  </div>
                </div>
              </div>

              {/* Right: Service Demand Breakdown (4 Cols) */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-dark-900 border border-neutral-800 shadow-card-dark flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-syne font-bold text-white mb-1">
                    Service Demand Breakdown
                  </h3>
                  <p className="text-xs text-neutral-400 mb-6">
                    Distribution of client briefs by service capability
                  </p>

                  <div className="space-y-4">
                    {[
                      { name: 'Website Development', percent: 38, count: '13 Projects', color: 'from-gold-400 to-gold-600' },
                      { name: 'Luxury Branding & Logos', percent: 26, count: '9 Projects', color: 'from-amber-400 to-amber-600' },
                      { name: 'Video Production & Reels', percent: 20, count: '7 Projects', color: 'from-yellow-400 to-yellow-600' },
                      { name: 'AI & Automation Solutions', percent: 16, count: '5 Projects', color: 'from-emerald-400 to-emerald-600' }
                    ].map((service, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-neutral-200">{service.name}</span>
                          <span className="text-gold-accent font-bold">{service.percent}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-dark-950 overflow-hidden">
                          <div 
                            style={{ width: `${service.percent}%` }}
                            className={`h-full rounded-full bg-gradient-to-r ${service.color}`}
                          />
                        </div>
                        <span className="text-[10px] text-neutral-500 block">{service.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                  <span>Fastest growing:</span>
                  <span className="text-emerald-400 font-semibold">AI Video & Automation</span>
                </div>
              </div>

            </div>

            {/* Quick Overview of Top 2 Active Projects */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-neutral-800 shadow-card-dark">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-syne font-bold text-white">
                    Live Sprint Execution Snapshot
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Real-time status of milestones currently under delivery
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className="text-xs font-bold text-gold-accent hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>View All 4 Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.slice(0, 2).map(project => (
                  <div key={project.id} className="p-5 rounded-2xl bg-dark-850 border border-neutral-800 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-semibold text-gold-accent">{project.type}</span>
                        <h4 className="text-base font-syne font-bold text-white mt-0.5">{project.title}</h4>
                        <span className="text-xs text-neutral-400">Client: {project.client}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-gold-400/10 text-gold-accent border border-gold-400/30">
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-neutral-400">{project.phase}</span>
                        <span className="font-bold text-white">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-dark-950 overflow-hidden">
                        <div 
                          style={{ width: `${project.progress}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600 shadow-gold-glow"
                        />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                      <span>Target Delivery: <strong className="text-neutral-200">{project.deadline}</strong></span>
                      <span>Lead: <strong className="text-gold-accent">{project.assignedLead}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: PROJECT PIPELINE & DELIVERABLES */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-syne font-bold text-white">
                  Active Client Sprints & Deliverable Pipeline
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Track 6-step project milestones: Understand → Plan → Create → Review → Deliver → Grow
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-400">Sprint Capacity:</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  4 Active / 6 Max
                </span>
              </div>
            </div>

            {/* Project Cards List */}
            <div className="space-y-4">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="p-6 sm:p-7 rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all shadow-card-dark"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-gold-accent">{project.id}</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-dark-800 border border-neutral-700 text-neutral-300">
                          {project.type}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          project.priority === 'Urgent' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-gold-400/10 text-gold-accent'
                        }`}>
                          {project.priority} Priority
                        </span>
                      </div>

                      <h3 className="text-xl font-syne font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="text-xs text-neutral-400">
                        Client Partner: <strong className="text-neutral-200">{project.client}</strong> • Direct Supervisor: <strong className="text-gold-accent">{project.assignedLead}</strong>
                      </p>
                    </div>

                    {/* Progress Bar & Status */}
                    <div className="w-full lg:w-72 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-neutral-300">{project.phase}</span>
                        <span className="font-bold text-gold-accent">{project.progress}%</span>
                      </div>

                      <div className="w-full h-2.5 rounded-full bg-dark-950 overflow-hidden border border-neutral-800">
                        <div 
                          style={{ width: `${project.progress}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-500 shadow-gold-glow"
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1">
                        <span>Target Launch: <strong className="text-white">{project.deadline}</strong></span>
                        <span className="text-emerald-400 font-semibold">{project.status}</span>
                      </div>
                    </div>

                    {/* Quick Action Button */}
                    <div className="shrink-0 flex items-center gap-2">
                      <a
                        href={`https://wa.me/${AGENCY_INFO.rawPhone}?text=${encodeURIComponent(`Hi ${project.client}, here is your milestone update for ${project.title}. Current phase: ${project.phase} (${project.progress}% complete).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Client WhatsApp</span>
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Workflow Milestones Reference */}
            <div className="mt-8 p-6 rounded-2xl bg-dark-900 border border-neutral-800 text-xs text-neutral-400 flex flex-wrap items-center justify-between gap-4">
              <span className="font-semibold text-white">THEVISUAL.IN 6-Step Standard:</span>
              <div className="flex flex-wrap items-center gap-3 text-neutral-300">
                <span>01. Understand</span> →
                <span>02. Plan</span> →
                <span>03. Create</span> →
                <span>04. Review</span> →
                <span>05. Deliver</span> →
                <span className="text-gold-accent font-bold">06. Grow</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INCOMING LEADS & WHATSAPP ENQUIRIES */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-syne font-bold text-white">
                  Client Enquiries & Direct WhatsApp Leads
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Manage incoming project briefs generated from website calculator and contact forms
                </p>
              </div>

              {/* Search & Filter */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchLeadQuery}
                    onChange={(e) => setSearchLeadQuery(e.target.value)}
                    placeholder="Search by client or service..."
                    className="pl-9 pr-4 py-2 rounded-xl bg-dark-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-gold-400 w-56"
                  />
                  <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>

                <select
                  value={leadFilter}
                  onChange={(e) => setLeadFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-dark-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-gold-400"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New Only</option>
                  <option value="in discussion">In Discussion</option>
                  <option value="quotation sent">Quotation Sent</option>
                  <option value="converted">Converted</option>
                </select>
              </div>
            </div>

            {/* Enquiries List */}
            <div className="space-y-4">
              {filteredLeads.map((lead) => {
                const waChatUrl = `https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hi ${lead.name}, this is Ankit from THEVISUAL.IN regarding your project inquiry for "${lead.service}". When is a good time for a quick 5-minute discovery consultation?`
                )}`;

                return (
                  <div
                    key={lead.id}
                    className={`p-6 rounded-3xl bg-dark-900 border transition-all shadow-card-dark ${
                      lead.unread ? 'border-gold-400/60 shadow-gold-glow' : 'border-neutral-800'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      
                      {/* Left: Lead Details */}
                      <div className="space-y-3 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-mono font-bold text-gold-accent">{lead.id}</span>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                            lead.status === 'New' 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse'
                              : lead.status === 'Converted'
                              ? 'bg-gold-400/20 text-gold-accent border border-gold-400/30'
                              : 'bg-dark-800 text-neutral-300 border border-neutral-700'
                          }`}>
                            {lead.status}
                          </span>
                          <span className="text-xs text-neutral-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{lead.time}</span>
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl font-syne font-bold text-white flex items-center gap-2">
                            <span>{lead.name}</span>
                            <span className="text-xs font-normal text-neutral-400">• {lead.company}</span>
                          </h3>
                          <p className="text-xs font-semibold text-gold-accent mt-0.5">
                            Target Service: {lead.service}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-neutral-300 bg-dark-950/60 p-3.5 rounded-xl border border-neutral-800 font-light">
                          "{lead.notes}"
                        </p>

                        <div className="flex flex-wrap gap-4 text-xs text-neutral-400 pt-1">
                          <span>Budget: <strong className="text-white">{lead.budget}</strong></span>
                          <span>Timeline: <strong className="text-white">{lead.timeline}</strong></span>
                          <span>Phone: <a href={`tel:${lead.phone}`} className="text-gold-accent hover:underline">{lead.phone}</a></span>
                          <span>Email: <a href={`mailto:${lead.email}`} className="text-neutral-300 hover:underline">{lead.email}</a></span>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
                        <a
                          href={waChatUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Reply on WhatsApp</span>
                        </a>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleLeadStatus(lead.id, lead.status === 'Converted' ? 'In Discussion' : 'Converted')}
                            className="flex-1 px-3 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-xs font-medium text-neutral-300 border border-neutral-700 transition-colors"
                          >
                            {lead.status === 'Converted' ? 'Mark Active' : 'Mark Converted'}
                          </button>

                          <button
                            onClick={() => toggleLeadStatus(lead.id, 'Quotation Sent')}
                            className="px-3 py-2 rounded-xl bg-gold-400/10 hover:bg-gold-400 text-gold-accent hover:text-dark-950 text-xs font-medium border border-gold-400/30 transition-all"
                          >
                            Quote Sent
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* TAB 4: SERVICE INVENTORY (13 CAPABILITIES) */}
        {activeTab === 'services' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-syne font-bold text-white">
                  Published Agency Service Offerings
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  13 specialized capabilities active on the client-facing portal
                </p>
              </div>

              <Link
                to="/services"
                className="text-xs font-bold text-gold-accent hover:underline flex items-center gap-1"
              >
                <span>View Public Catalog</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES_LIST.map((svc, i) => (
                <div key={svc.id} className="p-6 rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 transition-all shadow-card-dark flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-accent">
                        {svc.category}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">#{i + 1}</span>
                    </div>

                    <h4 className="text-base font-syne font-bold text-white mb-1.5">{svc.title}</h4>
                    <p className="text-xs text-neutral-300 font-light line-clamp-2 mb-4">{svc.shortDesc}</p>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">SLA: {svc.timeline}</span>
                    <Link
                      to={`/services/${svc.id}`}
                      className="text-gold-accent font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Public Scope</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

    </div>
  );
}

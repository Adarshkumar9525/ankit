export const AGENCY_INFO = {
  name: "THEVISUAL.IN",
  tagline: "We Build. We Create. We Grow.",
  supportingTagline: "Your Complete Digital & Creative Partner.",
  brandStatement: "Ideas into Digital.",
  founder: "Ankit",
  phone: "+91 9156694311",
  rawPhone: "9156694311",
  email: "thevisualswithankit.in@gmail.com",
  instagram: "@the_visuals.in",
  instagramUrl: "https://instagram.com/the_visuals.in",
  website: "www.thevisuals.in",
  whatsappBaseUrl: "https://wa.me/919156694311",
  whatsappUrl: "https://wa.me/919156694311?text=Hi%20THEVISUAL.IN,%20I%20would%20like%20to%20discuss%20a%20project.",
};

// 13 Official Services as requested
export const SERVICES_LIST = [
  {
    id: "website-development",
    title: "Website Development",
    shortDesc: "Fast, responsive, and conversion-optimized websites built on modern web stacks.",
    category: "Development",
    icon: "Globe",
    badge: "Core Service",
    problem: "Most businesses struggle with slow, template-heavy websites that look generic, load slowly on mobile devices, and fail to turn visitors into paying inquiries.",
    solution: "We engineer bespoke websites utilizing modern frameworks (React, Next.js, clean semantic code) engineered for lightning load times, flawless cross-device responsiveness, and clear sales funnels.",
    deliverables: [
      "Custom responsive UI/UX design matching your brand aesthetics",
      "High-speed frontend development (React / Next.js / Tailwind CSS)",
      "Mobile-first responsive architecture across all breakpoints",
      "Lead generation contact forms & WhatsApp conversion integration",
      "Technical SEO foundation & Core Web Vitals optimization (90+ speed score)",
      "CMS or admin dashboard setup for effortless content updates"
    ],
    timeline: "7 – 20 Days",
    relatedIds: ["logo-design-and-branding", "business-digital-solutions", "ai-automation"]
  },
  {
    id: "logo-design-and-branding",
    title: "Logo Design and Branding",
    shortDesc: "Signature logos and comprehensive visual identities that command respect.",
    category: "Design",
    icon: "Palette",
    badge: "Identity",
    problem: "Inconsistent graphics, outdated clip-art logos, and poor typography undermine your business credibility before customers even hear your pitch.",
    solution: "We develop complete brand design systems that establish prestige, authority, and emotional resonance across digital and physical customer touchpoints.",
    deliverables: [
      "Original primary logo, secondary marks, and responsive favicons",
      "Comprehensive Brand Style Guide (Typography, Color Palette, Spacing)",
      "Vector master files (.SVG, .AI, .EPS, .PNG, .PDF)",
      "Stationery design (Business cards, letterheads, invoice templates)",
      "Social media brand kits and presentation slide templates"
    ],
    timeline: "5 – 12 Days",
    relatedIds: ["poster-banner-and-graphic-design", "website-development", "social-media-management"]
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortDesc: "End-to-end social media handling, content calendars, and audience engagement.",
    category: "Marketing",
    icon: "Share2",
    badge: "Growth",
    problem: "Posting randomly without a structured content strategy wastes time and fails to build an engaged community or reliable inbound customer flow.",
    solution: "We manage your brand's social channels systematically with strategic content planning, consistent aesthetic standards, thoughtful captions, and active community interaction.",
    deliverables: [
      "Monthly content calendar with theme and pillar planning",
      "High-aesthetic feed design and custom story templates",
      "Engaging caption writing with targeted keyword/hashtag sets",
      "Scheduled publishing across Instagram, LinkedIn, and Facebook",
      "Monthly performance reports and audience insight reviews"
    ],
    timeline: "Monthly Retainer",
    relatedIds: ["social-media-advertising", "reel-shooting-and-video-editing", "poster-banner-and-graphic-design"]
  },
  {
    id: "social-media-advertising",
    title: "Social Media Advertising",
    shortDesc: "High-ROI paid advertising campaigns on Meta (Instagram & Facebook) and beyond.",
    category: "Marketing",
    icon: "TrendingUp",
    badge: "Performance",
    problem: "Boosting random posts often burns marketing budgets without yielding measurable qualified leads or sales enquiries.",
    solution: "We design, write, launch, and test structured paid ad funnels with precise audience targeting, split-testing, and conversion tracking.",
    deliverables: [
      "Audience persona research and interest/demographic targeting",
      "High-converting ad creative design (static and short-form video)",
      "Persuasive direct-response ad copywriting",
      "Meta Pixel and Conversion API setup for accurate tracking",
      "Continuous A/B testing of creatives, hooks, and budget optimization"
    ],
    timeline: "Ongoing Sprint / Monthly",
    relatedIds: ["social-media-management", "reel-shooting-and-video-editing", "digital-marketing"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Comprehensive digital growth strategies connecting brand awareness to customer acquisition.",
    category: "Marketing",
    icon: "Megaphone",
    badge: "Strategy",
    problem: "Siloed marketing efforts lead to fragmented messaging and poor marketing return on investment.",
    solution: "We build unified multi-channel marketing roadmaps coordinating content, search visibility, paid campaigns, and customer retention.",
    deliverables: [
      "Full digital landscape & competitor audit",
      "Multi-channel acquisition funnel architecture",
      "Local SEO and Google Business Profile optimization",
      "Lead magnet conception and email capture strategy",
      "Actionable monthly ROI dashboard and review calls"
    ],
    timeline: "Custom Roadmap",
    relatedIds: ["social-media-advertising", "website-development", "business-digital-solutions"]
  },
  {
    id: "reel-shooting-and-video-editing",
    title: "Reel Shooting and Video Editing",
    shortDesc: "Scroll-stopping Instagram Reels, YouTube Shorts, and viral video editing.",
    category: "Video",
    icon: "Video",
    badge: "Popular",
    problem: "Attention spans on mobile are under 3 seconds. Boring, static content gets scrolled past instantly.",
    solution: "We craft dynamic short-form videos with strong visual hooks, seamless transitions, synchronized sound design, and crisp captions.",
    deliverables: [
      "Creative concept, scripting, and hook ideation",
      "Professional pacing, color grading, and b-roll integration",
      "Dynamic animated subtitles and sound effects (SFX)",
      "Platform-optimized 9:16 vertical exports ready for posting",
      "Batch production frameworks for high-frequency posting"
    ],
    timeline: "3 – 7 Days",
    relatedIds: ["product-and-promotional-videos", "social-media-management", "ai-video-and-ai-advertising"]
  },
  {
    id: "product-and-promotional-videos",
    title: "Product and Promotional Videos",
    shortDesc: "Cinematic commercial films and product showcases that elevate brand perception.",
    category: "Video",
    icon: "Film",
    badge: "Cinematic",
    problem: "Static product photos often fail to convey the premium craftsmanship and real-world value of your offering.",
    solution: "We produce cinematic promotional videos that spotlight product details, build emotional desire, and explain key features.",
    deliverables: [
      "Storyboard development and visual direction",
      "High-definition product lighting and showcase editing",
      "Voiceover syncing and licensed cinematic music tracks",
      "Full 16:9 widescreen master for websites and YouTube",
      "Cut-downs and teaser clips for social media promotion"
    ],
    timeline: "7 – 15 Days",
    relatedIds: ["reel-shooting-and-video-editing", "ai-video-and-ai-advertising", "website-development"]
  },
  {
    id: "ai-video-and-ai-advertising",
    title: "AI Video and AI Advertising",
    shortDesc: "Futuristic synthetic media, AI video ads, and next-generation creative concepts.",
    category: "AI & Innovation",
    icon: "Sparkles",
    badge: "AI Powered",
    problem: "Traditional commercial studio shoots are often prohibitively expensive and take weeks to coordinate.",
    solution: "We utilize cutting-edge generative AI video platforms and neural rendering tools to produce surreal, eye-catching commercial ads at a fraction of standard production costs.",
    deliverables: [
      "Generative visual storyboarding and concept art",
      "High-resolution AI-generated video sequences and scenes",
      "AI voice synthesis and sound design sync",
      "Composite editing combining real footage with AI visuals",
      "Multi-variant ad creative testing for social campaigns"
    ],
    timeline: "5 – 10 Days",
    relatedIds: ["ai-content-creation", "product-and-promotional-videos", "social-media-advertising"]
  },
  {
    id: "poster-banner-and-graphic-design",
    title: "Poster, Banner, and Graphic Design",
    shortDesc: "High-impact visual creatives for digital advertising, print collaterals, and events.",
    category: "Design",
    icon: "Layout",
    badge: "Creative",
    problem: "Cluttered or low-resolution banners damage trust and fail to communicate promotional offers clearly.",
    solution: "We design clean, bold graphic posters and digital display banners that capture eyes and deliver your message instantly.",
    deliverables: [
      "Digital ad creatives across standard IAB and social dimensions",
      "Promotional posters, event standees, and brochures",
      "Website hero banners and promotional marketing popups",
      "Print-ready CMYK files with bleed marks alongside web RGB formats",
      "Source design files (.PSD / .FIG / .AI)"
    ],
    timeline: "2 – 5 Days",
    relatedIds: ["logo-design-and-branding", "social-media-management", "business-digital-solutions"]
  },
  {
    id: "ai-content-creation",
    title: "AI Content Creation",
    shortDesc: "Hyper-realistic commercial product visuals, lifestyle backdrops, and creative copy.",
    category: "AI & Innovation",
    icon: "Cpu",
    badge: "AI Powered",
    problem: "Producing varied product backdrops, seasonal shoots, and marketing copy manually is slow and costly.",
    solution: "We blend advanced prompt architecture with visual post-processing to create photorealistic product staging, concept art, and high-converting marketing content.",
    deliverables: [
      "Photorealistic AI product staging and virtual set generation",
      "Unique creative campaign graphics tailored to your brand colors",
      "AI-accelerated marketing copywriting and content variations",
      "High-resolution upscaling for print and digital usage",
      "Prompt recipes and style-preservation frameworks"
    ],
    timeline: "3 – 7 Days",
    relatedIds: ["ai-video-and-ai-advertising", "ai-automation", "poster-banner-and-graphic-design"]
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    shortDesc: "Custom AI agents, intelligent lead handling, and business workflow automations.",
    category: "AI & Innovation",
    icon: "Zap",
    badge: "Productivity",
    problem: "Repetitive manual tasks—such as responding to basic customer FAQs or copying leads across spreadsheets—eat hours of productive time every week.",
    solution: "We integrate custom AI assistants and workflow automations (via Make, Zapier, APIs, and LLMs) to streamline customer capture and operational speed.",
    deliverables: [
      "Automated lead routing from website forms directly to WhatsApp & CRM",
      "Custom AI chatbot setup for 24/7 inquiry handling and FAQs",
      "Workflow connectivity between Google Sheets, Email, and Notion",
      "Customer notification and appointment reminder pipelines",
      "Detailed handover guide and staff walkthrough"
    ],
    timeline: "5 – 14 Days",
    relatedIds: ["business-digital-solutions", "website-development", "ai-content-creation"]
  },
  {
    id: "business-digital-solutions",
    title: "Business Digital Solutions",
    shortDesc: "Custom digital infrastructure, CRM integrations, and online operational tools.",
    category: "Development",
    icon: "Layers",
    badge: "Enterprise",
    problem: "Growing businesses outgrow basic spreadsheets and need tailored digital tools to manage client orders, quotes, and customer accounts.",
    solution: "We architect scalable digital portals, custom calculators, internal dashboards, and customer hubs tailored to your specific workflow.",
    deliverables: [
      "Custom business workflow portals and client dashboards",
      "Interactive quoting calculators and digital onboarding funnels",
      "Third-party software integration (Payment gateways, CRMs, ERPs)",
      "Role-based access control and secure data handling",
      "Dedicated technical support and ongoing optimization"
    ],
    timeline: "14 – 30 Days",
    relatedIds: ["website-development", "ai-automation", "digital-marketing"]
  },
  {
    id: "custom-creative-and-freelance-projects",
    title: "Custom Creative and Freelance Projects",
    shortDesc: "Flexible bespoke collaborations for unique creative and technical challenges.",
    category: "Creative",
    icon: "Sparkles",
    badge: "Flexible",
    problem: "Sometimes your needs don't fit into standard packages and you need an agile creative partner to jump in and execute fast.",
    solution: "We collaborate closely with founders, creators, and agency partners on custom scopes—from one-off pitch decks to urgent campaign sprints.",
    deliverables: [
      "Customized scope of work agreed beforehand",
      "Direct daily communication with Founder Ankit",
      "Rapid iterative prototyping and milestone reviews",
      "Complete handover of all raw source assets",
      "Non-disclosure agreement (NDA) protection upon request"
    ],
    timeline: "Flexible Sprints",
    relatedIds: ["website-development", "logo-design-and-branding", "ai-video-and-ai-advertising"]
  }
];

// Real Portfolio projects (conceptual work clearly labeled)
export const PORTFOLIO_LIST = [
  {
    id: "aura-atelier",
    title: "Aura Atelier",
    category: "Branding",
    categoryLabel: "Branding and Logos",
    type: "Concept Identity & Packaging",
    description: "A luxury brand identity and bespoke packaging study for a high-end artisanal jewellery studio. Crafted with classic typography, embossed stationery, and a refined warm metallic color scheme.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    clientGoal: "Establish a high-prestige, memorable brand identity for an upscale boutique brand.",
    deliverables: ["Visual Identity System", "Custom Monogram", "Packaging Mockups", "Brand Guidelines"],
    technologies: ["Illustrator", "Photoshop", "Typography Architecture"],
    isConcept: true
  },
  {
    id: "vanguard-heights",
    title: "Vanguard Heights",
    category: "Websites",
    categoryLabel: "Website Development",
    type: "Real Estate Showcase Concept",
    description: "An interactive web architecture designed for luxury residential developments. Features responsive floorplan views, dark aesthetic styling, and one-tap WhatsApp viewing appointments.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    clientGoal: "Showcase architectural properties with modern aesthetic elegance and high lead conversion.",
    deliverables: ["Interactive Next.js UI", "WhatsApp Tour Integration", "Mobile Optimization"],
    technologies: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
    isConcept: true
  },
  {
    id: "nexus-pay",
    title: "Nexus Pay Global",
    category: "Websites",
    categoryLabel: "Website Development",
    type: "FinTech Interface Design",
    description: "A dark-mode enterprise web interface designed for cross-border treasury management with responsive data charts, clear typography, and clean interaction states.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    clientGoal: "Provide a trustworthy, uncluttered digital platform for corporate finance users.",
    deliverables: ["Modern Dashboard UI", "Custom Chart Components", "Design System"],
    technologies: ["React", "Tailwind CSS", "Component Library"],
    isConcept: true
  },
  {
    id: "lelixir-botanicals",
    title: "L'Élixir Botanicals",
    category: "Video Production",
    categoryLabel: "Video Production",
    type: "Commercial Film Concept",
    description: "A cinematic commercial visual storyboard and short-form reel edit designed for an organic luxury fragrance brand.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    clientGoal: "Capture sensory luxury through dynamic color grading and synchronized audio pacing.",
    deliverables: ["Commercial Teaser Cut", "9:16 Vertical Social Reels", "Sound Design Concept"],
    technologies: ["Premiere Pro", "After Effects", "Color Grading"],
    isConcept: true
  },
  {
    id: "hypervision-ai",
    title: "HyperVision AI",
    category: "AI Content",
    categoryLabel: "AI Content & Innovation",
    type: "Synthetic Media Campaign",
    description: "An exploratory AI visual campaign and automated customer inquiry funnel designed for a futuristic wearable hardware startup.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    clientGoal: "Demonstrate rapid creative concepting using generative AI visuals and smart routing.",
    deliverables: ["AI Product Visuals", "Creative Direction", "Automated Lead Pipeline Concept"],
    technologies: ["Generative AI", "Photoshop", "Zapier Automation"],
    isConcept: true
  },
  {
    id: "verdant-wellness",
    title: "Verdant Wellness Clinic",
    category: "Digital Campaigns",
    categoryLabel: "Social Media & Campaigns",
    type: "Integrated Growth Study",
    description: "A structured digital marketing campaign concept including promotional banner creatives, booking funnel wireframes, and educational social reel themes.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    clientGoal: "Drive local clinic appointments through clear value messaging and accessible inquiry channels.",
    deliverables: ["Social Ad Creatives", "Inquiry Landing Wireframe", "Content Themes"],
    technologies: ["Meta Ad Framework", "Figma", "Canva Pro"],
    isConcept: true
  }
];

// Careers & Recruitment Data
export const JOB_OPENINGS = [
  {
    id: "frontend-developer-intern",
    title: "Frontend Developer (React / Next.js)",
    department: "Engineering",
    type: "Internship / Contract",
    workArrangement: "Remote",
    location: "Remote (India)",
    experience: "0 – 2 Years / Strong Portfolio",
    deadline: "Open until filled",
    description: "We are looking for a passionate Frontend Developer who cares deeply about UI aesthetics, responsive CSS, and clean React code. You will help build and polish digital agency websites and client projects.",
    responsibilities: [
      "Translate Figma / UI mockups into responsive, high-speed React / Next.js code",
      "Implement smooth CSS animations and ensure pixel-perfect fidelity across mobile and desktop",
      "Collaborate directly with Founder Ankit on website deliverables and performance checks",
      "Ensure proper SEO tags, accessibility, and Core Web Vitals optimization"
    ],
    requirements: [
      "Proficiency in React, HTML5, modern CSS / Tailwind CSS, and JavaScript (ES6+)",
      "Strong eye for typography, whitespace, and micro-interactions",
      "Experience with Git and responsive mobile design",
      "A live portfolio or GitHub repository showcasing your work"
    ]
  },
  {
    id: "video-editor-reel-creator",
    title: "Video Editor & Reel Creator",
    department: "Creative & Media",
    type: "Freelance / Project-Based",
    workArrangement: "Remote",
    location: "Remote (India)",
    experience: "1+ Years or strong showreel",
    deadline: "Open until filled",
    description: "We need an energetic Video Editor who understands short-form pacing, hook psychology, and sound design to craft scroll-stopping Instagram Reels and promotional videos.",
    responsibilities: [
      "Edit 9:16 vertical videos (Reels/Shorts) with crisp cuts, dynamic pacing, and captions",
      "Add engaging sound effects (SFX), background tracks, and subtle motion graphics",
      "Color grade and balance footage for a premium, high-production look",
      "Deliver revisions promptly based on agreed creative feedback"
    ],
    requirements: [
      "Proficiency in Adobe Premiere Pro, After Effects, or DaVinci Resolve",
      "Clear understanding of viral short-form hooks and visual pacing",
      "Showreel or portfolio link with examples of past edited videos",
      "Ability to respect project timelines and guidelines"
    ]
  },
  {
    id: "ui-ux-graphic-designer",
    title: "UI/UX & Brand Graphic Designer",
    department: "Design",
    type: "Contract / Freelance",
    workArrangement: "Remote",
    location: "Remote (India)",
    experience: "1 – 3 Years / Strong Portfolio",
    deadline: "Open until filled",
    description: "We are seeking a talented graphic and UI/UX designer to craft distinctive visual identities, logos, social media design kits, and website wireframes.",
    responsibilities: [
      "Design original brand logos, typography kits, and vector master assets",
      "Create high-converting social media creatives and promotional posters",
      "Develop website wireframes and interactive UI mockups in Figma",
      "Maintain design consistency across all brand touchpoints"
    ],
    requirements: [
      "High proficiency in Figma, Adobe Illustrator, and Photoshop",
      "Sophisticated aesthetic taste in modern, luxury, and minimal design styles",
      "Portfolio demonstrating logo work, branding systems, or UI projects",
      "Clear communication and constructive receptiveness to feedback"
    ]
  }
];

// Blog / Insights Articles
export const BLOG_POSTS = [
  {
    id: "why-websites-fail-to-convert-and-how-to-fix-it",
    title: "Why Most Business Websites Fail to Convert (And How to Fix It)",
    category: "Website Development",
    readTime: "5 min read",
    date: "October 2026",
    excerpt: "Discover the critical UX mistakes most small and medium businesses make on their websites, from slow load times to unclear value propositions.",
    content: `
### The 3-Second Rule of Modern Web Design

When a potential client lands on your website, you have less than three seconds to answer three subconscious questions:
1. **What do you do?**
2. **Is this for me?**
3. **What is the immediate next step?**

If your homepage is cluttered with generic stock photography, slow-loading carousels, or ambiguous buzzwords, the visitor bounces back to Google or Instagram.

### 1. Speed is Your First Impression
A website that takes more than 2.5 seconds to load on a mobile 4G connection loses over 40% of visitors. By utilizing modern lightweight stacks like React and Tailwind CSS over bloated WordPress templates with 40 plugins, you ensure your digital storefront opens instantly.

### 2. The WhatsApp Conversion Funnel
In modern markets, customers prefer asynchronous instant messaging over filling out long, intimidating contact forms. Integrating a clean, prefilled WhatsApp link lowers friction by over 70%, giving you direct conversational access to prospective buyers.

### 3. Clear Visual Hierarchy
Give every page one primary objective. Whether it is booking a consultation or exploring a case study, guide the user's eye with high contrast and confident typography.
    `
  },
  {
    id: "the-power-of-luxury-branding-in-digital-age",
    title: "The Anatomy of a Luxury Digital Brand Identity",
    category: "Branding",
    readTime: "4 min read",
    date: "October 2026",
    excerpt: "Why high-end brands focus on restraint, typography, and cohesive color palettes rather than loud, busy designs.",
    content: `
### What Makes a Brand Feel Premium?

True luxury in design is about restraint. Amateur brands often try to impress by cramming every visual trick into their logos—gradients, 3D shadows, and complex icons.

Elite brands, by contrast, focus on three fundamentals:
- **Consistent Typography:** Pairing an authoritative display serif or expressive sans with a clean body font.
- **Intentional Color Palette:** Relying on deep obsidian blacks, warm neutrals, and purposeful metallic gold accents rather than rainbow palettes.
- **Whitespace:** Giving elements room to breathe conveys confidence. Cheap brands crowd space; luxury brands own space.

When your visual identity is cohesive from your website down to your invoice and Instagram story, you can command premium pricing with ease.
    `
  },
  {
    id: "harnessing-ai-for-commercial-creative-workflows",
    title: "How Small Agencies Use AI to Deliver Enterprise-Grade Creative Output",
    category: "AI & Innovation",
    readTime: "6 min read",
    date: "October 2026",
    excerpt: "How generative AI tools and workflow automations allow boutique teams to outpace traditional bloated agencies in speed and cost.",
    content: `
### The New Era of AI-Assisted Craft

Artificial Intelligence is not a replacement for good taste, strategy, or creative vision. Rather, it acts as a force multiplier for experienced creators.

### Rapid Product Staging & Moodboards
Instead of spending days setting up physical sets for initial concept approval, we can generate hyper-realistic commercial staging variants in minutes. This allows clients to visualize the final outcome before committing significant production budgets.

### Automated Lead Pipelines
By connecting website forms through automated webhooks to CRM tables and instant WhatsApp notifications, client inquiries are acknowledged within seconds rather than days. In digital sales, response speed is the single greatest predictor of closing a deal.
    `
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    phase: "Discovery & Goal Setting",
    description: "We dive deep into your business model, target audience, competitive landscape, and exact commercial goals."
  },
  {
    step: "02",
    title: "Plan",
    phase: "Strategy & Blueprint",
    description: "We outline the visual direction, information architecture, wireframes, and project milestones."
  },
  {
    step: "03",
    title: "Create",
    phase: "Design & Development",
    description: "Our core craft in motion: crafting bespoke visual identities, writing clean code, and generating high-impact assets."
  },
  {
    step: "04",
    title: "Review",
    phase: "Feedback & Refinement",
    description: "You review the working iterations. We collect feedback and apply pixel-perfect refinements until total satisfaction."
  },
  {
    step: "05",
    title: "Deliver",
    phase: "Launch & Deployment",
    description: "Seamless launch: domain deployment, source file handover, admin onboarding, and quality assurance sign-off."
  },
  {
    step: "06",
    title: "Grow",
    phase: "Scaling & Support",
    description: "We don't abandon you after launch. We offer ongoing marketing campaigns, AI automation, and technical support."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Multiple Digital Services Through One Partner",
    description: "No need to coordinate between five disconnected freelancers. We provide an end-to-end synchronized ecosystem across Web, Branding, Content, Video, and AI."
  },
  {
    title: "Tailored to Your Specific Business Requirements",
    description: "We don't force one-size-fits-all packages. Every solution is strategically planned around your industry, audience, and budget."
  },
  {
    title: "Clear Communication & Structured Planning",
    description: "Direct founder communication with Ankit via WhatsApp, transparent 6-step project milestones, and zero agency fluff."
  },
  {
    title: "Professional Design and Clean Engineering",
    description: "High aesthetic standards combined with fast, mobile-first code that loads instantly and performs reliably."
  },
  {
    title: "Ongoing Support Where Agreed",
    description: "We offer continuous maintenance, marketing retainers, and technical scaling post-launch so your business continues to grow."
  }
];

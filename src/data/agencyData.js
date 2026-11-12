/**
 * VISUALS — Core Agency Data & Information Architecture
 * Aligned strictly with VISUALS Website Redesign Developer Brief (14-Page Specification)
 */

export const AGENCY_INFO = {
  name: "THEVISUALS.IN",
  legalName: "THEVISUALS.IN",
  tagline: "Creative Ideas. Digital Impact. Business Growth.",
  supportingTagline: "We Don't Just Build Your Digital Presence. We Help Your Business Grow.",
  agencyDescription: "A creative digital marketing and business growth agency",
  mainMessage: "THEVISUALS.IN is a creative digital marketing and business growth agency focused on helping businesses build a strong online presence, connect with their target audience, and grow in the digital world.",
  philosophy: "We understand that every business has a different story, different goals, and different challenges. That's why we don't believe in one-size-fits-all marketing solutions.",
  approach: "Our approach combines creativity, strategic thinking, digital marketing, and technology to create solutions that help businesses stand out from the competition.",
  scopeSummary: "From building your social media presence to creating engaging content and running targeted advertising campaigns, we work to make your brand more visible, recognizable, and connected with the right audience.",
  goal: "To turn your business goals into meaningful digital growth.",
  
  // Official CTAs
  primaryButton: "Discuss Your Project",
  secondaryButton: "Explore Our Work",
  finalCtaButton: "Start Your Project",
  
  founder: "Ankit",
  phone: "+91 9156694311",
  rawPhone: "9156694311",
  email: "thevisualswithankit.in@gmail.com",
  instagram: "@the_visuals.in",
  instagramUrl: "https://instagram.com/the_visuals.in",
  website: "www.thevisuals.in",
  whatsappBaseUrl: "https://wa.me/919156694311",
  whatsappUrl: "https://wa.me/919156694311?text=Hi%20THEVISUALS.IN,%20I%20would%20like%20to%20discuss%20my%20project.",
};

export const OUR_VISION = "To become a trusted creative and digital growth partner for businesses by making professional digital solutions more accessible, effective, and meaningful.";

export const OUR_MISSION = "To help businesses communicate better, build stronger brands, reach the right audience, and make the most of digital opportunities.";

export const CORE_SERVICES_SUMMARY = [
  {
    num: "01",
    id: "social-media-management",
    title: "Social Media Management",
    desc: "We manage your social media presence by planning content, creating posts and reels, maintaining your brand identity, and managing your social media pages consistently."
  },
  {
    num: "02",
    id: "content-creation",
    title: "Content Creation",
    desc: "We create engaging and creative content, including promotional videos, reels, graphics, posters, and business creatives that communicate your brand's message effectively."
  },
  {
    num: "03",
    id: "digital-marketing",
    title: "Digital Marketing & Advertising",
    desc: "We help businesses reach their potential customers through digital advertising campaigns, audience targeting, campaign planning, and performance monitoring."
  },
  {
    num: "04",
    id: "branding-creative-design",
    title: "Branding & Creative Design",
    desc: "We help businesses build a recognizable identity through creative designs, promotional materials, brand visuals, and consistent communication."
  },
  {
    num: "05",
    id: "website-design-development",
    title: "Website Design & Development",
    desc: "We create professional websites that help businesses showcase their services, build credibility, and provide customers with an easy online experience."
  },
  {
    num: "06",
    id: "business-growth-solutions",
    title: "Business Growth Solutions",
    desc: "We understand your business requirements and suggest suitable digital strategies to improve your online visibility, customer engagement, and marketing efforts."
  }
];

// ========================================================
// SECTION 2: THE BUSINESS PROBLEM (Brief Page 6)
// ========================================================
export const BUSINESS_PROBLEMS = {
  headline: "Your business has different moving parts. They should work together.",
  subtext: "You may be getting attention on social media, receiving enquiries through your website and managing conversations across different channels. But when these parts do not connect, opportunities can be missed.",
  points: [
    {
      id: "disconnect-1",
      title: "People see your business but do not take the next step.",
      desc: "Marketing brings eyeballs, but without a clear offer and engaging narrative, visitors leave without enquiring."
    },
    {
      id: "disconnect-2",
      title: "Your website gets visits but does not bring enough useful enquiries.",
      desc: "A confusing layout, slow load speed, or complicated forms turn interested prospects away."
    },
    {
      id: "disconnect-3",
      title: "Enquiries arrive, but follow-up is slow or inconsistent.",
      desc: "Warm leads slip through the cracks when notifications aren't instant and responses aren't structured."
    },
    {
      id: "disconnect-4",
      title: "Your team spends too much time on repeated manual tasks.",
      desc: "Hours are wasted copying contact details across spreadsheets instead of speaking with buyers."
    },
    {
      id: "disconnect-5",
      title: "It is difficult to see which activities are leading to real customers.",
      desc: "Without unified tracking between marketing and sales, you cannot tell what is genuinely growing the business."
    }
  ]
};

// ========================================================
// SECTION 3 & 4: THE FOUR-STEP CONNECTED GROWTH JOURNEY (Brief Page 4 & 6)
// ========================================================
export const FOUR_STEP_JOURNEY = [
  {
    step: "01",
    name: "ATTRACT",
    title: "01 — ATTRACT",
    headline: "Help the right people notice the business.",
    meaning: "Help the right people notice the business.",
    whatWeProvide: "Brand identity, social media, content, video and paid advertising.",
    deliverables: [
      "Brand strategy & distinctive visual identity",
      "Social media content & community curation",
      "Short-form reels & dynamic commercial video",
      "High-ROI paid advertising campaigns",
      "AI-assisted creative production & graphic design"
    ],
    serviceGroupRef: "marketing-branding"
  },
  {
    step: "02",
    name: "CAPTURE",
    title: "02 — CAPTURE",
    headline: "Give interested people a clear way to enquire.",
    meaning: "Give interested people a clear way to enquire.",
    whatWeProvide: "Websites, landing pages, online stores, forms and apps.",
    deliverables: [
      "High-speed modern business websites",
      "Conversion-focused campaign landing pages",
      "Fast, seamless e-commerce stores",
      "Mobile-friendly enquiry forms & booking tools",
      "Custom web and mobile applications"
    ],
    serviceGroupRef: "web-app-development"
  },
  {
    step: "03",
    name: "NURTURE",
    title: "03 — NURTURE",
    headline: "Help the business respond and stay in touch.",
    meaning: "Help the business respond and stay in touch.",
    whatWeProvide: "Lead management, follow-up systems, CRM setup and suitable automation.",
    deliverables: [
      "Instant lead capture & multi-channel routing",
      "Clean CRM setup & contact organisation",
      "Automated WhatsApp & email response sequences",
      "Lead tagging, assignment & priority alerts",
      "Follow-up scheduling to keep conversations warm"
    ],
    serviceGroupRef: "lead-management-sales"
  },
  {
    step: "04",
    name: "CONVERT",
    title: "04 — CONVERT",
    headline: "Help the team move enquiries towards a sale.",
    meaning: "Help the team move enquiries towards a sale.",
    whatWeProvide: "Sales process improvement, lead tracking, reminders and conversion reporting.",
    deliverables: [
      "Structured sales pipeline & deal stage tracking",
      "Automated team reminders for pending proposals",
      "Integrated booking links & quotation generators",
      "Clear conversion reporting & analytics",
      "Continuous optimization of the closing process"
    ],
    serviceGroupRef: "ai-automation"
  }
];

export const JOURNEY_SUMMARY = "Getting attention is only the beginning. The website, follow-up and sales process should help move an interested person towards becoming a customer.";

// ========================================================
// SECTION 4: THE FOUR CONSOLIDATED SERVICE GROUPS (Brief Page 4 & 5)
// ========================================================
export const SERVICE_GROUPS = [
  {
    id: "marketing-branding",
    number: "01",
    title: "Brand & Marketing",
    journeyStep: "01 — ATTRACT",
    explanation: "Help the business present itself clearly, reach the right audience and get noticed.",
    problemSolved: "When your brand looks inconsistent or your marketing is scattered, potential customers scroll past before they ever learn what you offer.",
    practicalResult: "Present a clear, credible visual presence that reaches qualified buyers and commands attention.",
    servicesIncluded: [
      "Brand strategy and identity",
      "Logo design",
      "Social media management",
      "Digital marketing and ads",
      "Reels and video production",
      "AI-assisted content",
      "Graphic design"
    ],
    path: "/services/marketing-branding",
    anchor: "services-branding"
  },
  {
    id: "web-app-development",
    number: "02",
    title: "Websites & Digital Experiences",
    journeyStep: "02 — CAPTURE",
    explanation: "Create the online experience where people learn about the business, explore its offer and make enquiries or purchases.",
    problemSolved: "A slow, confusing website that looks dated on mobile phones turns interested visitors away instead of capturing their enquiries.",
    practicalResult: "Fast, intuitive digital experiences engineered for lightning speed, mobile devices, and clear enquiry paths.",
    servicesIncluded: [
      "Business websites",
      "Landing pages",
      "E-commerce websites",
      "Web applications",
      "Mobile applications"
    ],
    path: "/services/web-app-development",
    anchor: "services-websites"
  },
  {
    id: "lead-management-sales",
    number: "03",
    title: "Lead Management & Sales",
    journeyStep: "03 — NURTURE",
    explanation: "Help the team keep track of enquiries, respond on time and manage the steps that lead to a sale.",
    problemSolved: "Enquiries arrive through forms, WhatsApp, or DMs, but slow or inconsistent follow-up means warm prospects go cold.",
    practicalResult: "Keep every enquiry organised, notify your team instantly, and make follow-up structured and effortless.",
    servicesIncluded: [
      "Lead capture",
      "Lead organisation",
      "CRM setup",
      "Lead assignment",
      "Follow-up process",
      "Sales pipeline",
      "Conversion reporting"
    ],
    path: "/services/lead-management-sales",
    anchor: "services-leads"
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI Automation & Business Systems",
    journeyStep: "04 — CONVERT",
    explanation: "Reduce repeated manual work and help different tools and processes work together.",
    problemSolved: "Your team spends hours on manual copy-pasting, disconnected spreadsheets, and repetitive routine admin tasks.",
    practicalResult: "Connect your essential tools, automate daily workflows, and build systems that save time and reduce errors.",
    servicesIncluded: [
      "Workflow automation",
      "Connecting business tools",
      "AI-assisted workflows",
      "Custom software",
      "Dashboards",
      "Suitable business systems"
    ],
    path: "/services/ai-automation",
    anchor: "services-automation"
  }
];

// ========================================================
// SECTION 6: THE FIVE STREAMLINED INDUSTRY GROUPS (Brief Page 7)
// ========================================================
export const INDUSTRIES_LIST = [
  {
    id: "real-estate",
    name: "Real Estate & Property",
    headline: "High-value property showcases and qualified buyer funnels.",
    explanation: "Explain relevant problems and solutions for real estate businesses.",
    problemsSolved: [
      "Property listings that look flat or fail to convey architectural scale",
      "High volume of casual inquiries with no qualification system",
      "Slow agent response times losing interested buyers to competitors"
    ],
    solutionsProvided: "Interactive property presentations, one-tap WhatsApp viewing bookings, and automated lead capture routing to agents.",
    slug: "/industries/real-estate"
  },
  {
    id: "ecommerce-retail",
    name: "E-commerce & Retail",
    headline: "Fast online stores, product storytelling, and customer retention.",
    explanation: "Explain relevant problems and solutions for online stores and retail businesses.",
    problemsSolved: [
      "Slow checkout flows and high mobile cart abandonment",
      "Generic product photos that fail to create purchase confidence",
      "Inconsistent ad creative and unoptimized re-engagement"
    ],
    solutionsProvided: "High-speed storefront architecture, short-form product video reels, clear conversion paths, and automated customer re-engagement.",
    slug: "/industries/ecommerce-retail"
  },
  {
    id: "hospitality-wellness",
    name: "Hospitality & Wellness",
    headline: "Direct booking clarity, sensory storytelling, and guest follow-up.",
    explanation: "Explain relevant problems and solutions for hospitality, food, fitness and wellness.",
    problemsSolved: [
      "Reliance on third-party aggregators charging heavy commissions",
      "Friction in table booking or fitness class onboarding",
      "Missed appointments due to lack of automated reminders"
    ],
    solutionsProvided: "Direct reservation landing pages, appetizing video content, verified social proof, and automated WhatsApp appointment reminders.",
    slug: "/industries/hospitality-wellness"
  },
  {
    id: "healthcare-education",
    name: "Healthcare & Education",
    headline: "Trustworthy digital presence, consultation booking, and course enrollment.",
    explanation: "Explain relevant problems and solutions for clinics, healthcare providers and education businesses.",
    problemsSolved: [
      "Patients or students struggling to find verified credentials and service details",
      "Manual phone booking causing administrative bottlenecks",
      "Unclear onboarding steps for new student registrations"
    ],
    solutionsProvided: "Clean, accessible informational websites, easy patient booking interfaces, and automated course enrollment pipelines.",
    slug: "/industries/healthcare-education"
  },
  {
    id: "professional-services",
    name: "Professional Services & Startups",
    headline: "Authority positioning, service packaging, and streamlined client intake.",
    explanation: "Explain relevant problems and solutions for consultants, agencies, professional firms and startups.",
    problemsSolved: [
      "Struggling to articulate complex business solutions in plain language",
      "Time wasted qualifying unsuited or low-budget inquiries",
      "Scattered proposals, contracts, and manual invoice tracking"
    ],
    solutionsProvided: "Authoritative brand identities, clear service packaging, discovery call booking funnels, and connected CRM workflows.",
    slug: "/industries/professional-services"
  }
];

// ========================================================
// SECTION 7: HOW WE WORK — 5 STRUCTURED STEPS
// ========================================================
export const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    name: "Understanding Your Business",
    whatHappens: "First, we understand your business, products, services, target audience, challenges, and goals.",
    detail: "First, we understand your business, products, services, target audience, challenges, and goals."
  },
  {
    step: "02",
    name: "Planning & Strategy",
    whatHappens: "Based on your requirements, we prepare a suitable marketing strategy and content plan.",
    detail: "Based on your requirements, we prepare a suitable marketing strategy and content plan."
  },
  {
    step: "03",
    name: "Creative Development",
    whatHappens: "Our focus is on creating engaging content, professional designs, and digital campaigns that match your brand identity.",
    detail: "Our focus is on creating engaging content, professional designs, and digital campaigns that match your brand identity."
  },
  {
    step: "04",
    name: "Execution & Management",
    whatHappens: "We execute the approved strategy, manage the required digital activities, and maintain consistency across your online platforms.",
    detail: "We execute the approved strategy, manage the required digital activities, and maintain consistency across your online platforms."
  },
  {
    step: "05",
    name: "Monitoring & Improvement",
    whatHappens: "We review campaign performance, analyse audience responses, and identify opportunities to improve our work.",
    detail: "We review campaign performance, analyse audience responses, and identify opportunities to improve our work."
  }
];

// Alias for backward compatibility
export const PROCESS_STEPS = HOW_WE_WORK_STEPS;

// ========================================================
// SECTION 8: WAYS TO WORK TOGETHER — 4 ENGAGEMENT MODELS (Brief Page 7)
// ========================================================
export const ENGAGEMENT_MODELS = [
  {
    id: "project-based",
    name: "Project-based",
    tagline: "For a clearly defined website, brand or system project.",
    description: "Ideal when you have a specific goal with clear boundaries—such as launching a new website, developing a brand identity, or setting up a CRM.",
    benefits: [
      "Fixed, agreed scope of deliverables",
      "Clear timeline and milestone deadlines",
      "Structured handover and walkthrough"
    ]
  },
  {
    id: "monthly-partnership",
    name: "Monthly partnership",
    tagline: "For ongoing marketing, support and improvements.",
    description: "Ideal for businesses wanting an active, integrated digital partner handling continuous content, advertising, website updates, and lead systems.",
    benefits: [
      "Consistent monthly attention and execution",
      "Regular review calls and performance adjustments",
      "Priority turnaround across multiple service areas"
    ]
  },
  {
    id: "focused-sprint",
    name: "Focused sprint",
    tagline: "For a specific piece of work that needs concentrated attention.",
    description: "A short, intensive sprint designed to solve one specific bottleneck quickly—such as fixing a slow website, launching an urgent ad campaign, or connecting an automated workflow.",
    benefits: [
      "Rapid turnaround in 5 to 10 days",
      "Dedicated concentration on a single problem",
      "Immediate, practical outcome"
    ]
  },
  {
    id: "custom-engagement",
    name: "Custom engagement",
    tagline: "For a combination of services based on the business need.",
    description: "A tailored arrangement combining elements across marketing, development, and automation designed around your specific team and growth stage.",
    benefits: [
      "Customized scope built around your priorities",
      "Flexible blend of creative and technical support",
      "Starts with what matters most to your business"
    ]
  }
];

// ========================================================
// SECTION 9: FREQUENTLY ASKED QUESTIONS — 5 APPROVED Q&As (Brief Page 7)
// ========================================================
export const FAQS_LIST = [
  {
    id: "faq-1",
    question: "Do I need every service?",
    answer: "No. We can start with the problem that matters most and identify what should come next."
  },
  {
    id: "faq-2",
    question: "Can VISUALS handle both creative and technical work?",
    answer: "We bring the relevant creative and technical work together, based on the agreed project scope."
  },
  {
    id: "faq-3",
    question: "Can you improve my existing website or systems?",
    answer: "Yes. We can first review what you already use and identify what should be improved or connected."
  },
  {
    id: "faq-4",
    question: "Do you offer one-time projects and ongoing support?",
    answer: "Both options may be available, depending on the work required."
  },
  {
    id: "faq-5",
    question: "How do I get started?",
    answer: "Tell us about your business and what you want to improve. We will discuss the next suitable step."
  }
];

// ========================================================
// SECTION 10: CASE STUDIES & PORTFOLIO (Real Client Work & Demonstrations)
// ========================================================
export const PORTFOLIO_LIST = [
  {
    id: "dr-kanwal-skincare",
    title: "Dr. Kanwal Skincare",
    category: "Websites",
    categoryLabel: "Dermatology Clinic & Consultation Portal",
    type: "Clinical Web Platform & Patient Booking",
    industry: "Healthcare & Aesthetics",
    description: "Official web presence and consultation booking portal for Dr. Kanwal Koukab, Consultant Dermatologist & Aesthetic Physician. Designed with clean clinical aesthetics, structured procedure showcases, and direct patient consultation routing.",
    clientGoal: "Establish a credible digital presence for the dermatology clinic, showcase specialized treatments (HydraFacial, chemical peels, PRP, aesthetic rejuvenation), and make it effortless for patients to book consultations.",
    challenge: "Prospective patients needed clear, trustworthy clinical information about treatments and a frictionless method to schedule appointments without phone call delays.",
    workCompleted: "Architected a responsive, mobile-first clinic platform with comprehensive treatment breakdowns, dermatologist credentials, before-after galleries, and instant WhatsApp / call inquiry integration.",
    outcome: "Streamlined patient booking experience, increased digital patient enquiries, and reinforced professional credibility in aesthetic dermatology.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "http://drkanwalskincare.com/",
    isConcept: false,
    tag: "Live Client Project",
    badge: "Client Project",
    deliverables: [
      "Custom responsive medical website architecture",
      "Dermatology treatment & service showcase pages",
      "Instant WhatsApp appointment enquiry integration",
      "Mobile-optimized appointment scheduling funnel",
      "Local SEO and Core Web Vitals optimization"
    ],
    technologies: ["React", "Tailwind CSS", "WhatsApp Business API", "SEO Best Practices", "Responsive Design"]
  },
  {
    id: "patna-city-marriage-hall",
    title: "Patna City Marriage Hall",
    category: "Websites",
    categoryLabel: "Hospitality & Venue Booking Platform",
    type: "Marriage Hall & Guest Accommodation Portal",
    industry: "Hospitality & Event Venues",
    description: "Digital booking and showcase platform for Patna City Marriage Hall, a premier wedding venue in Patna, Bihar featuring an expansive marriage hall, rooftop event terrace, and 18 on-site guest rooms.",
    clientGoal: "Enable prospective brides, grooms, and event planners to tour venue facilities digitally, view room accommodations, and inquire directly for wedding dates and reception packages.",
    challenge: "Local wedding planners and out-of-town family members needed detailed photo tours of banquet halls, terrace spaces, and room capacities without requiring immediate physical site visits.",
    workCompleted: "Developed a vibrant, mobile-first showcase site highlighting banquet spaces, room features, terrace views, location directions, and a prominent 1-tap WhatsApp booking hotline.",
    outcome: "Significantly higher online booking inquiries, reduced back-and-forth telephone queries, and full visibility into venue amenities.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.patnacitymarriagehall.com/",
    isConcept: false,
    tag: "Live Client Project",
    badge: "Client Project",
    deliverables: [
      "Complete venue showcase & visual gallery",
      "18-room accommodation details & amenity guide",
      "1-tap WhatsApp & phone booking integration",
      "Interactive location map & route guidance",
      "High-speed mobile layout for quick event browsing"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "WhatsApp API", "Google Maps Integration"]
  },
  {
    id: "house-of-ayra",
    title: "House of Ayra",
    category: "Websites",
    categoryLabel: "Luxury Bridal Couture & E-Commerce",
    type: "Bespoke Couture Platform & Appointment Booking",
    industry: "Luxury Fashion & Bridal Wear",
    description: "High-fashion digital showcase and appointment booking portal for House of Ayra, a luxury Indian bridal couture label based in Mumbai specializing in 3D appliqué craftsmanship, heritage lehengas, and made-to-measure bridal ensembles.",
    clientGoal: "Capture the opulent, handcrafted prestige of the bridal label online, showcase curated bridal collections, and enable brides across India and globally to book studio styling consultations.",
    challenge: "High-value couture clients demand flawless visual storytelling, high-resolution garment detail representation, and an ultra-refined, bespoke appointment scheduling process.",
    workCompleted: "Engineered an editorial luxury digital experience with fluid collection lookbooks, detailed garment feature zooms, couture storyboards, and private bridal appointment forms.",
    outcome: "Elevated brand prestige, international bridal consultation inquiries, and a seamless presentation matching the label's flagship Mumbai studio aesthetic.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://houseofayra.com/",
    isConcept: false,
    tag: "Live Client Project",
    badge: "Client Project",
    deliverables: [
      "Luxury editorial lookbook & couture catalog",
      "Private bridal consultation & studio appointment flow",
      "Mobile-first responsive fashion UX",
      "High-resolution media optimization",
      "Brand story & artisan craftsmanship showcase"
    ],
    technologies: ["React", "Modern CSS", "Mobile UX", "E-Commerce Funnel", "Performance Optimization"]
  },
  {
    id: "sun-entrepreneurship-club",
    title: "SUN Entrepreneurship Club",
    category: "Branding",
    categoryLabel: "Community Brand & Social Growth",
    type: "Social Media Strategy & Community Identity",
    industry: "Education & Startup Ecosystem",
    description: "Comprehensive social media strategy, visual identity, and community growth system for SUN Entrepreneurship Club—a student and founder hub fostering innovation, pitch sessions, and startup culture.",
    clientGoal: "Build an engaging social brand presence on Instagram that inspires aspiring founders, boosts student event participation, and spotlights student entrepreneurial initiatives.",
    challenge: "Campus entrepreneurship content often feels academic or dry; the club needed punchy, youth-centric visual design and consistent multi-format Instagram content.",
    workCompleted: "Crafted a vibrant visual identity, high-contrast Instagram grid templates, speaker announcement carousels, event countdown reels, and active community engagement workflows.",
    outcome: "Substantial increase in follower engagement, sold-out speaker events, and a vibrant community of ambitious student builders.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.instagram.com/sun_entrepreneurship_club",
    isConcept: false,
    tag: "Live Client Project",
    badge: "Client Project",
    deliverables: [
      "Instagram visual identity & grid design system",
      "Event promotion graphics & speaker announcement decks",
      "Short-form reel strategy and community hook ideation",
      "Monthly social media content calendar",
      "Story engagement templates & highlight covers"
    ],
    technologies: ["Figma", "Social Media Strategy", "Instagram Creator Tools", "Content Calendar", "Canva Pro"]
  },
  {
    id: "commercial-reel-brand-motion",
    title: "Commercial Reel: Brand Motion & Impact",
    category: "Video Production",
    categoryLabel: "Commercial Reel & Short-Form Video",
    type: "High-Retention Instagram Reel Production",
    industry: "Media & Commercial Advertising",
    description: "High-energy commercial reel production engineered for explosive social engagement, instant visual hooks, and maximum audience retention across Instagram and TikTok.",
    clientGoal: "Hook viewers in the first 3 seconds with striking visuals, rhythmic sound design, and drive strong profile visits and saves.",
    challenge: "Social media feeds are intensely competitive; content must deliver instant emotional impact with zero dead time.",
    workCompleted: "Scripted visual hook sequence, handled color grade mastering, dynamic speed ramping, beat-synced audio transitions, and crisp typographic callouts.",
    outcome: "High viral reach, boosted algorithmic distribution, and superior completion rate compared to average brand content.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.instagram.com/reel/DdzJHToN9tE/",
    isConcept: false,
    hasPlay: true,
    tag: "Live Client Reel",
    badge: "Client Project",
    deliverables: [
      "9:16 vertical commercial video editing",
      "Dynamic hook design & rhythm-matched pacing",
      "Professional color grading & cinematic LUTs",
      "Sound design & beat-synchronized sound FX",
      "Motion typography and on-screen CTA animation"
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "Sound Design", "Color Grading", "Instagram Reels"]
  },
  {
    id: "cinematic-social-reel-pacing",
    title: "Cinematic Reel: Storytelling & Visual Rhythm",
    category: "Video Production",
    categoryLabel: "Cinematic Motion & Storytelling",
    type: "Dynamic Social Video Production",
    industry: "Digital Media & Brand Storytelling",
    description: "Cinematic short-form reel designed with fast-paced cuts, immersive visual composition, and modern aesthetic grading to deliver memorable brand storytelling.",
    clientGoal: "Deliver a premium visual piece that captures lifestyle luxury and creates high shareability among target consumers.",
    challenge: "Balancing cinematic aesthetic depth with the fast attention span required by short-form vertical algorithms.",
    workCompleted: "Executed multi-angle frame sequencing, macro b-roll pacing, custom atmospheric audio layers, and optimized aspect ratios for cross-platform posting.",
    outcome: "Strong organic re-shares, elevated brand perception, and high click-through rates to client bio links.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.instagram.com/reel/DdsbHY4I-Zs/",
    isConcept: false,
    hasPlay: true,
    tag: "Live Client Reel",
    badge: "Client Project",
    deliverables: [
      "Cinematic 9:16 video editing and curation",
      "Atmospheric audio mastering and ambient track sync",
      "High-contrast color balancing and skin tone grading",
      "Frame-by-frame visual pacing and transition cuts",
      "Optimized export presets for ultra-clear mobile playback"
    ],
    technologies: ["Adobe Premiere Pro", "DaVinci Resolve", "Audio Mastering", "Motion Design", "Instagram Reels"]
  },
  {
    id: "aura-atelier",
    title: "Aura Atelier",
    category: "Branding",
    categoryLabel: "Brand Identity & Packaging",
    type: "Concept Identity & Packaging",
    industry: "Luxury Retail",
    description: "A distinctive visual mark and cohesive brand packaging concept designed to elevate boutique jewellery customer perception.",
    clientGoal: "Create an unmistakable luxury identity for an artisanal jewellery house.",
    challenge: "A boutique jewellery studio required a distinctive visual mark and cohesive brand packaging to elevate customer perception.",
    workCompleted: "Crafted primary and secondary logomarks, typography architecture, packaging mockups, and a concise brand guidelines manual.",
    outcome: "Verified brand identity ready for retail production and social presence.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    isConcept: true,
    tag: "Design Prototype",
    badge: "Design Exploration",
    deliverables: [
      "Primary & secondary logomarks",
      "Typography system and luxury color palette",
      "Jewellery box packaging mockups and finish specs",
      "Brand identity style guide"
    ],
    technologies: ["Figma", "Adobe Illustrator", "3D Mockups"]
  },
  {
    id: "vanguard-heights",
    title: "Vanguard Heights",
    category: "Websites",
    categoryLabel: "Web Development & Lead Funnel",
    type: "Real Estate Showcase",
    industry: "Real Estate & Property",
    description: "High-performance property showcase portal featuring interactive floor plans and direct WhatsApp tour booking.",
    clientGoal: "Eliminate mobile user friction when browsing multi-tier luxury residential floor plans.",
    challenge: "Prospective property buyers faced difficulty navigating floor plans on mobile devices, leading to drop-offs before enquiry.",
    workCompleted: "Engineered a fast, responsive property showcase with interactive plan viewing and one-tap WhatsApp viewing scheduling.",
    outcome: "Smooth mobile performance with zero layout shift and direct enquiry path.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    isConcept: true,
    tag: "Interactive Demo",
    badge: "Design Exploration",
    deliverables: [
      "Responsive property showcase web layout",
      "Interactive SVG floor plan viewer",
      "WhatsApp tour scheduling integration",
      "Optimized property gallery"
    ],
    technologies: ["React", "Tailwind CSS", "Vite"]
  },
  {
    id: "nexus-pay",
    title: "Nexus Pay Global",
    category: "Websites",
    categoryLabel: "Web Application Interface",
    type: "FinTech Portal Design",
    industry: "Professional Services & Startups",
    description: "Clean, high-contrast dashboard interface with intuitive navigation and responsive financial chart components.",
    clientGoal: "Simplify complex treasury analytics into an effortless, legible user interface.",
    challenge: "Complex treasury analytics were overwhelming users due to cluttered navigation and unorganized data tables.",
    workCompleted: "Designed a clean, high-contrast dashboard interface with intuitive navigation and responsive financial chart components.",
    outcome: "Uncluttered user workflow reducing time needed to review account activity.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    isConcept: true,
    tag: "UI/UX Case Study",
    badge: "Design Exploration",
    deliverables: [
      "Fintech dashboard component system",
      "Interactive financial charts and ledger tables",
      "Dark-mode user interface tokens",
      "Responsive cross-platform layout"
    ],
    technologies: ["React", "Tailwind CSS", "Chart.js"]
  }
];

// ========================================================
// INDIVIDUAL SERVICES (Mapped to Parent Groups for Detail Routes)
// ========================================================
export const SERVICES_LIST = [
  {
    id: "website-development",
    title: "Website Development",
    shortDesc: "Fast, responsive, and conversion-optimized websites built on modern web stacks.",
    parentGroupId: "web-app-development",
    parentGroupName: "Websites & Digital Experiences",
    category: "Development",
    icon: "Globe",
    badge: "Capture",
    problem: "Most businesses struggle with slow, template-heavy websites that look generic, load slowly on mobile devices, and fail to turn visitors into enquiries.",
    solution: "We build bespoke websites on modern stacks engineered for fast load times, flawless mobile responsiveness, and clear paths to enquire.",
    deliverables: [
      "Custom responsive design matching your business aesthetics",
      "High-speed frontend development (React / Vite / Tailwind CSS)",
      "Mobile-first responsive layout across all screen sizes",
      "Clear lead capture forms & WhatsApp enquiry buttons",
      "Technical SEO foundation and Core Web Vitals optimization"
    ],
    timeline: "7 – 20 Days",
    relatedIds: ["logo-design-and-branding", "business-digital-solutions", "ai-automation"]
  },
  {
    id: "logo-design-and-branding",
    title: "Logo Design and Branding",
    shortDesc: "Signature logos and comprehensive visual identities that command respect.",
    parentGroupId: "marketing-branding",
    parentGroupName: "Brand & Marketing",
    category: "Design",
    icon: "Palette",
    badge: "Attract",
    problem: "Inconsistent graphics and outdated visual presentation undermine your business credibility before customers even hear your pitch.",
    solution: "We develop complete brand design systems that establish prestige, authority, and emotional resonance across digital customer touchpoints.",
    deliverables: [
      "Primary logo, secondary marks, and responsive icons",
      "Brand style guide (Typography, Color Palette, Spacing)",
      "Vector master files (.SVG, .AI, .PNG, .PDF)",
      "Digital stationery and social media brand kit"
    ],
    timeline: "5 – 12 Days",
    relatedIds: ["poster-banner-and-graphic-design", "website-development", "social-media-management"]
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortDesc: "End-to-end social media handling, content calendars, and audience engagement.",
    parentGroupId: "marketing-branding",
    parentGroupName: "Brand & Marketing",
    category: "Marketing",
    icon: "Share2",
    badge: "Attract",
    problem: "Posting randomly without a structured content plan fails to build an engaged community or reliable inbound customer flow.",
    solution: "We manage your brand's social channels systematically with strategic content planning, consistent aesthetic standards, and active community interaction.",
    deliverables: [
      "Monthly content calendar with theme and pillar planning",
      "High-aesthetic feed design and custom story templates",
      "Engaging captions with targeted keywords",
      "Scheduled publishing and performance reviews"
    ],
    timeline: "Monthly Partnership",
    relatedIds: ["digital-marketing", "reel-shooting-and-video-editing"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing and Ads",
    shortDesc: "Targeted advertising campaigns on Meta, Google and beyond connecting attention to conversion.",
    parentGroupId: "marketing-branding",
    parentGroupName: "Brand & Marketing",
    category: "Marketing",
    icon: "Megaphone",
    badge: "Attract",
    problem: "Boosting random posts burns marketing budgets without yielding measurable qualified leads or sales enquiries.",
    solution: "We design, write, launch, and test structured paid ad funnels with precise audience targeting and conversion tracking.",
    deliverables: [
      "Audience research and interest targeting",
      "High-converting ad creatives (static and short-form video)",
      "Persuasive direct-response ad copywriting",
      "Conversion tracking setup for accurate reporting"
    ],
    timeline: "Ongoing Sprint / Monthly",
    relatedIds: ["social-media-management", "website-development"]
  },
  {
    id: "reel-shooting-and-video-editing",
    title: "Reels & Video Production",
    shortDesc: "Scroll-stopping short-form videos and dynamic commercial edits.",
    parentGroupId: "marketing-branding",
    parentGroupName: "Brand & Marketing",
    category: "Video",
    icon: "Video",
    badge: "Attract",
    problem: "Attention spans on mobile are short. Boring, static content gets scrolled past instantly.",
    solution: "We craft dynamic short-form videos with strong visual hooks, seamless transitions, synchronized sound design, and crisp captions.",
    deliverables: [
      "Creative concept, scripting, and hook ideation",
      "Professional pacing, color balancing, and b-roll integration",
      "Dynamic animated subtitles and sound design",
      "Platform-optimized 9:16 vertical exports"
    ],
    timeline: "3 – 7 Days",
    relatedIds: ["digital-marketing", "ai-video-and-ai-advertising"]
  },
  {
    id: "ai-video-and-ai-advertising",
    title: "AI Video & Content",
    shortDesc: "Synthetic media, AI-assisted video concepts, and next-generation creative assets.",
    parentGroupId: "marketing-branding",
    parentGroupName: "Brand & Marketing",
    category: "AI & Innovation",
    icon: "Sparkles",
    badge: "Attract",
    problem: "Traditional commercial shoots are often expensive and take weeks to coordinate.",
    solution: "We use AI creative platforms to produce eye-catching commercial visuals and exploratory video concepts quickly.",
    deliverables: [
      "Generative visual storyboarding and concept staging",
      "High-resolution AI-assisted video sequences",
      "Composite editing combining real assets with AI visuals"
    ],
    timeline: "5 – 10 Days",
    relatedIds: ["reel-shooting-and-video-editing", "digital-marketing"]
  },
  {
    id: "ai-automation",
    title: "AI Automation & Workflow Systems",
    shortDesc: "Intelligent lead handling, CRM integrations, and business workflow automations.",
    parentGroupId: "ai-automation",
    parentGroupName: "AI Automation & Business Systems",
    category: "AI & Innovation",
    icon: "Zap",
    badge: "Nurture & Convert",
    problem: "Repetitive manual tasks—such as copying leads across spreadsheets or manually typing alerts—eat hours every week.",
    solution: "We integrate custom automations and tool connections to streamline customer capture and team speed.",
    deliverables: [
      "Automated lead routing from website forms to WhatsApp & CRM",
      "Instant inquiry notifications and follow-up alerts",
      "Tool connectivity between Google Workspace, Email, and CRMs",
      "Staff walkthrough and handover guide"
    ],
    timeline: "5 – 14 Days",
    relatedIds: ["business-digital-solutions", "website-development"]
  },
  {
    id: "business-digital-solutions",
    title: "Business Digital Solutions",
    shortDesc: "Custom operational software, client portals, and connected business tools.",
    parentGroupId: "ai-automation",
    parentGroupName: "AI Automation & Business Systems",
    category: "Development",
    icon: "Layers",
    badge: "Convert",
    problem: "Growing businesses outgrow basic spreadsheets and need tailored digital tools to manage client orders and quotes.",
    solution: "We architect scalable operational portals, custom calculators, and customer hubs tailored to your specific workflow.",
    deliverables: [
      "Custom client portals and internal dashboards",
      "Interactive quoting calculators and digital onboarding funnels",
      "Third-party software integration (Payment gateways, CRMs, APIs)"
    ],
    timeline: "14 – 30 Days",
    relatedIds: ["website-development", "ai-automation"]
  },
  {
    id: "poster-banner-and-graphic-design",
    title: "Graphic Design & Display Creatives",
    shortDesc: "High-impact visual creatives for digital advertising and marketing collateral.",
    parentGroupId: "marketing-branding",
    parentGroupName: "Brand & Marketing",
    category: "Design",
    icon: "Layout",
    badge: "Attract",
    problem: "Cluttered or low-resolution banners damage trust and fail to communicate promotional offers clearly.",
    solution: "We design clean, bold graphic posters and digital display banners that communicate your offer instantly.",
    deliverables: [
      "Digital ad creatives across standard dimensions",
      "Website hero graphics and promotional banners",
      "High-resolution print and web formats"
    ],
    timeline: "2 – 5 Days",
    relatedIds: ["logo-design-and-branding", "digital-marketing"]
  }
];

// Preserved for Careers, Blog, and Why Choose Us components
export const JOB_OPENINGS = [
  {
    id: "frontend-developer-intern",
    title: "Frontend Developer (React / Next.js)",
    department: "Engineering",
    type: "Contract / Project-Based",
    workArrangement: "Remote",
    location: "Remote (India)",
    experience: "0 – 2 Years / Strong Portfolio",
    deadline: "Open until filled",
    description: "We are looking for a passionate Frontend Developer who cares about clean responsive UI, accessibility, and fast modern React code.",
    responsibilities: [
      "Translate designs into responsive, high-speed React components",
      "Ensure pixel-perfect cross-browser fidelity across mobile and desktop",
      "Work directly with Founder Ankit on agency deliverables and performance checks"
    ],
    requirements: [
      "Proficiency in React, modern JavaScript, and Tailwind CSS",
      "Strong understanding of responsive layouts and typography",
      "Live portfolio or GitHub repository showcasing your work"
    ]
  }
];

export const BLOG_POSTS = [
  {
    id: "turning-attention-into-customers",
    title: "Turning Attention into Customers: The 4-Step Connected Journey",
    category: "Strategy",
    readTime: "4 min read",
    date: "October 2026",
    excerpt: "Why getting attention on social media is only the beginning, and how connected website capture and lead follow-up turn views into real clients.",
    content: "Getting attention is only the beginning. The website, follow-up and sales process should help move an interested person towards becoming a customer..."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Business-Focused Approach",
    description: "We align every creative and digital activity directly with your commercial goals, customer growth, and business success."
  },
  {
    title: "Creative and Customised Solutions",
    description: "No generic templates or one-size-fits-all formulas. We create tailored solutions that reflect your brand's unique identity."
  },
  {
    title: "Clear Communication and Collaboration",
    description: "Direct founder collaboration, milestone-based updates, and transparent communication throughout your project."
  },
  {
    title: "Strategic Content Planning",
    description: "Structured content calendars and high-retention storytelling designed to engage your target audience consistently."
  },
  {
    title: "Focus on Brand Identity and Online Visibility",
    description: "We work to make your brand more visible, recognizable, and connected with the right audience across digital platforms."
  },
  {
    title: "Continuous Improvement Based on Performance",
    description: "We review campaign performance, analyse audience responses, and continuously identify opportunities to improve our work."
  }
];

export const CORE_BELIEF = "We believe every business deserves the opportunity to build a strong digital presence, regardless of its size.";

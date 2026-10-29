# THEVISUAL.IN — Complete Professional Company Website

> **"We Build. We Create. We Grow."**  
> *Your Complete Digital & Creative Partner. Ideas into Digital.*

---

## 🌟 Overview & Architecture

**THEVISUAL.IN** is a production-ready, high-converting agency website engineered with a **Luxury Black, Deep Charcoal & Champagne Gold** aesthetic. It provides a multi-page routing architecture with dynamic views, interactive inquiry builders, careers recruitment, portfolio case studies, and contextual WhatsApp integration.

---

## 🧭 Complete Page & Route Map

| Page / Route | Path | Description |
|---|---|---|
| **Homepage** | `/` | Hero section, services overview, featured work, 6-step process, Why Choose Us, and final CTA. |
| **About Us** | `/about` | Company introduction, vision & mission, core values, operational philosophy, and founder spotlight (Ankit). |
| **All Services** | `/services` | Comprehensive catalog of all 13 specialized services with category filters. |
| **Service Detail** | `/services/:id` | Dedicated page for each of the 13 services: problem statement, deliverables, scope, and direct inquiry CTA. |
| **Portfolio / Our Work** | `/portfolio` | Filterable project showcase with genuine concepts clearly labeled. |
| **Project Case Study** | `/portfolio/:id` | In-depth case study with client objective, deliverables, tech stack, and similar-project CTA. |
| **Careers** | `/careers` | Active openings (Frontend, Video Editor, UI/UX), department filter, and speculative application option. |
| **Job Details & Apply** | `/careers/:id` | Complete role description, responsibilities, requirements, and PDF resume application form. |
| **Blog / Insights** | `/blog` | Articles catalog with search and category filters (Web Development, Branding, AI). |
| **Blog Article** | `/blog/:id` | Full article reader with reading time, copy link, and WhatsApp share buttons. |
| **Start a Project / Quote** | `/start-a-project` | Multi-step interactive estimator (Services, budget, timeline, brief) with direct WhatsApp and email routing. |
| **Contact Page** | `/contact` | Click-to-call, click-to-email, direct WhatsApp conversation, and full contact form. |
| **Privacy Policy** | `/privacy-policy` | Honest legal privacy notice reflecting actual inquiry and recruitment data handling. |
| **Terms & Conditions** | `/terms` | Standard milestone, intellectual property, and project scope terms. |
| **Admin Dashboard** | `/admin` | Creative agency workspace control center with real-time project pipeline, revenue telemetry, interactive charts, and WhatsApp leads. |
| **404 Not Found** | `*` | Custom error page with button returning to homepage. |

---

## 💼 The 13 Official Services

1. **Website Development** (`/services/website-development`)
2. **Logo Design and Branding** (`/services/logo-design-and-branding`)
3. **Social Media Management** (`/services/social-media-management`)
4. **Social Media Advertising** (`/services/social-media-advertising`)
5. **Digital Marketing** (`/services/digital-marketing`)
6. **Reel Shooting and Video Editing** (`/services/reel-shooting-and-video-editing`)
7. **Product and Promotional Videos** (`/services/product-and-promotional-videos`)
8. **AI Video and AI Advertising** (`/services/ai-video-and-ai-advertising`)
9. **Poster, Banner, and Graphic Design** (`/services/poster-banner-and-graphic-design`)
10. **AI Content Creation** (`/services/ai-content-creation`)
11. **AI Automation** (`/services/ai-automation`)
12. **Business Digital Solutions** (`/services/business-digital-solutions`)
13. **Custom Creative and Freelance Projects** (`/services/custom-creative-and-freelance-projects`)

---

## 🚀 Running the Project

### Development Server:
```powershell
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### Production Build:
```powershell
npm run build
```
Generates an optimized static production bundle in `dist/`.

### Preview Production Build:
```powershell
npm run preview
```

---

## 📱 Official Contact Details Configured

All contact information is centralized in [`src/data/agencyData.js`](src/data/agencyData.js):

- **Phone / WhatsApp:** `+91 9156694311` (wa.me formatted without spaces)
- **Email:** `thevisualswithankit.in@gmail.com`
- **Website:** `www.thevisuals.in`
- **Instagram:** `@the_visuals.in`
- **Founder:** Ankit

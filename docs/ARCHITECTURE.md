# Alamir Tech — System Architecture & Implementation

## 1. Architectural Philosophy
The **Alamir Tech** website is built using **Clean Architecture principles**:
- **Separation of Concerns**: Presentation, Domain Data, Visual Assets, and UI Primitives are strictly separated into discrete layers.
- **Type-Safety**: 100% typed with TypeScript (`strict: true`), zero type errors.
- **Decoupled Data**: All business copy, services, products, FAQs, navigation, and contact info are declared in type-safe modules under `lib/`.
- **Zero External UI Bloat**: Dependency-free, optimized SVG vector graphics and icons—lightning-fast load times with zero bundle overhead.

---

## 2. Directory Structure
```
alamir-tech/
├── app/
│   ├── favicon.ico
│   ├── globals.css                       # Tailwind CSS v4 design tokens & theme
│   ├── layout.tsx                        # Root layout, brand SEO metadata, favicon
│   ├── not-found.tsx                     # Branded 404 page
│   └── page.tsx                          # Composite landing page
├── components/
│   ├── graphics/                         # Custom SVG vector illustrations
│   │   ├── CeoAvatar.tsx                 # Executive founder portrait
│   │   ├── RocketIllustration.tsx        # 3D rocket blasting off
│   │   ├── TeamIllustration.tsx          # Agile engineering team collaboration
│   │   └── WorldMap.tsx                  # Interactive world map with radar pins
│   ├── icons/
│   │   └── index.tsx                     # Typed, tree-shakeable SVG icons
│   ├── layout/                           # Global structural layouts
│   │   ├── Footer.tsx                    # Deep navy footer with white logo & links
│   │   └── Navbar.tsx                    # Sticky header with logo & CTA button
│   ├── sections/                         # Feature sections matching UI mockup
│   │   ├── ChallengesSolutionsSection.tsx# Philosophy + Understand/Connect/Scale
│   │   ├── ConnectedTeamSection.tsx      # World Map + Leadership + Global stats
│   │   ├── ContactEnquirySection.tsx     # Direct channels + Enquiry form
│   │   ├── FAQSection.tsx                # Accordion FAQ
│   │   ├── HeroSection.tsx               # Hero ("Run your business with greater clarity")
│   │   ├── PowerfulSoftwareSection.tsx   # Solutions & Products (ERP, CRM, Finance)
│   │   ├── RocketCTASection.tsx          # High-conversion 3D rocket CTA banner
│   │   └── TechSolutionsSection.tsx      # "Technology Solutions That Move Your Business Forward"
│   └── ui/                               # Atomic design primitives
│       ├── Accordion.tsx                 # Accessible animated accordion
│       ├── Badge.tsx                     # Pill badges (cyan, pink, purple, blue)
│       └── Button.tsx                    # Brand pink CTA button matching Button.png
├── docs/
│   ├── ARCHITECTURE.md                   # This architectural specification
│   └── BRAND_GUIDELINES.md               # Brand design system & color tokens
├── lib/                                  # Domain logic & content configuration
│   ├── faq-data.ts                       # FAQ data models & questions
│   ├── services-data.ts                  # Services, products, and metrics data
│   └── site-config.ts                    # Global contact, navigation & metadata
└── public/
    └── images/
        ├── ALAMIR TECH LOGO 3.png       # Original source logo
        ├── Brand Guidelines.png         # Original brand guidelines
        ├── Button.png                   # Original button specification
        ├── logo-color-trimmed.png       # Trimmed color logo for light headers
        └── logo-white-trimmed.png       # Trimmed white logo for dark navy footers
```

---

## 3. UI Section Mapping (Matching Design Mockup)

1. **Header & Navigation (`Navbar.tsx`)**:
   - Color logo on light background.
   - Links: Home, About, Services, Products, Our Team, Contact.
   - Action: Pink pill button "Let's Talk".
2. **Hero Section (`HeroSection.tsx`)**:
   - Headline: *"Run your business with greater clarity."*
   - Subtitle: Enterprise custom software & cloud architecture.
   - Actions: "Start a Project Today" + "See how we work".
   - 4 Metric Badges: 4.9/5 Rating, 99.9% Uptime, 100% Security, 4.2x Faster.
3. **Services (`TechSolutionsSection.tsx`)**:
   - Headline: *"Technology Solutions That Move Your Business Forward"*
   - 3 Feature Cards: Custom Software Development, Cloud Infrastructure & DevOps, Data Engineering & AI Systems.
4. **Products (`PowerfulSoftwareSection.tsx`)**:
   - Headline: *"Powerful Software for Every Business Need"*
   - 3 Product Cards: ERP & Operations Platform, Enterprise CRM & Sales Suite, Automated Financial Management.
5. **Team & Philosophy (`ChallengesSolutionsSection.tsx`)**:
   - Headline: *"We turn business challenges into practical software solutions."*
   - Cross-functional team visual + 3 Pillars (Continuous Consultation, Robust Architecture, Transparent Delivery).
   - 3 Bottom Process Cards: Understand (Pink), Connect (Cyan), Scale (Purple).
6. **Global Presence & Leadership (`ConnectedTeamSection.tsx`)**:
   - Headline: *"A connected team, building smarter solutions."*
   - Interactive World Map with animated glowing radar pins (San Francisco, London, Riyadh, Dubai, Singapore).
   - Executive Leadership card: Amir Farooq, Founder & CEO.
   - Global stats bar: 100+ Enterprise Clients, 14+ Global Hubs, 250+ Delivered Apps, 99.9% Uptime SLA, 4.8/5 Satisfaction.
7. **Contact & Project Enquiry (`ContactEnquirySection.tsx`)**:
   - Headline: *"Let's build something that works for your business."*
   - Direct Channels: WhatsApp, Phone, Email, Location + 24/7 Urgent Support hotline.
   - Interactive Enquiry Form: Full Name, Company, Phone, Service, Budget, Project Details.
8. **FAQ (`FAQSection.tsx`)**:
   - Headline: *"Question, answered"*
   - Interactive Accordion with smooth toggle and animated chevrons.
9. **Rocket CTA (`RocketCTASection.tsx`)**:
   - Headline: *"Ready to make your business work smarter?"*
   - High-fidelity 3D Rocket vector with thruster exhaust.
   - Action: "Start your project today".
10. **Footer (`Footer.tsx`)**:
    - Deep Navy footer with White Logo, Social Links, Pages, Solutions, Contact info, and Copyright.

---

## 4. Build & Development Commands
```bash
# Start development server
npm run dev

# Compile TypeScript and build for production
npm run build

# Start production server
npm run start
```

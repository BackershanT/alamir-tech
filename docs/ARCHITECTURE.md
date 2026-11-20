# Alamir Tech — System Architecture & Implementation

## 1. Overview
The **Alamir Tech** website is built as an enterprise-grade web application using the modern **Next.js 16 App Router**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 2. Project Directory Structure
```
alamir-tech/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Tailwind CSS v4 @theme tokens & brand variables
│   ├── layout.tsx           # Root metadata, SEO tags, responsive layout wrapper
│   └── page.tsx             # Main landing page assembling all components
├── components/
│   ├── About.tsx            # Company story, values, and engineering scale
│   ├── Button.tsx           # Reusable brand button matching Button.png
│   ├── CaseStudies.tsx      # Real-world client outcomes & architecture metrics
│   ├── ContactSection.tsx   # Interactive consultation form & global office info
│   ├── Footer.tsx           # Dark navy footer with white logo & navigation
│   ├── Hero.tsx             # Impactful hero with brand slogan & live tech card
│   ├── icons.tsx            # Dependency-free, optimized SVG icons library
│   ├── Navbar.tsx           # Sticky navigation with dynamic logo switching
│   ├── Services.tsx         # 6 Core enterprise engineering services with tabs
│   ├── Solutions.tsx        # Tailored industry vertical blueprints
│   ├── TechStack.tsx        # Modern tech radar grid (Frontend, Cloud, AI, Data)
│   ├── Testimonials.tsx     # Executive client endorsements
│   └── WhyUs.tsx            # Value propositions and zero-trust engineering
├── docs/
│   ├── ARCHITECTURE.md      # This architectural specification
│   └── BRAND_GUIDELINES.md  # Brand design system & color tokens
└── public/
    └── images/
        ├── ALAMIR TECH LOGO 3.png      # Original brand logo asset
        ├── Brand Guidelines.png        # Original brand guide reference
        ├── Button.png                  # Original button specification
        ├── logo-color-trimmed.png      # Cropped color logo for light backgrounds
        └── logo-white-trimmed.png      # Cropped white logo for dark navy backgrounds
```

---

## 3. Key Design & Implementation Decisions

### 3.1 Tailwind CSS v4 Theme Integration
The brand tokens are declared natively inside `app/globals.css` using the `@theme` directive:
```css
@theme {
  --color-brand-navy: #091361;
  --color-brand-blue: #091FA8;
  --color-brand-cyan: #0599D6;
  --color-brand-pink: #E60085;
  --color-brand-pink-hover: #c90074;
  --color-brand-purple: #730D85;
  --color-brand-dark: #0E1733;
  --color-brand-muted: #5C6985;
  --color-brand-light: #F5F7FC;
  --color-brand-border: #E0E5EF;
  --color-brand-white: #FFFFFF;
}
```

### 3.2 Dynamic Header Logo Switching
The `Navbar` component automatically tracks scroll position (`isScrolled`):
- **Hero view (unscrolled)**: Displays the **white logo** (`logo-white-trimmed.png`) over the transparent Deep Navy hero.
- **Scrolled view**: Switches smoothly to a solid white backdrop with blur (`backdrop-blur-md`) and displays the **color logo** (`logo-color-trimmed.png`).

### 3.3 Zero External Icon Dependency
All icons are encapsulated in `components/icons.tsx` as lightweight, pixel-perfect SVGs. This eliminates external npm icon packages, prevents version conflicts with React 19, and guarantees 0ms icon load time.

---

## 4. Build & Development Commands
- **Development Server**: `npm run dev` (starts on `http://localhost:3000`)
- **Production Build**: `npm run build` (compiles TypeScript and generates static output)
- **Production Server**: `npm run start`

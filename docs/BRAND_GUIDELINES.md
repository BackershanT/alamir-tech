# Alamir Tech — Brand Guidelines & Design System

## 1. Brand Identity
- **Company Name**: Alamir Tech
- **Official Slogan**: *"Technology that moves business forward"*
- **Industry & Positioning**: Enterprise Software Engineering, Cloud Architecture, AI & Cognitive Automation, Cybersecurity, and Digital Transformation.

---

## 2. Brand Color Palette
The color palette is derived directly from the official **Brand Guidelines** design specifications:

| Color Name | Hex Code | Tailwind Token | Role & Usage |
| :--- | :--- | :--- | :--- |
| **Deep Navy** | `#091361` | `--color-brand-navy` | Main backgrounds, hero section, footer, and high-impact headings |
| **Royal Blue** | `#091FA8` | `--color-brand-blue` | Primary brand elements, gradient accents, active state indicators |
| **Cyan** | `#0599D6` | `--color-brand-cyan` | Highlights, badges, system telemetry metrics, tech accents |
| **Pink** | `#E60085` | `--color-brand-pink` | Call-to-Action buttons ("Let's Talk"), high-priority interactive targets |
| **Pink Hover** | `#C90074` | `--color-brand-pink-hover`| Hover state for primary buttons |
| **Purple** | `#730D85` | `--color-brand-purple` | Secondary accents, gradient transitions between blue and pink |
| **Dark Text** | `#0E1733` | `--color-brand-dark` | Primary readable body text on light backgrounds |
| **Muted Text** | `#5C6985` | `--color-brand-muted` | Secondary descriptions, subheaders, and helper labels |
| **Light Background** | `#F5F7FC` | `--color-brand-light` | Alternate section background, cards, and input fields |
| **Border** | `#E0E5EF` | `--color-brand-border` | Subtle card borders, dividers, and secondary button outlines |
| **White** | `#FFFFFF` | `--color-brand-white` | Card surfaces, high-contrast text on navy backgrounds |

---

## 3. Typography
- **Headings (H1, H2, H3)**: Bold to Extrabold sans-serif. In light backgrounds, headings use **Deep Navy (`#091361`)**. In dark sections, headings use crisp **White (`#FFFFFF`)** with gradient highlights in **Cyan (`#0599D6`)** and **Pink (`#E60085`)**.
- **Body Text**: Dark Text (`#0E1733`) for high readability and accessibility contrast (WCAG AAA compliant).
- **Secondary / Subtitles**: Muted Text (`#5C6985`) for soft contrast.
- **Font Stack**: Modern system sans-serif font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`).

---

## 4. Logo Assets System
The logo exists in two high-resolution optimized variants located in `public/images/`:
1. **Color Logo (`/images/logo-color-trimmed.png`)**:
   - Used on light backgrounds (`#FFFFFF`, `#F5F7FC`).
   - Features the vibrant gradient "ALAMIR" letterforms paired with "T E C H" in Deep Navy.
2. **White Logo (`/images/logo-white-trimmed.png`)**:
   - Used on dark backgrounds (`#091361` Deep Navy hero, dark headers, and footer).
   - High-contrast white rendering for crisp visibility.

Original uncropped source file is preserved at `public/images/ALAMIR TECH LOGO 3.png`.

---

## 5. Button Specifications (`Button.png`)
The primary CTA button follows the exact visual specifications from `Button.png`:
- **Background**: `#E60085` (Brand Pink)
- **Shape**: Rounded pill (`rounded-full`)
- **Text**: White bold text (`font-semibold` / `font-bold`), label: **"Let's Talk"**
- **Iconography**: Left and right directional arrows (`← Let's Talk →`) with dynamic hover translations
- **Hover / Active**: Darkens to `#C90074` with a subtle glowing drop shadow (`shadow-brand-pink/25`) and responsive micro-scaling (`active:scale-[0.98]`).
- **Secondary Variant**: `#FFFFFF` background with `#E0E5EF` border and `#091361` Deep Navy text.

# Solar Depot — Official Website Implementation

A complete, high-fidelity implementation of the Solar Depot website matching the reference project specifications. Built with **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Router DOM**.

---

## 🌟 Pages & Architecture

All pages from the reference design are fully implemented with their complete layouts, authentic technical data, and interactive behaviors:

1. **Home (`/`)**:
   - Cinematic dark hero with ambient grid, floating particle orbs, and quick action buttons.
   - Company introduction editorial section with stats and clean-energy highlights.
   - Core solutions showcase cards with responsive layout.
   - Featured products lineup.
   - "Why Choose Solar Depot" dark feature matrix.
   - Featured case studies and field projects.
   - High-contrast electric blue CTA section.
2. **About Us (`/about`)**:
   - Hero header with ambient glows.
   - Mission and Vision interactive cards.
   - Technological expertise dark section.
   - Four core values: Engineering Excellence, Reliability First, Sustainable Impact, Customer Partnership.
   - Research & Development philosophy.
3. **Products (`/products`)**:
   - Filterable product catalogue with sticky category toolbar.
   - Live search by product name, model, category, or description.
   - Sorting options (Featured, Name A–Z, Category).
   - Category filtering across all 7 inverter and equipment categories.
4. **Product Details (`/products/:slug`)**:
   - Dynamic product routes with breadcrumb navigation.
   - High-resolution interactive image gallery with thumbnail switcher.
   - Key highlights badges and comprehensive technical specification groups (Electrical, Mechanical, Protection, Environmental).
   - Related products carousel.
5. **Solutions (`/solutions`)**:
   - Alternating light, dark, and ice-blue editorial framework sections.
   - Storage Power Plants, PV Grid-Tie, Microinverters, Residential Systems, and Commercial Systems.
   - Direct link anchors via `?focus=` parameter from navbar dropdowns.
6. **Projects (`/projects`)**:
   - Case studies gallery with sector filters (All, Residential, Commercial, Utility, Hybrid).
   - Real installation metadata: location, installation year, equipment deployed, and yield.
7. **Project Details (`/projects/:slug`)**:
   - Dedicated route with project hero, technical overview, site specifications, and related case studies.
8. **Contact (`/contact`)**:
   - Direct contact cards (New York address, phone numbers, mobile hotline, email).
   - Interactive contact form with client-side validation for required fields, email format, and message length.
   - Realistic loading state and success feedback.
9. **Not Found (`*`)**:
   - 404 page with return home and catalogue navigation.

---

## 🛠️ Components & Structure

```
src/
├── components/
│   ├── BackToTop.tsx          # Floating smooth back-to-top button
│   ├── ContactForm.tsx        # Client-side validated contact form with status feedback
│   ├── CTASection.tsx         # Electric blue gradient CTA block
│   ├── Footer.tsx             # Deep midnight footer with verified company data
│   ├── Hero.tsx               # Cinematic hero section with animated floating badges
│   ├── Logo.tsx               # Official brand logo with SVG icon
│   ├── Navbar.tsx             # Floating / sticky navbar with dropdowns & mobile drawer
│   ├── ProductCard.tsx        # Product card with model pill, highlights & link
│   ├── ProjectCard.tsx        # Case study card with location & year badges
│   ├── Reveal.tsx             # Framer Motion scroll entrance animations
│   ├── ScrollToTop.tsx        # Automatic scroll restoration on route changes
│   ├── SectionHeading.tsx     # Typography hierarchy with eyebrow badge & decorative vectors
│   └── SolutionCard.tsx       # Solutions showcase card with benefits list
├── data/
│   ├── company.ts             # Company history, New York address, phone lines, stats
│   ├── images.ts              # Curated image repository
│   ├── products.ts            # Complete product catalogue with detailed spec groups
│   ├── projects.ts            # Case studies data
│   └── solutions.ts           # Solution definitions with benefits and hardware mapping
├── pages/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── ProductDetails.tsx
│   ├── Products.tsx
│   ├── ProjectDetails.tsx
│   ├── Projects.tsx
│   └── Solutions.tsx
├── App.tsx                    # Client-side routing with title manager
├── index.css                  # Tailwind styles, glassmorphism utilities & fonts
├── main.tsx                   # React root mount
└── vite-env.d.ts              # Vite environment declarations
```

---

## 🚀 Running the Project

### Start Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### Type Check
```bash
npm run typecheck
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

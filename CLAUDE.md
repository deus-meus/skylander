# CV. Skylander — AI Development Guide

## Project Context
`skylander` is the modernized web platform for **CV. Skylander** (`skylander.co.id`), a civil construction and building renovation contractor operating in Makassar, Jayapura (Papua), and Tana Toraja since 2011.

Always review `PRD.md` before implementing major sections or features.

---

## Technical Stack & Tooling
- **Runtime & Package Manager**: Bun (`bun`)
- **Framework**: Astro (SSG, Zero-JS by default for maximum Core Web Vitals & SEO)
- **Interactive Islands**: Svelte 5 Runes (`$state`, `$derived`, `$props`) via `@astrojs/svelte`
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS via `@astrojs/tailwind`
- **Icons**: `lucide-svelte`
- **Linter & Formatter**: Biome (`bun biome check .`)
- **SEO & Sitemap**: `@astrojs/sitemap`

---

## Development & Validation Commands
```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Run Astro & Svelte type checks
bun astro check

# Run Biome linter & formatter
bun biome check .

# Build production static bundle
bun run build
```

---

## Design System & UI Standards
1. **Aesthetic Direction**: Modern Architectural & Industrial Precision. Avoid generic WordPress templates, cluttered layouts, and excessive animations.
2. **Color Palette**:
   - **Dark Surface**: `#0B1120` (Deep Slate) and `#1E293B` (Elevated Card Slate)
   - **Light Surface**: `#F8FAFC` (Architectural Off-White)
   - **Primary Accent**: `#F59E0B` / `#FFB923` (Safety Amber Gold) for primary CTAs, badges, and key highlights
   - **Secondary Accent**: `#3B82F6` (Blueprint Blue) for structural metrics, maps, and verified badges
3. **Interactive Standards**:
   - **Zero Dead Links**: Every button and link must navigate to a valid section, open a detail modal, or trigger a pre-formatted WhatsApp/Maps action.
   - **Mobile-First Responsiveness**: Ensure clean layout wrapping, zero horizontal overflow, and touch-friendly tap targets across mobile and desktop screens.
   - **Image Fallbacks**: Every `<img>` tag must include an `onerror` fallback handler to prevent broken image icons.

---

## Architecture & Engineering Principles
1. **SEO-First Hybrid Model**:
   - Zero-JS baseline for static marketing content (Homepage, About, FAQ, Contact).
   - Dedicated static pages for each service (`/service/[slug]`) to preserve legacy WordPress Google indexing.
   - JSON-LD `GeneralContractor` structured data covering Makassar HQ, Jayapura, and Tana Toraja branches.
2. **Islands Architecture**:
   - Limit client JavaScript hydration to interactive Svelte 5 islands (`BeforeAfterSlider`, `BranchTabs`, `LegalityModal`) using `client:visible` or `client:idle`.
3. **Data-Driven Content**: Store company profile data (7 core services, 3 office locations, legality documents, testimonials, FAQ) in strongly-typed TypeScript modules (`src/data/`).
4. **Verification First**: Always run `bun astro check` and `bun run build` and verify zero errors/warnings before marking any task complete.

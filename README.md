# CV. Skylander — Corporate Construction & Engineering Web Platform

Modernized static web platform for **CV. Skylander** (`skylander.co.id`), a civil construction, building renovation, and architectural contractor operating in **Makassar (HQ)**, **Jayapura (Papua)**, and **Tana Toraja** since 2011.

Built with an **SEO-first, Zero-JS baseline architecture** using **Astro 5 (SSG)**, **Tailwind CSS**, and **TypeScript** under the **Tectonic Atelier** design system.

---

## Key Features

- **Tectonic Atelier Design System**: Warm stone surfaces (`#FAFAF9`), monolithic dark accents (`#0C0A09` / `#1C1917`), refined safety amber (`#C58B1B`), and structured architectural typography (*Plus Jakarta Sans*, *Inter*, and *JetBrains Mono*).
- **Instant Bilingual Engine (`ID` ⇄ `EN`)**: Built-in client-side translation engine (`src/data/i18n.ts`) that translates all 13 pages between Indonesian and English with zero page reloads and persistent `localStorage` state.
- **Technical & Local SEO Ready**:
  - Dynamic `GeneralContractor`, `OfferCatalog`, `Service`, `FAQPage`, and `BreadcrumbList` JSON-LD structured data.
  - Dynamic `robots.txt` (`src/pages/robots.txt.ts`) and automated XML sitemap generation (`@astrojs/sitemap`).
  - Domain-agnostic URL resolution via `PUBLIC_SITE_URL` / `Astro.site`.
- **Full-HD Visual Assets**: High-resolution WebP photography and 12 official corporate legality documents (`NIB`, `SBU LPJK`, `Kemenkumham`, `SITU`, `BPJS Ketenagakerjaan`, `GAPENSI`).
- **Hardened Static Security**: Sanitized JSON-LD serialization against script-tag breakout, safe storage wrappers, and production HTTP security headers (`public/_headers`).

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime & Package Manager** | [Bun](https://bun.sh/) |
| **Framework** | [Astro 5](https://astro.build/) (Static Site Generation) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) |
| **Language** | TypeScript (Strict Mode) |
| **Linter & Formatter** | [Biome](https://biomejs.dev/) |
| **SEO & Sitemap** | `@astrojs/sitemap` |

---

## Project Structure

```text
skylander/
├── public/
│   ├── _headers                 # Production HTTP security headers
│   ├── favicon.ico              # Multi-size official icon
│   ├── favicon.png              # 512x512 HD official icon
│   └── images/
│       ├── legality/            # 12 high-resolution legality & SBU certificates
│       ├── original/            # Official brand logos & partner assets
│       └── stitch/              # Full-HD architectural & engineering photography
├── src/
│   ├── components/
│   │   ├── Navbar.astro         # Adaptive transparent/glass header + ID/EN toggle
│   │   └── Footer.astro         # Corporate footer & consultation CTA
│   ├── data/
│   │   ├── branches.ts          # Makassar HQ, Jayapura & Toraja office data
│   │   ├── company.ts           # Core company profile & WhatsApp URL builder
│   │   ├── faq.ts               # Verbatim FAQ items
│   │   ├── i18n.ts              # Complete ID <-> EN translation dictionary
│   │   ├── legality.ts          # 12 corporate legality documents metadata
│   │   └── services.ts          # 7 core construction & renovation services
│   ├── layouts/
│   │   └── BaseLayout.astro     # Global SEO head, OpenGraph & JSON-LD injector
│   └── pages/
│       ├── index.astro          # Homepage
│       ├── about-us.astro       # Company profile, vision, mission & quality pillars
│       ├── legalitas-perusahaan.astro # Dual-mode legality gallery (10 standard / 12 full)
│       ├── faq.astro            # Interactive native FAQ accordion & support card
│       ├── blog.astro           # Technical publications with live search & topic filter
│       ├── contact.astro        # Direct contact strip & 3 regional office cards
│       ├── robots.txt.ts        # Dynamic robots.txt generator
│       └── service/
│           └── [slug].astro     # 7 static service detail pages
├── astro.config.mjs
├── biome.json
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

---

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) v1.1+ installed on your machine.

### Installation & Local Development

```bash
# Install dependencies
bun install

# Start local development server at http://localhost:4321
bun run dev
```

### Type Checking, Linting & Production Build

```bash
# Run Astro & TypeScript diagnostics
bun astro check

# Run Biome linter & formatter check
bun biome check .

# Build static production bundle into ./dist
bun run build

# Preview production build locally
bun run preview
```

---

## Environment & Domain Configuration

By default, canonical URLs, OpenGraph images, `robots.txt`, and `sitemap-index.xml` resolve to `https://skylander.co.id`.

If deploying to a different domain, set the `PUBLIC_SITE_URL` environment variable in your `.env` or hosting provider:

```bash
PUBLIC_SITE_URL=https://your-new-domain.com
```

---

## Docker & CI/CD Deployment

This repository includes a multi-stage `Dockerfile.web` (powered by `oven/bun:1-alpine`), `docker-compose.yml` (with Watchtower auto-updates), and a GitHub Actions workflow (`.github/workflows/docker.yml`) that automatically builds and publishes `ghcr.io/deus-meus/skylander-web:latest` on every push to `main`.

### Production Deployment (GHCR + Watchtower)
```bash
cp .env.example .env
docker compose up -d
```

---

## License

Copyright © CV. Skylander Indonesia. All rights reserved.

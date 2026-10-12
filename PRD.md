# Product Requirements Document (PRD) — CV. Skylander Modern Web

## 📌 Product Overview
**CV. Skylander** (est. 2011) is a professional civil construction and building renovation contractor operating across Eastern Indonesia (Makassar, Jayapura/Papua, and Tana Toraja). 

This project is a total modern overhaul of `skylander.co.id`, replacing the bloated, legacy WordPress + Elementor setup with a lightning-fast, high-converting, and SEO-optimized architectural web application.

---

## 🎯 Primary Goals & Value Proposition
1. **Flawless Performance & SEO Dominance**: Achieve 100/100 Google Lighthouse scores, sub-second loads (< 0.5s), Zero-JS static HTML baseline for crawlers, and dominant search rankings for contractor keywords across Makassar, Jayapura, and Tana Toraja.
2. **Preserve & Grow Legacy Search Rankings**: Retain existing indexed URLs (`/service/[slug]`, `/legalitas-perusahaan`, `/about-us`, `/faq`, `/contact`) to prevent 404 organic traffic drop from Google.
3. **High-Converting Lead Generation**: Streamline prospective client journeys toward instant WhatsApp consultations and project estimation requests.
4. **Interactive Trust Artifacts**: High-fidelity interactive Svelte 5 islands (Before/After comparison slider, verified 12-page legality document modal, interactive multi-branch map selector).

---

## 🏢 Company Profile & Verified Service Scope (Source: skylander.co.id)

### Core Business Pillars
- **Established**: 2011 (15+ Years Industry Experience)
- **Verified Metrics**: 15+ Tahun Pengalaman, 368+ Proyek Diselesaikan, 96% Kepuasan Klien.
- **Operating Hours**: Senin – Sabtu: 07.00 – 16.00 WITA/WIT (Minggu: Libur).
- **Contact Channels**:
  - Telepon / WhatsApp: `+6282342270000` (`082342270000`)
  - Email: `skylanderpapua@gmail.com`
- **Office Locations**:
  1. **Makassar HQ**: Jl. Goa Ria, Sudiang, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan 90552
  2. **Jayapura Branch**: Jl. Alternatif, Kota Jayapura, Papua
  3. **Tana Toraja Branch**: Kec. Makale, Kabupaten Tana Toraja, Sulawesi Selatan 91817

### 7 Core Services & Preserved URL Slugs
1. **Konstruksi Bangunan Hunian** (`/service/konstruksi-bangunan-hunian`)
2. **Konstruksi Gedung Perkantoran** (`/service/konstruksi-gedung-perkantoran`)
3. **Konstruksi Bangunan Sipil** (`/service/konstruksi-bangunan-sipil`)
4. **Konstruksi Prasarana Sumber Daya Air** (`/service/konstruksi-prasarana-sumber-daya-air`)
5. **Jasa Renovasi Bangunan** (`/service/jasa-renovasi`)
6. **Pekerjaan Landscape & Taman** (`/service/jasa-lanskap`)
7. **Jasa Desain Arsitektur** (`/service/jasa-desain-arsitektur`)

---

## 🚀 Site Architecture & Route Map (SEO-First Hybrid Model)

### 1. Homepage (`/`) — Conversion & Authority Hub
- **Hero Section**: Architectural headline, credentials badges (Est. 2011), CTAs WhatsApp & Layanan.
- **Metrics Counter**: 15+ Tahun, 368+ Proyek, 96% Kepuasan.
- **6-Card Service Grid**: Direct links to dedicated service pages & modal triggers.
- **Interactive Before & After Slider**: Svelte 5 Island (`client:visible`) demonstrating building transformations.
- **Verified Legality Showcase**: 12 document pages preview & modal viewer (`client:idle`).
- **Interactive 3-Branch Office Tabs**: Svelte 5 Island (`client:visible`) with direct Google Maps & WhatsApp triggers.
- **Social Proof & FAQ**: Testimonials (Leonardo, Daniel, Franz), partner logos, and FAQ accordion.
- **Sticky / Floating CTA**: WhatsApp consultation hook for immediate mobile conversions.

### 2. Dedicated SEO Landing Pages (`/service/[slug]`)
- Preserves existing Google index from old WordPress site.
- Specific schema markup (`Service` + `GeneralContractor`), technical scope, FAQ per service, and customized WhatsApp consultation payloads.

### 3. Trust & Informational Pages
- `/legalitas-perusahaan`: Full 12-page legality & compliance document gallery.
- `/about-us`: Company history, vision, mission, and operational standards.
- `/faq`: Comprehensive question-and-answer repository.
- `/contact`: Interactive branch details, location coordinates, and consultation forms.

### 4. Technical SEO Artifacts
- `/sitemap.xml`: Auto-generated XML sitemap via `@astrojs/sitemap`.
- `/robots.txt`: Optimized indexing directives for Googlebot.
- **JSON-LD Structured Data**: `GeneralContractor` with multi-location `department` branches.

---

## 🎨 Visual Identity & Design System
- **Design Metaphor**: Modern Architectural & Industrial Precision
- **Primary Background**: Deep Industrial Slate (`#0B1120`) & Clean Architectural Off-White (`#F8FAFC`)
- **Brand Accent 1**: Safety Amber Gold (`#F59E0B` / `#FFB923`)
- **Brand Accent 2**: Blueprint Steel Blue (`#3B82F6`)
- **Typography**: Space Grotesk (Headings) / Inter (Body text)

---

## 🛠️ Technology Stack
- **Framework**: Astro (Zero-JS baseline for maximum SEO & Core Web Vitals)
- **Interactive Islands**: Svelte 5 (Runes: `$state`, `$derived`, `$props`) via `@astrojs/svelte`
- **Styling**: Tailwind CSS via `@astrojs/tailwind`
- **Language**: TypeScript (Strict Mode)
- **Icons**: `lucide-svelte`
- **Package Manager & Runtime**: Bun (`bun`)
- **Linter & Formatter**: Biome (`bun biome check .`)
- **Deployment**: Static Bundle (`dist/`) deployable to Caddy, Nginx, or Cloudflare Pages

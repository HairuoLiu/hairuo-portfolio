# Photography Portfolio — Requirements Document

## 1. Product Overview

A personal photography portfolio website showcasing work organized by camera. Features a 3D interactive homepage with camera models and photo galleries with filtering.

**Target URL**: https://hairuoliu.github.io/hairuo-portfolio/
**Tech Stack**: Vite + React + TypeScript + Three.js + Tailwind CSS

---

## 2. Functional Requirements

### FR-1: 3D Homepage — Camera Shelf Display

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-1.1 | Page loads and renders a 3D scene with visible camera models | P0 | ❌ BROKEN |
| FR-1.2 | 11 cameras are displayed on a 3-tier wooden shelf | P0 | ❌ BROKEN |
| FR-1.3 | Each camera shows a recognizable SVG icon with brand-accurate features | P0 | ❌ BROKEN |
| FR-1.4 | Camera icons are visually consistent in angle and style | P1 | ❌ UNVERIFIED |
| FR-1.5 | Hover effect: camera card scales up + brand color glow + info text appears | P1 | ❌ UNVERIFIED |
| FR-1.6 | Click on camera navigates to camera detail/gallery page | P1 | ❌ UNVERIFIED |
| FR-1.7 | GSAP entrance animation: cameras fly in from sides | P2 | ❌ UNVERIFIED |
| FR-1.8 | Subtle idle floating animation after entrance | P2 | ❌ UNVERIFIED |
| FR-1.9 | Dust particles float in the scene | P2 | ❌ UNVERIFIED |

### FR-2: Camera Detail & Photo Gallery

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-2.1 | Camera detail page shows camera info (name, type, sensor, year) | P0 | ❌ UNVERIFIED |
| FR-2.2 | Photo gallery with masonry layout | P1 | ❌ UNVERIFIED |
| FR-2.3 | Filter by lens, style, color | P2 | ❌ UNVERIFIED |
| FR-2.4 | Photo lightbox on click | P1 | ❌ UNVERIFIED |

### FR-3: Deployment & Compatibility

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-3.1 | Site builds without errors via `npm run build` | P0 | ✅ PASS |
| FR-3.2 | Site deploys to GitHub Pages via Actions | P0 | ✅ PASS |
| FR-3.3 | Site renders correctly on deployed URL (no CSP/JS errors) | P0 | ❌ BROKEN |
| FR-3.4 | 3D scene works in Chrome, Firefox, Safari | P0 | ❌ UNVERIFIED |
| FR-3.5 | Responsive layout for desktop and tablet | P1 | ❌ UNVERIFIED |

### FR-4: Anti-Download Protection

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-4.1 | Right-click disabled on photos | P1 | ❌ UNVERIFIED |
| FR-4.2 | Photos rendered as background-image (not `<img>`) | P1 | ❌ UNVERIFIED |
| FR-4.3 | Transparent overlay on photos | P2 | ❌ UNVERIFIED |

---

## 3. Non-Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-1 | First Contentful Paint < 3s on broadband | P1 |
| NFR-2 | No JavaScript errors in console on production | P0 |
| NFR-3 | No CSP violations blocking core functionality | P0 |
| NFR-4 | Bundle size < 2MB (gzipped) | P2 |

---

## 4. Camera Inventory (11 cameras)

| ID | Name | Brand | Type | Key Visual Feature |
|----|------|-------|------|--------------------|
| leica-m9 | Leica M9 | Leica | Rangefinder | Silver body, red dot, dual windows |
| leica-m8 | Leica M8 | Leica | Rangefinder | Black body, smaller than M9 |
| leica-m240 | Leica M Typ 240 | Leica | Rangefinder | Thicker body, LV button |
| leica-m262 | Leica M-D Typ 262 | Leica | Rangefinder | No LV, thinner top plate |
| leica-q2 | Leica Q2 | Leica | Compact | Large lens circle, grip bump |
| leica-cl | Leica CL | Leica | Mirrorless | Dual dials, TL mount |
| leica-sl | Leica SL | Leica | Mirrorless | Thick body, large L-mount, big grip |
| leica-digilux3 | Leica Digilux 3 | Leica | DSLR | Pentaprism hump, silver+black |
| sony-a7m3 | Sony α7 III | Sony | Mirrorless | Grip, mode dial, orange SONY |
| sony-a7m4 | Sony α7 IV | Sony | Mirrorless | Thicker, extra dial, gold SONY |
| fujifilm-x100vi | Fujifilm X100VI | Fuji | Compact | Triple dials, silver+black, green FUJIFILM |

---

## 5. Known Issues

| Issue | Impact | Root Cause | Fix Status |
|-------|--------|------------|------------|
| CSP blocks `new Function()` in Three.js shader compilation | Entire 3D scene fails to render on GitHub Pages | GitHub Pages CSP doesn't allow `unsafe-eval`; Three.js uses `new Function()` for node material system | ❌ NOT FIXED |
| Camera SVG icons not visible | No cameras shown on homepage | CSP error prevents 3D scene init; Html+drei relies on working 3D context | ❌ NOT FIXED |

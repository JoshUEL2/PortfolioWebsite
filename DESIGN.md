---
name: Joshua Johnson Portfolio Design System
version: "2.3.0"
direction: "Panoramic Studio Command Center: High-Contrast Game Controls & Non-Overlapping Atmospheric Shaders"
taste_skill_dials:
  mode: "Experience / Persuade"
  site_kind: "gaming / software"
  page_type: "portfolio"
  visual_world: "Cosmic Midnight (#070814), Deep Indigo (#0C0A22), 100% Solid Opaque Saturated Game Controls, Non-Overlapping SVG Particle Shaders"
  layout_discipline: "Panoramic 1720px desktop command deck, zero horizontal overflow across 375px-1920px, modular work bubbles"
colors:
  canvas: "#070814"
  surface: "#0C0A22"
  surface-elevated: "#151236"
  surface-hover: "#1D1948"
  border-subtle: "rgba(99, 102, 241, 0.25)"
  border-muted: "rgba(139, 92, 246, 0.3)"
  border-active: "#8B5CF6"
  button-itch: "#E11D48"
  button-gdd: "#78350F"
  button-marketing: "#065F46"
  button-source: "#1E293B"
  button-linkedin: "#0077B5"
  button-breakdown: "#4338CA"
  navbar-shell: "rgba(9, 11, 22, 0.90)"
  navbar-border: "rgba(255, 255, 255, 0.15)"
  text-primary: "#F8FAFC"
  text-secondary: "#94A3B8"
  text-tertiary: "#64748B"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.03em"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontWeight: 500
    letterSpacing: "0.05em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "20px"
  squircle-navbar: "1.25rem (rounded-2xl)"
  squircle-chip: "0.5rem (rounded-lg)"
spacing:
  gutter: "clamp(16px, 4vw, 64px)"
  container_max: "1720px"
  section_y: "clamp(64px, 8vh, 104px)"
---

# Design Authority & Visual Standards (v2.3.0 Panoramic & Solid Control Edition)

## 1. Architectural Concept
A seamless synthesis of the developer's original atmospheric identity—deep cosmic violet/indigo canvases, bespoke game atmospheres, tactile multi-colored action controls—with the mathematical rigor of the Phase 5 engineering refactor (colossal Space Grotesk typography, zero horizontal leaks across any viewport, modular work bubbles, panoramic 1720px grid alignment, and procedural Web Audio feedback).

## 2. Panoramic Desktop Layout (`max-w-[1720px]`)
- **Desktop Ultrawide**: Expanded standard container boundaries from `1152px` (`max-w-6xl`) to `max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16`. On 1080p (1920px) and 1440p displays, the site acts as an expansive game engine workstation (Unreal Editor / DaVinci Resolve layout) rather than a cramped narrow column.
- **Cartridge Quick Shelf**: Expands to an 8-column panoramic rack on desktop screens (`md:grid-cols-4 xl:grid-cols-8`).
- **Responsive Guarantee**: Zero horizontal overflow across mobile (375px), tablet (768px), laptop (1280px), and ultrawide (1920px) verified headlessly via Playwright (`hasOverflow: false`).

## 3. High-Contrast Solid Action Controls
- **100% Solid Opaque Backings**: Translucent 20% opacity washes have been replaced with 100% solid, saturated base colors to prevent background shaders, particles, and glows from bleeding through or diminishing text contrast:
  - `PLAY ON ITCH.IO`: Solid vibrant rose/crimson gradient (`from-rose-600 to-rose-700`) with white text and Gamepad2 icon.
  - `DOWNLOAD GDD`: Solid warm dark amber/brown (`#78350F`) with gold-white text and BookOpen icon.
  - `COMPANION SITE`: Solid forest emerald (`#065F46`) with bright emerald-white text and Globe icon.
  - `SOURCE CODE`: Solid gunmetal slate (`#1E293B`) with white text and Github icon.
  - `VIEW ON LINKEDIN`: Solid LinkedIn sky blue (`#0077B5`) with white text and Linkedin icon.
  - `FULL BREAKDOWN & GALLERY`: Solid deep indigo/violet (`#4338CA`) with lavender-white text and BookOpen icon.
- **Tactile Game-Feel Feedback**: Mechanical click audio triggers on every action button press via `audioEngine.playPop()`, accompanied by `whileTap={{ scale: 0.94 }}` micro-recoil.

## 4. Zero-Overlap Atmospheric Shaders
- **Perimeter Pinning**: Top atmospheric trims (`FreezeAtmosphere` icicles, `InkyMyndwellAtmosphere` drip shelves) are pinned strictly to the outer perimeter (`z-0 pointer-events-none`) with reduced height profiles (`h-4 sm:h-6`), eliminating badge and metadata overlap completely.
- **Overview Holder Clearance**: Top icicle/drip shelf SVGs inside the "What I Built" holder have been reduced to 2.5px rim accents, ensuring the first line of overview paragraphs has ample vertical breathing space.
- **Particle Confinement**: Drifting leaves (`LeavesAtmosphere`) and floating simulation elements (`PyballAtmosphere`) are confined to the upper 70% background container so they never drift across action button text or description copy.

## 5. Copy Authenticity & Anti-Cliché Rules
- Purged all generic corporate/AI phrasing ("seamlessly", "leverage", "robust") in favor of active first-person game engineering verbs (e.g. "maintain wheel traction at 90° wall angles", "keep the bobsled pinned to the cylindrical hull without physics clipping", "low-latency pointer-down callbacks").

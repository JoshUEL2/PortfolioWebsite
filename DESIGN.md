---
name: Joshua Johnson Portfolio Design System
version: "2.2.0"
direction: "Cosmic Indigo & Cyberpunk Metagame: Merged Architectural Telemetry"
taste_skill_dials:
  mode: "Experience / Persuade"
  site_kind: "gaming / software"
  page_type: "portfolio"
  visual_world: "Cosmic Midnight (#070814), Deep Indigo (#0C0A22), Vibrant Saturated Game Accents, Gunmetal/Ice Squircles"
  layout_discipline: "Equal 1360px gutters, modular work bubbles, zero horizontal overflow"
colors:
  canvas: "#070814"
  surface: "#0C0A22"
  surface-elevated: "#151236"
  surface-hover: "#1D1948"
  border-subtle: "rgba(99, 102, 241, 0.25)"
  border-muted: "rgba(139, 92, 246, 0.3)"
  border-active: "#8B5CF6"
  accent-rose: "#FF1E56"
  accent-amber: "#F59E0B"
  accent-emerald: "#10B981"
  accent-sky: "#0284C7"
  accent-purple: "#7C3AED"
  accent-cyan: "#00F2FE"
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
  gutter: "clamp(16px, 4vw, 48px)"
  container_max: "1360px"
  section_y: "clamp(64px, 8vh, 104px)"
---

# Design Authority & Visual Standards (v2.2.0 Squircle & Telemetry Edition)

## 1. Architectural Concept
A seamless synthesis of the developer's original atmospheric identity—deep cosmic violet/indigo canvases, bespoke game atmospheres, tactile multi-colored action controls—with the mathematical rigor of the Phase 5 engineering refactor (colossal Space Grotesk typography, zero horizontal leaks across any viewport, modular work bubbles, equal 1360px grid alignment, and procedural Web Audio feedback).

## 2. Top Navigation Bar (Squircle & Neutral Discipline)
- **Geometry**: Continuous squircle curvature (`rounded-2xl` outer container, `rounded-xl` / `rounded-lg` child elements).
- **Color Discipline**: Strict avoidance of purple in the navigation bar. Clean, high-contrast dark steel / titanium and neutral frosted glass:
  - Outer frame: `bg-[#090b16]/90 border border-white/15`
  - Brand avatar (JJ): Gunmetal gradient `from-slate-700 via-slate-800 to-slate-900 border border-white/20`
  - Active nav pill: `bg-white/[0.12] border border-white/20`
  - All Games Launcher: Dark graphite pill with amber sparkle `Sparkles text-amber-400`
  - Action Chips: Authentic brand colors (LinkedIn sky blue `#0284C7`, Itch rose `#FF1E56`, Audio emerald `#10B981`) without purple tints.

## 3. Hero Architectural Background Watermark
- **Styling**: Razor-sharp vector wireframe stroke (`-webkit-text-stroke: 1px rgba(255, 255, 255, 0.05)`) with top-to-bottom light falloff (`from-white/[0.09] via-white/[0.04] to-transparent`).
- **Edge Softening**: Radial gradient vignette mask (`radial-gradient(ellipse 80% 65% at 50% 45%, black 40%, transparent 90%)`) prevents harsh perimeter clipping.
- **Diegetic Metadata**: Framing coordinates in `JetBrains Mono` (`// ARCH // 51.5074° N, 0.1278° W`, `[STAGE: ROOT_PHYSICS]`, `[RENDER: LUMEN_VIRTUALIZED]`).
- **Breathing Motion**: Subtle 16-second vertical spatial drift (`y: [0, -8, 0]`, `scale: [1, 1.012, 1]`) honoring `prefers-reduced-motion`.

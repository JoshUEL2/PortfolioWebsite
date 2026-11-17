---
name: Joshua Johnson Portfolio Design System
version: "3.0.0"
direction: "Unified Studio Viewport: Panoramic 7/5 Game Inspector Cards, Obsidian Graphite Chassis & Opaque Action Controls"
taste_skill_dials:
  mode: "Experience / Persuade"
  site_kind: "gaming / software"
  page_type: "portfolio"
  visual_world: "Obsidian Graphite (#07090F), Elevated Studio Slate (#0E131E), Steel-Cyan Telemetry (#38BDF8), Solid Opaque Game Controls, Zero AI Purple/Mesh Clichés"
  layout_discipline: "Panoramic 1720px desktop showcase, 7/5 split case-study inspector modal, flat typographic hierarchy (no box-inside-box clutter), zero overflow 375px-1920px"
colors:
  canvas: "#07090F"
  surface: "#0D111A"
  surface-elevated: "#131926"
  surface-hover: "#1A2233"
  border-subtle: "rgba(148, 163, 184, 0.16)"
  border-muted: "rgba(56, 189, 248, 0.25)"
  border-active: "#38BDF8"
  button-itch: "#E11D48"
  button-gdd: "#78350F"
  button-marketing: "#065F46"
  button-source: "#1E293B"
  button-linkedin: "#0077B5"
  button-breakdown: "#0369A1"
  navbar-shell: "rgba(9, 13, 22, 0.92)"
  navbar-border: "rgba(255, 255, 255, 0.14)"
  text-primary: "#F8FAFC"
  text-secondary: "#CBD5E1"
  text-tertiary: "#94A3B8"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.03em"
  editorial:
    fontFamily: "Newsreader, Georgia, serif"
    fontWeight: 600
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
  squircle-navbar: "1rem (rounded-2xl)"
  squircle-chip: "0.5rem (rounded-lg)"
spacing:
  gutter: "clamp(16px, 4vw, 64px)"
  container_max: "1720px"
  modal_max: "1360px"
  section_y: "clamp(64px, 8vh, 104px)"
---

# Design Authority & Visual Standards (v3.0 Studio Inspector Edition)

## 1. Architectural Concept
One unified Unreal Engine / technical studio chassis across every scroll section: Obsidian Graphite ground (`#07090F`) paired with subtle steel-cyan telemetry (`#38BDF8`), clean Newsreader editorial accents inside Research, and tactile obsidian-amber details inside the Hardware Lab. No generic cosmic-purple AI particle meshes or jarring four-wallpaper biome whiplash; bespoke game personalities live cleanly inside each project's outer rim highlight and saturated opaque controls.

## 2. De-Cluttered Cards & Panoramic Split Modals (`CaseStudyModal` + `ProjectCard`)
- **Title First, Metadata Once**: Project headings, discipline, engine, dates, and First-Class grades are shown in one unified top header—never duplicated across 3–4 stacked preambles (`3-Second Recruiter HUD`, duplicate Phase pills, or redundant Footer labels).
- **Compact Segmented Phase Switcher**: Multi-phase projects (*Rastacats*, *Daydream Believer*) switch via an inline header pill toggle instead of oversized duplicate cards.
- **Panoramic 7/5 Inspector (`CaseStudyModal`)**: Full-width 16:9 media stage (`w-full aspect-video`), gallery strip, and unified solid opaque action dock on the left (`lg:col-span-7`); flat tabbed breakdown (`Overview` | `Systems & Code` | `Companion & Repo`) on the right (`lg:col-span-5`) separated by crisp `1px` hairlines rather than nested boxes-inside-boxes.
- **Zero Rim Overlap**: Per-game accent rims glow strictly on outer borders with `pt-5`+ top clearance so decorative geometry never touches icons or text.

## 3. High-Contrast Solid Action Controls & Web Audio
- **Opaque Action Buttons**: `PLAY ON ITCH.IO` (`#E11D48`), `PLAY IN BROWSER` (`#0284C7`), `DOWNLOAD GDD` (`#78350F`), `COMPANION SITE` (`#065F46`), `YOUTUBE WALKTHROUGH` (`#B91C1C`), `SOURCE CODE` (`#1E293B`), and `FULL BREAKDOWN` (`#0369A1`).
- **Sound Engine**: `audioEngine.playPop()` (mechanical low-thump release trigger alongside `playTick`, `playSweep`, `playDismiss`) strictly obeys global mute state and single shared `AudioContext`.

## 4. Universal Reduced Motion & Accessibility
- All Framer Motion choreography respects `<MotionConfig reducedMotion="user">`.
- Infinite showcase marquees, pulsing indicators, and intro sequences pause/skip automatically under `prefers-reduced-motion: reduce`.
- Every modal enforces `role="dialog"`, `aria-modal="true"`, Escape dismissal, and focus scoping. Semantic `<button>` and `<a>` controls replace clickable `<div>`/`<h3>` handlers, with all interactive elements maintaining visible focus rings and compliant contrast (`>= 4.5:1`).

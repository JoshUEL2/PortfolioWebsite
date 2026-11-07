---
name: Joshua Johnson Portfolio Design System
version: "2.1.0"
direction: "Cosmic Indigo & Cyberpunk Metagame: Merged Architectural Telemetry"
taste_skill_dials:
  mode: "Experience / Persuade"
  site_kind: "gaming / software"
  page_type: "portfolio"
  visual_world: "Cosmic Midnight (#070814), Deep Indigo (#0C0A22), Vibrant Saturated Game Accents"
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
  xl: "24px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  container_max: "1360px"
  section_y: "clamp(64px, 8vh, 104px)"
---

# Design Authority & Visual Standards (v2.1.0 Merged Edition)

## 1. Architectural Concept
A seamless synthesis of the developer's original atmospheric identity—deep cosmic violet/indigo canvases, bespoke game atmospheres, tactile multi-colored action controls—with the mathematical rigor of the Phase 5 engineering refactor (colossal Space Grotesk typography, zero horizontal leaks across any viewport, modular work bubbles, equal 1360px grid alignment, and procedural Web Audio feedback).

## 2. Palette & Game Accent Roles
- **Canvas (`#070814`)**: Cosmic midnight with subtle radial indigo depth and 60fps ambient particle shader.
- **Card Surfaces (`#0C0A22` / `#090718`)**: Deep obsidian-indigo containers with delicate violet glowing borders (`border-indigo-500/35`).
- **Play Action (`#FF1E56` / Rose-Crimson)**: High-contrast punch for Itch.io playable builds.
- **Academic & GDD (`#F59E0B` / Phosphor Amber)**: Design bibles, dissertation monographs, and engineering honors.
- **Companion Portals (`#10B981` / Emerald)**: Web companion archives, live telemetry feeds, and system online states.
- **Source Code (`#161B2E` / Charcoal Slate)**: Clean developer repository and architecture access.
- **Industry & Network (`#0284C7` / LinkedIn Blue)**: Verified industry credentials and professional transmission.
- **Deep Dives & Iterations (`#7C3AED` / Royal Violet)**: Iteration switchers, math breakdowns, and full case study galleries.

## 3. The "Work Bubbles" Paradigm
- Modular rounded containers for all project telemetry, version switchers, and pipeline blocks.
- Clean typography hierarchy: Space Grotesk display headings, Plus Jakarta Sans body copy, and JetBrains Mono metadata.
- Zero truncation and zero off-center crowding.

## 4. Scaling & Multi-Viewport Discipline
- Strict 1360px max container with equal responsive padding (`px-4 sm:px-6 lg:px-12`).
- 0 horizontal overflows across 375px (mobile), 768px (tablet), 1280px (laptop), and 1920px (desktop).

## 5. Purposeful Motion & Animation Justification (Rule 4)
| Interaction | Transition / Curve | Timing | What it Communicates | What is Lost if Removed |
| :--- | :--- | :--- | :--- | :--- |
| **Project Card Hover** | `transform: translateY(-2px)`, border to `#00F2FE` | 150ms `ease-out` | Confirms focus lock and readiness to inspect stage | Cards feel inactive; difficult to navigate dense grid |
| **Button / Tab Press** | `transform: scale(0.97)` | 80ms `ease-out` | Physical switch resistance and instantaneous actuation | Interface feels unresponsive and laggy |
| **Dossier Modal Open** | `opacity: 0 -> 1`, `scale: 0.98 -> 1` | 200ms `cubic-bezier(0.16, 1, 0.3, 1)` | Spatial expansion from trigger into detailed inspector | Abrupt jump that breaks user mental model |
| **Telemetry HUD Ticks** | Monospaced numeric updates | 1000ms polling | Live system responsiveness | Telemetry reads like static fake copy |

*Accessibility*: When `@media (prefers-reduced-motion: reduce)` is active, all transforms and transitions collapse to instantaneous opacity states or static rendering.

## 6. Audio Engine Principles
- Zero uninvited noise: Muted by default or toggled with a prominent HUD control + `M` key.
- Procedural Web Audio API: 400Hz 35ms blip on card focus; 120Hz 60ms click on selection. Zero external MP3 downloads.

## 7. Absolute Boundaries
- Never mention poverty, financial hardship, or medical conditions in website copy or case studies.
- Focus strictly on technical problem-solving, architectural trade-offs, and game-feel craft.

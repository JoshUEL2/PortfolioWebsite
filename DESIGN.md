---
name: Joshua Johnson Portfolio Design System
version: "2.0.0"
direction: "The Diegetic Engine Profiler & Architectural Stage Archive"
taste_skill_dials:
  mode: "Experience / Persuade"
  site_kind: "gaming / software"
  page_type: "portfolio"
  visual_world: "Obsidian Slate & Telemetry Cyan/Amber"
  anti_slop: "Zero mesh gradients, zero glassmorphism, zero marquee tickers, equal gutters"
colors:
  canvas: "#06070D"
  surface: "#0D111A"
  surface-elevated: "#131926"
  surface-hover: "#172033"
  border-subtle: "#1A2234"
  border-muted: "#243048"
  border-active: "#00F2FE"
  border-amber: "#F59E0B"
  text-primary: "#F8FAFC"
  text-secondary: "#94A3B8"
  text-tertiary: "#64748B"
  accent-cyan: "#00F2FE"
  accent-amber: "#F59E0B"
  accent-emerald: "#10B981"
  accent-danger: "#EF4444"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.035em"
    scale:
      hero: "clamp(2.75rem, 6.5vw, 6.25rem)"
      section: "clamp(1.75rem, 3.5vw, 2.75rem)"
      subheading: "clamp(1.25rem, 2vw, 1.75rem)"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontWeight: 500
    letterSpacing: "0.05em"
    scale:
      sm: "0.75rem"
      base: "0.875rem"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontWeight: 400
    lineHeight: 1.65
    scale:
      sm: "0.875rem"
      base: "1rem"
      lg: "1.125rem"
rounded:
  none: "0px"
  sm: "3px"
  md: "6px"
  lg: "10px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  container_max: "1360px"
  section_y: "clamp(64px, 8vh, 104px)"
---

# Design Authority & Visual Standards

## 1. Architectural Concept
The portfolio embodies the authentic environment of an in-engine developer telemetry suite (Unreal Engine Profiler / `DrawDebugString` / `stat unit`) paired with the colossal typographic scale of high-caliber international portfolios (Seth Lukin, Reino Studio). The site is an interactive diegetic artifact that demonstrates systems engineering, tactile game feel, and spatial rigor before a single word is read.

## 2. Color System & Roles
- **Canvas (`#06070D`)**: Deep obsidian substrate representing an engine viewport in standby mode. Zero purple or cyan background blur orbs.
- **Surface (`#0D111A`)**: Structural panels, stage cards, and technical dossiers. Opaque depth with crisp 1px borders. Zero generic glassmorphic card backgrounds.
- **Border Subtle (`#1A2234`)**: Structural framing lines adhering to a strict 12-column architectural grid with equal gutters.
- **Telemetry Cyan (`#00F2FE`)**: Active module indicator; highlights selected project stages, active filter tabs, and live coordinates.
- **Phosphor Amber (`#F59E0B`)**: Academic dissertation spotlight, engine version badges (`UE 5.8`, `C++`), and git telemetry.

## 3. Typography Discipline
- **Display (`Space Grotesk`)**: Colossal uppercase headers with tight tracking (`-0.035em`) and authoritative line height (`0.95`–`1.05`).
- **Telemetry (`JetBrains Mono`)**: Micro metadata, coordinate readouts, FPS, draw calls, hotkey indicators (`[1]..[5]`, `[ESC]`, `[M]`), and code tokens.
- **Body (`Plus Jakarta Sans`)**: High-legibility technical case studies, research methodology, and personal statement copy.

## 4. Layout & Equal Margin Discipline
- **Unified Container**: All sections conform to a single maximum content width of `1360px` with equal responsive padding: `padding-left: clamp(16px, 4vw, 48px)` and `padding-right: clamp(16px, 4vw, 48px)`.
- **Zero Overflow**: Every visual element is strictly bounded within its container. The runaway marquee and uncontained `text-[17vw]` are replaced with a structured architectural grid.

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

# Game Design Portfolio — Standing Rules & Design Principles

> **MANDATORY**: These standing rules apply automatically to EVERY task in this repository without needing to be asked. Accuracy and craft matter far more than speed. Reason carefully before every major step. Do not skip phases.

---

## 1. Sequential Thinking & Architectural Decisions
Before ANY design or architectural change, always weigh goals and alternatives, including whether a bigger rebuild would be better. Radical change is explicitly permitted and encouraged if justified against design principles and game design feel.

## 2. Design Authority (`DESIGN.md`)
Always read `DESIGN.md` first before proposing or implementing UI/UX changes. Update `DESIGN.md` whenever the system, tokens, typography, colors, spacing, or motion evolve.

## 3. Aesthetic & Layout Discipline (`taste-skill`)
Use `taste-skill` / `design-taste-frontend` for all layout, typography, contrast, and motion decisions:
- Strictly purge AI-default clichés (purple/cyan mesh gradients, generic glassmorphism cards, Inter font defaults, centered hero + 3 identical cards, lazy fade-ups).
- Ensure equal margins, intentional typography hierarchy, and authentic game-developer voice.
- Honor personal creed: *"If I don't know it, I learn it; if I need it, I make it."*
- **Absolute Boundary**: Never mention poverty, hardship, or personal/family medical issues in website copy.

## 4. Purposeful Motion & Animation Justification
Every single animation must have an explicit written reason:
- **What does it communicate?**
- **What is lost if it is removed?**
- Cut all purely decorative, sluggish, or distracting motion. Honor `prefers-reduced-motion` everywhere.

## 5. Library Verification (`context7`)
Consult `context7` documentation before writing or importing any library code (Framer Motion, GSAP, Lucide, Tailwind plugins, Three.js, etc.).

## 6. Closed-Loop Multi-Viewport Verification Loop
After **EVERY** change, execute the complete verification pass with NO exceptions:
1. **Playwright multi-viewport captures**: 375px (mobile), 768px (tablet), 1280px (laptop), 1920px (ultrawide desktop).
2. **DevTools audit**: Measure layout alignment, flex/grid gaps, text clipping, and overflow-x leaks.
3. **Console error trap**: Ensure zero uncaught errors, zero broken asset 404s, zero React key warnings.
4. **Impeccable review**: Run `/impeccable critique`, followed by `/impeccable polish`.
5. **Web Interface Guidelines**: Check against `web-design-guidelines` (accessibility, focus rings, semantic tags, touch targets).
6. **Motion audit**: Run `design-motion-principles` in audit mode on every active transition and hover effect.
*Loop rule*: Fix every issue identified and re-verify until a pass finds ZERO problems.

## 7. Evidence-Based Completion
Never declare a task "done" without showing the concrete verification results, measurements, and screenshots.

## 8. Deployment Gatekeeper
Commit and deploy via the GitHub MCP / Git workflow ONLY after achieving a 100% clean verification pass.

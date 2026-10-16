# Research & Coursework Comprehensive Archive

> **Archive Purpose:** Central reference repository containing forensic research, extracted design documentation, YouTube video mappings, engine architectures, and coursework archives across Joshua Johnson's game development portfolio.
> **Date Compiled:** October 2026

---

## Table of Contents
1. [YouTube Channels & Video Intelligence](#1-youtube-channels--video-intelligence)
2. [Delirium (MS5021 Level 5 VR Horror) Deep Dive](#2-delirium-ms5021-level-5-vr-horror-deep-dive)
3. [Baldi's Basics 2 ("B.A.L.D.") Technical Architecture](#3-baldis-basics-2-bald-technical-architecture)
4. [Project Isla Procedural Generation & Mathematics](#4-project-isla-procedural-generation--mathematics)
5. [The Quarry Ludonarrative Triad & Mechanics](#5-the-quarry-ludonarrative-triad--mechanics)
6. [OneDrive Local Coursework Videos Registry](#6-onedrive-local-coursework-videos-registry)
7. [Asset & Artwork Directory Mapping](#7-asset--artwork-directory-mapping)

---

## 1. YouTube Channels & Video Intelligence

### Identified Channels
- **Primary Creative & Devlog Channel:** [`@JoshEJ`](https://www.youtube.com/@JoshEJ) (`UCiJxCpLRG4BAvis7d9EbUIg`) — 63+ public devlogs and tutorials. Twitter: [`@_JoshEJ_`](https://twitter.com/_JoshEJ_).
- **Secondary Academic Channels:**
  - [`@Joshua06Johnson`](https://www.youtube.com/@Joshua06Johnson) (`UC9JECEwOPQG6bsB4asfmiYw`)
  - [`@Josh_UEL`](https://www.youtube.com/@Josh_UEL) (`UCNozqzreBJ30lAOmcBr_mwA`)

### Forensic Video Catalog

| Video ID | Title | Duration | Project Association | Status / Directive | Notes & Highlights |
|---|---|---|---|---|---|
| `25neynVoP74` | NOBODY Has Created A Game Like This Before... SO I DID | 3m 39s | Daydream (Original) | Archived | Recreating real secondary school in UE5. 1:1 photogrammetric greybox to textured build. |
| `Z4PftFz0knc` | Remaking BALDI'S BASICS In UNREAL ENGINE 5 | 5m 07s | Baldi's Basics 2 | **Do Not Embed** (User Rule) | Custom 3D render generated from frame for cover image. Barn-door rect lighting pass. |
| `0XBwCeTYtbg` | I REMADE BALDI'S BASICS... | 4m 20s | Baldi's Basics 2 | **Do Not Embed** (User Rule) | Volumetric fog, cafeteria post-processing volume, stamina system. |
| `ZC_D3pTe_fA` | I Remade Baldis Basics... In 8K | 6m 21s | Baldi's Basics 2 | **Do Not Embed** (User Rule) | High-fidelity rendering pass and asset textures. |
| `GeMxG9_7XyQ` | Can I Remake Baldis Basics In A WEEK? | 4m 24s | Baldi's Basics 2 | **Do Not Embed** (User Rule) | Initial prototyping sprint. |
| `zJukjDdZLjk` | I Did NOT Make This Game... | 8m 51s | Project Isla | **Do Not Embed** (User Rule) | Fast Noise plugin, Perlin noise heightmap, sigmoid fall-off math curve. |
| `QnjjHLUkjkw` | Rastacats Curveball Implementation Testing Video | 3m 03s | Rastacats (Revisited) | Archived | Animal Crossing curved-world vertex displacement shader & decal projection. |
| `t3xmVDuFvZU` | LabR@z Trailer / Walkthrough | 1m 45s | LabR@z (Term 2 VR) | Active Embed | 3-player asymmetrical co-op FPS trailer from LinkedIn. |
| `yYg8R_PQs48` | Fractured - Short Movie | 2m 10s | Fractured | Active Embed | Unreal Engine cinematic short film. |
| `xeq_ZRzkWm4` | How I Made The SMARTEST NPC In Gaming... | 5m 03s | AI MetaHuman / Convai | Archived | Convai conversational AI integration with UE5 MetaHumans. |
| `VeYHvew_oR4` | Is Game Design In 2023 EASY? | 5m 58s | Early Devlog | Archived | Early dev reflections. |

---

## 2. Delirium (MS5021 Level 5 VR Horror) Deep Dive

### Overview & Production Context
- **Module:** MS5021 Game Studio 2 (Year 2 Term 2, University of East London)
- **Studio Name:** 3J Mad Studios (Team B)
- **Repository:** `https://github.com/DHirapara/Lev5_VRProject`
- **Engine / Platform:** Unreal Engine 5.6.1 / PCVR & Meta Quest

### Team Roster & Roles
- **Joshua Johnson:** Game Designer, UI/Menu Designer, Intro Sequence Director, Narrative Architect, Level Flowchart Designer.
- **Dhrumil Nitinbhai Hirapara:** Lead VR & Gameplay Systems Programmer (Wheelchair Locomotion Physics, Frustum Sight Detection, Puzzle Logic).
- **Jose Roberto Gálvez Vargas:** Environment Artist & UE5 Level Designer.
- **Aiden Thomas Billingham:** 3D Prop & Hardware Artist (Wheelchair model, Keypads, Medical Equipment).
- **Matas Narusis:** Gameplay Programmer & Technical Support.
- **Jasmine Rose Jilley:** Concept & Character Artist ('The Staff' Entity).

### Game Design Specification
- **Core Loop:** Physically manoeuvre a wheelchair through a shifting asylum while managing line-of-sight with enemies who only move when unobserved.
- **Perspective & Comfort:** Seated VR Experience. Target session time: 5 minutes of high-intensity panic.
- **Physical Wheelchair Locomotion:**
  - Immersive Mode: Player reaches down to grip virtual handrims. Pushing forward/backward advances chair; differential pushing rotates chair.
  - Weight & Inertia: Dynamic angular and linear drag prevents instantaneous acceleration, creating extreme panic during evasive maneuvers.
  - Accessibility Mode: Dual thumbstick locomotion toggle.
- **The Sight Mechanic ("Quantum Observation"):**
  - Observed State: When enemy colliders intersect the player's Camera Frustum ($Dot(\vec{v}_{look}, \vec{v}_{enemy}) > \cos(\theta_{FOV}/2)$), enemies freeze, twitching with a low-frequency hum.
  - Unobserved State: Off-screen enemies sprint towards the player at high velocity with wet footstep audio cues.
  - Instant Death Trigger: Reversing the wheelchair blindly while facing an unobserved flank triggers immediate jumpscare geometry.
- **Sanity & Zero-HUD Feedback:**
  - Status is communicated solely through environmental deterioration.
  - The Void: Floors and ceilings dissolve into volumetric black fog as sanity degrades.
  - Chromatic Aberration & FOV distortion scale inversely with distance to pursuing entities.
- **Object Permanence & Shifting Geometry:**
  - Corridors and doorways behind the player collapse into solid brick walls or sheer drops upon camera turn-away.
  - Seamless level streaming triggered by head-rotation angles.
- **The Rainbow Room (Pacing Oasis):**
  - Hyper-saturated color palette, floating low-poly props, and distorted music. Enemies cannot enter.

### Sprint Retrospectives Summary (Authored by Joshua Johnson)
- **Sprint 1:** Paper prototyping established core Weeping Angel + Wheelchair hook. Engagement challenges across classroom seating resolved early.
- **Sprint 2:** Authored full 128-line Game Design Document and level flowcharts. Identified scope divergence and unified team vision around GDD reference benchmarks.
- **Sprint 3:** Implemented menu UI widgets, calibration flow, and control schemes. Environment blockout integrated with Dhrumil's wheelchair movement actor.
- **Sprint 4:** Final push resolving character rigging bottlenecks and GitHub LFS merge conflicts. Delivered finalized build and IntroSequence cinematic.

---

## 3. Baldi's Basics 2 ("B.A.L.D.") Technical Architecture

### Lighting Benchmark & Optimization Pass
- **Lumen Point Light Bottleneck:** Initial school layout placed 400+ point lights across classroom ceilings. Dynamic Lumen bounce calculations overloaded GPU compute queues, dropping framerates below 25 FPS.
- **Barn Door Rectangular Light Refactor:** Replaced hundreds of omnidirectional point lights with targeted rectangular lights configured with custom barn door angles, attenuation radii, and light-mass portals. Cut dynamic shadow calculations by ~70% and stabilized runtime performance at locked 60+ FPS.

### Nanite & Quixel Workflow Workaround
- High-poly Megascans assets with Nanite enabled prevented in-engine mesh editing tools from recalculating vertices.
- Devised pipeline: disable Nanite for architectural slicing and vertex adjustment, bake custom colliders, then re-enable Nanite for runtime micro-polygon rasterization.

### AI & Horror Systems
- Enemy state machines governed by boolean event triggers verified on tick, tied directly to collectible notebooks, key items, and door proximity.
- Custom sprint/exhaustion curve preventing continuous running to enforce cat-and-mouse tension.

---

## 4. Project Isla Procedural Generation & Mathematics

### Terrain Heightmap Synthesis
- Integrated Fast Noise Unreal plugin with multi-octave Perlin noise generators.
- Runtime dynamic mesh actors modified via Geometry Scripting.

### Sigmoid Border Clamping Equation
To ensure infinite procedural islands naturally terminate at sea level with realistic shoreline gradients, a customized sigmoid curve modeled in Desmos was implemented:

$$f(x) = \frac{x^a}{x^a + (1-x)^a}$$

- Smoothly forces edge elevations to absolute zero at normalized island boundaries ($x \to 0$ and $x \to 1$).
- Preserves rugged mountainous variation within the interior core ($x \approx 0.5$).
- Scatter algorithm evaluates generated surface normal slope angles before instantiating foliage and tree actors.

---

## 5. The Quarry Ludonarrative Triad & Mechanics

### Architectural Triad Dialogue Tree (Jon Ingold Model)
Dialogue choices at every story beat branch along three psychological vectors:
1. **Accept:** Indulge Holly's defensive worldview, de-escalating hostility.
2. **Reject:** Challenge Holly's inconsistencies, risking immediate emotional shutdown.
3. **Deflect:** Sidestep sensitive topics to gather peripheral forensic context.

### Continuous Agitation Variable ($0 \le A \le 100$)
- Internal numeric state tracks subject stress.
- High agitation triggers repetitive conversational loops and defensive evasion.
- Low-to-moderate agitation unlocks vulnerable testimony exposing flaws in her fabricated "Ryder" predator story.

---

## 6. OneDrive Local Coursework Videos Registry

| Module / Coursework | File Name | Local OneDrive Location | Resolution | Best Showcase Timestamp |
|---|---|---|---|---|
| **MS4035 Daydream Believer** | `TestVideo.mp4` | `OneDrive\0\Year 1 Term 2\jjohnson_u2696032_MS4035\Daydream Believer\` | 1080p | **00:00:52** (Courtyard traversal, ADHD radial focus shader) |
| **MS5027 Rastacats CW1** | `CW1.mp4` | `OneDrive\0\Year 2 Term 1\MS5027 Gameplay Prototyping\Final Submission\CW1\Testing Video\` | 1080p | **00:02:30** (360° cylindrical pipe racing, 200+ km/h) |
| **MS5027 Rastacats CW2** | `CW2.mp4` | `OneDrive\0\Year 2 Term 1\MS5027 Gameplay Prototyping\Final Submission\CW2\Testing Video\` | 1080p | **00:01:15** (Curved world vertex shader & decal projection) |
| **MS4005 PyBall** | `Playtest.mp4` | `OneDrive\0\Year 1 Term 1\jjohnson_MS4005_u2696032\` | 720p | Full playtest (Python collision physics impulse) |
| **MS5028 Level Design** | `5028TestingVideo.mp4` | `OneDrive\0\Year 2 Term 1\MS5028 Level Design\CW2 Submission\` | 1080p | Full modular environment walkthrough |
| **MS5022 REM** | `REM Intro.mp4` | `OneDrive\0\Year 2 Term 2\MS5022 Portfolio 1\` | 1080p | Atmospheric watercolor intro sequence |
| **Flat 13** | `Video.mp4` | `OneDrive\1\Flat 13\` | 1080p | Psychological apartment interior inspection |
| **MS5021 Delirium** | `IntroSequence.mp4` | `OneDrive\Full Games\3JMad Studios\Delirium\CW2_TeamB\Build\` | 1080p | Wheelchair hospital intro sequence |

---

## 7. Asset & Artwork Directory Mapping

### Live Web Renders & Visual Covers
- `public/images/baldis_basics.jpg` — 3D corridor render composited with lighting architecture specifications.
- `public/images/project_isla.jpg` — Procedural Perlin noise terrain render with sigmoid fall-off mathematical formulas.
- `public/images/the_quarry.jpg` — Clean Twine narrative card cover with generous margins and padding.
- `public/images/delirium_*.png` — 12 authentic Delirium UI menus, wheelchair models, and entity concepts.
- `public/videos/daydream_preview.mp4` — 10s gameplay video loop starting at 52s (1.2 MB).
- `public/videos/rastacats_preview.mp4` — 10s gameplay video loop starting at 2m 30s (9.6 MB).
- `public/media/delirium_preview.mp4` — Delirium gameplay video preview.

---
*End of Archive.*

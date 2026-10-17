export const ALL_PROJECTS = [
  {
    "id": "rastacats",
    "slug": "rastacats",
    "catalogNumber": "01",
    "title": "Rastacats & Rastacats Remastered",
    "discipline": "gameplay",
    "engine": "Unreal Engine 5.7",
    "categoryLabel": "360° Pipe Physics & Curved-World Shaders",
    "gradeBadge": "MS5027 • 92% (1st Class)",
    "exhibitionBadge": "Sole L5 in L6 Hall",
    "dates": "Oct 2025 – May 2026",
    "role": "Solo Gameplay Programmer & Technical Artist",
    "studio": "Solo Developer • UEL (MS5027 & MS5022)",
    "shortDesc": "A two-phase Unreal Engine 5.7 arcade bobsled runner. Term 1 built 360° inner-pipe polar gravity at 200+ km/h (92%). Term 2 added an Animal Crossing curved-world WPO shader, tangent-aligned decal maths, and ISM coin pooling (-65% CPU tick).",
    "summary": "I built Rastacats across two terms to push custom locomotion physics and shader optimisation in Unreal Engine 5.7. Phase 1 focused on high-speed 360° cylindrical pipe adhesion and a risk-reward Overspeed gauge. Phase 2 overhauled the entire technical pipeline: I wrote a spherical World Position Offset (WPO) horizon shader, solved deferred decal shearing on curved geometry via Blueprint Event Tick tangent projections, pooled hundreds of coin actors into Instanced Static Meshes, and added AI race rivals.",
    "highlights": [
      "Overrode UE5's default planar Z-down assumptions by computing polar coordinates from spline cross-sections, projecting artificial gravity radially towards the pipe spine.",
      "Wrote an Animal Crossing-style spherical World Position Offset (WPO) shader to bend the horizon dynamically as the bobsled races forward.",
      "Solved deferred decal stretching on WPO-curved tracks by calculating local surface tangent frames in Event Tick before projecting skid marks and graffiti.",
      "Cut CPU tick overhead by 65% by replacing individual ticking coin actors with a single distance-culled Instanced Static Mesh (ISM) manager.",
      "Added velocity-driven secondary bone animation on the cats' ears and tails, AI rubber-banding competitors, and Niagara blizzard particles."
    ],
    "technicalDeepDive": "Standard UE5 CharacterMovement assumes a flat world with a fixed -Z gravity vector, causing pawns to detach when banking past 90° inside a tube. In Phase 1, I sampled the nearest spline point each frame, derived the radial vector from the pipe centre to the pawn, and aligned both the pawn's Up-vector and artificial gravity impulse to that normal. In Phase 2, bending the world via WPO broke standard deferred decals (which project in world space before vertex displacement). I fixed this by computing the parabolic derivative of the WPO curve in Blueprint Tick to rotate decal projection boxes flush against the displaced surface.",
    "funFact": "Faculty selected Rastacats as the only Level 5 game invited to exhibit downstairs alongside graduating Level 6 projects at the Royal Docks Centre for Sustainability, where I demoed it live to 100+ visitors.",
    "image": "/images/rastacats.jpg",
    "video": "/media/rastacats_preview.mp4",
    "gallery": [
      "/images/rastacats.jpg",
      "/images/rasta_cw1_00_01_05.jpg",
      "/images/rasta_cw1_00_01_15.jpg",
      "/images/rasta_cw1_00_01_30.jpg",
      "/images/rastacats_revisited.jpg",
      "/images/rasta_cw2_00_01_05.jpg",
      "/images/rasta_cw2_00_01_15.jpg",
      "/images/rasta_cw2_00_01_30.jpg",
      "/images/test_rasta_cw2_40s.jpg"
    ],
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": "https://joshej.itch.io/rastacats",
      "video": null,
      "linkedin": null
    },
    "featured": true,
    "splitPhases": [
      {
        "id": "original",
        "phaseLabel": "Phase 1: 360° Pipe Physics (Term 1 / MS5027)",
        "phaseBadge": "92% • 1st Class",
        "phaseSubtitle": "Cylindrical Spline Gravity & 200 km/h Overspeed Loop",
        "title": "Rastacats (Phase 1): 360° Cylindrical Pipe Racing",
        "summary": "Built for MS5027 Gameplay Prototyping (92%). Players pilot a bobsled around the inside and outside of cylindrical pipes at over 200 km/h, banking full 360° loops while managing an Overspeed multiplier that boosts coin yield at the cost of tighter obstacle reaction windows.",
        "highlights": [
          "Polar coordinate gravity solver keeping the pawn locked to inner and outer pipe walls across 360° rotations",
          "Risk-reward Overspeed gauge: holding top speed multiplies score and FOV feedback but narrows steering recovery",
          "Procedural obstacle spawner placing spike barricades, speed pads, and coin arcs along spline segments",
          "Tuned angular damping and lateral friction so inverted steering never flips camera orientation unexpectedly"
        ],
        "technicalDeepDive": "Because UE5's CharacterMovementComponent hardcodes vertical capsule orientation, I built a custom Pawn physics tick that queries the track spline's cross-sectional normal, applies a centripetal adhesion force proportional to forward velocity, and smoothly slerps camera roll so loop-the-loops feel responsive rather than nauseating.",
        "gallery": [
          "/images/rastacats.jpg",
          "/images/rasta_cw1_00_01_05.jpg",
          "/images/rasta_cw1_00_01_15.jpg",
          "/images/rasta_cw1_00_01_30.jpg"
        ],
        "video": "/media/rastacats_preview.mp4"
      },
      {
        "id": "revisited",
        "phaseLabel": "Phase 2: Curved-World Remaster (Term 2 / MS5022)",
        "phaseBadge": "-65% CPU Tick",
        "phaseSubtitle": "Spherical WPO Horizon Shader, Decal Maths & ISM Pooling",
        "title": "Rastacats Remastered: Shader Overhaul & Engine Optimisation",
        "summary": "For MS5022 Portfolio 1, I tore down and rebuilt the game's rendering and actor lifecycle. I engineered a curved-world vertex shader, fixed decal projection shearing along displaced normals, pooled all collectibles into Instanced Static Meshes, and added an AI Race Mode, a cosmetic shop, and custom Substance Painter ice materials.",
        "highlights": [
          "Spherical World Position Offset (WPO) shader bending the track over a rolling horizon like Animal Crossing",
          "Replaced hundreds of Blueprint coin actors running Event Tick with a single ISM manager, cutting CPU tick cost by 65%",
          "Calculated surface tangent frames in Blueprint Tick so graffiti and skid-mark decals project cleanly onto WPO-bent meshes",
          "Added velocity-driven spring-damper bone rotation on the cats' tails and ears for tactile speed feedback",
          "Built an AI Race Mode with spline-distance rubber-banding and custom Niagara snowstorms"
        ],
        "technicalDeepDive": "World Position Offset shifts vertices on the GPU after the CPU collision and decal passes have already run. To stop deferred decals from shearing off the bent track, I mirrored the GPU quadratic curve equation `P_z = -(d / R)^2` on the CPU in Event Tick, computing the local tangent slope to pitch each decal projector into alignment with the displaced mesh.",
        "gallery": [
          "/images/rastacats_revisited.jpg",
          "/images/rasta_cw2_00_01_05.jpg",
          "/images/rasta_cw2_00_01_15.jpg",
          "/images/rasta_cw2_00_01_30.jpg",
          "/images/test_rasta_cw2_40s.jpg"
        ],
        "video": "/media/rastacats_cw2_preview.mp4"
      }
    ]
  },
  {
    "id": "delirium",
    "slug": "delirium",
    "catalogNumber": "02",
    "title": "Delirium VR",
    "discipline": "unreal",
    "engine": "Unreal Engine 5.6 VR (OpenXR)",
    "categoryLabel": "Seated VR Horror & Wheelchair Physics",
    "gradeBadge": "MS5021 • 78% (1st Class)",
    "exhibitionBadge": "Sole Playable L5 VR Build",
    "dates": "Jan 2026 – Jun 2026",
    "role": "Game Designer, GDD Author, Level Mapper & UI/Intro Creator",
    "studio": "3J Mad Studios (6-Person Team) • UEL (MS5021)",
    "funFact": "Delirium was the only fully working, playable VR project in the entire Level 5 showcase—running at a locked 90 FPS with physical seated wheelchair onboarding for walk-up visitors.",
    "shortDesc": "Seated first-person OpenXR survival horror in Unreal Engine 5.6 where you wake up confined to a hospital wheelchair. You have to look forward to steer the heavy rims—and look backward to freeze the quantum-locked 'Staff'—forcing a physical choice between steering and survival.",
    "summary": "Created by our 6-person team (3J Mad Studios) for MS5021 Game Studio 2. I originated the 'Mental Hospital' concept, wrote the full Game Design Document (GDD), designed the Visio floorplans (modelled on UEL's Docklands West Building 1st Floor), built the Illustrator UI menus, produced the 4K IntroSequence.mp4, and co-designed the 3-mode wheelchair locomotion and Quantum-Observation AI rulesets.",
    "highlights": [
      "My Role (6-Person Team): Originated the core pitch, authored the full GDD & Sprint 1–4 docs, mapped the Visio level floorplans, designed all in-headset UI menus, and rendered the 4K cinematic intro.",
      "Core Tension Loop: Heavy tank-drive wheelchair inertia forces you to look ahead to avoid obstacles, while the 'Staff' enemies only freeze when held inside your VR headset's camera frustum.",
      "3 Wheelchair Propulsion Modes: 6-DOF physical wheel-grab tank steering, semi-realistic pull-stroke propulsion, and accessible dual-stick mode to prevent VR motion sickness.",
      "Quantum-Observation AI ('The Staff'): Freezes with a low-frequency hum and swinging pendulum stethoscope when watched; stalks with wet footsteps and reversed speech ('tneitaP ,ereh kcab emoC') in the dark or when you look away.",
      "Non-Euclidean Geometry Shifts: Hallways seal into brick walls or 'The Void' black fog behind your back whenever you turn your head, acting as zero-HUD level checkpoints and sanity feedback."
    ],
    "technicalDeepDive": "Walk-up VR horror usually fails at exhibitions because artificial thumbstick walking causes instant vestibular sickness. We solved this by seating the physical player in a real chair and anchoring their OpenXR camera inside a virtual wheelchair chassis with high angular damping. For the Quantum-Observation AI and Geometry Shift checkpoints, dot-product and camera-frustum checks verify whether an actor's bounding box intersects the HMD view cone—allowing corridors and walls behind the player to swap meshes seamlessly at 90 FPS without visual pop-in.",
    "image": "/images/delirium_cover.png",
    "gallery": [
      "/images/delirium_wheelchair.png",
      "/images/delirium_dont_stop.png",
      "/images/delirium_corridor.png",
      "/images/delirium_directors_office.png",
      "/images/delirium_ward.png",
      "/images/delirium_restroom.png",
      "/images/delirium_title_card.png",
      "/images/delirium_vr_controls.png",
      "/images/delirium_locomotion_modes.png",
      "/images/delirium_ui_main_menu.png",
      "/images/delirium_ui_control_menu.png",
      "/images/delirium_ui_pause_menu.png",
      "/images/delirium_floorplan.png",
      "/images/delirium_monster_concept.png",
      "/images/vr_showcase.jpg"
    ],
    "video": "/media/delirium_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": "https://joshej.itch.io/delirium",
      "gdd": "/docs/Delirium_GDD_and_Design_Notes.zip",
      "video": "/media/delirium_preview.mp4",
      "linkedin": null
    },
    "featured": true
  },
  {
    "id": "rem-ue5",
    "slug": "rem",
    "catalogNumber": "03",
    "title": "REM",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Kuwahara Watercolour Shader & WPO Rig",
    "dates": "Jan 2026 – May 2026",
    "role": "Solo Technical Artist & Developer",
    "studio": "Solo Developer • UEL (MS5022)",
    "shortDesc": "A short-form Unreal Engine 5 vertical slice built around two custom technical art systems I wrote without tutorials: a multi-directional Kuwahara post-process material that turns the viewport into a watercolour painting, and a World Position Offset (WPO) morphing body for the protagonist.",
    "summary": "For REM, my goal was to condense a massive narrative game bible into a tight, playable UE5 vertical slice where the rendering pipeline itself carries the psychological mood. I modelled the environments in Blender, authored custom colour-bleed PBR textures in Substance Painter, wrote an original World Position Offset vertex-morphing shader for the protagonist's body, and engineered a Kuwahara post-process volume that looks like wet watercolour without blurring readable UI or silhouettes.",
    "highlights": [
      "Wrote a custom multi-directional Kuwahara post-process filter in HLSL/UE5 Material Graph that groups pixel variance by sector to create brushstrokes while keeping object edges sharp at 60+ FPS.",
      "Built the protagonist's shifting, unstable silhouette from scratch using animated 3D noise fields wired into World Position Offset (WPO).",
      "Modelled and UV-unwrapped modular interior kits in Blender and painted custom watercolour-bleed PBR materials in Substance Painter.",
      "Designed and deployed an accompanying interactive promotional website to pitch the world and tone."
    ],
    "technicalDeepDive": "Standard box or Gaussian blurs destroy silhouette readability in first/third-person games, while naive Kuwahara filters cause blocky stepping artefacts on high-contrast edges. I solved this by sampling regional mean and variance across four overlapping quadrant kernels in the Post-Process Material and outputting the colour of the quadrant with the minimum variance—preserving razor-sharp character and doorway silhouettes while giving flat surfaces a hand-painted watercolour wash.",
    "image": "/images/rem_cover.jpg",
    "gallery": [
      "/images/rem_cover.jpg"
    ],
    "video": "/media/rem_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2/REM",
      "demo": "https://joshuel2.github.io/REM-Marketing-Website/",
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": true
  },
  {
    "id": "the-quarry-twine",
    "slug": "the-quarry",
    "catalogNumber": "04",
    "title": "The Quarry",
    "discipline": "narrative",
    "engine": "Twine (Harlowe 3.3 / HTML5 / CSS3)",
    "categoryLabel": "Interrogation State Machine & Dialogue",
    "gradeBadge": "MS5029 • 78% (1st Class)",
    "dates": "Apr 2026 – May 2026",
    "role": "Solo Narrative Designer & Systems Scripter",
    "studio": "Solo Developer • UEL (MS5029)",
    "shortDesc": "Playable in your browser. You play an NHS clinical psychologist conducting an emergency safeguarding assessment of 12-year-old Holly after a fatal fall at a local quarry—built on Jon Ingold's Accept / Reject / Deflect triads and a hidden 0–100 Agitation state machine.",
    "summary": "Inspired by the single-room interrogation tension of Adolescence (Episode 3), I built The Quarry to treat conversation like a combat state machine. Holly claims an older boy named 'Ryder' pushed her bully, but her timeline has cracks. Every dialogue node gives you three tactical postures—Accept (validate to lower her guard), Reject (press a contradiction), or Deflect (pivot topics)—all manipulating a hidden Agitation variable that determines whether she slips up, loops into defensive silence, or confesses.",
    "highlights": [
      "Structured every choice node around Jon Ingold's 'Accept / Reject / Deflect' triad so the player always knows the subtextual intent of their line.",
      "Programmed a hidden Agitation state variable (0–100) in Harlowe 3.3: pressing contradictions when Agitation is >75 triggers defensive shutdown loops.",
      "Mapped a 5,000 × 12,000 px branching node topology with multiple failure states, partial admissions, and full breakthrough endings.",
      "Playable directly in the browser with custom clinical dossier CSS styling."
    ],
    "technicalDeepDive": "Branching narrative games often fail when players either click every option exhaustively ('lawnmowering') or get punished by opaque dialogue labels. By pairing Ingold's three-posture triad with a persistent `$agitation` integer and boolean evidence flags (`$ryder_alibi_cracked`, `$phone_checked`), players have to actively manage Holly's emotional threshold—using 'Accept' and 'Deflect' nodes as cooldown mechanics before spending their composure budget on a high-pressure 'Reject' confrontation.",
    "image": "/images/the_quarry.jpg",
    "gallery": [
      "/images/the_quarry.jpg",
      "/images/the_quarry_flowchart.png"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2/The-Quarry",
      "demo": "/games/the_quarry/index.html",
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": true
  },
  {
    "id": "labraz-gdd",
    "slug": "labraz",
    "catalogNumber": "05",
    "title": "LabR@z",
    "discipline": "level-design",
    "engine": "Unreal Engine 5",
    "categoryLabel": "3-Player Co-Op FPS Level Architecture",
    "gradeBadge": "MS5028 • 72% (1st Class)",
    "dates": "Dec 2024 – Apr 2025",
    "role": "Solo Level Designer",
    "studio": "Solo Developer • UEL (MS5028 & MS4005)",
    "shortDesc": "Asymmetrical 3-player co-op FPS level built in Unreal Engine 5 where three lab rats (Tank, DPS, Support/Healer) infiltrate a biolab. Validated first with physical 3D foamboard models before whiteboxing the playable UE5 level and authoring a 40-page GDD.",
    "summary": "Developed across MS4005 (physical paper/foamboard prototyping) and MS5028 Level Design (72% 1st Class Honours). Players control three specialised rat classes—Tank, DPS, and Support/Healer—who must split up across vertical vents and floor-level choke points before converging for a final 'Pawn Promotion' bulkhead breach.",
    "highlights": [
      "Built physical 3D foamboard corridor models (MS4005) to test sightlines, cover spacing, and ambush angles before touching Unreal Engine 5.",
      "Whiteboxed and scripted the multi-tier facility in UE5 (MS5028 — 72% 1st Class), separating Tank/DPS floor lanes from elevated Support/Healer vent routes.",
      "Designed the 'Pawn Promotion' finale mechanic where all three classes must synchronise terminal overrides to breach the lab bulkhead.",
      "Wrote a 40-page Game Design Document with encounter pacing graphs, top-down beat maps, and sightline diagrams."
    ],
    "technicalDeepDive": "Co-op levels fail when one dominant player can solo every room while teammates trail behind. I prevented this by gating security doors behind parallel sightline puzzles: the Tank holds aggro on the main lab floor, exposing power relays that only the elevated DPS/Support players on the upper catwalks have the angle to trigger.",
    "image": "/images/labraz.jpg",
    "gallery": [
      "/images/labraz.jpg",
      "/images/labraz_01.jpg"
    ],
    "video": "/media/labraz_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "daydream",
    "slug": "daydream",
    "catalogNumber": "06",
    "title": "Project Daydream & Daydream Believer",
    "discipline": "unreal",
    "engine": "Unreal Engine 5 (MS4035)",
    "categoryLabel": "1:1 Photogrammetry & ADHD Shaders",
    "gradeBadge": "MS4035 • 72% (1st Class)",
    "dates": "Jul 2022 – Apr 2025",
    "role": "Solo Developer, Technical Artist & Composer",
    "studio": "Solo Developer • UEL (MS4035)",
    "shortDesc": "Started in 2022 as a 1:1 digital twin of my secondary school (RenderDoc capture, 2,377 Blender UV maps, 23.999° realignment). Revisited in MS4035 as 'Daydream Believer'—an interactive ADHD simulation with custom radial distortion shaders and manual alternating-keystroke locomotion.",
    "summary": "Project Daydream spans three years of iteration. In Phase 1, I extracted raw 3D satellite photogrammetry via RenderDoc, baked 2,377 fragmented UV maps in Blender, upscaled the textures with Topaz Gigapixel, and wrapped the jagged meshes in clean collision primitives inside UE5. In Phase 2 ('Daydream Believer'), I used that familiar school environment to translate ADHD executive dysfunction and hyperfocus into playable mechanics: a post-process tunnel-vision shader, crimson sensory-overload barriers, 15 original BandLab audio stems, and a manual step-by-step walking mechanic.",
    "highlights": [
      "Phase 1 (Digital Twin): Extracted 3D photogrammetry via RenderDoc, baked 2,377 UV maps in Blender, and corrected a map-wide 23.999° coordinate tilt.",
      "Phase 2 (MS4035 — 72% 1st Class): Built a custom HLSL post-process radial blur and chromatic aberration shader driven by a live Attention float.",
      "Programmed an alternating-keystroke manual locomotion state machine where mistimed steps induce camera roll, mechanically simulating executive dysfunction.",
      "Composed 15 layered audio tracks in BandLab that duck and swell dynamically based on proximity to sensory-overload triggers."
    ],
    "technicalDeepDive": "Raw RenderDoc photogrammetry meshes are non-manifold soup tilted at an arbitrary capture angle (23.999° off world north) with thousands of tiny 256px texture pages. I automated a Blender cleanup pass to rotate all chunks around a shared pivot, consolidate 2,377 UV islands, and generate simplified box/convex collision hulls. In Phase 2, I drove a post-process material parameter collection from the player's step-rhythm accuracy to contract screen UVs towards the centre during sensory overload.",
    "image": "/images/daydream.jpg",
    "video": "/media/daydream_preview.mp4",
    "gallery": [
      "/images/daydream.jpg",
      "/images/daydream_00_01_05.jpg",
      "/images/daydream_00_01_30.jpg",
      "/images/daydream_revisited.jpg",
      "/images/test_daydream_52s.jpg"
    ],
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": "https://joshej.itch.io/daydream-believer",
      "video": null,
      "linkedin": null
    },
    "featured": false,
    "splitPhases": [
      {
        "id": "original",
        "phaseLabel": "Phase 1: 1:1 Photogrammetry (2022–2023)",
        "phaseBadge": "2,377 Blender UV Maps",
        "phaseSubtitle": "RenderDoc 3D Capture, 23.999° Realignment & Lumen Lighting",
        "title": "Project Daydream: 1:1 School Campus Digital Twin",
        "summary": "An architectural 1:1 reconstruction of my secondary school campus in Unreal Engine 5. I captured 3D photogrammetry buffers using RenderDoc, consolidated 2,377 separate UV texture maps in Blender, upscaled the satellite textures to 4K via Topaz Gigapixel, and built clean blocking collisions.",
        "highlights": [
          "Captured 3D photogrammetry buffers via RenderDoc and consolidated 2,377 UV maps in Blender",
          "Calculated an exact 23.999° transformation matrix to align the tilted capture data with UE5's world grid",
          "Traced invisible box collision primitives over jagged photogrammetric walls for smooth 60 FPS walking",
          "Upscaled low-resolution satellite textures to 4K and lit the campus with dynamic day/night Lumen GI"
        ],
        "technicalDeepDive": "Importing 2,377 unmerged draw calls with per-triangle auto-collisions brought the viewport to a crawl. I stripped complex mesh collisions, grouped architectural blocks in Blender around a common origin rotated by -23.999°, and hand-placed simplified box colliders in UE5.",
        "gallery": [
          "/images/daydream.jpg",
          "/images/daydream_00_01_05.jpg",
          "/images/daydream_00_01_30.jpg"
        ],
        "video": "/media/daydream_preview.mp4"
      },
      {
        "id": "revisited",
        "phaseLabel": "Phase 2: Daydream Believer (MS4035 • 72% 1st)",
        "phaseBadge": "72% • 1st Class",
        "phaseSubtitle": "ADHD Hyperfocus Shader, Manual Step Locomotion & 15 Audio Stems",
        "title": "Daydream Believer: Interactive ADHD Sensory Simulation",
        "summary": "For MS4035 Game Prototyping (72% 1st Class), I turned the photogrammetric campus into a playable first-person simulation of ADHD hyperfocus and sensory overload—combining a custom radial tunnel-vision shader, manual alternating-key movement, crimson overload fences, and 15 original BandLab tracks.",
        "highlights": [
          "Post-process radial blur and chromatic aberration material driven by player attention/overload state",
          "Rhythm-based manual walking mechanic requiring alternating keystrokes to keep camera balance steady",
          "Dynamic perimeter barriers that flare crimson during sensory overload and dissolve when focus is restored",
          "15 original BandLab music tracks layered with real-time volume ducking and inner-monologue voice cues"
        ],
        "technicalDeepDive": "Instead of using a passive cutscene to represent executive dysfunction, I replaced standard WASD hold-to-walk with an alternating-step state machine. Missing the rhythm window increments an Overload scalar in the Material Parameter Collection, narrowing the clear centre of the viewport via radial UV distortion.",
        "gallery": [
          "/images/daydream_revisited.jpg",
          "/images/test_daydream_52s.jpg"
        ],
        "video": "/media/daydream_preview.mp4"
      }
    ]
  },
  {
    "id": "state-machine-showcase",
    "slug": "state-machine-showcase",
    "catalogNumber": "07",
    "title": "State Machine Showcase",
    "discipline": "gameplay",
    "engine": "Unreal Engine 5",
    "categoryLabel": "AI Behaviour States & Elevator Physics",
    "dates": "Jan 2025 – Present",
    "role": "Solo Systems Programmer",
    "studio": "Solo Developer • Itch.io",
    "shortDesc": "Playable Unreal Engine 5 systems sandbox demonstrating Hierarchical Finite State Machines (Patrol → Investigate → Pursue → Search), raycast line-of-sight cones, and physics-synchronised elevators.",
    "summary": "I built this standalone UE5 sandbox to prototype clean, reusable AI and world-interaction blueprints without spaghetti dependencies. Enemies use decoupled Blueprint Interfaces and minimum dwell-time guards to transition smoothly between patrolling, investigating last-known player coordinates, active turret pursuit, and search recovery.",
    "highlights": [
      "Hierarchical Finite State Machine (HFSM) separating high-level combat state from low-level navmesh movement.",
      "Vision cone raycasting with occlusion checks and a last-known-position memory timer.",
      "Physics-synchronised moving platforms and multi-stop elevators that carry both players and AI cleanly.",
      "Playable on itch.io."
    ],
    "technicalDeepDive": "Naive AI state machines suffer from 'state thrashing' when a player ducks in and out of cover right on the edge of a vision cone. I solved this by adding hysteresis thresholds—requiring 0.4s of continuous line-of-sight accumulation to escalate from Investigate to Pursue, and a 4.0s decay timer holding the player's last velocity vector before dropping back to Search.",
    "image": "/images/state_machine_cover.png",
    "gallery": [
      "/images/state_machine_cover.png"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": "https://joshej.itch.io/state-machine-showcase",
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "planet-protectors",
    "slug": "planet-protectors",
    "catalogNumber": "08",
    "title": "Planet Protectors",
    "discipline": "level-design",
    "engine": "Unity 6 (C#) / Agile Production",
    "categoryLabel": "Co-Op Platformer (74 of 86 Git Commits)",
    "dates": "Jan 2025 – Apr 2025",
    "role": "Technical Lead, Co-Producer & Character Concept Artist",
    "studio": "Team Gaia (5-Person Team) • UEL (MS4007)",
    "shortDesc": "Multi-sprint environmental action-platformer built in Unity 6. As Technical Lead on a 5-person team, I authored 74 of the repository's 86 total Git commits (~86% of the codebase) and drew the orthographic character model sheets for Bonnie, Kiwi, and Haptic.",
    "summary": "Built across iterative Agile sprints for MS4007. My responsibilities covered both ends of production: I drew the original character concept art and turnaround sheets (Bonnie, Kiwi, and Haptic), programmed the core C# platforming and hazard systems, managed Git branch merges, and authored 74 of the project's 86 commits to get a stable playable build shipped to itch.io.",
    "highlights": [
      "My Role (5-Person Team): Authored 74 of 86 total Git commits (~86% of repository commits), handling C# gameplay scripting and scene integration.",
      "Illustrated the original character concept art and orthographic model turnarounds for protagonists Bonnie, Kiwi, and Haptic.",
      "Built modular C# environmental hazard triggers, collectible managers, and responsive 2D platforming physics.",
      "Managed sprint task boards and resolved Unity scene merge conflicts across the team."
    ],
    "technicalDeepDive": "On student team projects, Unity scene files frequently corrupt when multiple people edit prefabs simultaneously. I restructured our gameplay scripts around decoupled C# events and serialized prefabs so level designers could tweak platform placement without touching the player controller or game manager scripts.",
    "image": "/images/planet_protectors.jpg",
    "gallery": [
      "/images/planet_protectors.jpg",
      "/images/planet_protectors_lineup.png",
      "/images/Bonnie and Kiwi Concepts.webp",
      "/images/Bonnie Model Sheet.webp",
      "/images/Bonnie Model Sheet Hatless.webp",
      "/images/Haptic Concepts.webp",
      "/images/Haptic Model Sheet.webp",
      "/images/Kiwi Model Sheet.webp"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2/PlanetProtectors",
      "demo": null,
      "itch": "https://joshej.itch.io/planet-protectors",
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "pyball",
    "slug": "pyball",
    "catalogNumber": "09",
    "title": "PyBall",
    "discipline": "gameplay",
    "engine": "Python (SimpleGUI / CodeSkulptor)",
    "categoryLabel": "2D Collision Maths & Viewport Culling",
    "gradeBadge": "MS4006 • 78% (1st Class)",
    "dates": "Oct 2024 – Dec 2024",
    "role": "Sole Programmer",
    "studio": "Solo Developer • UEL (MS4006)",
    "shortDesc": "Playable in browser via CodeSkulptor. A 2D tile-grid survival game written from scratch in Python (no Pygame/Box2D physics libraries), featuring custom AABB/circle collision solvers, 75px vector evasion AI, and camera frustum culling (`is_within_view`).",
    "summary": "Built for MS4006 Fundamentals of Programming (78% 1st Class Honours). Rather than using pre-built sprite or physics libraries, I wrote the entire 2D engine from raw coordinate maths: a procedural 40×60 green/blue pond tile generator, a player-centred scrolling camera (`camera_offset`), custom box-to-box (`intersects`) and circle-to-box (`is_collision`) solvers, and off-screen entity freezing.",
    "highlights": [
      "Wrote custom AABB box-to-box (`intersects`) and circle-to-box (`is_collision`) collision checks from raw coordinate inequalities.",
      "Implemented viewport frustum culling (`is_within_view(circle, camera_offset, 800, 600)`) so off-screen enemies stop computing AI and collision checks.",
      "Programmed Euclidean distance vector evasion (`avoid_player`) causing purple enemy spheres to scatter away when you close within 75px.",
      "Playable live in the browser via CodeSkulptor 3."
    ],
    "technicalDeepDive": "Checking 50 moving circles against 2,400 pond tiles every frame in browser-interpreted Python (120,000 checks/frame) quickly drops frame rates. I optimised the loop with `is_within_view()`, culling AI and pond-reflection updates for any circle outside `[camera_x - r, camera_x + 800 + r]` so frame times stayed locked at 60 FPS.",
    "image": "/images/pyball.jpg",
    "gallery": [
      "/images/pyball.jpg",
      "/images/pyball_circle_collision.png",
      "/images/pyball_box_collision.png"
    ],
    "video": "/media/pyball_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": "https://py3.codeskulptor.org/#user309_oERZmQgfta_0.py",
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "rand-io",
    "slug": "rand-io",
    "catalogNumber": "10",
    "title": "Rand.io",
    "discipline": "gameplay",
    "engine": "Unity / Photon PUN2",
    "categoryLabel": "Procedural Walker Generator & Multiplayer",
    "dates": "Sep 2024 – Nov 2024",
    "role": "Solo Programmer",
    "studio": "Independent Prototype",
    "shortDesc": "Playable multiplayer dungeon crawler in Unity using random-walker tile generation synchronised across clients via Photon PUN2 deterministic seed broadcasting.",
    "summary": "I built Rand.io to learn how procedural generation and multiplayer networking interact in Unity. Instead of sending thousands of tile objects over the network, the host broadcasts a single integer seed via Photon PUN2 RPCs so every connected client generates the exact same connected dungeon layout locally.",
    "highlights": [
      "Random-walker dungeon generator guaranteeing 100% connected floor tiles on every run.",
      "Synchronised procedural map generation across multiplayer clients by broadcasting a deterministic seed via Photon PUN2.",
      "Bitmask wall-tile auto-tiling and client-side movement smoothing.",
      "Playable build published on itch.io."
    ],
    "technicalDeepDive": "Instantiating procedural dungeon tiles via `PhotonNetwork.Instantiate` flooded the room message queue and caused join timeouts. Switching to deterministic `Random.InitState(sharedSeed)` on each client reduced map-sync network traffic to a single 4-byte integer RPC.",
    "image": "/images/rand_io.jpg",
    "gallery": [
      "/images/rand_io.jpg"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": "https://joshej.itch.io/randio",
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "project-isla",
    "slug": "project-isla",
    "catalogNumber": "11",
    "title": "Project Isla",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Perlin Noise & Sigmoid Fall-Off Islands",
    "dates": "Jan 2023 – Feb 2023",
    "role": "Solo Developer",
    "studio": "Independent UE5 Prototype",
    "shortDesc": "Procedural island generator in Unreal Engine 5 using multi-octave 2D Perlin noise, Geometry Script runtime mesh displacement, and a custom sigmoid radial fall-off curve I graphed in Desmos.",
    "summary": "I built Project Isla in early 2023 to teach myself procedural terrain maths in Unreal Engine 5. Using the Fast Noise plugin and UE5 Geometry Script, I displaced dynamic mesh vertices at runtime and multiplied the heightfield by a custom radial sigmoid fall-off equation so every generated landmass slopes naturally into the ocean.",
    "highlights": [
      "Runtime procedural landmass generation in UE5 using multi-octave 2D Perlin noise and Geometry Script.",
      "Graphed a custom radial sigmoid fall-off function in Desmos: `f(x) = x^a / (x^a + (1 - x)^a)` to force natural coastlines.",
      "Built an in-game parameter UI to tweak island radius, peak amplitude, octave frequency, and shoreline steepness live.",
      "Procedural foliage scatter checking surface slope normals so trees never spawn underwater or on sheer cliffs."
    ],
    "technicalDeepDive": "Raw 2D Perlin noise creates infinite heightfields that clip abruptly at the edges of a mesh grid. By normalising each vertex's radial distance `r` from the island centre to `[0, 1]` and multiplying the noise height by `1 - (r^a / (r^a + (1 - r)^a))`, I forced the outer ring of vertices smoothly below sea level while keeping the central plateau jagged.",
    "image": "/images/project_isla.jpg",
    "gallery": [
      "/images/project_isla.jpg"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "baldis-basics-2",
    "slug": "baldis-basics-2",
    "catalogNumber": "12",
    "title": "B.A.L.D. (Baldi's Basics UE5 Remake)",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "UE5 Horror Loop & Lumen Optimisation",
    "dates": "Nov 2022 – Apr 2023",
    "role": "Solo Developer",
    "studio": "Independent UE5 Project",
    "shortDesc": "My first full Unreal Engine 5 game (built in Sixth Form): a playable horror remake of Baldi's Basics where I coded the enemy pursuit AI, stamina/notebook loops, and benchmarked 400+ lighting setups to stop Lumen from tanking FPS.",
    "summary": "B.A.L.D. (Bridge of Animations, Logic, and Design) was where I first learned Unreal Engine 5 Blueprints, Nanite, and Lumen lighting. I built a custom school wing and toxic warehouse, scripted the notebook collection and enemy speed-escalation loop, and learned the hard way how to optimise interior Lumen lighting after 400 point lights killed my frame rate.",
    "highlights": [
      "Programmed the complete survival loop: notebook pickups, stamina drain/recovery curves, and enemy speed escalation.",
      "Solved severe Lumen frame drops (caused by 400+ overlapping point lights) by replacing them with wide barn-door Rect Lights.",
      "Built two distinct interior zones (abandoned school corridors and a toxic storage warehouse) using Quixel Megascans and Nanite.",
      "Added dynamic post-process feedback (chromatic aberration and vignette intensity) tied to enemy proximity."
    ],
    "technicalDeepDive": "When I first lit the school hallways, I placed over 400 individual fluorescent point lights with dynamic shadows—which tanked Lumen global illumination below 15 FPS. After profiling light overlap, I stripped the point lights and replaced them with spaced Rectangular Lights using wide barn-door angles, restoring 60 FPS while keeping the harsh fluorescent bounce.",
    "image": "/images/baldis_basics.jpg",
    "gallery": [
      "/images/baldis_basics.jpg"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "dear-hiring-manager-gdd",
    "slug": "dear-hiring-manager",
    "catalogNumber": "13",
    "title": "Dear, Hiring Manager",
    "discipline": "narrative",
    "engine": "Microsoft Visio / Systems Game Bible",
    "categoryLabel": "Satirical Life-Sim Economy & Visio Trees",
    "dates": "Jan 2026 – May 2026",
    "role": "Solo Systems Designer & Writer",
    "studio": "Solo Designer • UEL (MS5022)",
    "shortDesc": "A systems Game Bible and Microsoft Visio economy architecture for a satirical top-down life-sim (inspired by BitLife & Monopoly) featuring weekly turn loops, 'Ghost Job' RNG, passive rent inflation, and Stress feedback curves.",
    "summary": "Created for MS5022 Portfolio 1. Dear, Hiring Manager turns the modern entry-level job hunt into a weekly resource-management game. Players balance rent inflation, side-hustles, skill grinding, and mental health along a strict systemic loop (`Hustle → Money → Skill → Interview → Luck → Promotion`) mapped across full Microsoft Visio decision flowcharts.",
    "highlights": [
      "Designed the weekly turn-based economy loop (`Hustle = Money → Skill → Interview → Luck = Job`) against passively inflating Cost of Living.",
      "Built systemic 'Ghost Jobs' (a 20% baseline probability that any role you apply for doesn't actually exist) and 'Networking Events' that permanently buff baseline RNG.",
      "Balanced a 'Stress' penalty loop where rejections slow down skill learning and lower interview RNG unless you spend savings on holidays.",
      "Plotted the entire progression and random Event Card economy ('Nepotism Buff', 'AI Replaced Your Department') in Microsoft Visio to catch dead-ends."
    ],
    "technicalDeepDive": "When designing resource-management economies on paper, unchecked positive feedback loops let players snowball effortlessly after their first promotion. By plotting every weekly state transition in Microsoft Visio, I tuned passive rent inflation and the 20% Ghost Job sink against Networking RNG buffs so players constantly face meaningful trade-offs between upskilling and stress recovery.",
    "image": "/images/dear_hiring_manager.jpg",
    "gallery": [
      "/images/dear_hiring_manager.jpg"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "far-cry-5-dlc-faith-over-fear",
    "slug": "faith-over-fear",
    "catalogNumber": "14",
    "title": "Far Cry 5 DLC: Faith Over Fear",
    "discipline": "narrative",
    "engine": "Screenplay & Performance Capture Format",
    "categoryLabel": "AAA Mocap Prequel Screenplay",
    "gradeBadge": "MS5029 • 78% (1st Class)",
    "dates": "Feb 2026 – May 2026",
    "role": "Solo Narrative Writer",
    "studio": "Solo Writer • UEL (MS5029)",
    "shortDesc": "Performance-capture prequel screenplay for Ubisoft's Far Cry 5 exploring the indoctrination of Rachel Jessop ('Faith Seed'), written with mocap volume blocking, camera lens notes, and physical actor direction.",
    "summary": "Written for MS5029 Storytelling for Games (78% 1st Class Honours). Drawing on my 5+ years of stage and screen acting experience, I wrote this Far Cry 5 prequel specifically for a motion-capture volume—replacing loud villain speeches with quiet physical proximity, prop handoffs, and environmental cues in a rain-soaked Montana compound.",
    "highlights": [
      "Formatted to AAA performance-capture standards with explicit mocap stage blocking, prop interaction cues, and camera lens notes.",
      "Wrote Joseph Seed's manipulation around quiet physical stillness and false paternal warmth rather than cliché villain monologues.",
      "Used my own stage/screen acting background to write playable, physically grounded subtext for the mocap performers.",
      "Iterated scene pacing through live table reads (awarded 78% 1st Class Honours)."
    ],
    "technicalDeepDive": "In AAA cutscene production, writers who put all emotional turns in dialogue create stiff, talking-head cinematics. I blocked each scene around physical distance vectors inside the mocap volume—tracking how Joseph gradually closes the spatial gap between himself and Rachel across three beats before speaking a single doctrinal word.",
    "image": "/images/far_cry_5.jpg",
    "gallery": [
      "/images/far_cry_5.jpg"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "misc-games-planning",
    "slug": "misc-games",
    "catalogNumber": "15",
    "title": "Design Archives & Early Prototypes",
    "discipline": "level-design",
    "engine": "UE5 / Excel / Paper Prototypes",
    "categoryLabel": "Early Systems & Pitch Decks",
    "dates": "2022 – Present",
    "role": "Game Designer",
    "studio": "Personal Archive",
    "shortDesc": "Working archive of early UE5 experiments (including Project T.O.W.E.R. procedural office generation), mechanical pitch decks, and spreadsheet economy models.",
    "summary": "A collection of smaller Unreal Engine 5 experiments, tabletop rulebooks, and early concept pitches—including Project T.O.W.E.R. (an algorithmic office skyscraper generator in UE5 where floor plates and structural columns expand dynamically).",
    "highlights": [
      "Includes Project T.O.W.E.R.: real-time procedural skyscraper floor-plate and structural column generation in Unreal Engine 5.",
      "Spreadsheet economy and RPG progression curve models.",
      "Early paper-prototype rulesets and mechanical pitch decks."
    ],
    "technicalDeepDive": "Used this sandbox archive to test isolated UE5 Blueprint algorithms—such as parametric grid instancing for procedural buildings—before folding proven techniques into larger projects.",
    "image": "/images/project_tower_01.jpg",
    "gallery": [
      "/images/project_tower_01.jpg",
      "/images/project_tower_02.jpg",
      "/images/project_tower_03.jpg",
      "/images/misc_games.jpg"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": false
  }
];

export const GAME_FILTER_DISCIPLINES = [
  {
    id: "vault-only",
    label: "Additional Vault Projects",
    count: ALL_PROJECTS.filter((p) => !p.featured).length
  },
  {
    id: "all",
    label: "All 15 Games & Bibles",
    count: ALL_PROJECTS.length
  },
  {
    id: "unreal",
    label: "Unreal Engine 5",
    count: ALL_PROJECTS.filter((p) => p.engine.includes('Unreal') || p.engine.includes('UE5')).length
  },
  {
    id: "playable",
    label: "Playable Builds",
    count: ALL_PROJECTS.filter((p) => Boolean(p.links && (p.links.itch || p.links.demo))).length
  },
  {
    id: "narrative",
    label: "Narrative & GDDs",
    count: ALL_PROJECTS.filter((p) => p.discipline === 'narrative' || p.discipline === 'level-design').length
  }
];

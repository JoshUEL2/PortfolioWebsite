export const ALL_PROJECTS = [
  {
    "id": "rastacats",
    "slug": "rastacats",
    "catalogNumber": "01",
    "title": "Rastacats / Rastacats Remastered",
    "discipline": "gameplay",
    "engine": "Unreal Engine 5.7",
    "categoryLabel": "High-Speed Physics & Cylindrical Locomotion",
    "dates": "Oct 2025 – May 2026",
    "role": "Lead Gameplay Engineer & Technical Artist",
    "studio": "JoshCorp Interactive / UEL (MS5027 & MS5022)",
    "shortDesc": "Awarded 92% (1st Class Honours) for high-octane 360° cylindrical pipe racing in Term 1, followed by a complete Term 2 architectural remaster featuring curved-world shaders, decal projection maths, and 65% CPU tick optimisation.",
    "summary": "Dual-phase arcade racing project exploring cylindrical locomotion physics and modern engine optimisation. Term 1 established custom polar gravity and high-stakes Overspeed mechanics (92% grade). Term 2 introduced an Animal Crossing spherical vertex shader, Blueprint Event Tick decal projection along curved surfaces, coin actor pooling, and AI race competition.",
    "highlights": [
      "Awarded 92% (1st Class Honours) for MS5027 Gameplay Prototyping at UEL",
      "Engineered bespoke 360° rotational gravity across tubular spline meshes beyond standard CharacterMovement",
      "Term 2 Remaster: Animal Crossing-style curved-world vertex displacement shader with dynamic rolling horizon",
      "Blueprint Event Tick decal projection maths calculating surface tangents along curved normals to eliminate shearing",
      "65% CPU cycle reduction achieved by replacing per-frame coin ticking with pooled Instanced Static Mesh managers",
      "Secondary procedural animation featuring velocity-driven skeletal bone swaying on character ears and tails"
    ],
    "technicalDeepDive": "Standard UE5 CharacterMovement components assume planar down-vectors and fail when navigating inverted tubular geometry. Solved in Phase 1 by calculating polar coordinates from spline cross-sections, projecting dynamic artificial gravity directly towards the pipe spine. In Phase 2, countered visual vertex displacement shearing by computing real-time decal projection matrices in Event Tick, while slashing frame times by pooling coin actors into distance-culled instanced meshes.",
    "funFact": "Selected as the sole Level 5 project to exhibit downstairs alongside final graduating Level 6 games at the Royal Docks Centre for Sustainability, demoed live to over 100 industry visitors.",
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
        "phaseLabel": "Phase 1: Original (Term 1 / MS5027)",
        "phaseBadge": "92% 1st Class Honours",
        "phaseSubtitle": "360° Cylindrical Pipe Locomotion & Polar Gravity Physics",
        "title": "Rastacats: High-Velocity 360° Pipe Bobsled Racing",
        "summary": "Awarded 92% (1st Class Honours) in MS5027 Gameplay Prototyping at the University of East London. Features high-velocity 360-degree pipe traversal where players bank along cylindrical surfaces at over 200 km/h, dodging dynamic obstacles, collecting coins, and managing a high-stakes Overspeed mechanic that rewards split-second reflexes.",
        "highlights": [
          "Custom polar coordinate gravity system allowing seamless 360-degree cylindrical inner-pipe traversal",
          "Dynamic Overspeed risk-reward gauge: maintaining maximum speed unlocks coin multipliers but heightens collision penalty",
          "Procedural obstacle placement algorithm generating randomised spike hazards and jump pads",
          "High-performance arcade handling with immediate response physics tuned for competitive time-trials"
        ],
        "technicalDeepDive": "Calculated surface normals across continuous spline meshes to project artificial inward gravitational vectors, allowing the bobsled pawn to maintain adhesion across 360 degrees of rotation without falling out of the tube geometry. Tuned velocity damping and rotational friction to eliminate disorientation while preserving extreme speed.",
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
        "phaseLabel": "Phase 2: Revisited / Remaster (Term 2 / MS5022)",
        "phaseBadge": "Remastered Architecture",
        "phaseSubtitle": "Curved-World Shader, Decal Maths & CPU Tick Optimisation",
        "title": "Rastacats Remastered: Spherical Vertex Horizon & Engine Polish",
        "summary": "A ground-up architectural overhaul for the MS5022 Portfolio module. Rebuilt rendering pipelines with an Animal Crossing-inspired spherical vertex displacement shader, engineered Blueprint Event Tick decal projection maths, eliminated CPU overhead through actor pooling, added velocity-driven bone swaying, AI Race Mode competitors, and blizzard particle weather.",
        "highlights": [
          "Animal Crossing-inspired curved-world vertex displacement shader creating a dramatic rolling horizon effect",
          "Replaced per-frame actor ticking with object pooling for hundreds of coins, slashing CPU cycle usage by 65%",
          "Engineered Blueprint Event Tick decal maths to accurately project feline graffiti and skid marks along curved mesh normals",
          "Implemented secondary animation with velocity-driven bone swaying on character tails and ears",
          "Added competitive AI Race Mode with dynamic rubber-banding and atmospheric blizzard weather simulation"
        ],
        "technicalDeepDive": "Engineered world-position-offset vertex shader maths: P_curved = P_world - up * (distance / curveFactor)^2. Overcame decal projection shearing on curved meshes by calculating local surface tangent frames in Blueprint tick. Optimised coin performance by replacing individual ticking actors with an Instanced Static Mesh Component manager with distance-based cull volumes.",
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
    "id": "rem-ue5",
    "slug": "rem",
    "catalogNumber": "02",
    "title": "REM: Stylised Watercolour Post-Processing & Ludonarrative",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Technical Art & Custom Shaders",
    "dates": "Jan 2026 – May 2026",
    "role": "Lead Technical Artist & Creative Director",
    "studio": "JoshCorp Interactive / UEL (MS5022)",
    "shortDesc": "An expressive interactive experience rendered with a bespoke multi-directional Kuwahara watercolour post-process filter and dynamic World Position Offset body morphing.",
    "summary": "The purpose of REM was to condense an expansive, pre-existing game bible into a focused, short-form interactive experience, while still successfully conveying its core thematic messages. Developed in Unreal Engine 5 with Blender 3D modelling, technical documentation, and Substance Painter textures. Overcame complex visual mechanics without third-party tutorials, engineering a custom Kuwahara-based post-process filter balancing painterly watercolour aesthetics with player clarity, alongside an original World Position Offset (WPO) morphing body for the protagonist.",
    "highlights": [
      "Engineered custom multi-directional Kuwahara filtering balancing painterly watercolour aesthetics with crisp gameplay legibility",
      "Custom World Position Offset (WPO) morphing body for the protagonist built from scratch without pre-made asset packs",
      "Custom PBR textures authored in Substance Painter and 3D environment kits rigged and modelled in Blender",
      "Indexical environmental storytelling where ambient lighting and post-process parameters respond to player emotional state"
    ],
    "technicalDeepDive": "Faced with achieving an expressive watercolour aesthetic without muddying silhouette clarity or tanking framerates, engineered a custom multi-directional Kuwahara filtering post-process volume in HLSL/UE5 Material Graph. Balanced edge-detection kernels with colour averaging passes to preserve character silhouette boundaries at 60fps+.",
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
    "id": "labraz-gdd",
    "slug": "labraz",
    "catalogNumber": "03",
    "title": "LabR@z: 3-Player Asymmetrical Co-Op FPS (MS5028 - 72% 1st)",
    "discipline": "level-design",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Asymmetrical Level Architecture",
    "dates": "Dec 2024 – Apr 2025",
    "role": "Lead Level Designer & Systems Architect",
    "studio": "JoshCorp / UEL (MS5028 & MS4005)",
    "shortDesc": "Awarded 72% (1st Class Honours) for an asymmetrical co-op FPS level design. Supported by physical 3D foamboard paper-prototyping, a 40-page Game Design Document, and full UE5 video walkthrough.",
    "summary": "Complex asymmetrical level architecture requiring complementary player classes (Tank, DPS, and Support/Healer) to breach a high-security research facility and execute a 'Pawn Promotion' bulkhead breach, balancing encounter pacing and spatial sightlines.",
    "highlights": [
      "Awarded 72% (1st Class Honours) for MS5028 Level Design at UEL",
      "Validated spatial sightlines via physical 3D foamboard paper-prototyping (MS4005) prior to Unreal Engine 5 whiteboxing",
      "Authored professional 40-page Game Design Document with flow diagrams, beat charts, and 'Pawn Promotion' end-state mechanics",
      "Engineered sightlines, choke points, and vertical flanking routes balancing Tank, DPS, and Support/Healer cooperative classes"
    ],
    "technicalDeepDive": "Balanced encounter pacing using rhythm-tension graphs validated first through physical tabletop/foamboard playtesting and subsequently built in Unreal Engine 5. Designed modular environmental kits in Blender with clear visual language: colour-coded conduits guide puzzle routing while elevated catwalks provide tactical sightlines for defensive cover.",
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
    "featured": true
  },
  {
    "id": "the-quarry-twine",
    "slug": "the-quarry",
    "catalogNumber": "04",
    "title": "The Quarry: Interactive Safeguarding Interrogation (MS5029 - 78% 1st)",
    "discipline": "narrative",
    "engine": "Twine (Harlowe 3.3 / HTML5 / CSS3)",
    "categoryLabel": "Narrative & Dialogue Systems",
    "dates": "Apr 2026 – May 2026",
    "role": "Narrative Designer & Dialogue Systems Architect",
    "studio": "University of East London (MS5029)",
    "shortDesc": "Awarded 78% (1st Class Honours): a psychological thriller built in Twine exploring manipulation in a single safeguarding consultation room using Jon Ingold's Accept/Reject/Deflect triads and an internal Agitation meter.",
    "summary": "As an NHS clinical psychologist, the player conducts a safeguarding assessment of twelve-year-old Holly after she witnessed the fatal fall of her bully at a local quarry. Holly portrays a traumatised victim, inventing an older boy named 'Ryder'. The interrogation treats dialogue flow with systemic precision: choices directly manipulate a hidden Agitation variable (0–100), balancing pressure against de-escalation to expose contradictions in her alibi and unlock multiple confession endings.",
    "highlights": [
      "Awarded 78% (1st Class Honours) in MS5029 Storytelling for Games at the University of East London",
      "Structured upon Jon Ingold's 'Accept / Reject / Deflect' dialogue choice architecture for sparkling momentum",
      "Dynamic hidden 'Agitation' state engine (0–100) that exposes subtext as an active gameplay mechanic",
      "Conversational loops that punish over-aggressive confrontations by causing Holly to shut down or lash out",
      "Fully playable web build with high-resolution 5K × 12K branching node topology flowchart"
    ],
    "technicalDeepDive": "Implemented state machine variable architecture inside Twine Harlowe 3.3 with custom responsive CSS styling. Scripted branching topologies that track hidden suspect confidence and agitation variables. Overly aggressive inquiries spike Agitation, reverting narrative progress into defensive conversational loops, requiring players to utilise calculated Ingold de-escalation pathways to uncover discrepancies regarding the fictional predator 'Ryder' and reach resolution endings.",
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
    "id": "delirium",
    "slug": "delirium",
    "catalogNumber": "05",
    "title": "Delirium: Seated VR Psychological Horror & Wheelchair Physics (MS5021 - 78% 1st)",
    "discipline": "unreal",
    "engine": "Unreal Engine 5.6 VR (OpenXR)",
    "categoryLabel": "VR Psychological Horror & Locomotion Physics",
    "dates": "Jan 2026 – Jun 2026",
    "role": "Game Designer, GDD/Narrative Author, UI & 4K Intro Sequence Creator",
    "studio": "3J Mad Studios / UEL (MS5021)",
    "funFact": "The sole fully working, playable VR project in the Level 5 showcase, demoed live with custom seated wheelchair physics and OpenXR head tracking.",
    "shortDesc": "First-person seated VR psychological survival horror game in Unreal Engine 5.6 (78% 1st Class Honours) where you awaken in 'The Institute' confined to a physical wheelchair, forced to choose between looking forward to navigate or looking back to freeze quantum-observation 'Staff' entities.",
    "summary": "Developed by 3J Mad Studios (Joshua Johnson, Dhrumil Hirapara, Jose Roberto Gálvez Vargas, Aiden Billingham, Matas Narusis, Jasmine Jilley) for MS5021 Game Studio 2 (78% 1st Class Honours)—the sole fully working, playable VR project in the Level 5 showcase. Originated from Joshua's 'Mental Hospital Idea' concept notes and full Game Design Document (GDD), combining a 5-minute high-turnover walk-up VR loop, weighted tank-control wheelchair inertia across 3 propulsion modes, Quantum-Observation ('Weeping Angel') AI with K-wire split-face & pendulum-stethoscope body horror, reversed speech & mic-noise detection, non-Euclidean 'Geometry Shift' checkpoints, 'The Void' black-fog sanity feedback, and 'The Rainbow Room' contrast safe zone.",
    "highlights": [
      "Sole fully working, playable VR project in the Level 5 showcase (78% 1st Class Honours in MS5021), demoed live with custom seated wheelchair physics and OpenXR head tracking.",
      "Originated the 'Mental Hospital Idea' & authored the full GDD, Narrative Template, Brainstorming Bible, Sprint 1–4 Retrospectives, Visio floorplans (modelled on UEL Docklands West Building 1st Floor), custom Illustrator UI menus, and 4K cinematic IntroSequence.mp4.",
      "Core Hook & 3-Mode Wheelchair Physics: Weighted tank-drive inertia forcing players to choose between looking forward to steer or looking back to survive—with Realistic arm-swing, Semi-Realistic pull, and Accessible Dual-Stick modes, plus a Reverse-Gaze Jumpscare Penalty.",
      "Quantum-Observation AI ('The Staff'): Freezes and subtly vibrates with a low-frequency hum inside the VR camera frustum while its pendulum stethoscope swings; stalks with wet footsteps when unobserved or during blackouts, speaking slowed reversed English ('tneitaP ,ereh kcab emoC') with microphone noise detection.",
      "Non-Euclidean Object Permanence & Zero-HUD Sanity: Hallways vanish into solid brick walls or 'The Void' black fog behind your back (acting as internal Geometry Shift level checkpoints from Phase 1 Elevator Admission to Phase 2 Doctor Pursuit and 'The Rainbow Room' surreal safe zone), paired with X-Ray code, fuse, and keypad puzzles."
    ],
    "technicalDeepDive": "Solved VR simulator sickness and walk-up onboarding by anchoring the player's physical seated posture to an in-game wheelchair chassis with intentional rotational inertia and three selectable propulsion schemes (6-DOF virtual wheel grab tank drive, pull-stroke propulsion, and dual-analogue accessibility). Calibrated OpenXR tracking matrices and physics handle components to ensure heavy objects and wheelchair rim propulsion possessed realistic rotational inertia without physics jitter, maintaining 90fps across live player sessions.",
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
    "id": "state-machine-showcase",
    "slug": "state-machine-showcase",
    "catalogNumber": "06",
    "title": "State Machine Showcase: AI Behaviour Trees, Turrets & Elevator Logic",
    "discipline": "gameplay",
    "engine": "Unreal Engine 5",
    "categoryLabel": "AI Systems & Mechanics",
    "dates": "Jan 2025 – Present",
    "role": "Systems Programmer & Technical Designer",
    "studio": "JoshCorp Interactive / Itch.io",
    "shortDesc": "Playable itch.io build featuring hierarchical finite state machines (HFSM), line-of-sight perception cones, and dynamic physics-driven elevator systems.",
    "summary": "Clean systems architecture demonstration implementing modular AI behavioural states (Patrol, Investigate, Pursue, Search) with clean state transitions.",
    "highlights": [
      "Hierarchical Finite State Machine separating high-level combat tactics from low-level movement",
      "Line-of-sight perception cones with obstacle penetration raycasts",
      "Physics-synchronised moving platforms and interactive multi-floor elevators",
      "Fully published and playable in the browser and Windows standalone on itch.io"
    ],
    "technicalDeepDive": "Engineered cleanly decoupled state interfaces using Blueprint Interfaces and Event Dispatchers. Guarded against state thrashing through minimum dwell timers and memory queues that retain the player's last known location.",
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
    "id": "rand-io",
    "slug": "rand-io",
    "catalogNumber": "07",
    "title": "Rand.io: Procedural Walker Map Generator & Photon Multiplayer",
    "discipline": "gameplay",
    "engine": "Unity / Photon PUN2",
    "categoryLabel": "Procedural Systems & Networking",
    "dates": "Sep 2024 – Nov 2024",
    "role": "Multiplayer Systems Programmer",
    "studio": "Independent Innovation",
    "shortDesc": "A multiplayer roguelike dungeon crawler built on random-walker tile generation algorithms synchronised across networked clients using Photon PUN2.",
    "summary": "Overcame network desync by deterministic seed broadcasting, generating identical labyrinthine dungeon topologies across all peer clients while keeping packet bandwidth minimal.",
    "highlights": [
      "Designed random-walk cellular automata guaranteeing 100% room connectivity",
      "Synchronised procedural dungeon seeds and dynamic chest spawns via Photon PUN2 RPCs",
      "Client-side movement prediction and dead-reckoning smoothing lag spikes",
      "Modular room templates dynamically decorating tiles based on neighbouring wall bitmasks"
    ],
    "technicalDeepDive": "Solved host-client procedural discrepancies by executing tile generation deterministically from an integer seed transferred during room connection. Replaced per-tile RPC synchronisation with compact bit-packed map payloads.",
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
    "id": "baldis-basics-2",
    "slug": "baldis-basics-2",
    "catalogNumber": "08",
    "title": "Baldi's Basics 2 / B.A.L.D.: Indie Horror Mechanics & Interior Lighting",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Indie Horror Game Development",
    "dates": "Nov 2022 – Apr 2023",
    "role": "Gameplay Programmer & Environment Artist",
    "studio": "Independent Innovation",
    "shortDesc": "Complete playable horror remake in UE5 (Bridge of Animations, Logic, and Design): coded enemy tracking, notebook item collections, and tested 400+ lighting runs to optimise Lumen.",
    "summary": "B.A.L.D. represented Joshua's first deep dive into Unreal Engine 5's Blueprint scripting and interior environment design. Created an original school layout, coded full enemy following AI, dynamic stamina exhaustion curves, and notebook collection loops. Benchmarked over 400 lighting setups, overcoming catastrophic Lumen performance drops by replacing point lights with barn-door rectangle lights and selectively managing Nanite geometry.",
    "highlights": [
      "Coded full horror loop: enemy AI tracking, pickup triggers, stamina systems, and dynamic lights",
      "Benchmarked over 400 lighting setups, replacing heavy Lumen point lights with rectangular lights to maintain 60 FPS",
      "Utilised Quixel Megascans with Nanite, mastering workflows of toggling Nanite during static mesh editing",
      "Implemented dynamic post-processing: chromatic aberration, volumetric fog, colour warmth, and lens distortion",
      "Built modular biomes including an abandoned school wing and toxic warehouse section"
    ],
    "technicalDeepDive": "Placing over 400 individual point lights with active Lumen global illumination crippled frame rates below playable thresholds. Solved by replacing point emitters with strategically positioned rectangle lights with widened barn-door angles, ensuring even ambient bounce while reducing shadow map calculations. Fixed enemy spawning reliability through a boolean state machine verified every second, tied directly to collectible triggers.",
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
    "id": "planet-protectors",
    "slug": "planet-protectors",
    "catalogNumber": "09",
    "title": "Planet Protectors: Multi-Sprint Environmental Platformer (MS4007)",
    "discipline": "level-design",
    "engine": "Unity 6 (C#) / Agile Production",
    "categoryLabel": "Collaborative Game Production",
    "dates": "Jan 2025 – Apr 2025",
    "role": "Technical Lead, Co-Producer & Character Concept Artist (74 of 86 Git Commits)",
    "studio": "Team Gaia / UEL (MS4007)",
    "shortDesc": "Collaborative multi-sprint environmental action-platformer where Joshua authored 74 of 86 total repository commits, alongside original character turnarounds for Bonnie, Kiwi, and Haptic.",
    "summary": "Led core engineering, Git repository integration (authoring 74 of the project's 86 total commits), level design, and character concept art (Bonnie, Kiwi, and Haptic model sheets) for an environmental co-op platformer built across iterative sprints.",
    "highlights": [
      "Authored 74 of 86 total Git commits (~86% of codebase commits) as Technical Lead across a multi-disciplinary team",
      "Illustrated original character concept sheets and orthographic turnarounds for protagonists Bonnie, Kiwi, and Haptic",
      "Engineered responsive 2D/2.5D platforming mechanics, environmental hazard triggers, and collectible state managers",
      "Co-led Agile sprint retrospectives, managing merge conflict resolution and milestone build delivery"
    ],
    "technicalDeepDive": "Maintained repository stability across multi-person branches by decoupling player controller state machines from level-specific environmental triggers, enabling level designers and artists to iterate on scenes without breaking core player movement scripts.",
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
    "catalogNumber": "10",
    "title": "PyBall: Algorithmic 2D Physics & Viewport Culling (MS4006 - 78% 1st)",
    "discipline": "gameplay",
    "engine": "Python (SimpleGUI / CodeSkulptor)",
    "categoryLabel": "Core Physics & Algorithmic Optimisation",
    "dates": "Oct 2024 – Dec 2024",
    "role": "Sole Programmer & Physics Engine Architect",
    "studio": "University of East London (MS4006)",
    "shortDesc": "Awarded 78% (1st Class Honours): custom 2D procedural tile-grid survival game programmed from scratch in Python, implementing AABB/circle collision mathematics, vector evasion AI, and off-screen camera frustum culling.",
    "summary": "Built a complete 2D survival and collision simulation in Python without external physics engines for MS4006 Fundamentals of Programming (78% 1st Class Honours). Features a procedural 40×60 green/blue pond tile grid, dynamic camera offset tracking, 75px radius enemy vector evasion, and off-screen viewport culling (`is_within_view`).",
    "highlights": [
      "Awarded 78% (1st Class Honours) for MS4006 Fundamentals of Programming at the University of East London",
      "Programmed custom AABB box-to-box (`intersects`) and circle-to-box (`is_collision`) mathematical collision solvers from scratch",
      "Engineered off-screen camera viewport frustum culling (`is_within_view`) to freeze off-screen entities and preserve 60 FPS",
      "Implemented dynamic enemy vector avoidance (`avoid_player`) within a 75px threat radius and accelerating spawn intervals"
    ],
    "technicalDeepDive": "Implemented a custom camera coordinate transformation pipeline (`camera_offset = [player_x - 400, player_y - 300]`) across a 40×60 procedural tile dictionary. Optimised per-frame update loops via `is_within_view(circle, camera_offset, 800, 600)` so only visible enemies compute Euclidean distance avoidance and pond boundary reflection.",
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
    "id": "project-isla",
    "slug": "project-isla",
    "catalogNumber": "11",
    "title": "Project Isla: Procedural Perlin Noise Island Generation",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Procedural Worlds & Shaders",
    "dates": "Jan 2023 – Feb 2023",
    "role": "Procedural Technical Designer",
    "studio": "Independent Innovation",
    "shortDesc": "An Unreal Engine survival game featuring infinite unique islands procedurally generated using Perlin noise algorithms, the Fast Noise plugin, Geometry Script, and sigmoid fall-off maths.",
    "summary": "Project Isla was a self-taught technical breakthrough in procedural generation. Joshua learned the fundamentals of Perlin noise and dynamic actor mesh editing to build an island generation pipeline in Unreal Engine 5. Sourced from multi-octave 2D noise passes and shaped by a custom sigmoid radial fall-off mathematical curve, the system produces believable landmasses that terminate naturally into ocean water bodies with procedurally scattered vegetation.",
    "highlights": [
      "Generated realistic island landmasses dynamically utilising 2D multi-octave Perlin noise and fall-off maths",
      "Formulated custom sigmoid radial fall-off equation in Desmos: f(x) = x^a / (x^a + (1-x)^a) to enforce natural coastlines",
      "Leveraged Unreal Geometry Script to modify static mesh topology and vertex heights at runtime",
      "Built parameter tuning dashboard to control island altitude, coastline steepness, and smoothing in real time",
      "Implemented procedural tree distribution checking slope angles and surface normals alongside swimming systems"
    ],
    "technicalDeepDive": "Raw Perlin noise produces continuous unbounded height fields that bleed off screen edges. Formulated a radial sigmoid dampening curve in Desmos: f(x) = x^a / (x^a + (1-x)^a), multiplying terrain heights by distance from the centre to clamp shorelines to sea level. Utilised the Fast Noise plugin with dynamic static mesh actors, updating geometry buffers at runtime to create entirely new island layouts on every game session.",
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
    "id": "daydream",
    "slug": "daydream",
    "catalogNumber": "12",
    "title": "Project Daydream / Daydream Believer (MS4035 - 72% 1st)",
    "discipline": "unreal",
    "engine": "Unreal Engine 5 (MS4035)",
    "categoryLabel": "Photogrammetry & Neurodivergent Experience",
    "dates": "Jul 2022 – Apr 2025",
    "role": "Lead Creator, Technical Artist & Composer",
    "studio": "JoshCorp Interactive / UEL (MS4035)",
    "shortDesc": "A dual-phase journey from a 1:1 photogrammetric reconstruction of a secondary school campus to an evocative ADHD hyperfocus experiential simulation (72% 1st Class Honours) with custom distortion shaders and manual rhythmic locomotion.",
    "summary": "Project Daydream began as a foundational technical undertaking in 1:1 architectural digital twinning (extracting photogrammetry via RenderDoc, baking 2,377 texture maps in Blender, and realigning world axes). It was subsequently revisited and elevated in Term 2 (MS4035 — 72% 1st Class Honours) into 'Daydream Believer'—a research-grounded neurodivergent experience translating ADHD sensory overstimulation into tangible gameplay mechanics with radial distortion shaders, rhythmic keystroke locomotion, and 15 layered audio stems.",
    "highlights": [
      "Awarded 72% (1st Class Honours) in MS4035 Game Prototyping at the University of East London",
      "Extracted 3D photogrammetric architectural scans via RenderDoc, consolidating 2,377 UV maps in Blender",
      "Solved map-wide rotational offset by calculating a precise 23.999° world coordinate realignment matrix",
      "Revisited in MS4035: engineered custom post-process radial blur and chromatic distortion shaders to simulate hyperfocus tunnel vision",
      "Designed manual rhythmic locomotion state machine requiring alternating inputs to simulate cognitive exertion",
      "Composed 15 original music tracks in BandLab and integrated neural vocal modulation for psychological monologue cues"
    ],
    "technicalDeepDive": "Phase 1 solved severe photogrammetric non-manifold mesh defects by wrapping geometry in optimised bounding collision primitives and aligning world matrices to an exact 23.999° tilt. Phase 2 engineered a custom HLSL screen-distortion material that contracts UV coordinates based on an Attention State scalar, coupled with an interactive step-by-step locomotion mechanic that destabilises camera roll if rhythmic timing falters, mechanically simulating executive dysfunction.",
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
    "featured": true,
    "splitPhases": [
      {
        "id": "original",
        "phaseLabel": "Phase 1: Original (2022–2023)",
        "phaseBadge": "1:1 Digital Twin",
        "phaseSubtitle": "1:1 Architectural Photogrammetry & Spatial Reconstruction",
        "title": "Project Daydream: 1:1 Secondary School Architectural Photogrammetry",
        "summary": "An exhaustive 1:1 architectural digital twin of a real-world secondary school campus in Unreal Engine 5. Sourced from Google 3D photogrammetry data extracted via RenderDoc, the project required baking 2,377 separate UV coordinate meshes in Blender and upscaling all textures via Topaz Gigapixel AI to achieve photorealistic architectural fidelity.",
        "highlights": [
          "Extracted full 3D photogrammetry meshes via RenderDoc and baked 2,377 distinct UV maps in Blender",
          "Calculated precision rotational alignment: compensated for an exact 23.999° camera tilt to align with world axes",
          "Engineered complex multi-level collision meshes using invisible cube tracing around irregular photogrammetric walls",
          "Upscaled hundreds of low-resolution satellite textures into 4K PBR-ready surfaces using Topaz Gigapixel AI",
          "Built full day/night Lumen volumetric lighting and custom atmospheric fog systems"
        ],
        "technicalDeepDive": "Overcame photogrammetric mesh fragmentation and severe rotation misalignment (23.999° offset) by constructing a programmatic transformation pipeline in Blender before engine import. Collisions for jagged non-manifold meshes were engineered by tracing simplified bounding collision primitives, achieving smooth 60 FPS traversal.",
        "gallery": [
          "/images/daydream.jpg",
          "/images/daydream_00_01_05.jpg",
          "/images/daydream_00_01_30.jpg"
        ],
        "video": "/media/daydream_preview.mp4"
      },
      {
        "id": "revisited",
        "phaseLabel": "Phase 2: Revisited (MS4035 — 72% 1st)",
        "phaseBadge": "72% 1st Class Honours",
        "phaseSubtitle": "Daydream Believer: ADHD Hyperfocus Simulation & Locomotion",
        "title": "Daydream Believer: ADHD Hyperbolic Experience & Locomotion",
        "summary": "Transformed the photogrammetric school shell into an evocative, research-grounded neurodivergent simulation for MS4035 (72% 1st Class Honours). Translates the internal psychological experience of ADHD into tactile game systems: hyperbolic radial focus distortion, tunnel vision shaders, rhythmic step-by-step movement mechanics, and custom audio layers that react dynamically to sensory overstimulation.",
        "highlights": [
          "Developed custom post-processing radial blur and chromatic distortion shaders to simulate hyperfocus tunnel vision",
          "Engineered rhythm-based manual locomotion mechanic requiring players to alternate keystrokes to simulate cognitive exertion",
          "Dynamic environment perimeter fences that glow crimson during sensory overload and dissolve upon regaining focus",
          "Curated and layered 15+ individual audio stems in BandLab with dynamic volume ducking mapped to player anxiety states",
          "Integrated neural vocal modulation for psychological inner-monologue dialogue cues"
        ],
        "technicalDeepDive": "Engineered a custom HLSL post-process material in Unreal Engine that dynamically contracts screen UVs towards the centre based on a continuous Attention Float parameter. Combined this with a step-by-step locomotion state machine that penalises errant rhythm with disorientation camera sway, mechanically translating the executive dysfunction of ADHD into immersive gameplay.",
        "gallery": [
          "/images/daydream_revisited.jpg",
          "/images/test_daydream_52s.jpg"
        ],
        "video": "/media/daydream_preview.mp4"
      }
    ]
  },
  {
    "id": "dear-hiring-manager-gdd",
    "slug": "dear-hiring-manager",
    "catalogNumber": "13",
    "title": "Dear, Hiring Manager: Satirical Life-Sim & Resource Management Game Bible (MS5022)",
    "discipline": "narrative",
    "engine": "Microsoft Visio / Game Bible Architecture",
    "categoryLabel": "Systems Design & Satirical Game Bible",
    "dates": "Jan 2026 – May 2026",
    "role": "Lead Systems Designer & Narrative Architect",
    "studio": "JoshCorp Interactive / UEL (MS5022)",
    "shortDesc": "A top-down isometric life-simulation and resource management Game Bible satirising the modern dystopian job market through weekly turn-based loops, 'Ghost Job' RNG, and Visio decision trees.",
    "summary": "Developed for MS5022 Portfolio 1: a comprehensive Game Bible for a satirical life-simulation and resource management game inspired by BitLife and Monopoly. Players balance dwindling finances, passively inflating cost of living, absurd job requirements, and a dynamic Stress meter along the core loop (Hustle → Money → Skill → Interview → Luck → Promotion) from gritty side-hustles to the CEO's desk.",
    "highlights": [
      "Engineered the weekly turn-based progression loop (Hustle = Money → Skill → Interview → Luck = Job) with passively inflating rent and food costs",
      "Designed systemic 'Ghost Jobs' (20% baseline probability that any applied role is fake), 'Networking Events' that permanently buff baseline RNG, and weekly Event Cards ('Nepotism buff', 'AI replaced your department')",
      "Balanced a dynamic 'Stress' feedback loop where job rejections slow skill acquisition and penalise interview RNG unless offset by costly holidays",
      "Plotted complete player decision-tree flowcharts in Microsoft Visio to identify and eliminate mechanical dead-ends early"
    ],
    "technicalDeepDive": "Mapped interconnected economic and psychological state variables across Microsoft Visio flowcharts to prevent runaway snowballing or soft-locks. Balanced the 20% Ghost Job probability and passive Cost of Living inflation curve against Networking RNG buffs so players experience intentional ludonarrative tension without mathematical impossibility.",
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
    "title": "Far Cry 5 DLC: 'Faith Over Fear' Screenplay & Narrative Prequel (MS5029 - 78% 1st)",
    "discipline": "narrative",
    "engine": "Industry Screenplay & Mocap Format",
    "categoryLabel": "AAA Screenplay & Cinematics",
    "dates": "Feb 2026 – May 2026",
    "role": "Lead Narrative Writer & Cinematic Dramatist",
    "studio": "Ubisoft IP Adaptation / UEL (MS5029)",
    "shortDesc": "Awarded 78% (1st Class Honours): professional AAA prequel screenplay exploring the calculated indoctrination of Rachel Jessop ('Faith Seed') through spatial environmental storytelling and restrained psychological subtext.",
    "summary": "A masterclass in character entrapment, replacing bombastic villain monologues with grounded paternal stillness, indexical rain/mud metaphors, and parenthetical actor direction.",
    "highlights": [
      "Awarded 78% (1st Class Honours) in MS5029 Storytelling for Games at the University of East London",
      "Formatted strictly to industry screenplay and performance capture volume standards",
      "Replaced traditional exposition with subtextual spatial dominance and micro-gestures",
      "Deep research into cult psychology, coercion cycles, and institutional vulnerability",
      "Table-read iterated pacing that earned commendations for psychological authenticity"
    ],
    "technicalDeepDive": "Designed screenplay scenes with spatial blocking maps for motion capture stages. Directorial annotations specify camera lenses, focal depth shifts, and actor proximity vectors to maximise physical subtext before dialogue is delivered.",
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
    "title": "Misc Games: Concept Archives & Systems Design Portfolio",
    "discipline": "level-design",
    "engine": "Various Engines & Design Formats",
    "categoryLabel": "Systems Design & Archives",
    "dates": "2022 – Present",
    "role": "Systems Designer & Researcher",
    "studio": "Independent Innovation",
    "shortDesc": "Comprehensive archive of experimental mechanics, mechanical pitch decks, tabletop balancing sheets, and prototype design systems developed across Joshua's academic and personal journey.",
    "summary": "Broad collection of mechanics research and game systems documentation, illustrating continuous creative exploration across genres from strategy board game maths to VR ergonomics.",
    "highlights": [
      "Documented 10+ mechanics prototypes spanning economy balancing, puzzle gating, and progression curves",
      "Authored interactive design pitches with mathematical progression models in Excel",
      "Rapid paper-prototyping documentation validating core player loops prior to code implementation",
      "Extensive technical analysis of classic arcade and contemporary indie game feel"
    ],
    "technicalDeepDive": "Systematised progression balancing formulas across RPG loot and encounter curves, modelling player level-up velocity against enemy health scaling using exponential decay functions to maintain flow state.",
    "image": "/images/misc_games.jpg",
    "gallery": [
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
    id: "all",
    label: "All Games",
    count: ALL_PROJECTS.length
  },
  {
    id: "unreal",
    label: "Unreal Engine 5",
    count: ALL_PROJECTS.filter((p) => p.engine.includes('Unreal') || p.engine.includes('UE5')).length
  },
  {
    id: "playable",
    label: "Playable Builds (Itch/Demo)",
    count: ALL_PROJECTS.filter((p) => Boolean(p.links && (p.links.itch || p.links.demo))).length
  },
  {
    id: "narrative",
    label: "Narrative & Dialogue",
    count: ALL_PROJECTS.filter((p) => p.discipline === 'narrative').length
  }
];

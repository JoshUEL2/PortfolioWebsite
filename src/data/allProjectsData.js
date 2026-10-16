export const ALL_PROJECTS = [
  {
    "id": "rastacats",
    "slug": "rastacats",
    "catalogNumber": "01",
    "title": "Rastacats / Rastacats Remastered",
    "discipline": "gameplay",
    "engine": "Unreal Engine 5.7",
    "categoryLabel": "High-Speed Physics & Cylindrical Locomotion",
    "dates": "Oct 2025 \u2013 May 2026",
    "role": "Lead Gameplay Engineer & Technical Artist",
    "studio": "JoshCorp Interactive / UEL (MS5027 & MS5022)",
    "shortDesc": "Awarded 92% (1st Class Honours) for high-octane 360\u00b0 cylindrical pipe racing in Term 1, followed by a complete Term 2 architectural remaster featuring curved-world shaders, decal projection math, and 65% CPU tick optimization.",
    "summary": "Dual-phase arcade racing project exploring cylindrical locomotion physics and modern engine optimization. Term 1 established custom polar gravity and high-stakes Overspeed mechanics (92% grade). Term 2 introduced an Animal Crossing spherical vertex shader, Blueprint Event Tick decal projection along curved surfaces, coin actor pooling, and AI race competition.",
    "highlights": [
      "Awarded 92% (1st Class Honours) for MS5027 Gameplay Prototyping at UEL",
      "Engineered bespoke 360\u00b0 rotational gravity across tubular spline meshes beyond standard CharacterMovement",
      "Term 2 Remaster: Animal Crossing-style curved-world vertex displacement shader with dynamic rolling horizon",
      "Blueprint Event Tick decal projection math calculating surface tangents along curved normals to eliminate shearing",
      "65% CPU cycle reduction achieved by replacing per-frame coin ticking with pooled Instanced Static Mesh managers",
      "Secondary procedural animation featuring velocity-driven skeletal bone swaying on character ears and tails"
    ],
    "technicalDeepDive": "Standard UE5 CharacterMovement components assume planar down-vectors and fail when navigating inverted tubular geometry. Solved in Phase 1 by calculating polar coordinates from spline cross-sections, projecting dynamic artificial gravity directly toward the pipe spine. In Phase 2, countered visual vertex displacement shearing by computing real-time decal projection matrices in Event Tick, while slashing frame times by pooling coin actors into distance-culled instanced meshes.",
    "image": "/images/rastacats.jpg",
    "video": "/videos/rastacats_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": "https://joshej.itch.io/rastacats",
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
        "phaseSubtitle": "360\u00b0 Cylindrical Pipe Locomotion & Polar Gravity Physics",
        "title": "Rastacats: High-Velocity 360\u00b0 Pipe Bobsled Racing",
        "summary": "Awarded 92% (1st Class Honours) in MS5027 Gameplay Prototyping at the University of East London. Features high-velocity 360-degree pipe traversal where players bank along cylindrical surfaces at over 200 km/h, dodging dynamic obstacles, collecting coins, and managing a high-stakes Overspeed mechanic that rewards split-second reflexes.",
        "highlights": [
          "Custom polar coordinate gravity system allowing seamless 360-degree cylindrical inner-pipe traversal",
          "Dynamic Overspeed risk-reward gauge: maintaining maximum speed unlocks coin multipliers but heightens collision penalty",
          "Procedural obstacle placement algorithm generating randomized spike hazards and jump pads",
          "High-performance arcade handling with immediate response physics tuned for competitive time-trials"
        ],
        "technicalDeepDive": "Calculated surface normals across continuous spline meshes to project artificial inward gravitational vectors, allowing the bobsled pawn to maintain adhesion across 360 degrees of rotation without falling out of the tube geometry. Tuned velocity damping and rotational friction to eliminate disorientation while preserving extreme speed.",
        "gallery": [
          "/images/rastacats.jpg",
          "/images/rasta_cw1_00_01_30.jpg"
        ],
        "video": "/videos/rastacats_preview.mp4"
      },
      {
        "id": "revisited",
        "phaseLabel": "Phase 2: Revisited / Remaster (Term 2 / MS5022)",
        "phaseBadge": "Remastered Architecture",
        "phaseSubtitle": "Curved-World Shader, Decal Math & CPU Tick Optimization",
        "title": "Rastacats Remastered: Spherical Vertex Horizon & Engine Polish",
        "summary": "A ground-up architectural overhaul for the MS5022 Portfolio module. Rebuilt rendering pipelines with an Animal Crossing-inspired spherical vertex displacement shader, engineered Blueprint Event Tick decal projection math, eliminated CPU overhead through actor pooling, added velocity-driven bone swaying, AI Race Mode competitors, and blizzard particle weather.",
        "highlights": [
          "Animal Crossing-inspired curved-world vertex displacement shader creating a dramatic rolling horizon effect",
          "Replaced per-frame actor ticking with object pooling for hundreds of coins, slashing CPU cycle usage by 65%",
          "Engineered Blueprint Event Tick decal math to accurately project feline graffiti and skid marks along curved mesh normals",
          "Implemented secondary animation with velocity-driven bone swaying on character tails and ears",
          "Added competitive AI Race Mode with dynamic rubber-banding and atmospheric blizzard weather simulation"
        ],
        "technicalDeepDive": "Engineered world-position-offset vertex shader math: P_curved = P_world - up * (distance / curveFactor)^2. Overcame decal projection shearing on curved meshes by calculating local surface tangent frames in Blueprint tick. Optimized coin performance by replacing individual ticking actors with an Instanced Static Mesh Component manager with distance-based cull volumes.",
        "gallery": [
          "/images/rastacats_revisited.jpg",
          "/images/rasta_cw2_00_01_15.jpg",
          "/images/rasta_cw2_00_01_30.jpg"
        ],
        "video": "/videos/rastacats_preview.mp4"
      }
    ]
  },
  {
    "id": "rem-ue5",
    "slug": "rem",
    "catalogNumber": "02",
    "title": "REM: Stylized Watercolor Post-Processing & Ludonarrative",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Technical Art & Custom Shaders",
    "dates": "Jan 2026 \u2013 May 2026",
    "role": "Lead Technical Artist & Creative Director",
    "studio": "JoshCorp Interactive / UEL",
    "shortDesc": "An expressive interactive experience rendered with a bespoke multi-directional Kuwahara watercolor post-process filter and dynamic World Position Offset body morphing.",
    "summary": "Short-form interactive narrative exploring psychological isolation and identity dissolution through real-time painterly rendering and dynamic vertex displacement in Unreal Engine 5.",
    "highlights": [
      "Engineered custom multi-directional Kuwahara filtering balancing painterly aesthetics with crisp gameplay legibility",
      "Custom World Position Offset (WPO) morphing body for the protagonist built from scratch without pre-made asset packs",
      "Custom PBR textures authored in Substance Painter and 3D environment kits rigged in Blender",
      "Indexical environmental storytelling where ambient lighting and post-process parameters respond to player emotional state"
    ],
    "technicalDeepDive": "Faced with achieving an expressive watercolor aesthetic without muddying silhouette clarity or tanking framerates, engineered a custom multi-directional Kuwahara filtering post-process volume in HLSL/UE5 Material Graph. Balanced edge-detection kernels with color averaging passes to preserve character silhouette boundaries at 60fps+.",
    "image": "/images/rem_cover.jpg",
    "video": "/media/rem_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2/REM",
      "demo": "https://github.com/JoshUEL2/REM/releases/latest",
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
    "dates": "Jan 2025 \u2013 Apr 2025",
    "role": "Lead Level Designer & Systems Architect",
    "studio": "JoshCorp / UEL (MS5028)",
    "shortDesc": "Awarded 72% (1st Class Honours) for an asymmetrical co-op FPS level design. Supported by a comprehensive 40-page Game Design Document and full video walkthrough.",
    "summary": "Complex asymmetrical level architecture requiring complementary player roles (Hacker, Assault, Engineer) to breach a high-security research facility, balancing pacing and encounter tension.",
    "highlights": [
      "Awarded 72% (1st Class Honours) for MS5028 Level Design at UEL",
      "Authored professional 40-page Game Design Document with flow diagrams and beat charts",
      "Engineered sightlines, choke points, and vertical flanking routes to balance asymmetrical roles",
      "Produced comprehensive video commentary and interactive spatial walkthrough"
    ],
    "technicalDeepDive": "Balanced encounter pacing using rhythm-tension graphs. Designed modular environmental kits in Blender with clear visual language: yellow conduit cables guide hackers to security nodes, while elevated catwalks provide tactical sightlines for defensive cover.",
    "image": "/images/labraz.jpg",
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
    "title": "The Quarry: Interactive Safeguarding Interrogation",
    "discipline": "narrative",
    "engine": "Twine (Harlowe 3.3 / HTML5 / CSS3)",
    "categoryLabel": "Narrative & Dialogue Systems",
    "dates": "Apr 2026 \u2013 May 2026",
    "role": "Narrative Designer & Dialogue Systems Architect",
    "studio": "University of East London",
    "shortDesc": "A psychological thriller built in Twine exploring manipulation in a single safeguarding consultation room using Jon Ingold's Accept/Reject/Deflect triads and an internal Agitation meter.",
    "summary": "As an NHS clinical psychologist, the player conducts a safeguarding assessment of twelve-year-old Holly after she witnessed the fatal fall of her bully at a local quarry. Holly portrays a traumatized victim, inventing an older boy named 'Ryder'. The interrogation treats dialogue flow with systemic precision: choices directly manipulate a hidden Agitation variable (0-100), balancing pressure against de-escalation to expose contradictions in her alibi and unlock multiple confession endings.",
    "highlights": [
      "Structured upon Jon Ingold's 'Accept / Reject / Deflect' dialogue choice architecture for sparkling momentum",
      "Dynamic hidden 'Agitation' state engine (0-100) that exposes subtext as an active gameplay mechanic",
      "Conversational loops that punish over-aggressive confrontations by causing Holly to shut down or lash out",
      "Pacing and claustrophobic two-person power dynamics inspired by Adolescence (Episode 3)",
      "Fully playable web build with high-resolution 5K x 12K branching node topology flowchart"
    ],
    "technicalDeepDive": "Implemented state machine variable architecture inside Twine Harlowe with custom responsive CSS styling. Scripted branching topologies that track hidden suspect confidence and agitation variables. Overly aggressive inquiries spike Agitation, reverting narrative progress into defensive conversational loops, requiring players to utilize calculated Ingold de-escalation pathways to uncover discrepancies regarding the fictional predator 'Ryder' and reach resolution endings.",
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
    "title": "Delirium: Seated VR Psychological Horror & Wheelchair Physics (MS5021)",
    "discipline": "unreal",
    "engine": "Unreal Engine 5.6 VR (OpenXR)",
    "categoryLabel": "VR Psychological Horror & Locomotion Physics",
    "dates": "Jan 2026 – Jun 2026",
    "role": "Game Designer, GDD/Narrative Author, UI & 4K Intro Sequence Creator",
    "studio": "3J Mad Studios / UEL (MS5021)",
    "funFact": "Selected as the sole Level 5 project to exhibit downstairs alongside final graduating Level 6 games at the Royal Docks Centre for Sustainability, demoed live to over 100 industry visitors.",
    "shortDesc": "First-person seated VR psychological survival horror game in Unreal Engine 5.6 where you awaken in 'The Institute' confined to a physical wheelchair, forced to choose between looking forward to navigate or looking back to freeze quantum-observation 'Staff' entities.",
    "summary": "Developed by 3J Mad Studios (Joshua Johnson, Dhrumil Hirapara, Jose Roberto Gálvez Vargas, Aiden Billingham, Matas Narusis, Jasmine Jilley) for MS5021 Game Studio 2—and selected as the sole Level 5 project to exhibit at the Level 6 Graduation Showcase. Originated from Joshua's 'Mental Hospital Idea' concept notes and full Game Design Document (GDD), combining a 5-minute high-turnover walk-up VR loop, weighted tank-control wheelchair inertia across 3 propulsion modes, Quantum-Observation ('Weeping Angel') AI with K-wire split-face & pendulum-stethoscope body horror, reversed speech & mic-noise detection, non-Euclidean 'Geometry Shift' checkpoints, 'The Void' black-fog sanity feedback, and 'The Rainbow Room' contrast safe zone.",
    "highlights": [
      "Sole Level 5 project chosen to exhibit downstairs alongside final graduating Level 6 games at the Royal Docks Centre for Sustainability (supervised live for 100+ industry visitors).",
      "Originated the 'Mental Hospital Idea' & authored the full GDD, Narrative Template, Brainstorming Bible, Sprint 1–4 Retrospectives, Visio floorplans (modeled on UEL Docklands West Building 1st Floor), custom Illustrator UI menus, and 4K cinematic IntroSequence.mp4.",
      "Core Hook & 3-Mode Wheelchair Physics: Weighted tank-drive inertia forcing players to choose between looking forward to steer or looking back to survive—with Realistic arm-swing, Semi-Realistic pull, and Accessible Dual-Stick modes, plus a Reverse-Gaze Jumpscare Penalty.",
      "Quantum-Observation AI ('The Staff'): Freezes and subtly vibrates with a low-frequency hum inside the VR camera frustum while its pendulum stethoscope swings; stalks with wet footsteps when unobserved or during blackouts, speaking slowed reversed English ('tneitaP ,ereh kcab emoC') with microphone noise detection.",
      "Non-Euclidean Object Permanence & Zero-HUD Sanity: Hallways vanish into solid brick walls or 'The Void' black fog behind your back (acting as internal Geometry Shift level checkpoints from Phase 1 Elevator Admission to Phase 2 Doctor Pursuit and 'The Rainbow Room' surreal safe zone), paired with X-Ray code, fuse, and keypad puzzles."
    ],
    "technicalDeepDive": "Solved VR simulator sickness and walk-up onboarding by anchoring the player's physical seated posture to an in-game wheelchair chassis with intentional rotational inertia and three selectable propulsion schemes (6-DOF virtual wheel grab tank drive, pull-stroke propulsion, and dual-analog accessibility). Calibrated OpenXR tracking matrices and physics handle components to ensure heavy objects and wheelchair rim propulsion possessed realistic rotational inertia without physics jitter, maintaining 90fps across 100+ live player sessions at the Royal Docks exhibition.",
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
      "demo": "https://joshej.itch.io/delirium",
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
    "title": "State Machine Showcase: AI Behavior Trees, Turrets & Elevator Logic",
    "discipline": "gameplay",
    "engine": "Unreal Engine 5",
    "categoryLabel": "AI Systems & Mechanics",
    "dates": "Jan 2025 \u2013 Present",
    "role": "Systems Programmer & Technical Designer",
    "studio": "JoshCorp Interactive / Itch.io",
    "shortDesc": "Playable itch.io build featuring hierarchical finite state machines (HFSM), line-of-sight perception cones, and dynamic physics-driven elevator systems.",
    "summary": "Clean systems architecture demonstration implementing modular AI behavioral states (Patrol, Investigate, Pursue, Search) with clean state transitions.",
    "highlights": [
      "Hierarchical Finite State Machine separating high-level combat tactics from low-level movement",
      "Line-of-sight perception cones with obstacle penetration raycasts",
      "Physics-synchronized moving platforms and interactive multi-floor elevators",
      "Fully published and playable in the browser and Windows standalone on itch.io"
    ],
    "technicalDeepDive": "Engineered cleanly decoupled state interfaces using Blueprint Interfaces and Event Dispatchers. Guarded against state thrashing through minimum dwell timers and memory queues that retain the player's last known location.",
    "image": "/images/state_machine_cover.png",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": "https://joshej.itch.io/state-machine-showcase",
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
    "dates": "Sep 2024 \u2013 Nov 2024",
    "role": "Multiplayer Systems Programmer",
    "studio": "Independent Innovation",
    "shortDesc": "A multiplayer roguelike dungeon crawler built on random-walker tile generation algorithms synchronized across networked clients using Photon PUN2.",
    "summary": "Overcame network desync by deterministic seed broadcasting, generating identical labyrinthine dungeon topologies across all peer clients while keeping packet bandwidth minimal.",
    "highlights": [
      "Designed random-walk cellular automata guaranteeing 100% room connectivity",
      "Synchronized procedural dungeon seeds and dynamic chest spawns via Photon PUN2 RPCs",
      "Client-side movement prediction and dead-reckoning smoothing lag spikes",
      "Modular room templates dynamically decorating tiles based on neighboring wall bitmasks"
    ],
    "technicalDeepDive": "Solved host-client procedural discrepancies by executing tile generation deterministically from an integer seed transferred during room connection. Replaced per-tile RPC synchronization with compact bit-packed map payloads.",
    "image": "/images/rand_io.jpg",
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
    "catalogNumber": "08",
    "title": "Baldi's Basics 2 / B.A.L.D.: Indie Horror Mechanics & Interior Lighting",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Indie Horror Game Development",
    "dates": "Nov 2022 \u2013 Apr 2023",
    "role": "Gameplay Programmer & Environment Artist",
    "studio": "Independent Innovation",
    "shortDesc": "Complete playable horror remake in UE5 (Bridge of Animations, Logic, and Design): coded enemy tracking, notebook item collections, and tested 400+ lighting runs to optimize Lumen.",
    "summary": "B.A.L.D. represented Joshua's first deep dive into Unreal Engine 5's Blueprint scripting and interior environment design. Created an original school layout, coded full enemy following AI, dynamic stamina exhaustion curves, and notebook collection loops. Benchmarked over 400 lighting setups, overcoming catastrophic Lumen performance drops by replacing point lights with barn-door rectangle lights and selectively managing Nanite geometry.",
    "highlights": [
      "Coded full horror loop: enemy AI tracking, pickup triggers, stamina systems, and dynamic lights",
      "Benchmarked over 400 lighting setups, replacing heavy Lumen point lights with rectangular lights to maintain 60 FPS",
      "Utilized Quixel Megascans with Nanite, mastering workflows of toggling Nanite during static mesh editing",
      "Implemented dynamic post-processing: chromatic aberration, volumetric fog, color warmth, and lens distortion",
      "Built modular biomes including an abandoned school wing and toxic warehouse section"
    ],
    "technicalDeepDive": "Placing over 400 individual point lights with active Lumen global illumination crippled frame rates below playable thresholds. Solved by replacing point emitters with strategically positioned rectangle lights with widened barn-door angles, ensuring even ambient bounce while reducing shadow map calculations. Fixed enemy spawning reliability through a boolean state machine verified every second, tied directly to collectible triggers.",
    "image": "/images/baldis_basics.jpg",
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
    "title": "Planet Protectors: Multi-Sprint Environmental Co-Op (MS4007)",
    "discipline": "level-design",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Collaborative Game Production",
    "dates": "Jan 2025 \u2013 Apr 2025",
    "role": "Co-Lead Producer & Level Designer",
    "studio": "Team Gaia / UEL (MS4007)",
    "shortDesc": "Collaborative multi-sprint environmental cleanup game built under Agile frameworks, featuring procedural trash collection, recycling mechanics, and team task management.",
    "summary": "Led level design and production sprints for an educational co-op title teaching recycling ecology, managing Jira sprints and coordinating asset pipelines between artists and coders.",
    "highlights": [
      "Co-led production sprints delivering on-time milestones across a 5-person multi-disciplinary team",
      "Designed vertical island level layout encouraging split-role cooperative play",
      "Integrated physics-based vacuum and sorting mechanics for multiple waste classifications",
      "Produced comprehensive post-mortem documentation evaluating team velocity and pipeline bottlenecks"
    ],
    "technicalDeepDive": "Optimized multi-actor cleanup interactions using an event-driven broadcast pattern: when waste objects enter player vacuum volumes, physics simulation is disabled and actors are interpolated along cubic Hermite splines into the collection hopper to prevent collision jitter.",
    "image": "/images/planet_protectors.jpg",
    "gallery": [
      "/images/planet_protectors.jpg"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2/PlanetProtectors",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "pyball",
    "slug": "pyball",
    "catalogNumber": "10",
    "title": "PyBall: Algorithmic 2D Physics & Viewport Culling (MS4005)",
    "discipline": "gameplay",
    "engine": "Python / Pygame",
    "categoryLabel": "Core Physics & Algorithmic Optimization",
    "dates": "Oct 2024 \u2013 Dec 2024",
    "role": "Sole Programmer & Physics Engine Architect",
    "studio": "University of East London (MS4005)",
    "shortDesc": "Custom 2D physics engine programmed from scratch in Python, implementing continuous impulse collision response, spatial hash grid partitioning, and off-screen viewport culling.",
    "summary": "Built a complete 2D ball physics simulation without third-party physics libraries, demonstrating foundational mechanics: impulse-momentum theorem, circle-circle elastic collisions, and sub-frame delta time integration.",
    "highlights": [
      "Authored custom 2D collision detection and resolution without external physics frameworks",
      "Implemented spatial hash grid partitioning reducing collision checks from O(N^2) to O(N)",
      "Engineered off-screen viewport frustum culling maintaining a rock-solid 144 FPS with 500+ dynamic bodies",
      "Built interactive debugging overlay rendering velocity vectors, normal reflections, and grid cells"
    ],
    "technicalDeepDive": "Derived elastic collision response using the impulse-momentum theorem: J = -(1 + e) * (v_rel . n) / (1/m1 + 1/m2). Eliminated ball tunneling through high-velocity objects via multi-step sub-frame Verlet integration and swept-circle collision checks.",
    "image": "/images/pyball.jpg",
    "gallery": [
      "/images/pyball.jpg"
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
    "id": "project-isla",
    "slug": "project-isla",
    "catalogNumber": "11",
    "title": "Project Isla: Procedural Perlin Noise Island Generation",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Procedural Worlds & Shaders",
    "dates": "Jan 2023 \u2013 Feb 2023",
    "role": "Procedural Technical Designer",
    "studio": "Independent Innovation",
    "shortDesc": "An Unreal Engine survival game featuring infinite unique islands procedurally generated using Perlin noise algorithms, the Fast Noise plugin, Geometry Script, and sigmoid fall-off math.",
    "summary": "Project Isla was a self-taught technical breakthrough in procedural generation. Joshua learned the fundamentals of Perlin noise and dynamic actor mesh editing to build an island generation pipeline in Unreal Engine 5. Sourced from multi-octave 2D noise passes and shaped by a custom sigmoid radial fall-off mathematical curve, the system produces believable landmasses that terminate naturally into ocean water bodies with procedurally scattered vegetation.",
    "highlights": [
      "Generated realistic island landmasses dynamically utilizing 2D multi-octave Perlin noise and fall-off math",
      "Formulated custom sigmoid radial fall-off equation in Desmos: f(x) = x^a / (x^a + (1-x)^a) to enforce natural coastlines",
      "Leveraged Unreal Geometry Script to modify static mesh topology and vertex heights at runtime",
      "Built parameter tuning dashboard to control island altitude, coastline steepness, and smoothing in real time",
      "Implemented procedural tree distribution checking slope angles and surface normals alongside swimming systems"
    ],
    "technicalDeepDive": "Raw Perlin noise produces continuous unbounded height fields that bleed off screen edges. Formulated a radial sigmoid dampening curve in Desmos: f(x) = x^a / (x^a + (1-x)^a), multiplying terrain heights by distance from center to clamp shorelines to sea level. Utilized the Fast Noise plugin with dynamic static mesh actors, updating geometry buffers at runtime to create entirely new island layouts on every game session.",
    "image": "/images/project_isla.jpg",
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
    "title": "Project Daydream / Daydream Believer",
    "discipline": "unreal",
    "engine": "Unreal Engine 5 (MS4035)",
    "categoryLabel": "Photogrammetry & Neurodivergent Experience",
    "dates": "Jul 2022 \u2013 Apr 2025",
    "role": "Lead Creator, Technical Artist & Composer",
    "studio": "JoshCorp Interactive / UEL (MS4035)",
    "shortDesc": "A dual-phase journey from a 1:1 photogrammetric reconstruction of a secondary school campus to an evocative ADHD hyperfocus experiential simulation with custom distortion shaders and manual rhythmic locomotion.",
    "summary": "Project Daydream began as a foundational technical undertaking in 1:1 architectural digital twinning (extracting photogrammetry via RenderDoc, baking 2,377 texture maps in Blender, and realigning world axes). It was subsequently revisited and elevated in Term 2 (MS4035) into 'Daydream Believer'\u2014a research-grounded neurodivergent experience translating ADHD sensory overstimulation into tangible gameplay mechanics with radial distortion shaders, rhythmic keystroke locomotion, and 15 layered audio stems.",
    "highlights": [
      "Extracted 3D photogrammetric architectural scans via RenderDoc, consolidating 2,377 UV maps in Blender",
      "Solved map-wide rotational offset by calculating a precise 23.999\u00b0 world coordinate realignment matrix",
      "Revisited in MS4035: engineered custom post-process radial blur and chromatic distortion shaders to simulate hyperfocus tunnel vision",
      "Designed manual rhythmic locomotion state machine requiring alternating inputs to simulate cognitive exertion",
      "Dynamic sensory overload perimeter barriers that ignite in crimson during overwhelm and dissolve upon regaining focus",
      "Composed 15 original music tracks in BandLab and integrated ElevenLabs neural vocal modulation for psychological monologue cues"
    ],
    "technicalDeepDive": "Phase 1 solved severe photogrammetric non-manifold mesh defects by wrapping geometry in optimized bounding collision primitives and aligning world matrices to an exact 23.999\u00b0 tilt. Phase 2 engineered a custom HLSL screen-distortion material that contracts UV coordinates based on an Attention State scalar, coupled with an interactive step-by-step locomotion mechanic that destabilizes camera roll if rhythmic timing falters, mechanically simulating executive dysfunction.",
    "image": "/images/daydream.jpg",
    "video": "/videos/daydream_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": true,
    "splitPhases": [
      {
        "id": "original",
        "phaseLabel": "Phase 1: Original (Term 1 / 2022)",
        "phaseBadge": "1:1 Digital Twin",
        "phaseSubtitle": "1:1 Architectural Photogrammetry & Spatial Reconstruction",
        "title": "Project Daydream: 1:1 Secondary School Architectural Photogrammetry",
        "summary": "An exhaustive 1:1 architectural digital twin of a real-world secondary school campus in Unreal Engine 5. Sourced from Google 3D photogrammetry data extracted via RenderDoc, the project required baking 2,377 separate UV coordinate meshes in Blender and upscaling all textures via Topaz Gigapixel AI to achieve photorealistic architectural fidelity.",
        "highlights": [
          "Extracted full 3D photogrammetry meshes via RenderDoc and baked 2,377 distinct UV maps in Blender",
          "Calculated precision rotational alignment: compensated for an exact 23.999\u00b0 camera tilt to align with world axes",
          "Engineered complex multi-level collision meshes using invisible cube tracing around irregular photogrammetric walls",
          "Upscaled hundreds of low-resolution satellite textures into 4K PBR-ready surfaces using Topaz Gigapixel AI",
          "Built full day/night Lumen volumetric lighting and custom atmospheric fog systems"
        ],
        "technicalDeepDive": "Overcame photogrammetric mesh fragmentation and severe rotation misalignment (23.999\u00b0 offset) by constructing a programmatic transformation pipeline in Blender before engine import. Collisions for jagged non-manifold meshes were engineered by tracing simplified bounding collision primitives, achieving smooth 60 FPS traversal.",
        "gallery": [
          "/images/daydream.jpg",
          "/images/daydream_00_01_05.jpg",
          "/images/daydream_00_01_30.jpg"
        ],
        "video": "/videos/daydream_preview.mp4"
      },
      {
        "id": "revisited",
        "phaseLabel": "Phase 2: Revisited (Term 2 / MS4035)",
        "phaseBadge": "Neurodivergent Experience",
        "phaseSubtitle": "Daydream Believer: ADHD Hyperfocus Simulation & Locomotion",
        "title": "Daydream Believer: ADHD Hyperbolic Experience & Locomotion",
        "summary": "Transformed the photogrammetric school shell into an evocative, research-grounded neurodivergent simulation. Translates the internal psychological experience of ADHD into tactile game systems: hyperbolic radial focus distortion, tunnel vision shaders, rhythmic step-by-step movement mechanics, and custom audio layers that react dynamically to sensory overstimulation.",
        "highlights": [
          "Developed custom post-processing radial blur and chromatic distortion shaders to simulate hyperfocus tunnel vision",
          "Engineered rhythm-based manual locomotion mechanic requiring players to alternate keystrokes to simulate cognitive exertion",
          "Dynamic environment perimeter fences that glow crimson during sensory overload and dissolve upon regaining focus",
          "Curated and layered 15+ individual audio stems in BandLab with dynamic volume ducking mapped to player anxiety states",
          "Integrated ElevenLabs neural vocal modulation for psychological inner-monologue dialogue cues"
        ],
        "technicalDeepDive": "Engineered a custom HLSL post-process material in Unreal Engine that dynamically contracts screen UVs towards center based on a continuous Attention Float parameter. Combined this with a step-by-step locomotion state machine that penalizes errant rhythm with disorientation camera sway, mechanically translating the executive dysfunction of ADHD into immersive gameplay.",
        "gallery": [
          "/images/daydream_revisited.jpg",
          "/images/test_daydream_52s.jpg"
        ],
        "video": "/videos/daydream_preview.mp4"
      }
    ]
  },
  {
    "id": "global-game-jam-2026",
    "slug": "ggj-2026",
    "catalogNumber": "13",
    "title": "Global Game Jam 2026 @ Goldsmiths: 48-Hour Rapid Prototyping",
    "discipline": "unreal",
    "engine": "Unity / Unreal Engine",
    "categoryLabel": "Rapid Prototyping & Game Jam",
    "dates": "Jan 2026 \u2013 Feb 2026",
    "role": "Rapid Prototyper & Gameplay Designer",
    "studio": "Goldsmiths / Game Dev Local (GDL)",
    "shortDesc": "Shipped a complete playable game from scratch over a 48-hour development sprint at the UK's premier game jam location at Goldsmiths, collaborating with Game Dev Local (GDL).",
    "summary": "Rapidly iterated core mechanics within the first 12 hours, locking scope to deliver a polished, bug-free playtestable build on schedule.",
    "highlights": [
      "Conceptualized, developed, and delivered a complete playable game in 48 hours",
      "Collaborated within a cross-disciplinary on-site development team at the UK's #1 jam site",
      "Delivered playable build for live Sunday evening playtest showcase with zero fatal bugs",
      "Scope management under severe time constraints"
    ],
    "technicalDeepDive": "Triaged feature backlog using MoSCoW prioritization. Built mechanic prototypes with blockout geometry within the first 6 hours, freezing mechanics at hour 24 to dedicate remaining time entirely to game feel, audio mixing, and bug remediation.",
    "image": "/images/ggj_2026.jpg",
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
    "catalogNumber": "14",
    "title": "Dear, Hiring Manager: Satirical Mobile Systems GDD & Screenplay",
    "discipline": "narrative",
    "engine": "Figma / Twine / Google Docs Format",
    "categoryLabel": "Mobile Systems & Satirical Narrative",
    "dates": "Apr 2026 \u2013 May 2026",
    "role": "Systems Designer & Satirical Writer",
    "studio": "Independent Innovation / UEL",
    "shortDesc": "A biting satirical critique of corporate hiring culture, packaged as a complete mobile game design document and narrative script with UI wireframes and gacha economy loops.",
    "summary": "Deconstructs corporate employment bureaucracy into mobile game monetization mechanics: Cover Letter drafting minigames, Applicant Tracking System (ATS) keyword roulette, and LinkedIn connection grind loops.",
    "highlights": [
      "Authored 30-page design document parodying recruitment platforms as predatory gacha mechanics",
      "Engineered satirical 'Application Energy' stamina meter and pay-to-win interview prep microtransactions",
      "Designed full Figma mobile UI wireframes matching professional iOS/Android design conventions",
      "Scripted multi-branching corporate interview dialogue trees with Kafkaesque HR responses"
    ],
    "technicalDeepDive": "Modeled gacha drop rates mathematically using Poisson probability distributions: 'Entry-Level' jobs requiring 5+ years experience drop at a 0.5% SSR rate, driving player frustration as an intentional ludonarrative commentary on modern labor realities.",
    "image": "/images/dear_hiring_manager.jpg",
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
    "catalogNumber": "15",
    "title": "Far Cry 5 DLC: 'Faith Over Fear' Screenplay & Narrative Prequel",
    "discipline": "narrative",
    "engine": "Industry Screenplay & Mocap Format",
    "categoryLabel": "AAA Screenplay & Cinematics",
    "dates": "Feb 2026 \u2013 May 2026",
    "role": "Lead Narrative Writer & Cinematic Dramatist",
    "studio": "Ubisoft IP Adaptation / UEL",
    "shortDesc": "Professional AAA prequel screenplay exploring the calculated indoctrination of Rachel Jessop ('Faith Seed') through spatial environmental storytelling and restrained psychological subtext.",
    "summary": "A masterclass in character entrapment, replacing bombastic villain monologues with grounded paternal stillness, indexical rain/mud metaphors, and parenthetical actor direction.",
    "highlights": [
      "Formatted strictly to industry screenplay and performance capture volume standards",
      "Replaced traditional exposition with subtextual spatial dominance and micro-gestures",
      "Deep research into cult psychology, coercion cycles, and institutional vulnerability",
      "Table-read iterated pacing that earned commendations for psychological authenticity"
    ],
    "technicalDeepDive": "Designed screenplay scenes with spatial blocking maps for motion capture stages. Directorial annotations specify camera lenses, focal depth shifts, and actor proximity vectors to maximize physical subtext before dialogue is delivered.",
    "image": "/images/far_cry_5.jpg",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": null,
      "demo": "https://www.linkedin.com/in/joshgamedev",
      "itch": null,
      "video": null,
      "linkedin": null
    },
    "featured": false
  },
  {
    "id": "misc-games-planning",
    "slug": "misc-games",
    "catalogNumber": "16",
    "title": "Misc Games: Concept Archives & Systems Design Portfolio",
    "discipline": "level-design",
    "engine": "Various Engines & Design Formats",
    "categoryLabel": "Systems Design & Archives",
    "dates": "2022 \u2013 Present",
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
    "technicalDeepDive": "Systematized progression balancing formulas across RPG loot and encounter curves, modeling player level-up velocity against enemy health scaling using exponential decay functions to maintain flow state.",
    "image": "/images/project_frame.jpg",
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

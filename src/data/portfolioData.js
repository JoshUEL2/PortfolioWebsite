export const PERSONAL_INFO = {
  name: "Joshua Johnson",
  title: "Technical Game Designer & Systems Architect",
  headline: "Bridging deep Unreal Engine 5 systems, custom shader mathematics, and nuanced ludonarrative architecture.",
  location: "London, England, UK",
  email: "joshua06johnson@gmail.com",
  github: "https://github.com/JoshUEL2",
  linkedin: "https://www.linkedin.com/in/joshgamedev",
  itch: "https://joshej.itch.io/",
  cv: "/docs/Joshua_Johnson_CV.pdf",
  institution: "University of East London (UEL)",
  role: "School Representative & BSc (Hons) Computer Games Design",
  motto: "If I don't know it, I learn it; if I need it, I build it.",
  bio: "London-based Technical Game Designer and Systems Architect specialising in Unreal Engine 5 gameplay engineering, custom HLSL/Material shader mathematics, and procedural bone animation. Proven leadership bridging low-level engine mechanics with sophisticated narrative systems (Jon Ingold triads, dynamic agitation states).",
  stats: [
    { label: "Top Course Mark", value: "92%", sub: "1st Class Honours (MS5027)" },
    { label: "Showcase Selection", value: "Sole L5", sub: "Royal Docks L6 Hall Exhibition" },
    { label: "Commercial Guests", value: "13,000+", sub: "Premier Inn Senior Team Member" },
    { label: "CyberCenturion", value: "Top 60", sub: "UK Nationwide Cybersecurity" },
    { label: "VEX Robotics", value: "Finalist", sub: "UK National Championship" },
    { label: "Duke of Edinburgh", value: "Gold", sub: "Award Recipient" }
  ]
};

export const CATEGORIES = [
  { id: "flagships", label: "★ Flagship Spotlights", desc: "Top-rated UE5 & playable vertical slices (92% & 78% 1st Class)" },
  { id: "gameplay", label: "01 / Gameplay & VR Physics", desc: "Polar gravity maths, OpenXR wheelchair inertia & AI state machines" },
  { id: "concepts", label: "02 / Shaders & Photogrammetry", desc: "Kuwahara watercolour filters, WPO morphing & 1:1 digital twins" },
  { id: "level-narrative", label: "03 / Level & Narrative Systems", desc: "Asymmetrical co-op FPS architecture & Jon Ingold dialogue triads" }
];

export const PROJECTS = [
  // --- CATEGORY 1: GAMEPLAY & VR PHYSICS ---
  {
    id: "rastacats",
    category: "gameplay",
    isFlagship: true,
    statusTag: { label: "Remastered & Playable", color: "emerald" },
    number: "01",
    title: "Rastacats / Rastacats Remastered",
    tagline: "Procedural 3D Runner & Polar Gravity (92% 1st)",
    discipline: "Gameplay Engineering & Physics",
    engine: "Unreal Engine 5.7",
    dates: "Oct 2025 – May 2026",
    studio: "JoshCorp Interactive / UEL (MS5027 & MS5022)",
    image: "/images/rastacats.jpg",
    video: "/media/rastacats_preview.mp4",
    gallery: [
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
    funFact: "Selected as the sole Level 5 project to exhibit downstairs alongside final graduating Level 6 games at the Royal Docks Centre for Sustainability, demoed live to over 100 industry visitors.",
    links: {
      github: null,
      demo: null,
      itch: "https://joshej.itch.io/rastacats",
      video: null,
      linkedin: null
    },
    shortDesc: "Awarded 92% (1st Class Honours) for high-octane 360° cylindrical pipe racing in Term 1, followed by a complete Term 2 architectural remaster featuring curved-world shaders, decal projection maths, and 65% CPU tick optimisation.",
    summary: "Dual-phase arcade racing project exploring cylindrical locomotion physics and modern engine optimisation. Term 1 established custom polar gravity and high-stakes Overspeed mechanics (92% grade). Term 2 introduced an Animal Crossing spherical vertex shader, Blueprint Event Tick decal projection along curved surfaces, coin actor pooling, and AI race competition.",
    highlights: [
      "Awarded 92% (1st Class Honours) for MS5027 Gameplay Prototyping at UEL",
      "Engineered bespoke 360° rotational gravity across tubular spline meshes beyond standard CharacterMovement",
      "Term 2 Remaster: Animal Crossing-style curved-world vertex displacement shader with dynamic rolling horizon",
      "Blueprint Event Tick decal projection maths calculating surface tangents along curved normals to eliminate shearing",
      "65% CPU cycle reduction achieved by replacing per-frame coin ticking with pooled Instanced Static Mesh managers",
      "Secondary procedural animation featuring velocity-driven skeletal bone swaying on character ears and tails"
    ],
    technicalDeepDive: "Standard UE5 CharacterMovement components assume planar down-vectors and fail when navigating inverted tubular geometry. Solved in Phase 1 by calculating polar coordinates from spline cross-sections, projecting dynamic artificial gravity directly towards the pipe spine. In Phase 2, countered visual vertex displacement shearing by computing real-time decal projection matrices in Event Tick, while slashing frame times by pooling coin actors into distance-culled instanced meshes.",
    splitPhases: [
      {
        id: "original",
        phaseLabel: "Phase 1: Original (Term 1 / MS5027)",
        phaseBadge: "92% 1st Class Honours",
        phaseSubtitle: "360° Cylindrical Pipe Locomotion & Polar Gravity Physics",
        title: "Rastacats: High-Velocity 360° Pipe Bobsled Racing",
        summary: "Awarded 92% (1st Class Honours) in MS5027 Gameplay Prototyping at the University of East London. Features high-velocity 360-degree pipe traversal where players bank along cylindrical surfaces at over 200 km/h, dodging dynamic obstacles, collecting coins, and managing a high-stakes Overspeed mechanic that rewards split-second reflexes.",
        highlights: [
          "Custom polar coordinate gravity system allowing seamless 360-degree cylindrical inner-pipe traversal",
          "Dynamic Overspeed risk-reward gauge: maintaining maximum speed unlocks coin multipliers but heightens collision penalty",
          "Procedural obstacle placement algorithm generating randomised spike hazards and jump pads",
          "High-performance arcade handling with immediate response physics tuned for competitive time-trials"
        ],
        technicalDeepDive: "Calculated surface normals across continuous spline meshes to project artificial inward gravitational vectors, allowing the bobsled pawn to maintain adhesion across 360 degrees of rotation without falling out of the tube geometry. Tuned velocity damping and rotational friction to eliminate disorientation while preserving extreme speed.",
        gallery: [
          "/images/rastacats.jpg",
          "/images/rasta_cw1_00_01_05.jpg",
          "/images/rasta_cw1_00_01_15.jpg",
          "/images/rasta_cw1_00_01_30.jpg"
        ],
        video: "/media/rastacats_preview.mp4"
      },
      {
        id: "revisited",
        phaseLabel: "Phase 2: Revisited / Remaster (Term 2 / MS5022)",
        phaseBadge: "Remastered Architecture",
        phaseSubtitle: "Curved-World Shader, Decal Maths & CPU Tick Optimisation",
        title: "Rastacats Remastered: Spherical Vertex Horizon & Engine Polish",
        summary: "A ground-up architectural overhaul for the MS5022 Portfolio module. Rebuilt rendering pipelines with an Animal Crossing-inspired spherical vertex displacement shader, engineered Blueprint Event Tick decal projection maths, eliminated CPU overhead through actor pooling, added velocity-driven bone swaying, AI Race Mode competitors, and blizzard particle weather.",
        highlights: [
          "Animal Crossing-inspired curved-world vertex displacement shader creating a dramatic rolling horizon effect",
          "Replaced per-frame actor ticking with object pooling for hundreds of coins, slashing CPU cycle usage by 65%",
          "Engineered Blueprint Event Tick decal maths to accurately project feline graffiti and skid marks along curved mesh normals",
          "Implemented secondary animation with velocity-driven bone swaying on character tails and ears",
          "Added competitive AI Race Mode with dynamic rubber-banding and atmospheric blizzard weather simulation"
        ],
        technicalDeepDive: "Engineered world-position-offset vertex shader maths: P_curved = P_world - up * (distance / curveFactor)^2. Overcame decal projection shearing on curved meshes by calculating local surface tangent frames in Blueprint tick. Optimised coin performance by replacing individual ticking actors with an Instanced Static Mesh Component manager with distance-based cull volumes.",
        gallery: [
          "/images/rastacats_revisited.jpg",
          "/images/rasta_cw2_00_01_05.jpg",
          "/images/rasta_cw2_00_01_15.jpg",
          "/images/rasta_cw2_00_01_30.jpg",
          "/images/test_rasta_cw2_40s.jpg"
        ],
        video: "/media/rastacats_cw2_preview.mp4"
      }
    ]
  },
  {
    id: "delirium",
    category: "gameplay",
    isFlagship: true,
    statusTag: { label: "Shipped VR & Playable", color: "emerald" },
    number: "02",
    title: "Delirium",
    tagline: "VR Psychological Horror, Wheelchair Physics & Non-Euclidean GDD Architecture (78% 1st)",
    discipline: "Game Design, GDD/Narrative, UI & VR Locomotion Systems",
    engine: "Unreal Engine 5.6 VR (OpenXR — Quest & PCVR)",
    dates: "Jan 2026 – Jun 2026",
    studio: "3J Mad Studios / UEL (MS5021)",
    image: "/images/delirium_cover.png",
    video: "/media/delirium_preview.mp4",
    gallery: [
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
    funFact: "The sole fully working, playable VR project in the Level 5 showcase, demoed live with custom seated wheelchair physics and OpenXR head tracking.",
    links: {
      github: null,
      demo: null,
      itch: "https://joshej.itch.io/delirium",
      gdd: "/docs/Delirium_GDD_and_Design_Notes.zip",
      video: "/media/delirium_preview.mp4",
      linkedin: null
    },
    shortDesc: "First-person seated VR psychological survival horror game in Unreal Engine 5.6 (78% 1st Class Honours) where you awaken in 'The Institute' confined to a physical wheelchair, forced to choose between looking forward to navigate or looking back to freeze quantum-observation 'Staff' entities.",
    summary: "Developed by 3J Mad Studios (Joshua Johnson, Dhrumil Hirapara, Jose Roberto Gálvez Vargas, Aiden Billingham, Matas Narusis, Jasmine Jilley) for MS5021 Game Studio 2 (78% 1st Class Honours)—the sole fully working, playable VR project in the Level 5 showcase. Originated from Joshua's 'Mental Hospital Idea' concept notes and full Game Design Document (GDD), combining a 5-minute high-turnover walk-up VR loop, weighted tank-control wheelchair inertia across 3 propulsion modes, Quantum-Observation ('Weeping Angel') AI with K-wire split-face & pendulum-stethoscope body horror, reversed speech & mic-noise detection, non-Euclidean 'Geometry Shift' checkpoints, 'The Void' black-fog sanity feedback, and 'The Rainbow Room' contrast safe zone.",
    highlights: [
      "Sole fully working, playable VR project in the Level 5 showcase (78% 1st Class Honours in MS5021), demoed live with custom seated wheelchair physics and OpenXR head tracking.",
      "Originated the 'Mental Hospital Idea' & authored the full GDD, Narrative Template, Brainstorming Bible, Sprint 1–4 Retrospectives, Visio floorplans (modelled on UEL Docklands West Building 1st Floor), custom Illustrator UI menus, and 4K cinematic IntroSequence.mp4.",
      "Core Hook & 3-Mode Wheelchair Physics: Weighted tank-drive inertia forcing players to choose between looking forward to steer or looking back to survive—with Realistic arm-swing, Semi-Realistic pull, and Accessible Dual-Stick modes, plus a Reverse-Gaze Jumpscare Penalty.",
      "Quantum-Observation AI ('The Staff'): Freezes and subtly vibrates with a low-frequency hum inside the VR camera frustum while its pendulum stethoscope swings; stalks with wet footsteps when unobserved or during blackouts, speaking slowed reversed English ('tneitaP ,ereh kcab emoC') with microphone noise detection.",
      "Non-Euclidean Object Permanence & Zero-HUD Sanity: Hallways vanish into solid brick walls or 'The Void' black fog behind your back (acting as internal Geometry Shift level checkpoints from Phase 1 Elevator Admission to Phase 2 Doctor Pursuit and 'The Rainbow Room' surreal safe zone), paired with X-Ray code, fuse, and keypad puzzles."
    ],
    technicalDeepDive: "Solved VR simulator sickness and walk-up onboarding by anchoring the player's physical seated posture to an in-game wheelchair chassis with intentional rotational inertia and three selectable propulsion schemes (6-DOF virtual wheel grab tank drive, pull-stroke propulsion, and dual-analogue accessibility). Calibrated OpenXR tracking matrices and physics handle components to ensure heavy objects and wheelchair rim propulsion possessed realistic rotational inertia without physics jitter, maintaining 90fps across live player sessions."
  },
  {
    id: "state-machine",
    category: "gameplay",
    isFlagship: false,
    statusTag: { label: "Shipped & Playable", color: "emerald" },
    number: "03",
    title: "State Machine Showcase",
    tagline: "Hierarchical AI, LoS Tracking & Elevator Physics",
    discipline: "AI Systems & Mechanics",
    engine: "Unreal Engine 5",
    dates: "2025",
    studio: "JoshCorp / Itch.io",
    image: "/images/state_machine_cover.png",
    gallery: [
      "/images/state_machine_cover.png"
    ],
    links: {
      github: null,
      demo: null,
      itch: "https://joshej.itch.io/state-machine-showcase",
      video: null,
      linkedin: null
    },
    shortDesc: "Playable itch.io build featuring hierarchical finite state machines (HFSM), line-of-sight visual perception cones, and dynamic physics-driven elevator systems.",
    summary: "Clean systems architecture demonstration implementing modular AI behavioural states (Patrol, Investigate, Pursue, Search) with clean state transitions.",
    highlights: [
      "Hierarchical Finite State Machine separating high-level combat tactics from low-level movement.",
      "Line-of-sight perception cones with obstacle penetration raycasts.",
      "Physics-synchronised moving platforms and interactive multi-floor elevators.",
      "Fully published and playable in the browser and Windows standalone on itch.io."
    ],
    technicalDeepDive: "Engineered cleanly decoupled state interfaces using Blueprint Interfaces and Event Dispatchers. Guarded against state thrashing through minimum dwell timers and memory queues that retain the player's last known location."
  },

  // --- CATEGORY 2: SHADERS & PHOTOGRAMMETRY ---
  {
    id: "rem",
    category: "concepts",
    isFlagship: true,
    statusTag: { label: "UE5 Vertical Slice", color: "indigo" },
    number: "01",
    title: "REM",
    tagline: "Watercolour Post-Processing & Ludonarrative",
    discipline: "Technical Art & Shaders",
    engine: "Unreal Engine 5",
    dates: "Jan 2026 – May 2026",
    studio: "JoshCorp / UEL (MS5022)",
    image: "/images/rem_cover.jpg",
    video: "/media/rem_preview.mp4",
    gallery: [
      "/images/rem_cover.jpg"
    ],
    links: {
      github: "https://github.com/JoshUEL2/REM",
      demo: "https://joshuel2.github.io/REM-Marketing-Website/",
      itch: null,
      video: null
    },
    shortDesc: "A stylised UE5 interactive experience featuring a bespoke Kuwahara watercolour post-process filter and character World Position Offset morphing body.",
    summary: "Short-form interactive narrative exploring psychological isolation and identity dissolution through real-time painterly rendering, custom World Position Offset vertex displacement, and an accompanying interactive promotional web experience.",
    highlights: [
      "Engineered custom multi-directional Kuwahara filtering balancing painterly watercolour aesthetics with crisp gameplay legibility.",
      "Custom World Position Offset (WPO) morphing body for the protagonist built from scratch without pre-made asset packs.",
      "Custom PBR textures authored in Substance Painter and 3D environment kits rigged and modelled in Blender.",
      "Indexical environmental storytelling where ambient lighting and post-process parameters respond to player emotional state."
    ],
    technicalDeepDive: "Faced with achieving an expressive watercolour aesthetic without muddying silhouette clarity or tanking framerates, engineered a custom multi-directional Kuwahara filtering post-process volume in HLSL/UE5 Material Graph. Balanced edge-detection kernels with colour averaging passes to preserve character silhouette boundaries at 60fps+."
  },
  {
    id: "daydream",
    category: "concepts",
    isFlagship: false,
    statusTag: { label: "Dual-Phase & Playable", color: "emerald" },
    number: "02",
    title: "Project Daydream / Daydream Believer",
    tagline: "1:1 Photogrammetry & Neurodivergent Simulation (72% 1st)",
    discipline: "Photogrammetry & Shader Art",
    engine: "Unreal Engine 5 (MS4035)",
    dates: "Jul 2022 – Apr 2025",
    studio: "JoshCorp Interactive / UEL (MS4035)",
    image: "/images/daydream.jpg",
    video: "/media/daydream_preview.mp4",
    gallery: [
      "/images/daydream.jpg",
      "/images/daydream_00_01_05.jpg",
      "/images/daydream_00_01_30.jpg",
      "/images/daydream_revisited.jpg",
      "/images/test_daydream_52s.jpg"
    ],
    links: {
      github: null,
      demo: null,
      itch: "https://joshej.itch.io/daydream-believer",
      video: null,
      linkedin: null
    },
    shortDesc: "A dual-phase journey from a 1:1 photogrammetric reconstruction of a secondary school campus (2,377 Blender UV maps) to an evocative ADHD hyperfocus simulation awarded 72% (1st Class Honours).",
    summary: "Project Daydream began as a foundational technical undertaking in 1:1 architectural digital twinning (extracting photogrammetry via RenderDoc, baking 2,377 texture maps in Blender, and realigning world axes by 23.999°). It was subsequently revisited and elevated in MS4035 into 'Daydream Believer'—a research-grounded neurodivergent experience translating ADHD sensory overstimulation into tangible gameplay mechanics with radial distortion shaders, rhythmic keystroke locomotion, and 15 layered audio stems.",
    highlights: [
      "Awarded 72% (1st Class Honours) in MS4035 Game Prototyping at the University of East London.",
      "Extracted 3D photogrammetric architectural scans via RenderDoc, consolidating 2,377 UV maps in Blender.",
      "Solved map-wide rotational offset by calculating a precise 23.999° world coordinate realignment matrix.",
      "Engineered custom post-process radial blur and chromatic distortion shaders to simulate hyperfocus tunnel vision.",
      "Designed manual rhythmic locomotion state machine requiring alternating inputs to simulate cognitive exertion.",
      "Composed 15 original music tracks in BandLab and integrated neural vocal modulation for inner-monologue cues."
    ],
    technicalDeepDive: "Phase 1 solved severe photogrammetric non-manifold mesh defects by wrapping geometry in optimised bounding collision primitives and aligning world matrices to an exact 23.999° tilt. Phase 2 engineered a custom HLSL screen-distortion material that contracts UV coordinates towards the screen centre based on an Attention State scalar, coupled with an interactive step-by-step locomotion mechanic that destabilises camera roll if rhythmic timing falters.",
    splitPhases: [
      {
        id: "original",
        phaseLabel: "Phase 1: Original (2022–2023)",
        phaseBadge: "1:1 Digital Twin",
        phaseSubtitle: "1:1 Architectural Photogrammetry & Spatial Reconstruction",
        title: "Project Daydream: 1:1 Secondary School Architectural Photogrammetry",
        summary: "An exhaustive 1:1 architectural digital twin of a real-world secondary school campus in Unreal Engine 5. Sourced from Google 3D photogrammetry data extracted via RenderDoc, the project required baking 2,377 separate UV coordinate meshes in Blender and upscaling all textures via Topaz Gigapixel AI to achieve photorealistic architectural fidelity.",
        highlights: [
          "Extracted full 3D photogrammetry meshes via RenderDoc and baked 2,377 distinct UV maps in Blender",
          "Calculated precision rotational alignment: compensated for an exact 23.999° camera tilt to align with world axes",
          "Engineered complex multi-level collision meshes using invisible cube tracing around irregular photogrammetric walls",
          "Upscaled hundreds of low-resolution satellite textures into 4K PBR-ready surfaces using Topaz Gigapixel AI",
          "Built full day/night Lumen volumetric lighting and custom atmospheric fog systems"
        ],
        technicalDeepDive: "Overcame photogrammetric mesh fragmentation and severe rotation misalignment (23.999° offset) by constructing a programmatic transformation pipeline in Blender before engine import. Collisions for jagged non-manifold meshes were engineered by tracing simplified bounding collision primitives, achieving smooth 60 FPS traversal.",
        gallery: [
          "/images/daydream.jpg",
          "/images/daydream_00_01_05.jpg",
          "/images/daydream_00_01_30.jpg"
        ],
        video: "/media/daydream_preview.mp4"
      },
      {
        id: "revisited",
        phaseLabel: "Phase 2: Revisited (MS4035 — 72% 1st)",
        phaseBadge: "72% 1st Class Honours",
        phaseSubtitle: "Daydream Believer: ADHD Hyperfocus Simulation & Locomotion",
        title: "Daydream Believer: ADHD Hyperbolic Experience & Locomotion",
        summary: "Transformed the photogrammetric school shell into an evocative, research-grounded neurodivergent simulation for MS4035 (72% 1st Class Honours). Translates the internal psychological experience of ADHD into tactile game systems: hyperbolic radial focus distortion, tunnel vision shaders, rhythmic step-by-step movement mechanics, and custom audio layers that react dynamically to sensory overstimulation.",
        highlights: [
          "Developed custom post-processing radial blur and chromatic distortion shaders to simulate hyperfocus tunnel vision",
          "Engineered rhythm-based manual locomotion mechanic requiring players to alternate keystrokes to simulate cognitive exertion",
          "Dynamic environment perimeter fences that glow crimson during sensory overload and dissolve upon regaining focus",
          "Curated and layered 15+ individual audio stems in BandLab with dynamic volume ducking mapped to player anxiety states",
          "Integrated neural vocal modulation for psychological inner-monologue dialogue cues"
        ],
        technicalDeepDive: "Engineered a custom HLSL post-process material in Unreal Engine that dynamically contracts screen UVs towards the centre based on a continuous Attention Float parameter. Combined this with a step-by-step locomotion state machine that penalises errant rhythm with disorientation camera sway, mechanically translating the executive dysfunction of ADHD into immersive gameplay.",
        gallery: [
          "/images/daydream_revisited.jpg",
          "/images/test_daydream_52s.jpg"
        ],
        video: "/media/daydream_preview.mp4"
      }
    ]
  },

  // --- CATEGORY 3: LEVEL & NARRATIVE SYSTEMS ---
  {
    id: "the-quarry",
    category: "level-narrative",
    isFlagship: true,
    statusTag: { label: "Playable Web Build", color: "emerald" },
    number: "01",
    title: "The Quarry",
    tagline: "Interactive Safeguarding Interrogation Thriller (78% 1st)",
    discipline: "Narrative Design & Dialogue Systems",
    engine: "Twine (Harlowe 3.3) / Web",
    dates: "Apr 2026 – May 2026",
    studio: "University of East London (MS5029)",
    image: "/images/the_quarry.jpg",
    gallery: [
      "/images/the_quarry.jpg",
      "/images/the_quarry_flowchart.png"
    ],
    links: {
      github: "https://github.com/JoshUEL2/The-Quarry",
      demo: "/games/the_quarry/index.html",
      itch: null,
      video: null,
      linkedin: null
    },
    shortDesc: "Psychological interrogation thriller awarded 78% (1st Class Honours), exploring manipulation in a single consultation room using Jon Ingold's Accept/Reject/Deflect triads and an internal Agitation meter.",
    summary: "Claustrophobic two-character power dynamic where players interrogate twelve-year-old Holly as an NHS clinical psychologist, treating conversational subtext with the systemic rigour of combat mechanics.",
    highlights: [
      "Awarded 78% (1st Class Honours) in MS5029 Storytelling for Games at the University of East London.",
      "Structured upon Jon Ingold's 'Accept / Reject / Deflect' dialogue choice architecture for sparkling conversational momentum.",
      "Dynamic 'Agitation' internal state tracking (0–100) that treats psychological tension as an active gameplay mechanic.",
      "Pacing inspired by high-tension British drama (Adolescence Episode 3), supported by a 5K × 12K branching topology flowchart."
    ],
    technicalDeepDive: "Implemented state machine variable architecture inside Twine (Harlowe 3.3) with custom CSS styling. Scripted branching topologies that track hidden suspect confidence and agitation variables. Aggressive interrogations trigger defensive counter-accusations, requiring players to utilise calculated de-escalation pathways to expose contradictions regarding the invented predator 'Ryder'."
  },
  {
    id: "labraz",
    category: "level-narrative",
    isFlagship: false,
    statusTag: { label: "UE5 Level & 40p GDD", color: "indigo" },
    number: "02",
    title: "LabR@z",
    tagline: "3-Player Asymmetrical Co-Op FPS (72% 1st)",
    discipline: "Level Design & Game Architecture",
    engine: "Unreal Engine 5 (MS5028 & MS4005)",
    dates: "Dec 2024 – Apr 2025",
    studio: "JoshCorp / UEL (MS5028)",
    image: "/images/labraz.jpg",
    video: "/media/labraz_preview.mp4",
    gallery: [
      "/images/labraz.jpg",
      "/images/labraz_01.jpg"
    ],
    youtubeId: null,
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: null
    },
    shortDesc: "3-player asymmetrical co-op FPS level design awarded 72% (1st Class Honours) with physical foamboard paper-prototyping, a 40-page Game Design Document, and full UE5 video walkthrough.",
    summary: "Complex asymmetrical level architecture where three genetically modified lab rats across complementary classes (Tank, DPS, and Support/Healer) cooperate to breach a high-security research facility and execute a 'Pawn Promotion' bulkhead breach.",
    highlights: [
      "Awarded 72% (1st Class Honours) for MS5028 Level Design at UEL.",
      "Validated core spatial sightlines via physical 3D foamboard paper-prototyping (MS4005) before full UE5 whiteboxing.",
      "Authored professional 40-page Game Design Document with flow diagrams, beat charts, and 'Pawn Promotion' end-state mechanics.",
      "Engineered sightlines, choke points, and vertical flanking routes balancing Tank, DPS, and Support/Healer cooperative roles."
    ],
    technicalDeepDive: "Balanced encounter pacing using rhythm-tension graphs validated first through physical tabletop/foamboard playtesting and subsequently built in Unreal Engine 5. Designed modular environmental kits in Blender with clear visual language: colour-coded conduits guide puzzle routing while elevated catwalks provide tactical sightlines for defensive cover."
  },
  {
    id: "faith-over-fear",
    category: "level-narrative",
    isFlagship: false,
    statusTag: { label: "AAA Screenplay (78% 1st)", color: "amber" },
    number: "03",
    title: "Faith Over Fear",
    tagline: "AAA Far Cry 5 Prequel Performance Screenplay (78% 1st)",
    discipline: "AAA Screenplay & Cinematics",
    engine: "Performance Capture Volume Format",
    dates: "Feb 2026 – May 2026",
    studio: "Ubisoft IP Adaptation / UEL (MS5029)",
    image: "/images/far_cry_5.jpg",
    gallery: [
      "/images/far_cry_5.jpg"
    ],
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: null
    },
    shortDesc: "Industry-standard AAA prequel screenplay awarded 78% (1st Class Honours), exploring the calculated indoctrination of Rachel Jessop ('Faith Seed') through spatial environmental storytelling and restrained psychological subtext.",
    summary: "A masterclass in character entrapment, replacing bombastic villain monologues with grounded paternal stillness, indexical rain/mud metaphors, and parenthetical performance-capture actor direction.",
    highlights: [
      "Awarded 78% (1st Class Honours) for MS5029 Storytelling for Games at the University of East London.",
      "Formatted strictly to industry screenplay and performance capture volume blocking standards.",
      "Replaced traditional exposition with subtextual spatial dominance and micro-gestures.",
      "Grounded in Joshua's 5+ years of stage and screen acting experience for authentic mocap direction."
    ],
    technicalDeepDive: "Designed screenplay scenes with spatial blocking maps for motion capture stages. Directorial annotations specify camera lenses, focal depth shifts, and actor proximity vectors to maximise physical subtext before dialogue is delivered."
  }
];

export const DISCIPLINES = [
  {
    id: "gameplay",
    icon: "Gamepad2",
    title: "Gameplay Systems & Physics",
    badge: "92% 1st Class",
    description: "Custom 360° rotational gravity, polar-to-cartesian coordinate positioning, actor pooling lifecycle optimisation, and procedural bone animation layered over locomotion in Unreal Engine 5.",
    skills: ["UE5 Blueprints & C++", "Custom Gravity Maths", "Procedural Bone Physics", "Actor Pooling", "OpenXR VR"]
  },
  {
    id: "tech-art",
    icon: "Palette",
    title: "Technical Art & Shaders",
    badge: "HLSL & Materials",
    description: "Bespoke Kuwahara watercolour post-processing filters, World Position Offset character morphing, curved-world horizon compensation shaders, and high-fidelity Substance Painter PBR textures.",
    skills: ["Post-Process Volumes", "Kuwahara Filter", "WPO Vertex Shaders", "Substance Painter", "Blender 4.3/5.0"]
  },
  {
    id: "narrative",
    icon: "BookOpen",
    title: "Ludonarrative Architecture",
    badge: "78% 1st Class",
    description: "Systemic dialogue design employing Jon Ingold's Accept/Reject/Deflect triads, internal Agitation tension meters, and AAA performance capture screenplays grounded in spatial indexical storytelling.",
    skills: ["Jon Ingold Architecture", "Twine Harlowe 3.3", "Agitation State Tracking", "AAA Screenplays", "Mocap Direction"]
  },
  {
    id: "hardware",
    icon: "Cpu",
    title: "Hardware & Mocap Engineering",
    badge: "DIY Innovation",
    description: "Built Project K.I.N.E.T.I.C. DIY motion capture rig (Kinect v2 + PSVR gyro fusion) streaming real-time to MetaHumans in UE5 LiveLink, plus USB HID packet reverse-engineering. VEX UK National Robotics Finalist.",
    skills: ["Sensor Fusion (Kinect+PSVR)", "UE5 LiveLink", "USB HID Reverse-Engineering", "C# / .NET", "Robotics Mechanics"]
  },
  {
    id: "security",
    icon: "ShieldCheck",
    title: "Defensive Security & Rigour",
    badge: "Top 60 UK",
    description: "CyberCenturion Top 60 UK nationwide finalist, PCAP & Harvard CS50x certified, Sextennial School Review Panelist, and 13,000+ guest interactions at Premier Inn with zero disciplinaries.",
    skills: ["CyberCenturion Finalist", "PCAP & Harvard CS50x", "Linux/Windows Hardening", "Academic Governance", "Team Leadership"]
  }
];

export const HARDWARE_AND_SYSTEMS_MINI = [
  {
    id: "project-kinetic",
    title: "Project K.I.N.E.T.I.C. (DIY Mocap Rig)",
    tech: "Kinect v2 + PSVR Move + UE5 LiveLink + Python OSC",
    summary: "Bypassed £10k commercial mocap suits by fusing infrared depth point clouds with gyroscopic controller orientation to drive real-time UE5 MetaHumans."
  },
  {
    id: "tfl-planner",
    title: "TfL London Underground Pathfinding",
    tech: "JavaScript / Leaflet GIS / Graph Routing",
    summary: "Interactive London Underground shortest-path routing engine and client-side Oyster CSV fare parser.",
    link: "https://joshuel2.github.io/TFL-Planner/",
    github: "https://github.com/JoshUEL2/TFL-Planner"
  },
  {
    id: "signalrgb-hid",
    title: "SignalRGB USB HID Reverse-Engineering",
    tech: "Wireshark USBPcap / JavaScript / HID Protocols",
    summary: "Reverse-engineered proprietary USB HID packets for the Gigabyte Aorus P1200W PSU LCD & authored open-source SignalRGB plugin tooling.",
    github: "https://github.com/JoshUEL2/SignalRGB-Aorus-P1200W-Plugin"
  },
  {
    id: "hydroscreen-xc7",
    title: "HydroScreen XC7 Liquid-Cooler Driver",
    tech: "C# / .NET / Hardware Telemetry",
    summary: "Lightweight C#/.NET driver and LCD telemetry renderer for the Corsair XC7 RGB ELITE waterblock.",
    github: "https://github.com/JoshUEL2/HydroScreen-XC7-Compatiability"
  },
  {
    id: "project-realspeak",
    title: "Project Realspeak & BSc SSS Research",
    tech: "UE5 MetaHuman / OpenAI STT-TTS / Melanin SSS",
    summary: "Real-time conversational AI NPC lip-sync pipeline in UE5 (2023) & BSc Dissertation on inclusive mixed-race 3D character subsurface scattering."
  }
];

export const ACADEMIC_MODULES = [
  { code: "MS5027", name: "Gameplay Prototyping (Rastacats)", mark: "92%", grade: "1st Class" },
  { code: "MS5023", name: "Professional Practice & Portfolio", mark: "87%", grade: "1st Class" },
  { code: "MS4006", name: "Fundamentals of Programming (PyBall)", mark: "78%", grade: "1st Class" },
  { code: "MS5029", name: "Storytelling for Games (The Quarry)", mark: "78%", grade: "1st Class" },
  { code: "MS5021", name: "Game Studio 2 (Delirium VR)", mark: "78%", grade: "1st Class" },
  { code: "MS5028", name: "Level Design (LabR@z)", mark: "72%", grade: "1st Class" },
  { code: "MS4035", name: "Game Prototyping (Daydream Believer)", mark: "72%", grade: "1st Class" },
  { code: "MS4036", name: "Visual & Theoretical Studies", mark: "72%", grade: "1st Class" }
];

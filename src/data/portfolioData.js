export const PERSONAL_INFO = {
  name: "Joshua Johnson",
  title: "Technical Game Designer & Systems Architect",
  headline: "Bridging deep Unreal Engine 5 systems, custom shader mathematics, and nuanced ludonarrative architecture.",
  location: "London, England, UK",
  email: "joshua06johnson@gmail.com",
  github: "https://github.com/JoshUEL2",
  linkedin: "https://www.linkedin.com/in/joshgamedev",
  itch: "https://joshej.itch.io/",
  institution: "University of East London (UEL)",
  role: "School Representative & BSc (Hons) Computer Games Design",
  motto: "If I don't know it, I learn it; if I need it, I build it.",
  bio: "London-based Technical Game Designer and Systems Architect specializing in Unreal Engine 5 gameplay engineering, custom HLSL/Material shader math, and procedural bone animation. Proven leadership bridging low-level engine mechanics with sophisticated narrative systems (Jon Ingold triads, dynamic agitation states).",
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
  { id: "concepts", label: "01 / Concepts & Shaders", desc: "Technical art, post-processing shaders & narrative systems" },
  { id: "gameplay", label: "02 / Gameplay & Physics", desc: "Engine mechanics, polar gravity math & AI state machines" },
  { id: "level-design", label: "03 / Level Design & Systems", desc: "Asymmetrical level architecture, custom mocap & GIS routing" }
];

export const PROJECTS = [
  // --- CATEGORY 1: CONCEPTS & SHADERS ---
  {
    id: "rem",
    category: "concepts",
    number: "01",
    title: "REM",
    tagline: "Watercolor Post-Processing & Ludonarrative",
    discipline: "Technical Art & Shaders",
    engine: "Unreal Engine 5",
    dates: "Jan 2026 – May 2026",
    studio: "JoshCorp / UEL",
    image: "/images/rem_cover.jpg",
    video: "/media/rem_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2/REM",
      demo: "https://github.com/JoshUEL2/REM/releases/latest",
      itch: null,
      video: null
    },
    shortDesc: "A stylized UE5 interactive experience featuring a bespoke Kuwahara watercolor post-process filter and character World Position Offset morphing body.",
    summary: "Short-form interactive narrative exploring psychological isolation and identity dissolution through real-time painterly rendering and dynamic vertex displacement.",
    highlights: [
      "Engineered custom multi-directional Kuwahara filtering balancing painterly aesthetics with crisp gameplay legibility.",
      "Custom World Position Offset (WPO) morphing body for the protagonist built from scratch without pre-made asset packs.",
      "Custom PBR textures authored in Substance Painter and 3D environment kits rigged in Blender.",
      "Indexical environmental storytelling where ambient lighting and post-process parameters respond to player emotional state."
    ],
    technicalDeepDive: "Faced with achieving an expressive watercolor aesthetic without muddying silhouette clarity or tanking framerates, engineered a custom multi-directional Kuwahara filtering post-process volume in HLSL/UE5 Material Graph. Balanced edge-detection kernels with color averaging passes to preserve character silhouette boundaries at 60fps+."
  },
  {
    id: "the-quarry",
    category: "concepts",
    number: "02",
    title: "The Quarry",
    tagline: "Interactive Safeguarding Interrogation Thriller",
    discipline: "Narrative Design & Dialogue Systems",
    engine: "Twine (SugarCube) / Web",
    dates: "Apr 2026 – May 2026",
    studio: "University of East London",
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
    shortDesc: "Psychological interrogation thriller exploring manipulation in a single consultation room using Jon Ingold's Accept/Reject/Deflect triads and an internal Agitation meter.",
    summary: "Claustrophobic two-character power dynamic where players interrogate an unpredictable adversary, treating conversational subtext with the systemic rigor of combat mechanics.",
    highlights: [
      "Structured upon Jon Ingold's 'Accept / Reject / Deflect' dialogue choice architecture.",
      "Dynamic 'Agitation' internal state tracking that treats psychological tension as an active mechanic.",
      "Punishing conversational loops where overly aggressive questioning forces the suspect to shut down.",
      "Pacing inspired by high-tension British drama (Adolescence Episode 3), delivering deep ludonarrative resonance."
    ],
    technicalDeepDive: "Implemented state machine variable architecture inside Twine (SugarCube) with CSS styling. Scripted branching topologies that track hidden suspect confidence and agitation variables. Aggressive interrogations trigger defensive counter-accusations, requiring players to utilize calculated de-escalation pathways to elicit actionable testimony."
  },
  {
    id: "faith-over-fear",
    category: "concepts",
    number: "03",
    title: "Faith Over Fear",
    tagline: "AAA Far Cry 5 Prequel Performance Screenplay",
    discipline: "AAA Screenplay & Cinematics",
    engine: "Performance Capture Volume Format",
    dates: "Feb 2026 – May 2026",
    studio: "Ubisoft IP Adaptation / UEL",
    image: "/images/far_cry_5.jpg",
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: null
    },
    shortDesc: "Industry-standard AAA prequel screenplay exploring the calculated indoctrination of Rachel Jessop ('Faith Seed') through spatial environmental storytelling and restrained psychological subtext.",
    summary: "A masterclass in character entrapment, replacing bombastic villain monologues with grounded paternal stillness, indexical rain/mud metaphors, and parenthetical actor direction.",
    highlights: [
      "Formatted strictly to industry screenplay and performance capture volume standards.",
      "Replaced traditional exposition with subtextual spatial dominance and micro-gestures.",
      "Deep research into cult psychology, coercion cycles, and institutional vulnerability.",
      "Table-read iterated pacing that earned commendations for psychological authenticity."
    ],
    technicalDeepDive: "Designed screenplay scenes with spatial blocking maps for motion capture stages. Directorial annotations specify camera lenses, focal depth shifts, and actor proximity vectors to maximize physical subtext before dialogue is delivered."
  },

  // --- CATEGORY 2: GAMEPLAY & PHYSICS ---
  {
    id: "rastacats",
    category: "gameplay",
    number: "01",
    title: "Rastacats / Rastacats Remastered",
    tagline: "Procedural 3D Runner & Polar Gravity (92% 1st)",
    discipline: "Gameplay Engineering & Physics",
    engine: "Unreal Engine 5.7",
    dates: "Oct 2025 – May 2026",
    studio: "JoshCorp Interactive / UEL (MS5027 & MS5022)",
    image: "/images/rastacats.jpg",
    video: "/videos/rastacats_preview.mp4",
    links: {
      github: null,
      demo: "https://joshej.itch.io/rastacats",
      itch: "https://joshej.itch.io/rastacats",
      video: null,
      linkedin: null
    },
    shortDesc: "Awarded 92% (1st Class Honours) for high-octane 360° cylindrical pipe racing in Term 1, followed by a complete Term 2 architectural remaster featuring curved-world shaders, decal projection math, and 65% CPU tick optimization.",
    summary: "Dual-phase arcade racing project exploring cylindrical locomotion physics and modern engine optimization. Term 1 established custom polar gravity and high-stakes Overspeed mechanics (92% grade). Term 2 introduced an Animal Crossing spherical vertex shader, Blueprint Event Tick decal projection along curved surfaces, coin actor pooling, and AI race competition.",
    highlights: [
      "Awarded 92% (1st Class Honours) for MS5027 Gameplay Prototyping at UEL",
      "Engineered bespoke 360° rotational gravity across tubular spline meshes beyond standard CharacterMovement",
      "Term 2 Remaster: Animal Crossing-style curved-world vertex displacement shader with dynamic rolling horizon",
      "Blueprint Event Tick decal projection math calculating surface tangents along curved normals to eliminate shearing",
      "65% CPU cycle reduction achieved by replacing per-frame coin ticking with pooled Instanced Static Mesh managers",
      "Secondary procedural animation featuring velocity-driven skeletal bone swaying on character ears and tails"
    ],
    technicalDeepDive: "Standard UE5 CharacterMovement components assume planar down-vectors and fail when navigating inverted tubular geometry. Solved in Phase 1 by calculating polar coordinates from spline cross-sections, projecting dynamic artificial gravity directly toward the pipe spine. In Phase 2, countered visual vertex displacement shearing by computing real-time decal projection matrices in Event Tick, while slashing frame times by pooling coin actors into distance-culled instanced meshes.",
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
          "Procedural obstacle placement algorithm generating randomized spike hazards and jump pads",
          "High-performance arcade handling with immediate response physics tuned for competitive time-trials"
        ],
        technicalDeepDive: "Calculated surface normals across continuous spline meshes to project artificial inward gravitational vectors, allowing the bobsled pawn to maintain adhesion across 360 degrees of rotation without falling out of the tube geometry. Tuned velocity damping and rotational friction to eliminate disorientation while preserving extreme speed.",
        gallery: [
          "/images/rastacats.jpg",
          "/images/rasta_cw1_00_01_30.jpg"
        ],
        video: "/videos/rastacats_preview.mp4"
      },
      {
        id: "revisited",
        phaseLabel: "Phase 2: Revisited / Remaster (Term 2 / MS5022)",
        phaseBadge: "Remastered Architecture",
        phaseSubtitle: "Curved-World Shader, Decal Math & CPU Tick Optimization",
        title: "Rastacats Remastered: Spherical Vertex Horizon & Engine Polish",
        summary: "A ground-up architectural overhaul for the MS5022 Portfolio module. Rebuilt rendering pipelines with an Animal Crossing-inspired spherical vertex displacement shader, engineered Blueprint Event Tick decal projection math, eliminated CPU overhead through actor pooling, added velocity-driven bone swaying, AI Race Mode competitors, and blizzard particle weather.",
        highlights: [
          "Animal Crossing-inspired curved-world vertex displacement shader creating a dramatic rolling horizon effect",
          "Replaced per-frame actor ticking with object pooling for hundreds of coins, slashing CPU cycle usage by 65%",
          "Engineered Blueprint Event Tick decal math to accurately project feline graffiti and skid marks along curved mesh normals",
          "Implemented secondary animation with velocity-driven bone swaying on character tails and ears",
          "Added competitive AI Race Mode with dynamic rubber-banding and atmospheric blizzard weather simulation"
        ],
        technicalDeepDive: "Engineered world-position-offset vertex shader math: P_curved = P_world - up * (distance / curveFactor)^2. Overcame decal projection shearing on curved meshes by calculating local surface tangent frames in Blueprint tick. Optimized coin performance by replacing individual ticking actors with an Instanced Static Mesh Component manager with distance-based cull volumes.",
        gallery: [
          "/images/rastacats_revisited.jpg",
          "/images/rasta_cw2_00_01_15.jpg",
          "/images/rasta_cw2_00_01_30.jpg"
        ],
        video: "/videos/rastacats_preview.mp4"
      }
    ]
  },
  {
    id: "delirium",
    category: "gameplay",
    number: "02",
    title: "Delirium",
    tagline: "VR Psychological Horror, Wheelchair Physics & Non-Euclidean GDD Architecture",
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
    funFact: "Selected as the sole Level 5 project to exhibit downstairs alongside final graduating Level 6 games at the Royal Docks Centre for Sustainability, demoed live to over 100 industry visitors.",
    links: {
      github: null,
      demo: "https://joshej.itch.io/delirium",
      itch: "https://joshej.itch.io/delirium",
      gdd: "/docs/Delirium_GDD_and_Design_Notes.zip",
      video: "/media/delirium_preview.mp4",
      linkedin: null
    },
    shortDesc: "First-person seated VR psychological survival horror game in Unreal Engine 5.6 where you awaken in 'The Institute' confined to a physical wheelchair, forced to choose between looking forward to navigate or looking back to freeze quantum-observation 'Staff' entities.",
    summary: "Developed by 3J Mad Studios (Joshua Johnson, Dhrumil Hirapara, Jose Roberto Gálvez Vargas, Aiden Billingham, Matas Narusis, Jasmine Jilley) for MS5021 Game Studio 2—and selected as the sole Level 5 project to exhibit at the Level 6 Graduation Showcase. Originated from Joshua's 'Mental Hospital Idea' concept notes and full Game Design Document (GDD), combining a 5-minute high-turnover walk-up VR loop, weighted tank-control wheelchair inertia across 3 propulsion modes, Quantum-Observation ('Weeping Angel') AI with K-wire split-face & pendulum-stethoscope body horror, reversed speech & mic-noise detection, non-Euclidean 'Geometry Shift' checkpoints, 'The Void' black-fog sanity feedback, and 'The Rainbow Room' contrast safe zone.",
    highlights: [
      "Sole Level 5 project chosen to exhibit downstairs alongside final graduating Level 6 games at the Royal Docks Centre for Sustainability (supervised live for 100+ industry visitors).",
      "Originated the 'Mental Hospital Idea' & authored the full GDD, Narrative Template, Brainstorming Bible, Sprint 1–4 Retrospectives, Visio floorplans (modeled on UEL Docklands West Building 1st Floor), custom Illustrator UI menus, and 4K cinematic IntroSequence.mp4.",
      "Core Hook & 3-Mode Wheelchair Physics: Weighted tank-drive inertia forcing players to choose between looking forward to steer or looking back to survive—with Realistic arm-swing, Semi-Realistic pull, and Accessible Dual-Stick modes, plus a Reverse-Gaze Jumpscare Penalty.",
      "Quantum-Observation AI ('The Staff'): Freezes and subtly vibrates with a low-frequency hum inside the VR camera frustum while its pendulum stethoscope swings; stalks with wet footsteps when unobserved or during blackouts, speaking slowed reversed English ('tneitaP ,ereh kcab emoC') with microphone noise detection.",
      "Non-Euclidean Object Permanence & Zero-HUD Sanity: Hallways vanish into solid brick walls or 'The Void' black fog behind your back (acting as internal Geometry Shift level checkpoints from Phase 1 Elevator Admission to Phase 2 Doctor Pursuit and 'The Rainbow Room' surreal safe zone), paired with X-Ray code, fuse, and keypad puzzles."
    ],
    technicalDeepDive: "Solved VR simulator sickness and walk-up onboarding by anchoring the player's physical seated posture to an in-game wheelchair chassis with intentional rotational inertia and three selectable propulsion schemes (6-DOF virtual wheel grab tank drive, pull-stroke propulsion, and dual-analog accessibility). Calibrated OpenXR tracking matrices and physics handle components to ensure heavy objects and wheelchair rim propulsion possessed realistic rotational inertia without physics jitter, maintaining 90fps across 100+ live player sessions at the Royal Docks exhibition."
  },
  {
    id: "state-machine",
    category: "gameplay",
    number: "03",
    title: "State Machine Showcase",
    tagline: "Hierarchical AI, LoS Tracking & Elevator Physics",
    discipline: "AI Systems & Mechanics",
    engine: "Unreal Engine 5",
    dates: "2025",
    studio: "JoshCorp / Itch.io",
    image: "/images/state_machine_cover.png",
    links: {
      github: null,
      demo: "https://joshej.itch.io/state-machine-showcase",
      itch: "https://joshej.itch.io/state-machine-showcase",
      video: null,
      linkedin: null
    },
    shortDesc: "Playable itch.io build featuring hierarchical finite state machines (HFSM), line-of-sight visual perception cones, and dynamic physics-driven elevator systems.",
    summary: "Clean systems architecture demonstration implementing modular AI behavioral states (Patrol, Investigate, Pursue, Search) with clean state transitions.",
    highlights: [
      "Hierarchical Finite State Machine separating high-level combat tactics from low-level movement.",
      "Line-of-sight perception cones with obstacle penetration raycasts.",
      "Physics-synchronized moving platforms and interactive multi-floor elevators.",
      "Fully published and playable in the browser and Windows standalone on itch.io."
    ],
    technicalDeepDive: "Engineered cleanly decoupled state interfaces using Blueprint Interfaces and Event Dispatchers. Guarded against state thrashing through minimum dwell timers and memory queues that retain the player's last known location."
  },

  // --- CATEGORY 3: LEVEL DESIGN & SYSTEMS ---
  {
    id: "labraz",
    category: "level-design",
    number: "01",
    title: "LabR@z",
    tagline: "3-Player Asymmetrical Co-Op FPS (72% 1st)",
    discipline: "Level Design & Game Architecture",
    engine: "Unreal Engine 5 (MS5028)",
    dates: "Jan 2025 – Apr 2025",
    studio: "JoshCorp / UEL (MS5028)",
    image: "/images/labraz.jpg",
    video: "/media/labraz_preview.mp4",
    youtubeId: null,
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: null
    },
    shortDesc: "3-player asymmetrical co-op FPS level design awarded 72% (1st Class) with a comprehensive 40-page Game Design Document and video walkthrough.",
    summary: "Complex asymmetrical level architecture requiring complementary player roles (Hacker, Assault, Engineer) to breach a high-security research facility.",
    highlights: [
      "Awarded 72% (1st Class Honours) for MS5028 Level Design at UEL.",
      "Authored professional 40-page Game Design Document with flow diagrams and beat charts.",
      "Engineered sightlines, choke points, and vertical flanking routes to balance asymmetrical roles.",
      "Produced comprehensive video commentary and interactive spatial walkthrough."
    ],
    technicalDeepDive: "Balanced encounter pacing using rhythm-tension graphs. Designed modular environmental kits in Blender with clear visual language: yellow conduit cables guide hackers to security nodes, while elevated catwalks provide tactical sightlines for defensive cover."
  },
  {
    id: "project-kinetic",
    category: "level-design",
    number: "02",
    title: "Project K.I.N.E.T.I.C.",
    tagline: "Custom Sensor Mocap Rig Driving MetaHumans",
    discipline: "Hardware & Mocap Engineering",
    engine: "Xbox Kinect v2 + PSVR + UE5 LiveLink",
    dates: "Jun 2023 – Sep 2023",
    studio: "Independent Engineering",
    image: "/images/vex_robotics.jpg",
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: null
    },
    shortDesc: "A bespoke DIY motion capture pipeline bypassing £10,000 commercial suits by combining Xbox One Kinect v2 depth sensors with PSVR Move optical trackers and Brekel Body to drive real-time MetaHumans.",
    summary: "Bypassed astronomical commercial mocap costs by engineering an ingenious hybrid sensor fusion rig that delivers clean, calibrated skeletal data into Unreal Engine 5.",
    highlights: [
      "Bypassed £10k commercial motion capture suits using affordable consumer sensors.",
      "Fused infrared depth point clouds with gyroscopic controller orientation to eliminate blind-spot occlusion.",
      "Streamed 30fps bone transformations directly into UE5 MetaHuman skeleton via LiveLink.",
      "Authored custom Python OSC socket bridges to parse and clean rotation jitter."
    ],
    technicalDeepDive: "Single-camera depth sensors suffer catastrophic tracking loss when the actor rotates 180 degrees. Solved this limitation by mounting PSVR Move controllers to actor extremities, writing a Python bridge that weighted gyro yaw/pitch vectors over depth point calculations during high occlusion angles."
  },
  {
    id: "tfl-planner",
    category: "level-design",
    number: "03",
    title: "TfL Transit Planner",
    tagline: "Full-Stack London Underground Pathfinding",
    discipline: "Graph Pathfinding & Systems",
    engine: "JavaScript / HTML5 / Leaflet GIS",
    dates: "2024 – 2025",
    studio: "Personal Innovation",
    image: "/images/project_frame.jpg",
    links: {
      github: "https://github.com/JoshUEL2/TFL-Planner",
      demo: "https://joshuel2.github.io/TFL-Planner/",
      itch: null,
      video: null
    },
    shortDesc: "Interactive London transit web application mapping subway journeys, shortest path routing, and Oyster CSV fare parsing.",
    summary: "Interactive graph-based transit routing engine processing live London Underground networks with station interchanges and travel optimization.",
    highlights: [
      "Implemented graph traversal pathfinding across London's tube station network.",
      "Interactive map canvas with station search, line filtering, and interchange time calculations.",
      "Client-side Oyster CSV parser evaluating historical travel expenditure.",
      "Fully responsive and live on GitHub Pages."
    ],
    technicalDeepDive: "Modeled London Underground stations as weighted graph nodes with edges accounting for train travel times and transfer walking penalties. Used priority queue structures to deliver instantaneous route calculations directly in the browser without server dependencies."
  }
];

export const DISCIPLINES = [
  {
    id: "gameplay",
    icon: "Gamepad2",
    title: "Gameplay Systems & Physics",
    badge: "92% 1st Class",
    description: "Custom 360° rotational gravity, polar-to-cartesian coordinate positioning, actor pooling lifecycle optimization, and procedural bone animation layered over locomotion in Unreal Engine 5.",
    skills: ["UE5 Blueprints & C++", "Custom Gravity Math", "Procedural Bone Physics", "Actor Pooling", "OpenXR VR"]
  },
  {
    id: "tech-art",
    icon: "Palette",
    title: "Technical Art & Shaders",
    badge: "HLSL & Materials",
    description: "Bespoke Kuwahara watercolor post-processing filters, World Position Offset character morphing, curved-world horizon compensation shaders, and high-fidelity Substance Painter PBR textures.",
    skills: ["Post-Process Volumes", "Kuwahara Filter", "WPO Vertex Shaders", "Substance Painter", "Blender 4.3/5.0"]
  },
  {
    id: "narrative",
    icon: "BookOpen",
    title: "Ludonarrative Architecture",
    badge: "Jon Ingold Triads",
    description: "Systemic dialogue design employing Accept/Reject/Deflect triads, internal Agitation tension meters, and AAA performance capture screenplays grounded in spatial indexical storytelling.",
    skills: ["Jon Ingold Architecture", "Twine SugarCube", "Agitation State Tracking", "AAA Screenplays", "Mocap Direction"]
  },
  {
    id: "hardware",
    icon: "Cpu",
    title: "Hardware & Mocap Engineering",
    badge: "DIY Innovation",
    description: "Built Project K.I.N.E.T.I.C. DIY motion capture rig (Kinect v2 + PSVR gyro fusion) streaming real-time to MetaHumans in UE5 LiveLink. VEX UK National Robotics Finalist.",
    skills: ["Sensor Fusion (Kinect+PSVR)", "UE5 LiveLink", "Python OSC", "Physical Computing", "Robotics Mechanics"]
  },
  {
    id: "security",
    icon: "ShieldCheck",
    title: "Defensive Security & Rigour",
    badge: "Top 60 UK",
    description: "CyberCenturion Top 60 UK nationwide finalist, Harvard CS50x certified, and 13,000+ guest interactions at Premier Inn with zero disciplinaries and stress-tested operational consistency.",
    skills: ["CyberCenturion Finalist", "Harvard CS50x", "Linux/Windows Hardening", "Operational Leadership", "Team Coordination"]
  }
];

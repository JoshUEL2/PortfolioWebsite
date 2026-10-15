export const PERSONAL_INFO = {
  name: "Joshua Johnson",
  title: "Technical Game Designer & Systems Architect",
  headline: "Bridging deep Unreal Engine 5 systems, custom shader mathematics, and nuanced ludonarrative architecture.",
  location: "London, England, UK",
  email: "joshua06johnson@gmail.com",
  github: "https://github.com/JoshUEL2",
  linkedin: "https://www.linkedin.com/in/joshua-johnson-485543351/",
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
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1400&auto=format&fit=crop",
    links: {
      github: "https://github.com/JoshUEL2",
      demo: "https://www.linkedin.com/in/joshua-johnson-485543351/",
      itch: null,
      video: null
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
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop",
    links: {
      github: "https://github.com/JoshUEL2",
      demo: "https://www.linkedin.com/in/joshua-johnson-485543351/",
      itch: null,
      video: null
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
    title: "Rastacats",
    tagline: "Procedural 3D Runner & Polar Gravity (92% 1st)",
    discipline: "Gameplay Engineering & Physics",
    engine: "Unreal Engine 5.7",
    dates: "Oct 2025 – Dec 2025",
    studio: "JoshCorp / UEL (MS5027)",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop",
    links: {
      github: "https://github.com/JoshUEL2",
      demo: "https://joshej.itch.io/rastacats",
      itch: "https://joshej.itch.io/rastacats",
      video: null
    },
    shortDesc: "3D arcade bobsled runner awarded 92% (1st Class) interpreting the 1988 Cool Runnings narrative with custom 360-degree rotational gravity, polar coordinates, and an overspeed loop.",
    summary: "High-octane procedural runner overcoming standard UE5 gravity constraints with custom polar math and aggressive CPU lifecycle optimization.",
    highlights: [
      "Awarded 92% (1st Class Honours) for MS5027 Gameplay Prototyping at UEL.",
      "Engineered custom 360-degree rotational gravity beyond standard engine character movement.",
      "Curved horizon World Position Offset shader with mathematical decal projection syncing.",
      "Optimized actor pooling: disabled tick across hundreds of coin actors, utilizing native lifespan timers."
    ],
    technicalDeepDive: "Standard character movement components fail when navigating full 360-degree inverted tubular geometry. Solved by calculating custom polar-to-cartesian coordinate offsets in Blueprints and projecting player down-vectors directly toward the pipe spine. Counteracted visual WPO horizon curves by calculating real-time compensation offsets in Event Tick for drop-shadow projection."
  },
  {
    id: "vr-showcase",
    category: "gameplay",
    number: "02",
    title: "VR Systems Showcase",
    tagline: "Room-Scale VR Systems & Telemetry",
    discipline: "VR Systems & Physical Computing",
    engine: "Unreal Engine 5 VR",
    dates: "Jan 2026 – Jun 2026",
    studio: "Royal Docks Centre for Sustainability",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1400&auto=format&fit=crop",
    links: {
      github: "https://github.com/JoshUEL2",
      demo: "https://www.linkedin.com/in/joshua-johnson-485543351/",
      itch: null,
      video: null
    },
    shortDesc: "Sole Level 5 project selected for Level 6 final graduation exhibition. Josh configured, debugged, and managed the room-scale VR playtest space and user telemetry tracking.",
    summary: "High-immersion VR experience demonstrating spatial hand-tracking, ergonomic interaction boundaries, and zero-latency physics interactions.",
    highlights: [
      "Sole Level 5 project chosen to exhibit downstairs alongside Level 6 final graduating games.",
      "Configured and supervised the upstairs room-scale VR test suite for over 100 industry visitors.",
      "Calibrated 6-DOF hand presence with tactile haptic falloff curves.",
      "Engineered comfort-first locomotion reducing simulator sickness through dynamic peripheral FOV vignetting."
    ],
    technicalDeepDive: "Calibrated OpenXR tracking matrices and physics handle components to ensure heavy objects possessed realistic rotational inertia without causing physics hitching or jitter. Implemented real-time framerate telemetry logging to prevent 90fps drop spikes."
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
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
    links: {
      github: "https://github.com/JoshUEL2",
      demo: "https://joshej.itch.io/state-machine-showcase",
      itch: "https://joshej.itch.io/state-machine-showcase",
      video: null
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
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
    links: {
      github: "https://github.com/JoshUEL2",
      demo: "https://www.youtube.com/watch?v=t3xmVDuFvZU",
      itch: null,
      video: "https://www.youtube.com/watch?v=t3xmVDuFvZU"
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
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop",
    links: {
      github: "https://github.com/JoshUEL2",
      demo: "https://www.linkedin.com/in/joshua-johnson-485543351/",
      itch: null,
      video: null
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
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1400&auto=format&fit=crop",
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

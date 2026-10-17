export const PERSONAL_INFO = {
  name: "Joshua Johnson",
  title: "Technical Game Designer & Unreal Engine Systems Builder",
  headline: "I build high-velocity gameplay physics, custom post-processing shaders, and interactive narrative systems in Unreal Engine 5.",
  location: "London, UK",
  email: "joshua06johnson@gmail.com",
  github: "https://github.com/JoshUEL2",
  linkedin: "https://www.linkedin.com/in/joshgamedev",
  itch: "https://joshej.itch.io/",
  cv: "/docs/Joshua_Johnson_CV.pdf",
  institution: "University of East London (UEL)",
  role: "BSc (Hons) Computer Games Design • School Representative",
  motto: "If I don't know it, I learn it; if I need it, I build it.",
  bio: "I am a London-based Technical Game Designer focused on Unreal Engine 5 gameplay programming, HLSL and Material Graph shaders, and interactive narrative design. I enjoy solving the technical problems where design and maths meet, whether that means overriding Unreal Engine's default planar gravity for 360° pipe racing, projecting decals onto vertex-displaced meshes, or anchoring seated VR horror to physical wheelchair inertia.",
  stats: [
    { label: "Games & Prototypes", value: "15", sub: "UE5, Unity, Python & Web" },
    { label: "Gameplay Prototyping", value: "92%", sub: "1st Class Honours Top Mark" },
    { label: "CPU Tick Reduction", value: "-65%", sub: "ISM Actor Pooling (UE 5.7)" },
    { label: "Live Exhibitions", value: "2×", sub: "Sole Year 2 in Final Year Hall" }
  ]
};

export const HERO_REELS = [
  {
    id: "rastacats-remaster",
    projectId: "rastacats",
    phaseIndex: 1,
    code: "REEL 01 // UE 5.7",
    title: "Rastacats Remastered",
    subtitle: "Curved-World WPO Shader & Decal Tangent Maths",
    video: "/media/rastacats_cw2_preview.mp4",
    poster: "/images/rastacats_revisited.jpg",
    itch: "https://joshej.itch.io/rastacats",
    telemetry: [
      { label: "VERTEX SHADER", value: "P' = P - Up × (dist / R)²" },
      { label: "OPTIMISATION", value: "-65% CPU Tick (ISM Pooling)" },
      { label: "ANIMATION", value: "Velocity-Driven Bone Sway" }
    ]
  },
  {
    id: "rastacats-original",
    projectId: "rastacats",
    phaseIndex: 0,
    code: "REEL 02 // UE 5.7",
    title: "Rastacats (Original)",
    subtitle: "360° Cylindrical Pipe Adhesion & Polar Gravity",
    video: "/media/rastacats_preview.mp4",
    poster: "/images/rastacats.jpg",
    itch: "https://joshej.itch.io/rastacats",
    telemetry: [
      { label: "GRAVITY VECTOR", value: "Spline Cross-Section Polar Normals" },
      { label: "MECHANIC", value: "200+ km/h Overspeed Multiplier" },
      { label: "RECOGNITION", value: "92% (1st) • Exhibited in Final Year Hall" }
    ]
  },
  {
    id: "delirium-vr",
    projectId: "delirium",
    phaseIndex: 0,
    code: "REEL 03 // UE 5.6 OPENXR",
    title: "Delirium VR",
    subtitle: "Seated Wheelchair Tank Physics & Frustum-Locked AI",
    video: "/media/delirium_preview.mp4",
    poster: "/images/delirium_cover.png",
    itch: "https://joshej.itch.io/delirium",
    telemetry: [
      { label: "LOCOMOTION", value: "3-Mode Seated Wheelchair Inertia" },
      { label: "THREAT AI", value: "Camera-Frustum Quantum Freeze" },
      { label: "LEVEL TECH", value: "Behind-Back Geometry Shifts" }
    ]
  },
  {
    id: "rem-shader",
    projectId: "rem",
    phaseIndex: 0,
    code: "REEL 04 // UE 5 SHADERS",
    title: "REM",
    subtitle: "Multi-Directional Kuwahara Watercolour Filter & WPO Rig",
    video: "/media/rem_preview.mp4",
    poster: "/images/rem_cover.jpg",
    itch: null,
    telemetry: [
      { label: "POST-PROCESS", value: "Anisotropic Kuwahara Kernel" },
      { label: "CHARACTER", value: "Real-Time WPO Vertex Morphing" },
      { label: "PIPELINE", value: "Blender + Substance Painter + UE5" }
    ]
  }
];

export const CATEGORIES = [
  {
    id: "gameplay",
    label: "Gameplay & Systems (5)",
    desc: "360° polar gravity, AI state machines, custom physics & networked co-op"
  },
  {
    id: "vr",
    label: "VR & Immersive Tech (1)",
    desc: "OpenXR seated wheelchair locomotion & frustum-locked horror systems"
  },
  {
    id: "shaders",
    label: "Shaders & Technical Art (1)",
    desc: "Multi-directional Kuwahara watercolour filters & WPO vertex rigs"
  },
  {
    id: "level",
    label: "Level & Environment Design (3)",
    desc: "Asymmetrical co-op FPS maps, photogrammetric digital twins & blockouts"
  },
  {
    id: "narrative",
    label: "Narrative Design & GDDs (5)",
    desc: "Twine Harlowe 3.3 dialogue engines, mocap scripts & systems GDD bibles"
  },
  {
    id: "all",
    label: "All 15 Projects",
    desc: "View or search the complete 15-project catalogue in one grid"
  }
];

export const PROJECTS = [
  // ==========================================
  // CATEGORY 1: GAMEPLAY & SYSTEMS (5 Projects)
  // ==========================================
  {
    id: "rastacats",
    slug: "rastacats",
    catalogNumber: "01",
    category: "gameplay",
    categoryLabel: "Gameplay & Systems",
    isPrimaryCard: true,
    number: "01",
    title: "Rastacats",
    tagline: "360° Cylindrical Pipe Physics & Curved-World WPO Shader Remaster",
    role: "Lead Systems Programmer & Technical Designer",
    discipline: "Gameplay Physics & Shader Maths",
    statusTag: { label: "Playable Build + Remaster", color: "emerald" },
    gradeBadge: "Gameplay Prototyping • 92% (1st Class)",
    exhibitionBadge: "Sole Year 2 Build in Final Year Exhibition Hall",
    engine: "Unreal Engine 5.7 (Blueprints & WPO Shaders)",
    dates: "Oct 2025 to Jan 2026",
    studio: "Solo Developer • UEL",
    video: "/media/rastacats_preview.mp4",
    image: "/images/rastacats.jpg",
    tools: ["Unreal Engine 5.7", "Blueprints", "Polar Coordinate Maths", "WPO Shaders", "ISM Actor Pooling"],
    gallery: [
      "/images/rastacats.jpg",
      "/images/rastacats_revisited.jpg",
      "/images/rastacats_02.png",
      "/images/rastacats_03.png"
    ],
    links: {
      github: "https://github.com/JoshUEL2/MS5027-CW-Rastacats",
      demo: "https://joshej.itch.io/rastacats",
      itch: "https://joshej.itch.io/rastacats",
      video: "/media/rastacats_preview.mp4",
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    funFact: "Selected by faculty as the only Year 2 project invited to exhibit downstairs alongside graduating final-year games at the Royal Docks Centre for Sustainability.",
    shortDesc: "A high-speed cylindrical pipe racer in Unreal Engine 5.7. In Phase 1, I overrode UE5's default planar gravity with polar cross-section normals so the board can ride 360° around walls and ceilings at 200+ km/h. In Phase 2, I refactored the track into an Instanced Static Mesh pool (-65% CPU tick cost) and wrote a curved-world World Position Offset shader with tangent-aligned decal projection.",
    summary: "Built for my Gameplay Prototyping module (awarded 92%, 1st Class Honours). Use the Phase 1 and Phase 2 buttons on this card to switch live between my original cylindrical spline prototype and my revisited curved-world shader remaster.",
    highlights: [
      "Overrode UE5's default Z-axis gravity with continuous polar normal vectors calculated from the pipe's cross-sectional spline centre.",
      "Built an uncapped overspeed risk-reward loop where collecting rings pushes velocity past 200+ km/h and scales jump air-time.",
      "Refactored obstacle spawning into a fixed Instanced Static Mesh (ISM) actor pool in Phase 2, cutting CPU tick overhead by 65%.",
      "Solved decal clipping on vertex-displaced curved tracks by computing exact surface tangent angles on Event Tick."
    ],
    technicalDeepDive: "In Phase 1, standard Unreal CharacterMovement relies on a flat Z-down vector, which breaks when riding past 90° on a cylinder. I replaced planar gravity with radial normal vectors pointing from the spline centre to the board's current polar angle. In Phase 2, bending the world downward with a quadratic World Position Offset shader left CPU collision boxes and score decals floating in flat world space. I solved this by mirroring the vertex shader's parabolic drop formula inside Blueprint Event Tick and rotating decal projectors to match the derivative tangent slope.",
    codeSnippet: `// Phase 2: Curved-World WPO & Decal Tangent Compensation
float Dist = max(0.0, WorldPos.x - CameraPos.x - FlatHorizonBias);
float DropZ = (Dist * Dist) / CurvatureRadius; // Parabolic vertex offset
WorldPositionOffset = float3(0.0, 0.0, -DropZ);

// Blueprint Tick: Aligning CPU Decal Pitch to GPU Vertex Slope
float SlopeDerivative = (2.0 * Dist) / CurvatureRadius;
float PitchDegrees = -atan(SlopeDerivative) * (180.0 / PI);`,
    splitPhases: [
      {
        id: "phase-1-original",
        phaseLabel: "Phase 1: Original Prototype",
        phaseBadge: "92% (1st Class)",
        phaseSubtitle: "360° Cylindrical Pipe Adhesion & Uncapped Velocity",
        title: "Rastacats (Original Submission)",
        video: "/media/rastacats_preview.mp4",
        image: "/images/rastacats.jpg",
        gallery: [
          "/images/rastacats.jpg",
          "/images/rastacats_02.png",
          "/images/rastacats_03.png"
        ],
        summary: "My original submission for Gameplay Prototyping (92%). Inspired by Rush'n Attack and Skate 3, I built a high-velocity cylindrical pipe runner in Unreal Engine 5.7 where players carve 360° around the interior and exterior of a procedural spline tube while chaining overspeed rings.",
        highlights: [
          "Custom polar coordinate physics controller allowing smooth 360° traversal across walls and ceilings without gimbal lock.",
          "Uncapped overspeed multiplier system where chaining speed rings pushes the board past 200+ km/h.",
          "Dynamic camera FOV warp and audio pitch-shifting tied directly to forward velocity.",
          "Selected as the sole Year 2 game to exhibit in the graduating Final Year hall at the Royal Docks."
        ],
        technicalDeepDive: "Unreal's default movement component assumes gravity always points along (0, 0, -1). To let the cat ride seamlessly up walls and upside-down on ceilings, I sampled the nearest point on the track spline each frame, computed the radial vector from the spline centre to the player, and applied a custom centring force along that normal while slerping the actor's Up-vector."
      },
      {
        id: "phase-2-remaster",
        phaseLabel: "Phase 2: Revisited Remaster",
        phaseBadge: "WPO Shader + -65% CPU",
        phaseSubtitle: "Curved-World Vertex Shader, Decal Tangent Maths & ISM Pooling",
        title: "Rastacats Remastered (Technical Upgrade)",
        video: "/media/rastacats_cw2_preview.mp4",
        image: "/images/rastacats_revisited.jpg",
        gallery: [
          "/images/rastacats_revisited.jpg",
          "/images/rastacats_02.png",
          "/images/rastacats_03.png",
          "/images/rastacats.jpg"
        ],
        summary: "For my subsequent portfolio upgrade, I rebuilt Rastacats from the ground up to solve the performance and visual bottlenecks of the original prototype. I replaced actor-spawning loops with an Instanced Static Mesh (ISM) object pool (-65% CPU tick time), authored a curved-world World Position Offset (WPO) shader, and rigged procedural bone-sway animations.",
        highlights: [
          "Cut CPU tick time by 65% by replacing runtime Actor Spawn/Destroy calls with a recycled Instanced Static Mesh (ISM) pool.",
          "Authored a GPU World Position Offset (WPO) shader that bends the horizon downward quadratically with distance.",
          "Derived tangent-angle compensation maths on Event Tick so projected score decals hug the curved shader surface without clipping.",
          "Added procedural AnimGraph bone transforms that tilt the character's spine, tail, and ears based on lateral velocity."
        ],
        technicalDeepDive: "Because World Position Offset (WPO) displaces vertices purely on the GPU, the CPU collision geometry and deferred decal projectors remain on the flat Z=0 plane, causing decals to clip and vanish at a distance. I duplicated the shader's quadratic drop equation P' = P - Up * ((dist - bias) / R)^2 inside the Blueprint Event Tick and calculated the first derivative to pitch each decal projector onto the exact visual curve."
      }
    ]
  },
  {
    id: "state-machine-showcase",
    slug: "state-machine-showcase",
    catalogNumber: "02",
    category: "gameplay",
    categoryLabel: "Gameplay & Systems",
    isPrimaryCard: true,
    number: "02",
    title: "Unreal Engine 5 AI State Machine Showcase",
    tagline: "Hierarchical Finite State Machines & Enum Combat Controllers",
    role: "Gameplay & AI Systems Programmer",
    discipline: "Gameplay & AI Architecture",
    statusTag: { label: "Playable Build + Source", color: "emerald" },
    gradeBadge: "Clean HFSM Architecture",
    engine: "Unreal Engine 5 (Blueprints & AI Systems)",
    dates: "Oct 2025 to Jan 2026",
    studio: "Solo Developer • UEL",
    youtubeId: "fUvg3b93-bfb",
    image: "/images/state_machine_cover.png",
    tools: ["Unreal Engine 5", "Finite State Machines", "AnimNotifies", "Blueprint Interfaces", "AI Perception"],
    gallery: [
      "/images/state_machine_cover.png",
      "/images/state_machine_01.png",
      "/images/state_machine_02.png",
      "/images/state_machine_03.png"
    ],
    links: {
      github: "https://github.com/JoshUEL2/State-Machine-Showcase",
      demo: "https://joshej.itch.io/state-machine-showcase",
      itch: "https://joshej.itch.io/state-machine-showcase",
      video: "https://youtu.be/fUvg3b93-bfb",
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A technical demonstration of decoupled, enum-driven Hierarchical Finite State Machines (HFSM) in Unreal Engine 5. I built this to replace messy Blueprint boolean spaghetti with strict Enter, Execute, and Exit state lifecycles governing player locomotion, stamina recovery, and AI combat transitions.",
    summary: "Early prototypes often break when locomotion and combat logic rely on dozens of overlapping booleans (bIsJumping, bIsAttacking, bCanRoll). I built this playable Unreal Engine 5 sandbox to demonstrate a clean, scalable Hierarchical Finite State Machine (HFSM) pattern where transitions are validated at a single gatekeeper node and animations drive hitboxes through deterministic AnimNotifies.",
    highlights: [
      "Replaced tangled boolean branches with a strict enum-driven state dispatcher handling Idle, Locomotion, Dodge, Attack, Stagger, and Recovery.",
      "Synchronised weapon hitboxes and stamina drain to animation montage frames using custom AnimNotifyState windows.",
      "Built an on-screen real-time debug HUD that visualises active state stacks, transition locks, and AI perception cones.",
      "Published both the playable sandbox on itch.io and the full commented Blueprint repository on GitHub."
    ],
    technicalDeepDive: "To prevent race conditions when a playermashes dodge and attack on the same frame, all input events request a transition through TrySetState(NewState). That function checks a data-driven CanTransitionFrom(CurrentState, NewState) lookup table, runs OnStateExit(CurrentState) to clean up active hitboxes or timers, and only then initialises OnStateEnter(NewState).",
    codeSnippet: `// Deterministic State Transition Gatekeeper
bool UCombatStateComponent::TrySetState(ECharacterState NewState) {
    if (CurrentState == NewState || !CanTransition(CurrentState, NewState))
        return false;

    OnStateExit(CurrentState); // Guarantees hitbox & timer cleanup
    PreviousState = CurrentState;
    CurrentState = NewState;
    OnStateEnter(CurrentState);
    return true;
}`
  },
  {
    id: "pyball-physics",
    slug: "pyball",
    catalogNumber: "03",
    category: "gameplay",
    categoryLabel: "Gameplay & Systems",
    isPrimaryCard: false,
    number: "03",
    title: "PyBall: 2D Arcade Football Physics Engine",
    tagline: "Custom Elastic Collision Maths, AABB Goal Detection & Controller Input",
    role: "Solo Programmer",
    discipline: "Physics & Gameplay Programming",
    statusTag: { label: "Source + Gameplay Video", color: "emerald" },
    gradeBadge: "Programming Fundamentals • 78% (1st Class)",
    engine: "Python (SimpleGUI & Pygame Controller API)",
    dates: "Nov 2024 to Jan 2025",
    studio: "Solo Programmer • UEL",
    video: "/media/pyball_preview.mp4",
    image: "/images/pyball.jpg",
    tools: ["Python", "2D Vector Physics", "Pygame Joystick API", "SimpleGUI", "Collision Maths"],
    gallery: [
      "/images/pyball.jpg",
      "/images/pyball_circle_collision.png",
      "/images/pyball_box_collision.png"
    ],
    links: {
      github: "https://github.com/JoshUEL2/PyBall-2D-Football",
      demo: null,
      itch: null,
      video: "/media/pyball_preview.mp4",
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A 2-player 2D arcade football game written from scratch in Python (78%, 1st Class). Rather than using a pre-built physics engine, I wrote the circle-vs-circle elastic impulse equations, pitch boundary restitution, AABB goal-line detection, and dual-controller analogue input polling myself.",
    summary: "Built for my Fundamentals of Programming module (awarded 78%, 1st Class Honours). Inspired by HaxBall, I wanted to understand how 2D physics engines work under the hood, so I wrote the vector maths, penetration resolution, velocity damping, and gamepad input polling from first principles in Python.",
    highlights: [
      "Implemented circle-vs-circle collision detection and positional penetration resolution from scratch using Euclidean distance vectors.",
      "Wrote elastic momentum transfer and surface friction damping for weighty ball control and angled shots.",
      "Integrated Pygame's joystick API alongside SimpleGUI to support simultaneous 2-player PS4/Xbox controller and keyboard play.",
      "Built a custom sprite-sheet frame clock for animated goal celebrations, referee whistles, and live scoreboard tracking."
    ],
    technicalDeepDive: "When two circular rigidbodies overlap at high speed in a discrete timestep, simply reversing velocity causes them to stick together on the next frame. Before applying the impulse vector, I calculate the overlap depth (r1 + r2 - dist) and push both bodies apart along the normalised collision normal proportional to their inverse masses.",
    codeSnippet: `# Circle-vs-Circle Penetration Resolution & Impulse
 delta = ball.pos - player.pos
 dist = math.hypot(delta.x, delta.y)
 if dist < (ball.radius + player.radius) and dist > 0:
     normal = delta / dist
     overlap = (ball.radius + player.radius) - dist
     ball.pos += normal * overlap # Resolve overlap before impulse
     ball.vel = normal * player.kick_power + player.vel * 0.65`
  },
  {
    id: "procedural-road-gen",
    slug: "procedural-road-generator",
    catalogNumber: "04",
    category: "gameplay",
    categoryLabel: "Gameplay & Systems",
    isPrimaryCard: false,
    number: "04",
    title: "Procedural Arcade Racer & Road Spline Generator",
    tagline: "Procedural Bezier Spline Mesh Extrusion & Arcade Drift Physics",
    role: "Solo Systems & Tools Programmer",
    discipline: "Procedural Generation & Vehicle Physics",
    statusTag: { label: "Playable WebGL Build", color: "emerald" },
    engine: "Unity (C# & Procedural Mesh API)",
    dates: "2024",
    studio: "Solo Developer",
    image: "/images/road_gen_01.jpg",
    tools: ["Unity", "C#", "Procedural Mesh API", "Bezier Splines", "Arcade Vehicle Physics"],
    gallery: [
      "/images/road_gen_01.jpg",
      "/images/road_gen_02.jpg",
      "/images/road_gen_03.jpg"
    ],
    links: {
      github: null,
      demo: "https://joshej.itch.io/procedural-arcade-racer-and-road-generator",
      itch: "https://joshej.itch.io/procedural-arcade-racer-and-road-generator",
      video: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A procedural track generator and arcade drift racer built in Unity (C#) and playable in the browser on itch.io. Generates continuous road meshes, kerbs, and barriers at runtime from cubic Bezier splines with custom lateral tyre-grip physics.",
    summary: "I built this Unity C# tool and playable prototype to explore runtime procedural track generation. Instead of hand-modelling static race tracks, the generator extrudes road cross-sections, UV-mapped kerbs, and guardrails along procedural Bezier curves and pairs them with a custom raycast suspension and drift controller.",
    highlights: [
      "Extrudes continuous road geometry, normals, UVs, and mesh colliders at runtime from cubic Bezier spline control points.",
      "Automatically places trackside barriers and kerb strips along the spline's binormal offset vectors.",
      "Custom C# arcade vehicle controller with tuneable lateral slip curves for responsive drifting.",
      "Playable directly in the browser via WebGL on itch.io."
    ],
    technicalDeepDive: "To prevent texture stretching on tight corners vs long straights, I compute an arc-length lookup table along each Bezier segment and advance the V texture coordinate by physical distance in metres rather than raw spline parameter t."
  },
  {
    id: "gold-miner",
    slug: "gold-miner",
    catalogNumber: "05",
    category: "gameplay",
    categoryLabel: "Gameplay & Systems",
    isPrimaryCard: false,
    number: "05",
    title: "Gold Miner: Co-op Multiplayer Dungeon Crawler",
    tagline: "Networked Co-op Loot Extraction, Enemy Aggro Sync & Lobby Systems",
    role: "Multiplayer Gameplay Programmer",
    discipline: "Networked Gameplay & Systems",
    statusTag: { label: "Source Repository", color: "sky" },
    engine: "Unity 6 (C# & Photon PUN 2)",
    dates: "2025",
    studio: "Team Project • UEL",
    image: "/images/gold_miner.jpg",
    tools: ["Unity 6", "C#", "Photon PUN 2", "RPC Synchronisation", "NavMesh AI"],
    gallery: [
      "/images/gold_miner.jpg"
    ],
    links: {
      github: "https://github.com/JoshUEL2/Gold-Miner",
      demo: null,
      itch: null,
      video: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A top-down multiplayer co-op dungeon crawler built in Unity 6 with C# and Photon PUN 2. Players team up across networked lobbies to mine gold, fight dungeon enemies, and extract loot before the round timer expires.",
    summary: "I worked on the networked gameplay loop in Unity 6 using Photon PUN 2, synchronising player movement, pickaxe mining interactions, shared gold deposits, and master-client AI target switching across connected clients.",
    highlights: [
      "Implemented Photon PUN 2 room creation, lobby matchmaking, and networked player spawning.",
      "Synchronised ore node depletion and shared team gold counters via buffered Photon RPCs.",
      "Built Master-Client authoritative enemy aggro so dungeon monsters target and chase players deterministically across all screens."
    ],
    technicalDeepDive: "To avoid two players mining the same gold vein on the same frame and duplicating rewards, resource nodes request depletion authority from the Master Client via an RPC before spawning collectible gold pickups."
  },

  // ==========================================
  // CATEGORY 2: VR & IMMERSIVE TECH (1 Project)
  // ==========================================
  {
    id: "delirium",
    slug: "delirium",
    catalogNumber: "06",
    category: "vr",
    categoryLabel: "VR & Immersive Tech",
    isPrimaryCard: true,
    number: "01",
    title: "Delirium VR",
    tagline: "OpenXR Seated Wheelchair Tank Physics, Frustum-Locked AI & Non-Euclidean Rooms",
    role: "Project Lead, VR Physics Programmer & Level Architect",
    discipline: "VR Locomotion & Horror Systems",
    statusTag: { label: "Playable VR Build + GDD", color: "emerald" },
    gradeBadge: "Game Studio • 78% (1st Class)",
    exhibitionBadge: "Sole Playable VR Build on Level 5 Showcase Floor",
    engine: "Unreal Engine 5.6 (OpenXR)",
    dates: "Jan 2026 to May 2026",
    studio: "Team Studio Project (Lead) • UEL",
    video: "/media/delirium_preview.mp4",
    image: "/images/delirium_cover.png",
    tools: ["Unreal Engine 5.6", "OpenXR", "VR Tank Physics", "Frustum Dot-Product AI", "Level Streaming"],
    gallery: [
      "/images/delirium_cover.png",
      "/images/delirium_01.png",
      "/images/delirium_02.png",
      "/images/delirium_03.png"
    ],
    links: {
      github: null,
      demo: "https://joshej.itch.io/delirium",
      itch: "https://joshej.itch.io/delirium",
      gdd: "/docs/Delirium_GDD_and_Design_Notes.zip",
      video: "/media/delirium_preview.mp4",
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    funFact: "Stood as the only fully working, playable VR game in our entire Year 2 exhibition showcase, running live on headset all day with zero motion-sickness complaints.",
    shortDesc: "A seated psychological VR horror game in Unreal Engine 5.6 (OpenXR) where the player is confined to a hospital wheelchair inside a shifting 1940s asylum. I led the project and built the 3-mode wheelchair locomotion physics, camera-frustum stalker AI, and behind-the-back non-Euclidean corridor swaps.",
    summary: "Developed as Project Lead for our Game Studio module (78%, 1st Class Honours). Standard VR thumbstick walking breaks immersion and causes severe vestibulo-ocular motion sickness. By placing the player in a physical wheelchair while seated in real life, I aligned their real-world posture 1:1 with their virtual body and turned the physical effort of turning and braking a heavy wheelchair into the core survival mechanic.",
    highlights: [
      "Engineered a 3-mode seated wheelchair physics rig (Dual-Wheel Tank Steering, Single-Hand Push, and Accessibility Comfort Mode) with realistic angular momentum and brake friction.",
      "Built a quantum-locked stalker AI that calculates HMD camera frustum dot-products and line-of-sight raycasts to advance silently only when outside the player's peripheral vision.",
      "Used those same HMD look-direction checks to stream and swap asylum corridors behind the player's back for seamless non-Euclidean loops.",
      "Integrated spatial 3D audio cues (wheelchair rim creaks, distant footsteps) that force players to physically look over their shoulder, triggering the geometry shifts."
    ],
    technicalDeepDive: "VR nausea happens when your eyes see forward motion while your inner ear feels you sitting still. I solved this by grounding the player inside a high-friction wheelchair chassis with visible peripheral frame anchors and independent left/right wheel torque. For the horror loop, both the stalker AI and the non-Euclidean room swaps query DotProduct(HMDForwardVector, DirectionToTarget) every frame, guaranteeing that geometry swaps and enemy steps only occur when the target is outside the headset's field of view.",
    codeSnippet: `// Frustum-Locked Stalker & Non-Euclidean Room Swap Check
FVector ToTarget = (TargetActor->GetActorLocation() - HMDLocation).GetSafeNormal();
float LookDot = FVector::DotProduct(HMDForwardVector, ToTarget);

// If outside HMD 110-degree peripheral cone & occluded, advance AI / swap room
if (LookDot < -0.15f && !HasLineOfSight(HMDLocation, TargetActor)) {
    AdvanceStalkerAlongNavPath(DeltaTime);
    TryTriggerBehindBackCorridorSwap();
}`
  },

  // ==========================================
  // CATEGORY 3: SHADERS & TECHNICAL ART (1 Project)
  // ==========================================
  {
    id: "rem",
    slug: "rem",
    catalogNumber: "07",
    category: "shaders",
    categoryLabel: "Shaders & Technical Art",
    isPrimaryCard: true,
    number: "01",
    title: "REM",
    tagline: "Multi-Directional Kuwahara Watercolour Shader & WPO Morphing Rig",
    role: "Technical Artist & Shader Programmer",
    discipline: "Shaders & Technical Art",
    statusTag: { label: "Engine Shader Showcase", color: "amber" },
    gradeBadge: "Custom HLSL & Material Graph",
    engine: "Unreal Engine 5, Blender 5.0 & Substance 3D Painter",
    dates: "Oct 2025 to Jan 2026",
    studio: "Team Project (Technical Artist) • UEL",
    video: "/media/rem_preview.mp4",
    image: "/images/rem_cover.jpg",
    tools: ["Unreal Engine 5", "HLSL / Material Graph", "Kuwahara Filter", "Blender 5.0", "Substance 3D Painter"],
    gallery: [
      "/images/rem_cover.jpg",
      "/images/rem_01.png",
      "/images/rem_02.png",
      "/images/rem_03.png"
    ],
    links: {
      github: null,
      demo: null,
      itch: null,
      video: "/media/rem_preview.mp4",
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A surreal narrative exploration prototype in Unreal Engine 5 where the entire 3D environment renders as a living, breathing watercolour painting. I wrote the multi-directional Kuwahara post-process shader, pigment edge-bleed pass, and real-time World Position Offset (WPO) character morphing rig.",
    summary: "In REM, the environment reacts to the protagonist's psychological state. Rather than slapping a flat canvas texture overlay onto the screen, I built a multi-pass post-processing pipeline in Unreal Engine 5 that turns real-time 3D lighting and geometry into wet-on-wet watercolour brushstrokes, paired with a custom character rig modelled in Blender 5.0 and textured in Substance 3D Painter.",
    highlights: [
      "Built an anisotropic Kuwahara post-process filter in UE5 that samples directional neighbourhood quadrants and picks the sector with lowest colour variance, creating painterly brushstrokes without blurring silhouettes.",
      "Combined Sobel depth and normal edge detection with 2D Perlin noise UV distortion to simulate wet ink pooling and paper grain absorption.",
      "Created a custom protagonist rig in Blender 5.0 and drove vertex-level World Position Offset (WPO) silhouette distortion in UE5 during nightmare sequences.",
      "Authored hand-painted PBR base maps in Substance 3D Painter tuned specifically to feed clean colour gradients into the Kuwahara kernel."
    ],
    technicalDeepDive: "Standard box or Gaussian blurs destroy edge silhouettes, making 3D games look muddy rather than painted. By implementing a multi-directional Kuwahara kernel in the Post-Process Material Graph, the shader evaluates mean colour and variance across 4 overlapping quadrant windows around each pixel and outputs the mean of the quadrant with the minimum variance. This preserves razor-sharp object boundaries while flattening interior shading into distinct paint strokes.",
    codeSnippet: `// Anisotropic Kuwahara Sector Evaluation (UE5 Custom HLSL Node)
float minVariance = 1e10;
float3 finalColor = float3(0, 0, 0);
for (int k = 0; k < 4; ++k) {
    float3 mean = SectorMean[k] / SampleCount;
    float3 variance = abs(SectorMeanSq[k] / SampleCount - mean * mean);
    float totalVar = variance.r + variance.g + variance.b;
    if (totalVar < minVariance) { minVariance = totalVar; finalColor = mean; }
}
return finalColor;`
  },

  // ==========================================
  // CATEGORY 4: LEVEL & ENVIRONMENT DESIGN (3 Projects)
  // ==========================================
  {
    id: "labraz",
    slug: "labraz",
    catalogNumber: "08",
    category: "level",
    categoryLabel: "Level & Environment Design",
    isPrimaryCard: true,
    number: "01",
    title: "LabR@z",
    tagline: "Asymmetrical Co-op Split-Floor FPS Level Design & AI Combat Pacing",
    role: "Level Designer & Combat Encounter Scripter",
    discipline: "Level Design & Combat Pacing",
    statusTag: { label: "UE5 Playable Vertical Slice", color: "emerald" },
    gradeBadge: "Level Design • 72% (1st Class)",
    engine: "Unreal Engine 5 (Blueprints & NavMesh AI)",
    dates: "Oct 2025 to Jan 2026",
    studio: "Solo Level Designer • UEL",
    youtubeId: "eNkcFXg-wtg",
    image: "/images/labraz_01.jpg",
    tools: ["Unreal Engine 5", "Greyboxing", "Sightline Geometry", "NavMesh AI", "Blueprint Encounters"],
    gallery: [
      "/images/labraz_01.jpg",
      "/images/labraz_cover.png"
    ],
    links: {
      github: "https://github.com/JoshUEL2/MS5028-LabR-z",
      demo: null,
      itch: null,
      video: "https://youtu.be/eNkcFXg-wtg",
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "An asymmetrical co-op FPS level vertical slice in Unreal Engine 5 where two laboratory rats (a brawny lower-floor combatant and an agile upper-catwalk infiltrator) must coordinate across vertically separated arenas to escape a high-security biolab.",
    summary: "Built for my Level Design module (72%, 1st Class Honours). I designed and scripted a vertical multi-floor facility in Unreal Engine 5 around cooperative sightlines: Player B on the upper ventilation catwalks hacks security doors and triggers environmental traps to protect Player A fighting through heavy security waves on the laboratory floor below.",
    highlights: [
      "Designed a dual-layer vertical greybox where upper catwalks have direct sightlines onto lower combat choke points, rewarding cross-floor communication.",
      "Scripted multi-stage AI wave spawners, destructible cover barriers, and interlocked co-op security terminals in UE5 Blueprints.",
      "Used colour-coded industrial lighting (cold cyan for safe traversal routes, amber for hackable sightlines, pulsing red for active breach zones) to guide players without HUD clutter.",
      "Iterated cover spacing, ammo placement, and flank routes through recorded playtest heatmaps."
    ],
    technicalDeepDive: "In asymmetrical split-floor levels, the biggest risk is one player waiting passively while the other does all the work. I solved this by interlocking every arena progression gate with simultaneous dual-floor pressure states: hacking a terminal on the upper rafters triggers an immediate AI flank downstairs, requiring both players to stay active and communicate sightlines.",
    codeSnippet: `// Cross-Floor Interlocked Arena Trigger (Blueprint Logic)
Event OnUpperCatwalkTerminalHacked(AActor* Hacker) {
    LowerFloorBlastDoor->StartTimedOpenSequence(18.0f);
    SpawnSecurityWaveAtChokePoint(ELabSector::LowerContainment);
    UpdateSectorLightingState(ELabSector::LowerContainment, FLinearColor::Red);
}`
  },
  {
    id: "daydream",
    slug: "daydream",
    catalogNumber: "09",
    category: "level",
    categoryLabel: "Level & Environment Design",
    isPrimaryCard: true,
    number: "02",
    title: "Daydream Believer",
    tagline: "Photogrammetric 1:1 Campus Digital Twin & UE 5.7 Lumen Remaster",
    role: "Solo Environment & Technical Artist",
    discipline: "Photogrammetry & Environment Design",
    statusTag: { label: "Playable Build + Remaster", color: "emerald" },
    gradeBadge: "Game Prototyping • 72% (1st Class)",
    engine: "Unreal Engine 5.3 / 5.7 & Blender 4.3",
    dates: "Apr 2025 to Jan 2026",
    studio: "Solo Developer • UEL",
    youtubeId: "eLceB-bfb-A",
    image: "/images/daydream_revisited.jpg",
    tools: ["Unreal Engine 5.7", "Blender 4.3", "Photogrammetry", "Lumen GI", "Geometry Script"],
    gallery: [
      "/images/daydream_revisited.jpg",
      "/images/daydream.jpg"
    ],
    links: {
      github: "https://github.com/JoshUEL2/MS4035-Daydream-Believer",
      demo: "https://joshej.itch.io/daydream-believer",
      itch: "https://joshej.itch.io/daydream-believer",
      video: "https://youtu.be/eLceB-bfb-A",
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A 1:1 architectural digital twin of the University of East London Docklands campus built from on-site photography and measurements in Blender 4.3, then remastered in Unreal Engine 5.7 with Lumen global illumination and Geometry Script procedural tools.",
    summary: "I originally created Daydream Believer in Year 1 (72%, 1st Class Honours) by photographing and measuring the UEL Docklands campus to build a 1:1 walkable digital twin in Blender 4.3 and Unreal Engine 5.3. Six months later, I revisited the project in Unreal Engine 5.7 to overhaul the lighting with Lumen, replace manual stair/railing meshes with procedural Geometry Script tools, and re-author the materials.",
    highlights: [
      "Captured on-site architectural reference photos and measurements across UEL's Docklands campus to model a 1:1 scale digital twin in Blender 4.3.",
      "Rebuilt the lighting pipeline in Phase 2 using Unreal Engine 5.7 Lumen dynamic global illumination and reflections.",
      "Replaced static hand-modelled stairs and railings with procedural UE5 Geometry Script generators.",
      "Optimised lightmap UV packing and collision hulls to maintain a locked 60fps walkthrough."
    ],
    technicalDeepDive: "Raw photogrammetric and architectural imports often suffer from overlapping UV islands and dense triangle counts that tank real-time frame rates. In my Phase 2 remaster, I retopologised the modular structural kits in Blender 4.3, converted repeated architectural trims into procedural Geometry Script blueprints, and calibrated PBR roughness/albedo ranges so Lumen bounce lighting remained physically accurate.",
    codeSnippet: `// UE 5.7 Geometry Script: Procedural Stair & Railing Generation
for (int32 StepIdx = 0; StepIdx < NumSteps; ++StepIdx) {
    FTransform StepTransform(FVector(StepIdx * StepDepth, 0.f, StepIdx * StepHeight));
    AppendBox(TargetMesh, StepDimensions, StepTransform);
}
RecalculateNormals(TargetMesh);`,
    splitPhases: [
      {
        id: "daydream-phase-1",
        phaseLabel: "Phase 1: Year 1 Original (UE 5.3)",
        phaseBadge: "72% (1st Class)",
        phaseSubtitle: "1:1 Architectural Photogrammetry & Blender 4.3 Reconstruction",
        title: "Daydream Believer (Original Year 1 Build)",
        youtubeId: "eLceB-bfb-A",
        image: "/images/daydream.jpg",
        gallery: [
          "/images/daydream.jpg",
          "/images/daydream_revisited.jpg"
        ],
        summary: "My Year 1 Game Prototyping submission (72%, 1st Class Honours). I photographed and measured the real-world UEL Docklands campus buildings and interior corridors, reconstructed them at 1:1 scale in Blender 4.3, and brought them into Unreal Engine 5.3 as an interactive first-person environment.",
        highlights: [
          "On-site photography and dimensional survey of the UEL Docklands campus.",
          "1:1 scale modular architectural modelling and UV unwrapping in Blender 4.3.",
          "Interactive first-person exploration build published on itch.io."
        ],
        technicalDeepDive: "My primary challenge in Year 1 was matching real-world architectural proportions to Unreal Engine's first-person camera height and capsule radius so doorways, stairs, and sightlines felt true to life rather than cramped."
      },
      {
        id: "daydream-phase-2",
        phaseLabel: "Phase 2: UE 5.7 Remaster",
        phaseBadge: "Lumen + Geometry Script",
        phaseSubtitle: "Lumen Global Illumination Overhaul & Procedural Geometry",
        title: "Daydream Believer Remastered (UE 5.7)",
        youtubeId: "eLceB-bfb-A",
        image: "/images/daydream_revisited.jpg",
        gallery: [
          "/images/daydream_revisited.jpg",
          "/images/daydream.jpg"
        ],
        summary: "In Year 2, I revisited my original campus reconstruction and upgraded it to Unreal Engine 5.7, replacing baked static lighting with dynamic Lumen global illumination, refactoring repeated architectural elements into procedural Geometry Script blueprints, and upgrading every surface to full PBR.",
        highlights: [
          "Upgraded to Unreal Engine 5.7 with full Lumen dynamic global illumination and sky-atmosphere bounce lighting.",
          "Built procedural Geometry Script tools to generate modular staircases, pillars, and barriers dynamically.",
          "Re-authored campus concrete, glass, and brickwork materials with physically based roughness and normal maps."
        ],
        technicalDeepDive: "Migrating from static baked lightmaps in UE 5.3 to Lumen in UE 5.7 required splitting thick combined building shells into clean modular walls with proper surface cache coverage so Lumen could trace interior bounce light without light leaking."
      }
    ]
  },
  {
    id: "project-tower",
    slug: "project-tower",
    catalogNumber: "10",
    category: "level",
    categoryLabel: "Level & Environment Design",
    isPrimaryCard: false,
    number: "03",
    title: "Project Tower: Vertical Platforming Level Blockout",
    tagline: "Vertical Level Design, Jump-Arc Metrics & Sightline Pacing",
    role: "Solo Level Designer",
    discipline: "3D Level Blockout & Pacing",
    statusTag: { label: "Level Blockout Study", color: "amber" },
    engine: "Unreal Engine 5 (Greybox & Metrics)",
    dates: "2025",
    studio: "Solo Level Designer • UEL",
    image: "/images/project_tower_01.jpg",
    tools: ["Unreal Engine 5", "Level Blockout", "Jump Metrics", "Sightline Framing", "Environmental Storytelling"],
    gallery: [
      "/images/project_tower_01.jpg",
      "/images/project_tower_02.jpg",
      "/images/project_tower_03.jpg"
    ],
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A vertical 3D platformer level blockout in Unreal Engine 5 focused on standardised jump-arc metrics, vertical sightline framing (Weenies), and risk-reward shortcut routing.",
    summary: "I built Project Tower as a focused vertical level-design study in Unreal Engine 5. Every platform gap, ledge height, and spiral ascent was greyboxed against strict character jump distance and apex metrics, using architectural framing so players can always read their next vertical objective and look back down at the progress they have made.",
    highlights: [
      "Standardised platform spacing and ledge heights against exact character jump apex and horizontal air-control metrics.",
      "Used vertical sightline framing and lighting contrast to guide the player's eye upward without UI waypoints.",
      "Built risk-reward shortcut loops that let skilled players bypass outer spiral paths while keeping safe recovery ledges below."
    ],
    technicalDeepDive: "In vertical platformers, falling all the way to the bottom feels punishing rather than challenging. I tiered the tower into three distinct vertical acts separated by wide rest balconies that act as natural catch-ledges and camera landmarks."
  },

  // ==========================================
  // CATEGORY 5: NARRATIVE DESIGN & GDDs (5 Projects)
  // ==========================================
  {
    id: "the-quarry",
    slug: "the-quarry",
    catalogNumber: "11",
    category: "narrative",
    categoryLabel: "Narrative Design & GDDs",
    isPrimaryCard: true,
    number: "01",
    title: "The Quarry: Interactive Narrative Adaptation",
    tagline: "Jon Ingold Subtext Engine, 30+ Tracked Variables & Dynamic Relationship HUD",
    role: "Solo Narrative Systems Designer & Programmer",
    discipline: "Interactive Narrative & Dialogue Systems",
    statusTag: { label: "Playable in Browser", color: "emerald" },
    gradeBadge: "Storytelling for Games • 78% (1st Class)",
    engine: "Twine (Harlowe 3.3, Custom CSS & Audio)",
    dates: "Oct 2025 to Jan 2026",
    studio: "Solo Developer • UEL",
    image: "/images/the_quarry_01.png",
    tools: ["Twine", "Harlowe 3.3", "State-Machine Scripting", "CSS UI Animation", "Web Audio"],
    gallery: [
      "/images/the_quarry_01.png",
      "/images/the_quarry_02.png",
      "/images/the_quarry_03.png",
      "/images/the_quarry_cover.png"
    ],
    links: {
      github: "https://github.com/JoshUEL2/MS5029-The-Quarry-Twine",
      demo: "https://joshuel2.github.io/MS5029-The-Quarry-Twine/",
      itch: "https://joshej.itch.io/the-quarry-interactive-adaptation",
      video: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A playable interactive fiction adaptation of Supermassive Games' The Quarry built in Twine (Harlowe 3.3). Tracks 30+ persistent relationship, trust, and injury variables across 55+ interconnected nodes to drive delayed life-or-death outcomes in the final act.",
    summary: "Built for my Storytelling for Games module (78%, 1st Class Honours). Inspired by Jon Ingold's (inkle Studios) GDC talks on subtext-driven dialogue, I wanted choices to reflect immediate emotional intent rather than obvious 'Good vs Evil' buttons, while a hidden state machine quietly accumulates trust, honesty, and survival flags that pay off hours later.",
    highlights: [
      "Engineered a 55+ node branching state machine in Harlowe 3.3 tracking 30+ persistent variables ($trust_laura, $infected_nick, $shotgun_shells, $honesty_score).",
      "Applied Jon Ingold's dialogue design principles so players choose immediate emotional subtext (deflect, press, confide) rather than telegraphed alignment options.",
      "Built a custom animated CSS notification toast system ('Laura will remember that...') and dynamic audio triggers for Supermassive-style tension.",
      "Designed delayed butterfly-effect payoffs where Act 1 dialogue tone determines whether an NPC trusts you with the weapon in Act 3."
    ],
    technicalDeepDive: "Standard branching narratives suffer from combinatorial explosion if every choice forks into a brand-new path. Instead, I used a foldback 'pearl-string' architecture with stateful variables: scenes reconverge on shared structural beats, but the prose, available choices, and character survival inside those beats dynamically mutate via conditional Harlowe macros reading the player's accumulated state.",
    codeSnippet: `:: Act3_Cellar_Standoff [Harlowe 3.3 State Evaluation]
(if: $laura_trust >= 3 and $kept_silver_shell is true)[
  Laura lowers the barrel, tossing you the silver shell.
  (set: $ryan_survived to true)
](else-if: $laura_trust < 0 and $lied_about_bite is true)[
  "You lied to me in the woods," Laura whispers. She pulls the trigger.
]`
  },
  {
    id: "faith-over-fear",
    slug: "faith-over-fear",
    catalogNumber: "12",
    category: "narrative",
    categoryLabel: "Narrative Design & GDDs",
    isPrimaryCard: true,
    number: "02",
    title: "Faith Over Fear (Far Cry 5 Prequel Screenplay)",
    tagline: "Performance-Capture Prequel Screenplay & Mocap Volume Camera Blocking",
    role: "Solo Narrative Designer & Screenwriter",
    discipline: "Narrative Design & Mocap Direction",
    statusTag: { label: "Mocap Screenplay", color: "amber" },
    gradeBadge: "Storytelling for Games • 78% (1st Class)",
    engine: "AAA Performance-Capture Screenplay Format",
    dates: "Feb 2026 to May 2026",
    studio: "Solo Writer • UEL",
    image: "/images/far_cry_5.jpg",
    tools: ["Screenplay Formatting", "Mocap Volume Blocking", "Environmental Storytelling", "Character Subtext"],
    gallery: [
      "/images/far_cry_5.jpg"
    ],
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A performance-capture prequel screenplay for Ubisoft's Far Cry 5 following how Joseph Seed manipulated 17-year-old Rachel Jessop into becoming 'Faith Seed', written with full mocap stage blocking, camera focal-length cues, and actor physical direction.",
    summary: "Written for my Storytelling for Games module (78%, 1st Class Honours). Drawing on my 5+ years of stage and screen acting experience, I wrote this Far Cry 5 prequel specifically for a motion-capture volume, replacing loud villain speeches with quiet physical proximity, prop handoffs, and environmental cues in a rain-soaked Montana compound.",
    highlights: [
      "Formatted to AAA performance-capture standards with explicit mocap stage blocking, prop interaction cues, and camera lens notes.",
      "Wrote Joseph Seed's manipulation around quiet physical stillness and false paternal warmth rather than cliché villain monologues.",
      "Used my own stage and screen acting background to write playable, physically grounded subtext for the mocap performers.",
      "Iterated scene pacing through live table reads (awarded 78%, 1st Class Honours)."
    ],
    technicalDeepDive: "In AAA cutscene production, writers who put all emotional turns in dialogue create stiff, talking-head cinematics. I blocked each scene around physical distance vectors inside the mocap volume, tracking how Joseph gradually closes the spatial gap between himself and Rachel across three beats before speaking a single doctrinal word.",
    codeSnippet: `[MOCAP VOLUME BLOCKING : SCENE 04 : THE BARN THRESHOLD]
CAMERA: 35mm Anamorphic, shoulder-rigged at RACHEL'S seated eye-level (1.1m).
BLOCKING: JOSEPH enters upstage-left, stops 3.5m back at the rain-line. He does NOT step into her personal radius until Beat 3.
ACTION: Joseph kneels first (lowering his eye-line 15cm below hers) and sets the dry blanket at the edge of the floorboards, forcing Rachel to make the physical choice to reach forward.`
  },
  {
    id: "silent-string",
    slug: "silent-string",
    catalogNumber: "13",
    category: "narrative",
    categoryLabel: "Narrative Design & GDDs",
    isPrimaryCard: false,
    number: "03",
    title: "Silent String: Tactical Puppeteer GDD",
    tagline: "Systems Game Design Document, Visio Combat Flowcharts & 6-Beat Story Spine",
    role: "Lead Game & Narrative Systems Designer",
    discipline: "Game Design Bible & Systems Flowcharts",
    statusTag: { label: "Complete GDD & Diagrams", color: "amber" },
    gradeBadge: "Storytelling for Games • 78% (1st Class)",
    engine: "Game Design Bible & Microsoft Visio Flowcharts",
    dates: "Nov 2025 to Jan 2026",
    studio: "Solo Designer • UEL",
    image: "/images/silent_string.jpg",
    tools: ["Game Design Document (GDD)", "Microsoft Visio", "Combat Loop Diagrams", "Economy Balancing"],
    gallery: [
      "/images/silent_string.jpg",
      "/images/silent_string_loop.png",
      "/images/silent_string_story_spine.png"
    ],
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A comprehensive Game Design Document (GDD) and Microsoft Visio systems architecture for a dark-fantasy tactical action RPG where a mute puppeteer controls marionette constructs via tension strings.",
    summary: "Awarded 78% (1st Class Honours). Silent String pairs a dark-fantasy narrative about a mute artisan with a tactical dual-entity combat system. I authored the complete GDD alongside Microsoft Visio state diagrams mapping string-tension stamina maths, sever-and-reattach recovery loops, and a 6-beat narrative spine.",
    highlights: [
      "Designed a dual-body tactical combat loop where positioning the fragile puppeteer and the heavy marionette creates a lethal 'tether line' hitbox between them.",
      "Created Microsoft Visio flowcharts detailing string-tension resource drain, snap states, and upgrade economies.",
      "Structured a 6-beat narrative spine where mechanical marionette upgrades mirror the protagonist's psychological journey."
    ],
    technicalDeepDive: "To prevent players from hiding the summoner safely in a corner while the puppet fights off-screen, string tension decays exponentially with distance (T = k * d^2), forcing the player to stay within dangerous mid-range sightlines to maintain control."
  },
  {
    id: "cyber-bois",
    slug: "cyber-bois",
    catalogNumber: "14",
    category: "narrative",
    categoryLabel: "Narrative Design & GDDs",
    isPrimaryCard: false,
    number: "04",
    title: "Cyber- Bois: Episodic Co-op Narrative GDD",
    tagline: "Asymmetric Co-op Hacking Systems, Branching Morality Matrix & Episodic Bible",
    role: "Systems & Narrative Designer",
    discipline: "Co-op Systems & Narrative GDD",
    statusTag: { label: "Episodic Design Bible", color: "amber" },
    engine: "Game Design Bible & Branching Flowchart",
    dates: "2025",
    studio: "Solo Designer • UEL",
    image: "/images/cyber_bois.jpg",
    tools: ["Game Design Document (GDD)", "Co-op Mechanics Design", "Branching Dialogue Matrices", "Worldbuilding"],
    gallery: [
      "/images/cyber_bois.jpg"
    ],
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "An episodic co-op cyberpunk design bible combining Tales from the Borderlands-style dual-protagonist banter with asymmetric street-level combat and net-hacking mechanics.",
    summary: "Cyber- Bois is a comprehensive Game Design Document for a 2-player narrative action game set in a neon megacity. One player operates in physical street combat while the partner breaches local subnet nodes in real time, with a shared trust matrix that branches episode endings.",
    highlights: [
      "Designed asymmetric 2-player co-op encounters where subnet hacking directly alters physical arena cover, turrets, and lighting.",
      "Mapped a dual-protagonist relationship matrix where players can backstab or back up their partner during high-stakes negotiations.",
      "Authored full character sheets, faction hierarchies, and episodic pacing charts."
    ],
    technicalDeepDive: "In co-op narrative games, dialogue stalls if both players have to vote and agree on every line. I designed an 'Interrupt & Escalation' timer where either player can hijack a peaceful negotiation with a physical action before the dialogue wheel expires."
  },
  {
    id: "planet-protectors",
    slug: "planet-protectors",
    catalogNumber: "15",
    category: "narrative",
    categoryLabel: "Narrative Design & GDDs",
    isPrimaryCard: false,
    number: "05",
    title: "Planet Protectors: Transmedia Narrative GDD",
    tagline: "Environmental Action-Adventure GDD, Character Sheets & Biome Restoration Loops",
    role: "Game & Narrative Designer",
    discipline: "Game Design Bible & Character Design",
    statusTag: { label: "GDD + Character Sheets", color: "amber" },
    engine: "Game Design Bible & Character Concept Sheets",
    dates: "2024 to 2025",
    studio: "Solo Designer • UEL",
    image: "/images/planet_protectors.jpg",
    tools: ["Game Design Document (GDD)", "Character Concept Sheets", "Core Loop Diagrams", "Target Audience Research"],
    gallery: [
      "/images/planet_protectors.jpg",
      "/images/planet_protectors_char1.jpg",
      "/images/planet_protectors_char2.jpg"
    ],
    links: {
      github: null,
      demo: null,
      itch: null,
      video: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev"
    },
    shortDesc: "A complete Game Design Document and character concept bible for a co-op environmental action-adventure game where elemental heroes restore polluted biomes through systemic traversal and cleanup mechanics.",
    summary: "Planet Protectors is a family-friendly co-op action-adventure GDD designed to translate ecological restoration into rewarding gameplay loops. As players detoxify industrial zones, the world's colour palette, music layers, and traversal flora dynamically regenerate.",
    highlights: [
      "Authored full character design sheets defining distinct elemental traversal abilities and co-op combo synergies.",
      "Designed a dynamic biome-restoration state loop where cleaning pollution unlocks new organic grapple points and wind currents.",
      "Included target-demographic accessibility guidelines and non-punitive fail states for younger co-op players."
    ],
    technicalDeepDive: "Rather than treating environmental themes as text pop-ups, I tied world state directly to shader saturation and traversal unlocks: every 25% of regional cleanup shifts the global post-process LUT and spawns new climbable flora."
  }
];

export const DISSERTATION_RESEARCH = {
  badge: "02 // Academic Research & Provisional BSc Dissertation",
  title: "Counting the Spectrum: Mixed-Race Representation in Commercial Video Games",
  subtitle: "An Empirical and Practice-Based Investigation into Scarcity, Racial Ambiguity, and Playable Lead Agency",
  status: "Final Year BSc Research Project (Level 6) • University of East London",
  abstract: "Recent demographic studies such as the Virtual Census 2.0 (Jones et al., 2025) report that biracial video game characters rose from 1.39% in 2005 to 3.15% in 2017. However, surface headcounts mask a major representational gap: commercial games routinely code characters through vague visual ambiguity (a tan skin tone or textured hair) rather than explicit narrative canon, which leads players to default to assuming whiteness or racial neutrality (Dietrich, 2013). Furthermore, while mixed-race youth make up 5% to 10% of the UK urban population and over 15% of the US youth demographic, canonically mixed characters are virtually absent as primary playable box-art leads outside isolated figures like Miles Morales. My research combines a 100-character commercial audit, a production-ready 3D Flagship Protagonist Dossier, and an empirical A/B player validation survey to establish an actionable character pipeline for studios.",
  downloadProposal: "/docs/Counting_the_Spectrum_Research_Proposal.docx",
  downloadSlides: "/docs/Counting_the_Spectrum_Slides.pptx",
  slides: [
    {
      src: "/images/dissertation_slide_1.png",
      caption: "Slide 1: Research Title & Problem Space (Counting the Spectrum)"
    },
    {
      src: "/images/dissertation_slide_2.png",
      caption: "Slide 2: Core Element 1: The Three Hypotheses (The Illusion of Parity)"
    },
    {
      src: "/images/dissertation_slide_3.png",
      caption: "Slide 3: Core Element 2: Closed-Loop 3-Phase Methodology"
    },
    {
      src: "/images/dissertation_slide_4.png",
      caption: "Slide 4: Core Element 3: Studio Pipelines & Societal Impact"
    },
    {
      src: "/images/dissertation_slide_5.png",
      caption: "Slide 5: Demographic Benchmarks (Virtual Census vs UK/US Youth Census)"
    },
    {
      src: "/images/dissertation_slide_6.png",
      caption: "Slide 6: Peer-Reviewed Academic Literature Foundation"
    }
  ],
  hypotheses: [
    {
      number: "01",
      title: "Explicit Canon vs Visual Ambiguity",
      stat: "3.15% vs <0.5%",
      summary: "Published audits code characters based on surface visual cues and paratext. Without explicit dual-heritage narrative canon, sociological research (Dietrich, 2013) proves players default to assuming whiteness or raceless neutrality. I hypothesise that explicitly confirmed mixed-race characters appear at a fraction of ambiguously coded avatars."
    },
    {
      number: "02",
      title: "Playable Agency & The Box-Art Deficit",
      stat: "<1% Box-Art Leads",
      summary: "Even when mixed characters appear in background rosters, over 75% of primary playable leads remain white. Outside of Miles Morales (Marvel's Spider-Man), playable box-art multiracial protagonists are virtually non-existent, relegating mixed identities to secondary NPCs or narrative devices (Phillips, 2022)."
    },
    {
      number: "03",
      title: "The Youth Gamer Demographic Gap",
      stat: "10% to 15% Youth Audience",
      summary: "National census averages (2.9% UK; 10.2% US) include older non-gaming generations and obscure the actual gaming audience. Among under-18s and urban hubs like London, multiracial identification exceeds 5% to 10% in the UK and 15% in the US, revealing a 5× to 10× representation deficit."
    }
  ],
  methodology: [
    {
      phase: "Phase 1: Objective 100-Character Commercial Audit",
      badge: "Quantitative Content Analysis",
      details: "To eliminate subjective cherry-picking, I audit an objective sample drawn from official UKIE/GfK (UK) and Circana (US) annual best-selling charts (2018 to 2024). Using a reproducible formula (the Primary Playable Protagonist plus the Top 4 Credited Cast across 20 commercial titles = 100 characters), each character is coded across Explicit Canon, Implied Ambiguity, and Box-Art Playable Agency, with a 20% subsample independently cross-coded to verify inter-coder reliability via Cohen's kappa (κ ≥ 0.80)."
    },
    {
      phase: "Phase 2: Practice-as-Research Flagship Protagonist Dossier",
      badge: "3D Technical Art & Narrative Pipeline",
      details: "Synthesising the audit findings into a tangible studio solution, I design one deep, production-ready Flagship Multiracial Protagonist Dossier. This combines a Dual-Heritage Narrative Lore Brief (documented family lineage and lived cultural traditions) with 3D Technical Art Specifications (non-Eurocentric facial mesh topology, calibrated 3C/4A curl and braided hair groom guides, and calibrated melanin subsurface scattering profiles in Unreal Engine 5)."
    },
    {
      phase: "Phase 3: Empirical A/B Player Validation Survey",
      badge: "Pre-Test / Post-Test Intervention",
      details: "To scientifically validate the design rather than leaving it untested, I run an anonymous, GDPR-compliant online survey of 30 to 50 self-identified mixed-race gamers. Using an A/B intervention structure based on Passmore et al. (2018) immersion scales, participants rate a baseline ambiguous commercial avatar against the Flagship Dossier (first visually, then with explicit dual-heritage lore revealed) to measure whether canonical lineage and calibrated 3D features significantly increase felt representation and player immersion."
    }
  ],
  references: [
    "Dietrich, D.R. (2013) 'Avatars of whiteness: racial expression in video game characters', Sociological Inquiry, 83(1), pp. 82-105.",
    "Jones, S.S.Y., Harrisson, A., Pedraça, S., Marchessault-Brown, J., Williams, D. and Consalvo, M. (2025) 'The virtual census 2.0: a continued investigation on the representations of gender, race, and age in videogames', New Media & Society.",
    "Office for National Statistics (2022) Ethnic group, England and Wales: Census 2021.",
    "Passmore, C.J., Birk, M.V. and Mandryk, R.L. (2018) 'The privilege of immersion: racial and ethnic experiences, perceptions, and beliefs in digital gaming', Proceedings of CHI '18. ACM, pp. 1-12.",
    "Phillips, A. (2022) 'Fixing the past: memory tourism, multiraciality, and white innocence in video games', ROMchip: A Journal of Game Histories, 4(1).",
    "Williams, D., Martins, N., Consalvo, M. and Ivory, J.D. (2009) 'The virtual census: representations of gender, race and age in video games', New Media & Society, 11(5), pp. 815-834."
  ]
};

export const TOOLKIT_SPECS = [
  {
    category: "Engines & Core Tech",
    items: ["Unreal Engine 5 (5.3 to 5.7)", "Blueprints & C++", "OpenXR (Quest & PCVR)", "Unity 6 (C# & Photon PUN2)", "Twine (Harlowe 3.3)"]
  },
  {
    category: "Shaders & Technical Art",
    items: ["HLSL & UE5 Material Graph", "Kuwahara Post-Process Filters", "World Position Offset (WPO)", "Blender 4.3 / 5.0 & Geometry Script", "Substance 3D Painter & RenderDoc"]
  },
  {
    category: "Systems & Programming",
    items: ["Custom Gravity & Spline Maths", "Instanced Static Mesh Pooling", "Hierarchical State Machines (HFSM)", "Python (PCAP Certified) & TypeScript", "USB HID & Wireshark Packet Analysis"]
  },
  {
    category: "Design & Research",
    items: ["Game Design Documents (GDD)", "Microsoft Visio Flowcharts", "Jon Ingold Dialogue Systems", "Mocap Stage Blocking & LiveLink", "Empirical Audits (Cohen's Kappa)"]
  }
];

export const HARDWARE_AND_SYSTEMS_MINI = [
  {
    id: "project-kinetic",
    title: "Project K.I.N.E.T.I.C. (DIY Mocap Rig)",
    tech: "Kinect v2 + PSVR Move + UE5 LiveLink + Python OSC",
    summary: "Built a custom motion-capture rig for under £100 by fusing Xbox Kinect v2 infrared depth clouds with PSVR Move gyroscope orientation over Python OSC to drive UE5 MetaHumans."
  },
  {
    id: "tfl-planner",
    title: "TfL London Underground Pathfinding",
    tech: "JavaScript / Leaflet GIS / Graph Routing",
    summary: "Interactive London Underground shortest-path graph router and client-side Oyster CSV fare analyser.",
    link: "https://joshuel2.github.io/TFL-Planner/",
    github: "https://github.com/JoshUEL2/TFL-Planner"
  },
  {
    id: "signalrgb-hid",
    title: "SignalRGB USB HID Reverse-Engineering",
    tech: "Wireshark USBPcap / JavaScript / HID Protocols",
    summary: "Captured and decoded proprietary USB HID packets in Wireshark to write a custom SignalRGB hardware plugin for the Gigabyte Aorus P1200W PSU LCD.",
    github: "https://github.com/JoshUEL2/SignalRGB-Aorus-P1200W-Plugin"
  },
  {
    id: "hydroscreen-xc7",
    title: "HydroScreen XC7 Liquid-Cooler Driver",
    tech: "C# / .NET / Hardware Telemetry",
    summary: "Lightweight C#/.NET driver and LCD telemetry renderer for the Corsair XC7 RGB ELITE waterblock, replacing bloated background vendor software.",
    github: "https://github.com/JoshUEL2/HydroScreen-XC7-Compatiability"
  },
  {
    id: "project-realspeak",
    title: "Project Realspeak (UE5 AI NPC Pipeline)",
    tech: "UE5 MetaHuman / OpenAI STT-TTS / Lip-Sync",
    summary: "Built a real-time conversational AI NPC pipeline in Unreal Engine 5 back in early 2023 using speech-to-text, LLM prompting, and automated MetaHuman lip-sync."
  }
];

export const ACADEMIC_MODULES = [
  { name: "Gameplay Prototyping (Rastacats)", mark: "92%", grade: "1st Class" },
  { name: "Professional Practice & Portfolio", mark: "87%", grade: "1st Class" },
  { name: "Fundamentals of Programming (PyBall)", mark: "78%", grade: "1st Class" },
  { name: "Storytelling for Games (The Quarry & Silent String)", mark: "78%", grade: "1st Class" },
  { name: "Game Studio (Delirium VR)", mark: "78%", grade: "1st Class" },
  { name: "Level Design (LabR@z)", mark: "72%", grade: "1st Class" },
  { name: "Game Prototyping (Daydream Believer)", mark: "72%", grade: "1st Class" },
  { name: "Visual & Theoretical Studies", mark: "72%", grade: "1st Class" }
];

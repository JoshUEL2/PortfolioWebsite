export const PERSONAL_INFO = {
  name: "Joshua Johnson",
  title: "Technical Game Designer & Unreal Engine Systems Builder",
  headline: "If I don't know it, I learn it; if I need it, I make it. I build high-velocity gameplay physics, custom shaders, and interactive systems in Unreal Engine 5.",
  location: "London, UK",
  email: "joshua06johnson@gmail.com",
  github: "https://github.com/JoshUEL2",
  linkedin: "https://www.linkedin.com/in/joshgamedev",
  itch: "https://joshej.itch.io/",
  cv: "/docs/Joshua_Johnson_CV.pdf",
  institution: "University of East London (UEL)",
  role: "BSc (Hons) Computer Games Design • Media School Representative",
  motto: "If I don't know it, I learn it; if I need it, I make it.",
  bio: "When commercial tools or stock engine setups do not fit the design, I engineer custom alternatives: fusing an Xbox Kinect v2 and PSVR Move gyros over Python OSC into UE5 MetaHuman LiveLink, rebuilding an entire school campus across 2,377 RenderDoc textures in Blender, and overriding Unreal Engine 5 planar gravity for 360-degree pipe racing at 200 km/h. As elected School Representative for the Media School at UEL, I bridge design and mathematics across both code and cohort leadership.",
  stats: [
    { label: "Gameplay Prototyping", value: "92%", sub: "1st Class Honours Top Mark" },
    { label: "CPU Tick Reduction", value: "-65%", sub: "ISM Actor Pooling & Shaders" },
    { label: "Student Leadership", value: "School Rep", sub: "Elected • Media & Computing" },
    { label: "Verified Builds & Specs", value: "16", sub: "UE5, Unity C++, Twine & Python" }
  ]
};

export const HERO_REELS = [
  {
    id: "rastacats-remaster",
    projectId: "rastacats",
    phaseIndex: 0,
    code: "REEL 01 // UE 5.7",
    title: "Rastacats Remastered",
    subtitle: "Curved-World WPO Shader & Decal Tangent Maths",
    video: "/media/rastacats_cw2_preview.mp4",
    poster: "/images/rasta_cw2_00_01_15.jpg",
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
    phaseIndex: 1,
    code: "REEL 02 // UE 5.7",
    title: "Rastacats (Original)",
    subtitle: "360° Cylindrical Pipe Adhesion & Polar Gravity",
    video: "/media/rastacats_preview.mp4",
    poster: "/images/rasta_cw1_00_01_15.jpg",
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
    poster: "/images/rem_game_cover.jpg",
    itch: null,
    telemetry: [
      { label: "POST-PROCESS", value: "Anisotropic Kuwahara Kernel" },
      { label: "CHARACTER", value: "Real-Time WPO Vertex Morphing" },
      { label: "PIPELINE", value: "Blender + Substance Painter + UE5" }
    ]
  }
];

export const CATEGORIES = [
  { id: "gameplay", label: "Gameplay & Systems", icon: "Gamepad2" },
  { id: "vr-physics", label: "VR & Physics", icon: "Glasses" },
  { id: "shaders-art", label: "Shaders & Tech Art", icon: "Sparkles" },
  { id: "level-design", label: "Level Design", icon: "Compass" },
  { id: "narrative", label: "Narrative & Scripts", icon: "BookOpen" }
];

export const PROJECTS = [
  // ==========================================
  // 1. GAMEPLAY & SYSTEMS
  // ==========================================
  {
    id: "rastacats",
    category: "gameplay",
    title: "Rastacats",
    tagline: "360-Degree Gravity Arcade Runner & Remaster",
    discipline: "Gameplay Programming",
    engine: "Unreal Engine 5",
    dates: "Oct 2024 - Dec 2025",
    studio: "Solo Developer",
    image: "/images/rasta_cw2_00_01_15.jpg",
    gallery: [
      "/images/rasta_cw2_00_01_15.jpg",
      "/images/rasta_cw2_00_01_30.jpg",
      "/images/rasta_cw1_00_01_15.jpg",
      "/images/rasta_cw1_00_01_30.jpg",
      "/images/test_rasta_40s.jpg",
      "/images/test_rasta_138s.jpg",
      "/images/rastacats_cover.jpg"
    ],
    videoPreview: "/media/rastacats_cw2_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2",
      itch: "https://joshej.itch.io/rastacats",
      demo: null,
      gdd: "/docs/Rastacats_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "High-speed arcade bobsled runner built around a custom 360-degree cylindrical gravity controller, polar-to-cartesian obstacle spawning, and an object-pooled track generator.",
    summary: "Built across two development phases: Phase 1 established the core 360-degree pipe physics and procedural obstacle spawning (earning 92%, MS5027 Gameplay Prototyping), while Phase 2 overhauled rendering with an Animal-Crossing-style curved horizon WPO shader, Blueprint decal counter-projection, zero-tick pooled coins, and procedural skeletal bone head sway.",
    highlights: [
      "Wrote polar-to-cartesian spawning maths (Y = r * cos(theta), Z = r * sin(theta)) so obstacles lock cleanly onto any angle inside and outside the pipe.",
      "Solved GPU World Position Offset decal clipping by calculating exponential curve height deltas on Blueprint Event Tick to align shadow decals mathematically.",
      "Eliminated CPU spikes by disabling 'Start with Tick Enabled' on hundreds of pooled coins and delegating cleanup to native Initial Life Span.",
      "Layered acceleration-driven head sway over base idle poses using Animation Blueprint Transform (Modify) Bone nodes."
    ],
    technicalDeepDive: "Standard Unreal character movement assumes a fixed -Z gravity vector, while GPU WPO horizon curvature is purely visual and breaks projected drop-shadow decals. I calculated cylindrical surface normals every tick with quaternion slerp alignment, then mirror-computed the WPO offset in Blueprints so gameplay projection matched the curved optical illusion at 200+ km/h.",
    codeSnippet: `// Polar-to-Cartesian Cylindrical Track Spawner & Normal Alignment
void ARastacatsTrackManager::SpawnObstacleOnPipe(float AxialX, float AngleDegrees, float PipeRadius)
{
    const float ThetaRad = FMath::DegreesToRadians(AngleDegrees);
    
    // Convert polar angle around pipe cross-section to local Y/Z coordinates
    const float LocalY = PipeRadius * FMath::Cos(ThetaRad);
    const float LocalZ = PipeRadius * FMath::Sin(ThetaRad);
    const FVector SpawnPos = GetActorLocation() + FVector(AxialX, LocalY, LocalZ);

    // Align obstacle Up-Vector inward toward pipe centre
    const FVector SurfaceNormal = FVector(0.f, -FMath::Cos(ThetaRad), -FMath::Sin(ThetaRad)).GetSafeNormal();
    const FRotator AlignRot = FRotationMatrix::MakeFromZX(SurfaceNormal, FVector::ForwardVector).Rotator();

    AObstacleActor* PooledObstacle = AcquireFromRingPool();
    PooledObstacle->ActivateAtTransform(FTransform(AlignRot, SpawnPos));
}`,
    architectureNodes: [
      { label: "Tick Input Axis", sub: "Steering Angle Delta" },
      { label: "Polar-to-Cartesian", sub: "Y = r*cos(θ), Z = r*sin(θ)" },
      { label: "Quaternion Slerp", sub: "Surface Normal Alignment" },
      { label: "WPO Decal Sync", sub: "Tick Curve Projection" }
    ],
    versions: [
      {
        id: "phase-2",
        label: "Phase 2: Revisited Remaster",
        badge: "v2.0 Remaster",
        dates: "Oct 2025 - Dec 2025",
        engine: "Unreal Engine 5.7 (WPO Horizon Shader & Pooling)",
        image: "/images/rasta_cw2_00_01_15.jpg",
        videoPreview: "/media/rastacats_cw2_preview.mp4",
        gallery: [
          "/images/rasta_cw2_00_01_15.jpg",
          "/images/rasta_cw2_00_01_30.jpg",
          "/images/rasta_cw1_00_01_15.jpg",
          "/images/rasta_cw1_00_01_30.jpg"
        ],
        summary: "The Phase 2 remaster overhauled visual clarity and frame pacing: introducing a curved-world WPO vertex shader paired with Blueprint decal projection math, zero-tick pooled pickups, native Initial Life Span cleanup, and procedural Transform (Modify) Bone head swaying.",
        highlights: [
          "Counter-calculated exponential WPO vertex displacement on Event Tick so projected shadow decals never clip through curved track segments.",
          "Cut CPU tick overhead by 65% by disabling Tick on pooled coins and replacing heavy kill-wall overlaps with native Initial Life Span.",
          "Implemented runtime Transform (Modify) Bone skeletal nodes driven by lateral acceleration deltas.",
          "Dialled FOV and pitch offsets to make unlit voxel characters pop against the icy track."
        ],
        technicalDeepDive: "When curved-world shaders distort vertex positions in the GPU vertex factory, Unreal's deferred decals still project onto un-bent CPU collision boxes. Computing the exact exponential drop per distance vector in Blueprints and offsetting shadow decals each frame restored crisp grounding without custom C++ engine patches."
      },
      {
        id: "phase-1",
        label: "Phase 1: Original Prototype",
        badge: "v1.0 Prototype (92%)",
        dates: "Oct 2024 - Dec 2024",
        engine: "Unreal Engine 5 (Core 360° Pipe Physics)",
        image: "/images/rasta_cw1_00_01_15.jpg",
        videoPreview: "/media/rastacats_preview.mp4",
        gallery: [
          "/images/rasta_cw1_00_01_15.jpg",
          "/images/rasta_cw1_00_01_30.jpg",
          "/images/rasta_cw1_00_01_05.jpg",
          "/images/test_rasta_138s.jpg"
        ],
        summary: "The initial prototype built to solve 360-degree cylindrical surface locomotion and polar coordinate obstacle placement in Unreal Engine 5, earning a 92% First-Class grade and selection for the UEL Final-Year Showcase Hall.",
        highlights: [
          "Solved 360-degree cylindrical locomotion by overriding default planar gravity with dynamic surface normal projection.",
          "Built the polar-to-cartesian math spawner (Y = r * cos(theta), Z = r * sin(theta)) for full-circle pipe hazards.",
          "Engineered an Overspeed risk-reward multiplier, AI Race Mode, and dynamic blizzard events.",
          "Shipped a standalone playable Windows build on itch.io."
        ],
        technicalDeepDive: "Focused on proving the core mathematical loop: translating 1D horizontal steering input into angular velocity around a cylindrical cross-section while maintaining forward momentum along the world X-axis."
      }
    ]
  },
  {
    id: "state-machine-showcase",
    category: "gameplay",
    title: "State Machine Showcase",
    tagline: "AI Behaviour Trees, Autonomous Turrets & Interactive Systems",
    discipline: "AI & Systems Architecture (UEL MS4036)",
    engine: "Unreal Engine 5 (Blueprints & AI)",
    dates: "Apr 2025 - Jun 2025",
    studio: "Solo Developer",
    image: "/images/state_machine_hero.jpg",
    gallery: [
      "/images/state_machine_hero.jpg",
      "/images/state_machine_flowchart.png"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2",
      itch: "https://joshej.itch.io/state-machine-showcase",
      demo: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "A playable Unreal Engine 5 systems sandbox translating formal Visio logic flowcharts into modular AI Behaviour Trees, autonomous turret state machines, key-gated doors, and multi-floor elevators.",
    summary: "Developed for UEL Introduction to Game Scripting (MS4036). Mapped every interaction node in Microsoft Visio before scripting decoupled, event-driven gameplay state machines inside Unreal Engine 5.",
    highlights: [
      "Authored formal Visio state transition diagrams for each system (NPC, Turret, Security Door, Elevator, Health Pickup) prior to engine scripting.",
      "Built a spline-patrolling NPC Behaviour Tree evaluating perception sight cones and transitioning between Patrol, Chase, and Attack states.",
      "Engineered an autonomous AI turret cycling through Idle, Detect, Track, Fire, and Cooldown via Blackboard hysteresis.",
      "Shipped as a 926 MB standalone playable Windows build on itch.io."
    ],
    technicalDeepDive: "To stop AI states thrashing when a player hovers right on the detection threshold, perception updates feed debounced Blackboard keys rather than mutating locomotion states directly.",
    codeSnippet: `// Autonomous Turret Finite State Machine Transition Logic
void ATurretController::EvaluateStateTransition(float DistanceToTarget, bool bHasLineOfSight)
{
    switch (CurrentState)
    {
        case ETurretState::Idle:
            if (bHasLineOfSight && DistanceToTarget <= DetectionRadius)
                TransitionTo(ETurretState::Track);
            break;

        case ETurretState::Track:
            RotateBarrelTowardTarget(GetWorld()->GetDeltaSeconds());
            if (!bHasLineOfSight || DistanceToTarget > LoseTargetRadius)
                TransitionTo(ETurretState::Idle);
            else if (IsAimAlignedWithinThreshold(3.5f))
                TransitionTo(ETurretState::Fire);
            break;

        case ETurretState::Fire:
            SpawnProjectileBurst();
            TransitionTo(ETurretState::Cooldown);
            break;
    }
}`,
    architectureNodes: [
      { label: "Perception Cone", sub: "Sight & Range Raycast" },
      { label: "Blackboard FSM", sub: "Hysteresis Dwell Guard" },
      { label: "State Execution", sub: "Patrol / Track / Fire" },
      { label: "Cooldown Reset", sub: "Timer-Driven Recovery" }
    ]
  },
  {
    id: "planet-protectors",
    category: "gameplay",
    title: "Planet Protectors",
    tagline: "Eco-Action Adventure & Vertical Slice Recovery",
    discipline: "Technical Lead & Gameplay Systems",
    engine: "Unreal Engine 5 (Blueprints)",
    dates: "Mar 2025 - May 2025",
    studio: "Llama Games (5-Person Team)",
    image: "/images/planet_protectors_hero.jpg",
    gallery: [
      "/images/planet_protectors_hero.jpg",
      "/images/Bonnie Model Sheet.webp",
      "/images/Haptic Model Sheet.webp",
      "/images/Kiwi Model Sheet.webp",
      "/images/Bonnie and Kiwi Concepts.webp",
      "/images/Haptic Concepts.webp"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2/Planet-Protectors",
      itch: null,
      demo: null,
      gdd: "/docs/Planet_Protectors_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    marketingSite: {
      repoSlug: "planet-protectors",
      title: "Planet Protectors | Llama Games Companion Portal",
      path: "/marketing/planet-protectors/index.html",
      repoUrl: "https://github.com/JoshUEL2/Planet-Protectors-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/Planet-Protectors-Marketing-Website/",
      description: "Interactive promotional site for Llama Games featuring cast cards (Bonnie, Haptic & Turtle), mission zones, and an expandable Sprint Telemetry Post-Mortem terminal."
    },
    shortDesc: "Three-biome eco-action vertical slice created in Unreal Engine 5 where guardians Bonnie, Haptic, and Turtle extinguish forest fires, rescue sheep, and restore polluted coasts.",
    summary: "Served as Technical Lead & Primary Contributor for Llama Games, authoring 74 of 86 total repository commits. Engineered the sheep pickup/dropoff logic, dynamic fire propagation hazards, full collision volume integration, lighting, and procedural foliage passes in UE5.",
    highlights: [
      "Authored 74 of 86 total repository commits across core Blueprint gameplay systems and branch recovery.",
      "Built the interactive Sheep Rescue pickup/dropoff state machine alongside spreading forest fire hazard volumes.",
      "Completed the level integration pass: rebuilding mesh collision hulls, tuning post-process lighting, and scattering procedural foliage.",
      "Paired the UE5 vertical slice and GDD with an interactive companion site and engineering log."
    ],
    technicalDeepDive: "When imported environment static meshes arrived without collision hulls or hazard triggers late in the sprint, I ran a systematic collision-generation and socket-attachment pass in UE5—decoupling pickup/dropoff overlap actors from level dressing so rescuable NPCs navigated terrain reliably.",
    codeSnippet: `// UE5 Sheep Rescue Pickup & Safe-Zone Dropoff State Logic
bool ASheepRescueCharacter::TryAttachToProtector(USceneComponent* CarrySocket)
{
    if (CurrentState != ERescueState::Roaming) return false;

    CurrentState = ERescueState::Carried;
    GetCapsuleComponent()->SetCollisionResponseToChannel(ECC_Pawn, ECR_Ignore);
    AttachToComponent(CarrySocket, FAttachmentTransformRules::SnapToTargetNotIncludingScale);
    return true;
}`,
    architectureNodes: [
      { label: "Overlap Trigger", sub: "Protector Pickup Check" },
      { label: "Socket Attach", sub: "Disable Pawn Collision" },
      { label: "Fire Avoidance", sub: "Dynamic Hazard Pathing" },
      { label: "Safe Zone Score", sub: "Objective State Update" }
    ]
  },
  {
    id: "rand-io",
    category: "gameplay",
    title: "Rand.io",
    tagline: "Procedural Random Walker Arena & Photon Multiplayer",
    discipline: "Procedural Generation & Unity C#",
    engine: "Unity (C# / Tilemaps / Photon Engine)",
    dates: "Sep 2022 - Sep 2024",
    studio: "Solo Developer (A-Level CS Project)",
    image: "/images/rand_io.jpg",
    gallery: [
      "/images/rand_io.jpg",
      "/images/randio_cover.png"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2",
      itch: "https://joshej.itch.io/randio",
      demo: null,
      gdd: "/docs/Randio_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "Top-down 2D procedural shooter built in Unity (C#) with a custom Random Walker pixel-map generator, strict wall/floor spawn gating, and Photon Engine multiplayer networking.",
    summary: "Computer Science A-Level project teaching myself Unity C#, 2D Tilemaps, and networked state sync from scratch. Built a tunable Random Walker generator capable of carving open arenas or tight mazes on every match, paired with post-carve entity validation so weapons and players only spawn on walkable green tiles.",
    highlights: [
      "Engineered a configurable Random Walker map generator in C# supporting variable openness vs maze-density presets.",
      "Solved Sprite-Tilemap physics clipping by separating wall collision layers (blue tiles) from walkable arena floors (green tiles).",
      "Built a post-generation spawn allocator so pickups and players never teleport inside exterior water/wall tiles.",
      "Integrated the Photon Engine API for real-time multiplayer combat and shipped on itch.io."
    ],
    technicalDeepDive: "In an early prototype, weapons and player spawns placed via naive coordinates frequently clipped inside exterior blue wall tiles. By deferring object instantiation into an ordered post-carve pass reading strictly from recorded walkable Tilemap cells, zero out-of-bounds spawns occur across any procedural seed.",
    codeSnippet: `// Unity C# Random Walker Arena Carver & Safe Walkable Spawn List
public List<Vector2Int> GenerateIslandMap(int steps, float turnBias)
{
    var walkable = new HashSet<Vector2Int>();
    Vector2Int walker = Vector2Int.zero;

    for (int i = 0; i < steps; i++)
    {
        walkable.Add(walker);
        floorTilemap.SetTile((Vector3Int)walker, greenFloorTile);
        walker += PickCardinalStep(turnBias);
    }

    ApplyPerimeterWallTiles(walkable); // Place colliding blue border tiles only around perimeter
    return new List<Vector2Int>(walkable);
}`,
    architectureNodes: [
      { label: "Walker Carver", sub: "Variable Turn-Bias Loop" },
      { label: "Tilemap Layer Split", sub: "Floor vs Collider Wall" },
      { label: "Valid Cell Cache", sub: "Guaranteed Safe Spawns" },
      { label: "Photon Sync", sub: "Multiplayer Match State" }
    ]
  },

  // ==========================================
  // 2. VR & PHYSICS
  // ==========================================
  {
    id: "delirium",
    category: "vr-physics",
    title: "Delirium VR",
    tagline: "Physical Wheelchair Locomotion Horror (Global Game Jam)",
    discipline: "VR Physics & Interaction",
    engine: "Unreal Engine 5 (OpenXR)",
    dates: "Jan 2026 (36-Hour Jam)",
    studio: "GGJ Goldsmiths Team",
    image: "/images/delirium_cover.png",
    gallery: [
      "/images/delirium_cover.png",
      "/images/delirium_wheelchair.png",
      "/images/delirium_locomotion_modes.png",
      "/images/delirium_vr_controls.png",
      "/images/delirium_corridor.png",
      "/images/delirium_ward.png",
      "/images/delirium_directors_office.png",
      "/images/delirium_restroom.png",
      "/images/delirium_dont_stop.png",
      "/images/delirium_monster_concept.png",
      "/images/delirium_floorplan.png",
      "/images/delirium_ui_main_menu.png",
      "/images/delirium_ui_control_menu.png",
      "/images/delirium_ui_pause_menu.png",
      "/images/delirium_title_card.png"
    ],
    videoPreview: "/media/delirium_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2",
      itch: "https://joshej.itch.io/delirium",
      demo: null,
      gdd: "/docs/Delirium_GDD_and_Design_Notes.zip",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "Built in 36 hours at Goldsmiths Global Game Jam. Players physically grip, push, and brake independent left/right wheelchair rims in VR to escape a sound-hunting entity.",
    summary: "VR horror game where movement requires physical effort. Instead of thumbstick teleportation, I built a twin-wheel differential drive rig in OpenXR where frantic hand strokes generate squeaking wheel audio that draws the monster toward you.",
    highlights: [
      "Programmed differential wheelchair physics: pushing one rim pivots the chair around the opposite wheel's contact patch, while gripping both brakes.",
      "Tied wheel angular velocity directly into the monster's acoustic perception system so panicking and pushing harder reveals your position.",
      "Kept a locked 90 FPS stereoscopic frame budget with comfort vignetting to prevent motion sickness during rapid spins.",
      "Exhibited at the UEL Annual ACE Showcase and Summer VR Demonstration Series with custom UI & floorplans."
    ],
    technicalDeepDive: "Translating linear VR hand controller deltas into rotational wheel torque required projecting each motion controller's velocity vector onto the tangent of its respective wheel rim. If the player's grip stays closed while hand velocity drops near zero, friction dampers engage to simulate physical braking.",
    codeSnippet: `// OpenXR Differential Wheelchair Rim Torque & Braking Calculation
void AWheelchairPawn::UpdateWheelPhysics(UVRControllerComponent* Hand, UPrimitiveComponent* WheelRim, float DeltaTime)
{
    if (!Hand->IsGripPressed()) return;

    const FVector HandVel = Hand->GetLinearVelocity();
    const FVector WheelTangent = WheelRim->GetForwardVector();
    const float TangentialSpeed = FVector::DotProduct(HandVel, WheelTangent);

    if (HandVel.SizeSquared() < BrakingVelocityThresholdSq)
    {
        ApplyWheelBrakeDamping(WheelRim, BrakeFrictionCoefficient, DeltaTime);
    }
    else
    {
        AddDifferentialDriveTorque(WheelRim, TangentialSpeed * RimTorqueMultiplier);
        EmitWheelSqueakStimulus(FMath::Abs(TangentialSpeed));
    }
}`,
    architectureNodes: [
      { label: "OpenXR Hand Grip", sub: "Controller Velocity Vector" },
      { label: "Tangent Projection", sub: "Dot(V_hand, Wheel_Fwd)" },
      { label: "Differential Torque", sub: "Independent L/R Angular Vel" },
      { label: "Acoustic AI Stimulus", sub: "Squeak Decibel Broadcast" }
    ]
  },
  {
    id: "pyball",
    category: "vr-physics",
    title: "PyBall",
    tagline: "Custom 2D Vector Physics & Viewport Entity Culling",
    discipline: "Physics Engine Programming",
    engine: "Python 3 / SimpleGUI",
    dates: "Nov 2024 - Jan 2025",
    studio: "Solo Developer",
    image: "/images/pyball.jpg",
    gallery: [
      "/images/pyball.jpg",
      "/images/pyball_circle_collision.png",
      "/images/pyball_box_collision.png"
    ],
    videoPreview: "/media/pyball_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2",
      itch: null,
      demo: null,
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "A 2D rigid-body physics arcade simulation written from scratch in Python without external physics libraries, handling circle-to-circle and AABB collision maths alongside viewport entity culling.",
    summary: "Built to implement collision maths from first principles rather than wrapping Box2D. Handles WASD boundary-confined player movement, elastic bounce vectors, spawning waves, and a viewport culling pass that skips physics math for off-screen actors.",
    highlights: [
      "Wrote custom Circle-to-Circle and Circle-to-AABB manifold tests with exact penetration depth resolution.",
      "Solved elastic momentum transfer using vector dot products along the collision normal.",
      "Eliminated severe entity-count slowdowns by engineering viewport-based entity culling for active actors.",
      "Documented boundary check flowcharts and live debug overlays."
    ],
    technicalDeepDive: "Without spatial gating, checking dozens of off-screen spawned enemies every draw tick degraded frame pacing rapidly. Filtering update and collision checks exclusively to actors inside the active camera bounds maintained smooth real-time playback as difficulty scaled.",
    codeSnippet: `# Custom 2D Circle-to-AABB Collision Manifold & Viewport Culling
def resolve_circle_aabb(ball, box, viewport_bounds):
    if not viewport_bounds.contains(ball.pos, ball.radius):
        return False  # Viewport culling: skip off-screen simulation steps

    closest = Vec2(
        clamp(ball.pos.x, box.min.x, box.max.x),
        clamp(ball.pos.y, box.min.y, box.max.y)
    )
    delta = ball.pos - closest
    dist_sq = delta.x**2 + delta.y**2
    if dist_sq >= ball.radius**2:
        return False

    dist = max(math.sqrt(dist_sq), 1e-6)
    normal = delta / dist
    ball.pos += normal * (ball.radius - dist)
    return True`,
    architectureNodes: [
      { label: "Viewport Culling", sub: "On-Screen Bounds Check" },
      { label: "Manifold Solver", sub: "Normal & Penetration Depth" },
      { label: "Impulse Scalar (j)", sub: "Restitution Dot Product" },
      { label: "Boundary Guard", sub: "Clamp & Anti-Sink Fix" }
    ]
  },

  // ==========================================
  // 3. SHADERS & TECH ART
  // ==========================================
  {
    id: "rem",
    category: "shaders-art",
    title: "REM",
    tagline: "Anisotropic Kuwahara Watercolour Shader & WPO Morphing Rig",
    discipline: "Technical Art & Shader Programming",
    engine: "Unreal Engine 5 / HLSL / HTML5 ARG",
    dates: "Jan 2026 - Mar 2026",
    studio: "Solo Developer",
    image: "/images/rem_game_cover.jpg",
    gallery: [
      "/images/rem_game_cover.jpg",
      "/images/rem_game_shader.jpg"
    ],
    videoPreview: "/media/rem_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2/REM",
      itch: null,
      demo: null,
      gdd: "/docs/REM_Game_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    marketingSite: {
      repoSlug: "rem",
      title: "REM | Myndwell Corporation Interactive ARG Website",
      path: "/marketing/rem/index.html",
      repoUrl: "https://github.com/JoshUEL2/REM-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/REM-Marketing-Website/",
      description: "In-universe corporate wellness portal for Myndwell Corporation featuring a live 'INITIATE BREACH' exploit mode revealing the waking-world vs dream-world narrative."
    },
    shortDesc: "Surrealist psychological narrative in UE5 starring Partition-09 ('The Janitor'), powered by an anisotropic Kuwahara watercolour filter, WPO vertex morphing, and the interactive Myndwell ARG website.",
    summary: "Condenses an expansive game bible into a playable unreal-engine experience investigating memory sanitisation. Features custom multi-directional Kuwahara painterly shading that preserves sharp gameplay legibility, vertex-normal WPO protagonist morphing, Blender/Substance assets, and a standalone v1.0.0 Windows release.",
    highlights: [
      "Engineered a multi-quadrant Kuwahara post-process filter in HLSL/Material nodes preserving hard edges alongside painted brush strokes.",
      "Built custom World Position Offset (WPO) vertex-normal displacement on the protagonist silhouette without standard tutorials.",
      "Authored all 3D geometry in Blender and hand-painted PBR maps in Substance Painter.",
      "Built the Myndwell Corporation ARG portal with live breach sequence and downloadable REM Technical Art GDD."
    ],
    technicalDeepDive: "Standard box blurs destroy edge boundaries and look muddy. An anisotropic Kuwahara filter samples four overlapping quadrants around each pixel, evaluates RGB colour variance per quadrant, and outputs the mean of whichever quadrant has lowest variance—flattening flat interior noise into expressive brushstrokes while preserving sharp silhouettes.",
    codeSnippet: `// Anisotropic 4-Quadrant Kuwahara Post-Process Filter (HLSL Custom Node)
float3 KuwaharaFilter(float2 UV, float2 TexelSize, int Radius)
{
    float3 Mean[4] = {0,0,0, 0,0,0, 0,0,0, 0,0,0};
    float3 Sigma[4] = {0,0,0, 0,0,0, 0,0,0, 0,0,0};
    int2 Offsets[4] = { int2(-Radius, -Radius), int2(0, -Radius), int2(-Radius, 0), int2(0, 0) };

    for (int k = 0; k < 4; k++) {
        for (int j = 0; j <= Radius; j++) {
            for (int i = 0; i <= Radius; i++) {
                float3 Col = SceneTextureLookup(UV + (Offsets[k] + int2(i, j)) * TexelSize, 14, false).rgb;
                Mean[k] += Col;
                Sigma[k] += Col * Col;
            }
        }
    }
    return SelectMinVarianceQuadrant(Mean, Sigma, (Radius + 1) * (Radius + 1));
}`,
    architectureNodes: [
      { label: "SceneColor Buffer", sub: "Post-Process Input0" },
      { label: "4-Quadrant Kernel", sub: "Local Mean & Variance (σ²)" },
      { label: "Min-Variance Pick", sub: "Edge-Preserving Brush" },
      { label: "Myndwell ARG", sub: "Live Web Breach Mode" }
    ]
  },
  {
    id: "daydream",
    category: "shaders-art",
    title: "Daydream Believer",
    tagline: "1:1 Campus RenderDoc Reconstruction & Perceptual Shaders",
    discipline: "Technical Art & Experimental Systems",
    engine: "Unreal Engine 5 (RenderDoc + Blender + Shaders)",
    dates: "Oct 2024 - Apr 2025",
    studio: "Solo Developer",
    image: "/images/daydream_revisited.jpg",
    gallery: [
      "/images/daydream_revisited.jpg",
      "/images/daydream_engine_frame.jpg",
      "/images/daydream_00_01_05.jpg",
      "/images/daydream_00_01_15.jpg",
      "/images/daydream_00_01_30.jpg",
      "/images/test_daydream_52s.jpg"
    ],
    videoPreview: "/media/daydream_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2/Daydream-Believer-Marketing-Website",
      itch: "https://joshej.itch.io/daydream-believer",
      demo: null,
      gdd: "/docs/Daydream_Believer_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    marketingSite: {
      repoSlug: "daydream",
      title: "Daydream Believer | Interactive Design Document & Shader Archive",
      path: "/marketing/daydream/index.html",
      repoUrl: "https://github.com/JoshUEL2/Daydream-Believer-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/Daydream-Believer-Marketing-Website/",
      description: "Interactive web companion for Daydream Believer exploring Ousedale School's reconstruction, hyperfocus red/white object state shifts, and manual breathing/stepping mechanics."
    },
    shortDesc: "Two-phase UE5 project: Phase 1 reconstructed my entire secondary school (Ousedale) at 1:1 scale via RenderDoc and 2,377 textures baked in Blender; Phase 2 turned it into a playable exploration of a school day modeled around ADHD hyperfocus.",
    summary: "Begun as my very first Unreal Engine 5 environment project tracing Ousedale School via RenderDoc photogrammetry extraction, UV atlas baking in Blender, and calculating a 23.999203° alignment correction matrix. Revisited in 2025 with reactive focus/blur shaders, colour-coded NPC perception, manual Q/W/E walking, [SPACE] breathing prompts, and 15 original BandLab tracks.",
    highlights: [
      "Extracted real 3D spatial geometry of Ousedale School via RenderDoc and consolidated 2,377 separate texture files into unified Blender UV atlases upscaled with Gigapixel AI.",
      "Rebuilt architectural walls cleanly in cube geometry, calculating a 23.999203° grid rotation correction and writing custom UV tiling material nodes.",
      "Built Phase 2's ADHD hyperfocus shader: out-of-focus targets pulse stark red until approached cleanly into white clarity, paired with blue/pink/red social aura coding.",
      "Composed 15+ adaptive BandLab tracks alongside manual step and breathing mechanics and published the playable Windows build on itch.io."
    ],
    technicalDeepDive: "Raw RenderDoc map captures come fractured across thousands of draw calls (2,377 textures) with oblique world-grid orientation. Baking unified UV atlases in Blender, calculating an exact 23.999203° alignment offset, and replacing thin one-sided planes with solid architectural cubes gave Lumen stable enclosure bounce while keeping memory budgets lean.",
    codeSnippet: `// Daydream Hyperfocus Proximity Blend & Focus Target State
void ADaydreamFocusActor::UpdateFocusClarity(const FVector& PlayerLocation)
{
    const float Dist = FVector::Dist(PlayerLocation, GetActorLocation());
    const float Alpha = FMath::Clamp(1.0f - (Dist - InnerFocusRadius) / FocusFadeSpan, 0.0f, 1.0f);

    // Lerp attention marker from high-contrast crimson cue to clarified white target
    DynamicFocusMat->SetScalarParameterValue(FName("HyperfocusAlpha"), Alpha);
    DynamicFocusMat->SetScalarParameterValue(FName("DistantBlurWeight"), 1.0f - Alpha);
}`,
    architectureNodes: [
      { label: "RenderDoc Extract", sub: "2,377 Campus Textures" },
      { label: "Blender UV Bake", sub: "Unified Atlas + 23.999° Fix" },
      { label: "Custom Toon/Fog", sub: "Distant Unfocused Blur" },
      { label: "Hyperfocus Cue", sub: "Red -> White Proximity Lerp" }
    ],
    versions: [
      {
        id: "phase-2",
        label: "Phase 2: Revisited (Daydream Believer)",
        badge: "v2.0 Revisited",
        dates: "Jan 2025 - Apr 2025",
        engine: "Unreal Engine 5 (Perceptual Shaders & Manual Input)",
        image: "/images/daydream_revisited.jpg",
        videoPreview: "/media/daydream_preview.mp4",
        gallery: [
          "/images/daydream_revisited.jpg",
          "/images/daydream_engine_frame.jpg",
          "/images/daydream_00_01_15.jpg",
          "/images/daydream_00_01_30.jpg"
        ],
        summary: "Revisited the Ousedale reconstruction as a hyperbolic exploration of ADHD during a school day—translating research with real participants into reactive red/white hyperfocus cues, manual Q/W/E stepping, timed [SPACE] breathing prompts, colour-coded crowds, and 15+ BandLab tracks.",
        highlights: [
          "Translated lived research into tactile mechanics: red-to-white focus transitions, distant toon distortion, and deliberate step-by-step inputs.",
          "Implemented colour-coded social perception: Authority (blue teachers), Interest (pink friends), and shifting white/red strangers.",
          "Rigged a low-poly articulated figure with 3-point finger bones and composed 15+ piano/MIDI tracks in BandLab.",
          "Shipped playable build on itch.io alongside an interactive companion web bible."
        ],
        technicalDeepDive: "Instead of hiding attention mechanics inside UI bars, visual distortion and target colour temperature act directly as world-space indicators across the campus."
      },
      {
        id: "phase-1",
        label: "Phase 1: Project Daydream (Ousedale Trace)",
        badge: "v1.0 Environment",
        dates: "Jul 2022 - Dec 2022",
        engine: "RenderDoc / Blender / Gigapixel AI / UE5",
        image: "/images/daydream_00_01_05.jpg",
        videoPreview: "/media/daydream_preview.mp4",
        gallery: [
          "/images/daydream_00_01_05.jpg",
          "/images/test_daydream_52s.jpg"
        ],
        summary: "My first-ever Unreal Engine 5 project: reconstructing Ousedale School at 1:1 scale using RenderDoc geometry capture, Blender atlas baking across 2,377 textures, Gigapixel AI upscaling, and mathematical world-grid tracing.",
        highlights: [
          "Extracted 3D map geometry via RenderDoc and baked 2,377 individual textures into unified atlas maps inside Blender.",
          "Replaced initial leaky white planes with full watertight cube geometry aligned via a 23.999203° rotation matrix.",
          "Wrote custom material world-scaling shaders to stop brick/wall textures stretching across modular spans.",
          "Calibrated UE5 Nanite LODs and software Lumen indirect bounce lighting."
        ],
        technicalDeepDive: "Early white-plane wall blockouts suffered back-face visibility holes and severe UV stretching under playtesting; rebuilding the entire campus hull with solid cube primitives and procedural UV scaling nodes fixed collision and Lumen bounce cleanly."
      }
    ]
  },
  {
    id: "project-isla",
    category: "shaders-art",
    title: "Project Isla",
    tagline: "Procedural Perlin Noise Island & Biome Terrain Generator",
    discipline: "Procedural Tech Art & Terrain Maths",
    engine: "Unreal Engine 5 / Fast Noise / Geometry Script",
    dates: "Jan 2023 - Feb 2023",
    studio: "Solo Developer",
    image: "/images/project_isla.jpg",
    gallery: [
      "/images/project_isla.jpg"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2",
      itch: null,
      demo: null,
      gdd: "/docs/Project_Isla_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "A procedural 3D survival island generator combining multi-octave Perlin noise (Fast Noise plugin) with UE5 Geometry Script dynamic meshes, radial island fall-off masks, and randomised tree spawning.",
    summary: "Generates unique playable island landmasses on every launch in Unreal Engine 5 by pairing Fast Noise octaves with dynamic Geometry Script static mesh deformation, custom fall-off coastline curves, and slope-based foliage distribution.",
    highlights: [
      "Integrated the Fast Noise plugin and Unreal Engine Geometry Script to generate unique landmasses dynamically at runtime.",
      "Engineered a radial coastline fall-off curve so every random seed tapers smoothly into surrounding water instead of hard edges.",
      "Built dynamic static-mesh actor parameter tuning alongside procedural tree scattering, health, stamina, and survival pick-ups.",
      "Documented runtime mesh parameters and fallback workflows in the Project Isla design document."
    ],
    technicalDeepDive: "Unbounded Perlin noise generates endless hilly planes with clipped boundaries. Multiplying normalized octave height samples against a centered radial fall-off gradient forces terrain elevations smoothly below sea level along chunk perimeters, producing coherent islands ready for runtime foliage placement.",
    codeSnippet: `// Multi-Octave fBm Perlin Elevation with Radial Island Fall-Off Mask
float UProceduralIslandComponent::SampleElevation(float X, float Y, int32 Octaves, float Persistence, float Lacunarity) const
{
    float Amplitude = 1.0f, Frequency = 1.0f, NoiseHeight = 0.0f, MaxPossible = 0.0f;
    for (int32 i = 0; i < Octaves; i++)
    {
        NoiseHeight += FMath::PerlinNoise2D(FVector2D(X * Frequency, Y * Frequency)) * Amplitude;
        MaxPossible += Amplitude;
        Amplitude *= Persistence;
        Frequency *= Lacunarity;
    }
    const float NormalisedNoise = (NoiseHeight / MaxPossible + 1.0f) * 0.5f;
    const float RadialDist = FVector2D(X, Y).Size() / IslandRadius;
    const float FalloffMask = FMath::Clamp(1.0f - FMath::Pow(RadialDist, 2.4f), 0.0f, 1.0f);
    return NormalisedNoise * FalloffMask * MaxElevationZ;
}`,
    architectureNodes: [
      { label: "Fast Noise Seed", sub: "Multi-Octave Sampling" },
      { label: "Radial Fall-Off", sub: "Coastline Taper Curve" },
      { label: "Geometry Script", sub: "Runtime Mesh Rebuild" },
      { label: "Biome & Foliage", sub: "Slope-Gated Scattering" }
    ]
  },

  // ==========================================
  // 4. LEVEL DESIGN
  // ==========================================
  {
    id: "labraz",
    category: "level-design",
    title: "LabR@z",
    tagline: "3-Class Asymmetrical Co-Op FPS Arena (MS5028)",
    discipline: "Level Design & Spatial Roles",
    engine: "Unreal Engine 5 / Playtesting",
    dates: "Oct 2025 - Dec 2025",
    gradeBadge: "72% (1st Class)",
    studio: "Level Design Module (MS5028)",
    image: "/images/labraz_engine_frame.jpg",
    gallery: [
      "/images/labraz_engine_frame.jpg",
      "/images/labraz.jpg"
    ],
    videoPreview: "/media/labraz_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2",
      itch: null,
      demo: null,
      video: "https://www.youtube.com/watch?v=t3xmVDuFvZU",
      gdd: "/docs/LabRatz_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "An asymmetrical co-op FPS survival arena built in Unreal Engine 5 where progression locks distinct geometry to three specialised character classes: Tank, DPS, and Support.",
    summary: "Designed for MS5028 Level Design (72% First-Class Honours). Structures a central combat arena connected by mutually exclusive role routes: Tanks breach armoured Heavy Doors but cannot jump-pad; DPS launch onto high vantage catwalks; tiny Support ('Squishy') characters slip through Small Tunnels for emergency flanks.",
    highlights: [
      "Designed interlocking class-exclusive routes so zero players can solo-unlock every tactical path across waves.",
      "Separated level affordances clearly by class silhouette: Armoured Bulkheads (Tank), Launch Pads (DPS), and Mini Vents (Support).",
      "Validated choke points and enemy wave sightlines through live playtesting and iterative physical tabletop greyboxing.",
      "Documented spatial flowcharts, class metrics, and gameplay walkthrough video (72% First-Class Honours)."
    ],
    technicalDeepDive: "Asymmetrical co-op arenas collapse if every class takes the exact same corridors. By tying collider dimensions and pawn movement flags directly to environmental geometry (capsule radius gating Support vents, mass/interaction tags gating Heavy Doors, jump impulse triggers gating DPS perches), squad positioning emerges directly from spatial layout.",
    codeSnippet: `// Class-Gated Route Collision & Traversal Eligibility Check
bool ALabRouteGate::CanClassTraverse(ELabCharacterClass PlayerClass, float CapsuleHalfHeight) const
{
    switch (GateArchetype)
    {
        case ERouteGate::ArmouredHeavyDoor: return PlayerClass == ELabCharacterClass::Tank;
        case ERouteGate::ElevatedJumpPad:  return PlayerClass == ELabCharacterClass::DPS;
        case ERouteGate::SmallSupportTunnel: return PlayerClass == ELabCharacterClass::Support && CapsuleHalfHeight < 42.f;
        default: return true;
    }
}`,
    architectureNodes: [
      { label: "Tank Heavy Doors", sub: "Armoured Bulkhead Breach" },
      { label: "DPS Jump Pads", sub: "Elevated Flanking Perches" },
      { label: "Support Tunnels", sub: "Small-Capsule Escape Vents" },
      { label: "Central Arena", sub: "Converging Wave Loop" }
    ]
  },
  {
    id: "chanceway",
    category: "level-design",
    title: "Chanceway",
    tagline: "Non-Euclidean Shifting Maze & Probabilistic Exit Architecture",
    discipline: "Systemic Level Design & World Architecture",
    engine: "Unreal Engine 5 / HTML5 Design Archive",
    dates: "Jan 2025 - May 2025",
    studio: "Solo Developer",
    image: "/images/chanceway_hero.jpg",
    gallery: [
      "/images/chanceway_hero.jpg"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2/Chanceway-Marketing-Website",
      itch: null,
      demo: null,
      gdd: "/docs/Chanceway_Game_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    marketingSite: {
      repoSlug: "chanceway",
      title: "Chanceway | Interactive Level Architecture & Probability Archive",
      path: "/marketing/chanceway/index.html",
      repoUrl: "https://github.com/JoshUEL2/Chanceway-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/Chanceway-Marketing-Website/",
      description: "Interactive design archive for Chanceway featuring live probability distribution visualisers, 180-degree corridor turn-around simulation, and Causal Institute breach intro."
    },
    shortDesc: "A first-person psychological maze survival concept where turning 180 degrees erases prior corridors behind the camera frustum and extraction odds scale dynamically via player rituals.",
    summary: "Designed around spatial disorientation and dynamic P-value exit spawning. Starting from a 0.001% extraction chance, players manipulate probability weights through rituals, observation, and Trivia Phantom chases while unseen frustum sockets swap geometry cleanly behind their back.",
    highlights: [
      "Designed a non-Euclidean turn-around corridor system using dot-product frustum checks and occlusion raycasts before swapping geometry.",
      "Built the live Chart.js Exit Probability Curve & interactive 180-degree corridor simulator in the Chanceway companion archive.",
      "Specced a Dolly Zoom ('Zolly') corridor camera distortion to create infinite hallway depth without camera clip.",
      "Authored the full Chanceway Game Design Document."
    ],
    technicalDeepDive: "If corridor geometry mutates inside the camera viewport, spatial illusion breaks immediately. Every junction verifies that the target socket lies well outside the forward view frustum (LookDot < -0.35f) and passes an occlusion trace before swapping chunks.",
    codeSnippet: `// Frustum-Culled Non-Euclidean Corridor Socket Swapper
bool AChancewayMazeDirector::TryReconfigureBehindPlayer(UCorridorSocket* Socket, TSubclassOf<ACorridorChunk> NextChunk)
{
    const FVector ToSocket = (Socket->GetComponentLocation() - PlayerCam->GetComponentLocation()).GetSafeNormal();
    const float LookDot = FVector::DotProduct(PlayerCam->GetForwardVector(), ToSocket);

    // Only swap when socket is strictly behind the player FOV and occluded
    if (LookDot < -0.35f && !HasDirectLineOfSight(PlayerCam->GetComponentLocation(), Socket->GetComponentLocation()))
    {
        SwapCorridorModuleAtSocket(Socket, NextChunk);
        RecalculateExitProbabilityWeights();
        return true;
    }
    return false;
}`,
    architectureNodes: [
      { label: "Player Frustum Check", sub: "Dot(CamFwd, ToSocket) < -0.35" },
      { label: "Occlusion Raycast", sub: "Corner Wall Verification" },
      { label: "Silent Socket Swap", sub: "Turn-Around Topology Erase" },
      { label: "Probability Director", sub: "Dynamic 0.001% -> 10% Odds" }
    ]
  },
  {
    id: "baldis-basics-2",
    category: "level-design",
    title: "Baldi's Basics 2 (B.A.L.D. Remake)",
    tagline: "UE5 Psychological Horror Facility & 400+ Light Benchmark",
    discipline: "Level Lighting, Optimisation & Systems",
    engine: "Unreal Engine 5 (Lumen, Nanite & Blueprints)",
    dates: "Nov 2022 - Apr 2023",
    studio: "Solo Developer",
    image: "/images/baldis_basics.jpg",
    gallery: [
      "/images/baldis_basics.jpg"
    ],
    videoPreview: "/media/baldi_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2",
      itch: null,
      demo: null,
      gdd: "/docs/Baldis_Basics_2_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "My first complete playable game system in Unreal Engine 5: an interconnected school facility featuring Nanite meshes, post-processing volumes, AI pursuit, and 400+ benchmarked Lumen fixtures.",
    summary: "Built to transition from environment-only tests into full playable systems. Benchmarked performance bottlenecks after placing 400+ point lights, replacing heavy overlapping Lumen shadows with barn-door rectangle lights, Nanite geometry, stamina management, and multi-biome wings.",
    highlights: [
      "Benchmarked 400+ test iterations after Lumen point-light overlap crushed framerate, swapping to barn-door rectangle lights for stable 60 FPS.",
      "Coded collectible notebook loops, stamina exhaustion meters, power-up spawners, enemy tracking, and dynamic lighting state transitions.",
      "Designed distinct interconnected school biomes (abandoned hall and toxic warehouse) backed by full level flow planning.",
      "Included in-engine video walkthrough and B.A.L.D. Game Design Document."
    ],
    technicalDeepDive: "Stacking 400+ dynamic Lumen point lights created severe overlapping shadow-pass bottlenecks inside long corridors. Consolidating fill into wide barn-door rect lights and toggling Nanite carefully during static mesh edits restored smooth frame pacing.",
    codeSnippet: `// Escalating Pursuer AI Interval & Facility Alert State
void ABaldiPursuerAI::OnNotebookCollected(int32 TotalCollected, int32 MaxNotebooks)
{
    const float EscalationAlpha = FMath::Clamp(float(TotalCollected) / float(MaxNotebooks), 0.0f, 1.0f);
    
    StepIntervalSeconds = FMath::Lerp(1.15f, 0.28f, FMath::Pow(EscalationAlpha, 1.4f));
    HearingSensor->HearingRange = FMath::Lerp(1400.0f, 3800.0f, EscalationAlpha);
    TriggerFacilityLightStateChange(EscalationAlpha);
}`,
    architectureNodes: [
      { label: "Notebook Trigger", sub: "Collectible Event Bus" },
      { label: "Stamina & Doors", sub: "Playable Resource Loop" },
      { label: "Lumen Profiling", sub: "Point -> Barn-Door Rect" },
      { label: "Multi-Biome Map", sub: "School & Warehouse Wings" }
    ]
  },

  // ==========================================
  // 5. NARRATIVE & SCRIPTS
  // ==========================================
  {
    id: "the-quarry",
    category: "narrative",
    title: "The Quarry: Interactive Branching Narrative",
    tagline: "Playable Twine Thriller with Jon Ingold Dialogue Triads",
    discipline: "Narrative Systems & Interactive Fiction",
    engine: "Twine 2 (Harlowe 3.3.9 / Variable States)",
    dates: "Apr 2026 - May 2026",
    gradeBadge: "78% (1st Class)",
    studio: "Solo Narrative Designer",
    image: "/images/the_quarry.jpg",
    gallery: [
      "/images/the_quarry.jpg",
      "/images/the_quarry_flowchart.png"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2/The-Quarry",
      itch: null,
      demo: "/games/the_quarry/index.html",
      gdd: "/docs/The_Quarry_Branching_Script.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "Playable directly in your browser. A single-room psychological safeguarding interview built in Twine Harlowe 3.3 between an NHS clinical psychologist and 12-year-old Holly.",
    summary: "Inspired by Jon Ingold's 'Sparkling Dialogue' triad (Accept / Reject / Deflect) and tight clinical dramas like Adolescence (Ep. 3). Choices mutate a live $agitation meter and unlock secret cross-examination flags ($ChloeGotMessagesOnlineLie, $PoliceWomanHorrible) as you probe Holly's shifting story about Alfie and the quarry.",
    highlights: [
      "Playable directly in the browser (Harlowe 3.3.9), modelling escalating safeguarding tension across Indulge, Question, and Accuse responses.",
      "Tracks live Harlowe state integers ($agitation) alongside secret unlock flags that surface colour-coded contradiction branches mid-session.",
      "Implements punishing conversational loops when pressing accusations too early alongside trapdoor confession paths.",
      "Mapped end-to-end across a complete branching flowchart and annotated script document."
    ],
    technicalDeepDive: "Instead of static dialogue trees with zero memory of prior deflections, the consultation tracks $agitation alongside specific lie-detection flags (such as $ChloeGotMessagesOnlineLie). Pushing Holly past composure thresholds causes her to tip the coffee table and revert trust, while tactical de-escalation reveals hidden contradictions.",
    codeSnippet: `<!-- Twine Harlowe 3.3.9 - Safeguarding Triad & Contradiction Check -->
(set: $agitation to $agitation + 5)
(set: $ChloeGotMessagesOnlineLie to true)

[[Challenge the authenticity of the text message.->Accuse 5]]
[[Affirm that the message explains why Chloe met Alfie.->Question 7]]
[[Probe why an 18-year-old would write like that.->Question 5]]

(if: $ChloeGotMessagesOnlineLie is true)[
  (text-style: "shudder") + (text-colour: #ff00ea)[
    [[Catch Holly in a contradiction from her earlier testimony.->Accuse Use previous Dialogue Secret]]
  ]
]`,
    architectureNodes: [
      { label: "Ingold Dialogue Triad", sub: "Indulge / Question / Accuse" },
      { label: "Agitation Tracker", sub: "Dynamic $agitation Score" },
      { label: "Secret Contradictions", sub: "Conditional Clue Flags" },
      { label: "Trapdoor Endings", sub: "Evasion vs Confession" }
    ]
  },
  {
    id: "waiwwai",
    category: "narrative",
    title: "WAIWWAI: The Turnpike Echoes",
    tagline: "2.5D Psychological Dementia Bible & Engineered Frustration",
    discipline: "Narrative Design & Interactive Project Bible",
    engine: "2.5D UE5 Concept / HTML5 Project Bible",
    dates: "Oct 2023 - May 2025",
    studio: "Solo Narrative & Systems Designer",
    image: "/images/waiwwai_game_cover.jpg",
    gallery: [
      "/images/waiwwai_game_cover.jpg"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2/WaiWWai-Marketing-Website",
      itch: null,
      demo: null,
      gdd: "/docs/WAIWWAI_Game_Design_Document.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    marketingSite: {
      repoSlug: "waiwwai",
      title: "WAIWWAI | Interactive Turnpike Lane Project Bible",
      path: "/marketing/waiwwai/index.html",
      repoUrl: "https://github.com/JoshUEL2/WaiWWai-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/WaiWWai-Marketing-Website/",
      description: "Full interactive Project Bible for 'Where am I, Wait, Where am I', featuring the deceptive tube alert breach, eroding Ticket/Keys/Photo inventory demo, and evasive SAVE GAME mechanic."
    },
    shortDesc: "Inspired by 'Everywhere at the End of Time', WaiWWai places players in the shoes of an unnamed elderly woman lost on an infinite beige Turnpike Lane London Underground platform.",
    summary: "Disempowers the player deliberately to evoke cognitive disorientation: deafening 100dB Train Resets erode memories between levels, inventory items (Ticket, Keys, Photo) crumble on inspection, NPCs shout false accusations, and UI itself lies via Phantom Inputs, Temporal Teleportation, and an evasive SAVE GAME button.",
    highlights: [
      "Designed 'Engineered Frustration' systems: phantom camera/turn inputs, unexpected position skips, and hostile indifferent crowd entities.",
      "Built the interactive Inventory of Nothing demo where Ticket, Keys, and Photo objects crumble on click inside the companion Project Bible.",
      "Implemented the interactive Evasive 'SAVE GAME' mechanic demo (MECHANIC_DEMO: 004) displaying PERMISSION DENIED when hovered.",
      "Structured the four-stage descent (Arrival -> The Glitch -> Erosion -> The Void) alongside the complete GDD."
    ],
    technicalDeepDive: "Conventional horror UI empowers players with predictable inventories and safe checkpoints. By turning UI affordances against expectations—crumbling key items on inspect and evading cursor clicks on Save prompts—disorientation is felt kinesthetically rather than explained in dialogue.",
    codeSnippet: `// WAIWWAI Mechanic Demo 004 - Evasive 'SAVE GAME' Cursor Avoidance
const evasiveBtn = document.getElementById('evasive-btn');
const saveStatus = document.getElementById('save-status');

evasiveBtn.addEventListener('mouseenter', () => {
    const offsetX = (Math.random() - 0.5) * 180;
    const offsetY = (Math.random() - 0.5) * 120;
    evasiveBtn.style.transform = \`translate(\${offsetX}px, \${offsetY}px)\`;
    saveStatus.textContent = 'ERROR: PERMISSION DENIED';
    saveStatus.classList.remove('hidden');
});`,
    architectureNodes: [
      { label: "The Train Reset", sub: "100dB Level Transition" },
      { label: "Inventory of Nothing", sub: "Crumbling Memory Items" },
      { label: "Phantom Inputs", sub: "Unprompted Stumble/Skip" },
      { label: "Hostile UI", sub: "Evasive Save Prompt" }
    ]
  },
  {
    id: "dear-hiring-manager",
    category: "gameplay",
    title: "Dear, Hiring Manager",
    tagline: "Satirical Corporate Life-Simulator & Unity 6 Mobile Systems",
    discipline: "Lead Game Designer & Systems Programmer",
    engine: "Unity 6 (UI Toolkit) & Microsoft Visio",
    dates: "Oct 2025 - Oct 2026",
    studio: "24-Hour Studios (Solo Project)",
    image: "/images/dear_hiring_manager_hero.jpg",
    gallery: [
      "/images/dear_hiring_manager_hero.jpg"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2/DearHiringManager",
      itch: "https://joshej.itch.io/dear-hiring-manager",
      demo: "https://github.com/JoshUEL2/DearHiringManager/releases/latest",
      gdd: "/docs/Dear_Hiring_Manager_Screenplay.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "Portrait mobile corporate life-simulator built in Unity 6 UI Toolkit with an extensible IWeeklySystem economy, Visio decision flowcharts, and 20+ tactile Painter2D minigames.",
    summary: "Developed alongside its Microsoft Visio branching GDD and satirical screenplay. Tracks cascading rent inflation, burnout thresholds, dynamic career gates, and 81+ task nodes across portrait UI Toolkit layouts—shipping automated Android APK releases to GitHub Releases and Itch.io.",
    highlights: [
      "Architected 81+ procedural task configurations and 20+ interactive minigames (Timing Rings, Agile Scrums, Code Reviews, Grid Steer).",
      "Engineered the extensible IWeeklySystem turn-pass coordinating Financial, Job, Education, and Burnout systems cleanly.",
      "Built responsive Unity UI Toolkit portrait screens using safe-area insets and Obsidian-Crimson theme tokens.",
      "Automated batchmode Unity APK builds published directly to GitHub Releases and itch.io."
    ],
    technicalDeepDive: "Built upon an extensible IWeeklySystem pipeline: every weekly turn executes registered system passes in deterministic order while interactive minigames bind low-latency PointerDown events over UI Toolkit Painter2D vector geometry.",
    codeSnippet: `// Unified Weekly Turn Lifecycle & Economic Resolution Pass
public void AdvanceWeek()
{
    currentWeek++;
    
    foreach (var system in weeklySystems)
    {
        system.ProcessWeeklyTurn(currentData);
    }
    
    financialSystem.CompoundInflation(currentData);
    if (currentData.stress >= 1.0f)
    {
        EvaluateBurnoutRisk(currentData);
    }
    
    EventManager.Instance?.TriggerEvent(new WeekAdvancedEvent(currentWeek));
}`,
    architectureNodes: [
      { label: "Turn Engine Clock", sub: "IWeeklySystem Lifecycle Pass" },
      { label: "Career Matrix", sub: "Education & Shift Gating" },
      { label: "20+ Minigames", sub: "Pointer-Capture UI Toolkit" },
      { label: "Automated CI", sub: "Batchmode Android APK" }
    ]
  },
  {
    id: "far-cry-5-dlc",
    category: "narrative",
    title: "Far Cry 5 DLC: 'Faith Over Fear'",
    tagline: "AAA Prequel Narrative Treatment & Mocap Screenplay",
    discipline: "AAA Narrative & Environmental Storytelling",
    engine: "Performance-Capture Screenplay & Beat Sheet",
    dates: "Feb 2026 - May 2026",
    gradeBadge: "78% (1st Class)",
    studio: "Solo Narrative Designer",
    image: "/images/far_cry_5.jpg",
    gallery: [
      "/images/far_cry_5.jpg"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2",
      itch: null,
      demo: null,
      gdd: "/docs/Faith_Over_Fear_Screenplay.docx",
      linkedin: "https://www.linkedin.com/in/joshgamedev/details/projects/"
    },
    shortDesc: "AAA prequel screenplay and beat treatment exploring how runaway Rachel Jessop was systematically indoctrinated by Joseph Seed into 'Faith Seed', tailored for motion-capture performance volumes.",
    summary: "Developed for Level 5 Narrative Design at UEL (78% First-Class). Replaces exposition-heavy villain monologues with Jon Ingold subtext, vocal rhythm, and indexical staging—contrasting freezing torrential rain and mud against Joseph's umbrella shield.",
    highlights: [
      "Authored a five-page mocap-ready screenplay complete with parenthetical direction, beat sheets, and profile Bibles.",
      "Excised unfilmable prose directions after iterative table reads to keep dialogue grounded in performable spatial blocking.",
      "Used physical props (mud, umbrella shelter, Golden aviators) for silent power-dynamic storytelling without exposition.",
      "Downloadable in full alongside the screenplay dossier."
    ],
    technicalDeepDive: "Traditional villain introductions over-rely on camera-cut monologues. Framing authority through actor proximity, umbrella coverage in driving rain, and micro-pauses lets mocap performers convey coercion strictly through physical subtext.",
    codeSnippet: `// Screenplay Cutscene Sync - Weather & Proximity Blocking Trigger
void ACutsceneRainDirector::UpdateUmbrellaShelterState(float SeedToRachelDist)
{
    const bool bInsideUmbrellaCone = SeedToRachelDist <= ShelterRadius;
    RachelClothingMat->SetScalarParameterValue(FName("RainWetnessTarget"), bInsideUmbrellaCone ? 0.15f : 1.0f);
    AudioRainSnap->SetParameter(FName("OcclusionDamping"), bInsideUmbrellaCone ? 0.65f : 0.0f);
}`,
    architectureNodes: [
      { label: "Subtextual Script", sub: "Performable Beat Direction" },
      { label: "Indexical Props", sub: "Umbrella & Freezing Rain" },
      { label: "Mocap Volume", sub: "Blocking & Eye-Line Notes" },
      { label: "Ingold Rhythm", sub: "Trimmed Expository Fat" }
    ]
  }
];

export const DISSERTATION_RESEARCH = {
  badge: "02 // Academic Research & BSc Dissertation",
  title: "Representing the Spectrum: An Empirical Audit and Design Framework for Mixed-Race Characters in Commercial Video Games",
  subtitle: "An Empirical Audit and Design Framework for Mixed-Race Characters in Commercial Video Games",
  status: "MS6033 Final Project: Development (Level 6) • University of East London",
  abstract: "Recent demographic analysis indicates that biracial video game characters rose from 1.39% in 2005 to 3.15% in 2017, nominally exceeding earlier US population baselines of 2.13% (Jones et al., 2025). However, headcount parity masks a persistent representational gap: in commercial titles, mixed-race characters are frequently coded only through visual ambiguity, leading players to default to assuming whiteness or racial neutrality rather than recognising authentic multiracial heritage (Dietrich, 2013). Furthermore, national census benchmarks of declared mixed-race people (2.9% in the UK; 10.2% in the US) obscure generational realities: multiracial populations are heavily concentrated in younger demographics, where mixed youth exceed 5–10% in the UK and 15% in the US—the core video game audience. Crucially, commercial gaming lacks games-native multiracial leads (even Miles Morales was inherited from Marvel comics rather than originating in game development pipelines). This project investigates whether mixed-race characters are truly represented when scrutinised through explicit narrative canon, lead playability, and youth gamer demographics.",
  downloadProposal: "/docs/Representing_the_Spectrum_Research_Proposal.docx",
  downloadSlides: "/docs/Representing_the_Spectrum_Slides.pptx",
  researchQuestion: "Across top-selling commercial video games, does mixed-race representation reflect contemporary demographics when evaluated by explicit canonical status, playability, and player perception?",
  slides: [
    {
      src: "/images/dissertation_slide_1.png",
      caption: "Slide 1: Research Title & Problem Space (Representing the Spectrum)"
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
      title: "Explicit Canon vs. Visual Ambiguity",
      stat: "3.15% Headcount vs. <0.5% Canon",
      summary: "Published audits code characters based on surface visual cues and marketing paratext. Without explicitly confirmed dual-heritage narrative canon, sociological research (Dietrich, 2013) proves players default to assuming whiteness or raceless neutrality. Explicit mixed characters appear at far lower rates than ambiguously coded characters."
    },
    {
      number: "02",
      title: "Playable Agency & The Box-Art Deficit",
      stat: "<1% Games-Native Leads",
      summary: "Mixed characters face an acute agency deficit. Outside of licensed comic acquisitions like Miles Morales, games-native multiracial protagonists are virtually absent from commercial box art and relegated to secondary roles rather than deep, independent leads (Phillips, 2022)."
    },
    {
      number: "03",
      title: "The Youth Gamer Demographic Gap",
      stat: "5–10% UK / 15% US Youth",
      summary: "National census benchmarks of declared mixed-race individuals (2.9% UK; 10.2% US) obscure generational realities. Among under-18s and core gaming demographics, multiracial populations exceed 5% to 10% in the UK and 15% in the US."
    }
  ],
  methodology: [
    {
      phase: "Phase 1: Stratified Purposive 100-Character Commercial Audit",
      badge: "Empirical Content Analysis (UKIE & Circana)",
      details: "Conducts a stratified purposive audit of 20 bestselling commercial games from official UKIE/GfK and Circana charts (2018–2024), excluding annualised sports rosters. Scores 100 characters (primary lead plus top four supporting cast per title) with second-researcher inter-rater reliability via Cohen's Kappa (κ ≥ 0.80)."
    },
    {
      phase: "Phase 2: Practice-Informed Flagship Protagonist Design Dossier",
      badge: "Unreal Engine MetaHuman & Narrative Bible",
      details: "Produces a production-ready protagonist dossier using Unreal Engine MetaHuman Creator with carefully blended dual-heritage facial structures, balanced skin undertones, and accurate 3C/4A hair curl geometry alongside a Root (1996)-grounded character bible."
    },
    {
      phase: "Phase 3: Empirical A/B Player Validation Survey",
      badge: "A/B Intervention & Paired t-Tests",
      details: "Evaluated via anonymous online survey of 25–35 self-identified mixed-race players comparing a baseline ambiguous character against the flagship dossier visually and narratively across semantic differential scales with paired-samples t-tests under strict GDPR/ethical protocols."
    }
  ],
  references: [
    "Dietrich, D.R. (2013) 'Avatars of whiteness: racial expression in video game characters', Sociological Inquiry, 83(1), pp. 82-105. Available at: https://doi.org/10.1111/soin.12001.",
    "Jones, S.S.Y., Harrisson, A., Pedraça, S., Marchessault-Brown, J., Williams, D. and Consalvo, M. (2025) 'The virtual census 2.0: a continued investigation on the representations of gender, race, and age in videogames', New Media & Society. Available at: https://doi.org/10.1177/14614448251336427.",
    "Office for National Statistics (2022) Ethnic group, England and Wales: Census 2021.",
    "Passmore, C.J., Birk, M.V. and Mandryk, R.L. (2018) 'The privilege of immersion: racial and ethnic experiences, perceptions, and beliefs in digital gaming', in Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (CHI '18). Montreal, QC, Canada: ACM, pp. 1-12. Available at: https://doi.org/10.1145/3173574.3173957.",
    "Phillips, A. (2022) 'Fixing the past: memory tourism, multiraciality, and white innocence in video games', ROMchip: A Journal of Game Histories, 4(1). Available at: https://romchip.org/index.php/romchip-journal/article/view/156.",
    "Root, M.P.P. (ed.) (1996) The multiracial experience: racial borders as the new frontier. Thousand Oaks, CA: SAGE Publications.",
    "Williams, D., Martins, N., Consalvo, M. and Ivory, J.D. (2009) 'The virtual census: representations of gender, race and age in video games', New Media & Society, 11(5), pp. 815-834. Available at: https://doi.org/10.1177/1461444809105354."
  ]
};

export const ACADEMIC_MODULES = [
  { name: "MS5027 Gameplay Prototyping (Rastacats)", mark: "92%", grade: "1st Class" },
  { name: "MS5023 Professional Practice", mark: "87%", grade: "1st Class" },
  { name: "MS4006 Intro to Game Programming", mark: "78%", grade: "1st Class" },
  { name: "MS5029 Narrative Design (The Quarry & Faith Over Fear)", mark: "78%", grade: "1st Class" },
  { name: "MS5021 Game Studio 2 (Delirium VR)", mark: "78%", grade: "1st Class" },
  { name: "MS5028 Level Design (LabR@z)", mark: "72%", grade: "1st Class" },
  { name: "MS4035 Expressive Game Design", mark: "72%", grade: "1st Class" },
  { name: "MS4036 Intro to Game Scripting (State Machines)", mark: "72%", grade: "1st Class" },
  { name: "MS4007 Game Studio 1", mark: "72%", grade: "1st Class" },
  { name: "MS4005 Intro to Game Design", mark: "70%", grade: "1st Class" }
];

export const HARDWARE_BENCH_PROJECTS = [
  {
    id: "project-kinetic",
    visualType: "mocap",
    tag: "BENCH LOG 01 // DIY MOTION CAPTURE",
    title: "Project K.I.N.E.T.I.C. — Under-£100 MetaHuman Mocap Rig",
    subtitle: "Xbox One Kinect v2 IR Depth + PSVR Move Gyroscopes + Python OSC + UE5 LiveLink",
    problem: "Commercial optical or inertial motion-capture suits start between £2,500 and £10,000+, while single-camera depth sensors lose wrist orientation and suffer 180-degree skeletal flips.",
    tinkeringSolution: "Fused raw 25-point skeletal tracking from a Kinect v2 infrared sensor (via Brekel Body) with two PlayStation Move controllers strapped for continuous 6DoF IMU gyroscope quaternions, bridging both streams in Python over UDP/OSC into UE5 LiveLink at 30 FPS.",
    proofPoints: [
      "Fused infrared depth point-clouds with PSVR Move IMU gyroscope orientation over Python UDP/OSC sockets.",
      "Eliminated single-camera 180-degree occlusion and wrist-twist gimbal lock via weighted quaternion filtering.",
      "Streamed live retargeted skeletal transforms directly onto Unreal Engine 5 MetaHuman control rigs."
    ],
    pipeline: ["Kinect v2 IR Depth", "PSVR Move Gyros", "Python OSC Bridge", "UE5 MetaHuman LiveLink"],
    links: {
      github: "https://github.com/JoshUEL2"
    }
  },
  {
    id: "signalrgb-hid",
    visualType: "hid",
    tag: "BENCH LOG 02 // USB HID PACKET SNIFFING",
    title: "Wireshark USB Reverse-Engineering & SignalRGB Driver",
    subtitle: "Wireshark USBPcap + Raw 64-Byte Hex Decoding + JavaScript HID Plugin",
    problem: "My Gigabyte Aorus P1200W PSU LCD and controllers relied on conflicting proprietary vendor apps with zero native SignalRGB support.",
    tinkeringSolution: "Hooked Wireshark + USBPcap directly onto the USB root hub, captured live 64-byte HID interrupt transfers while toggling vendor modes, and mapped hexadecimal command headers, register offsets, and sync handshakes into a native open-source JavaScript driver.",
    proofPoints: [
      "Isolated vendor ID (VID) and product ID (PID) endpoints via live Wireshark USBPcap packet captures.",
      "Decoded undocumented 64-byte hexadecimal payload structures, brightness scalars, and LCD handshakes.",
      "Published an open-source SignalRGB plugin replacing bloated vendor background daemons."
    ],
    pipeline: ["Wireshark USBPcap", "64-Byte Hex Diff", "HID Endpoint Map", "SignalRGB JS Driver"],
    links: {
      github: "https://github.com/JoshUEL2/SignalRGB-Aorus-P1200W-Plugin"
    }
  },
  {
    id: "hydroscreen-xc7",
    visualType: "waterblock",
    tag: "BENCH LOG 03 // CUSTOM C# HARDWARE DAEMON",
    title: "HydroScreen XC7 — Custom Waterblock LCD Driver",
    subtitle: "C# / .NET + Direct USB HID Telemetry + Custom Cooling Loop Control",
    problem: "Vendor cooling suites consumed continuous background memory and CPU interrupts just to render liquid temperatures on the Corsair XC7 RGB ELITE waterblock LCD.",
    tinkeringSolution: "Wrote a standalone C# / .NET daemon (HydroScreen-XC7) writing telemetry directly to the block's USB HID display endpoint with minimal overhead, tuned alongside a custom shared Ryzen 9 5950X + RTX 4070 watercooling loop.",
    proofPoints: [
      "Replaced heavy vendor suites with a lean C#/.NET direct-HID renderer for the XC7 circular LCD display.",
      "Polled inline loop coolant and CPU package sensors cleanly across custom C# frame buffers.",
      "Calibrated radiator curves against steady inline thermistor readings rather than spiky die temps."
    ],
    pipeline: ["Inline Thermistor Poll", "C# Frame Buffer", "Direct USB HID Write", "XC7 Waterblock LCD"],
    links: {
      github: "https://github.com/JoshUEL2/HydroScreen-XC7-Compatiability"
    }
  },
  {
    id: "tfl-and-realspeak",
    visualType: "gis",
    tag: "BENCH LOG 04 // ALGORITHMIC TOOLS & AI PIPELINES",
    title: "TfL Underground Graph Router & Project Realspeak",
    subtitle: "Dijkstra Tube Pathfinding + Client-Side CSV Parser + Early-2023 UE5 AI NPCs",
    problem: "Off-the-shelf tools rarely bridge personal engineering questions—from reconstructing missing London transit interchanges to running real-time voice-to-MetaHuman NPC conversations in UE5 in early 2023.",
    tinkeringSolution: "Modelled the London Underground network as a weighted graph with interchange walking penalties over Leaflet.js (`TFL-Planner`), and earlier wired OpenAI GPT-3, STT/TTS, and ConvAI into UE5 MetaHuman lip-sync (`Project Realspeak`).",
    proofPoints: [
      "Implemented weighted Dijkstra / A* graph routing across London Underground lines with live CSV heatmap parsing.",
      "Built client-side Oyster journey reconstruction predicting missing intermediate station interchanges.",
      "Engineered Project Realspeak in early 2023 uniting Speech-to-Text, LLM prompting, TTS, and UE5 lip-sync."
    ],
    pipeline: ["Oyster CSV / Mic Input", "Weighted Graph / LLM", "Leaflet GIS / Visemes", "Live Web & UE5 Tools"],
    links: {
      github: "https://github.com/JoshUEL2/TFL-Planner",
      demo: "https://joshuel2.github.io/TFL-Planner/"
    }
  }
];

export const DOSSIER_CREDENTIALS = [
  {
    id: "theatre-acting",
    theme: "theatre",
    category: "PERFORMING ARTS & MOCAP DIRECTION",
    title: "5+ Years Musical Theatre & Screen Acting",
    subtitle: "Lead Actor in Les Misérables & The Addams Family • Supporting Actor in 'Dead Weight' (2026)",
    badge: "Open Stage Dossier",
    shortSummary: "Performed in front of live auditoriums as Lead Actor in Les Misérables (Marius) and The Addams Family, plus physical horror acting in the 2026 short film Dead Weight.",
    whyItMattersForGames: "Years on stage and film sets directly inform how I direct motion-capture sessions, write dialogue subtext (Far Cry 5 'Faith Over Fear'), and block character body language in Unreal Engine 5.",
    story: "Stepping onto stage as Lead Actor in Les Misérables and The Addams Family meant singing solo numbers, choreographing duets, and holding focus across 2-hour live performances. In March 2026 I also performed as a featured supporting actor in the psychological thriller 'Dead Weight', handling physical stunt choreography and practical prosthetic work.",
    highlights: [
      "Lead Actor in Les Misérables & The Addams Family: solo vocals, choreographed blocking, and live auditorium stamina.",
      "Supporting Actor in 'Dead Weight' (Mar 2026): physical stunt falls and practical SFX makeup.",
      "Translates directly into AAA mocap volume direction, vocal pacing, and believably grounded character blocking."
    ],
    images: [
      { src: "/images/dossier/lead_actor_les_miserables_lead_actor___les_miserabl_asset_01.jpg", caption: "Performing live on stage in Les Misérables" },
      { src: "/images/dossier/lead_actor_les_miserables_lead_actor___les_miserabl_asset_02.jpg", caption: "Full cast stage scene in Les Misérables" },
      { src: "/images/dossier/lead_actor_the_addams_family_lead_actor___the_addams_f_asset_01.jpg", caption: "Lead role in The Addams Family production" },
      { src: "/images/dossier/dead_weight_supporting_actor_image_01.jpg", caption: "On set for the psychological thriller short film 'Dead Weight' (2026)" }
    ]
  },
  {
    id: "uel-school-rep",
    theme: "governance",
    category: "ACADEMIC LEADERSHIP & GOVERNANCE",
    title: "UEL School Representative & Sextennial Review Panellist",
    subtitle: "Elected School Representative (Architecture, Computing & Engineering) • Curriculum Review Board",
    badge: "Inspect Governance Role",
    shortSummary: "Unanimously elected Course & School Representative at UEL across two academic cycles, stabilising communication during a departmental course merger and serving on the Sextennial School Review.",
    whyItMattersForGames: "Game studios depend on cross-disciplinary arbitration between engineering, art, and production: representing cohorts at faculty board level proves structured issue tracking and leadership under pressure.",
    story: "As elected School Representative for the School of Architecture, Computing & Engineering at UEL, I served as primary liaison between students, cluster leads, and faculty deans during an unprecedented games course merger—establishing direct factual briefings and co-evaluating curriculum standards on the April 2025 Sextennial School Review panel.",
    governancePillars: [
      {
        title: "Elected Representative 2 Years Running",
        detail: "Unanimously elected Course Representative for BSc Computer Games Design for two consecutive years."
      },
      {
        title: "Course Merger Communication",
        detail: "Established direct briefings with cluster leadership to surface clear facts and safeguard cohort module access during departmental restructuring."
      },
      {
        title: "Sextennial School Review Board (April 2025)",
        detail: "Appointed Student Panellist working with external academic examiners and university leadership to review studio teaching standards."
      },
      {
        title: "Systematic Issue & Hardware Tracking",
        detail: "Tracked recurring GPU driver, VR headset provisioning, and lab allocation issues into structured board agendas."
      },
      {
        title: "Hall Rep & Unreal Mentoring",
        detail: "Served as UEL Hall Representative and Residential Life Ambassador while leading weekly peer Unreal Engine workshops."
      }
    ],
    highlights: [
      "Unanimously elected Course Representative for BSc Computer Games Design two consecutive years.",
      "Stabilised communication across the games cohort during departmental restructuring.",
      "Appointed Student Panellist on UEL's Sextennial School Review with external examiners.",
      "Authored structured hardware and studio feedback registers for faculty board meetings."
    ],
    images: []
  },
  {
    id: "podcast-studio-founder",
    theme: "studio",
    category: "AUDIO ENGINEERING & BROADCAST PRODUCTION",
    title: "School Podcast Studio Founder, Director & Host",
    subtitle: "Converted Storage Room into Multi-Mic Studio • Weekly Producer & Editor",
    badge: "Tour Audio Studio",
    shortSummary: "Selected by Head of Media Production to convert an empty sixth form storage room into a weekly acoustic broadcast studio as Director, Host, Technician, and Editor.",
    whyItMattersForGames: "Engineering a recording space from scratch built practical mastery in gain staging, acoustic treatment, multi-track mixing, and dialogue direction for games.",
    story: "Entrusted with establishing Ousedale Sixth Form's first official weekly podcast, I specified acoustic foam treatment, dynamic microphones, boom mounts, and audio interfaces—wiring the studio end-to-end and producing weekly broadcasts for year-group distribution.",
    highlights: [
      "Wired and acoustically treated a multi-microphone broadcast studio from an unused room.",
      "Managed procurement budgets, microphone gain staging, and weekly post-production mastering.",
      "Directed and hosted weekly episodes with faculty and student interviewees."
    ],
    images: [
      { src: "/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_01.jpg", caption: "Converting a bare storage room into a wired podcast studio" },
      { src: "/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_02.jpg", caption: "Multi-track audio mixer, routing, and recording desk" },
      { src: "/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_03.jpg", caption: "Microphone boom placement and studio acoustic treatment" },
      { src: "/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_04.jpg", caption: "Live broadcast session and recording hardware setup" }
    ]
  },
  {
    id: "yearbook-sole-editor",
    theme: "editorial",
    category: "PUBLICATION DESIGN & CREATIVE DIRECTION",
    title: "Yearbook Sole Editor & Lead Graphic Designer",
    subtitle: "150+ Cover Iterations • 200-Portrait Mosaic • Full Print Grid Layouts",
    badge: "View Print Spreads",
    shortSummary: "Took sole ownership of my school's print yearbook, crafting custom backgrounds, standardised typographic grids, 150+ front-cover prototypes, and a 200+ portrait composite mosaic.",
    whyItMattersForGames: "Directly sharpened UI layout discipline, typographic hierarchy, colour grading, and clean batch management across hundreds of source images.",
    story: "Working independently as Sole Editor, I authored all page backgrounds from scratch, standardised portrait masking and colour balance across every spread, and iterated through 150+ front cover variations before locking a precision 200+ portrait mosaic cover.",
    highlights: [
      "Full end-to-end ownership of graphic direction, page grids, and print-ready production.",
      "Tested 150+ front cover designs culminating in a 200+ aligned portrait mosaic.",
      "Authored all custom background plates and badge layouts from scratch."
    ],
    images: [
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_12.jpg", caption: "Final Front & Back Cover Revision (150+ iterations & 200+ aligned portraits)" },
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_01.jpg", caption: "Mid-project custom page typography and grid layout" },
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_02.jpg", caption: "Custom graphic background artwork designed from scratch" },
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_03.jpg", caption: "Double-page spread alignment and portrait framing" },
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_04.jpg", caption: "Early structural layout and palette tests" }
    ]
  },
  {
    id: "cyber-harvard",
    theme: "cyber",
    category: "DEFENSIVE SECURITY & CS FOUNDATIONS",
    title: "CyberCenturion UK Top 60 Finalist & Harvard CS50x / PCAP",
    subtitle: "National Defensive Cybersecurity Finalist • C, Python, SQL & System Hardening",
    badge: "Open Security Log",
    shortSummary: "Placed in the Top 60 nationwide in the UK CyberCenturion competition while earning Harvard CS50x and Python Institute PCAP certifications.",
    whyItMattersForGames: "Builds disciplined engineering fundamentals: C memory safety, Python algorithmic structure, and hardened networked system architecture.",
    story: "Competing in national timed CyberCenturion defense rounds (2022–2024), I hardened vulnerable Linux and Windows virtual machines under simulated threat scoring—auditing permissions, stripping backdoors, and securing services to finish in the UK Top 60 alongside CS50x and PCAP credentials.",
    highlights: [
      "Top 60 UK National Finalist in CyberCenturion defensive cybersecurity (Linux & Windows hardening).",
      "Harvard University CS50x verified (C pointers, memory allocation, data structures, SQL).",
      "Python Institute PCAP certified (object-oriented Python, exceptions, and algorithms)."
    ],
    images: [
      { src: "/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_01.jpg", caption: "Competing in the CyberCenturion UK national defense rounds" },
      { src: "/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_02.jpg", caption: "Live VM hardening and vulnerability auditing" },
      { src: "/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_03.jpg", caption: "CyberCenturion team workstation setup" },
      { src: "/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_04.jpg", caption: "Competition forensics and scoring terminal" }
    ]
  },
  {
    id: "vex-robotics",
    theme: "robotics",
    category: "COMPETITIVE ROBOTICS & MECHATRONICS",
    title: "VEX Robotics UK National Finalist (Founding Member)",
    subtitle: "Drivetrain Mechatronics, Sensor Harnesses & C++ Autonomous Routines",
    badge: "Inspect Robot Rig",
    shortSummary: "Co-founded our Sixth Form VEX V5 Robotics squad, mechanically designing, wiring, and programming autonomous routines to qualify for the UK National Finals.",
    whyItMattersForGames: "Debugging real-world gear backlash, friction, and sensor noise translates directly into resilient rigid-body physics and tolerant game state machines.",
    story: "Across 2023–2024 I co-founded our VEX V5 competition team: prototyping aluminium drivetrains, crimping optical sensor harnesses, tuning torque-to-speed gearing, and coding autonomous competition routines in C++ / Python to compete at UK Nationals.",
    highlights: [
      "Co-founded the VEX V5 squad and qualified for the UK National Finals.",
      "Engineered high-torque drivetrains, pneumatic/mechanical intakes, and C++ autonomous routines.",
      "Rapid pit-lane mechanical and software diagnostics under competition timers."
    ],
    images: [
      { src: "/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_01.jpg", caption: "VEX V5 competition robot on the match field" },
      { src: "/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_02.jpg", caption: "Aluminium drivetrain assembly and motor wiring" },
      { src: "/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_03.jpg", caption: "Pit-lane debugging and autonomous testing" },
      { src: "/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_04.jpg", caption: "VEX Robotics national competition arena" }
    ]
  }
];

export const SHOWCASE_EXHIBITIONS = [
  {
    id: "ace-2026-main-hall",
    event: "UEL Annual ACE Showcase 2026",
    location: "Royal Docks Centre for Sustainability (Main Hall)",
    highlight: "Rastacats • Sole Level 5 Project Selected for Final-Year Hall",
    src: "/images/dossier/ace_showcase_2026_image_01.jpg",
    caption: "Rastacats exhibited downstairs in the Final-Year (Level 6) exhibition hall at Royal Docks Centre for Sustainability as the only Year 2 project selected by faculty."
  },
  {
    id: "ace-2026-vr-suite",
    event: "UEL Annual ACE Showcase 2026",
    location: "Royal Docks Centre for Sustainability (VR Suite)",
    highlight: "Delirium VR • Sole Playable VR Project on Level 5 Floor",
    src: "/images/dossier/ace_showcase_2026_image_02.jpg",
    caption: "Owned live OpenXR VR station calibration, room-scale tracking setup, and public playtests for Delirium VR."
  },
  {
    id: "summer-demo-series-01",
    event: "RDSC Summer VR Showcase Series (Sessions 1–4)",
    location: "Dedicated OpenXR VR Suite (Royal Docks)",
    highlight: "Faculty Demonstrations & Grading Sessions with Patrick Quinnell",
    src: "/images/dossier/personal_project_showcase_2026_image_01.jpg",
    caption: "Ran multi-session summer VR playtest demonstrations and grading runs with module leader Patrick Quinnell."
  },
  {
    id: "summer-demo-series-02",
    event: "RDSC Summer VR Showcase Series",
    location: "Royal Docks Centre for Sustainability",
    highlight: "Multi-Station Meta Quest 3 & PCVR Calibration",
    src: "/images/dossier/personal_project_showcase_2026_image_02.jpg",
    caption: "Calibrating PCVR and Quest 3 rigs to demonstrate spatial audio hunting and two-handed wheelchair rim locomotion."
  },
  {
    id: "ace-2026-station-03",
    event: "UEL Annual ACE Showcase 2026",
    location: "Royal Docks Centre for Sustainability",
    highlight: "Dual-Floor Showcase (Arcade Pipe Physics + VR Installation)",
    src: "/images/dossier/ace_showcase_2026_image_03.jpg",
    caption: "Demonstrating 360-degree polar spline gravity and curved WPO shaders live to visiting industry reviewers."
  },
  {
    id: "personal-showcase-03",
    event: "Personal Project Showcase",
    location: "University of East London Games Lab",
    highlight: "Live Playtesting & Player Feedback Observation",
    src: "/images/dossier/personal_project_showcase_2026_image_03.jpg",
    caption: "Capturing live playtester interactions and tuning UX feedback loops across demo runs."
  },
  {
    id: "ace-2026-station-04",
    event: "UEL Annual ACE Showcase 2026",
    location: "Royal Docks Exhibition Hall",
    highlight: "Academic Peer Review & Industry Delegation Q&A",
    src: "/images/dossier/ace_showcase_2026_image_04.jpg",
    caption: "Discussing UE5 pooling optimisations and state machine architecture with external assessors and guests."
  },
  {
    id: "personal-showcase-04",
    event: "Personal Project & VR Showcase",
    location: "UEL Docklands Campus",
    highlight: "Playable Kiosk Deployment & Controller Setup",
    src: "/images/dossier/personal_project_showcase_2026_image_04.jpg",
    caption: "End-to-end showcase kiosk provisioning with locked frame pacing and live developer walkthroughs."
  }
];

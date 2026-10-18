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
    dates: "Oct 2024 - May 2025",
    studio: "Solo Developer",
    image: "/images/rastacats_cover.png",
    gallery: [
      "/images/rastacats_cover.png",
      "/images/rastacats_cover.jpg",
      "/images/rastacats_revisited.jpg",
      "/images/rasta_cw1_00_01_05.jpg",
      "/images/rasta_cw1_00_01_15.jpg",
      "/images/rasta_cw1_00_01_30.jpg",
      "/images/rasta_cw2_00_01_15.jpg",
      "/images/rasta_cw2_00_01_30.jpg"
    ],
    videoPreview: "/media/rastacats_cw2_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2",
      itch: "https://joshej.itch.io/rastacats",
      demo: null,
      gdd: "/docs/Rastacats_Design_Document.docx"
    },
    shortDesc: "High-speed arcade bobsled runner built around a custom 360-degree cylindrical gravity controller, polar-to-cartesian obstacle spawning, and an object-pooled track generator. Toggle between Phase 1 and Phase 2 below.",
    summary: "Built across two development phases: Phase 1 established the core 360-degree pipe physics and procedural obstacle spawning (earning 92%), while Phase 2 overhauled the rendering pipeline, added a curved-world shader, and replaced actor destruction with an object pool.",
    highlights: [
      "Wrote polar-to-cartesian spawning maths (Y = r * cos(theta), Z = r * sin(theta)) so obstacles lock cleanly onto any angle of the pipe.",
      "Replaced actor spawning/destruction with a fixed-size ring buffer pool to eliminate garbage collection hitches at high speed.",
      "Layered procedural bone tilts over standard skeletal animations so the bobsled leans naturally into tight turns.",
      "Built a custom curved-world vertex shader to bend the horizon and mask chunk pop-in."
    ],
    technicalDeepDive: "Standard Unreal character movement assumes a fixed -Z gravity vector. To let the bobsled drive seamlessly around the inside and outside of a cylinder, I bypassed default planar movement and calculated surface normals every tick, interpolating the pawn's Up-Vector via quaternion slerp while projecting forward velocity onto the pipe's tangent plane.",
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
      { label: "Ring Buffer Pool", sub: "O(1) Chunk Recycling" }
    ],
    versions: [
      {
        id: "phase-2",
        label: "Phase 2: Revisited Remaster",
        badge: "v2.0 Remaster",
        dates: "Jan 2025 - May 2025",
        engine: "Unreal Engine 5 (Curved-World Shader & Object Pooling)",
        image: "/images/rastacats_revisited.jpg",
        videoPreview: "/media/rastacats_cw2_preview.mp4",
        gallery: [
          "/images/rastacats_revisited.jpg",
          "/images/rasta_cw2_00_01_05.jpg",
          "/images/rasta_cw2_00_01_15.jpg",
          "/images/rasta_cw2_00_01_30.jpg"
        ],
        summary: "The Phase 2 remaster revisited the original prototype from the ground up, replacing raw actor destruction with a pre-allocated ring buffer pool, introducing a custom World Position Offset curved-world vertex shader, and layering procedural skeletal bone banking onto the bobsled crew.",
        highlights: [
          "Eliminated garbage collection frame spikes at 120+ MPH by recycling track segments and obstacles in a ring buffer pool.",
          "Authored a custom World Position Offset vertex shader that bends distant geometry downward and laterally to hide procedural chunk seams.",
          "Implemented runtime skeletal bone rotation modifiers driven by lateral angular velocity so characters lean dynamically into turns.",
          "Rebuilt the lighting pipeline with vibrant Caribbean twilight post-processing and responsive speed-line UI telemetry."
        ],
        technicalDeepDive: "In Phase 1, destroying and respawning actors at high velocity caused periodic GC hitches. In Phase 2, I pre-allocated a fixed pool of track chunks and obstacles on BeginPlay, toggling visibility, collision, and transform states in O(1) time as they passed behind the camera frustum."
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
          "/images/rastacats_cover.jpg",
          "/images/rasta_cw1_00_01_05.jpg",
          "/images/rasta_cw1_00_01_15.jpg",
          "/images/rasta_cw1_00_01_30.jpg"
        ],
        summary: "The initial rapid prototype built to prove out 360-degree cylindrical surface locomotion and polar coordinate obstacle placement in Unreal Engine 5, earning a 92% First-Class grade.",
        highlights: [
          "Solved 360-degree cylindrical locomotion by overriding default planar gravity with dynamic surface normal projection.",
          "Built the foundational polar-to-cartesian math spawner (Y = r * cos(theta), Z = r * sin(theta)) for 360-degree pipe hazards.",
          "Created the core arcade scoring loop, speed-boost gates, and comedic ragdoll wipeout states.",
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
    discipline: "AI & Systems Architecture",
    engine: "Unreal Engine 5 (Blueprints & AI)",
    dates: "Apr 2025 - Jun 2025",
    studio: "Solo Developer",
    image: "/images/state_machine_cover.png",
    gallery: [
      "/images/state_machine_cover.png",
      "/images/state_machine_keyart.jpg",
      "/images/state_machine_flowchart.png",
      "/images/state_machine_page.png"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2",
      itch: "https://joshej.itch.io/state-machine-showcase",
      demo: null
    },
    shortDesc: "A playable Unreal Engine 5 systems sandbox demonstrating modular AI Behaviour Trees, autonomous turret state machines, multi-floor elevator validation logic, and inventory-gated doors.",
    summary: "Designed from formal logic flowcharts to demonstrate clean, decoupled state management across NPC combat AI, autonomous turrets, environmental machinery, and regenerating pickups.",
    highlights: [
      "Built a patrolling NPC Behaviour Tree that follows spline paths, evaluates sight cones, and transitions between Patrol, Chase, and Attack states.",
      "Engineered an autonomous AI turret cycling cleanly through Idle, Detect, Track, Fire, and Cooldown states without tick polling.",
      "Created a multi-floor elevator state machine with external call-locking and floor input validation.",
      "Published a 926 MB standalone playable Windows build on itch.io."
    ],
    technicalDeepDive: "To prevent AI state thrashing when the player hovers near the edge of an enemy's detection radius, I separated perception updates from locomotion state transitions using Blackboard hysteresis timers and Blueprint Interfaces.",
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
    tagline: "2-Player Local Co-Op Eco-Action Platformer",
    discipline: "Co-Op Gameplay & Character Production",
    engine: "Unreal Engine 5 / Maya / Substance Painter",
    dates: "Jan 2025 - May 2025",
    studio: "Llama Games (4-Person Team)",
    image: "/images/planet_protectors_cover.png",
    gallery: [
      "/images/planet_protectors_cover.png",
      "/images/planet_protectors_lineup.png",
      "/images/Bonnie and Kiwi Concepts.webp",
      "/images/Bonnie Model Sheet.webp",
      "/images/Kiwi Model Sheet.webp",
      "/images/Haptic Concepts.webp",
      "/images/Haptic Model Sheet.webp"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2/Planet-Protectors",
      itch: "https://joshej.itch.io/planet-protectors",
      demo: null,
      gdd: "/docs/Planet_Protectors_Design_Document.docx"
    },
    marketingSite: {
      repoSlug: "planet-protectors",
      title: "Planet Protectors | Llama Games Companion Portal",
      path: "/marketing/planet-protectors/index.html",
      repoUrl: "https://github.com/JoshUEL2/Planet-Protectors-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/Planet-Protectors-Marketing-Website/",
      description: "Interactive promotional storefront and character showcase built for Llama Games, featuring character bio cards, environmental transformation sliders, and team breakdowns."
    },
    shortDesc: "A split-screen local co-op action platformer where two players team up as elemental guardians to clear industrial corruption and restore colour to a dying planet.",
    summary: "Developed in a four-person studio team (Llama Games). Alongside co-op gameplay scripting, I led the character concept-to-3D pipeline for Bonnie, Kiwi, and Haptic, taking them from orthographic turnarounds through topology and PBR texturing.",
    highlights: [
      "Engineered dynamic split-screen co-op camera management and synchronised puzzle triggers in Unreal Engine 5.",
      "Designed and modelled the core cast (Bonnie, Kiwi, and Haptic) from 2D orthographic model sheets to game-ready 3D meshes.",
      "Built real-time environmental restoration feedback that swaps desaturated industrial materials for vibrant foliage as pollution nodes are cleared.",
      "Shipped both the playable UE5 prototype on itch.io and a dedicated companion marketing website."
    ],
    technicalDeepDive: "Co-op platformers live or die on readability when two players split attention. We linked each cleared hazard zone to a Material Parameter Collection radius mask, expanding a living saturation wave outward from the players in real time.",
    codeSnippet: `// Co-Op Environmental Restoration Wave via Material Parameter Collection
void ABeatCorruptionNode::OnNodePurified(FVector NodeWorldLocation)
{
    bIsPurified = true;
    UKismetMaterialLibrary::SetVectorParameterValue(
        this, EnvMPC, FName("PurificationOrigin"), FLinearColor(NodeWorldLocation)
    );

    // Lerp restoration radius outward over 1.8 seconds
    CurrentWaveRadius = FMath::FInterpTo(CurrentWaveRadius, MaxZoneRadius, GetWorld()->GetDeltaSeconds(), 4.2f);
    UKismetMaterialLibrary::SetScalarParameterValue(this, EnvMPC, FName("PurificationRadius"), CurrentWaveRadius);
}`,
    architectureNodes: [
      { label: "Dual Input Controllers", sub: "Local Split-Screen Pawns" },
      { label: "Co-Op Puzzle Node", sub: "Synchronised State Check" },
      { label: "Global MPC Broadcast", sub: "Radius & Origin Vector" },
      { label: "Biome Restoration", sub: "Real-Time Material Blend" }
    ]
  },
  {
    id: "rand-io",
    category: "gameplay",
    title: "Rand.io",
    tagline: "Procedural 2D Top-Down Roguelite & Random Walker Generator",
    discipline: "Procedural Generation & AI Pathfinding",
    engine: "Python 3 / Pygame / Custom Tile Engine",
    dates: "Feb 2025 - May 2025",
    studio: "Solo Developer",
    image: "/images/randio_cover.png",
    gallery: [
      "/images/randio_cover.png",
      "/images/rand_io.jpg"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2",
      itch: "https://joshej.itch.io/randio",
      demo: null,
      gdd: "/docs/Randio_Design_Document.docx"
    },
    shortDesc: "A 2D top-down roguelite shooter featuring stochastic Random Walker island generation, cellular automata coastline smoothing, and A* enemy pursuit pathfinding.",
    summary: "Built to explore procedural level generation from scratch without relying on pre-built engine tilemaps. Every run carves a fresh island layout, calculates bitmask shoreline autotiles, and spawns wave-based enemies that navigate around obstacles.",
    highlights: [
      "Implemented a multi-agent Drunkard's Walk (Random Walker) algorithm that carves organic interconnected island arenas with guaranteed connectivity.",
      "Applied cellular automata smoothing passes and 4-bit directional bitmasking to automatically place cliff edges, beaches, and water tiles.",
      "Wrote a grid-based A* pathfinding solver so enemies dynamically flank the player around procedurally generated cover.",
      "Packaged and shipped as a standalone executable on itch.io."
    ],
    technicalDeepDive: "Pure random walkers often create narrow 1-tile bottlenecks that trap the player. By spawning multiple walkers that probabilistically turn, stamp 2x2 corridors, and terminate once a target floor-to-water ratio (42%) is reached, every generated island remains open enough for twin-stick dodging while preserving tactical choke points.",
    codeSnippet: `# Stochastic Random Walker Island Generator with Bitmask Autotiling
def generate_island_grid(width: int, height: int, target_floor_ratio: float = 0.42):
    grid = [[0 for _ in range(width)] for _ in range(height)]
    x, y = width // 2, height // 2
    floor_count, max_floors = 0, int(width * height * target_floor_ratio)

    while floor_count < max_floors:
        if grid[y][x] == 0:
            grid[y][x] = 1
            floor_count += 1
        dx, dy = random.choice([(1, 0), (-1, 0), (0, 1), (0, -1)])
        x = max(2, min(width - 3, x + dx))
        y = max(2, min(height - 3, y + dy))

    return apply_bitmask_shorelines(grid, width, height)`,
    architectureNodes: [
      { label: "Seed Initialisation", sub: "Centre Grid Origin" },
      { label: "Drunkard's Walkers", sub: "42% Floor Density Target" },
      { label: "4-Bit Autotiler", sub: "Shoreline & Cliff Masks" },
      { label: "A* Grid NavMesh", sub: "Enemy Pursuit Routing" }
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
      gdd: "/docs/Delirium_GDD_and_Design_Notes.zip"
    },
    shortDesc: "Built in 36 hours at Goldsmiths Global Game Jam. Players physically grip, push, and brake independent left/right wheelchair rims in VR to escape a sound-hunting entity.",
    summary: "VR horror game where movement requires physical effort. Instead of thumbstick teleportation, I built a twin-wheel differential drive rig in OpenXR where frantic hand strokes generate squeaking wheel audio that draws the monster toward you.",
    highlights: [
      "Programmed differential wheelchair physics: pushing one rim pivots the chair around the opposite wheel's contact patch, while gripping both brakes.",
      "Tied wheel angular velocity directly into the monster's acoustic perception system so panicking and pushing harder reveals your position.",
      "Kept a locked 90 FPS stereoscopic frame budget with comfort vignetting to prevent motion sickness during rapid spins.",
      "Included full design documentation, floorplans, and bespoke diegetic VR UI."
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
        // Player is holding rim stationary -> apply mechanical brake damping
        ApplyWheelBrakeDamping(WheelRim, BrakeFrictionCoefficient, DeltaTime);
    }
    else
    {
        // Project hand stroke onto rim tangent and emit acoustic noise proportional to torque
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
    tagline: "Custom 2D Vector Physics & Collision Kinematics Engine",
    discipline: "Physics Engine Programming",
    engine: "Python 3 / Pygame",
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
      demo: null
    },
    shortDesc: "A 2D rigid-body physics sandbox written from scratch in Python without external physics libraries, handling circle-to-circle and AABB impulse resolution.",
    summary: "Built to understand rigid-body collision maths under the hood rather than relying on Box2D. Implements elastic and inelastic momentum transfer, restitution coefficients, and positional projection to stop stacked bodies sinking into floors.",
    highlights: [
      "Wrote custom Circle-to-Circle and Circle-to-AABB manifold generation with exact contact normal and penetration depth output.",
      "Solved elastic momentum transfer using vector dot products along the collision normal.",
      "Added positional slop correction to eliminate resting contact jitter under continuous gravity.",
      "Included live debug overlays rendering velocity vectors, contact normals, and bounding boxes."
    ],
    technicalDeepDive: "Discrete timestep physics engines suffer from 'sinking' when gravity pushes a resting ball slightly inside a floor before the next frame's velocity impulse fires. Adding Baumgarte positional projection nudges intersecting bodies apart along the collision normal proportional to their inverse masses.",
    codeSnippet: `# 2D Impulse Momentum Resolution & Positional Slop Correction
def resolve_collision(body_a, body_b, normal: Vector2, depth: float, restitution: float = 0.85):
    rel_vel = body_b.velocity - body_a.velocity
    vel_along_normal = rel_vel.dot(normal)
    if vel_along_normal > 0:
        return  # Bodies are already separating

    inv_mass_sum = body_a.inv_mass + body_b.inv_mass
    j = -(1.0 + restitution) * vel_along_normal / inv_mass_sum
    impulse = normal * j
    body_a.velocity -= impulse * body_a.inv_mass
    body_b.velocity += impulse * body_b.inv_mass

    # Baumgarte positional projection to prevent floor sinking
    correction = max(depth - 0.01, 0.0) / inv_mass_sum * 0.8 * normal
    body_a.position -= correction * body_a.inv_mass
    body_b.position += correction * body_b.inv_mass`,
    architectureNodes: [
      { label: "Broadphase Sweep", sub: "AABB Pair Culling" },
      { label: "Manifold Solver", sub: "Normal & Penetration Depth" },
      { label: "Impulse Scalar (j)", sub: "Restitution Dot Product" },
      { label: "Positional Projection", sub: "Anti-Sinking Slop Fix" }
    ]
  },

  // ==========================================
  // 3. SHADERS & TECH ART
  // ==========================================
  {
    id: "rem",
    category: "shaders-art",
    title: "REM",
    tagline: "Kuwahara Painterly Shader & WPO Morphing + Myndwell ARG Portal",
    discipline: "Technical Art & Shader Programming",
    engine: "Unreal Engine 5 / HLSL / HTML5 ARG",
    dates: "Jan 2025 - May 2025",
    studio: "Solo Developer",
    image: "/images/rem.jpg",
    gallery: [
      "/images/rem.jpg",
      "/images/rem_cover.jpg"
    ],
    videoPreview: "/media/rem_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2/REM",
      itch: null,
      demo: null,
      gdd: "/docs/REM_Game_Design_Document.docx"
    },
    marketingSite: {
      repoSlug: "rem",
      title: "REM | Myndwell Corporation Interactive ARG Website",
      path: "/marketing/rem/index.html",
      repoUrl: "https://github.com/JoshUEL2/REM-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/REM-Marketing-Website/",
      description: "In-universe corporate wellness portal for Myndwell Corporation featuring a live 'INITIATE BREACH' hacker exploit mode that corrupts the DOM, unlocks classified Partition audio/text logs, and reveals the dark truth behind the REM procedure."
    },
    shortDesc: "Surrealist psychological exploration game in UE5 driven by a custom anisotropic Kuwahara post-process shader, World Position Offset mesh morphing, and an interactive in-universe Myndwell ARG website.",
    summary: "Turns real-time 3D geometry into a living oil painting that fractures as the protagonist's dream state destabilises. Paired with a complete 2,900-line interactive in-universe corporate website (Myndwell) with a built-in hacker breach mode.",
    highlights: [
      "Coded a multi-quadrant Kuwahara post-process filter in HLSL/Material nodes that preserves sharp object silhouettes while giving surfaces a hand-painted brush texture.",
      "Used sine-wave World Position Offset (WPO) vertex displacement to stretch and breathe corridor geometry in sync with audio cues.",
      "Built the complete Myndwell Corporation interactive marketing & ARG website (HTML/CSS/JS) with a live firewall breach mechanic that corrupts the page into a classified terminal.",
      "Included the full REM Game Design Document, script, and v1.0.0 standalone Windows release."
    ],
    technicalDeepDive: "Standard box blurs destroy edge boundaries and look muddy. A Kuwahara filter samples four overlapping quadrants around each pixel, computes the colour variance in each quadrant, and outputs the mean colour of whichever quadrant has the lowest variance, flattening interior textures into painterly strokes while keeping edges razor-sharp.",
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
    // Select quadrant with minimum variance to preserve sharp edges
    return SelectMinVarianceQuadrant(Mean, Sigma, (Radius + 1) * (Radius + 1));
}`,
    architectureNodes: [
      { label: "SceneColor Buffer", sub: "Post-Process Input0" },
      { label: "4-Quadrant Kernel", sub: "Local Mean & Variance (σ²)" },
      { label: "Min-Variance Pick", sub: "Edge-Preserving Brush Stroke" },
      { label: "Myndwell ARG Portal", sub: "Interactive Web Breach Mode" }
    ]
  },
  {
    id: "daydream",
    category: "shaders-art",
    title: "Daydream Believer",
    tagline: "1:1 Photogrammetry & ADHD Hyperfocus Shader Simulation",
    discipline: "Photogrammetry & Technical Art",
    engine: "Unreal Engine 5 (Lumen & Post-Process)",
    dates: "Oct 2024 - May 2025",
    studio: "Solo Developer",
    image: "/images/daydream_believer_cover.png",
    gallery: [
      "/images/daydream_believer_cover.png",
      "/images/daydream_revisited.jpg",
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
      gdd: "/docs/Daydream_Believer_Design_Document.docx"
    },
    marketingSite: {
      repoSlug: "daydream",
      title: "Daydream Believer | Interactive Design Document & Shader Archive",
      path: "/marketing/daydream/index.html",
      repoUrl: "https://github.com/JoshUEL2/Daydream-Believer-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/Daydream-Believer-Marketing-Website/",
      description: "Interactive web companion for Daydream Believer featuring an attention-economy chart, environmental state breakdown, and sensory overload visualiser."
    },
    shortDesc: "Evolved across two phases: Phase 1 reconstructed my real bedroom at 1:1 scale via RealityCapture photogrammetry; Phase 2 layered a reactive post-process shader system simulating ADHD sensory overload and hyperfocus.",
    summary: "Grounded in a 1:1 photogrammetry scan and Blender reconstruction of my own bedroom, the project uses Material Parameter Collections to drain colour, narrow peripheral vignette, and muffle audio when executive dysfunction sets in. Toggle between Phase 1 and Phase 2 below.",
    highlights: [
      "Captured, retopologised, and baked a 1:1 scale digital twin of my bedroom using RealityCapture, Blender, and Substance Painter.",
      "Built a reactive post-process shader driven by a global Focus parameter that controls radial chromatic aberration, saturation fall-off, and depth-of-field blur.",
      "Created an interactive HTML5/Chart.js design companion website exploring the cognitive load mechanics.",
      "Published the playable UE5 build on itch.io alongside the full Revisited Design Document."
    ],
    technicalDeepDive: "Raw photogrammetry meshes contain millions of noisy triangles and baked lighting artefacts. I retopologised hero props into clean low-poly quads in Blender, delighted the base albedo maps, and baked high-to-low normal maps in Substance Painter so they responded accurately to dynamic Lumen global illumination.",
    codeSnippet: `// Reactive ADHD Sensory Overload Post-Process Controller
void ADaydreamPostProcessDirector::UpdateCognitiveShaderState(float FocusLevel, float OverwhelmIndex)
{
    // Drive global Material Parameter Collection from player cognitive state
    UKismetMaterialLibrary::SetScalarParameterValue(this, CognitiveMPC, FName("GlobalSaturation"),
        FMath::Lerp(0.08f, 1.15f, FocusLevel));

    // Expand peripheral tunnel-vision vignette & chromatic split as overwhelm rises
    PostProcessComp->Settings.ChromaticAberrationStartOffset = FMath::Lerp(0.8f, 0.1f, OverwhelmIndex);
    PostProcessComp->Settings.SceneFringeIntensity = FMath::Lerp(0.2f, 4.5f, OverwhelmIndex);
    PostProcessComp->Settings.VignetteIntensity = FMath::Lerp(0.35f, 1.15f, OverwhelmIndex);
}`,
    architectureNodes: [
      { label: "RealityCapture Scan", sub: "Point Cloud Alignment" },
      { label: "Blender Retopology", sub: "Clean Quad UV Unwrap" },
      { label: "Substance PBR Bake", sub: "Delighted Albedo & Normals" },
      { label: "Cognitive MPC Shader", sub: "Live Desaturation & Vignette" }
    ],
    versions: [
      {
        id: "phase-2",
        label: "Phase 2: Revisited (ADHD Shader Simulation)",
        badge: "v2.0 Revisited",
        dates: "Jan 2025 - May 2025",
        engine: "Unreal Engine 5 (Lumen + Reactive Post-Process MPC)",
        image: "/images/daydream_revisited.jpg",
        videoPreview: "/media/daydream_preview.mp4",
        gallery: [
          "/images/daydream_revisited.jpg",
          "/images/daydream_00_01_15.jpg",
          "/images/daydream_00_01_30.jpg",
          "/images/test_daydream_52s.jpg"
        ],
        summary: "Phase 2 transformed the static 1:1 bedroom replica into an interactive psychological simulation of ADHD hyperfocus and executive dysfunction, linking player task interaction to a live post-processing shader and acoustic dampening pipeline.",
        highlights: [
          "Engineered a global Material Parameter Collection (MPC) shader that dynamically drains environmental saturation as untreated tasks accumulate.",
          "Implemented peripheral tunnel-vision vignetting, chromatic fringe splitting, and depth-of-field focus pulls triggered by distraction stimuli.",
          "Built the interactive Daydream Believer companion web archive with live cognitive load charts.",
          "Shipped the playable Windows build on itch.io."
        ],
        technicalDeepDive: "Instead of using static UI bars to represent mental fatigue, the environment itself acts as the HUD: peripheral objects lose colour saturation and sharpen into high-contrast chromatic noise until the player completes grounding interactions."
      },
      {
        id: "phase-1",
        label: "Phase 1: Original (1:1 Photogrammetry Replica)",
        badge: "v1.0 Environment",
        dates: "Oct 2024 - Dec 2024",
        engine: "RealityCapture / Blender / Substance Painter / UE5",
        image: "/images/daydream_00_01_05.jpg",
        videoPreview: "/media/daydream_preview.mp4",
        gallery: [
          "/images/daydream_00_01_05.jpg",
          "/images/daydream_believer_cover.png"
        ],
        summary: "Phase 1 focused on pure environmental technical art: capturing my real-world bedroom at 1:1 metric scale using RealityCapture photogrammetry, cleaning topology in Blender, and calibrating Lumen bounce lighting in Unreal Engine 5.",
        highlights: [
          "Processed raw multi-angle photography in RealityCapture to extract dense point clouds and metric room dimensions.",
          "Retopologised noisy scan meshes into clean game-ready quad geometry in Blender with optimised UV texel density.",
          "Delighted raw scan textures and authored physically accurate roughness/metallic maps in Substance Painter.",
          "Calibrated indirect Lumen bounce lighting to match real-world natural window exposure."
        ],
        technicalDeepDive: "Solved baked shadow contamination from raw photogrammetry scans by separating high-frequency surface normal detail from base albedo maps in Substance Painter."
      }
    ]
  },
  {
    id: "project-isla",
    category: "shaders-art",
    title: "Project Isla",
    tagline: "Procedural Perlin Noise Island & Biome Terrain Generator",
    discipline: "Procedural Tech Art & Terrain Maths",
    engine: "Unreal Engine 5 / Procedural Mesh",
    dates: "Nov 2024 - Jan 2025",
    studio: "Solo Developer",
    image: "/images/project_isla.jpg",
    gallery: [
      "/images/project_isla.jpg"
    ],
    links: {
      github: "https://github.com/JoshUEL2",
      itch: null,
      demo: null,
      gdd: "/docs/Project_Isla_Design_Document.docx"
    },
    shortDesc: "A procedural 3D island generator that combines multi-octave 2D Perlin noise with a radial sigmoid fall-off mask and elevation-based biome splatting.",
    summary: "Generates natural archipelago landmasses at runtime by layering fractional Brownian motion (fBm) noise octaves, subtracting a radial distance gradient to guarantee ocean borders, and auto-assigning sand, grass, rock, and snow materials by slope and altitude.",
    highlights: [
      "Combined 4 octaves of 2D Perlin noise (lacunarity 2.0, persistence 0.5) to create macro mountain ridges with micro surface detail.",
      "Applied a radial sigmoid fall-off mask so every seed naturally tapers into a surrounding coastline rather than clipping at chunk edges.",
      "Built an elevation and normal-slope shader that blends sand, coastal vegetation, cliff rock, and alpine snow automatically.",
      "Recorded full real-time procedural generation walkthrough and technical design document."
    ],
    technicalDeepDive: "Single-frequency Perlin noise looks like smooth plastic hills. By summing multiple octaves where each octave doubles frequency (lacunarity) and halves amplitude (persistence), then multiplying the result by a smooth radial distance curve from the grid centre, the mesh forms jagged volcanic peaks surrounded by shallow sandy coves.",
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
      { label: "Seed & Grid UV", sub: "2D Coordinate Space" },
      { label: "4-Octave fBm Loop", sub: "Lacunarity 2.0 / Persist 0.5" },
      { label: "Radial Fall-Off Mask", sub: "Coastline Boundary Taper" },
      { label: "Slope/Altitude Splat", sub: "Auto-Biome Shader Blend" }
    ]
  },

  // ==========================================
  // 4. LEVEL DESIGN
  // ==========================================
  {
    id: "labraz",
    category: "level-design",
    title: "LabR@z",
    tagline: "3-Player Asymmetrical Co-Op FPS Facility",
    discipline: "Level Design & Spatial Pacing",
    engine: "Unreal Engine 5 / Blender",
    dates: "Jan 2025 - Apr 2025",
    studio: "Solo Level Designer",
    image: "/images/labraz.jpg",
    gallery: [
      "/images/labraz.jpg",
      "/images/labraz_01.jpg"
    ],
    videoPreview: "/media/labraz_preview.mp4",
    links: {
      github: "https://github.com/JoshUEL2",
      itch: null,
      demo: null,
      video: "https://www.youtube.com/watch?v=t3xmVDuFvZU",
      gdd: "/docs/LabRatz_Design_Document.docx"
    },
    shortDesc: "A 3-player asymmetrical co-op FPS level built in Unreal Engine 5 around three distinct player roles (Hacker, Assault, Engineer), complete with a 40-page GDD and walkthrough.",
    summary: "Designed a multi-wing bio-research facility where progression requires simultaneous spatial coordination between three specialised roles: elevated catwalks for overwatch, maintenance vents for engineering bypasses, and colour-coded power conduits guiding hackers to terminal nodes.",
    highlights: [
      "Authored a 40-page Game Design Document detailing beat charts, rhythm-tension curves, choke points, and encounter sightlines.",
      "Used diegetic yellow conduit cabling and contrast lighting to guide players naturally without intrusive HUD waypoints.",
      "Balanced three interconnected lane elevations so every combat arena rewards cross-role flanking.",
      "Greyboxed in Unreal Engine 5 and dressed with custom modular laboratory kits built in Blender."
    ],
    technicalDeepDive: "Asymmetrical co-op levels fail when one player can solo the objective while teammates wait at a locked door. I structured each security sector as a three-way spatial lock: the Engineer holds a pressure bulkhead open from the gantry, giving the Hacker line-of-sight to override the turret grid while Assault suppresses spawns on the main floor.",
    codeSnippet: `// Multi-Role Synchronised Sector Breach Gate Controller
void ALabSectorLock::EvaluateBreachReadiness()
{
    const bool bGantryHeld   = EngineerPressurePlate->IsActivelyOccupied();
    const bool bTurretsMuted = HackerTerminal->GetOverrideStatus() == EHackState::Bypassed;
    const bool bFloorCleared = AssaultZoneVolume->GetActiveHostileCount() == 0;

    UpdateConduitSignageColour(bGantryHeld, bTurretsMuted, bFloorCleared);

    if (bGantryHeld && bTurretsMuted && bFloorCleared && !bSectorUnlocked)
    {
        bSectorUnlocked = true;
        BroadcastSectorBreachComplete();
    }
}`,
    architectureNodes: [
      { label: "Engineer Gantry", sub: "Vertical Overwatch & Valve" },
      { label: "Hacker Conduit", sub: "Terminal Sightline Puzzle" },
      { label: "Assault Main Floor", sub: "Choke-Point Wave Suppression" },
      { label: "Synchronised Breach", sub: "3-Way Spatial Gate Unlock" }
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
    image: "/images/project_tower_01.jpg",
    gallery: [
      "/images/project_tower_01.jpg",
      "/images/project_tower_02.jpg",
      "/images/project_tower_03.jpg"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2/Chanceway-Marketing-Website",
      itch: null,
      demo: null,
      gdd: "/docs/Chanceway_Game_Design_Document.docx"
    },
    marketingSite: {
      repoSlug: "chanceway",
      title: "Chanceway | Interactive Level Architecture & Probability Archive",
      path: "/marketing/chanceway/index.html",
      repoUrl: "https://github.com/JoshUEL2/Chanceway-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/Chanceway-Marketing-Website/",
      description: "Interactive design archive for Chanceway featuring live probability distribution visualisers, shifting maze topology breakdowns, and sanity director documentation."
    },
    shortDesc: "A first-person psychological maze survival game where corridor geometry dynamically reconfigures outside the player's camera frustum and exit doors operate on shifting probability weights.",
    summary: "Designed around spatial disorientation and risk-versus-reward decision making. Instead of a static floorplan, Chanceway uses frustum-culled socket swapping to rearrange junctions behind the player's back while an adaptive sanity director tunes ambient lighting and audio cues.",
    highlights: [
      "Designed a modular non-Euclidean corridor system that swaps room behind-the-back connections whenever the player's dot-product look vector faces away.",
      "Created a probabilistic exit mechanic where acoustic and lighting tells hint at whether a doorway leads closer to extraction or deeper into the labyrinth.",
      "Built the interactive Chanceway Design Archive website with live Chart.js probability and tension visualisers.",
      "Authored the complete Chanceway Game Design Document."
    ],
    technicalDeepDive: "If geometry shifts while visible, the illusion breaks immediately. Each junction connector checks two conditions before swapping a corridor module: the target socket must lie outside the player's camera frustum planes, and a line-of-sight raycast must confirm an occluding corner wall stands between the player and the seam.",
    codeSnippet: `// Frustum-Culled Non-Euclidean Corridor Socket Swapper
bool AChancewayMazeDirector::TryReconfigureBehindPlayer(UCorridorSocket* Socket, TSubclassOf<ACorridorChunk> NextChunk)
{
    const FVector ToSocket = (Socket->GetComponentLocation() - PlayerCam->GetComponentLocation()).GetSafeNormal();
    const float LookDot = FVector::DotProduct(PlayerCam->GetForwardVector(), ToSocket);

    // Only swap when socket is strictly behind the player's field of view and occluded
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
      { label: "Silent Socket Swap", sub: "Non-Euclidean Topology Shift" },
      { label: "Probability Director", sub: "Exit Weight & Audio Tells" }
    ]
  },
  {
    id: "baldis-basics-2",
    category: "level-design",
    title: "Baldi's Basics 2 (B.A.L.D. Remake)",
    tagline: "3D Psychological Horror Facility & 400+ Lumen Light Benchmark",
    discipline: "Level Lighting, Optimization & Stealth AI",
    engine: "Unreal Engine 5 (Lumen & NavMesh)",
    dates: "Nov 2024 - Feb 2025",
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
      gdd: "/docs/Baldis_Basics_2_Design_Document.docx"
    },
    shortDesc: "A dark 3D Unreal Engine 5 reimagining of Baldi's Basics featuring an interconnected school facility lit by over 400 dynamic Lumen light sources and an acoustic-hunting pursuer AI.",
    summary: "Transforms the flat 2D retro parody into a tense, atmospheric 3D stealth-horror facility in Unreal Engine 5. Engineered to stress-test dynamic Lumen global illumination across long institutional hallways while balancing sightline loops for stealth evasion.",
    highlights: [
      "Architected an interconnected school facility with looping classroom bypasses, locker sightline breaks, and flickering fluorescent corridors.",
      "Profiled and optimised over 400 dynamic Lumen point and rect lights using distance attenuation culling and shadow-map caching.",
      "Built an escalating pursuer AI whose NavMesh movement speed and hearing sensitivity scale up with every collected notebook.",
      "Included full in-engine video walkthrough and technical design documentation."
    ],
    technicalDeepDive: "Placing 400+ overlapping dynamic lights in an indoor corridor network can tank GPU frame times due to shadow-casting overlap. By restricting shadow-casting to primary hero fixtures, using emissive rect-light cards for secondary bounce, and tying max draw distances to corridor sightline bends, the level maintains smooth frame pacing.",
    codeSnippet: `// Escalating Pursuer AI Speed & Acoustic Sensitivity Controller
void ABaldiPursuerAI::OnNotebookCollected(int32 TotalCollected, int32 MaxNotebooks)
{
    const float EscalationAlpha = FMath::Clamp(float(TotalCollected) / float(MaxNotebooks), 0.0f, 1.0f);
    
    // Exponentially tighten ruler-slap movement interval and expand hearing radius
    StepIntervalSeconds = FMath::Lerp(1.15f, 0.28f, FMath::Pow(EscalationAlpha, 1.4f));
    HearingSensor->HearingRange = FMath::Lerp(1400.0f, 3800.0f, EscalationAlpha);
    TriggerFacilityLightFlickerWave(EscalationAlpha);
}`,
    architectureNodes: [
      { label: "Notebook Objective", sub: "Escalation Alpha (0.0 -> 1.0)" },
      { label: "NavMesh Pursuer", sub: "Step Interval Compression" },
      { label: "Acoustic Sensor", sub: "Door & Sprint Noise Radius" },
      { label: "Lumen Light Grid", sub: "400+ Culling-Optimised Fixtures" }
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
    engine: "Twine 2 (SugarCube 2.37 / JavaScript)",
    dates: "Oct 2025 - Dec 2025",
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
      gdd: "/docs/The_Quarry_Branching_Script.docx"
    },
    shortDesc: "Playable directly in the browser. A branching psychological thriller built in Twine SugarCube using Jon Ingold's Accept/Reject/Deflect dialogue triads and a hidden Agitation state tracker.",
    summary: "Instead of binary good/evil choices, every conversation node is structured as an Accept, Reject, or Deflect triad that shifts an internal Agitation variable, rewriting subsequent room descriptions, NPC trust, and survival outcomes.",
    highlights: [
      "Playable directly in your browser with custom CSS atmospheric styling and procedural WebAudio soundscapes.",
      "Implemented Jon Ingold's (Inkle Studios) triad dialogue model so players steer conversational subtext rather than picking obvious morality flags.",
      "Tracked hidden state variables ($agitation, $trust, $clues) that dynamically alter prose phrasing at runtime.",
      "Mapped the complete 60+ node branching architecture in a high-resolution structural flowchart."
    ],
    technicalDeepDive: "Branching narratives quickly suffer from combinatorial explosion if every choice forks a brand-new scene. By using a 'foldback' state architecture, scenes reconverge on shared structural beats while reading the player's accumulated $agitation and $trust integers to swap out dialogue lines, sensory descriptions, and final survival branches.",
    codeSnippet: `/* Twine SugarCube 2.37 - Jon Ingold Triad & Agitation State Resolver */
<<nobr>>
  <<if $choiceTriad is "deflect">>
    <<set $agitation to Math.min(100, $agitation + 15)>>
    <<set $millerTrust -= 10>>
  <<elseif $choiceTriad is "accept">>
    <<set $agitation to Math.max(0, $agitation - 10)>>
    <<set $millerTrust += 15>>
  <</if>>
<</nobr>>
<<if $agitation >= 75>>
  <span class="pulse-warning">The fluorescent strip overhead hums louder. Miller's hand doesn't leave the latch.</span>
<<else>>
  <span>Miller exhales slowly, stepping back from the quarry map.</span>
<</if>>`,
    architectureNodes: [
      { label: "Triad Choice Node", sub: "Accept / Reject / Deflect" },
      { label: "State Mutator", sub: "$agitation & $millerTrust" },
      { label: "Foldback Spine", sub: "Anti-Explosion Convergence" },
      { label: "Dynamic Prose DOM", sub: "Runtime Text & Audio Shift" }
    ]
  },
  {
    id: "waiwwai",
    category: "narrative",
    title: "WAIWWAI: The Turnpike Echoes",
    tagline: "2.5D Dementia Narrative & Physicalised Memory Dialogue System",
    discipline: "Narrative Design & Interactive Project Bible",
    engine: "Unreal Engine 5 Concept / HTML5 Project Bible",
    dates: "Jan 2025 - May 2025",
    studio: "Solo Narrative & Systems Designer",
    image: "/images/waiwwai_cover.jpg",
    gallery: [
      "/images/waiwwai_cover.jpg"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2/WaiWWai-Marketing-Website",
      itch: null,
      demo: null,
      gdd: "/docs/WAIWWAI_Game_Design_Document.docx"
    },
    marketingSite: {
      repoSlug: "waiwwai",
      title: "WAIWWAI | Interactive Project Bible & Memory Erosion Visualiser",
      path: "/marketing/waiwwai/index.html",
      repoUrl: "https://github.com/JoshUEL2/WaiWWai-Marketing-Website",
      liveUrl: "https://joshuel2.github.io/WaiWWai-Marketing-Website/",
      description: "Full interactive Project Bible for 'Where am I, Wait, Where am I: The Turnpike Echoes', featuring an interactive memory-clarity simulator, character portraits, and audio/visual degradation charts."
    },
    shortDesc: "Set on a desolate 1998 London Underground platform at Turnpike Lane, WAIWWAI translates the cognitive erosion of dementia into a physicalised 'Catch-and-Throw' dialogue mechanic.",
    summary: "Follows 81-year-old Arthur waiting on a Piccadilly Line platform that slowly untethers from time. Instead of static dialogue trees, spoken words drift across the screen as physical fragments that dissolve into liquid ink unless the player catches and anchors them before the next train roar.",
    highlights: [
      "Designed a diegetic 'Catch-and-Throw' dialogue system where memory fragments physically drift, blur, and dissolve as cognitive fatigue increases.",
      "Grounded the setting in authentic London Underground spatial architecture (Turnpike Lane tilework, dot-matrix departure boards, and distorted Piccadilly Line announcements).",
      "Built the 650-line interactive WAIWWAI Project Bible web application with a live memory-degradation simulator and Chart.js sensory curves.",
      "Included the complete WAIWWAI Game Design Document."
    ],
    technicalDeepDive: "Traditional RPG dialogue menus give players infinite time to read clean text, which contradicts the lived disorientation of dementia. In WAIWWAI's dialogue architecture, each spoken phrase spawns with a decay timer and a Perlin drift vector; if the player's cursor fails to anchor the keyword before clarity drops below threshold, the characters inside the string scramble into phonetic echoes.",
    codeSnippet: `// WAIWWAI Memory Fragment Decay & Phonetic Erosion Controller
function updateMemoryFragment(fragment, deltaSeconds, clarityIndex) {
    fragment.lifetime -= deltaSeconds * (2.0 - clarityIndex);
    fragment.x += Math.sin(fragment.lifetime * 1.7) * fragment.driftSpeed;

    if (clarityIndex < 0.45) {
        // Erode characters into phonetic ellipses as memory untethers
        fragment.displayText = fragment.rawText
            .split('')
            .map(ch => (Math.random() > clarityIndex * 1.6 && ch !== ' ') ? '·' : ch)
            .join('');
    }
    return fragment.lifetime > 0;
}`,
    architectureNodes: [
      { label: "NPCDialogue Utterance", sub: "Spawn Drifting Keyword Node" },
      { label: "Clarity Index (0..1)", sub: "Decay Rate & Perlin Drift" },
      { label: "Catch & Anchor Input", sub: "Player Focus Tether" },
      { label: "Phonetic Erosion", sub: "Glyph Dissolve on Timeout" }
    ]
  },
  {
    id: "dear-hiring-manager",
    category: "narrative",
    title: "Dear, Hiring Manager",
    tagline: "Satirical Recruitment Screenplay & Systems Design Document",
    discipline: "Narrative & Systems Design",
    engine: "Screenplay & Systems GDD",
    dates: "Feb 2025 - May 2025",
    studio: "Solo Writer & Designer",
    image: "/images/dear_hiring_manager.jpg",
    gallery: [
      "/images/dear_hiring_manager.jpg"
    ],
    videoPreview: null,
    links: {
      github: "https://github.com/JoshUEL2",
      itch: null,
      demo: null,
      gdd: "/docs/Dear_Hiring_Manager_Screenplay.docx"
    },
    shortDesc: "A satirical narrative and mobile systems GDD turning modern tech recruitment dark patterns into a high-pressure resource-management game.",
    summary: "Written as both a dramatic screenplay and a systems design document. Examines algorithmic CV filtering, ghost job listings, and emotional burnout by translating them into stamina-draining UI mechanics.",
    highlights: [
      "Wrote a full industry-formatted screenplay alongside a companion mobile game systems specification.",
      "Designed 'Emotional Bandwidth' and 'Financial Runway' resource loops where every automated rejection email triggers UI clutter and input latency.",
      "Used dark comedy and fourth-wall-breaking applicant tracking prompts to critique automated hiring pipelines.",
      "Downloadable in full as a formatted screenplay and design document."
    ],
    technicalDeepDive: "The design document pairs narrative beats directly with UI degradation rules: as the protagonist's burnout counter climbs, auto-fill forms deliberately introduce typos that the player must manually correct under a ticking rent clock.",
    codeSnippet: `// Burnout-Driven UI Input Latency & Form Auto-Fill Corruption
float UApplicantHUDManager::CalculateEffectiveInputDelay(int32 RejectionStreak, float EmotionalBandwidth) const
{
    const float FatigueRatio = 1.0f - FMath::Clamp(EmotionalBandwidth / 100.0f, 0.0f, 1.0f);
    const float StreakPenalty = FMath::Min(RejectionStreak * 0.018f, 0.25f);
    
    // Introduce subtle cursor drag and typo probability as burnout peaks
    return BaseInputDelay + (FatigueRatio * 0.14f) + StreakPenalty;
}`,
    architectureNodes: [
      { label: "ATS Portal Submission", sub: "CV Keyword Parser" },
      { label: "Rejection Streak++", sub: "Bandwidth Drain Event" },
      { label: "UI Friction Injector", sub: "Cursor Lag & Form Typos" },
      { label: "Runway Clock Check", sub: "Narrative Branch Trigger" }
    ]
  },
  {
    id: "far-cry-5-dlc",
    category: "narrative",
    title: "Far Cry 5 DLC: 'Faith Over Fear'",
    tagline: "AAA Narrative Expansion Screenplay & Mocap Direction",
    discipline: "AAA Narrative & Environmental Storytelling",
    engine: "Screenplay & World Design Bible",
    dates: "Oct 2024 - Jan 2025",
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
      gdd: "/docs/Faith_Over_Fear_Screenplay.docx"
    },
    shortDesc: "A feature-length DLC concept and mocap screenplay set in post-collapse Hope County, blending environmental indexical storytelling with unreliable hallucination sequences.",
    summary: "Explores survivor guilt and cult indoctrination in the aftermath of Far Cry 5. Written for full performance-capture staging, pairing spoken dialogue with spatial blocking, camera lens cues, and seamless gameplay transitions.",
    highlights: [
      "Authored a full mocap-ready screenplay complete with camera blocking, actor posture notes, and combat-to-cutscene transitions.",
      "Designed environmental 'indexical storytelling' loops where burned bunker props and radio static shift subtly when the player isn't looking.",
      "Structured Bliss hallucination sequences that swap enemy silhouettes with civilian allies to create genuine trigger hesitation.",
      "Downloadable in full as an industry-formatted screenplay and design dossier."
    ],
    technicalDeepDive: "Instead of cutting away to pre-rendered cinematics, every narrative beat is staged as an in-engine walk-and-talk or interactive hallucination transition that preserves first-person camera continuity.",
    codeSnippet: `// Unreliable Bliss Hallucination Silhouette Swap Trigger
void ABlissHallucinationDirector::EvaluateTargetPerception(AActor*ObservedActor, float PlayerBlissExposure)
{
    if (PlayerBlissExposure < HallucinationThreshold) return;

    // When player peripheral angle exceeds 35 deg, swap hostile mesh for ally silhouette
    const float ViewAngle = CalculateAngleFromCameraCentre(ObservedActor->GetActorLocation());
    if (ViewAngle > 35.0f && !ObservedActor->WasRecentlyRendered(0.05f))
    {
        SwapSkeletalVisualProfile(ObservedActor, EVisualProfile::AmbiguousCivilian);
    }
}`,
    architectureNodes: [
      { label: "Bliss Exposure Meter", sub: "Threshold > 0.65" },
      { label: "Peripheral Frustum", sub: "View Angle > 35°" },
      { label: "Silhouette Swap", sub: "Hostile <-> Civilian Mesh" },
      { label: "Trigger Hesitation", sub: "Diegetic Moral Consequence" }
    ]
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
  { name: "Storytelling for Games (The Quarry & Faith Over Fear)", mark: "78%", grade: "1st Class" },
  { name: "Game Studio (Delirium VR)", mark: "78%", grade: "1st Class" },
  { name: "Level Design (LabR@z)", mark: "72%", grade: "1st Class" },
  { name: "Game Prototyping (Daydream Believer)", mark: "72%", grade: "1st Class" },
  { name: "Visual & Theoretical Studies", mark: "72%", grade: "1st Class" }
];

export const HARDWARE_BENCH_PROJECTS = [
  {
    id: "project-kinetic",
    tag: "BENCH LOG 01 // DIY MOTION CAPTURE",
    title: "Project K.I.N.E.T.I.C. - Under-£100 MetaHuman Mocap Rig",
    subtitle: "Xbox One Kinect v2 Depth Camera + PSVR Move Gyroscopes + Python OSC + UE5 LiveLink",
    image: "/images/project_frame.jpg",
    problem: "I needed full-body motion capture to drive Unreal Engine 5 MetaHumans for cutscene blocking, but commercial optical or inertial mocap suits cost between £2,500 and £10,000+.",
    tinkeringSolution: "Instead of settling for stock animations, I dug out an old Xbox One Kinect v2 infrared time-of-flight camera and two PlayStation VR Move controllers. Single-camera Kinect skeletal tracking loses wrist rotation and flips bones whenever you turn 180 degrees, so I strapped PSVR Move controllers to my extremities for continuous gyroscope quaternions and wrote a custom Python OSC bridge that fuses both sensor streams into UE5 LiveLink at 30 FPS.",
    proofPoints: [
      "Fused infrared depth point-clouds (Brekel Body v2) with PSVR Move IMU gyroscope orientation over UDP/OSC sockets.",
      "Solved single-camera 180-degree occlusion and wrist-twist gimbal lock using weighted quaternion filtering in Python.",
      "Streamed live retargeted skeletal transforms directly onto Unreal Engine 5 MetaHuman control rigs in real time."
    ],
    pipeline: ["Kinect v2 IR Depth", "PSVR Move IMU Gyros", "Python OSC Fusion Bridge", "UE5 LiveLink MetaHuman"],
    links: {
      github: "https://github.com/JoshUEL2"
    }
  },
  {
    id: "signalrgb-hid",
    tag: "BENCH LOG 02 // USB HID PACKET SNIFFING",
    title: "Wireshark USB Reverse-Engineering & SignalRGB Plugins",
    subtitle: "Wireshark USBPcap + Raw 64-Byte Hex Protocol Decoding + JavaScript HID Drivers",
    image: "/images/vr_showcase.jpg",
    problem: "When I built my custom dual-radiator watercooled PC, my Gigabyte Aorus P1200W PSU LCD and RGB controllers required bloated vendor apps that clashed in the background and had zero support in SignalRGB.",
    tinkeringSolution: "I hooked Wireshark and USBPcap directly onto the raw USB root hub, captured the proprietary 64-byte HID interrupt transfers while toggling modes in the official Gigabyte software, and mapped out the hexadecimal command headers, RGB register offsets, and checksum bytes by hand to write my own open-source SignalRGB device plugin.",
    proofPoints: [
      "Isolated vendor ID (VID) and product ID (PID) endpoints using Wireshark USBPcap packet captures.",
      "Decoded undocumented 64-byte hexadecimal payload structures, brightness scalars, and frame-sync handshakes.",
      "Published an open-source JavaScript USB HID plugin allowing SignalRGB to drive the hardware natively without Gigabyte bloatware."
    ],
    pipeline: ["Wireshark USBPcap", "Hex Payload Diffing", "USB HID Endpoint Map", "SignalRGB JS Driver"],
    links: {
      github: "https://github.com/JoshUEL2/SignalRGB-Aorus-P1200W-Plugin"
    }
  },
  {
    id: "hydroscreen-xc7",
    tag: "BENCH LOG 03 // CUSTOM C# HARDWARE DAEMON",
    title: "HydroScreen XC7 - Custom Waterblock LCD Driver",
    subtitle: "C# / .NET + Direct USB HID Telemetry + Custom Loop Thermal Control",
    image: "/images/project_tower_02.jpg",
    problem: "Corsair's official iCUE suite consumed hundreds of megabytes of RAM and constant CPU interrupts just to render coolant temperatures on my XC7 RGB ELITE CPU waterblock LCD.",
    tinkeringSolution: "I wrote a lightweight standalone C# / .NET driver (HydroScreen-XC7) that talks directly to the waterblock's USB HID display controller, polling loop coolant and CPU package sensors and pushing custom telemetry frames to the circular LCD screen with near-zero background CPU overhead.",
    proofPoints: [
      "Replaced heavy vendor background services with a lean C#/.NET direct-HID driver for the Corsair XC7 RGB ELITE LCD.",
      "Paired with a custom-built shared watercooling loop cooling a Ryzen 9 5950X and waterblocked RTX 4070.",
      "Tuned radiator fan curves directly against inline water-temperature thermistors rather than spiky CPU die temps."
    ],
    pipeline: ["Hardware Sensor Poll", "C# .NET Frame Buffer", "Direct USB HID Write", "XC7 Waterblock LCD"],
    links: {
      github: "https://github.com/JoshUEL2/HydroScreen-XC7-Compatiability"
    }
  },
  {
    id: "tfl-and-realspeak",
    tag: "BENCH LOG 04 // ALGORITHMIC TOOLS & AI PIPELINES",
    title: "TfL Underground Graph Router & Project Realspeak",
    subtitle: "Dijkstra Tube Pathfinding + Oyster CSV Parser + Early-2023 UE5 AI NPC Lip-Sync",
    image: "/images/tfl_planner.jpg",
    problem: "Whether I want to audit my own London Underground Oyster card spending or test conversational AI NPCs inside Unreal Engine 5 before commercial plugins existed, if a tool does not exist, I build it from scratch.",
    tinkeringSolution: "For transit routing, I modelled the London Underground network as a weighted graph in JavaScript (incorporating line-change walking penalties) and built a client-side Oyster CSV parser that visualises journey history on an interactive Leaflet GIS map. Back in early 2023, I also built Project Realspeak, wiring OpenAI speech-to-text and TTS into UE5 MetaHuman facial visemes for real-time unscripted NPC dialogue.",
    proofPoints: [
      "Implemented weighted Dijkstra / A* graph traversal across London Underground stations with live interchange penalties.",
      "Built a zero-server Oyster CSV parser that reconstructs commuter routes and fare totals directly in the browser.",
      "Engineered Project Realspeak in early 2023, connecting microphone speech-to-text, LLM character prompts, and MetaHuman lip-sync in UE5."
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
    badge: "Click to Open Stage Curtain",
    shortSummary: "Performed in front of 100+ cast and audience members as Lead Actor in Les Misérables and The Addams Family, plus physical horror acting in the 2026 short film Dead Weight.",
    whyItMattersForGames: "My years on stage and film sets directly inform how I direct motion-capture sessions, write dialogue subtext (such as my Far Cry 5 'Faith Over Fear' screenplay), and block character body language inside Unreal Engine 5.",
    story: "Stepping onto stage as a lead actor in Les Misérables and The Addams Family meant singing solo numbers, choreographing duets, and holding the attention of a packed auditorium alongside a 100-person cast and crew. More recently in March 2026, I performed as a featured supporting actor in the gritty psychological crime/horror short film 'Dead Weight', doing my own physical stunt falls and SFX prosthetic work. When I write game dialogue or block a camera in Unreal Engine, I do not think in static text boxes - I think in stage blocking, eye-lines, breathing pauses, and physical subtext.",
    highlights: [
      "Lead Actor in Les Misérables & The Addams Family: performed solo vocal numbers, choreographed duets, and coordinated costume transitions.",
      "Supporting Actor in 'Dead Weight' (Mar 2026): physical horror/crime film performance with practical special-effects makeup.",
      "Directly translates into AAA mocap volume blocking, voice-acting direction, and believable character animation."
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
    badge: "Click to Inspect Role",
    shortSummary: "Elected School Representative for BSc Computer Games Design for two consecutive years (unanimously voted in), navigating the cohort through an unprecedented departmental course merger and serving as invited Student Panellist on the university's Sextennial School Review.",
    whyItMattersForGames: "Game development is fundamentally cross-disciplinary and high-friction: whether communicating between engineering, art, and production, or advocating for cohort hardware resources with university executives, my representative work proves I can de-escalate crisis, structure feedback data, and negotiate directly with leadership.",
    story: "As the elected School Representative for the School of Architecture, Computing & Engineering at the University of East London, I serve as the direct communication conduit between students, senior academics, and faculty deans. My tenure coincided with an unprecedented structural course merger across the games cluster, which initially triggered severe anxiety, confusion, and misinformation among students. Recognising the distress this caused, I immediately established a direct line with our cluster lead to obtain concrete facts, de-escalated rumours, and held regular cohort briefings. In April 2025, I was appointed by senior leadership to sit on the formal Sextennial School Review panel, working alongside external examiners and department heads to critically evaluate curriculum architecture, studio teaching standards, and student satisfaction.",
    governancePillars: [
      {
        title: "Elected Representative 2 Years Running",
        detail: "Unanimously voted in as Course Representative for BSc Computer Games Design two years in a row, building trusted relationships with students, lecturers, and student union officers."
      },
      {
        title: "Navigating the Games Cluster Course Merger",
        detail: "Proactively bridged the information gap during a historic departmental restructuring. Tracked student concerns, squashed fearmongering, and worked directly with the cluster lead to safeguard module resources for the final graduating cohort."
      },
      {
        title: "Sextennial School Review Board (April 2025)",
        detail: "Selected as student panellist for the once-in-six-years formal review of the Media and Computing school, collaborating with external examiners and university leadership to evaluate curriculum standards."
      },
      {
        title: "Systematic Issue & Hardware Tracking",
        detail: "Maintained formal issue tracking registers (e.g. GPU driver incompatibilities, VR headset provisioning, studio room allocations) and presented evidence-based solutions at termly board meetings."
      },
      {
        title: "Hall Representative & Residential Ambassador",
        detail: "Elected UEL Hall Representative (Longbridge House) and Residential Life Ambassador, supporting student mental health, accommodation standards, and university-wide sustainability initiatives."
      }
    ],
    highlights: [
      "Unanimously elected Course Representative for BSc Computer Games Design two consecutive years.",
      "Successfully stabilised and advocated for the cohort through the historic games cluster course merger.",
      "Invited Student Panellist on the formal Sextennial School Review alongside external university examiners.",
      "Maintained data-driven course feedback and hardware tracking logs presented at faculty board level.",
      "Served as UEL Hall Representative and Residential Life Ambassador across student accommodation."
    ],
    images: []
  },
  {
    id: "podcast-studio-founder",
    theme: "studio",
    category: "AUDIO ENGINEERING & BROADCAST PRODUCTION",
    title: "School Podcast Studio Founder, Director & Host",
    subtitle: "Converted Bare Storage Room into Multi-Mic Broadcast Studio • Weekly Producer & Editor",
    badge: "Click to Tour Studio",
    shortSummary: "Handpicked to build Ousedale Sixth Form's first broadcast podcast studio from an empty storage cupboard, wiring the audio hardware and serving as Director, Host, Technician, and Editor.",
    whyItMattersForGames: "Building a physical recording studio from scratch taught me microphone staging, acoustic treatment, multi-track mixing, and voiceover direction that I now use for game audio and dialogue.",
    story: "When my Sixth Form wanted to launch its first official broadcast podcast, I was entrusted with a budget and a bare storage cupboard. I researched acoustic foam treatment, dynamic microphones, boom arms, and multi-channel audio interfaces, cleared and wired the entire studio myself, and established the weekly production pipeline. Throughout the academic year, I served simultaneously as Director, Host, Sound Technician, and Post-Production Editor.",
    highlights: [
      "Designed and wired a complete multi-microphone broadcast studio from an empty school storage room.",
      "Managed acoustic treatment, gain staging, multi-track recording, and weekly post-production mastering.",
      "Directed and hosted weekly episodes with staff and student guests, building a repeatable production workflow."
    ],
    images: [
      { src: "/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_01.jpg", caption: "Converting a bare storage room into a fully wired broadcast podcast studio" },
      { src: "/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_02.jpg", caption: "Multi-track audio mixer, microphone routing, and recording desk" },
      { src: "/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_03.jpg", caption: "Studio microphone staging and acoustic setup" },
      { src: "/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_04.jpg", caption: "Live recording session and broadcast hardware setup" }
    ]
  },
  {
    id: "yearbook-sole-editor",
    theme: "editorial",
    category: "PUBLICATION DESIGN & CREATIVE DIRECTION",
    title: "Yearbook Sole Editor & Lead Graphic Designer",
    subtitle: "150+ Cover Iterations • 200-Portrait Front Cover Mosaic • Full Custom Page Layouts",
    badge: "Click to View Spreads",
    shortSummary: "Took solo ownership of our entire school yearbook from the ground up, designing all custom backgrounds, formatting every page, and iterating through 150+ front cover variations.",
    whyItMattersForGames: "Directly sharpens UI/UX layout discipline, visual hierarchy, typography, and asset pipeline organisation across hundreds of high-resolution textures and print deadlines.",
    story: "As the Sole Editor for my school's yearbook, I took complete end-to-end ownership of both creative direction and technical print execution. I designed all custom page backgrounds from scratch, standardised typography and grid alignment across every section, and manually cut out, sharpened, and colour-balanced portraits. For the front and back cover alone, I iterated through over 150 distinct design variations before engineering a precision mosaic aligning more than 200 individual student photographs.",
    highlights: [
      "Sole Editor with final creative and technical sign-off across the entire print publication.",
      "Developed over 150 front-cover iterations, culminating in a precision mosaic of 200+ aligned portraits.",
      "Created all custom graphic backgrounds, badge depth effects, and grid layouts from scratch."
    ],
    images: [
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_12.jpg", caption: "Final Front & Back Cover Revision (150+ iterations & 200+ aligned student portraits)" },
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_01.jpg", caption: "Mid-project custom page typography and grid layout" },
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_02.jpg", caption: "Final custom graphic background artwork designed from scratch" },
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_03.jpg", caption: "Double-page spread alignment and portrait framing" },
      { src: "/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_04.jpg", caption: "Initial structural layout and colour experimentation" }
    ]
  },
  {
    id: "cyber-harvard",
    theme: "cyber",
    category: "DEFENSIVE SECURITY & CS FOUNDATIONS",
    title: "CyberCenturion UK Top 60 Finalist & Harvard CS50x / PCAP",
    subtitle: "National Defensive Cybersecurity Finalist • Certified in C, Python, SQL & Security",
    badge: "Click to Open Security Log",
    shortSummary: "Placed in the Top 60 nationwide in the CyberCenturion UK defensive security competition, alongside completing Harvard CS50x and Python Institute PCAP certifications.",
    whyItMattersForGames: "Gives me a rigorous systems-engineering foundation: memory management in C, algorithmic complexity in Python, and hardening networked servers against live exploits.",
    story: "Before specialising in Unreal Engine 5, I competed in the national CyberCenturion cybersecurity competition (2022-2024), working under timed pressure to audit permissions, strip out backdoors, patch kernel vulnerabilities, and harden Linux and Windows virtual machines against a live scoring engine - finishing in the Top 60 teams in the UK. I paired that practical systems mindset with Harvard University's CS50x certificate and the Python Institute's PCAP (Certified Associate in Python Programming) credential.",
    highlights: [
      "Top 60 UK National Finalist in CyberCenturion defensive cybersecurity (Linux & Windows system hardening).",
      "Harvard University CS50x certified (C pointers, memory allocation, data structures, SQL, and web architecture).",
      "Python Institute PCAP certified (object-oriented architecture, exceptions, and algorithmic problem-solving)."
    ],
    images: [
      { src: "/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_01.jpg", caption: "Competing in the CyberCenturion UK national defensive security rounds" },
      { src: "/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_02.jpg", caption: "Live virtual machine hardening and vulnerability patching" },
      { src: "/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_03.jpg", caption: "CyberCenturion team workstation setup" },
      { src: "/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_04.jpg", caption: "National competition scoring and forensics terminal" }
    ]
  },
  {
    id: "vex-robotics",
    theme: "robotics",
    category: "COMPETITIVE ROBOTICS & MECHATRONICS",
    title: "VEX Robotics UK National Finalist (Founding Member)",
    subtitle: "Mechanical Drivetrain Engineering, Sensor Wiring & Autonomous C++ Routines",
    badge: "Click to Inspect Robot Rig",
    shortSummary: "Founding member of our Sixth Form VEX Robotics squad, designing, gearing, wiring, and programming competitive robots from scratch to reach the UK National Finals.",
    whyItMattersForGames: "Building physical robots that have to survive real-world friction, gear backlash, and sensor noise taught me how to write resilient physics and state-machine code in game engines.",
    story: "As a founding member of our VEX Robotics team (2023-2024), I worked across the full mechatronics loop: CAD prototyping aluminium chassis drivetrains, crimping motor and optical sensor harnesses, calculating torque-to-speed gear ratios, and writing autonomous + driver-control routines. When a mechanism jammed mid-match, we had minutes in the pit lane to diagnose whether it was a mechanical tolerance issue or a software state bug.",
    highlights: [
      "Co-founded the school's competitive VEX V5 Robotics squad and qualified for the UK National Finals.",
      "Engineered high-torque drivetrains, pneumatic/mechanical intakes, and autonomous sensor routines.",
      "Bridges physical mechanical engineering directly with virtual rigid-body physics in Unreal Engine 5."
    ],
    images: [
      { src: "/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_01.jpg", caption: "Our VEX V5 competition robot on the match field" },
      { src: "/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_02.jpg", caption: "Chassis drivetrain assembly and motor wiring" },
      { src: "/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_03.jpg", caption: "Pit-lane debugging and autonomous testing" },
      { src: "/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_04.jpg", caption: "VEX Robotics competition arena" }
    ]
  }
];

export const SHOWCASE_EXHIBITIONS = [
  {
    id: "ace-2026-main-hall",
    event: "UEL Annual ACE Showcase 2026",
    location: "Royal Docks Centre for Sustainability (Downstairs Main Hall)",
    highlight: "Rastacats • Sole Level 5 Project Selected for Final-Year Hall",
    src: "/images/dossier/ace_showcase_2026_image_01.jpg",
    caption: "Rastacats exhibited downstairs in the main Final-Year (Level 6) exhibition hall at the Royal Docks Centre for Sustainability as the only Year 2 project selected by faculty."
  },
  {
    id: "ace-2026-vr-suite",
    event: "UEL Annual ACE Showcase 2026",
    location: "Royal Docks Centre for Sustainability (Upstairs VR Suite)",
    highlight: "Delirium VR • Sole Playable VR Project on Level 5 Floor",
    src: "/images/dossier/ace_showcase_2026_image_02.jpg",
    caption: "Took full operational ownership of configuring tracking bounds, eliminating frame latency, and running live public playtests for our OpenXR VR horror game."
  },
  {
    id: "summer-demo-series-01",
    event: "RDSC Summer VR Showcase Series (Sessions 1–4)",
    location: "Dedicated OpenXR VR Suite (Royal Docks)",
    highlight: "Summer Faculty Demonstrations & Grading Sessions with Patrick Quinnell",
    src: "/images/dossier/personal_project_showcase_2026_image_01.jpg",
    caption: "Ran multiple showcase runs over the summer period with module leader Patrick Quinnell, facilitating live VR playtesting and hardware calibration."
  },
  {
    id: "summer-demo-series-02",
    event: "RDSC Summer VR Showcase Series",
    location: "Royal Docks Centre for Sustainability",
    highlight: "Multi-User Hardware Calibration & Public Walkthroughs",
    src: "/images/dossier/personal_project_showcase_2026_image_02.jpg",
    caption: "Calibrating dual-station Meta Quest 3 & PCVR rigs to demonstrate spatial audio sanity and two-handed physical interactions."
  },
  {
    id: "ace-2026-station-03",
    event: "UEL Annual ACE Showcase 2026",
    location: "Royal Docks Centre for Sustainability",
    highlight: "Dual-Floor Public Presentation (Arcade Rig + VR Installation)",
    src: "/images/dossier/ace_showcase_2026_image_03.jpg",
    caption: "Demonstrating custom 360-degree polar spline gravity and GPU material shaders live to industry visitors."
  },
  {
    id: "personal-showcase-03",
    event: "Personal Project Showcase",
    location: "University of East London Games Lab",
    highlight: "Hands-On Player Feedback & Telemetry Observation",
    src: "/images/dossier/personal_project_showcase_2026_image_03.jpg",
    caption: "Observing real-time player telemetry and gathering playtesting feedback across multiple exhibition sessions."
  },
  {
    id: "ace-2026-station-04",
    event: "UEL Annual ACE Showcase 2026",
    location: "Royal Docks Exhibition Hall",
    highlight: "Academic Peer Review & Industry Delegation Q&A",
    src: "/images/dossier/ace_showcase_2026_image_04.jpg",
    caption: "Fielding technical questions on Unreal Engine 5 optimisation and state machine architecture with external guests."
  },
  {
    id: "personal-showcase-04",
    event: "Personal Project & VR Showcase",
    location: "UEL Docklands Campus",
    highlight: "Full Hardware & Controller Kiosk Deployment",
    src: "/images/dossier/personal_project_showcase_2026_image_04.jpg",
    caption: "Complete exhibition setup featuring high-framerate playable builds and direct developer demonstrations."
  }
];



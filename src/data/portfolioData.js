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
  bio: "I'm a London-based Technical Game Designer focused on Unreal Engine 5 gameplay programming, HLSL/Material Graph shaders, and systemic narrative design. I like solving the awkward technical problems where design and engineering collide—whether that's overriding UE5's planar gravity for 360° pipe racing, projecting decals onto vertex-displaced meshes, or anchoring seated VR horror to physical wheelchair inertia.",
  stats: [
    { label: "Games & Prototypes", value: "15", sub: "UE5, Unity, Python & Web" },
    { label: "Gameplay Prototyping", value: "92%", sub: "1st Class Honours (MS5027)" },
    { label: "CPU Tick Reduction", value: "-65%", sub: "ISM Actor Pooling (UE 5.7)" },
    { label: "Live Exhibitions", value: "2×", sub: "Sole L5 in L6 Hall & Sole VR" }
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
      { label: "RECOGNITION", value: "92% (1st) • Sole L5 in L6 Hall" }
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
  { id: "flagships", label: "★ Flagship Deep-Dives (4)", desc: "My strongest playable builds & technical breakdowns" },
  { id: "gameplay", label: "01 / Gameplay & VR Physics", desc: "Polar spline gravity, OpenXR wheelchair physics & AI state machines" },
  { id: "concepts", label: "02 / Shaders & Photogrammetry", desc: "Kuwahara watercolour filters, WPO morphing & 1:1 digital twins" },
  { id: "level-narrative", label: "03 / Level & Dialogue Systems", desc: "Asymmetrical co-op FPS architecture & Jon Ingold dialogue engines" }
];

export const PROJECTS = [
  // --- CATEGORY 1: GAMEPLAY & VR PHYSICS ---
  {
    id: "rastacats",
    slug: "rastacats",
    category: "gameplay",
    isFlagship: true,
    statusTag: { label: "Playable Build + Dual-Phase", color: "emerald" },
    gradeBadge: "MS5027 • 92% (1st Class)",
    exhibitionBadge: "Exhibited in L6 Grad Hall",
    number: "01",
    title: "Rastacats & Rastacats Remastered",
    tagline: "360° Cylindrical Pipe Physics & Curved-World Shader Overhaul",
    discipline: "Gameplay Engineering & Shaders",
    engine: "Unreal Engine 5.7",
    dates: "Oct 2025 – May 2026",
    studio: "Solo Developer • UEL (MS5027 & MS5022)",
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
    funFact: "Faculty selected Rastacats as the only Level 5 game invited to exhibit downstairs alongside graduating Level 6 projects at the Royal Docks Centre for Sustainability, where I demoed it live to 100+ visitors.",
    links: {
      github: null,
      demo: null,
      itch: "https://joshej.itch.io/rastacats",
      video: null,
      linkedin: null
    },
    shortDesc: "A two-phase Unreal Engine 5.7 arcade bobsled runner. In Term 1, I bypassed UE5's planar CharacterMovement to build 360° inner-pipe gravity at 200+ km/h. In Term 2, I rebuilt the rendering and tick architecture—adding an Animal Crossing-style curved horizon shader, tangent-aligned decal maths, and coin pooling that cut CPU tick time by 65%.",
    summary: "I built Rastacats across two terms to push custom locomotion physics and shader optimisation in Unreal Engine 5.7. Phase 1 focused on high-speed 360° cylindrical pipe adhesion and a risk-reward Overspeed gauge. Phase 2 overhauled the entire technical pipeline: I wrote a spherical World Position Offset (WPO) horizon shader, solved deferred decal shearing on curved geometry via Blueprint Event Tick tangent projections, pooled hundreds of coin actors into Instanced Static Meshes, and added AI race rivals.",
    highlights: [
      "Overrode UE5's default planar Z-down assumptions by computing polar coordinates from spline cross-sections, projecting artificial gravity radially towards the pipe spine.",
      "Wrote an Animal Crossing-style spherical World Position Offset (WPO) shader to bend the horizon dynamically as the bobsled races forward.",
      "Solved deferred decal stretching on WPO-curved tracks by calculating local surface tangent frames in Event Tick before projecting skid marks and graffiti.",
      "Cut CPU tick overhead by 65% by replacing individual ticking coin actors with a single distance-culled Instanced Static Mesh (ISM) manager.",
      "Added velocity-driven secondary bone animation on the cats' ears and tails, AI rubber-banding competitors, and Niagara blizzard particles."
    ],
    technicalDeepDive: "Standard UE5 CharacterMovement assumes a flat world with a fixed -Z gravity vector, causing pawns to detach when banking past 90° inside a tube. In Phase 1, I sampled the nearest spline point each frame, derived the radial vector from the pipe centre to the pawn, and aligned both the pawn's Up-vector and artificial gravity impulse to that normal. In Phase 2, bending the world via WPO broke standard deferred decals (which project in world space before vertex displacement). I fixed this by computing the parabolic derivative of the WPO curve in Blueprint Tick to rotate decal projection boxes flush against the displaced surface.",
    codeSnippet: `// Curved-World WPO Displacement & Decal Tangent Compensation (UE 5.7)
float DistZ = WorldPos.x - CameraPos.x;
float CurveOffset = -pow(DistZ / CurveRadius, 2.0) * CurveStrength;
WorldPositionOffset = float3(0.0, 0.0, CurveOffset);

// Blueprint Tick: Analytical derivative dZ/dX for Decal Pitch alignment
float Slope = (-2.0 * DistZ / (CurveRadius * CurveRadius)) * CurveStrength;
FRotator DecalRot = FMath::RInterpTo(CurrentRot, FRotator(FMath::RadiansToDegrees(atan(Slope)), Yaw, Roll), DeltaTime, 18.0f);`,
    splitPhases: [
      {
        id: "original",
        phaseLabel: "Phase 1: 360° Pipe Physics (Term 1 / MS5027)",
        phaseBadge: "92% • 1st Class",
        phaseSubtitle: "Cylindrical Spline Gravity & 200 km/h Overspeed Loop",
        title: "Rastacats (Phase 1): 360° Cylindrical Pipe Racing",
        summary: "Built for MS5027 Gameplay Prototyping (92%). Players pilot a bobsled around the inside and outside of cylindrical pipes at over 200 km/h, banking full 360° loops while managing an Overspeed multiplier that boosts coin yield at the cost of tighter obstacle reaction windows.",
        highlights: [
          "Polar coordinate gravity solver keeping the pawn locked to inner and outer pipe walls across 360° rotations",
          "Risk-reward Overspeed gauge: holding top speed multiplies score and FOV feedback but narrows steering recovery",
          "Procedural obstacle spawner placing spike barricades, speed pads, and coin arcs along spline segments",
          "Tuned angular damping and lateral friction so inverted steering never flips camera orientation unexpectedly"
        ],
        technicalDeepDive: "Because UE5's CharacterMovementComponent hardcodes vertical capsule orientation, I built a custom Pawn physics tick that queries the track spline's cross-sectional normal, applies a centripetal adhesion force proportional to forward velocity, and smoothly slerps camera roll so loop-the-loops feel responsive rather than nauseating.",
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
        phaseLabel: "Phase 2: Curved-World Remaster (Term 2 / MS5022)",
        phaseBadge: "-65% CPU Tick",
        phaseSubtitle: "Spherical WPO Horizon Shader, Decal Maths & ISM Pooling",
        title: "Rastacats Remastered: Shader Overhaul & Engine Optimisation",
        summary: "For MS5022 Portfolio 1, I tore down and rebuilt the game's rendering and actor lifecycle. I engineered a curved-world vertex shader, fixed decal projection shearing along displaced normals, pooled all collectibles into Instanced Static Meshes, and added an AI Race Mode, a cosmetic shop, and custom Substance Painter ice materials.",
        highlights: [
          "Spherical World Position Offset (WPO) shader bending the track over a rolling horizon like Animal Crossing",
          "Replaced hundreds of Blueprint coin actors running Event Tick with a single ISM manager, cutting CPU tick cost by 65%",
          "Calculated surface tangent frames in Blueprint Tick so graffiti and skid-mark decals project cleanly onto WPO-bent meshes",
          "Added velocity-driven spring-damper bone rotation on the cats' tails and ears for tactile speed feedback",
          "Built an AI Race Mode with spline-distance rubber-banding and custom Niagara snowstorms"
        ],
        technicalDeepDive: "World Position Offset shifts vertices on the GPU after the CPU collision and decal passes have already run. To stop deferred decals from shearing off the bent track, I mirrored the GPU quadratic curve equation `P_z = -(d / R)^2` on the CPU in Event Tick, computing the local tangent slope to pitch each decal projector into alignment with the displaced mesh.",
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
    slug: "delirium",
    category: "gameplay",
    isFlagship: true,
    statusTag: { label: "Playable VR + Full GDD", color: "emerald" },
    gradeBadge: "MS5021 • 78% (1st Class)",
    exhibitionBadge: "Sole Playable L5 VR Build",
    number: "02",
    title: "Delirium VR",
    tagline: "Seated OpenXR Wheelchair Horror, Frustum-Locked AI & Non-Euclidean Hallways",
    discipline: "VR Systems Design, GDD & UI",
    engine: "Unreal Engine 5.6 VR (OpenXR)",
    dates: "Jan 2026 – Jun 2026",
    studio: "3J Mad Studios (6-Person Team) • UEL (MS5021)",
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
    funFact: "Delirium was the only fully working, playable VR project in the entire Level 5 showcase—running at a locked 90 FPS with physical seated wheelchair onboarding for walk-up visitors.",
    links: {
      github: null,
      demo: null,
      itch: "https://joshej.itch.io/delirium",
      gdd: "/docs/Delirium_GDD_and_Design_Notes.zip",
      video: "/media/delirium_preview.mp4",
      linkedin: null
    },
    shortDesc: "A seated first-person VR survival horror game in Unreal Engine 5.6 where you wake up confined to a hospital wheelchair. Because you have to look forward to steer the wheels—and look backward to freeze the quantum-locked 'Staff'—every corridor forces a physical choice between navigation and survival.",
    summary: "Created by our 6-person team (3J Mad Studios) for MS5021 Game Studio 2. I originated the 'Mental Hospital' concept, wrote the full Game Design Document (GDD), designed the Visio floorplans (modelled on UEL's Docklands West Building 1st Floor), built the Illustrator UI menus, produced the 4K IntroSequence.mp4, and co-designed the 3-mode wheelchair locomotion and Quantum-Observation AI rulesets.",
    highlights: [
      "My Role (6-Person Team): Originated the core pitch, authored the full GDD & Sprint 1–4 docs, mapped the Visio level floorplans, designed all in-headset UI menus, and rendered the 4K cinematic intro.",
      "Core Tension Loop: Heavy tank-drive wheelchair inertia forces you to look ahead to avoid obstacles, while the 'Staff' enemies only freeze when held inside your VR headset's camera frustum.",
      "3 Wheelchair Propulsion Modes: 6-DOF physical wheel-grab tank steering, semi-realistic pull-stroke propulsion, and accessible dual-stick mode to prevent VR motion sickness.",
      "Quantum-Observation AI ('The Staff'): Freezes with a low-frequency hum and swinging pendulum stethoscope when watched; stalks with wet footsteps and reversed speech ('tneitaP ,ereh kcab emoC') in the dark or when you look away.",
      "Non-Euclidean Geometry Shifts: Hallways seal into brick walls or 'The Void' black fog behind your back whenever you turn your head, acting as zero-HUD level checkpoints and sanity feedback."
    ],
    technicalDeepDive: "Walk-up VR horror usually fails at exhibitions because artificial thumbstick walking causes instant vestibular sickness. We solved this by seating the physical player in a real chair and anchoring their OpenXR camera inside a virtual wheelchair chassis with high angular damping. For the Quantum-Observation AI and Geometry Shift checkpoints, dot-product and camera-frustum checks verify whether an actor's bounding box intersects the HMD view cone—allowing corridors and walls behind the player to swap meshes seamlessly at 90 FPS without visual pop-in.",
    codeSnippet: `// Quantum-Observation Frustum Check & Behind-Back Geometry Shift
FVector ToTarget = (StaffActor->GetActorLocation() - HMDLocation).GetSafeNormal();
float ViewDot = FVector::DotProduct(HMDForwardVector, ToTarget);
bool bInFrustum = (ViewDot > FMath::Cos(FMath::DegreesToRadians(HalfFOV))) && HasLineOfSight(HMDLocation, StaffActor);

if (bInFrustum && AmbientLightLevel > BlackoutThreshold) {
    StaffAI->FreezePoseAndVibrate(PendulumStethoscopePhysics = true);
} else {
    StaffAI->AdvanceTowardWheelchair(Speed = StalkSpeed, Audio = ReversedSpeechCue);
}`
  },
  {
    id: "rem",
    slug: "rem",
    category: "concepts",
    isFlagship: true,
    statusTag: { label: "UE5 Vertical Slice + Shaders", color: "indigo" },
    gradeBadge: "MS5022 • Portfolio Vertical Slice",
    number: "03",
    title: "REM",
    tagline: "Multi-Directional Kuwahara Watercolour Shader & WPO Morphing Body",
    discipline: "Technical Art & Custom Shaders",
    engine: "Unreal Engine 5",
    dates: "Jan 2026 – May 2026",
    studio: "Solo Developer • UEL (MS5022)",
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
    shortDesc: "A short-form Unreal Engine 5 vertical slice built around two custom technical art systems I wrote from scratch without tutorials: a multi-directional Kuwahara post-process material that turns the viewport into a living watercolour painting, and a World Position Offset (WPO) morphing body for the protagonist.",
    summary: "For REM, my goal was to condense a massive narrative game bible into a tight, playable UE5 vertical slice where the rendering pipeline itself carries the psychological mood. I modelled the environments in Blender, authored custom colour-bleed PBR textures in Substance Painter, wrote an original World Position Offset vertex-morphing shader for the protagonist's body, and engineered a Kuwahara post-process volume that looks like wet watercolour without blurring readable UI or silhouettes.",
    highlights: [
      "Wrote a custom multi-directional Kuwahara post-process filter in HLSL/UE5 Material Graph that groups pixel variance by sector to create brushstrokes while keeping object edges sharp at 60+ FPS.",
      "Built the protagonist's shifting, unstable silhouette from scratch using animated 3D noise fields wired into World Position Offset (WPO).",
      "Modelled and UV-unwrapped modular interior kits in Blender and painted custom watercolour-bleed PBR materials in Substance Painter.",
      "Designed and deployed an accompanying interactive promotional website to pitch the world and tone."
    ],
    technicalDeepDive: "Standard box or Gaussian blurs destroy silhouette readability in first/third-person games, while naive Kuwahara filters cause blocky stepping artefacts on high-contrast edges. I solved this by sampling regional mean and variance across four overlapping quadrant kernels in the Post-Process Material and outputting the colour of the quadrant with the minimum variance—preserving razor-sharp character and doorway silhouettes while giving flat surfaces a hand-painted watercolour wash.",
    codeSnippet: `// Multi-Quadrant Kuwahara Post-Process Kernel (HLSL Custom Node)
float4 BestMean = float4(0,0,0,0);
float MinVariance = 1e10;

[unroll] for (int k = 0; k < 4; ++k) {
    float3 Mean = SampleQuadrantMean(UV, k, KernelRadius);
    float Variance = SampleQuadrantVariance(UV, k, KernelRadius, Mean);
    if (Variance < MinVariance) {
        MinVariance = Variance;
        BestMean = float4(Mean, 1.0);
    }
}
return lerp(BestMean, WatercolourPaperGrain(UV), CanvasBleedWeight);`
  },
  {
    id: "the-quarry",
    slug: "the-quarry",
    category: "level-narrative",
    isFlagship: true,
    statusTag: { label: "Playable in Browser", color: "emerald" },
    gradeBadge: "MS5029 • 78% (1st Class)",
    number: "04",
    title: "The Quarry",
    tagline: "Safeguarding Interrogation State Machine & Jon Ingold Dialogue Triads",
    discipline: "Narrative Systems & Dialogue Scripting",
    engine: "Twine (Harlowe 3.3 / HTML5 / CSS3)",
    dates: "Apr 2026 – May 2026",
    studio: "Solo Developer • UEL (MS5029)",
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
    shortDesc: "Playable in your browser right now. You play an NHS clinical psychologist conducting an emergency safeguarding assessment of 12-year-old Holly after a fatal fall at a local quarry. Built on Jon Ingold's Accept / Reject / Deflect choice architecture and a hidden 0–100 Agitation state machine.",
    summary: "Inspired by the single-room interrogation tension of Adolescence (Episode 3), I built The Quarry to treat conversation like a combat state machine. Holly claims an older boy named 'Ryder' pushed her bully, but her timeline has cracks. Every dialogue node gives you three tactical postures—Accept (validate to lower her guard), Reject (press a contradiction), or Deflect (pivot topics)—all manipulating a hidden Agitation variable that determines whether she slips up, loops into defensive silence, or confesses.",
    highlights: [
      "Structured every choice node around Jon Ingold's 'Accept / Reject / Deflect' triad so the player always knows the subtextual intent of their line.",
      "Programmed a hidden Agitation state variable (0–100) in Harlowe 3.3: pressing contradictions when Agitation is >75 triggers defensive shutdown loops.",
      "Mapped a 5,000 × 12,000 px branching node topology with multiple failure states, partial admissions, and full breakthrough endings.",
      "Playable directly in the browser with custom clinical dossier CSS styling."
    ],
    technicalDeepDive: "Branching narrative games often fail when players either click every option exhaustively ('lawnmowering') or get punished by opaque dialogue labels. By pairing Ingold's three-posture triad with a persistent `$agitation` integer and boolean evidence flags (`$ryder_alibi_cracked`, `$phone_checked`), players have to actively manage Holly's emotional threshold—using 'Accept' and 'Deflect' nodes as cooldown mechanics before spending their composure budget on a high-pressure 'Reject' confrontation.",
    codeSnippet: `:: Interrogation_Node_Ryder_Alibi [Harlowe 3.3 State Logic]
(set: $agitation to (min: 100, (max: 0, $agitation)))
(if: $agitation >= 80)[
  (goto: "Holly_Defensive_Shutdown_Loop")
](else:)[
  [[Accept: "That sounds terrifying, Holly. Take your time."->Validate_Alibi][$agitation -= 15]]
  [[Reject: "Wait—earlier you said Ryder didn't have a car."->Press_Contradiction][$agitation += 25, $contradiction_1 = true]]
  [[Deflect: "Let's step back to what happened at school."->Pivot_School][$agitation -= 5]]
]`
  },
  {
    id: "state-machine",
    slug: "state-machine-showcase",
    category: "gameplay",
    isFlagship: false,
    statusTag: { label: "Playable on Itch.io", color: "emerald" },
    number: "03",
    title: "State Machine Showcase",
    tagline: "Hierarchical AI Behaviour, Line-of-Sight Raycasts & Physics Elevators",
    discipline: "AI Systems & Gameplay Mechanics",
    engine: "Unreal Engine 5",
    dates: "2025",
    studio: "Solo Developer • Itch.io",
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
    shortDesc: "A playable Unreal Engine 5 systems sandbox demonstrating modular Hierarchical Finite State Machines (Patrol → Investigate → Pursue → Search), raycast line-of-sight perception cones, and physics-synchronised multi-floor elevators.",
    summary: "I built this standalone UE5 sandbox to prototype clean, reusable AI and world-interaction blueprints without spaghetti dependencies. Enemies use decoupled Blueprint Interfaces and minimum dwell-time guards to transition smoothly between patrolling, investigating last-known player coordinates, active turret pursuit, and search recovery.",
    highlights: [
      "Hierarchical Finite State Machine (HFSM) separating high-level combat state from low-level navmesh movement.",
      "Vision cone raycasting with occlusion checks and a last-known-position memory timer.",
      "Physics-synchronised moving platforms and multi-stop elevators that carry both players and AI cleanly.",
      "Playable on itch.io."
    ],
    technicalDeepDive: "Naive AI state machines suffer from 'state thrashing' when a player ducks in and out of cover right on the edge of a vision cone. I solved this by adding hysteresis thresholds—requiring 0.4s of continuous line-of-sight accumulation to escalate from Investigate to Pursue, and a 4.0s decay timer holding the player's last velocity vector before dropping back to Search.",
    codeSnippet: `// AI Perception Hysteresis & State Transition Guard
if (bHasLineOfSight && DistToPlayer < VisionRadius) {
    DetectionAccumulator = FMath::Min(1.0f, DetectionAccumulator + DeltaTime * 2.5f);
    LastKnownPlayerPos = PlayerPawn->GetActorLocation();
    if (DetectionAccumulator >= 1.0f) TransitionToState(EAIState::Pursue);
} else if (CurrentState == EAIState::Pursue) {
    MemoryTimer -= DeltaTime;
    if (MemoryTimer <= 0.0f) TransitionToState(EAIState::InvestigateLastPos);
}`
  },
  {
    id: "daydream",
    slug: "daydream",
    category: "concepts",
    isFlagship: false,
    statusTag: { label: "Playable Build + Dual-Phase", color: "emerald" },
    gradeBadge: "MS4035 • 72% (1st Class)",
    number: "02",
    title: "Project Daydream & Daydream Believer",
    tagline: "1:1 RenderDoc Photogrammetry (2,377 UV Maps) & ADHD Hyperfocus Shaders",
    discipline: "Photogrammetry & Shader Systems",
    engine: "Unreal Engine 5 (MS4035)",
    dates: "Jul 2022 – Apr 2025",
    studio: "Solo Developer • UEL (MS4035)",
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
    shortDesc: "Started in 2022 as a 1:1 digital twin of my secondary school campus (captured via RenderDoc, consolidating 2,377 UV texture maps in Blender across a 23.999° axis realignment). In 2025 (MS4035), I transformed that campus into 'Daydream Believer'—an interactive simulation of ADHD sensory overload using custom radial distortion shaders and manual alternating-keystroke locomotion.",
    summary: "Project Daydream spans three years of iteration. In Phase 1, I extracted raw 3D satellite photogrammetry via RenderDoc, baked 2,377 fragmented UV maps in Blender, upscaled the textures with Topaz Gigapixel, and wrapped the jagged meshes in clean collision primitives inside UE5. In Phase 2 ('Daydream Believer'), I used that familiar school environment to translate ADHD executive dysfunction and hyperfocus into playable mechanics: a post-process tunnel-vision shader, crimson sensory-overload barriers, 15 original BandLab audio stems, and a manual step-by-step walking mechanic.",
    highlights: [
      "Phase 1 (Digital Twin): Extracted 3D photogrammetry via RenderDoc, baked 2,377 UV maps in Blender, and corrected a map-wide 23.999° coordinate tilt.",
      "Phase 2 (MS4035 — 72% 1st Class): Built a custom HLSL post-process radial blur and chromatic aberration shader driven by a live Attention float.",
      "Programmed an alternating-keystroke manual locomotion state machine where mistimed steps induce camera roll, mechanically simulating executive dysfunction.",
      "Composed 15 layered audio tracks in BandLab that duck and swell dynamically based on proximity to sensory-overload triggers."
    ],
    technicalDeepDive: "Raw RenderDoc photogrammetry meshes are non-manifold soup tilted at an arbitrary capture angle (23.999° off world north) with thousands of tiny 256px texture pages. I automated a Blender cleanup pass to rotate all chunks around a shared pivot, consolidate 2,377 UV islands, and generate simplified box/convex collision hulls. In Phase 2, I drove a post-process material parameter collection from the player's step-rhythm accuracy to contract screen UVs towards the centre during sensory overload.",
    codeSnippet: `// ADHD Sensory Overload Post-Process UV Contraction & Chromatic Shift
float2 CenteredUV = UV - 0.5;
float Radius = length(CenteredUV);
float OverloadMask = smoothstep(0.25, 0.75, Radius * AttentionOverloadScalar);
float2 DistortedUV = 0.5 + CenteredUV * (1.0 - OverloadMask * 0.18);
float3 SceneRGB = float3(
    SceneTextureLookup(DistortedUV + float2(OverloadMask * 0.008, 0), 14, false).r,
    SceneTextureLookup(DistortedUV, 14, false).g,
    SceneTextureLookup(DistortedUV - float2(OverloadMask * 0.008, 0), 14, false).b
);`,
    splitPhases: [
      {
        id: "original",
        phaseLabel: "Phase 1: 1:1 Photogrammetry (2022–2023)",
        phaseBadge: "2,377 Blender UV Maps",
        phaseSubtitle: "RenderDoc 3D Capture, 23.999° Realignment & Lumen Lighting",
        title: "Project Daydream: 1:1 School Campus Digital Twin",
        summary: "An architectural 1:1 reconstruction of my secondary school campus in Unreal Engine 5. I captured 3D photogrammetry buffers using RenderDoc, consolidated 2,377 separate UV texture maps in Blender, upscaled the satellite textures to 4K via Topaz Gigapixel, and built clean blocking collisions.",
        highlights: [
          "Captured 3D photogrammetry buffers via RenderDoc and consolidated 2,377 UV maps in Blender",
          "Calculated an exact 23.999° transformation matrix to align the tilted capture data with UE5's world grid",
          "Traced invisible box collision primitives over jagged photogrammetric walls for smooth 60 FPS walking",
          "Upscaled low-resolution satellite textures to 4K and lit the campus with dynamic day/night Lumen GI"
        ],
        technicalDeepDive: "Importing 2,377 unmerged draw calls with per-triangle auto-collisions brought the viewport to a crawl. I stripped complex mesh collisions, grouped architectural blocks in Blender around a common origin rotated by -23.999°, and hand-placed simplified box colliders in UE5.",
        gallery: [
          "/images/daydream.jpg",
          "/images/daydream_00_01_05.jpg",
          "/images/daydream_00_01_30.jpg"
        ],
        video: "/media/daydream_preview.mp4"
      },
      {
        id: "revisited",
        phaseLabel: "Phase 2: Daydream Believer (MS4035 • 72% 1st)",
        phaseBadge: "72% • 1st Class",
        phaseSubtitle: "ADHD Hyperfocus Shader, Manual Step Locomotion & 15 Audio Stems",
        title: "Daydream Believer: Interactive ADHD Sensory Simulation",
        summary: "For MS4035 Game Prototyping (72% 1st Class), I turned the photogrammetric campus into a playable first-person simulation of ADHD hyperfocus and sensory overload—combining a custom radial tunnel-vision shader, manual alternating-key movement, crimson overload fences, and 15 original BandLab tracks.",
        highlights: [
          "Post-process radial blur and chromatic aberration material driven by player attention/overload state",
          "Rhythm-based manual walking mechanic requiring alternating keystrokes to keep camera balance steady",
          "Dynamic perimeter barriers that flare crimson during sensory overload and dissolve when focus is restored",
          "15 original BandLab music stems layered with real-time volume ducking and inner-monologue voice cues"
        ],
        technicalDeepDive: "Instead of using a passive cutscene to represent executive dysfunction, I replaced standard WASD hold-to-walk with an alternating-step state machine. Missing the rhythm window increments an Overload scalar in the Material Parameter Collection, narrowing the clear centre of the viewport via radial UV distortion.",
        gallery: [
          "/images/daydream_revisited.jpg",
          "/images/test_daydream_52s.jpg"
        ],
        video: "/media/daydream_preview.mp4"
      }
    ]
  },
  {
    id: "labraz",
    slug: "labraz",
    category: "level-narrative",
    isFlagship: false,
    statusTag: { label: "UE5 Level + 40p GDD", color: "indigo" },
    gradeBadge: "MS5028 • 72% (1st Class)",
    number: "02",
    title: "LabR@z",
    tagline: "3-Player Asymmetrical Co-Op FPS Level Design & Foamboard Prototyping",
    discipline: "Level Design & Encounter Architecture",
    engine: "Unreal Engine 5 (MS5028 & MS4005)",
    dates: "Dec 2024 – Apr 2025",
    studio: "Solo Level Designer • UEL (MS5028)",
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
    shortDesc: "An asymmetrical 3-player co-op FPS level built in Unreal Engine 5 where three genetically modified lab rats (Tank, DPS, and Support/Healer) infiltrate a high-security biolab. I validated the sightlines with physical 3D foamboard models before whiteboxing the playable UE5 facility and writing a 40-page GDD.",
    summary: "Developed across MS4005 (physical paper/foamboard prototyping) and MS5028 Level Design (72% 1st Class Honours). Players control three specialised rat classes—Tank, DPS, and Support/Healer—who must split up across vertical vents and floor-level choke points before converging for a final 'Pawn Promotion' bulkhead breach.",
    highlights: [
      "Built physical 3D foamboard corridor models (MS4005) to test sightlines, cover spacing, and ambush angles before touching Unreal Engine 5.",
      "Whiteboxed and scripted the multi-tier facility in UE5 (MS5028 — 72% 1st Class), separating Tank/DPS floor lanes from elevated Support/Healer vent routes.",
      "Designed the 'Pawn Promotion' finale mechanic where all three classes must synchronise terminal overrides to breach the lab bulkhead.",
      "Wrote a 40-page Game Design Document with encounter pacing graphs, top-down beat maps, and sightline diagrams."
    ],
    technicalDeepDive: "Co-op levels fail when one dominant player can solo every room while teammates trail behind. I prevented this by gating security doors behind parallel sightline puzzles: the Tank holds aggro on the main lab floor, exposing power relays that only the elevated DPS/Support players on the upper catwalks have the angle to trigger.",
    codeSnippet: `// Co-Op Parallel Sightline Gate & 'Pawn Promotion' Bulkhead Trigger
void ALabBulkheadGate::OnRelayTriggered(EPlayerClass Role, int32 RelayIndex) {
    ActiveRelaysBitmask |= (1 << RelayIndex);
    UpdateConduitCableMaterial(RelayIndex, FLinearColor::Yellow);
    if (ActiveRelaysBitmask == ALL_THREE_ROLES_MASK && bTankOnPressurePlate) {
        TriggerPawnPromotionBreachSequence();
    }
}`
  },
  {
    id: "faith-over-fear",
    slug: "faith-over-fear",
    category: "level-narrative",
    isFlagship: false,
    statusTag: { label: "AAA Mocap Screenplay", color: "amber" },
    gradeBadge: "MS5029 • 78% (1st Class)",
    number: "03",
    title: "Far Cry 5 DLC: Faith Over Fear",
    tagline: "Performance-Capture Prequel Screenplay & Spatial Blocking",
    discipline: "Narrative Design & Mocap Direction",
    engine: "Screenplay & Performance Capture Format",
    dates: "Feb 2026 – May 2026",
    studio: "Solo Writer • UEL (MS5029)",
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
    shortDesc: "A performance-capture prequel screenplay for Ubisoft's Far Cry 5 following how Joseph Seed manipulated 17-year-old Rachel Jessop into becoming 'Faith Seed'—written with full mocap stage blocking, camera focal-length cues, and actor physical direction.",
    summary: "Written for MS5029 Storytelling for Games (78% 1st Class Honours). Drawing on my 5+ years of stage and screen acting experience, I wrote this Far Cry 5 prequel specifically for a motion-capture volume—replacing loud villain speeches with quiet physical proximity, prop handoffs, and environmental cues in a rain-soaked Montana compound.",
    highlights: [
      "Formatted to AAA performance-capture standards with explicit mocap stage blocking, prop interaction cues, and camera lens notes.",
      "Wrote Joseph Seed's manipulation around quiet physical stillness and false paternal warmth rather than cliché villain monologues.",
      "Used my own stage/screen acting background to write playable, physically grounded subtext for the mocap performers.",
      "Iterated scene pacing through live table reads (awarded 78% 1st Class Honours)."
    ],
    technicalDeepDive: "In AAA cutscene production, writers who put all emotional turns in dialogue create stiff, talking-head cinematics. I blocked each scene around physical distance vectors inside the mocap volume—tracking how Joseph gradually closes the spatial gap between himself and Rachel across three beats before speaking a single doctrinal word.",
    codeSnippet: `[MOCAP VOLUME BLOCKING — SCENE 04: THE BARN THRESHOLD]
CAMERA: 35mm Anamorphic, shoulder-rigged at RACHEL'S seated eye-level (1.1m).
BLOCKING: JOSEPH enters upstage-left, stops 3.5m back at the rain-line. He does NOT step into her personal radius until Beat 3.
ACTION: Joseph kneels first (lowering his eye-line 15cm below hers) and sets the dry blanket at the edge of the floorboards—forcing Rachel to make the physical choice to reach forward.`
  }
];

export const TOOLKIT_SPECS = [
  {
    category: "Engines & Core Tech",
    items: ["Unreal Engine 5 (5.3–5.7)", "Blueprints & C++", "OpenXR (Quest & PCVR)", "Unity 6 (C# & Photon PUN2)", "Twine (Harlowe 3.3)"]
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
    category: "Design & Production",
    items: ["Game Design Documents (GDD)", "Microsoft Visio Flowcharts", "Jon Ingold Dialogue Architecture", "Mocap Stage Blocking & LiveLink", "Git / GitHub & Agile Sprints"]
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
    title: "Project Realspeak & BSc SSS Research",
    tech: "UE5 MetaHuman / OpenAI STT-TTS / Melanin SSS",
    summary: "Real-time conversational AI NPC lip-sync pipeline in UE5 (early 2023) & BSc Dissertation researching inclusive mixed-race 3D skin subsurface scattering."
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

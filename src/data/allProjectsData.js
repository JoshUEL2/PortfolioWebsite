/**
 * allProjectsData.js
 * Master 40-Project Archive migrated from LinkedIn, GitHub & UEL coursework.
 * Every item includes verified links, technical metadata, and clean visual assets.
 */

export const PROJECT_FILTER_DISCIPLINES = [
  { id: 'all', label: 'All Projects', count: 40 },
  { id: 'games', label: 'Games & Mechanics', count: 14 },
  { id: 'tech-art', label: 'Technical Art & Mocap', count: 10 },
  { id: 'narrative', label: 'Narrative & Screenplay', count: 7 },
  { id: 'systems', label: 'Systems, AI & Robotics', count: 5 },
  { id: 'media', label: 'Creative Media & Acting', count: 4 },
];

export const ALL_PROJECTS = [
  {
    "id": "rem-ue5",
    "slug": "rem",
    "catalogNumber": "01",
    "title": "REM: Watercolor Technical Art & Ludonarrative",
    "discipline": "tech-art",
    "categoryLabel": "Technical Art & UE5",
    "dates": "Jan 2026 – Mar 2026",
    "role": "Lead Developer, Technical Artist & Narrative Designer",
    "studio": "JoshCorp Interactive Entertainment / UEL",
    "engine": "Unreal Engine 5",
    "tools": [
      "Unreal Engine 5",
      "Blender",
      "Substance Painter",
      "Microsoft Visio",
      "Custom Shaders"
    ],
    "shortDesc": "A stylized UE5 interactive experience featuring a bespoke Kuwahara watercolor post-process filter and character World Position Offset morphing body.",
    "summary": "Faced with achieving a rich, watercolor aesthetic without sacrificing edge definition or framerates, implemented custom multi-directional Kuwahara filtering. Developed custom vertex displacement via World Position Offset without relying on standard pre-made marketplace packs.",
    "highlights": [
      "Bespoke Kuwahara post-processing filter balancing painterly aesthetic with gameplay legibility",
      "Custom World Position Offset (WPO) morphing body for main protagonist",
      "Condensed expansive game bible into focused short-form interactive narrative",
      "Complete PBR texture painting in Substance Painter and custom 3D modeling in Blender"
    ],
    "technicalDeepDive": "Faced with achieving a rich, watercolor aesthetic without sacrificing edge definition or framerates, implemented custom multi-directional Kuwahara filtering. Developed custom vertex displacement via World Position Offset without relying on standard pre-made marketplace packs.",
    "narrativePhilosophy": "Translates abstract psychological trauma into tangible, responsive spatial environments through indexical level design and reactive shaders.",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2/REM",
      "itch": null,
      "demo": "https://github.com/JoshUEL2/REM/releases/latest",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "rastacats-ue5",
    "slug": "rastacats",
    "catalogNumber": "02",
    "title": "Rastacats: Procedural Runner & Polar Gravity (MS5027 - 92% 1st)",
    "discipline": "games",
    "categoryLabel": "Gameplay Prototyping & Physics",
    "dates": "Oct 2025 – Dec 2025",
    "role": "Technical Designer & Gameplay Programmer",
    "studio": "JoshCorp Interactive Entertainment (MS5027)",
    "engine": "Unreal Engine 5.7",
    "tools": [
      "Unreal Engine 5.7",
      "Blueprints",
      "Shader Graphs",
      "Polar Coordinate Math",
      "Animation Graphs"
    ],
    "shortDesc": "3D arcade bobsled prototype (92% 1st Class) interpreting the 1988 Winter Olympics Cool Runnings narrative, featuring custom 360-degree rotational gravity, polar-to-cartesian coordinate mapping, and an overspeed loop.",
    "summary": "Built a procedurally generated ice tube runner using a polar-to-cartesian coordinate system to maintain player positioning across complete 360-degree surface rotations beyond standard engine physics components. Overhauled actor pooling to disable ticks across hundreds of track elements.",
    "highlights": [
      "Achieved 92% (1st Class Honours) for MS5027 Gameplay Prototyping module",
      "Engineered custom 360-degree rotational gravity and polar-to-cartesian coordinate positioning",
      "Curved-world horizon shader with mathematical drop-shadow decal compensation",
      "Expanded into Mod Pack featuring AI-driven Race Mode and dynamic blizzard weather systems"
    ],
    "technicalDeepDive": "Built a procedurally generated ice tube runner using a polar-to-cartesian coordinate system to maintain player positioning across complete 360-degree surface rotations beyond standard engine physics components. Overhauled actor pooling to disable ticks across hundreds of track elements.",
    "narrativePhilosophy": "Blends the underdog narrative of Jamaican bobsledders proving their worth with complex, iterated technical systems that enforce precise momentum control.",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/rastacats",
      "demo": "https://joshej.itch.io/rastacats",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "the-quarry-twine",
    "slug": "the-quarry",
    "catalogNumber": "03",
    "title": "The Quarry: Interactive Safeguarding Interrogation",
    "discipline": "narrative",
    "categoryLabel": "Narrative & Dialogue Systems",
    "dates": "Apr 2026 – May 2026",
    "role": "Narrative Designer & Dialogue Systems Architect",
    "studio": "University of East London",
    "engine": "Twine (SugarCube / HTML / CSS)",
    "tools": [
      "Twine",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "shortDesc": "A psychological thriller built in Twine exploring manipulation in a single consultation room using Jon Ingold's Accept/Reject/Deflect triads and an internal Agitation meter.",
    "summary": "Treated dialogue flow with the systemic precision of gameplay scripting: choices manipulate the hidden Agitation state, unlocking guarded confessions through calculated de-escalation pathways.",
    "highlights": [
      "Structured upon Jon Ingold's 'Accept / Reject / Deflect' dialogue choice architecture",
      "Dynamic 'Agitation' variable tracking that exposes subtext as a tangible game mechanic",
      "Conversational loops that punish aggressive confrontations by reverting narrative progress",
      "Pacing and claustrophobic two-person power dynamics inspired by Adolescence (Episode 3)"
    ],
    "technicalDeepDive": "Treated dialogue flow with the systemic precision of gameplay scripting: choices manipulate the hidden Agitation state, unlocking guarded confessions through calculated de-escalation pathways.",
    "narrativePhilosophy": "Subtext as mechanics: moving away from informational dialogue toward conversational structures where the architecture itself characterises the speaker.",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": "https://www.linkedin.com/in/joshua-johnson-485543351/",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "far-cry-5-dlc-faith-over-fear",
    "slug": "faith-over-fear",
    "catalogNumber": "04",
    "title": "Far Cry 5 DLC: 'Faith Over Fear' Screenplay",
    "discipline": "narrative",
    "categoryLabel": "Narrative & Screenwriting",
    "dates": "Feb 2026 – May 2026",
    "role": "Lead Screenwriter & Cutscene Director",
    "studio": "University of East London / Ubisoft IP Adaptation",
    "engine": "Performance Capture Screenplay Format",
    "tools": [
      "Industry Screenplay Standards",
      "Microsoft Word",
      "Visual Beat Sheets"
    ],
    "shortDesc": "An industry-standard AAA prequel screenplay depicting the calculated indoctrination of Rachel Jessop ('Faith Seed') using indexical environmental storytelling.",
    "summary": "Overhauled initial drafts following table-reading feedback, eliminating exposition and using spatial interactions (such as shielding with an umbrella) to convey power dynamics without spoken words.",
    "highlights": [
      "Replaced traditional theatrical villain monologues with grounded, calculated psychological subtext",
      "Indexical storytelling: Rain, mud, and spatial dominance reflect character entrapment",
      "Formatted strictly for performance capture volume pipelines and parenthetical actor direction",
      "Comprehensive theological and psychological research grounded in cult indoctrination dynamics"
    ],
    "technicalDeepDive": "Overhauled initial drafts following table-reading feedback, eliminating exposition and using spatial interactions (such as shielding with an umbrella) to convey power dynamics without spoken words.",
    "narrativePhilosophy": "Antagonists are most terrifying when their authority is demonstrated through physical stillness, calculated paternal gentleness, and what remains unsaid.",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": "https://www.linkedin.com/in/joshua-johnson-485543351/",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "personal-project-showcase-2026",
    "slug": "vr-showcase",
    "catalogNumber": "05",
    "title": "Personal Project Showcase 2026: Royal Docks Sustainability VR",
    "discipline": "games",
    "categoryLabel": "VR Systems & Exhibition",
    "dates": "Jun 2026 – Present",
    "role": "Lead VR Technical Specialist & Exhibitor",
    "studio": "University of East London",
    "engine": "Unreal Engine 5 VR",
    "tools": [
      "SteamVR / Meta Quest Pro",
      "Unreal Engine 5",
      "Hardware Calibration",
      "Live Telemetry"
    ],
    "shortDesc": "Sole Level 5 interactive project selected for exhibition alongside Level 6 final projects; configured and calibrated room-scale VR playtest space at the Royal Docks Centre for Sustainability.",
    "summary": "Calibrated room-scale boundaries and runtime headset tracking to eliminate drift and motion sickness across consecutive public playtesting sessions.",
    "highlights": [
      "Sole Level 5 interactive project selected to exhibit downstairs with Level 6 graduation work",
      "Configured, calibrated, and debugged entire upstairs room-scale VR playtest installation",
      "Onboarded hundreds of industry visitors and academic stakeholders to VR tracking space",
      "Conducted live playtest telemetry tracking and qualitative user experience feedback capture"
    ],
    "technicalDeepDive": "Calibrated room-scale boundaries and runtime headset tracking to eliminate drift and motion sickness across consecutive public playtesting sessions.",
    "narrativePhilosophy": "Bridging the physical-digital divide by creating intuitive real-world onboarding that makes room-scale virtual reality accessible to any player.",
    "image": "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/",
      "demo": "https://www.linkedin.com/in/joshua-johnson-485543351/",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "ace-showcase-2026",
    "slug": "ace-showcase-2026",
    "catalogNumber": "06",
    "title": "ACE Showcase 2026: School Leadership & Exhibition Direction",
    "discipline": "games",
    "categoryLabel": "Exhibition Leadership & Management",
    "dates": "Jun 2026 – Present",
    "role": "School Representative & Project Lead",
    "studio": "University of East London",
    "engine": "Exhibition Management & UE5 Live Staging",
    "tools": [
      "Project Management",
      "Team Leadership",
      "Public Speaking",
      "Event Logistics"
    ],
    "shortDesc": "Elected School Representative directing student cohort showcases for the School of Architecture, Computing and Engineering (ACE) across games, interactive media, and computing.",
    "summary": "Organized multi-terminal network setups and hardware redundancy for concurrent live playtesting sessions throughout the public showcase.",
    "highlights": [
      "Coordinated showcase floor staging, equipment distribution, and interactive kiosks across school disciplines",
      "Liaised directly with faculty deans, external industry examiners, and student developer teams",
      "Advocated for student-created interactive tech and real-time game art exhibitions",
      "Curated 7 high-resolution media presentations and staging assets"
    ],
    "technicalDeepDive": "Organized multi-terminal network setups and hardware redundancy for concurrent live playtesting sessions throughout the public showcase.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/",
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "dear-hiring-manager-gdd",
    "slug": "dear-hiring-manager",
    "catalogNumber": "07",
    "title": "Dear, Hiring Manager: Satirical Mobile Systems GDD & Screenplay",
    "discipline": "narrative",
    "categoryLabel": "Mobile Systems & Economy Design",
    "dates": "Jan 2026 – Mar 2026",
    "role": "Systems & Economy Designer",
    "studio": "24 Hour Studios",
    "engine": "Unity Prototype / Systemic GDD",
    "tools": [
      "Microsoft Visio",
      "Unity",
      "C#",
      "Microsoft Word",
      "Decision Trees"
    ],
    "shortDesc": "A comprehensive Game Design Document and companion screenplay modeling satirical corporate progression loops, inspired by BitLife, mapped via extensive Microsoft Visio decision graphs.",
    "summary": "Utilized visual flowchart mapping in Visio to test narrative branch balance and ensure systemic cohesion before prototyping gameplay in Unity.",
    "highlights": [
      "Modeled intricate text-based career progression and employee sanity mechanics",
      "Exhaustive Visio decision trees identifying mechanical dead-ends prior to code implementation",
      "Satirical narrative framework tightly integrated with mobile engagement retention loops",
      "Dissected mobile market retention models and progression pacing"
    ],
    "technicalDeepDive": "Utilized visual flowchart mapping in Visio to test narrative branch balance and ensure systemic cohesion before prototyping gameplay in Unity.",
    "narrativePhilosophy": "Satirizing corporate absurdity through strict mechanical systems that mirror bureaucratic futility.",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "inclusive-3d-character-pipeline",
    "slug": "character-pipeline-dissertation",
    "catalogNumber": "08",
    "title": "Inclusive 3D Character Pipelines (Dissertation MS6033)",
    "discipline": "systems",
    "categoryLabel": "Academic Research & 3D Tech Art",
    "dates": "2026 – Present",
    "role": "Lead Researcher & Technical Artist",
    "studio": "University of East London",
    "engine": "Blender, Unreal Engine 5, Substance Painter",
    "tools": [
      "Subsurface Scattering Shaders",
      "Blender Geometry Nodes",
      "Hair Card Topologies"
    ],
    "shortDesc": "Investigation into inclusive 3D character pipelines, addressing mixed-race representation, subsurface scattering across diverse melanin spectrums, and hair topology.",
    "summary": "Investigated lighting falloffs, dermal absorption spectra, and specular micro-roughness to formulate a physically plausible skin shading model that renders diverse skin tones with fidelity under dynamic lighting.",
    "highlights": [
      "Rigorous analysis of skin subsurface scattering (SSS) parameters across nuanced melanin variations",
      "3D pipeline workflows for curly and coily hair types in real-time game engines",
      "Combatting algorithmic bias and stereotyping in procedural character generation tools",
      "First-principles research into non-destructive ethnic feature blendshapes"
    ],
    "technicalDeepDive": "Investigated lighting falloffs, dermal absorption spectra, and specular micro-roughness to formulate a physically plausible skin shading model that renders diverse skin tones with fidelity under dynamic lighting.",
    "narrativePhilosophy": "True character representation requires dismantling binary character creators and building systems that celebrate interstitial cultural and ethnic identities.",
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "project-kinetic-mocap",
    "slug": "project-kinetic",
    "catalogNumber": "09",
    "title": "Project K.I.N.E.T.I.C.: DIY Gyro & Depth Motion Capture Rig",
    "discipline": "tech-art",
    "categoryLabel": "Hardware Engineering & Mocap",
    "dates": "Jun 2023 – Sep 2023",
    "role": "Hardware & Software Integration Specialist",
    "studio": "Independent Innovation",
    "engine": "Kinect SDK / Brekel Body / Unreal Engine 5",
    "tools": [
      "Xbox One Kinect v2",
      "PSVR Move Controllers",
      "Brekel Body",
      "Kinect Windows SDK",
      "MetaHuman Skeleton"
    ],
    "shortDesc": "Engineered a custom motion capture rig (Kinematic Interpretation via Nonconventional Equipment for Tracking Input & Control) using Xbox One Kinect v2, PSVR Move controllers, and Brekel Body.",
    "summary": "Combined depth-sensing skeletal tracking from Kinect v2 with 6DoF wrist controllers to bypass commercial optical marker setups, delivering clean FBX/BVH animation curves directly into Unreal Engine Sequencer.",
    "highlights": [
      "Conceived and built fully functional physical mocap suit without costly commercial systems",
      "Overcame mobile AI mocap jitter/drift by capturing raw 25-point skeletal telemetry via Kinect SDK",
      "Smoothed live joint rotations in Brekel Body and mapped telemetry onto MetaHuman skeleton in UE5",
      "Embodiment of core engineering ethos: 'If I don't know it, I learn it; if I need it, I build it.'"
    ],
    "technicalDeepDive": "Combined depth-sensing skeletal tracking from Kinect v2 with 6DoF wrist controllers to bypass commercial optical marker setups, delivering clean FBX/BVH animation curves directly into Unreal Engine Sequencer.",
    "narrativePhilosophy": "Democratizing performance capture to allow indie developers to bring authentic physical acting into real-time digital humans.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "project-frame",
    "slug": "project-frame",
    "catalogNumber": "10",
    "title": "Project F.R.A.M.E.: Sequencer, Control Rig & Real-Time Cinematics",
    "discipline": "tech-art",
    "categoryLabel": "Cinematics & Technical Animation",
    "dates": "Jul 2023 – Aug 2023",
    "role": "Cinematic Technical Artist & Animator",
    "studio": "Independent Innovation",
    "engine": "Unreal Engine 5",
    "tools": [
      "Unreal Sequencer",
      "Control Rig",
      "Mixamo",
      "LiveLink Face",
      "Virtual Film Cameras"
    ],
    "shortDesc": "Real-time cinematic animation experiment in UE5 fusing Mixamo body animation, Apple LiveLink facial capture, Control Rig mesh repair, and custom mocap data.",
    "summary": "Resolved severe MetaHuman mesh decoupling during retargeting by constructing custom FK/IK corrective passes in Control Rig, synchronizing facial blendshapes with full-body motion capture.",
    "highlights": [
      "Baked body and facial animation streams into synchronized cinematic sequences",
      "Engineered custom Control Rig nodes to repair mesh separation and retargeting artifacts",
      "Implemented mathematical floor-snapping to completely prevent character mesh clipping",
      "Utilized cubic keyframing and focal length adjustments in virtual camera timelines"
    ],
    "technicalDeepDive": "Resolved severe MetaHuman mesh decoupling during retargeting by constructing custom FK/IK corrective passes in Control Rig, synchronizing facial blendshapes with full-body motion capture.",
    "narrativePhilosophy": "Technical animation precision allows subtle emotional cues to translate without the uncanny valley.",
    "image": "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "project-tower",
    "slug": "project-tower",
    "catalogNumber": "11",
    "title": "Project T.O.W.E.R.: Procedural Real-Time Architectural Growth",
    "discipline": "tech-art",
    "categoryLabel": "Procedural Generation & Shaders",
    "dates": "May 2024 – Sep 2024",
    "role": "Technical Artist & Systems Scripter",
    "studio": "Independent Innovation",
    "engine": "Unreal Engine 5",
    "tools": [
      "Unreal Engine 5",
      "Blueprints",
      "Procedural Mesh Spawning",
      "Custom Shading"
    ],
    "shortDesc": "A real-time procedural growth simulation in UE5 where an office skyscraper dynamically expands driven by live telemetry, placing modular cubicles with synchronized animations.",
    "summary": "Engineered a modular coordinate indexing system that calculates floor-to-cubicle transforms, instantiating synchronized mesh components without performance hitches.",
    "highlights": [
      "Procedural building algorithm that expands tower height dynamically based on counter values",
      "Synchronous modular cubicle spawning with custom entrance animations",
      "Exploration of stylized non-photorealistic shading algorithms in real-time",
      "Contains 11 high-resolution production assets and environmental studies"
    ],
    "technicalDeepDive": "Engineered a modular coordinate indexing system that calculates floor-to-cubicle transforms, instantiating synchronized mesh components without performance hitches.",
    "narrativePhilosophy": "Visualizing mundane corporate expansion as an organic, mechanical organism.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "project-realspeak",
    "slug": "project-realspeak",
    "catalogNumber": "12",
    "title": "Project Realspeak: Speech-to-Text, GPT-3 & ConvAI NPC Pipeline",
    "discipline": "systems",
    "categoryLabel": "Conversational AI & Game Systems",
    "dates": "Jan 2023 – Mar 2023",
    "role": "AI Systems Researcher & Prototype Scripter",
    "studio": "Independent Research",
    "engine": "Unreal Engine 5 / ConvAI",
    "tools": [
      "OpenAI GPT-3 API",
      "Google Text-to-Speech",
      "ConvAI Plugin",
      "UE5 Blueprints",
      "Microphone Input DSP"
    ],
    "shortDesc": "Pioneering early 2023 pipeline in Unreal Engine 5 generating real-time interactive NPC conversations: Player Voice -> Speech-to-Text -> OpenAI GPT-3 -> Google TTS -> In-Engine ConvAI.",
    "summary": "Engineered an asynchronous request-response bridge in Blueprints to stream GPT-3 prompt completions into speech synthesis without stalling the main game rendering thread.",
    "highlights": [
      "Designed end-to-end voice loop: audio capture -> dynamic LLM prompt -> speech synthesis -> lip-sync",
      "Troubleshot complex audio input DSP and API latency pipelines inside UE5",
      "Benchmarked manual REST API blueprint architecture against unified ConvAI SDK integration",
      "Pioneered early real-time generative dialogue systems well ahead of industry adoption"
    ],
    "technicalDeepDive": "Engineered an asynchronous request-response bridge in Blueprints to stream GPT-3 prompt completions into speech synthesis without stalling the main game rendering thread.",
    "narrativePhilosophy": "True NPC immersion emerges when dialogue is not hard-coded, but dynamically responsive to player vocal nuance and emergent intent.",
    "image": "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "state-machine-showcase",
    "slug": "state-machine-showcase",
    "catalogNumber": "13",
    "title": "State Machine Showcase: AI Behavior Trees, Turrets & Elevator Logic",
    "discipline": "games",
    "categoryLabel": "Core Gameplay & State Systems",
    "dates": "Apr 2025 – Jun 2025",
    "role": "Gameplay Systems Programmer",
    "studio": "University of East London",
    "engine": "Unreal Engine 5",
    "tools": [
      "Behavior Trees",
      "Blackboards",
      "Spline Components",
      "Finite State Machines"
    ],
    "shortDesc": "A playable showcase demonstrating foundational game systems: spline-patrolling AI with sight perception, autonomous tracking turrets, inventory-gated doors, and multi-floor elevators.",
    "summary": "Structured all game systems via formal flowchart state diagrams, implementing strict hierarchical finite state machines (HFSM) to prevent illegal transitions.",
    "highlights": [
      "Autonomous patrolling NPC built with Behavior Trees: spline following, sight detection, chase/attack states",
      "Autonomous AI tracking turret with idle, scan, target lock, firing, and cooldown cycles",
      "Key-locked door system verifying player inventory tags prior to triggering animation sequences",
      "Complex multi-floor elevator with input queue validation and external lock states"
    ],
    "technicalDeepDive": "Structured all game systems via formal flowchart state diagrams, implementing strict hierarchical finite state machines (HFSM) to prevent illegal transitions.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/state-machine-showcase",
      "demo": "https://joshej.itch.io/state-machine-showcase",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "tfl-journey-planner",
    "slug": "tfl-planner",
    "catalogNumber": "14",
    "title": "TfL Journey History Viewer & London Tube Route Planner",
    "discipline": "systems",
    "categoryLabel": "Full-Stack Web App & Creative Coding",
    "dates": "Jul 2025 – Aug 2025",
    "role": "Full-Stack Developer & Algorithm Designer",
    "studio": "Independent Web Project",
    "engine": "Modern JavaScript / Leaflet.js / Tailwind CSS",
    "tools": [
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Leaflet.js",
      "TfL Open Data API",
      "CSV Data Parsing"
    ],
    "shortDesc": "Interactive web application analyzing official TfL CSV files to generate route heatmaps, featuring a custom JavaScript interchange prediction algorithm to infer missing transfer stations, plus real-time live TfL API status.",
    "summary": "TfL travel exports only specify entry and exit points without interchange records. Developed a station coordinate graph traversal algorithm in pure JavaScript to calculate shortest and most probable transfer paths across the London Underground network.",
    "highlights": [
      "Custom route estimation algorithm in JS that deduces probable interchange stations from tap-in/tap-out pairs",
      "Interactive geospatial heatmap of personal travel history rendered on Leaflet.js vector maps",
      "Live TfL line status checker integrating official real-time REST API endpoints",
      "Completely responsive web interface deployed live on GitHub Pages"
    ],
    "technicalDeepDive": "TfL travel exports only specify entry and exit points without interchange records. Developed a station coordinate graph traversal algorithm in pure JavaScript to calculate shortest and most probable transfer paths across the London Underground network.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2/TFL-Planner",
      "itch": null,
      "demo": "https://joshuel2.github.io/TFL-Planner/",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "rand-io",
    "slug": "randio",
    "catalogNumber": "15",
    "title": "Rand.io: Procedural Walker Map Generator & Photon Multiplayer",
    "discipline": "games",
    "categoryLabel": "Procedural Algorithms & Networking",
    "dates": "Sep 2022 – Sep 2024",
    "role": "Sole Programmer & Algorithm Architect",
    "studio": "Ousedale Sixth Form (Computer Science A-Level)",
    "engine": "Unity (C#)",
    "tools": [
      "Unity Engine",
      "C#",
      "Photon Engine API",
      "Unity Tilemaps",
      "Walker Algorithms"
    ],
    "shortDesc": "A 2D top-down shooter built for Computer Science A-Level entirely via code in Unity (C#), featuring a custom procedural 'Random Walker' generator and Photon Engine multiplayer.",
    "summary": "Coded a 2D grid walker algorithm that randomly carves pathways and dynamically evaluates neighbor tiles to generate correct autotile borders and collision volumes at runtime.",
    "highlights": [
      "Programmed custom 'Random Walker' procedural dungeon generation algorithm from scratch",
      "Self-taught Unity C# and Unity Tilemap API moving from an Unreal Engine Blueprint background",
      "Integrated Photon Engine API to handle real-time multiplayer state synchronization",
      "Engineered dynamic procedural spawning systems for enemies, items, and boundary collision"
    ],
    "technicalDeepDive": "Coded a 2D grid walker algorithm that randomly carves pathways and dynamically evaluates neighbor tiles to generate correct autotile borders and collision volumes at runtime.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/randio",
      "demo": "https://joshej.itch.io/randio",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "vex-robotics",
    "slug": "vex-robotics",
    "catalogNumber": "16",
    "title": "VEX Robotics: Competition Robot Engineering & Driver Controls",
    "discipline": "systems",
    "categoryLabel": "Competitive Robotics & Systems Programming",
    "dates": "Sep 2023 – Sep 2024",
    "role": "Founding Team Member & Systems Programmer",
    "studio": "Ousedale Sixth Form Robotics",
    "engine": "VEXcode (C++ & Python) / V5 Hardware",
    "tools": [
      "VEXcode",
      "C++",
      "Python",
      "Motor Controllers",
      "Pneumatics",
      "Sensor Wiring"
    ],
    "shortDesc": "Founding member of competitive robotics team: prototyped, wired, built, and programmed competition robots using VEXcode (C++/Python), qualifying for and competing in the VEX UK National Competition.",
    "summary": "Wrote dual-stick arcade drive algorithms with motor curve deadband compensation in C++ to grant driver maximum precision and torque management during high-stakes national matches.",
    "highlights": [
      "Co-founded school competitive robotics team; qualified for the VEX UK National Competition",
      "Engineered mechanical intake, lift, and drive train assemblies under strict weight/dimension limits",
      "Programmed autonomous sensor-driven routines and responsive real-time driver control algorithms",
      "Iterated under high-pressure competitive match conditions to troubleshoot gear slippage and voltage drops"
    ],
    "technicalDeepDive": "Wrote dual-stick arcade drive algorithms with motor curve deadband compensation in C++ to grant driver maximum precision and torque management during high-stakes national matches.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "cybercenturion",
    "slug": "cybercenturion",
    "catalogNumber": "17",
    "title": "CyberCenturion: Defensive Cybersecurity & System Hardening",
    "discipline": "systems",
    "categoryLabel": "Cybersecurity & Network Defense",
    "dates": "2022 – 2024",
    "role": "Defensive Cybersecurity Specialist",
    "studio": "Ousedale Sixth Form / Cyber Security Challenge UK",
    "engine": "Linux / Windows Server / VirtualBox",
    "tools": [
      "Bash Scripting",
      "PowerShell",
      "UFW / Windows Firewall",
      "Auditpol",
      "Permission Auditing"
    ],
    "shortDesc": "National cybersecurity competitor: hardened vulnerable Windows and Linux virtual machines against simulated cyberattacks, earning a Top 60 UK nationwide finish.",
    "summary": "Automated vulnerability discovery via custom Bash and PowerShell security audit scripts to quickly verify PAM configs, file permission anomalies, and rogue listening ports within timed scoring windows.",
    "highlights": [
      "Achieved Top 60 UK nationwide placement in rigorous national timed defense rounds",
      "Hardened Linux (Ubuntu/Debian) and Windows operating systems under simulated live attacks",
      "Audited user accounts, privileges, security policies, and closed unauthorized network services",
      "Rooted out and eradicated persistent backdoors, rootkits, and malware"
    ],
    "technicalDeepDive": "Automated vulnerability discovery via custom Bash and PowerShell security audit scripts to quickly verify PAM configs, file permission anomalies, and rogue listening ports within timed scoring windows.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "project-isla",
    "slug": "project-isla",
    "catalogNumber": "18",
    "title": "Project Isla: Procedural Perlin Noise Island Generation",
    "discipline": "games",
    "categoryLabel": "Procedural Worlds & Shaders",
    "dates": "Jan 2023 – Feb 2023",
    "role": "Procedural Technical Designer",
    "studio": "Independent Innovation",
    "engine": "Unreal Engine 5",
    "tools": [
      "Geometry Script",
      "Fast Noise Plugin",
      "Perlin Noise",
      "UE5 Blueprints",
      "Dynamic Meshes"
    ],
    "shortDesc": "An Unreal Engine survival game featuring infinite unique islands procedurally generated using Perlin noise algorithms, the Fast Noise plugin, Geometry Script, and fall-off maps.",
    "summary": "Engineered radial fall-off mathematical gradients combined with multiple octave noise passes to guarantee natural, concave island coastlines that terminate smoothly into water meshes.",
    "highlights": [
      "Generated realistic island landmasses dynamically utilizing 2D Perlin noise and fall-off math",
      "Leveraged Unreal Geometry Script to modify static mesh topology at runtime",
      "Built parameter tuning dashboard to control island altitude, coastline steepness, and smoothing",
      "Implemented procedural tree distribution and dynamic water swimming systems"
    ],
    "technicalDeepDive": "Engineered radial fall-off mathematical gradients combined with multiple octave noise passes to guarantee natural, concave island coastlines that terminate smoothly into water meshes.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/",
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "project-daydream",
    "slug": "project-daydream",
    "catalogNumber": "19",
    "title": "Project Daydream: 1:1 Architectural Photogrammetry & UE5 Shell",
    "discipline": "games",
    "categoryLabel": "Photogrammetry & Environment Art",
    "dates": "Jul 2022 – Dec 2022",
    "role": "Sole Creator & Environment Artist",
    "studio": "Independent Innovation",
    "engine": "Unreal Engine 5",
    "tools": [
      "RenderDoc",
      "Blender",
      "Gigapixel AI",
      "UE5 Nanite & Lumen",
      "UV Unwrapping"
    ],
    "shortDesc": "Joshua's foundational project in Unreal Engine 5: a 1:1 photogrammetric reconstruction of his school, utilizing RenderDoc mesh extraction, 2,377 texture bakes, and world rotation offset matrices.",
    "summary": "When photogrammetry meshes proved too irregular, transitioned from raw geometry to architectural whitebox planes, hand-snapping vertices and developing tiling world-aligned master materials.",
    "highlights": [
      "Extracted real-world 3D architectural data via RenderDoc photogrammetry pipelines",
      "Learned Blender to consolidate and bake 2,377 distinct texture fragments into unified atlas maps",
      "Re-traced entire school envelope with cubes, discovering UV unwrapping and world-aligned materials",
      "Solved map-wide rotation offset by calculating a precise 23.999203° world realignment matrix"
    ],
    "technicalDeepDive": "When photogrammetry meshes proved too irregular, transitioned from raw geometry to architectural whitebox planes, hand-snapping vertices and developing tiling world-aligned master materials.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/",
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "project-daydream-revisited",
    "slug": "daydream-believer",
    "catalogNumber": "20",
    "title": "Project Daydream (Revisited): ADHD Sensory Exploration & Physics",
    "discipline": "games",
    "categoryLabel": "Experiential Narrative & Technical Art",
    "dates": "Jan 2025 – Apr 2025",
    "role": "Lead Creator, Technical Artist & Composer",
    "studio": "JoshCorp Interactive Entertainment / UEL",
    "engine": "Unreal Engine 5",
    "tools": [
      "Unreal Engine 5",
      "Chaos Physics",
      "Niagara VFX",
      "BandLab",
      "ElevenLabs"
    ],
    "shortDesc": "Evolved school environment exploring ADHD sensory perception in school, featuring custom toon distortion shaders, Chaos physics, 15 BandLab original tracks, and ElevenLabs voice modulation.",
    "summary": "Combined custom post-process depth distortions with Chaos physics destructions to create dynamic ludonarrative moments reflecting hyperfocus and sensory overload.",
    "highlights": [
      "Custom toon post-processing shader that distorts distant objects to simulate attention shifts and hyperfocus",
      "Integrated Chaos Physics Engine for dynamic structural fracturing during sensory overload sequences",
      "Composed 15 original music tracks in BandLab and recorded voiceovers modulated via ElevenLabs",
      "Rigged low-poly characters and produced opening sequences in Premiere Pro and After Effects"
    ],
    "technicalDeepDive": "Combined custom post-process depth distortions with Chaos physics destructions to create dynamic ludonarrative moments reflecting hyperfocus and sensory overload.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/",
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "labraz-gdd",
    "slug": "labraz",
    "catalogNumber": "21",
    "title": "LabR@z: 3-Player Asymmetrical Co-Op FPS (MS5028 - 72% 1st)",
    "discipline": "games",
    "categoryLabel": "Level Design & Asymmetrical Mechanics",
    "dates": "Oct 2025 – Dec 2025",
    "role": "Lead Level Designer & Systems Scripter",
    "studio": "University of East London (MS5028)",
    "engine": "Unreal Engine 5",
    "tools": [
      "Whiteboxing Metrics",
      "Blueprint Interfaces",
      "Level Design Bibles",
      "Environmental Storytelling"
    ],
    "shortDesc": "A 3-player co-op heist FPS level in UE5 (Tank, DPS, Healer) scored 72% (1st Class), featuring a 'Pawn Promotion' risk-vs-reward route mechanic and giant observer NPCs.",
    "summary": "Iterated whitebox player metrics, sightlines, and cover angles based on player pacing, using Blueprint interfaces to trigger environmental bulkheads and hazard zones.",
    "highlights": [
      "Achieved 72% (1st Class Honours) for MS5028 Level Design module",
      "Asymmetrical 3-class level layout: Bulkhead breach routes (Tank), jump pads (DPS), sub-tunnels (Healer)",
      "Implemented 'Pawn Promotion' mechanic forcing high-risk sacrifices to permanently open team flanks",
      "Skybox environmental storytelling with giant observer scientists framing players as lab subjects"
    ],
    "technicalDeepDive": "Iterated whitebox player metrics, sightlines, and cover angles based on player pacing, using Blueprint interfaces to trigger environmental bulkheads and hazard zones.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/",
      "demo": "https://www.youtube.com/watch?v=t3xmVDuFvZU",
      "video": "https://www.youtube.com/watch?v=t3xmVDuFvZU",
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "planet-protectors",
    "slug": "planet-protectors",
    "catalogNumber": "22",
    "title": "Planet Protectors: Multi-Sprint Environmental Co-Op (MS4007)",
    "discipline": "games",
    "categoryLabel": "Multiplayer Production & In-Engine Tech Lead",
    "dates": "Mar 2025 – May 2025",
    "role": "Technical Lead, Lead Programmer & Level Scripter",
    "studio": "Llama Studios (CW1 Pitch MS4007)",
    "engine": "Unreal Engine 5",
    "tools": [
      "GitHub Source Control",
      "UE5 Blueprints",
      "Procedural Foliage",
      "Rigging Blendspaces"
    ],
    "shortDesc": "Vibrant low-poly environmental education game in UE5: authored 74 of 86 total Git commits, programmed sheep rescue mechanics, fire propagation, and level foliage generation.",
    "summary": "Built an object-oriented blueprint hierarchy for collectible fauna and environmental hazards, pairing custom collision channels with procedural foliage spawner volumes.",
    "highlights": [
      "Primary engineering contributor: personally authored 74 of the project's 86 total git commits",
      "Established technical pipeline, Git source control workflow, and onboarded student teammates",
      "Programmed core gameplay loops: animal pickup/dropoff systems, fire spread and extinguisher code",
      "Integrated all 3D assets, lighting, collision, post-processing, and rigging blendspaces"
    ],
    "technicalDeepDive": "Built an object-oriented blueprint hierarchy for collectible fauna and environmental hazards, pairing custom collision channels with procedural foliage spawner volumes.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2/Planet-Protectors",
      "itch": "https://joshej.itch.io/",
      "demo": "https://github.com/JoshUEL2/Planet-Protectors",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "pyball",
    "slug": "pyball",
    "catalogNumber": "23",
    "title": "PyBall: Algorithmic 2D Physics & Viewport Culling Optimization",
    "discipline": "games",
    "categoryLabel": "Pure Code Game Development & Optimization",
    "dates": "Sep 2024 – Dec 2024",
    "role": "Systems Programmer",
    "studio": "JoshCorp Interactive Entertainment",
    "engine": "Python (Custom Game Loop)",
    "tools": [
      "Python",
      "Mathematical Collision Physics",
      "Viewport Culling",
      "State Diagrams"
    ],
    "shortDesc": "A 2D arcade physics game coded entirely in pure Python from scratch, featuring dynamic bouncing collision physics, escalating difficulty, and viewport-based CPU optimization.",
    "summary": "When enemy counts grew, frame rates plummeted. Completely re-engineered update loops so physics and collision checks execute exclusively on entities within the player's active camera viewport.",
    "highlights": [
      "Programmed complete 2D arcade game from scratch in Python with zero pre-made engines",
      "Engineered dynamic difficulty system: enemy spawn frequencies and velocity scale with player score",
      "Solved severe framerate degradation by inventing a viewport entity culling algorithm",
      "Iterated enemy obstacle avoidance AI to eliminate wall-sticking edge cases"
    ],
    "technicalDeepDive": "When enemy counts grew, frame rates plummeted. Completely re-engineered update loops so physics and collision checks execute exclusively on entities within the player's active camera viewport.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/",
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "global-game-jam-2026",
    "slug": "ggj-2026",
    "catalogNumber": "24",
    "title": "Global Game Jam 2026 @ Goldsmiths: 48-Hour Rapid Prototyping",
    "discipline": "games",
    "categoryLabel": "Rapid Prototyping & Game Jam",
    "dates": "Jan 2026 – Feb 2026",
    "role": "Rapid Prototyper & Gameplay Designer",
    "studio": "Goldsmiths / Game Dev Local (GDL)",
    "engine": "Unity / Unreal Engine",
    "tools": [
      "C#",
      "Blueprints",
      "Rapid Prototyping",
      "Agile Task Management"
    ],
    "shortDesc": "Shipped a complete playable game from scratch over a 48-hour development sprint at the UK's premier game jam location at Goldsmiths, collaborating with Game Dev Local (GDL).",
    "summary": "Rapidly iterated core mechanics within the first 12 hours, locking scope to deliver a polished, bug-free playtestable build on schedule.",
    "highlights": [
      "Conceptualized, developed, and delivered a complete playable game in 48 hours",
      "Collaborated within a cross-disciplinary on-site development team at the UK's #1 jam site",
      "Delivered playable build for live Sunday evening playtest showcase with zero fatal bugs",
      "Scope management under severe time constraints"
    ],
    "technicalDeepDive": "Rapidly iterated core mechanics within the first 12 hours, locking scope to deliver a polished, bug-free playtestable build on schedule.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/",
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "baldis-basics-2",
    "slug": "baldis-basics-2",
    "catalogNumber": "25",
    "title": "Baldi's Basics 2 / B.A.L.D.: Indie Horror Mechanics & Interior Lighting",
    "discipline": "games",
    "categoryLabel": "Indie Horror Game Development",
    "dates": "Nov 2022 – Apr 2023",
    "role": "Gameplay Programmer & Environment Artist",
    "studio": "Independent Innovation",
    "engine": "Unreal Engine 5",
    "tools": [
      "UE5 Blueprints",
      "Quixel Megascans",
      "Nanite",
      "Lumen Optimization",
      "Widget Overlays"
    ],
    "shortDesc": "Complete playable horror remake in UE5 (Bridge of Animations, Logic, and Design): coded enemy tracking, notebook item collections, and tested 400+ lighting runs to optimize Lumen.",
    "summary": "Overcame severe performance bottlenecks by replacing heavy Lumen point lights with barn-door rectangle lights and selectively disabling Nanite during mesh editing.",
    "highlights": [
      "Coded full horror loop: enemy AI tracking, pickup triggers, stamina systems, and dynamic lights",
      "Benchmarked over 400 test runs, switching from point lights to performance-tuned rectangle lights",
      "Resolved door pivot offset issues and fixed level reset bugs using widget overlays",
      "Built modular biomes including an abandoned school wing and toxic warehouse section"
    ],
    "technicalDeepDive": "Overcame severe performance bottlenecks by replacing heavy Lumen point lights with barn-door rectangle lights and selectively disabling Nanite during mesh editing.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": "https://joshej.itch.io/",
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "modelling-replica-of-room",
    "slug": "room-replica",
    "catalogNumber": "26",
    "title": "Modelling Replica Of Room: Hard-Surface Workplace Reconstruction",
    "discipline": "tech-art",
    "categoryLabel": "3D Hard-Surface & Environment Art",
    "dates": "Jul 2023 – Aug 2023",
    "role": "3D Modeler & Lighting Artist",
    "studio": "Independent Innovation",
    "engine": "Unreal Engine 5",
    "tools": [
      "UE5 Modeling Tools",
      "Subdivision",
      "Cloth Physics",
      "Screen Space Reflections",
      "Quixel Megascans"
    ],
    "shortDesc": "A photorealistic 1:1 UE5 recreation of Joshua's former workplace: engineered complex plastic cages from primitive cubes using subdivision and cloth physics.",
    "summary": "Utilized world-aligned non-repeating material graphs and snapping tools to accurately match real-world reference photography within tight modeling bounds.",
    "highlights": [
      "Modeled intricate plastic cage geometry starting from a single primitive cube using mesh booleans and loop cuts",
      "Implemented UE5 cloth physics to turn static geometry into dynamic cloth materials",
      "Fixed Lumen reflection artifacts by configuring screen-space reflection overrides",
      "Calibrated camera focal lengths in animation timeline to resolve MetaHuman facial warping in closeups"
    ],
    "technicalDeepDive": "Utilized world-aligned non-repeating material graphs and snapping tools to accurately match real-world reference photography within tight modeling bounds.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "metahuman-recreation",
    "slug": "metahuman-recreation",
    "catalogNumber": "27",
    "title": "Metahuman Recreation: Photogrammetry & Mesh-to-MetaHuman Pipeline",
    "discipline": "tech-art",
    "categoryLabel": "Digital Humans & Photogrammetry",
    "dates": "Mar 2023 – Jul 2023",
    "role": "Character Technical Artist",
    "studio": "Independent Innovation",
    "engine": "Unreal Engine 5",
    "tools": [
      "Meshroom",
      "Photogrammetry",
      "MetaHuman Creator",
      "Photoshop Alignment",
      "MetaHuman Animator"
    ],
    "shortDesc": "High-fidelity digital replica of Joshua's face in Unreal Engine 5 using Meshroom multi-angle photogrammetry, Photoshop opacity calibration, and MetaHuman Animator.",
    "summary": "Analyzed skeletal topology and blendshape rigging across facial meshes, iteratively tweaking landmark points to eliminate topological distortion on MetaHuman head geometry.",
    "highlights": [
      "Shot hundreds of multi-angle reference photos to reconstruct a high-density 3D face mesh in Meshroom",
      "Mapped point cloud to MetaHuman topology using UE5's Mesh-to-MetaHuman pipeline",
      "Calibrated front/side facial profiles via opacity overlays in Photoshop to achieve 1:1 fidelity",
      "Streamlined character pipeline using newly released MetaHuman Animator facial solvers"
    ],
    "technicalDeepDive": "Analyzed skeletal topology and blendshape rigging across facial meshes, iteratively tweaking landmark points to eliminate topological distortion on MetaHuman head geometry.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "game-narrative-design-essay",
    "slug": "narrative-design-essay",
    "catalogNumber": "28",
    "title": "Game Narrative Design & Dialogue Systems Essay",
    "discipline": "narrative",
    "categoryLabel": "Academic Narrative Research",
    "dates": "May 2026",
    "role": "Academic Researcher & Author",
    "studio": "University of East London",
    "engine": "Academic Research & Ludonarrative Analysis",
    "tools": [
      "Microsoft Word",
      "Narrative Analysis",
      "Ludonarrative Frameworks"
    ],
    "shortDesc": "A comprehensive academic research paper evaluating branching narrative architectures, systemic subtext, and player agency across contemporary video games.",
    "summary": "Critically dissected player choice topologies, demonstrating how hidden systemic variables (like trust and agitation) create more compelling ludonarrative resonance than binary morality meters.",
    "highlights": [
      "Evaluated branching tree architectures vs procedural emergent narrative systems",
      "Analyzed the balance between player authorial agency and dramatic narrative coherence",
      "Investigated dialogue triad mechanics (Accept/Reject/Deflect) and subtextual signaling",
      "Synthesized narrative design bibles into actionable game development frameworks"
    ],
    "technicalDeepDive": "Critically dissected player choice topologies, demonstrating how hidden systemic variables (like trust and agitation) create more compelling ludonarrative resonance than binary morality meters.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "fractured-short-movie",
    "slug": "fractured-short-movie",
    "catalogNumber": "29",
    "title": "Fractured: Psychological Crime Drama Short Movie",
    "discipline": "narrative",
    "categoryLabel": "Film Direction & Sound Design",
    "dates": "Apr 2023 – Dec 2023",
    "role": "Director, Editor & Sole Actor",
    "studio": "Ousedale Media Productions (A-Level)",
    "engine": "Adobe Premiere Pro / Media Encoder",
    "tools": [
      "Adobe Premiere Pro",
      "Binaural Audio Panning",
      "Color Grading",
      "Analogue Horror FX"
    ],
    "shortDesc": "A 3-minute psychological crime drama extract: directed, edited, and performed as sole actor, featuring cold desaturated color grading and binaural audio panning.",
    "summary": "Utilized dual-channel audio panning to separate external reality from protagonist interior voices, pacing cuts to mirror escalating mental fracture.",
    "highlights": [
      "Directed, performed, and edited complete 3-minute psychological crime narrative extract",
      "Engineered binaural audio panning to simulate characters 'moving between minds' via interior monologues",
      "Applied cold, desaturated color palettes and analogue VHS opening effects",
      "Full video showcased publicly on YouTube"
    ],
    "technicalDeepDive": "Utilized dual-channel audio panning to separate external reality from protagonist interior voices, pacing cuts to mirror escalating mental fracture.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": "https://www.youtube.com/watch?v=yYg8R_PQs48",
      "video": "https://www.youtube.com/watch?v=yYg8R_PQs48",
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "fractured-intro",
    "slug": "fractured-intro",
    "catalogNumber": "30",
    "title": "Fractured (Intro): Retro Title Sequence & After Effects Motion Graphics",
    "discipline": "narrative",
    "categoryLabel": "Motion Graphics & VFX",
    "dates": "Nov 2023 – Dec 2023",
    "role": "Motion Graphics Designer",
    "studio": "Ousedale Media Productions",
    "engine": "Adobe After Effects / Media Encoder",
    "tools": [
      "Adobe After Effects",
      "Adobe Media Encoder",
      "Apple ProRes",
      "VHS Distortion",
      "Vector Glows"
    ],
    "shortDesc": "An 80s Stranger Things-inspired retro opening title sequence built in Adobe After Effects from scratch, mastering vector coloring, SDR color conversion, and Apple ProRes codecs.",
    "summary": "Troubleshot embedded text effect color profiles and vector subfolders in After Effects to achieve rich optical glows without blown-out specular highlights.",
    "highlights": [
      "Self-taught Adobe After Effects from scratch to create cinematic stylized retro title graphics",
      "Customized glow shaders, chromatic aberrations, and animated vector typography",
      "Mastered professional video encoding: converting HDR source assets into calibrated SDR space",
      "Exported in broadcast-quality Apple ProRes codec for multi-project integration"
    ],
    "technicalDeepDive": "Troubleshot embedded text effect color profiles and vector subfolders in After Effects to achieve rich optical glows without blown-out specular highlights.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": "https://www.youtube.com/watch?v=yYg8R_PQs48",
      "video": "https://www.youtube.com/watch?v=yYg8R_PQs48",
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "tv-listings-magazine",
    "slug": "tv-listings-magazine",
    "catalogNumber": "31",
    "title": "TV Listings Magazine: Psychological Crime Publication Design",
    "discipline": "narrative",
    "categoryLabel": "Publication Graphic Design",
    "dates": "Jun 2023 – Dec 2023",
    "role": "Graphic Designer & Art Director",
    "studio": "Ousedale Media Productions",
    "engine": "Adobe Photoshop",
    "tools": [
      "Adobe Photoshop",
      "Color Theory",
      "Typography",
      "Composition Framing"
    ],
    "shortDesc": "A print-ready graphic publication cover designed in Photoshop promoting 'Fractured', inspired by Empire Magazine: explores color psychology and jagged visual framing.",
    "summary": "Engineered multi-layer blending masks in Photoshop to seamlessly position title mastheads behind character foreground silhouettes while preserving hair edge transparency.",
    "highlights": [
      "Researched professional magazine mastheads and typography hierarchy modeled on Empire Magazine",
      "Manipulated facial focal points by blanking out pupils to leave only sclera for mystery connotations",
      "Crafted jagged, broken background compositions mirroring psychological split personalities",
      "Applied strict color theory contrast to establish crime drama genre conventions"
    ],
    "technicalDeepDive": "Engineered multi-layer blending masks in Photoshop to seamlessly position title mastheads behind character foreground silhouettes while preserving hair edge transparency.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "lead-actor-les-miserables",
    "slug": "les-miserables",
    "catalogNumber": "32",
    "title": "Lead Actor — Les Misérables: Marius & Jean Valjean",
    "discipline": "media",
    "categoryLabel": "Theatrical Performance & Choreography",
    "dates": "Apr 2023 – Oct 2023",
    "role": "Principal Theatrical Actor",
    "studio": "Ousedale Productions",
    "engine": "Theatrical Stage Production",
    "tools": [
      "Vocal Projection",
      "Duet Choreography",
      "Costume Symbolism",
      "Live Dramatic Performance"
    ],
    "shortDesc": "Principal role in major stage production (holding 2nd most lines as Marius): choreographed duets and solo numbers, designed character costume evolution, and sang live for public audiences.",
    "summary": "Live theatrical blocking and vocal cadence discipline directly informs cutscene directing, camera positioning, and realistic motion capture performance curation.",
    "highlights": [
      "Cast in principal roles (Jean Valjean audition / Marius principal) across multiple consecutive years",
      "Held second-largest role by line count, performing live singing and dramatic acting for public audiences",
      "Choreographed dramatic stage duets and all solo musical numbers",
      "Curated costume transitions into darker tones across Act 1 to visually reflect narrative despair"
    ],
    "technicalDeepDive": "Live theatrical blocking and vocal cadence discipline directly informs cutscene directing, camera positioning, and realistic motion capture performance curation.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "lead-actor-the-addams-family",
    "slug": "addams-family",
    "catalogNumber": "33",
    "title": "Lead Actor — The Addams Family: Stage Musical Production",
    "discipline": "media",
    "categoryLabel": "Theatrical Musical Performance",
    "dates": "Apr 2022 – Oct 2022",
    "role": "Principal Lead Actor",
    "studio": "Ousedale Productions",
    "engine": "Theatrical Stage Musical",
    "tools": [
      "Stage Presence",
      "Live Musical Vocals",
      "Choreography",
      "Auditorium Projection"
    ],
    "shortDesc": "Auditioned and earned principal lead role: performed live singing, dancing, and 2-hour dramatic acting in front of sold-out public auditoriums across multiple nights.",
    "summary": "Mastered stage presence and physical comedic timing, building the confidence and vocal clarity vital for professional team leadership and live public speaking.",
    "highlights": [
      "Won lead role through competitive vocal and dramatic audition in front of faculty panel",
      "Rehearsed and performed 2-hour live singing, physical comedy, and dancing for sold-out public auditoriums",
      "Overcame stage fright to build commanding vocal projection and physical comedy timing",
      "Contains 8 high-resolution stage photography and production assets"
    ],
    "technicalDeepDive": "Mastered stage presence and physical comedic timing, building the confidence and vocal clarity vital for professional team leadership and live public speaking.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "almost-always-supporting-actor",
    "slug": "almost-always",
    "catalogNumber": "34",
    "title": "Screen Acting — Almost Always: Dramatic Supporting Role",
    "discipline": "media",
    "categoryLabel": "Screen Acting & Dramatic Performance",
    "dates": "Mar 2026",
    "role": "Supporting Actor",
    "studio": "University of East London Productions",
    "engine": "Live Action Screen Production",
    "tools": [
      "On-Camera Blocking",
      "Dramatic Subtext",
      "Vocal Control",
      "Set Etiquette"
    ],
    "shortDesc": "Featured supporting screen actor in dramatic short film 'Almost Always', executing on-camera blocking and character subtext under studio lighting.",
    "summary": "Experience in front of cinema lenses directly refines virtual camera FOV choices, lens focal lengths, and actor pacing in real-time engine cutscenes.",
    "highlights": [
      "Executed precise on-camera blocking and emotional subtext across multiple scene takes",
      "Collaborated closely with student directors, cinematographers, and boom operators",
      "Gained direct understanding of camera frustums, eyelines, and shot composition",
      "Informs virtual camera staging and cinematic framing in Unreal Sequencer"
    ],
    "technicalDeepDive": "Experience in front of cinema lenses directly refines virtual camera FOV choices, lens focal lengths, and actor pacing in real-time engine cutscenes.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "dead-weight-supporting-actor",
    "slug": "dead-weight",
    "catalogNumber": "35",
    "title": "Screen Acting — Dead Weight: Practical FX Zombie Stunts",
    "discipline": "media",
    "categoryLabel": "Practical FX & Screen Acting",
    "dates": "Mar 2026",
    "role": "Creature Actor & Stunt Performer",
    "studio": "University of East London Productions",
    "engine": "Live Action Screen Production",
    "tools": [
      "Prosthetic Makeup",
      "Creature Physicality",
      "Stunt Blocking",
      "Physical Endurance"
    ],
    "shortDesc": "Featured creature actor in zombie horror film 'Dead Weight': performed practical prosthetic makeup, creature physicality, and on-camera stunt blocking.",
    "summary": "Physical creature acting experience provides firsthand insight into monster animation curves, blendshape strain, and ragdoll physics parameters.",
    "highlights": [
      "Underwent extensive practical effects prosthetic makeup application for creature role",
      "Developed specialized non-human physical gait and erratic movement for horror pacing",
      "Executed physical stunt falls and aggressive on-camera character interactions",
      "Contains 4 production assets including screenplay excerpts and set photography"
    ],
    "technicalDeepDive": "Physical creature acting experience provides firsthand insight into monster animation curves, blendshape strain, and ragdoll physics parameters.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "school-podcast-founder",
    "slug": "school-podcast",
    "catalogNumber": "36",
    "title": "Director, Host, Technician & Editor — Sixth Form Podcast",
    "discipline": "narrative",
    "categoryLabel": "Audio Engineering & Studio Production",
    "dates": "Sep 2023 – Sep 2024",
    "role": "Founder, Director, Host & Studio Technician",
    "studio": "Ousedale Sixth Form",
    "engine": "Acoustic Audio Studio / Adobe Audition",
    "tools": [
      "Audio Recording Hardware",
      "Adobe Audition",
      "Microphone Placement",
      "Audio Mastering"
    ],
    "shortDesc": "Handpicked by Head of Media Production to establish Ousedale's first weekly podcast: converted an unused storage room into a functional recording studio on a set budget.",
    "summary": "Balanced multi-channel preamps and noise gates to eliminate room resonance, applying EQ sweeps and compression chains in Adobe Audition for broadcast-standard loudness.",
    "highlights": [
      "Researched, purchased, and installed acoustic treatment and multi-mic recording gear on a budget",
      "Sourced, scheduled, and interviewed weekly guest speakers across faculty and student cohorts",
      "Engineered live multi-channel recording sessions and performed full post-production mastering",
      "Broadcasted weekly episodes to the entire sixth form yeargroup throughout the academic year"
    ],
    "technicalDeepDive": "Balanced multi-channel preamps and noise gates to eliminate room resonance, applying EQ sweeps and compression chains in Adobe Audition for broadcast-standard loudness.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "yearbook-sole-editor",
    "slug": "yearbook-sole-editor",
    "catalogNumber": "37",
    "title": "Sole Editor — School Yearbook: 150+ Covers & 200-Student Mosaic",
    "discipline": "narrative",
    "categoryLabel": "Graphic Design & Editorial Direction",
    "dates": "Sep 2021 – Sep 2022",
    "role": "Sole Editor & Lead Graphic Designer",
    "studio": "Ousedale School",
    "engine": "Adobe Photoshop / InDesign",
    "tools": [
      "Adobe Photoshop",
      "Layout Design",
      "Batch Photo Processing",
      "Typography Formatting"
    ],
    "shortDesc": "Took sole creative and technical ownership of the school yearbook: designed all custom backgrounds, standardized page typography, iterated 150+ covers, and created a 200-student photo mosaic.",
    "summary": "Processed hundreds of raw portraits in Photoshop, performing background removals, edge sharpening, and precise grid alignments to maintain uniform resolution across high-density print pages.",
    "highlights": [
      "Sole editor with complete ownership of creative direction, typography, and page layout",
      "Created custom graphical backgrounds and formatted every single section across the book",
      "Iterated through over 150 distinct front cover designs before finalizing the published version",
      "Engineered complex mosaic front cover sourcing, editing, and aligning 200+ student photographs"
    ],
    "technicalDeepDive": "Processed hundreds of raw portraits in Photoshop, performing background removals, edge sharpening, and precise grid alignments to maintain uniform resolution across high-density print pages.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "2d-art-work",
    "slug": "2d-art-work",
    "catalogNumber": "38",
    "title": "2D Art Work: Rubberhose Studies, Architectural Shading & Landscapes",
    "discipline": "tech-art",
    "categoryLabel": "Visual Art & 2D Studies",
    "dates": "Sep 2024 – Dec 2024",
    "role": "2D Artist & Illustrator",
    "studio": "University of East London",
    "engine": "Traditional Pencil & Adobe Photoshop",
    "tools": [
      "Adobe Photoshop",
      "Pencil Sketching",
      "Perspective Grids",
      "Chiaroscuro Shading"
    ],
    "shortDesc": "A collection of 15 high-resolution art studies mastering drawing fundamentals from scratch: 1930s rubberhose character art, high-contrast Euston Arch pencil shading, and Photoshop landscapes.",
    "summary": "Practiced 3-point perspective construction and chiaroscuro cross-hatching to understand light falloff, directly benefiting 3D level composition and environmental lighting.",
    "highlights": [
      "Researched 1930s rubberhose animation character principles to create stylized digital figures",
      "Studied classical arch architecture (Euston Arch, Brandenburg Gate) for high-contrast pencil shading",
      "Engineered a complex digital landscape with low-angle perspective grids and skyscraper focal points",
      "Archive includes 15 high-resolution artwork files documenting the complete iterative process"
    ],
    "technicalDeepDive": "Practiced 3-point perspective construction and chiaroscuro cross-hatching to understand light falloff, directly benefiting 3D level composition and environmental lighting.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "3d-artwork-architectural",
    "slug": "3d-artwork",
    "catalogNumber": "39",
    "title": "3D Geometry-Only Studies: Medieval London Bridge, Barbican & Cyberpunk Garden",
    "discipline": "tech-art",
    "categoryLabel": "3D Modeling & Pure Geometry Studies",
    "dates": "Sep 2024 – Dec 2024",
    "role": "3D Technical Modeler",
    "studio": "University of East London",
    "engine": "Blender 3D",
    "tools": [
      "Blender",
      "Pure Geometry Modeling",
      "Boolean Cuts",
      "Loop Cuts",
      "Noise Algorithms"
    ],
    "shortDesc": "A portfolio of 18 architectural studies in Blender achieving high realism exclusively through pure geometric topology without texture maps: Medieval London Bridge, Barbican Brutalism, and Eden Dock Cyberpunk.",
    "summary": "Overcame boolean topology degradation on complex facades by transitioning to optimized loop-cut grids, preserving edge flow and vertex normals across intricate architectural spans.",
    "highlights": [
      "Modeled 3 distinct architectural styles using only vertex geometry, booleans, and loop cuts (0 textures)",
      "Researched medieval London Bridge and applied random noise algorithms to generate warped masonry",
      "Troubleshot and solved complex Blender scaling bugs and boolean window topology anomalies",
      "Researched and implemented procedural water shaders and geometric brutalist structures"
    ],
    "technicalDeepDive": "Overcame boolean topology degradation on complex facades by transitioning to optimized loop-cut grids, preserving edge flow and vertex normals across intricate architectural spans.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "misc-games-planning",
    "slug": "misc-games",
    "catalogNumber": "40",
    "title": "Misc Games: Concept Archives & Game Design Systems",
    "discipline": "narrative",
    "categoryLabel": "Creative Concepts & Game Bibles",
    "dates": "Independent Archive",
    "role": "Game Designer & Worldbuilder",
    "studio": "Independent Innovation",
    "engine": "Game Design Bibles & Creative Scripts",
    "tools": [
      "Game Design Bibles",
      "Creative Writing",
      "Mechanic Flowcharts",
      "Systems Architecture"
    ],
    "shortDesc": "An archive of exploratory game design documents, lore bibles, creative writing scripts, and experimental game mechanics developed across early independent production sprints.",
    "summary": "Documented mechanical edge-cases, reward loops, and progression pacing in early design documents, establishing a habit of rigorous pre-production planning.",
    "highlights": [
      "Conceptualized multiple indie game prototypes, economy models, and lore frameworks",
      "Explored creative writing and systemic dialogue pacing across varied gameplay genres",
      "Maintained design post-mortems documenting lessons learned from early technical hurdles",
      "Foundation for subsequent commercial prototypes and university productions"
    ],
    "technicalDeepDive": "Documented mechanical edge-cases, reward loops, and progression pacing in early design documents, establishing a habit of rigorous pre-production planning.",
    "narrativePhilosophy": "",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "itch": null,
      "demo": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  }
];

/**
 * allProjectsData.js
 * Comprehensive Games & Prototypes Catalog migrated from LinkedIn & UEL coursework.
 * Strictly contains Josh's actual games, physics prototypes, and interactive systems.
 */

export const GAME_FILTER_DISCIPLINES = [
  { id: 'all', label: 'All Games', count: 17 },
  { id: 'unreal', label: 'Unreal Engine 5', count: 11 },
  { id: 'playable', label: 'Playable Builds (Itch/Demo)', count: 8 },
  { id: 'narrative', label: 'Narrative & Dialogue', count: 4 },
];

export const ALL_PROJECTS = [
  {
    "id": "rastacats-ue5",
    "slug": "rastacats",
    "catalogNumber": "01",
    "title": "Rastacats: Procedural Runner & Polar Gravity (MS5027 - 92% 1st)",
    "discipline": "unreal",
    "engine": "Unreal Engine 5.7",
    "categoryLabel": "Gameplay Prototyping & Physics",
    "dates": "Oct 2025 – Dec 2025",
    "role": "Technical Designer & Gameplay Programmer",
    "studio": "JoshCorp Interactive Entertainment (MS5027)",
    "shortDesc": "3D arcade bobsled prototype (92% 1st Class) interpreting the 1988 Winter Olympics Cool Runnings narrative, featuring custom 360-degree rotational gravity, polar-to-cartesian coordinate mapping, and an overspeed loop.",
    "summary": "Built a procedurally generated ice tube runner using a polar-to-cartesian coordinate system to maintain player positioning across complete 360-degree surface rotations beyond standard engine physics components. Overhauled actor pooling to disable ticks across hundreds of track elements.",
    "highlights": [
      "Achieved 92% (1st Class Honours) for MS5027 Gameplay Prototyping module",
      "Engineered custom 360-degree rotational gravity and polar-to-cartesian coordinate positioning",
      "Curved-world horizon shader with mathematical drop-shadow decal compensation",
      "Expanded into Mod Pack featuring AI-driven Race Mode and dynamic blizzard weather systems"
    ],
    "technicalDeepDive": "Built a procedurally generated ice tube runner using a polar-to-cartesian coordinate system to maintain player positioning across complete 360-degree surface rotations beyond standard engine physics components. Overhauled actor pooling to disable ticks across hundreds of track elements.",
    "image": "/images/rastacats_cover.jpg",
    "video": "/media/rastacats_preview.mp4",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": "https://joshej.itch.io/rastacats",
      "itch": "https://joshej.itch.io/rastacats",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "youtubeId": null,
    "featured": true
  },
  {
    "id": "rem-ue5",
    "slug": "rem",
    "catalogNumber": "02",
    "title": "REM: Watercolor Technical Art & Ludonarrative",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Technical Art & UE5",
    "dates": "Jan 2026 – Mar 2026",
    "role": "Lead Developer, Technical Artist & Narrative Designer",
    "studio": "JoshCorp Interactive Entertainment / UEL",
    "shortDesc": "A stylized UE5 interactive experience featuring a bespoke Kuwahara watercolor post-process filter and character World Position Offset morphing body.",
    "summary": "Faced with achieving a rich, watercolor aesthetic without sacrificing edge definition or framerates, implemented custom multi-directional Kuwahara filtering. Developed custom vertex displacement via World Position Offset without relying on standard pre-made marketplace packs.",
    "highlights": [
      "Bespoke Kuwahara post-processing filter balancing painterly aesthetic with gameplay legibility",
      "Custom World Position Offset (WPO) morphing body for main protagonist",
      "Condensed expansive game bible into focused short-form interactive narrative",
      "Complete PBR texture painting in Substance Painter and custom 3D modeling in Blender"
    ],
    "technicalDeepDive": "Faced with achieving a rich, watercolor aesthetic without sacrificing edge definition or framerates, implemented custom multi-directional Kuwahara filtering. Developed custom vertex displacement via World Position Offset without relying on standard pre-made marketplace packs.",
    "image": "/images/rem_cover.jpg",
    "video": "/media/rem_preview.mp4",
    "links": {
      "github": "https://github.com/JoshUEL2/REM",
      "demo": "https://github.com/JoshUEL2/REM/releases/latest",
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "youtubeId": null,
    "featured": true
  },
  {
    "id": "labraz-gdd",
    "slug": "labraz",
    "catalogNumber": "03",
    "title": "LabR@z: 3-Player Asymmetrical Co-Op FPS (MS5028 - 72% 1st)",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Level Design & Asymmetrical Mechanics",
    "dates": "Oct 2025 – Dec 2025",
    "role": "Lead Level Designer & Systems Scripter",
    "studio": "University of East London (MS5028)",
    "shortDesc": "A 3-player co-op heist FPS level in UE5 (Tank, DPS, Healer) scored 72% (1st Class), featuring a 'Pawn Promotion' risk-vs-reward route mechanic and giant observer NPCs.",
    "summary": "Iterated whitebox player metrics, sightlines, and cover angles based on player pacing, using Blueprint interfaces to trigger environmental bulkheads and hazard zones.",
    "highlights": [
      "Achieved 72% (1st Class Honours) for MS5028 Level Design module",
      "Asymmetrical 3-class level layout: Bulkhead breach routes (Tank), jump pads (DPS), sub-tunnels (Healer)",
      "Implemented 'Pawn Promotion' mechanic forcing high-risk sacrifices to permanently open team flanks",
      "Skybox environmental storytelling with giant observer scientists framing players as lab subjects"
    ],
    "technicalDeepDive": "Iterated whitebox player metrics, sightlines, and cover angles based on player pacing, using Blueprint interfaces to trigger environmental bulkheads and hazard zones.",
    "image": "/images/labraz.jpg",
    "video": "/media/labraz_preview.mp4",
    "youtubeId": "t3xmVDuFvZU",
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": "https://www.youtube.com/watch?v=t3xmVDuFvZU",
      "itch": null,
      "video": "https://www.youtube.com/watch?v=t3xmVDuFvZU",
      "youtubeId": "t3xmVDuFvZU",
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "the-quarry-twine",
    "slug": "the-quarry",
    "catalogNumber": "04",
    "title": "The Quarry: Interactive Safeguarding Interrogation",
    "discipline": "narrative",
    "engine": "Twine (SugarCube / HTML / CSS)",
    "categoryLabel": "Narrative & Dialogue Systems",
    "dates": "Apr 2026 – May 2026",
    "role": "Narrative Designer & Dialogue Systems Architect",
    "studio": "University of East London",
    "shortDesc": "A psychological thriller built in Twine exploring manipulation in a single consultation room using Jon Ingold's Accept/Reject/Deflect triads and an internal Agitation meter.",
    "summary": "Treated dialogue flow with the systemic precision of gameplay scripting: choices manipulate the hidden Agitation state, unlocking guarded confessions through calculated de-escalation pathways.",
    "highlights": [
      "Structured upon Jon Ingold's 'Accept / Reject / Deflect' dialogue choice architecture",
      "Dynamic 'Agitation' variable tracking that exposes subtext as a tangible game mechanic",
      "Conversational loops that punish aggressive confrontations by reverting narrative progress",
      "Pacing and claustrophobic two-person power dynamics inspired by Adolescence (Episode 3)"
    ],
    "technicalDeepDive": "Treated dialogue flow with the systemic precision of gameplay scripting: choices manipulate the hidden Agitation state, unlocking guarded confessions through calculated de-escalation pathways.",
    "image": "/images/the_quarry.jpg",
    "gallery": [
      "/images/the_quarry.jpg",
      "/images/the_quarry_flowchart.png"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": "/games/the_quarry/index.html",
      "itch": null,
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
    "discipline": "unreal",
    "engine": "Unreal Engine 5 VR",
    "categoryLabel": "VR Systems & Exhibition",
    "dates": "Jun 2026 – Present",
    "role": "Lead VR Technical Specialist & Exhibitor",
    "studio": "University of East London",
    "shortDesc": "Sole Level 5 interactive project selected for exhibition alongside Level 6 final projects; configured and calibrated room-scale VR playtest space at the Royal Docks Centre for Sustainability.",
    "summary": "Calibrated room-scale boundaries and runtime headset tracking to eliminate drift and motion sickness across consecutive public playtesting sessions.",
    "highlights": [
      "Sole Level 5 interactive project selected to exhibit downstairs with Level 6 graduation work",
      "Configured, calibrated, and debugged entire upstairs room-scale VR playtest installation",
      "Onboarded hundreds of industry visitors and academic stakeholders to VR tracking space",
      "Conducted live playtest telemetry tracking and qualitative user experience feedback capture"
    ],
    "technicalDeepDive": "Calibrated room-scale boundaries and runtime headset tracking to eliminate drift and motion sickness across consecutive public playtesting sessions.",
    "image": "/images/vr_showcase.jpg",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": "https://www.linkedin.com/in/joshua-johnson-485543351/",
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "state-machine-showcase",
    "slug": "state-machine-showcase",
    "catalogNumber": "06",
    "title": "State Machine Showcase: AI Behavior Trees, Turrets & Elevator Logic",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Core Gameplay & State Systems",
    "dates": "Apr 2025 – Jun 2025",
    "role": "Gameplay Systems Programmer",
    "studio": "University of East London",
    "shortDesc": "A playable showcase demonstrating foundational game systems: spline-patrolling AI with sight perception, autonomous tracking turrets, inventory-gated doors, and multi-floor elevators.",
    "summary": "Structured all game systems via formal flowchart state diagrams, implementing strict hierarchical finite state machines (HFSM) to prevent illegal transitions.",
    "highlights": [
      "Autonomous patrolling NPC built with Behavior Trees: spline following, sight detection, chase/attack states",
      "Autonomous AI tracking turret with idle, scan, target lock, firing, and cooldown cycles",
      "Key-locked door system verifying player inventory tags prior to triggering animation sequences",
      "Complex multi-floor elevator with input queue validation and external lock states"
    ],
    "technicalDeepDive": "Structured all game systems via formal flowchart state diagrams, implementing strict hierarchical finite state machines (HFSM) to prevent illegal transitions.",
    "image": "/images/state_machine_cover.png",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": "https://joshej.itch.io/state-machine-showcase",
      "itch": "https://joshej.itch.io/state-machine-showcase",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "rand-io",
    "slug": "randio",
    "catalogNumber": "07",
    "title": "Rand.io: Procedural Walker Map Generator & Photon Multiplayer",
    "discipline": "itch",
    "engine": "Unity (C#)",
    "categoryLabel": "Procedural Algorithms & Networking",
    "dates": "Sep 2022 – Sep 2024",
    "role": "Sole Programmer & Algorithm Architect",
    "studio": "Ousedale Sixth Form (Computer Science A-Level)",
    "shortDesc": "A 2D top-down shooter built for Computer Science A-Level entirely via code in Unity (C#), featuring a custom procedural 'Random Walker' generator and Photon Engine multiplayer.",
    "summary": "Coded a 2D grid walker algorithm that randomly carves pathways and dynamically evaluates neighbor tiles to generate correct autotile borders and collision volumes at runtime.",
    "highlights": [
      "Programmed custom 'Random Walker' procedural dungeon generation algorithm from scratch",
      "Self-taught Unity C# and Unity Tilemap API moving from an Unreal Engine Blueprint background",
      "Integrated Photon Engine API to handle real-time multiplayer state synchronization",
      "Engineered dynamic procedural spawning systems for enemies, items, and boundary collision"
    ],
    "technicalDeepDive": "Coded a 2D grid walker algorithm that randomly carves pathways and dynamically evaluates neighbor tiles to generate correct autotile borders and collision volumes at runtime.",
    "image": "/images/rand_io.jpg",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": "https://joshej.itch.io/randio",
      "itch": "https://joshej.itch.io/randio",
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
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
    "shortDesc": "Complete playable horror remake in UE5 (Bridge of Animations, Logic, and Design): coded enemy tracking, notebook item collections, and tested 400+ lighting runs to optimize Lumen.",
    "summary": "Overcame severe performance bottlenecks by replacing heavy Lumen point lights with barn-door rectangle lights and selectively disabling Nanite during mesh editing.",
    "highlights": [
      "Coded full horror loop: enemy AI tracking, pickup triggers, stamina systems, and dynamic lights",
      "Benchmarked over 400 test runs, switching from point lights to performance-tuned rectangle lights",
      "Resolved door pivot offset issues and fixed level reset bugs using widget overlays",
      "Built modular biomes including an abandoned school wing and toxic warehouse section"
    ],
    "technicalDeepDive": "Overcame severe performance bottlenecks by replacing heavy Lumen point lights with barn-door rectangle lights and selectively disabling Nanite during mesh editing.",
    "image": "/images/baldis_basics.jpg",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "planet-protectors",
    "slug": "planet-protectors",
    "catalogNumber": "09",
    "title": "Planet Protectors: Multi-Sprint Environmental Co-Op (MS4007)",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Multiplayer Production & In-Engine Tech Lead",
    "dates": "Mar 2025 – May 2025",
    "role": "Technical Lead, Lead Programmer & Level Scripter",
    "studio": "Llama Studios (CW1 Pitch MS4007)",
    "shortDesc": "Vibrant low-poly environmental education game in UE5: authored 74 of 86 total Git commits, programmed sheep rescue mechanics, fire propagation, and level foliage generation.",
    "summary": "Built an object-oriented blueprint hierarchy for collectible fauna and environmental hazards, pairing custom collision channels with procedural foliage spawner volumes.",
    "highlights": [
      "Primary engineering contributor: personally authored 74 of the project's 86 total git commits",
      "Established technical pipeline, Git source control workflow, and onboarded student teammates",
      "Programmed core gameplay loops: animal pickup/dropoff systems, fire spread and extinguisher code",
      "Integrated all 3D assets, lighting, collision, post-processing, and rigging blendspaces"
    ],
    "technicalDeepDive": "Built an object-oriented blueprint hierarchy for collectible fauna and environmental hazards, pairing custom collision channels with procedural foliage spawner volumes.",
    "image": "/images/planet_protectors_lineup.png",
    "gallery": [
      "/images/planet_protectors_lineup.png",
      "/images/Bonnie and Kiwi Concepts.webp",
      "/images/Haptic Concepts.webp",
      "/images/Bonnie Model Sheet.webp",
      "/images/Kiwi Model Sheet.webp"
    ],
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2/Planet-Protectors",
      "demo": "https://github.com/JoshUEL2/Planet-Protectors",
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "pyball",
    "slug": "pyball",
    "catalogNumber": "10",
    "title": "PyBall: Algorithmic 2D Physics & Viewport Culling Optimization (MS4005)",
    "discipline": "systems",
    "engine": "Python (Custom Game Loop / MS4005)",
    "categoryLabel": "Pure Code Game Development & Optimization",
    "dates": "Sep 2024 – Dec 2024",
    "role": "Systems Programmer",
    "studio": "JoshCorp Interactive Entertainment (MS4005)",
    "shortDesc": "A 2D arcade physics game coded entirely in pure Python from scratch, featuring dynamic bouncing collision physics, escalating difficulty, and viewport-based CPU optimization.",
    "summary": "When enemy counts grew, frame rates plummeted. Completely re-engineered update loops so physics and collision checks execute exclusively on entities within the player's active camera viewport.",
    "highlights": [
      "Programmed complete 2D arcade game from scratch in Python with zero pre-made engines",
      "Engineered dynamic difficulty system: enemy spawn frequencies and velocity scale with player score",
      "Solved severe framerate degradation by inventing a viewport entity culling algorithm",
      "Iterated enemy obstacle avoidance AI to eliminate wall-sticking edge cases"
    ],
    "technicalDeepDive": "When enemy counts grew, frame rates plummeted. Completely re-engineered update loops so physics and collision checks execute exclusively on entities within the player's active camera viewport.",
    "image": "/images/planet_protectors_cover.png",
    "video": "/media/pyball_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
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
    "shortDesc": "An Unreal Engine survival game featuring infinite unique islands procedurally generated using Perlin noise algorithms, the Fast Noise plugin, Geometry Script, and fall-off maps.",
    "summary": "Engineered radial fall-off mathematical gradients combined with multiple octave noise passes to guarantee natural, concave island coastlines that terminate smoothly into water meshes.",
    "highlights": [
      "Generated realistic island landmasses dynamically utilizing 2D Perlin noise and fall-off math",
      "Leveraged Unreal Geometry Script to modify static mesh topology at runtime",
      "Built parameter tuning dashboard to control island altitude, coastline steepness, and smoothing",
      "Implemented procedural tree distribution and dynamic water swimming systems"
    ],
    "technicalDeepDive": "Engineered radial fall-off mathematical gradients combined with multiple octave noise passes to guarantee natural, concave island coastlines that terminate smoothly into water meshes.",
    "image": "/images/project_isla.jpg",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "project-daydream",
    "slug": "project-daydream",
    "catalogNumber": "12",
    "title": "Project Daydream: 1:1 Architectural Photogrammetry & UE5 Shell",
    "discipline": "unreal",
    "engine": "Unreal Engine 5",
    "categoryLabel": "Photogrammetry & Environment Art",
    "dates": "Jul 2022 – Dec 2022",
    "role": "Sole Creator & Environment Artist",
    "studio": "Independent Innovation",
    "shortDesc": "Joshua's foundational project in Unreal Engine 5: a 1:1 photogrammetric reconstruction of his school, utilizing RenderDoc mesh extraction, 2,377 texture bakes, and world rotation offset matrices.",
    "summary": "When photogrammetry meshes proved too irregular, transitioned from raw geometry to architectural whitebox planes, hand-snapping vertices and developing tiling world-aligned master materials.",
    "highlights": [
      "Extracted real-world 3D architectural data via RenderDoc photogrammetry pipelines",
      "Learned Blender to consolidate and bake 2,377 distinct texture fragments into unified atlas maps",
      "Re-traced entire school envelope with cubes, discovering UV unwrapping and world-aligned materials",
      "Solved map-wide rotation offset by calculating a precise 23.999203° world realignment matrix"
    ],
    "technicalDeepDive": "When photogrammetry meshes proved too irregular, transitioned from raw geometry to architectural whitebox planes, hand-snapping vertices and developing tiling world-aligned master materials.",
    "image": "/images/daydream_believer_cover.png",
    "video": "/media/daydream_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "project-daydream-revisited",
    "slug": "daydream-believer",
    "catalogNumber": "13",
    "title": "Project Daydream (Revisited): ADHD Sensory Exploration & Physics (MS4035)",
    "discipline": "unreal",
    "engine": "Unreal Engine 5 (MS4035)",
    "categoryLabel": "Experiential Narrative & Technical Art",
    "dates": "Jan 2025 – Apr 2025",
    "role": "Lead Creator, Technical Artist & Composer",
    "studio": "JoshCorp Interactive Entertainment / UEL (MS4035)",
    "shortDesc": "Evolved school environment exploring ADHD sensory perception in school, featuring custom toon distortion shaders, Chaos physics, 15 BandLab original tracks, and ElevenLabs voice modulation.",
    "summary": "Combined custom post-process depth distortions with Chaos physics destructions to create dynamic ludonarrative moments reflecting hyperfocus and sensory overload.",
    "highlights": [
      "Custom toon post-processing shader that distorts distant objects to simulate attention shifts and hyperfocus",
      "Integrated Chaos Physics Engine for dynamic structural fracturing during sensory overload sequences",
      "Composed 15 original music tracks in BandLab and recorded voiceovers modulated via ElevenLabs",
      "Rigged low-poly characters and produced opening sequences in Premiere Pro and After Effects"
    ],
    "technicalDeepDive": "Combined custom post-process depth distortions with Chaos physics destructions to create dynamic ludonarrative moments reflecting hyperfocus and sensory overload.",
    "image": "/images/daydream_believer_cover.png",
    "video": "/media/daydream_preview.mp4",
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "global-game-jam-2026",
    "slug": "ggj-2026",
    "catalogNumber": "14",
    "title": "Global Game Jam 2026 @ Goldsmiths: 48-Hour Rapid Prototyping",
    "discipline": "unreal",
    "engine": "Unity / Unreal Engine",
    "categoryLabel": "Rapid Prototyping & Game Jam",
    "dates": "Jan 2026 – Feb 2026",
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
    "technicalDeepDive": "Rapidly iterated core mechanics within the first 12 hours, locking scope to deliver a polished, bug-free playtestable build on schedule.",
    "image": "/images/project_frame.jpg",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "dear-hiring-manager-gdd",
    "slug": "dear-hiring-manager",
    "catalogNumber": "15",
    "title": "Dear, Hiring Manager: Satirical Mobile Systems GDD & Screenplay",
    "discipline": "narrative",
    "engine": "Unity Prototype / Systemic GDD",
    "categoryLabel": "Mobile Systems & Economy Design",
    "dates": "Jan 2026 – Mar 2026",
    "role": "Systems & Economy Designer",
    "studio": "24 Hour Studios",
    "shortDesc": "A comprehensive Game Design Document and companion screenplay modeling satirical corporate progression loops, inspired by BitLife, mapped via extensive Microsoft Visio decision graphs.",
    "summary": "Utilized visual flowchart mapping in Visio to test narrative branch balance and ensure systemic cohesion before prototyping gameplay in Unity.",
    "highlights": [
      "Modeled intricate text-based career progression and employee sanity mechanics",
      "Exhaustive Visio decision trees identifying mechanical dead-ends prior to code implementation",
      "Satirical narrative framework tightly integrated with mobile engagement retention loops",
      "Dissected mobile market retention models and progression pacing"
    ],
    "technicalDeepDive": "Utilized visual flowchart mapping in Visio to test narrative branch balance and ensure systemic cohesion before prototyping gameplay in Unity.",
    "image": "/images/dear_hiring_manager.jpg",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  },
  {
    "id": "far-cry-5-dlc-faith-over-fear",
    "slug": "faith-over-fear",
    "catalogNumber": "16",
    "title": "Far Cry 5 DLC: 'Faith Over Fear' Screenplay",
    "discipline": "narrative",
    "engine": "Performance Capture Screenplay Format",
    "categoryLabel": "Narrative & Screenwriting",
    "dates": "Feb 2026 – May 2026",
    "role": "Lead Screenwriter & Cutscene Director",
    "studio": "University of East London / Ubisoft IP Adaptation",
    "shortDesc": "An industry-standard AAA prequel screenplay depicting the calculated indoctrination of Rachel Jessop ('Faith Seed') using indexical environmental storytelling.",
    "summary": "Overhauled initial drafts following table-reading feedback, eliminating exposition and using spatial interactions (such as shielding with an umbrella) to convey power dynamics without spoken words.",
    "highlights": [
      "Replaced traditional theatrical villain monologues with grounded, calculated psychological subtext",
      "Indexical storytelling: Rain, mud, and spatial dominance reflect character entrapment",
      "Formatted strictly for performance capture volume pipelines and parenthetical actor direction",
      "Comprehensive theological and psychological research grounded in cult indoctrination dynamics"
    ],
    "technicalDeepDive": "Overhauled initial drafts following table-reading feedback, eliminating exposition and using spatial interactions (such as shielding with an umbrella) to convey power dynamics without spoken words.",
    "image": "/images/far_cry_5.jpg",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": true
  },
  {
    "id": "misc-games-planning",
    "slug": "misc-games",
    "catalogNumber": "17",
    "title": "Misc Games: Concept Archives & Game Design Systems",
    "discipline": "narrative",
    "engine": "Game Design Bibles & Creative Scripts",
    "categoryLabel": "Creative Concepts & Game Bibles",
    "dates": "Independent Archive",
    "role": "Game Designer & Worldbuilder",
    "studio": "Independent Innovation",
    "shortDesc": "An archive of exploratory game design documents, lore bibles, creative writing scripts, and experimental game mechanics developed across early independent production sprints.",
    "summary": "Documented mechanical edge-cases, reward loops, and progression pacing in early design documents, establishing a habit of rigorous pre-production planning.",
    "highlights": [
      "Conceptualized multiple indie game prototypes, economy models, and lore frameworks",
      "Explored creative writing and systemic dialogue pacing across varied gameplay genres",
      "Maintained design post-mortems documenting lessons learned from early technical hurdles",
      "Foundation for subsequent commercial prototypes and university productions"
    ],
    "technicalDeepDive": "Documented mechanical edge-cases, reward loops, and progression pacing in early design documents, establishing a habit of rigorous pre-production planning.",
    "image": "/images/misc_games.jpg",
    "video": null,
    "youtubeId": null,
    "links": {
      "github": "https://github.com/JoshUEL2",
      "demo": null,
      "itch": null,
      "video": null,
      "linkedin": "https://www.linkedin.com/in/joshua-johnson-485543351/"
    },
    "featured": false
  }
];

import { motion } from 'framer-motion';
import { Wrench, ExternalLink, Cpu, Terminal, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { HARDWARE_BENCH_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { getAssetUrl } from '../utils/assetUrl';

const APPLIED_ENGINE_LEDGER = [
  {
    domain: 'Unreal Engine 5 Gameplay & Maths',
    items: [
      {
        skill: '360° Polar Cross-Section Gravity & Spline Banking',
        where: 'Built for Rastacats (92% 1st Class) to let players ride seamlessly up walls and upside-down across ceilings.'
      },
      {
        skill: '37-State Hierarchical Finite State Machine (HFSM)',
        where: 'Built for my State Machine Showcase to run locomotion, ledge-mantling, and surface-swim transitions with zero Animator spaghetti.'
      },
      {
        skill: 'Instanced Static Mesh (HISM) Object Pooling',
        where: 'Built for Rastacats Remastered to recycle thousands of procedural pipe segments with zero garbage-collection frame spikes.'
      }
    ]
  },
  {
    domain: 'HLSL Shaders & Technical Art',
    items: [
      {
        skill: 'Anisotropic Kuwahara & Sobel Edge Post-Process Shaders',
        where: 'Written in HLSL for Project Frame to turn real-time 3D viewport frames into hand-brushed oil paintings at 60+ FPS.'
      },
      {
        skill: 'Curved-World WPO Vertex Deformation & Tangent Decals',
        where: 'Built in Rastacats Remastered to bend straight meshes dynamically on the GPU and project blood splatters across curved cylinders.'
      },
      {
        skill: 'RealityCapture Photogrammetry to Low-Poly PBR Baking',
        where: 'Executed in Project Poly, taking 416 raw DSLR photos (1.5M+ tris) down to a clean, game-ready 4K PBR asset in Blender.'
      }
    ]
  },
  {
    domain: 'VR Physics, AI & Multiplayer Networking',
    items: [
      {
        skill: 'OpenXR Two-Handed Physics Rig & Acoustic Sanity AI',
        where: 'Engineered for Delirium VR (sole playable VR game on the UEL showcase floor) with physical doors, levers, and spatial audio hunting.'
      },
      {
        skill: 'Photon PUN2 Authoritative Multiplayer & Ragdoll Sync',
        where: 'Built in Unity 6 for Planet Protectors, synchronising co-op waves, physics knockbacks, and object pools across 4 players.'
      },
      {
        skill: 'Frustum-Culled Non-Euclidean Corridor Swapping',
        where: 'Designed for Chanceway to silently reconfigure maze junctions behind the player’s camera frustum.'
      }
    ]
  }
];

export default function Competencies() {
  return (
    <section id="toolkit" className="relative w-full overflow-hidden">
      {/* Full-Bleed Grungy PCB Circuit & Hardware Workbench Biome */}
      <div className="bg-circuit-pattern pt-32 pb-32 px-4 sm:px-6 relative">
        {/* Seamless Single Top Crossfade from Editorial Research (#111110) into PCB Workbench */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#111110] via-[#0c0f0d]/85 to-transparent pointer-events-none z-0"
        />
        {/* Bottom Atmospheric Crossfade into Studio Dossier (#080c14) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080c14] via-[#070b09]/80 to-transparent pointer-events-none z-0"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Industrial PCB Bus Diagnostic Header (No Layer Numbers) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-3.5 rounded-lg bg-[#050806]/90 border border-amber-500/35 mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px]"
          >
            <div className="flex items-center gap-2.5 text-amber-400 font-bold uppercase tracking-widest">
              <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
              <span>HARDWARE TINKERING, REVERSE-ENGINEERING &amp; APPLIED ENGINE LAB</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>WORKBENCH: ACTIVE</span>
              </span>
              <span className="text-amber-500/50">|</span>
              <span className="text-amber-300/80">MOCAP // USB_HID // SHADERS</span>
            </div>
          </motion.div>

          {/* Section Headline & Tinkerer Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
                <Wrench className="w-3.5 h-3.5 text-amber-400" />
                <span>Hands-On Hardware Hacker &amp; Systems Builder</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-amber-50 tracking-tight font-['Space_Grotesk',sans-serif] uppercase leading-[1.08]">
                If a Tool Costs £10,000 or Doesn&apos;t Exist, I Build It Myself.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                I don&apos;t just use game engines out of the box. When I needed motion capture on a student budget, I fused an Xbox Kinect with PlayStation VR gyros over Python OSC. When vendor RGB/LCD software bloated my custom watercooled PC, I sniffed the raw 64-byte USB HID packets in Wireshark and wrote my own drivers. Here is the exact hardware and engine work from my bench.
              </p>
            </div>

            <div className="px-4 py-3 rounded-xl bg-[#070c09]/95 border border-emerald-500/35 font-mono text-xs text-emerald-300 shrink-0">
              <div className="text-[10px] uppercase tracking-widest text-amber-400/90 mb-0.5">
                Custom Rig &amp; Driver Proof
              </div>
              <div className="font-bold text-white">
                4 Scratch-Built Hardware &amp; Systems Logs
              </div>
            </div>
          </motion.div>

          {/* 2x2 Grid of Deep-Dive Hardware & Reverse-Engineering Bench Logs (Zero Text Cutoff) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            {HARDWARE_BENCH_PROJECTS.map((bench, idx) => (
              <motion.article
                key={bench.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-2xl bg-[#070c09]/95 border border-amber-500/35 hover:border-amber-400/70 shadow-[0_20px_50px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Top Visual Header Banner */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-black border-b border-amber-500/25">
                    <img
                      src={getAssetUrl(bench.image)}
                      alt={bench.title}
                      className="w-full h-full object-cover opacity-55 hover:opacity-75 transition-opacity duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070c09] via-[#070c09]/45 to-transparent" />

                    {/* Top Tag & Action Links */}
                    <div className="absolute top-3 inset-x-4 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded bg-black/85 border border-amber-500/45 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md">
                        {bench.tag}
                      </span>

                      <div className="flex items-center gap-2">
                        {bench.links?.github && (
                          <a
                            href={bench.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/85 hover:bg-amber-500 hover:text-slate-950 text-amber-200 border border-amber-500/40 text-[11px] font-mono font-semibold transition-colors backdrop-blur-md"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source</span>
                          </a>
                        )}
                        {bench.links?.demo && (
                          <a
                            href={bench.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/90 hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 border border-emerald-500/50 text-[11px] font-mono font-semibold transition-colors backdrop-blur-md"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Tool</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title Overlay at Bottom of Banner */}
                    <div className="absolute bottom-3 inset-x-5">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk',sans-serif] leading-tight">
                        {bench.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Full Non-Truncated Tech Stack Bar */}
                    <div className="p-2.5 rounded-lg bg-[#0b130f] border border-emerald-500/30 flex items-start gap-2 text-xs font-mono text-emerald-300 leading-relaxed">
                      <Terminal className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="break-words">{bench.subtitle}</span>
                    </div>

                    {/* Problem vs How I Built It */}
                    <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                      <div className="p-3.5 rounded-xl bg-amber-950/20 border-l-2 border-amber-400 text-slate-200">
                        <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 mb-1">
                          The Problem I Hit:
                        </span>
                        {bench.problem}
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-950/15 border-l-2 border-emerald-400 text-slate-200">
                        <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 mb-1">
                          How I Built / Reverse-Engineered It:
                        </span>
                        {bench.tinkeringSolution}
                      </div>
                    </div>

                    {/* Proof Points */}
                    <ul className="space-y-1.5 pt-1">
                      {bench.proofPoints.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom 4-Stage Hardware Signal Flow Footer */}
                <div className="px-5 py-3.5 bg-[#050806] border-t border-amber-500/20">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80 mb-2">
                    Signal &amp; Data Pipeline:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {bench.pipeline.map((step, sIdx) => (
                      <div key={step} className="inline-flex items-center gap-1.5">
                        <span className="px-2 py-1 rounded bg-[#0c1410] border border-amber-500/30 text-[11px] font-mono text-amber-100">
                          {step}
                        </span>
                        {sIdx < bench.pipeline.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Applied Production Ledger: "Where I Used Every Engine & Shader Skill" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl bg-[#060a08]/95 border border-amber-500/35 p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-amber-500/25">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Zero Buzzwords // Verified Production Index</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                  Where I Built Each Engine, Shader &amp; Physics System
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Every technical skill mapped directly to a shipped build above
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {APPLIED_ENGINE_LEDGER.map((col) => (
                <div
                  key={col.domain}
                  className="p-5 rounded-xl bg-[#0a100d] border border-amber-500/25 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 pb-2.5 mb-3.5 border-b border-amber-500/20">
                      {col.domain}
                    </h4>
                    <div className="space-y-3.5">
                      {col.items.map((entry) => (
                        <div key={entry.skill} className="space-y-1">
                          <div className="text-xs sm:text-sm font-bold text-white font-['Space_Grotesk',sans-serif]">
                            {entry.skill}
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {entry.where}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

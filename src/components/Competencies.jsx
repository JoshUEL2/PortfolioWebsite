import { motion } from 'framer-motion';
import { Wrench, ExternalLink, Cpu, Terminal, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { HARDWARE_BENCH_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { getAssetUrl } from '../utils/assetUrl';
import { audioEngine } from '../utils/audioEngine';

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
    <section id="toolkit" className="relative py-20 px-4 sm:px-6 lg:px-12 bg-[#070814] border-t border-indigo-500/25">
      <div className="max-w-[1360px] mx-auto w-full">
        {/* Diagnostic Header Bar */}
        <div className="p-3 rounded-xl bg-[#0c0a22]/90 border border-indigo-500/25 mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] shadow-sm">
          <div className="flex items-center gap-2 text-indigo-300 font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>ENGINE LAB // HARDWARE WORKBENCH &amp; REVERSE-ENGINEERING</span>
          </div>
          <div className="flex items-center gap-3 text-emerald-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BENCH: ONLINE</span>
            </span>
            <span className="text-indigo-500/40">|</span>
            <span className="text-slate-400">MOCAP // USB_HID // SHADERS</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-indigo-500/25">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0c0a22]/90 border border-indigo-500/35 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3 shadow-sm">
              <Wrench className="w-3.5 h-3.5 text-amber-400" />
              <span>Systems Builder &amp; Technical Toolmaker</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk',sans-serif] uppercase leading-[1.05]">
              If a Tool Costs £10,000 or Doesn&apos;t Exist, I Build It Myself.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
              I don&apos;t just use engines off-the-shelf. When I needed motion capture on a student budget, I fused an Xbox Kinect with PlayStation VR gyros over Python OSC. When vendor RGB/LCD software bloated my custom watercooled PC, I sniffed raw 64-byte USB HID packets in Wireshark and wrote custom device drivers.
            </p>
          </div>

          <div className="px-4 py-3 rounded-xl bg-[#0c0a22]/90 border border-indigo-500/35 font-mono text-xs text-indigo-300 shrink-0 shadow-sm">
            <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">
              SYSTEM LOGS
            </div>
            <div className="font-bold text-white">
              4 Production Hardware &amp; Tooling Builds
            </div>
          </div>
        </div>

        {/* 2x2 Grid of Hardware Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {HARDWARE_BENCH_PROJECTS.map((bench) => (
            <article
              key={bench.id}
              className="rounded-2xl bg-[#0c0a22]/90 border border-indigo-500/25 hover:border-indigo-400/60 shadow-[0_0_35px_rgba(99,102,241,0.12)] overflow-hidden flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Banner */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-black border-b border-indigo-500/25">
                  <img
                    src={getAssetUrl(bench.image)}
                    alt={bench.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a22] via-transparent to-transparent" />

                  <div className="absolute top-3 inset-x-4 flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded bg-black/80 border border-indigo-400/40 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-300">
                      {bench.tag}
                    </span>

                    <div className="flex items-center gap-2 font-mono">
                      {bench.links?.github && (
                        <a
                          href={bench.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => audioEngine.playTick(600, 150)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#09071a] hover:bg-[#161338] text-[#F8FAFC] border border-indigo-500/35 text-[11px] transition-colors"
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
                          onClick={() => audioEngine.playTick(600, 150)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#09071a] hover:bg-[#161338] text-indigo-300 border border-indigo-500/40 text-[11px] transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Tool</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-3 inset-x-4">
                    <h3 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif] uppercase leading-tight">
                      {bench.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-4">
                  <div className="p-2 rounded bg-[#06070D] border border-[#1A2234] flex items-start gap-2 text-xs font-mono text-[#00F2FE]">
                    <Terminal className="w-3.5 h-3.5 text-[#00F2FE] shrink-0 mt-0.5" />
                    <span>{bench.subtitle}</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm font-['Plus_Jakarta_Sans',sans-serif]">
                    <div className="p-3 rounded bg-[#06070D] border border-[#1A2234] text-[#94A3B8]">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#F59E0B]/10 text-[10px] font-mono font-bold uppercase tracking-wider text-[#F59E0B] mb-1.5 border border-[#F59E0B]/20">
                        PROBLEM ENCOUNTERED:
                      </span>
                      <p className="mt-1">{bench.problem}</p>
                    </div>

                    <div className="p-3 rounded bg-[#06070D] border border-[#1A2234] text-[#94A3B8]">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#00F2FE]/10 text-[10px] font-mono font-bold uppercase tracking-wider text-[#00F2FE] mb-1.5 border border-[#00F2FE]/20">
                        HOW I ENGINEERED IT:
                      </span>
                      <p className="mt-1">{bench.tinkeringSolution}</p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {bench.proofPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-[#94A3B8] font-['Plus_Jakarta_Sans',sans-serif]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00F2FE] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pipeline Footer */}
              <div className="px-5 py-3 bg-[#080C14] border-t border-[#1A2234]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] mb-1.5">
                  SIGNAL &amp; DATA PIPELINE:
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {bench.pipeline.map((step, sIdx) => (
                    <div key={step} className="inline-flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-[#06070D] border border-[#1A2234] text-[10px] font-mono text-[#F8FAFC]">
                        {step}
                      </span>
                      {sIdx < bench.pipeline.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-[#00F2FE] shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Applied Production Ledger */}
        <div className="rounded bg-[#0D111A] border border-[#1A2234] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-[#1A2234]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00F2FE] font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VERIFIED PRODUCTION INDEX</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif] uppercase">
                Where I Implemented Each Engine, Shader &amp; Physics System
              </h3>
            </div>
            <span className="text-xs font-mono text-[#64748B]">
              Every entry verified in a shipped build
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {APPLIED_ENGINE_LEDGER.map((col) => (
              <div
                key={col.domain}
                className="p-4 rounded bg-[#080C14] border border-[#1A2234] space-y-4"
              >
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00F2FE] pb-2 border-b border-[#1A2234]">
                  {col.domain}
                </h4>
                <div className="space-y-3">
                  {col.items.map((entry) => (
                    <div key={entry.skill} className="space-y-1">
                      <div className="text-xs font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif]">
                        {entry.skill}
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
                        {entry.where}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

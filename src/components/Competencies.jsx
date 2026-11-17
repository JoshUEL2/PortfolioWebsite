import { motion } from 'framer-motion';
import { Wrench, ExternalLink, Cpu, Terminal, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { HARDWARE_BENCH_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './Icons';

const APPLIED_ENGINE_LEDGER = [
  {
    domain: 'Unreal Engine 5 Gameplay & Maths',
    items: [
      {
        skill: '360° Polar Cross-Section Gravity & Spline Banking',
        where: 'Built for Rastacats (92% 1st Class) to maintain wheel traction across vertical walls and inverted cylindrical ceiling loops.'
      },
      {
        skill: '37-State Hierarchical Finite State Machine (HFSM)',
        where: 'Built for my State Machine Showcase to govern movement, ledge-mantling, and environment transitions without Animator spaghetti.'
      },
      {
        skill: 'Hierarchical Instanced Mesh (HISM) Object Pooling',
        where: 'Built for Rastacats Remastered to recycle thousands of spline pipe segments with deterministic zero-GC frame times.'
      }
    ]
  },
  {
    domain: 'HLSL Shaders & Technical Art',
    items: [
      {
        skill: 'Anisotropic Kuwahara Watercolour Filter (HLSL)',
        where: 'Written in HLSL/Material nodes for REM (Myndwell Corp) to flatten shading noise into directional brushstrokes while preserving silhouettes.'
      },
      {
        skill: 'Curved-World WPO Vertex Deformation & Tangent Decals',
        where: 'Built in Rastacats Remastered to bend straight meshes on the GPU and project surface decals along cylindrical curvature.'
      },
      {
        skill: 'RenderDoc Capture Extraction & 23.999203° Matrix Calibration',
        where: 'Executed in Daydream Believer to extract geometry, pack 2,377 modular texture maps in Blender, and lock campus alignment.'
      }
    ]
  },
  {
    domain: 'VR Physics, AI & Multiplayer Networking',
    items: [
      {
        skill: 'OpenXR Wheelchair Tank Locomotion & Acoustic AI',
        where: 'Engineered for Delirium VR with coupled grip-torque locomotion, spring-loaded doors, and frustum-locked enemy states.'
      },
      {
        skill: 'Photon Engine Authoritative Multiplayer & Random Walker Gen',
        where: 'Built in Unity C# for Rand.io, synchronising real-time arena matches over procedurally validated tile maps.'
      },
      {
        skill: 'Frustum-Culled Non-Euclidean Corridor Swapping',
        where: 'Designed for Chanceway to silently reconfigure looping maze intersections outside the player view frustum.'
      }
    ]
  }
];

function BenchTelemetryVisual({ type }) {
  if (type === 'mocap') {
    return (
      <div className="h-44 sm:h-48 w-full bg-[#070b0f] border-b border-emerald-500/20 p-4 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300/80">
          <span>STREAM: UDP://127.0.0.1:9001 // 30 HZ</span>
          <span>QUAT_FUSION: ACTIVE</span>
        </div>
        <svg viewBox="0 0 420 90" className="w-full h-24">
          <rect x="8" y="20" width="84" height="50" rx="6" fill="#0d1512" stroke="#10b981" strokeOpacity="0.55" />
          <text x="50" y="43" textAnchor="middle" fill="#a7f3d0" fontSize="9" fontFamily="monospace">KINECT v2</text>
          <text x="50" y="56" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">IR 25-JOINT</text>

          <rect x="114" y="20" width="84" height="50" rx="6" fill="#0d1512" stroke="#38bdf8" strokeOpacity="0.55" />
          <text x="156" y="43" textAnchor="middle" fill="#bae6fd" fontSize="9" fontFamily="monospace">PSVR MOVE</text>
          <text x="156" y="56" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">6DOF IMU QUAT</text>

          <path d="M92 45 L114 45 M198 45 L220 45 M308 45 L330 45" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

          <rect x="220" y="16" width="88" height="58" rx="6" fill="#10181d" stroke="#f59e0b" strokeOpacity="0.65" />
          <text x="264" y="42" textAnchor="middle" fill="#fde68a" fontSize="9" fontFamily="monospace">PYTHON OSC</text>
          <text x="264" y="55" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">SLERP FILTER</text>

          <rect x="330" y="20" width="82" height="50" rx="6" fill="#0c1322" stroke="#38bdf8" strokeOpacity="0.7" />
          <text x="371" y="43" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace">UE5 RIG</text>
          <text x="371" y="56" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="monospace">LIVELINK</text>
        </svg>
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>GIMBAL LOCK: SOLVED</span>
          <span>OCCLUSION RECOVERY: &lt;16ms</span>
        </div>
      </div>
    );
  }

  if (type === 'hid') {
    return (
      <div className="h-44 sm:h-48 w-full bg-[#070b0f] border-b border-amber-500/20 p-4 flex flex-col justify-between font-mono text-[10px]">
        <div className="flex items-center justify-between text-amber-300/80">
          <span>WIRESHARK // USBPCAP INTERRUPT OUT</span>
          <span>64-BYTE PAYLOAD</span>
        </div>
        <div className="space-y-1.5 bg-[#05070a] border border-white/10 rounded-lg p-2.5 text-[10px] leading-snug">
          <div className="flex justify-between text-slate-400">
            <span>OFFSET 0x00:</span>
            <span className="text-sky-300">A1 03 00 FF 1B 40 00 80</span>
            <span className="text-emerald-400">HEADER_SYNC</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>OFFSET 0x08:</span>
            <span className="text-amber-300">2C 7A E4 00 10 00 64 00</span>
            <span className="text-amber-300">LED_PWM_CH1</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>OFFSET 0x10:</span>
            <span className="text-rose-300">0F 44 12 00 9A 00 00 55</span>
            <span className="text-slate-300">PSU_LCD_DATA</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-slate-400">
          <span>VID:PID MATCHED</span>
          <span>ZERO VENDOR BLOAT</span>
        </div>
      </div>
    );
  }

  if (type === 'waterblock') {
    return (
      <div className="h-44 sm:h-48 w-full bg-[#070b0f] border-b border-sky-500/20 p-4 flex flex-col justify-between font-mono text-[10px]">
        <div className="flex items-center justify-between text-sky-300/85">
          <span>HYDROSCREEN-XC7 // DIRECT USB HID</span>
          <span>RYZEN 9 5950X + RTX 4070</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-1">
          <div className="p-2.5 rounded-lg bg-[#0c121a] border border-sky-400/25">
            <div className="text-slate-400 text-[9px]">COOLANT</div>
            <div className="text-base font-bold text-sky-300 mt-0.5">29.4°C</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#0c121a] border border-emerald-400/25">
            <div className="text-slate-400 text-[9px]">LOOP FLOW</div>
            <div className="text-base font-bold text-emerald-300 mt-0.5">150 L/h</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#0c121a] border border-amber-400/25">
            <div className="text-slate-400 text-[9px]">RENDERER</div>
            <div className="text-base font-bold text-amber-300 mt-0.5">C# .NET</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-slate-400">
          <span>XC7 RGB ELITE LCD: 60Hz</span>
          <span>THERMISTOR MAPPED</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-44 sm:h-48 w-full bg-[#070b0f] border-b border-emerald-500/20 p-4 flex flex-col justify-between font-mono text-[10px]">
      <div className="flex items-center justify-between text-emerald-300/85">
        <span>GRAPH ROUTER + AI VOICE PIPELINE</span>
        <span>DIJKSTRA / CONVAI</span>
      </div>
      <svg viewBox="0 0 420 82" className="w-full h-20">
        <line x1="35" y1="45" x2="145" y2="25" stroke="#38bdf8" strokeWidth="2" />
        <line x1="145" y1="25" x2="275" y2="55" stroke="#10b981" strokeWidth="2" />
        <line x1="275" y1="55" x2="385" y2="30" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="35" cy="45" r="7" fill="#0c121e" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="145" cy="25" r="7" fill="#0c121e" stroke="#10b981" strokeWidth="2" />
        <circle cx="275" cy="55" r="7" fill="#0c121e" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="385" cy="30" r="7" fill="#0c121e" stroke="#38bdf8" strokeWidth="2" />
        <text x="35" y="70" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">CSV_TAP</text>
        <text x="145" y="12" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontFamily="monospace">INTERCHANGE</text>
        <text x="275" y="75" textAnchor="middle" fill="#fde68a" fontSize="8" fontFamily="monospace">DIJKSTRA_COST</text>
        <text x="385" y="16" textAnchor="middle" fill="#bae6fd" fontSize="8" fontFamily="monospace">LEAFLET_GIS</text>
      </svg>
      <div className="flex items-center justify-between text-slate-400">
        <span>TFL-PLANNER + REALSPEAK</span>
        <span>CLIENT-SIDE SOLVER</span>
      </div>
    </div>
  );
}

export default function Competencies() {
  return (
    <section id="toolkit" className="relative w-full overflow-hidden">
      <div className="bg-circuit-pattern border-t border-white/10 pt-24 pb-24 relative">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Top Diagnostic Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-3.5 rounded-xl bg-[#0b0e14] border border-emerald-500/30 mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px]"
          >
            <div className="flex items-center gap-2.5 text-amber-300 font-bold uppercase tracking-widest">
              <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
              <span>HARDWARE ENGINEERING, REVERSE-ENGINEERING &amp; APPLIED ENGINE LAB</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                <span>WORKBENCH: ACTIVE</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-sky-300/85">MOCAP // USB_HID // SHADERS</span>
            </div>
          </motion.div>

          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
                <Wrench className="w-3.5 h-3.5 text-amber-400" />
                <span>First-Principles Hardware &amp; Systems Builder</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif] leading-[1.08]">
                If a Custom Pipeline Doesn&apos;t Exist, I Engineer It Myself.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                I build beyond default engine wrappers. To stream upper-body motion capture into UE5 LiveLink without a commercial studio capture room, I fused an Xbox Kinect with PlayStation Move gyros over Python OSC. To strip bloated vendor daemons off my custom watercooled loop, I captured 64-byte USB HID transfers in Wireshark and authored open-source C# and JS drivers.
              </p>
            </div>

            <div className="px-4 py-3 rounded-xl bg-[#0b0e14] border border-emerald-500/30 font-mono text-xs text-emerald-300 shrink-0">
              <div className="text-[10px] uppercase tracking-widest text-amber-400/90 mb-0.5">
                Custom Rig &amp; Driver Proof
              </div>
              <div className="font-bold text-white">
                {HARDWARE_BENCH_PROJECTS.length} Scratch-Built Systems Logs
              </div>
            </div>
          </motion.div>

          {/* 2x2 Grid of Interactive Bench Telemetry Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
            {HARDWARE_BENCH_PROJECTS.map((bench, idx) => (
              <motion.article
                key={bench.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-2xl bg-[#0b0e14] border border-white/10 hover:border-emerald-400/45 shadow-xl overflow-hidden flex flex-col justify-between transition-colors"
              >
                <div>
                  {/* Live Hardware Telemetry Header */}
                  <div className="relative">
                    <BenchTelemetryVisual type={bench.visualType} />

                    <div className="px-5 pt-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/35 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300">
                        {bench.tag}
                      </span>

                      <div className="flex items-center gap-2">
                        {bench.links?.github && (
                          <a
                            href={bench.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#121620] hover:bg-amber-500 hover:text-slate-950 text-amber-200 border border-amber-500/35 text-[11px] font-mono font-semibold transition-colors"
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
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/90 hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 border border-emerald-500/45 text-[11px] font-mono font-semibold transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Tool</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="px-5 pt-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk',sans-serif] leading-tight">
                        {bench.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="p-2.5 rounded-lg bg-[#07090f] border border-emerald-500/25 flex items-start gap-2 text-xs font-mono text-emerald-300 leading-relaxed">
                      <Terminal className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="break-words">{bench.subtitle}</span>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                      <div className="pl-3.5 border-l-2 border-amber-400 text-slate-200">
                        <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 mb-0.5">
                          Engineering Challenge:
                        </span>
                        {bench.problem}
                      </div>

                      <div className="pl-3.5 border-l-2 border-emerald-400 text-slate-200">
                        <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 mb-0.5">
                          Implementation &amp; Driver Design:
                        </span>
                        {bench.tinkeringSolution}
                      </div>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {bench.proofPoints.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Signal Flow Footer */}
                <div className="px-5 py-3.5 bg-[#07090f] border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                    Signal &amp; Data Pipeline:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {bench.pipeline.map((step, sIdx) => (
                      <div key={step} className="inline-flex items-center gap-1.5">
                        <span className="px-2 py-1 rounded bg-[#121620] border border-white/10 text-[11px] font-mono text-slate-200">
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

          {/* Applied Production Ledger */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-[#0b0e14] border border-white/10 p-6 sm:p-8 shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
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
                Every technical skill mapped directly to shipped builds above
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {APPLIED_ENGINE_LEDGER.map((col) => (
                <div
                  key={col.domain}
                  className="p-5 rounded-xl bg-[#07090f] border border-white/10 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 pb-2.5 mb-3.5 border-b border-white/10">
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

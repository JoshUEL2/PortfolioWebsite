import { motion } from 'framer-motion';
import { Award, UserCheck, ShieldCheck, GraduationCap, ArrowUpRight, FileText, Clapperboard, Building2 } from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_MODULES } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-dossier-grid border-t border-slate-700/70 text-slate-100 overflow-hidden"
    >
      {/* Top Atmospheric Transition from Layer 03 PCB (#070b09) to Layer 04 Studio Dossier (#080c14) */}
      <div className="h-14 w-full bg-gradient-to-b from-[#070b09] to-transparent pointer-events-none" />

      {/* Top Executive Dossier Identification Bar */}
      <div className="max-w-6xl mx-auto px-4 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-700/80 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-sky-300 font-bold">LAYER 04 // STUDIO CANDIDATE DOSSIER &amp; ACADEMIC RECORD</span>
          </div>
          <div className="flex items-center gap-4">
            <span>REF: JJ-UEL-2026</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-emerald-400">STATUS: AVAILABLE FOR STUDIO ROLES</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14 sm:py-16">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-sky-300 text-xs font-mono uppercase tracking-wider mb-3">
              <UserCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Candidate Profile // Technical Game Designer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
              Josh Johnson
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              How I approach game development, mathematical problem-solving, and cross-disciplinary studio collaboration.
            </p>
          </div>

          {/* Quick Studio Summary Pill */}
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-[#0c121e] border border-slate-700/80 shrink-0">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Primary Base
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                London, United Kingdom
              </div>
            </div>
            <div className="h-7 w-px bg-slate-700/80" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Degree Standing
              </div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400">
                1st Class Honours Track
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Grounded First-Person Bio & Verified 1st Class Module Record */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Executive Statement Box */}
            <div className="relative p-6 rounded-xl bg-[#0c121e] border-l-4 border-l-sky-400 border border-slate-700/80 shadow-lg">
              <div className="text-[11px] font-mono uppercase tracking-widest text-sky-400 mb-1.5">
                Design &amp; Engineering Principle
              </div>
              <blockquote className="text-lg sm:text-2xl font-extrabold text-white font-['Syne',sans-serif] leading-snug">
                &ldquo;{PERSONAL_INFO.motto}&rdquo;
              </blockquote>
            </div>

            {/* First-Person Bio Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#0c121e]/90 border border-slate-700/70 space-y-4 text-slate-200 leading-relaxed font-normal text-sm sm:text-base">
              <p>
                I&apos;m a <strong className="text-white font-semibold">Technical Game Designer</strong> studying BSc (Hons) Computer Games Design at the{' '}
                <strong className="text-white font-semibold">University of East London (UEL)</strong>, where I also serve as{' '}
                <strong className="text-white font-semibold">School Representative</strong> for Architecture, Computing &amp; Engineering and sat on the{' '}
                <strong className="text-white font-semibold">Sextennial School Review</strong> panel reviewing the university&apos;s computing and games degrees.
              </p>
              <p>
                I gravitate toward the problems that sit right on the boundary between game design, maths, and technical art. When our spline-based pipe racer{' '}
                <strong className="text-white font-semibold">Rastacats (92%, 1st Class)</strong> needed players to ride seamlessly up walls and upside-down across ceilings, I bypassed Unreal Engine 5&apos;s default planar gravity and wrote a custom polar cross-section controller, then followed it up in my remaster with a curved-world WPO vertex shader and tangent-aligned decal projection maths.
              </p>
              <p>
                Before focusing full-time on games, I spent over five years acting on stage and screen. That background directly shapes how I direct performance capture, block cameras inside Unreal Engine, and write interactive dialogue. It also led me to build{' '}
                <strong className="text-white font-semibold">Project K.I.N.E.T.I.C.</strong>, a DIY motion-capture rig fusing an Xbox Kinect v2 with PSVR Move gyros over Python OSC to animate UE5 MetaHumans on a student budget.
              </p>
            </div>

            {/* Verified First-Class Honours Module Ledger */}
            <div className="p-6 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                  Verified Academic Transcript Ledger (UEL BSc Computer Games Design)
                </span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-semibold">
                  8x 1st Class Honours Modules
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ACADEMIC_MODULES.map((mod) => (
                  <div
                    key={mod.name}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#080c14] border border-slate-800 text-xs"
                  >
                    <div className="truncate pr-2">
                      <span className="text-slate-200 font-medium">{mod.name}</span>
                    </div>
                    <span className="font-mono font-bold text-sky-300 shrink-0">{mod.mark}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CV & Profile Links */}
            <div className="flex flex-wrap gap-3 pt-1">
              {PERSONAL_INFO.cv && (
                <a
                  href={getAssetUrl(PERSONAL_INFO.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Full CV (PDF)</span>
                </a>
              )}

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0c121e] hover:bg-slate-800 text-sky-300 font-semibold text-xs tracking-wider uppercase border border-slate-700 transition-all"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0c121e] hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-slate-700 transition-all"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Structured Studio Credentials & Verification Cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Card 1: Royal Docks Dual Showcase */}
            <div className="p-5 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  CREDENTIAL // 01
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
                  EXHIBITION HONOUR
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-950/60 text-amber-300 border border-amber-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Royal Docks Showcase Recognition</h3>
                  <p className="text-xs text-amber-300 font-medium">Sole L5 in Graduating L6 Hall &amp; Sole Playable VR</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                <em>Rastacats</em> was chosen by faculty as the only Year 2 (Level 5) game to exhibit downstairs alongside graduating final-year Level 6 projects, while <em>Delirium</em> was the only fully working, playable VR build on the Level 5 showcase floor.
              </p>
            </div>

            {/* Card 2: Academic Representation & Leadership */}
            <div className="p-5 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  CREDENTIAL // 02
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-300">
                  ACADEMIC GOVERNANCE
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-sky-950/60 text-sky-300 border border-sky-500/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">School Representative &amp; Review Panellist</h3>
                  <p className="text-xs text-sky-300 font-medium">University of East London (BSc Games Design)</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Elected to represent students across the School of Architecture, Computing &amp; Engineering, and served on the Sextennial School Review board evaluating studio coursework and technical modules.
              </p>
            </div>

            {/* Card 3: Performance Capture & Acting Background */}
            <div className="p-5 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  CREDENTIAL // 03
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300">
                  DIRECTION &amp; MOCAP
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-rose-950/60 text-rose-300 border border-rose-500/30">
                  <Clapperboard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Performance Capture &amp; Stage Direction</h3>
                  <p className="text-xs text-rose-300 font-medium">5+ Years Stage &amp; Screen Acting Experience</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Combines hands-on acting experience with technical animation pipelines (LiveLink, custom Kinect+PSVR mocap sensor fusion, and spatial camera blocking for interactive cutscenes).
              </p>
            </div>

            {/* Card 4: Technical Certifications & National Finals */}
            <div className="p-5 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  CREDENTIAL // 04
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300">
                  VERIFIED CERTIFICATIONS
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Technical Certifications &amp; Finals</h3>
                  <p className="text-xs text-emerald-300 font-medium">Programming, Robotics &amp; Systems</p>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 mt-2">
                <li>• <strong className="text-white">Programming:</strong> PCAP Certified Python, Harvard CS50x &amp; Univ. of Glasgow Haskell</li>
                <li>• <strong className="text-white">VEX Robotics:</strong> UK National Championship Finalist</li>
                <li>• <strong className="text-white">CyberCenturion:</strong> Top 60 UK National Linux Security Finalist</li>
                <li>• <strong className="text-white">Industry Experience:</strong> IT Systems Engineering (Dragon IS) &amp; 3+ yrs team ops</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Award, UserCheck, ShieldCheck, GraduationCap, ArrowUpRight, FileText, Clapperboard } from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_MODULES } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/25 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-3">
          <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>04 // Background &amp; Academic Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
          About Josh Johnson
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-2xl">
          How I approach game development, technical problem-solving, and studio collaboration.
        </p>
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
          {/* Motto Box */}
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-[#0c0e1c] to-[#0c0e1c] border border-indigo-500/30 backdrop-blur-xl shadow-lg">
            <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 mb-1.5">
              How I Work
            </div>
            <blockquote className="text-lg sm:text-2xl font-extrabold text-white font-['Syne',sans-serif] leading-snug italic">
              &ldquo;{PERSONAL_INFO.motto}&rdquo;
            </blockquote>
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed font-normal text-sm sm:text-base">
            <p>
              I&apos;m a <strong className="text-white font-semibold">Technical Game Designer</strong> studying BSc (Hons) Computer Games Design at the{' '}
              <strong className="text-white font-semibold">University of East London (UEL)</strong>, where I also serve as{' '}
              <strong className="text-white font-semibold">School Representative</strong> for Architecture, Computing &amp; Engineering and sat on the{' '}
              <strong className="text-white font-semibold">Sextennial School Review</strong> panel reviewing the university&apos;s computing and games degrees.
            </p>
            <p>
              I gravitate toward the problems that sit right on the boundary between game design, maths, and technical art. When our spline-based pipe racer{' '}
              <strong className="text-white font-semibold">Rastacats (92%, 1st Class)</strong> needed players to ride seamlessly up walls and upside-down across ceilings, I bypassed Unreal Engine 5&apos;s default planar gravity and wrote a custom polar cross-section controller—then followed it up in my remaster with a curved-world WPO vertex shader and tangent-aligned decal projection maths.
            </p>
            <p>
              Before focusing full-time on games, I spent over five years acting on stage and screen. That background directly shapes how I direct performance capture, block cameras inside Unreal Engine, and write interactive dialogue—even leading me to build{' '}
              <strong className="text-white font-semibold">Project K.I.N.E.T.I.C.</strong>, a DIY motion-capture rig fusing an Xbox Kinect v2 with PSVR Move gyros over Python OSC to animate UE5 MetaHumans on a student budget.
            </p>
          </div>

          {/* Verified First-Class Honours Module Record */}
          <div className="p-5 rounded-2xl bg-[#0c0e1c]/85 border border-white/10 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-bold">
                Verified Academic Transcript Highlights (UEL BSc Computer Games Design)
              </span>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                8× 1st Class Honours Modules
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ACADEMIC_MODULES.map((mod) => (
                <div
                  key={mod.code}
                  className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs"
                >
                  <div className="truncate pr-2">
                    <span className="font-mono text-indigo-300 font-semibold mr-1.5">{mod.code}</span>
                    <span className="text-slate-300">{mod.name}</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-300 shrink-0">{mod.mark}</span>
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-indigo-900/30 transition-all hover:scale-[1.03]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Full CV (PDF)</span>
              </a>
            )}

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-semibold text-xs tracking-wider uppercase border border-indigo-500/30 transition-all hover:scale-[1.03]"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/10 transition-all hover:scale-[1.03]"
            >
              <span>GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Focused Game-Dev Proof Cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Card 1: Royal Docks Dual Showcase */}
          <div className="p-5 rounded-2xl bg-[#0c0e1c]/85 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400 border border-amber-500/30">
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
          <div className="p-5 rounded-2xl bg-[#0c0e1c]/85 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">School Representative &amp; Review Panelist</h3>
                <p className="text-xs text-indigo-300 font-medium">University of East London (BSc Games Design)</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Elected to represent students across the School of Architecture, Computing &amp; Engineering, and served on the Sextennial School Review board evaluating studio coursework and technical modules.
            </p>
          </div>

          {/* Card 3: Performance Capture & Acting Background */}
          <div className="p-5 rounded-2xl bg-[#0c0e1c]/85 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-rose-950/60 text-rose-400 border border-rose-500/30">
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
          <div className="p-5 rounded-2xl bg-[#0c0e1c]/85 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-violet-950/60 text-violet-400 border border-violet-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Technical Certifications &amp; Finals</h3>
                <p className="text-xs text-violet-300 font-medium">Programming, Robotics &amp; Systems</p>
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
    </section>
  );
}

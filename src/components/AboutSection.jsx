import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  UserCheck,
  ShieldCheck,
  ArrowUpRight,
  FileText,
  Clapperboard,
  Building2,
  Cpu,
  Radio,
  X,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_MODULES, DOSSIER_CREDENTIALS } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

const CREDENTIAL_ICONS = {
  theatre: Clapperboard,
  exhibition: Award,
  cyber: ShieldCheck,
  robotics: Cpu,
  studio: Radio
};

const CREDENTIAL_THEME_STYLES = {
  theatre: {
    cardAccent: 'border-rose-500/40 hover:border-rose-400 bg-gradient-to-br from-[#1b0b12] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
    badgeText: 'text-rose-300 bg-rose-950/70 border-rose-500/40',
    modalBg: 'bg-[radial-gradient(ellipse_at_top,#4c0519_0%,#1c060c_55%,#090406_100%)] border-amber-400/50',
    headerAccent: 'text-amber-300',
    whyBox: 'bg-rose-950/40 border-amber-400/60 text-amber-50'
  },
  exhibition: {
    cardAccent: 'border-amber-500/35 hover:border-amber-400 bg-gradient-to-br from-[#191309] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    badgeText: 'text-amber-300 bg-amber-950/70 border-amber-500/40',
    modalBg: 'bg-[radial-gradient(ellipse_at_top,#3b2506_0%,#14110b_60%,#080a0f_100%)] border-amber-400/45',
    headerAccent: 'text-amber-300',
    whyBox: 'bg-amber-950/35 border-amber-400/60 text-amber-50'
  },
  cyber: {
    cardAccent: 'border-emerald-500/35 hover:border-emerald-400 bg-gradient-to-br from-[#071914] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    badgeText: 'text-emerald-300 bg-emerald-950/70 border-emerald-500/40',
    modalBg: 'bg-[radial-gradient(ellipse_at_top,#063729_0%,#071512_60%,#050a09_100%)] border-emerald-400/45',
    headerAccent: 'text-emerald-300',
    whyBox: 'bg-emerald-950/35 border-emerald-400/60 text-emerald-50'
  },
  robotics: {
    cardAccent: 'border-sky-500/35 hover:border-sky-400 bg-gradient-to-br from-[#091826] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-sky-950/80 text-sky-300 border-sky-500/40',
    badgeText: 'text-sky-300 bg-sky-950/70 border-sky-500/40',
    modalBg: 'bg-[radial-gradient(ellipse_at_top,#0c2d48_0%,#081420_60%,#050911_100%)] border-sky-400/45',
    headerAccent: 'text-sky-300',
    whyBox: 'bg-sky-950/35 border-sky-400/60 text-sky-50'
  },
  studio: {
    cardAccent: 'border-purple-500/35 hover:border-purple-400 bg-gradient-to-br from-[#160d24] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
    badgeText: 'text-purple-300 bg-purple-950/70 border-purple-500/40',
    modalBg: 'bg-[radial-gradient(ellipse_at_top,#2e1065_0%,#130924_60%,#07050c_100%)] border-purple-400/45',
    headerAccent: 'text-purple-300',
    whyBox: 'bg-purple-950/35 border-purple-400/60 text-purple-50'
  }
};

export default function AboutSection() {
  const [activeCredential, setActiveCredential] = useState(null);
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);
  const [curtainKey, setCurtainKey] = useState(0);

  const handleOpenCredential = (cred) => {
    setSelectedPhotoIdx(0);
    setCurtainKey((prev) => prev + 1);
    setActiveCredential(cred);
  };

  useEffect(() => {
    if (!activeCredential) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveCredential(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeCredential]);

  return (
    <section
      id="about"
      className="relative w-full bg-dossier-grid border-t border-slate-700/70 text-slate-100 overflow-hidden"
    >
      {/* Top Atmospheric Transition from PCB (#070b09) to Studio Dossier (#080c14) */}
      <div className="h-14 w-full bg-gradient-to-b from-[#070b09] to-transparent pointer-events-none" />

      {/* Top Executive Dossier Identification Bar (No Layer Numbers) */}
      <div className="max-w-6xl mx-auto px-4 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-700/80 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-sky-300 font-bold">STUDIO CANDIDATE DOSSIER &amp; VERIFIED CREDENTIALS</span>
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
              How I approach game development, mathematical problem-solving, and cross-disciplinary studio collaboration. Click any credential on the right to inspect the full story and archival photos.
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
                Before focusing full-time on games, I spent over five years acting on stage in musicals like <em>Les Misérables</em> and <em>The Addams Family</em> as well as acting on film sets. That background directly shapes how I direct performance capture, block cameras inside Unreal Engine, and write interactive dialogue. It also led me to build{' '}
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

          {/* Right Column: Interactive Clickable Credential Dossiers */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-3.5"
          >
            <div className="flex items-center justify-between px-1 pb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                Interactive Credentials // Click Any Card
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                5 Verified Dossiers
              </span>
            </div>

            {DOSSIER_CREDENTIALS.map((cred, idx) => {
              const IconComponent = CREDENTIAL_ICONS[cred.theme] || Award;
              const style = CREDENTIAL_THEME_STYLES[cred.theme] || CREDENTIAL_THEME_STYLES.exhibition;
              const previewThumb = cred.images?.[0]?.src;

              return (
                <button
                  key={cred.id}
                  type="button"
                  onClick={() => handleOpenCredential(cred)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 ${style.cardAccent}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      CREDENTIAL 0{idx + 1} // {cred.category}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-mono font-bold uppercase tracking-wider ${style.badgeText}`}>
                      <span>{cred.badge}</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    {previewThumb ? (
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/15 shrink-0 relative">
                        <img
                          src={getAssetUrl(previewThumb)}
                          alt={cred.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className={`p-2.5 rounded-lg border shrink-0 ${style.iconBox}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-sky-300 transition-colors leading-snug">
                        {cred.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium mt-0.5">
                        {cred.subtitle}
                      </p>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                        {cred.shortSummary}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Interactive Credential Modal with Stage Curtain Animation for Theatre */}
      <AnimatePresence>
        {activeCredential && (
          <motion.div
            key={activeCredential.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCredential(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            {(() => {
              const style =
                CREDENTIAL_THEME_STYLES[activeCredential.theme] ||
                CREDENTIAL_THEME_STYLES.exhibition;
              const isTheatre = activeCredential.theme === 'theatre';
              const photos = activeCredential.images || [];
              const currentPhoto = photos[selectedPhotoIdx] || photos[0];

              return (
                <motion.div
                  initial={{ scale: 0.94, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  transition={{ duration: 0.35 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`relative w-full max-w-5xl rounded-2xl border-2 shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden my-auto ${style.modalBg}`}
                >
                  {/* THEMED STAGE CURTAIN ANIMATION FOR MUSICAL THEATRE & ACTING */}
                  {isTheatre && (
                    <div
                      key={`curtain-${curtainKey}`}
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
                    >
                      {/* Top Gold-Trimmed Velvet Pelmet / Valance */}
                      <div className="absolute top-0 inset-x-0 h-5 bg-gradient-to-b from-[#7f1d1d] to-[#450a0a] border-b-2 border-amber-400/80 shadow-lg" />

                      {/* Left Crimson Velvet Stage Curtain Panel */}
                      <motion.div
                        initial={{ x: '0%' }}
                        animate={{ x: '-94%' }}
                        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-amber-400/90 shadow-[25px_0_60px_rgba(0,0,0,0.95)]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(90deg, #450a0a 0px, #7f1d1d 22px, #991b1b 36px, #450a0a 56px)'
                        }}
                      >
                        <div className="absolute inset-y-0 right-2 w-1 bg-amber-300/40" />
                      </motion.div>

                      {/* Right Crimson Velvet Stage Curtain Panel */}
                      <motion.div
                        initial={{ x: '0%' }}
                        animate={{ x: '94%' }}
                        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-amber-400/90 shadow-[-25px_0_60px_rgba(0,0,0,0.95)]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(90deg, #450a0a 0px, #7f1d1d 22px, #991b1b 36px, #450a0a 56px)'
                        }}
                      >
                        <div className="absolute inset-y-0 left-2 w-1 bg-amber-300/40" />
                      </motion.div>

                      {/* Warm Stage Spotlight Cone */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.4 }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.16),transparent_65%)]"
                      />
                    </div>
                  )}

                  {/* Modal Header */}
                  <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 px-6 sm:px-10 pt-7 pb-5 border-b border-white/15 bg-black/40">
                    <div>
                      <div className={`text-xs font-mono uppercase tracking-[0.2em] font-bold ${style.headerAccent}`}>
                        {activeCredential.category}
                      </div>
                      <h3 className="text-xl sm:text-3xl font-extrabold text-white font-['Syne',sans-serif] mt-1">
                        {activeCredential.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                        {activeCredential.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {isTheatre && (
                        <button
                          type="button"
                          onClick={() => setCurtainKey((prev) => prev + 1)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/35 text-amber-200 border border-amber-400/50 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Replay Curtain</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setActiveCredential(null)}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
                        aria-label="Close credential dossier"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Modal Body: Photo Stage & Full Narrative */}
                  <div className="relative z-20 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-h-[80vh] overflow-y-auto">
                    {/* Left 7 Columns: Archival Photo Stage + Thumbnails */}
                    <div className="lg:col-span-7 space-y-3.5">
                      {currentPhoto && (
                        <div className="rounded-xl overflow-hidden bg-black/90 border border-white/20 shadow-2xl">
                          <div className="aspect-video w-full relative flex items-center justify-center bg-black">
                            <img
                              src={getAssetUrl(currentPhoto.src)}
                              alt={currentPhoto.caption}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="px-4 py-3 bg-black/80 border-t border-white/10 flex items-center justify-between gap-3">
                            <span className="text-xs sm:text-sm text-slate-200 font-medium">
                              {currentPhoto.caption}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400 shrink-0">
                              {selectedPhotoIdx + 1} / {photos.length}
                            </span>
                          </div>
                        </div>
                      )}

                      {photos.length > 1 && (
                        <div className="grid grid-cols-4 gap-2.5">
                          {photos.map((img, i) => (
                            <button
                              key={img.src}
                              type="button"
                              onClick={() => setSelectedPhotoIdx(i)}
                              className={`rounded-lg overflow-hidden aspect-video border-2 transition-all cursor-pointer ${
                                i === selectedPhotoIdx
                                  ? 'border-amber-400 scale-[1.02] opacity-100 shadow-md'
                                  : 'border-white/15 opacity-60 hover:opacity-95'
                              }`}
                            >
                              <img
                                src={getAssetUrl(img.src)}
                                alt={img.caption}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right 5 Columns: Full Story, Game Dev Connection & Proof Points */}
                    <div className="lg:col-span-5 space-y-5">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                          Behind the Scenes
                        </h4>
                        <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                          {activeCredential.story}
                        </p>
                      </div>

                      <div className={`p-4 rounded-xl border-l-4 ${style.whyBox}`}>
                        <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>How This Shapes My Game Development</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed">
                          {activeCredential.whyItMattersForGames}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {activeCredential.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

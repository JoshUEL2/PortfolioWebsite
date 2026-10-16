import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Gamepad2, Sparkles, Terminal, CheckCircle2, Video, Award, History, Layers, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';

export default function CaseStudyModal({ project, onClose }) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const displayNum = project.number || (project.catalogNumber ? `#${project.catalogNumber}` : '');

  const hasSplitPhases = Boolean(project?.splitPhases && project.splitPhases.length > 0);
  const currentPhase = hasSplitPhases ? project.splitPhases[activePhaseIndex] : null;

  const activeTitle = currentPhase ? currentPhase.title : project.title;
  const activeSubtitle = currentPhase ? currentPhase.phaseSubtitle : (project.tagline || project.categoryLabel);
  const activeSummary = currentPhase ? currentPhase.summary : (project.summary || project.shortDesc);
  const activeHighlights = currentPhase ? currentPhase.highlights : project.highlights;
  const activeDeepDive = currentPhase ? currentPhase.technicalDeepDive : project.technicalDeepDive;
  const activeVideo = currentPhase?.video !== undefined ? currentPhase.video : project.video;
  const activeImage = currentPhase?.image || project.image;
  const activeGallery = currentPhase?.gallery || project.gallery;

  const youtubeId =
    currentPhase?.youtubeId ||
    project.youtubeId ||
    (project.links?.video
      ? project.links.video.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1]
      : null);


  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0d0f1e] border border-indigo-500/30 rounded-3xl shadow-[0_0_80px_rgba(99,102,241,0.25)] overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090b16]">
            <div className="flex items-center gap-3">
              {displayNum && (
                <span className="font-mono text-xl font-bold text-indigo-400">
                  {displayNum}
                </span>
              )}
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                {project.discipline || project.categoryLabel}
              </span>
              {(project.id === 'delirium' || Boolean(project.funFact) || project.shortDesc?.includes('Sole Level 5')) && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-violet-950/80 border border-violet-500/40 text-violet-300">
                  <Award className="w-3.5 h-3.5 text-violet-400" />
                  Sole L5 Exhibitor
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Dual-Phase Evolution Switcher (for Daydream and Rastacats) */}
            {hasSplitPhases && (
              <div className="bg-[#080a15] border border-indigo-500/30 rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <History className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        Project Evolution & Version History
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Toggle between the original academic submission and the revisited remaster
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    Phase {activePhaseIndex + 1} of {project.splitPhases.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.splitPhases.map((phase, idx) => {
                    const isSelected = activePhaseIndex === idx;
                    return (
                      <button
                        key={phase.id || idx}
                        onClick={() => setActivePhaseIndex(idx)}
                        className={`py-3.5 px-4 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between gap-2 ${
                          isSelected
                            ? 'bg-gradient-to-r from-indigo-950/90 via-indigo-900/80 to-violet-950/90 border-indigo-400 text-white shadow-lg shadow-indigo-950/60 ring-1 ring-indigo-400/50'
                            : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/5 text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm font-extrabold tracking-wide flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-indigo-400 animate-pulse' : 'bg-slate-600'}`} />
                            {phase.phaseLabel}
                          </span>
                          {phase.phaseBadge && (
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 shrink-0">
                              {phase.phaseBadge}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400 line-clamp-1 font-medium">
                          {phase.phaseSubtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Hero Media: Coursework Video, YouTube Video, or Artwork */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-h-96 bg-black border border-white/10 flex items-center justify-center">
              {activeVideo ? (
                <video
                  key={activeVideo}
                  src={getAssetUrl(activeVideo)}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : youtubeId ? (
                <iframe
                  key={youtubeId}
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                  title={`${activeTitle} Video Showcase`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={getAssetUrl(activeImage)}
                    alt={activeTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1e] via-transparent to-transparent opacity-80 pointer-events-none" />
                </>
              )}
            </div>

            {/* Title & Engine Subtitle */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {currentPhase?.phaseBadge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    {currentPhase.phaseBadge}
                  </span>
                )}
                {hasSplitPhases && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-indigo-950/80 border border-indigo-500/40 text-indigo-300">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    {currentPhase ? currentPhase.phaseLabel : 'Evolution View'}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-['Syne',sans-serif] tracking-tight">
                {activeTitle}
              </h2>
              <p className="text-sm font-semibold text-indigo-300 mt-1">
                {activeSubtitle} • <span className="font-mono text-slate-300">{project.engine}</span>
              </p>
            </div>

            {/* Concept Artwork & Production Gallery (if available) */}
            {activeGallery && activeGallery.length > 0 && (
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Authentic Coursework Concept Art & Model Sheets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeGallery.map((artSrc, aIdx) => (
                    <a
                      key={aIdx}
                      href={getAssetUrl(artSrc)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl overflow-hidden border border-white/10 bg-slate-950 aspect-[4/3] group relative block cursor-pointer"
                      title="Click to view full resolution"
                    >
                      <img
                        src={getAssetUrl(artSrc)}
                        alt={`${activeTitle} Artifact ${aIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-mono text-white/90 font-medium">
                        View Full Resolution ↗
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Overview & Context */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
                Executive Summary
              </h4>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal whitespace-pre-line">
                {activeSummary}
              </p>
            </div>

            {/* Did You Know? Exhibition Brag & Recognition */}
            {project.funFact && (
              <div className="bg-gradient-to-r from-violet-950/70 via-purple-900/40 to-indigo-950/70 border border-violet-500/40 rounded-2xl p-5 shadow-xl flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-violet-500/20 text-violet-300 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-violet-300" />
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-violet-300 uppercase tracking-wider font-mono mb-1">
                    Did You Know? • Exhibition Brag & Industry Recognition
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {project.funFact}
                  </p>
                </div>
              </div>
            )}

            {/* Technical Highlights */}
            {activeHighlights && activeHighlights.length > 0 && (
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Innovations & Achievements
                </h4>
                <ul className="space-y-3">
                  {activeHighlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Deep Dive */}
            {activeDeepDive && (
              <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  Engineering Problem & Architecture Solution
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal whitespace-pre-line">
                  {activeDeepDive}
                </p>
              </div>
            )}

          </div>

          {/* Modal Footer Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-[#090b16]">
            <span className="text-xs font-mono text-slate-400">
              {project.studio} • {project.dates}
            </span>

            <div className="flex flex-wrap items-center gap-3">
              {project.links?.itch && (
                <a
                  href={project.links.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>Play on Itch.io</span>
                </a>
              )}

              {project.links?.video && !youtubeId && (
                <a
                  href={project.links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <Video className="w-4 h-4" />
                  <span>Watch Video</span>
                </a>
              )}

              {project.links?.gdd && (
                <a
                  href={getAssetUrl(project.links.gdd)}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 font-semibold text-xs tracking-wider uppercase border border-amber-500/40 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Download GDD</span>
                </a>
              )}

              {isSpecificRepo(project.links?.github) && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {isSpecificLinkedIn(project.links?.linkedin) && (
                <a
                  href={project.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 font-semibold text-xs tracking-wider uppercase border border-blue-500/40 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}

              {project.links?.demo && !project.links?.itch && !project.links?.video && !youtubeId && (
                <a
                  href={getAssetUrl(project.links.demo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

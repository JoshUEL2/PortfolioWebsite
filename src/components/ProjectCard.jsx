import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Gamepad2,
  BookOpen,
  Clapperboard,
  Award,
  Code2,
  Layers,
  Terminal,
  History
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';

export default function ProjectCard({ project, onSelectProject }) {
  const hasSplitPhases = Boolean(project.splitPhases && project.splitPhases.length > 0);
  // Default to Phase 1 (index 0), or allow instant live switching on the card
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  // Toggle between 'overview' ("What I Built") and 'code' ("Under the Hood: Math & Logic")
  const [viewMode, setViewMode] = useState('overview');

  const currentPhase = hasSplitPhases ? project.splitPhases[activePhaseIndex] : null;

  const activeTitle = currentPhase ? currentPhase.title : project.title;
  const activeTagline = currentPhase ? currentPhase.phaseSubtitle : project.tagline;
  const activeDesc = currentPhase ? currentPhase.summary : project.shortDesc;
  const activeHighlights = currentPhase ? currentPhase.highlights : project.highlights;
  const activeDeepDive = currentPhase ? currentPhase.technicalDeepDive : project.technicalDeepDive;
  const activeVideo = currentPhase?.video !== undefined ? currentPhase.video : project.video;
  const activeImage = currentPhase?.image || project.image;

  const youtubeId =
    currentPhase?.youtubeId ||
    project.youtubeId ||
    (project.links?.video
      ? project.links.video.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1]
      : null);

  const isLiveDemo =
    Boolean(project.links?.demo) &&
    !project.links.demo.includes('github.com') &&
    !project.links.demo.includes('itch.io');

  const handleOpenCaseStudy = () => {
    onSelectProject({
      ...project,
      initialPhaseIndex: activePhaseIndex
    });
  };

  const handleKeyActivate = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpenCaseStudy();
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-3xl bg-[#0a0c18]/90 border border-white/10 hover:border-indigo-500/40 p-6 md:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-[0_12px_45px_rgba(99,102,241,0.15)]"
    >
      {/* Optional On-Card Phase Switcher Bar (Rastacats & Daydream Believer) */}
      {hasSplitPhases && (
        <div className="mb-6 p-2.5 rounded-2xl bg-[#060811] border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 px-2">
            <History className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-200">
              Live Build Evolution: Switch Version
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
            {project.splitPhases.map((phase, idx) => {
              const isSelected = activePhaseIndex === idx;
              return (
                <button
                  key={phase.id || idx}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-400 shadow-md shadow-indigo-950/60'
                      : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-slate-200 border-white/10'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-emerald-300 animate-pulse' : 'bg-slate-600'
                    }`}
                  />
                  <span className="truncate">{phase.phaseLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Details, Interactive Mode Toggle & Technical Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Top Metadata Row: Number, Discipline, Single Grade Badge, Single Exhibition Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-mono text-2xl md:text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                {project.number}
              </span>
              <div className="h-4 w-[1px] bg-white/15" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-950/70 border border-indigo-500/35 text-indigo-200">
                {project.discipline}
              </span>

              {project.statusTag && (
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${
                    project.statusTag.color === 'emerald'
                      ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                      : project.statusTag.color === 'amber'
                      ? 'bg-amber-950/80 border-amber-500/40 text-amber-300'
                      : 'bg-sky-950/80 border-sky-500/40 text-sky-300'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.statusTag.color === 'emerald'
                        ? 'bg-emerald-400'
                        : project.statusTag.color === 'amber'
                        ? 'bg-amber-400'
                        : 'bg-sky-400'
                    }`}
                  />
                  {project.statusTag.label}
                </span>
              )}

              {project.gradeBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Award className="w-3 h-3 text-emerald-400" />
                  {project.gradeBadge}
                </span>
              )}

              {project.exhibitionBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-violet-950/80 border border-violet-500/40 text-violet-200">
                  <Award className="w-3 h-3 text-violet-400" />
                  {project.exhibitionBadge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3
              onClick={handleOpenCaseStudy}
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1.5 font-['Syne',sans-serif] group-hover:text-indigo-200 transition-colors cursor-pointer"
            >
              {activeTitle}
            </h3>

            {/* Tagline & Engine */}
            <p className="text-xs sm:text-sm font-semibold text-indigo-300 mb-4 flex flex-wrap items-center gap-2">
              <span>{activeTagline}</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-xs text-slate-400">{project.engine}</span>
            </p>

            {/* On-Card View Mode Switcher: [What I Built] vs [Under the Hood: Math & Logic] */}
            {(activeDeepDive || project.codeSnippet) && (
              <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#060811] border border-white/10 mb-4">
                <button
                  type="button"
                  onClick={() => setViewMode('overview')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'overview'
                      ? 'bg-indigo-600/30 text-white border border-indigo-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span>What I Built</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('code')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'code'
                      ? 'bg-indigo-600/30 text-indigo-200 border border-indigo-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Under the Hood: Maths &amp; Logic</span>
                </button>
              </div>
            )}

            {viewMode === 'overview' ? (
              <>
                {/* First-Person Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {activeDesc}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2 mb-5">
                  {activeHighlights.slice(0, 4).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Understated Exhibition Context (if present) */}
                {project.funFact && (
                  <div className="mb-5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono font-bold text-violet-300 uppercase tracking-wider text-[10px] mr-2">
                        Exhibition Note:
                      </span>
                      <span>{project.funFact}</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Under the Hood: Math & Logic View */
              <div className="space-y-4 mb-5">
                {activeDeepDive && (
                  <div className="p-4 rounded-2xl bg-indigo-950/25 border border-indigo-500/30">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Engineering Problem & How I Solved It</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {activeDeepDive}
                    </p>
                  </div>
                )}

                {project.codeSnippet && (
                  <div className="rounded-2xl bg-[#05070e] border border-white/10 overflow-hidden">
                    <div className="px-3.5 py-2 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        Implementation Logic / Shader Snippet
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {project.engine}
                      </span>
                    </div>
                    <pre className="p-3.5 text-[11px] sm:text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10">
            {project.links?.itch && (
              <a
                href={project.links.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-rose-900/30 hover:scale-[1.03] active:scale-95 transition-all"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Play on Itch.io</span>
              </a>
            )}

            {project.links?.gdd && (
              <a
                href={getAssetUrl(project.links.gdd)}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600/25 hover:bg-amber-600/40 text-amber-200 font-semibold text-xs tracking-wider uppercase border border-amber-500/40 hover:scale-[1.03] active:scale-95 transition-all"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Download GDD</span>
              </a>
            )}

            {project.links?.video && !youtubeId && (
              <a
                href={getAssetUrl(project.links.video)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/25 hover:bg-red-600/40 text-red-200 font-semibold text-xs tracking-wider uppercase border border-red-500/40 hover:scale-[1.03] active:scale-95 transition-all"
              >
                <Clapperboard className="w-4 h-4 text-red-400" />
                <span>Watch Video</span>
              </a>
            )}

            {isSpecificRepo(project.links?.github) && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/10 hover:scale-[1.03] active:scale-95 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            {isSpecificLinkedIn(project.links?.linkedin) && (
              <a
                href={project.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-sky-300 hover:text-white font-semibold text-xs tracking-wider uppercase border border-[#0077b5]/30 hover:scale-[1.03] active:scale-95 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>Dev Post</span>
              </a>
            )}

            {isLiveDemo && (
              <a
                href={getAssetUrl(project.links.demo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-semibold text-xs tracking-wider uppercase border border-indigo-500/30 hover:scale-[1.03] active:scale-95 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Play in Browser</span>
              </a>
            )}

            <button
              onClick={handleOpenCaseStudy}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-indigo-600/30 text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/10 hover:border-indigo-500/40 transition-all ml-auto cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full Breakdown & Gallery</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Gameplay Video or Artwork Viewport */}
        <div className="lg:col-span-5">
          {activeVideo ? (
            <div
              role="button"
              tabIndex={0}
              onClick={handleOpenCaseStudy}
              onKeyDown={handleKeyActivate}
              aria-label={`Open ${activeTitle} breakdown`}
              className="relative group/vid cursor-pointer overflow-hidden rounded-2xl bg-black border border-white/15 shadow-2xl aspect-[16/10] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <video
                key={activeVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={activeImage ? getAssetUrl(activeImage) : undefined}
                className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-500 ease-out"
              >
                <source src={getAssetUrl(activeVideo)} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/vid:opacity-100 transition-opacity" />

              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white pointer-events-none z-10 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {hasSplitPhases ? `Phase ${activePhaseIndex + 1} Capture` : 'Gameplay Capture'}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-0 group-hover/vid:opacity-100 transition-all duration-300 z-10">
                <span className="font-semibold text-[11px]">
                  Open Full Breakdown & {currentPhase?.gallery?.length || project.gallery?.length || 0} Captures
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
          ) : youtubeId ? (
            <div className="relative overflow-hidden rounded-2xl bg-black border border-white/15 shadow-2xl aspect-[16/10] flex items-center justify-center">
              <iframe
                key={youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1&rel=0&modestbranding=1`}
                title={`${activeTitle} Video Preview`}
                className="w-full h-full border-0 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white pointer-events-none z-10 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Gameplay Capture
              </div>
            </div>
          ) : (
            <div
              role="button"
              tabIndex={0}
              onClick={handleOpenCaseStudy}
              onKeyDown={handleKeyActivate}
              aria-label={`Open ${activeTitle} breakdown`}
              className="relative group/img cursor-pointer overflow-hidden rounded-2xl bg-slate-950 border border-white/15 shadow-2xl aspect-[16/10] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <img
                src={getAssetUrl(activeImage)}
                alt={activeTitle}
                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-0 group-hover/img:opacity-100 transition-all duration-300 z-10">
                <span className="font-semibold text-[11px]">
                  Open Full Breakdown & Diagrams
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
          )}

          {/* Thumbnail Strip Preview underneath the main media if gallery has multiple images */}
          {(currentPhase?.gallery || project.gallery)?.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mt-3">
              {(currentPhase?.gallery || project.gallery).slice(0, 4).map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={handleOpenCaseStudy}
                  className="relative rounded-lg overflow-hidden aspect-[16/10] border border-white/10 hover:border-indigo-400/60 bg-slate-950 group/t cursor-pointer"
                  title="Click to inspect full gallery"
                >
                  <img
                    src={getAssetUrl(thumb)}
                    alt={`${activeTitle} preview ${tIdx + 1}`}
                    className="w-full h-full object-cover group-hover/t:scale-110 transition-transform duration-300 opacity-80 group-hover/t:opacity-100"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Gamepad2,
  Sparkles,
  Terminal,
  CheckCircle2,
  Clapperboard,
  Award,
  History,
  Layers,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Code2,
  Globe,
  FileCode
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';
import { MARKETING_REPOS } from '../data/marketingReposData';

export default function CaseStudyModal({ project, onClose }) {
  const versions = project?.versions || project?.splitPhases || null;
  const hasVersions = Boolean(versions && versions.length > 0);

  const [activeVersionIndex, setActiveVersionIndex] = useState(
    project?.initialVersionIndex  -  -  project?.initialPhaseIndex  -  -  0
  );
  const [lightboxIndex, setLightboxIndex] = useState(null);
  // 'live' | 'source'
  const [marketingSubTab, setMarketingSubTab] = useState('live');
  const [activeRepoFileIdx, setActiveRepoFileIdx] = useState(0);

  const currentVersion = hasVersions ? versions[activeVersionIndex] : null;
  const activeGallery = currentVersion?.gallery || project?.gallery || [];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') {
          setLightboxIndex(null);
        } else if (e.key === 'ArrowRight' && activeGallery.length > 0) {
          setLightboxIndex((prev) => (prev + 1) % activeGallery.length);
        } else if (e.key === 'ArrowLeft' && activeGallery.length > 0) {
          setLightboxIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
        }
        return;
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, lightboxIndex, activeGallery.length]);

  if (!project) return null;

  const activeTitle = project.title;
  const activeSubtitle =
    currentVersion?.label ||
    currentVersion?.phaseSubtitle ||
    project.tagline ||
    project.categoryLabel;
  const activeSummary = currentVersion?.summary || project.summary || project.shortDesc;
  const activeHighlights = currentVersion?.highlights || project.highlights || [];
  const activeDeepDive = currentVersion?.technicalDeepDive || project.technicalDeepDive;
  const activeVideo =
    currentVersion?.videoPreview !== undefined ? currentVersion.videoPreview
      : currentVersion?.video !== undefined ? currentVersion.video
      : project.videoPreview || project.video;
  const activeImage = currentVersion?.image || project.image;
  const activeEngine = currentVersion?.engine || project.engine;
  const activeDates = currentVersion?.dates || project.dates;

  const repoData = project.marketingSite?.repoSlug ? MARKETING_REPOS[project.marketingSite.repoSlug]
    : null;
  const repoFiles = repoData?.files || [];
  const currentRepoFile = repoFiles[activeRepoFileIdx] || repoFiles[0] || null;

  const isLiveDemo =
    Boolean(project.links?.demo) &&
    !project.links.demo.includes('github.com') &&
    !project.links.demo.includes('itch.io') &&
    !project.links.demo.endsWith('.docx');

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
          <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 border-b border-white/10 bg-[#090b16]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                {project.discipline || project.categoryLabel}
              </span>
              <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                {activeDates}
              </span>
              {project.marketingSite && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Embedded Companion Portal &amp; Repo Code</span>
                </span>
              )}
              {project.gradeBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  {project.gradeBadge}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-7">
            {/* Dual-Phase Evolution Switcher (for Rastacats and Daydream Believer) */}
            {hasVersions && (
              <div className="bg-[#080a15] border border-indigo-500/35 rounded-2xl p-4 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-indigo-500/20 text-emerald-400">
                      <History className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        {project.title}  -  Select Project Iteration
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Compare the original prototype against the revisited remaster
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/35 text-emerald-300 font-bold">
                    {currentVersion?.badge || `Iteration ${activeVersionIndex + 1} of ${versions.length}`}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {versions.map((ver, idx) => {
                    const isSelected = activeVersionIndex === idx;
                    return (
                      <button
                        key={ver.id || idx}
                        type="button"
                        onClick={() => {
                          setActiveVersionIndex(idx);
                          setLightboxIndex(null);
                        }}
                        className={`py-3.5 px-4 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between gap-1.5 ${
                          isSelected ? 'bg-gradient-to-r from-indigo-950/90 via-indigo-900/80 to-violet-950/90 border-indigo-400 text-white shadow-lg shadow-indigo-950/60 ring-1 ring-indigo-400/50'
                            : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/5 text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm font-extrabold tracking-wide flex items-center gap-2">
                            <span
                              className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                                isSelected ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'
                              }`}
                            />
                            <span>{ver.label || ver.phaseLabel}</span>
                          </span>
                          {ver.badge && (
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 shrink-0">
                              {ver.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-indigo-200/80 pl-4">
                          {ver.engine} • {ver.dates}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Hero Media: Local Gameplay Capture or Artwork */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-h-96 bg-black border border-white/10 flex items-center justify-center">
              {activeVideo ? (
                <video
                  key={activeVideo}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster={activeImage ? getAssetUrl(activeImage) : undefined}
                  className="w-full h-full object-contain"
                >
                  <source src={getAssetUrl(activeVideo)} type="video/mp4" />
                </video>
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
              {hasVersions && (
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-indigo-950/80 border border-indigo-500/40 text-indigo-300">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{currentVersion?.label || 'Selected Iteration'}</span>
                  </span>
                </div>
              )}
              <h2 className="text-2xl sm:text-4xl font-black text-white font-['Syne',sans-serif] tracking-tight">
                {activeTitle}
              </h2>
              <p className="text-sm font-semibold text-indigo-300 mt-1">
                {activeSubtitle} • <span className="font-mono text-slate-300">{activeEngine}</span>
              </p>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
                Overview
              </h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line">
                {activeSummary}
              </p>
            </div>

            {/* EMBEDDED INTERACTIVE COMPANION WEBSITE & LITERAL REPO CODE */}
            {project.marketingSite && (
              <div className="rounded-2xl bg-[#060914] border-2 border-emerald-500/40 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.12)]">
                <div className="p-4 bg-gradient-to-r from-emerald-950/40 via-[#080d1a] to-indigo-950/40 border-b border-emerald-500/30 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-300 mb-1">
                      <Globe className="w-3.5 h-3.5 text-emerald-400" />
                      <span>EMBEDDED REPOSITORY BUILD &amp; SOURCE CODE</span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {project.marketingSite.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {project.marketingSite.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10">
                    <button
                      type="button"
                      onClick={() => setMarketingSubTab('live')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        marketingSubTab === 'live' ? 'bg-emerald-600 text-white shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Interactive Site</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMarketingSubTab('source')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        marketingSubTab === 'source' ? 'bg-indigo-600 text-white shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      <span>Literal Repo Code ({repoFiles.length} Files)</span>
                    </button>
                  </div>
                </div>

                {marketingSubTab === 'live' ? (
                  <div>
                    <div className="relative w-full h-[500px] bg-black">
                      <iframe
                        src={getAssetUrl(project.marketingSite.path)}
                        title={project.marketingSite.title}
                        className="w-full h-full border-0"
                        sandbox="allow-scripts allow-same-origin allow-modals"
                      />
                    </div>
                    <div className="px-4 py-3 bg-[#080b16] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-mono text-emerald-300">
                        Running live from embedded repository code ({project.marketingSite.path})
                      </span>
                      <div className="flex items-center gap-4">
                        <a
                          href={project.marketingSite.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-slate-300 hover:text-white"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>GitHub Repository</span>
                        </a>
                        <a
                          href={getAssetUrl(project.marketingSite.path)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono font-bold text-emerald-300 hover:text-emerald-200"
                        >
                          <span>Open Fullscreen in New Tab</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="px-4 py-2.5 bg-[#090d1a] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {repoFiles.map((file, fIdx) => (
                          <button
                            key={file.name}
                            type="button"
                            onClick={() => setActiveRepoFileIdx(fIdx)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                              activeRepoFileIdx === fIdx ? 'bg-indigo-600/40 text-white border border-indigo-400/50 font-bold'
                                : 'bg-white/5 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                            <span>{file.name}</span>
                            <span className="text-[10px] text-emerald-300">
                              ({file.totalLines} lines)
                            </span>
                          </button>
                        ))}
                      </div>
                      <a
                        href={project.marketingSite.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-300 hover:text-white"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View Repository on GitHub</span>
                      </a>
                    </div>

                    {currentRepoFile && (
                      <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto max-h-[460px] overflow-y-auto leading-relaxed bg-[#04060c]">
                        <code>{currentRepoFile.code}</code>
                      </pre>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* What I Built */}
            {activeHighlights && activeHighlights.length > 0 && (
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>What I Built</span>
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

            {/* Under the Hood: Problem & Solution */}
            {activeDeepDive && (
              <div className="bg-indigo-950/20 border border-indigo-500/25 rounded-2xl p-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span>Under the Hood: Problem &amp; Solution</span>
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal whitespace-pre-line">
                  {activeDeepDive}
                </p>
              </div>
            )}

            {/* Implementation Logic / Shader Snippet */}
            {project.codeSnippet && (
              <div className="rounded-2xl bg-[#060811] border border-white/10 overflow-hidden">
                <div className="px-4 py-2.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    <span>Implementation Logic / Shader Snippet</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500">{activeEngine}</span>
                </div>
                <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Captures, Concept Art & Diagrams Gallery (with Lightbox) */}
            {activeGallery && activeGallery.length > 0 && (
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>Project Captures, Concept Art &amp; Diagrams ({activeGallery.length})</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                    Click any image to expand
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeGallery.map((artSrc, aIdx) => (
                    <button
                      key={aIdx}
                      type="button"
                      onClick={() => setLightboxIndex(aIdx)}
                      className="rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/50 bg-slate-950 aspect-[4/3] group relative block cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      title="Click to inspect full resolution"
                    >
                      <img
                        src={getAssetUrl(artSrc)}
                        alt={`${activeTitle} Capture ${aIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-mono text-white/95 font-medium">
                        <ZoomIn className="w-4 h-4 text-indigo-400" />
                        <span>Expand Capture</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-[#090b16]">
            <span className="text-xs font-mono text-slate-400">
              {project.studio || project.role} • {activeDates}
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

              {project.links?.video && (
                <a
                  href={getAssetUrl(project.links.video)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <Clapperboard className="w-4 h-4" />
                  <span>YouTube Walkthrough</span>
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
                  <span>Source Code</span>
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

              {isLiveDemo && (
                <a
                  href={getAssetUrl(project.links.demo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Play in Browser</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Full-Screen Lightbox Overlay */}
        {lightboxIndex !== null && activeGallery[lightboxIndex] && (
          <div
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {activeGallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
                  }}
                  className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev + 1) % activeGallery.length);
                  }}
                  className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-3"
            >
              <img
                src={getAssetUrl(activeGallery[lightboxIndex])}
                alt={`${activeTitle} full resolution ${lightboxIndex + 1}`}
                className="max-w-full max-h-[78vh] object-contain rounded-2xl border border-white/15 shadow-2xl"
              />
              <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                <span>
                  Image {lightboxIndex + 1} of {activeGallery.length}
                </span>
                <a
                  href={getAssetUrl(activeGallery[lightboxIndex])}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Open Raw File ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}

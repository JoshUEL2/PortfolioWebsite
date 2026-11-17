import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  ExternalLink,
  Gamepad2,
  Terminal,
  Clapperboard,
  Award,
  Layers,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Code2,
  Globe,
  FileCode,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';
import EmbeddedBrowserViewport from './EmbeddedBrowserViewport';
import { getProjectTheme } from '../utils/projectThemes';
import { ProjectAtmosphere } from './gameAtmospheres';
import ProjectTheatricalEntrance from './ProjectTheatricalEntrance';
import { audioEngine } from '../utils/audioEngine';
import SafeVideoPlayer from './SafeVideoPlayer';

export default function CaseStudyModal({ project, onClose }) {
  const theme = getProjectTheme(project?.id);
  const versions = project?.versions || project?.splitPhases || null;
  const hasVersions = Boolean(versions && versions.length > 0);

  const [activeVersionIndex, setActiveVersionIndex] = useState(
    project?.initialVersionIndex ?? project?.initialPhaseIndex ?? 0
  );
  const [rightTab, setRightTab] = useState('overview'); // 'overview' | 'code' | 'marketing'
  const [lightboxIndex, setLightboxIndex] = useState(
    project?.initialLightboxIndex !== undefined ? project.initialLightboxIndex : null
  );
  const [marketingSubTab, setMarketingSubTab] = useState('live'); // 'live' | 'source'
  const [activeRepoFileIdx, setActiveRepoFileIdx] = useState(0);
  const [marketingRepos, setMarketingRepos] = useState(null);
  const isLoadingRepo = rightTab === 'marketing' && marketingSubTab === 'source' && !marketingRepos;
  const [theatricalKey] = useState(0);

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const currentVersion = hasVersions ? versions[activeVersionIndex] : null;
  const activeImage = currentVersion?.image || project?.image;
  const activeGallery =
    currentVersion?.gallery?.length > 0
      ? currentVersion.gallery
      : project?.gallery?.length > 0
      ? project.gallery
      : activeImage
      ? [activeImage]
      : [];

  // Lazy-load large repository source bundle only when user requests Companion Repo Source tab
  useEffect(() => {
    if (rightTab !== 'marketing' || marketingSubTab !== 'source' || marketingRepos) {
      return;
    }
    let cancelled = false;
    import('../data/marketingReposData')
      .then((mod) => {
        if (!cancelled) {
          setMarketingRepos(mod.MARKETING_REPOS || {});
        }
      })
      .catch(() => {
        if (!cancelled) setMarketingRepos({});
      });

    return () => {
      cancelled = true;
    };
  }, [rightTab, marketingSubTab, marketingRepos]);

  // Modal lifecycle: audio feedback, Escape/arrow keyboard navigation, scroll lock & focus restoration
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    audioEngine.playSweep();

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 30);

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') {
          e.preventDefault();
          setLightboxIndex(null);
        } else if (e.key === 'ArrowRight' && activeGallery.length > 0) {
          setLightboxIndex((prev) => (prev + 1) % activeGallery.length);
        } else if (e.key === 'ArrowLeft' && activeGallery.length > 0) {
          setLightboxIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
        }
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        audioEngine.playDismiss();
        onClose();
        return;
      }

      // Focus trap inside modal panel
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    currentVersion?.videoPreview !== undefined
      ? currentVersion.videoPreview
      : currentVersion?.video !== undefined
      ? currentVersion.video
      : project.videoPreview || project.video;
  const activeEngine = currentVersion?.engine || project.engine;
  const activeDates = currentVersion?.dates || project.dates;
  const hasSystemsContent = Boolean(
    activeDeepDive || project.codeSnippet || (project.architectureNodes && project.architectureNodes.length > 0)
  );

  const repoData =
    project.marketingSite?.repoSlug && marketingRepos
      ? marketingRepos[project.marketingSite.repoSlug]
      : null;
  const repoFiles = repoData?.files || [];
  const currentRepoFile = repoFiles[activeRepoFileIdx] || repoFiles[0] || null;

  const isLiveDemo =
    Boolean(project.links?.demo) && project.links.demo.startsWith('/games/');
  const isLabraz = project.id === 'labraz' || project.id === 'labrats';

  const handleClose = () => {
    audioEngine.playDismiss();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Panoramic 7/5 Engine Inspector Shell */}
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`relative w-full max-w-[1360px] max-h-[92vh] border rounded-2xl overflow-hidden z-10 flex flex-col my-auto ${theme.modalClass}`}
      >
        {/* Fast Non-Blocking Curtain Reveal & Outer Perimeter Effect */}
        <ProjectTheatricalEntrance projectId={project?.id} animationKey={theatricalKey} />
        <ProjectAtmosphere projectId={project?.id} isModal={true} />

        {/* SINGLE UNIFIED HEADER BAND (Opaque Header Floor: Perimeter effects never obscure title/icons) */}
        <div className="px-4 sm:px-7 pt-5 pb-4 border-b border-white/10 bg-[#0b0e14]/95 relative z-20 shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-300">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-500/15 border border-sky-400/35 text-sky-200 font-semibold">
                  {project.discipline || project.categoryLabel}
                </span>
                <span className="text-slate-500">•</span>
                <span>{activeDates}</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-300 truncate max-w-[320px] hidden sm:inline">
                  {activeEngine}
                </span>
                {project.gradeBadge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 font-bold">
                    <Award className="w-3 h-3 text-emerald-400" />
                    {project.gradeBadge}
                  </span>
                )}
                {project.id === 'rem' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-950/90 border border-cyan-400/40 text-cyan-200 font-bold">
                    <img
                      src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                      alt="Myndwell"
                      className="w-3.5 h-3.5 object-contain"
                    />
                    MYNDWELL CORP
                  </span>
                )}
                {project.id === 'delirium' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-rose-950/90 border border-rose-500/40 text-rose-200 font-bold">
                    <img
                      src={getAssetUrl('/images/logos/delirium-title-logo.png')}
                      alt="Delirium"
                      className="h-3 object-contain"
                    />
                  </span>
                )}
                {isLabraz && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-400/40 text-emerald-200 font-bold">
                    <img
                      src={getAssetUrl('/images/logos/labrats-logo-transparent.png')}
                      alt="LabR@z"
                      className="w-3.5 h-3.5 object-contain"
                    />
                    LABR@Z
                  </span>
                )}
              </div>

              <h2
                id="case-study-modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif] mt-2 leading-tight"
              >
                {activeTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                <span className="text-sky-300 font-medium">{activeSubtitle}</span>
                {project.studio && (
                  <>
                    <span className="text-slate-500 mx-1.5">•</span>
                    <span className="font-mono text-xs text-slate-400">{project.studio}</span>
                  </>
                )}
              </p>
            </div>

            {/* Right Corner: Inline Phase Toggle (desktop) + Pinned Accessible Close Button */}
            <div className="flex items-center gap-2.5 shrink-0">
              {hasVersions && (
                <div
                  role="group"
                  aria-label="Select project iteration"
                  className="hidden sm:inline-flex items-center bg-[#07090f] p-1 rounded-xl border border-white/15 gap-1"
                >
                  {versions.map((ver, idx) => {
                    const isSelected = activeVersionIndex === idx;
                    return (
                      <button
                        key={ver.id || idx}
                        type="button"
                        onClick={() => {
                          audioEngine.playTick(650 + idx * 80, 200);
                          setActiveVersionIndex(idx);
                          setLightboxIndex(null);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-sky-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {ver.badge || ver.label || `Phase ${idx + 1}`}
                      </button>
                    );
                  })}
                </div>
              )}

              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] text-slate-200 hover:text-white border border-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Compact Phase Switcher Row (Never pushes Close X off-screen at 375px) */}
          {hasVersions && (
            <div
              role="group"
              aria-label="Select project iteration"
              className="mt-3 sm:hidden flex items-center bg-[#07090f] p-1 rounded-xl border border-white/15 gap-1 w-full"
            >
              {versions.map((ver, idx) => {
                const isSelected = activeVersionIndex === idx;
                return (
                  <button
                    key={ver.id || idx}
                    type="button"
                    onClick={() => {
                      audioEngine.playTick(650 + idx * 80, 200);
                      setActiveVersionIndex(idx);
                      setLightboxIndex(null);
                    }}
                    className={`flex-1 px-2.5 py-1.5 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer truncate ${
                      isSelected
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {ver.badge || ver.label || `Phase ${idx + 1}`}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* PANORAMIC 7/5 INSPECTOR BODY */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 relative z-10 bg-[#07090f]/75">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* LEFT COLUMN (7 Cols): Media Stage, Captures Strip & Unified Opaque Action Dock */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Hero Media Stage (Full-width non-shrinking aspect-video) */}
              <div className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-black border flex items-center justify-center ${theme.mediaHolderClass}`}>
                {activeVideo ? (
                  <SafeVideoPlayer
                    src={activeVideo}
                    poster={activeImage}
                    title={activeTitle}
                    controls={true}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(0)}
                    aria-label={`Inspect ${activeTitle} full-resolution artwork`}
                    className="relative w-full h-full group cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400"
                  >
                    <img
                      src={getAssetUrl(activeImage)}
                      alt={activeTitle}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 border border-white/15 text-xs font-mono text-white flex items-center gap-1.5 opacity-85 group-hover:opacity-100">
                      <ZoomIn className="w-3.5 h-3.5 text-sky-400" />
                      <span>Expand Fullscreen</span>
                    </div>
                  </button>
                )}
              </div>

              {/* Thumbnail Strip */}
              {activeGallery.length > 0 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
                  {activeGallery.slice(0, 5).map((artSrc, aIdx) => (
                    <button
                      key={aIdx}
                      type="button"
                      onClick={() => {
                        audioEngine.playTick();
                        setLightboxIndex(aIdx);
                      }}
                      aria-label={`Expand ${activeTitle} image ${aIdx + 1} of ${activeGallery.length}`}
                      className="relative rounded-xl overflow-hidden border border-white/10 hover:border-sky-400/70 bg-slate-950 aspect-[16/10] group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <img
                        src={getAssetUrl(artSrc)}
                        alt={`${activeTitle} capture ${aIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 opacity-85 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                      {aIdx === 4 && activeGallery.length > 5 && (
                        <div className="absolute inset-0 bg-black/75 flex items-center justify-center text-[11px] font-mono font-bold text-sky-200">
                          +{activeGallery.length - 5}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* ONE Unified Opaque Action Dock (Eliminates Duplicate HUD + Footer Buttons) */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                {project.links?.itch && (
                  <a
                    href={project.links.itch}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioEngine.playPop()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs tracking-wider uppercase border border-rose-400/40 shadow-md transition-colors"
                  >
                    <Gamepad2 className="w-4 h-4 shrink-0" />
                    <span>Play on Itch.io</span>
                  </a>
                )}

                {isLiveDemo && (
                  <a
                    href={getAssetUrl(project.links.demo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioEngine.playPop()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs tracking-wider uppercase border border-sky-400/40 shadow-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    <span>Play in Browser</span>
                  </a>
                )}

                {project.links?.gdd && (
                  <a
                    href={getAssetUrl(project.links.gdd)}
                    download
                    onClick={() => audioEngine.playPop()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#78350f] hover:bg-[#92400e] text-amber-100 font-bold text-xs tracking-wider uppercase border border-amber-500/45 shadow-md transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Download GDD</span>
                  </a>
                )}

                {project.marketingSite && (
                  <button
                    type="button"
                    onClick={() => {
                      audioEngine.playPop();
                      setRightTab('marketing');
                      setMarketingSubTab('live');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#065f46] hover:bg-[#047857] text-emerald-100 font-bold text-xs tracking-wider uppercase border border-emerald-400/45 shadow-md transition-colors cursor-pointer"
                  >
                    <Globe className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Companion Site</span>
                  </button>
                )}

                {project.links?.video && (
                  <a
                    href={getAssetUrl(project.links.video)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioEngine.playPop()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#b91c1c] hover:bg-[#991b1b] text-white font-bold text-xs tracking-wider uppercase border border-red-400/45 shadow-md transition-colors"
                  >
                    <Clapperboard className="w-4 h-4 text-red-200 shrink-0" />
                    <span>YouTube Walkthrough</span>
                  </a>
                )}

                {isSpecificRepo(project.links?.github) && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioEngine.playPop()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-100 font-bold text-xs tracking-wider uppercase border border-slate-600/50 shadow-md transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 shrink-0" />
                    <span>Source Code</span>
                  </a>
                )}

                {isSpecificLinkedIn(project.links?.linkedin) && (
                  <a
                    href={project.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioEngine.playPop()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5] hover:bg-[#006097] text-white font-bold text-xs tracking-wider uppercase border border-sky-400/45 shadow-md transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 shrink-0" />
                    <span>View on LinkedIn</span>
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN (5 Cols): Flat Tabbed Technical Breakdown */}
            <div className="lg:col-span-5 flex flex-col min-w-0">
              {/* Tab Strip */}
              <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#0b0e14] border border-white/10 mb-5">
                <button
                  type="button"
                  onClick={() => {
                    audioEngine.playTick();
                    setRightTab('overview');
                  }}
                  className={`flex-1 min-w-[96px] px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    rightTab === 'overview'
                      ? 'bg-sky-600/25 text-white border border-sky-400/50'
                      : 'text-slate-400 hover:text-white border border-transparent'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>Overview</span>
                </button>

                {hasSystemsContent && (
                  <button
                    type="button"
                    onClick={() => {
                      audioEngine.playTick();
                      setRightTab('code');
                    }}
                    className={`flex-1 min-w-[116px] px-3 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      rightTab === 'code'
                        ? 'bg-sky-600/25 text-white border border-sky-400/50'
                        : 'text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Systems &amp; Code</span>
                  </button>
                )}

                {project.marketingSite && (
                  <button
                    type="button"
                    onClick={() => {
                      audioEngine.playTick();
                      setRightTab('marketing');
                    }}
                    className={`flex-1 min-w-[126px] px-3 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      rightTab === 'marketing'
                        ? 'bg-emerald-600/25 text-emerald-100 border border-emerald-400/50'
                        : 'text-slate-400 hover:text-emerald-200 border border-transparent'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Companion &amp; Repo</span>
                  </button>
                )}
              </div>

              {/* TAB 1: Flat Editorial Overview (divide-y instead of box-in-box nesting) */}
              {rightTab === 'overview' && (
                <div className="divide-y divide-white/10">
                  <div className="pb-4">
                    <h3 className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-bold mb-2">
                      Project Summary
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed whitespace-pre-line">
                      {activeSummary}
                    </p>
                  </div>

                  {activeHighlights && activeHighlights.length > 0 && (
                    <div className="py-4">
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-bold mb-2.5">
                        What I Built
                      </h3>
                      <ul className="space-y-2.5">
                        {activeHighlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.funFact && (
                    <div className="py-4">
                      <blockquote className="pl-3.5 border-l-2 border-amber-400/70 text-xs text-slate-300 leading-relaxed">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 block mb-0.5">
                          Exhibition &amp; Notes
                        </span>
                        {project.funFact}
                      </blockquote>
                    </div>
                  )}

                  {project.tools && project.tools.length > 0 && (
                    <div className="pt-4">
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Stack &amp; Tooling
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: Systems Architecture & Source Code */}
              {rightTab === 'code' && (
                <div className="space-y-5">
                  {project.architectureNodes && project.architectureNodes.length > 0 && (
                    <div>
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-bold mb-2.5 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>System Architecture Pipeline</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.architectureNodes.map((node, nIdx) => (
                          <div
                            key={nIdx}
                            className="p-2.5 rounded-xl bg-[#0b0e14] border border-white/10"
                          >
                            <div className="text-xs font-bold text-white leading-snug">
                              {node.label}
                            </div>
                            <div className="text-[11px] font-mono text-sky-300/85 mt-0.5 leading-snug">
                              {node.sub}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeDeepDive && (
                    <div className="pt-4 border-t border-white/10">
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-bold mb-2 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Engineering Problem &amp; Solution</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                        {activeDeepDive}
                      </p>
                    </div>
                  )}

                  {project.codeSnippet && (
                    <div className="rounded-xl bg-[#05070c] border border-white/10 overflow-hidden">
                      <div className="px-3.5 py-2 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                          Implementation Logic / Shader Snippet
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">{activeEngine}</span>
                      </div>
                      <pre className="p-3.5 text-xs font-mono text-slate-200 overflow-x-auto max-h-[340px] leading-relaxed">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Embedded Companion Website & Literal Repo Source */}
              {rightTab === 'marketing' && project.marketingSite && (
                <div className="rounded-xl bg-[#05070c] border border-emerald-500/35 overflow-hidden">
                  <div className="p-3.5 bg-[#0b1210] border-b border-emerald-500/25 flex flex-wrap items-center justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-xs font-bold text-white truncate">
                        {project.marketingSite.title}
                      </h3>
                      <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-2">
                        {project.marketingSite.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-white/10">
                      <button
                        type="button"
                        onClick={() => setMarketingSubTab('live')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                          marketingSubTab === 'live'
                            ? 'bg-emerald-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Globe className="w-3 h-3" />
                        <span>Live Site</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setMarketingSubTab('source')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                          marketingSubTab === 'source'
                            ? 'bg-sky-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <FileCode className="w-3 h-3" />
                        <span>Repo Code</span>
                      </button>
                    </div>
                  </div>

                  {marketingSubTab === 'live' ? (
                    <div>
                      <EmbeddedBrowserViewport
                        src={getAssetUrl(project.marketingSite.path)}
                        title={project.marketingSite.title}
                      />
                      <div className="px-3.5 py-2.5 bg-[#07090f] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <a
                          href={project.marketingSite.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-slate-300 hover:text-white"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Repository</span>
                        </a>
                        <a
                          href={getAssetUrl(project.marketingSite.path)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono font-bold text-emerald-300 hover:text-emerald-200"
                        >
                          <span>Fullscreen in New Tab</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ) : isLoadingRepo ? (
                    <div className="p-8 text-center text-xs font-mono text-slate-400">
                      Loading repository source files...
                    </div>
                  ) : (
                    <div>
                      <div className="px-3.5 py-2.5 bg-[#0b0e14] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {repoFiles.map((file, fIdx) => (
                            <button
                              key={file.name}
                              type="button"
                              onClick={() => setActiveRepoFileIdx(fIdx)}
                              className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1 ${
                                activeRepoFileIdx === fIdx
                                  ? 'bg-sky-600/35 text-white border border-sky-400/50 font-bold'
                                  : 'bg-white/5 text-slate-400 hover:text-white'
                              }`}
                            >
                              <FileCode className="w-3 h-3 text-sky-400" />
                              <span>{file.name}</span>
                              <span className="text-[10px] text-emerald-300">
                                ({file.totalLines})
                              </span>
                            </button>
                          ))}
                        </div>
                        <a
                          href={project.marketingSite.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-300 hover:text-white"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      </div>

                      {currentRepoFile && (
                        <pre className="p-3.5 text-[11px] font-mono text-slate-200 overflow-x-auto max-h-[400px] overflow-y-auto leading-relaxed bg-[#04060b]">
                          <code>{currentRepoFile.code}</code>
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full-Screen Lightbox Overlay */}
      {lightboxIndex !== null && activeGallery[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
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
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
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
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
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
                className="text-sky-400 hover:text-sky-300 underline"
              >
                Open Raw File ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

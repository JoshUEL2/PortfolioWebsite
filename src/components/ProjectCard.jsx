import { useState, useEffect } from 'react';
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
  Globe,
  FileCode,
  ZoomIn,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';
import EmbeddedBrowserViewport from './EmbeddedBrowserViewport';
import { getProjectTheme } from '../utils/projectThemes';
import { ProjectAtmosphere } from './gameAtmospheres';
import { audioEngine } from '../utils/audioEngine';
import SafeVideoPlayer from './SafeVideoPlayer';

export default function ProjectCard({ project, onSelectProject }) {
  const versions = project.versions || project.splitPhases || null;
  const hasVersions = Boolean(versions && versions.length > 0);

  const [activeVersionIndex, setActiveVersionIndex] = useState(0);
  // 'overview' | 'code' | 'marketing'
  const [viewMode, setViewMode] = useState('overview');
  // Sub-tab inside 'marketing': 'live' | 'source'
  const [marketingSubTab, setMarketingSubTab] = useState('live');
  const [activeRepoFileIdx, setActiveRepoFileIdx] = useState(0);
  const [marketingRepos, setMarketingRepos] = useState(null);
  const isLoadingRepo = viewMode === 'marketing' && marketingSubTab === 'source' && !marketingRepos;

  const currentVersion = hasVersions ? versions[activeVersionIndex] : null;

  const activeTitle = project.title;
  const activeTagline = currentVersion?.label || currentVersion?.phaseSubtitle || project.tagline;
  const activeDesc = currentVersion?.summary || project.shortDesc;
  const activeHighlights = currentVersion?.highlights || project.highlights || [];
  const activeDeepDive = currentVersion?.technicalDeepDive || project.technicalDeepDive;
  const activeVideo =
    currentVersion?.videoPreview !== undefined
      ? currentVersion.videoPreview
      : currentVersion?.video !== undefined
      ? currentVersion.video
      : project.videoPreview || project.video;
  const activeImage = currentVersion?.image || project.image;
  const activeGallery =
    currentVersion?.gallery?.length > 0
      ? currentVersion.gallery
      : project.gallery?.length > 0
      ? project.gallery
      : activeImage
      ? [activeImage]
      : [];
  const activeEngine = currentVersion?.engine || project.engine;
  const activeDates = currentVersion?.dates || project.dates;
  const isLabraz = project.id === 'labraz' || project.id === 'labrats';

  // Lazy-load 216KB repo bundle ONLY when inspecting Companion Repo Source
  useEffect(() => {
    if (viewMode !== 'marketing' || marketingSubTab !== 'source' || marketingRepos) {
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
  }, [viewMode, marketingSubTab, marketingRepos]);

  const repoData =
    project.marketingSite?.repoSlug && marketingRepos
      ? marketingRepos[project.marketingSite.repoSlug]
      : null;
  const repoFiles = repoData?.files || [];
  const currentRepoFile = repoFiles[activeRepoFileIdx] || repoFiles[0] || null;

  const isPlayableInBrowser =
    Boolean(project.links?.demo) && project.links.demo.startsWith('/games/');

  const handleOpenCaseStudy = (initialLightboxIndex = null) => {
    audioEngine.playSweep();
    onSelectProject({
      ...project,
      initialVersionIndex: activeVersionIndex,
      initialPhaseIndex: activeVersionIndex,
      initialLightboxIndex
    });
  };

  // Build symmetrical opaque action dock buttons
  const actionButtons = [];

  if (project.links?.itch) {
    actionButtons.push({
      key: 'itch',
      el: (
        <a
          key="itch"
          href={project.links.itch}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audioEngine.playPop()}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-rose-950/40 hover:scale-[1.02] active:scale-95 transition-all w-full cursor-pointer select-none"
        >
          <Gamepad2 className="w-4 h-4 shrink-0" />
          <span>Play on Itch.io</span>
        </a>
      )
    });
  }

  if (isPlayableInBrowser) {
    actionButtons.push({
      key: 'browser',
      el: (
        <a
          key="browser"
          href={getAssetUrl(project.links.demo)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audioEngine.playPop()}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-sky-950/40 hover:scale-[1.02] active:scale-95 transition-all w-full cursor-pointer select-none"
        >
          <Gamepad2 className="w-4 h-4 shrink-0" />
          <span>Play in Browser</span>
        </a>
      )
    });
  }

  if (project.links?.gdd) {
    actionButtons.push({
      key: 'gdd',
      el: (
        <a
          key="gdd"
          href={getAssetUrl(project.links.gdd)}
          download
          onClick={() => audioEngine.playPop()}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#78350f] hover:bg-[#92400e] text-amber-100 font-bold text-xs tracking-wider uppercase border border-amber-500/50 shadow-md shadow-amber-950/40 hover:scale-[1.02] active:scale-95 transition-all w-full cursor-pointer select-none"
        >
          <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
          <span>Download GDD</span>
        </a>
      )
    });
  }

  if (project.marketingSite) {
    actionButtons.push({
      key: 'marketing',
      el: (
        <button
          key="marketing"
          type="button"
          onClick={() => {
            audioEngine.playPop();
            setViewMode('marketing');
            setMarketingSubTab('live');
          }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#065f46] hover:bg-[#047857] text-emerald-100 font-bold text-xs tracking-wider uppercase border border-emerald-400/50 shadow-md shadow-emerald-950/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer w-full select-none"
        >
          <Globe className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>Companion Site</span>
        </button>
      )
    });
  }

  if (project.links?.video) {
    actionButtons.push({
      key: 'video',
      el: (
        <a
          key="video"
          href={getAssetUrl(project.links.video)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audioEngine.playPop()}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#b91c1c] hover:bg-[#991b1b] text-white font-bold text-xs tracking-wider uppercase border border-red-400/50 shadow-md shadow-red-950/40 hover:scale-[1.02] active:scale-95 transition-all w-full cursor-pointer select-none"
        >
          <Clapperboard className="w-4 h-4 text-red-200 shrink-0" />
          <span>YouTube Walkthrough</span>
        </a>
      )
    });
  }

  if (isSpecificRepo(project.links?.github)) {
    actionButtons.push({
      key: 'github',
      el: (
        <a
          key="github"
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audioEngine.playPop()}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-slate-100 hover:text-white font-bold text-xs tracking-wider uppercase border border-slate-600/50 shadow-md shadow-slate-950/40 hover:scale-[1.02] active:scale-95 transition-all w-full cursor-pointer select-none"
        >
          <GithubIcon className="w-4 h-4 shrink-0" />
          <span>Source Code</span>
        </a>
      )
    });
  }

  if (isSpecificLinkedIn(project.links?.linkedin)) {
    actionButtons.push({
      key: 'linkedin',
      el: (
        <a
          key="linkedin"
          href={project.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audioEngine.playPop()}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5] hover:bg-[#006097] text-white font-bold text-xs tracking-wider uppercase border border-sky-400/50 shadow-md shadow-sky-950/40 hover:scale-[1.02] active:scale-95 transition-all w-full cursor-pointer select-none"
        >
          <LinkedinIcon className="w-4 h-4 shrink-0" />
          <span>View on LinkedIn</span>
        </a>
      )
    });
  }

  actionButtons.push({
    key: 'breakdown',
    el: (
      <button
        key="breakdown"
        type="button"
        onClick={() => handleOpenCaseStudy(null)}
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0369a1] hover:bg-[#0284c7] text-white font-bold text-xs tracking-wider uppercase border border-sky-400/45 shadow-md shadow-sky-950/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer w-full select-none"
      >
        <BookOpen className="w-3.5 h-3.5 text-sky-200 shrink-0" />
        <span>Full Breakdown &amp; Gallery</span>
      </button>
    )
  });

  const isOddButtonCount = actionButtons.length % 2 === 1;
  const theme = getProjectTheme(project.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative rounded-2xl pt-7 px-5 pb-5 sm:pt-8 sm:px-6 sm:pb-6 md:pt-9 md:px-8 md:pb-8 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 border overflow-hidden ${theme.containerClass}`}
    >
      {/* Dynamic Per-Game Perimeter Atmospheric Effect */}
      <ProjectAtmosphere projectId={project.id} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN (7 Cols): Clean Single-Plane Typography, Segmented Phase Pill & Tabbed Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between min-w-0">
          <div>
            {/* Single Clean Top Metadata Strip (Zero micro-pills) */}
            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-sky-500/15 border border-sky-400/30 text-sky-200 font-semibold">
                {project.discipline}
              </span>
              <span className="text-slate-400">{activeDates}</span>

              {project.gradeBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold">
                  <Award className="w-3 h-3 text-emerald-400" />
                  {project.gradeBadge}
                </span>
              )}

              {project.id === 'rem' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/85 border border-cyan-400/40 text-cyan-200 font-bold">
                  <img
                    src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                    alt="Myndwell Logo"
                    className="w-3.5 h-3.5 object-contain shrink-0"
                  />
                  <span>MYNDWELL CORP</span>
                </span>
              )}

              {project.id === 'delirium' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-950/85 border border-rose-500/40 text-rose-200 font-bold">
                  <img
                    src={getAssetUrl('/images/logos/delirium-title-logo.png')}
                    alt="Delirium"
                    className="h-3 object-contain shrink-0"
                  />
                </span>
              )}

              {isLabraz && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/85 border border-emerald-400/40 text-emerald-200 font-bold">
                  <img
                    src={getAssetUrl('/images/logos/labrats-logo-transparent.png')}
                    alt="LabR@z"
                    className="w-3.5 h-3.5 object-contain shrink-0"
                  />
                  <span>LABR@Z</span>
                </span>
              )}
            </div>

            {/* Accessible Title Trigger & Engine Subtitle */}
            <button
              type="button"
              onClick={() => handleOpenCaseStudy(null)}
              className="text-left group/title cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif] group-hover/title:text-sky-300 transition-colors">
                {activeTitle}
              </h3>
            </button>

            <p className="text-xs sm:text-sm font-semibold text-sky-300 mt-1 mb-4 flex flex-wrap items-center gap-2">
              <span>{activeTagline}</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-xs text-slate-400">{activeEngine}</span>
            </p>

            {/* Streamlined Inline Phase Switcher (Replaces nested heavy container) */}
            {hasVersions && (
              <div
                role="group"
                aria-label="Select project iteration"
                className="mb-4 inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#07090f] border border-white/10"
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
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected
                          ? 'bg-sky-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-slate-100'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected ? 'bg-emerald-300' : 'bg-slate-600'
                        }`}
                      />
                      <span>{ver.badge || ver.label || `Phase ${idx + 1}`}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Mode Switcher Bar */}
            <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#07090f] border border-white/10 mb-5 w-fit max-w-full">
              <button
                type="button"
                onClick={() => setViewMode('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'overview'
                    ? 'bg-sky-600/20 text-white border border-sky-400/50'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>What I Built</span>
              </button>

              {(activeDeepDive || project.codeSnippet) && (
                <button
                  type="button"
                  onClick={() => setViewMode('code')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'code'
                      ? 'bg-sky-600/20 text-white border border-sky-400/50'
                      : 'text-slate-400 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Under the Hood: Maths &amp; Logic</span>
                </button>
              )}

              {project.marketingSite && (
                <button
                  type="button"
                  onClick={() => setViewMode('marketing')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'marketing'
                      ? 'bg-emerald-600/25 text-emerald-100 border border-emerald-400/50'
                      : 'text-emerald-300/80 hover:text-emerald-200 border border-transparent'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Companion Website &amp; Code</span>
                </button>
              )}
            </div>

            {/* OVERVIEW VIEW (Flat editorial hierarchy — zero redundant nested box) */}
            {viewMode === 'overview' && (
              <div className="space-y-4">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                  {activeDesc}
                </p>

                <ul className="space-y-2 pt-1">
                  {activeHighlights.slice(0, 4).map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Interactive System Pipeline Nodes (Clicking opens Under the Hood) */}
                {project.architectureNodes && project.architectureNodes.length > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-sky-300/90 mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-sky-400" />
                      <span>System Architecture Pipeline (Inspect Nodes)</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {project.architectureNodes.map((node, nIdx) => (
                        <button
                          key={nIdx}
                          type="button"
                          onClick={() => {
                            audioEngine.playTick();
                            if (activeDeepDive || project.codeSnippet) {
                              setViewMode('code');
                            } else {
                              handleOpenCaseStudy(null);
                            }
                          }}
                          className="p-2.5 rounded-xl bg-[#07090f] border border-white/10 hover:border-sky-400/50 transition-colors text-left flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                          title={`Inspect ${node.label}: ${node.sub}`}
                        >
                          <div className="text-[11px] font-bold text-white leading-snug">
                            {node.label}
                          </div>
                          <div className="text-[10px] font-mono text-sky-300/80 mt-1 leading-snug break-words">
                            {node.sub}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* CODE / ENGINEERING DEEP DIVE */}
            {viewMode === 'code' && (
              <div className="space-y-4">
                {activeDeepDive && (
                  <div className="pl-4 border-l-2 border-sky-400/60 py-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-sky-300 font-bold mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      <span>Engineering Problem &amp; How I Solved It</span>
                    </div>
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
                      <span className="text-[10px] font-mono text-slate-400">
                        {activeEngine}
                      </span>
                    </div>
                    <pre className="p-3.5 text-[11px] sm:text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* MARKETING SITE & REPO VIEWER */}
            {viewMode === 'marketing' && project.marketingSite && (
              <div className="rounded-xl bg-[#05070c] border border-emerald-500/35 overflow-hidden shadow-xl">
                <div className="p-3.5 bg-[#0b1210] border-b border-emerald-500/25 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span>{project.marketingSite.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {project.marketingSite.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-white/10">
                    <button
                      type="button"
                      onClick={() => setMarketingSubTab('live')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                        marketingSubTab === 'live'
                          ? 'bg-emerald-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Globe className="w-3 h-3" />
                      <span>16:9 Live Site</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMarketingSubTab('source')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                        marketingSubTab === 'source'
                          ? 'bg-sky-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <FileCode className="w-3 h-3" />
                      <span>Repo Source</span>
                    </button>
                  </div>
                </div>

                {marketingSubTab === 'live' ? (
                  <div>
                    <EmbeddedBrowserViewport
                      src={getAssetUrl(project.marketingSite.path)}
                      title={project.marketingSite.title}
                    />
                    <div className="px-3.5 py-2.5 bg-[#07090f] border-t border-white/10 flex flex-wrap items-center justify-end gap-4 text-xs">
                      <a
                        href={project.marketingSite.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-300 hover:text-white"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub Repository</span>
                      </a>
                      <a
                        href={getAssetUrl(project.marketingSite.path)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-300 hover:text-emerald-200"
                      >
                        <span>Open Fullscreen in New Tab</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : isLoadingRepo ? (
                  <div className="p-8 text-center text-xs font-mono text-slate-400">
                    Loading repository source files...
                  </div>
                ) : (
                  <div>
                    <div className="px-3 py-2 bg-[#0b0e14] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {repoFiles.map((file, fIdx) => (
                          <button
                            key={file.name}
                            type="button"
                            onClick={() => setActiveRepoFileIdx(fIdx)}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                              activeRepoFileIdx === fIdx
                                ? 'bg-sky-600/35 text-white border border-sky-400/50 font-bold'
                                : 'bg-white/5 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <FileCode className="w-3 h-3 text-sky-400" />
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
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-sky-300 hover:text-white"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View on GitHub</span>
                      </a>
                    </div>

                    {currentRepoFile && (
                      <pre className="p-4 text-[11px] font-mono text-slate-200 overflow-x-auto max-h-[360px] overflow-y-auto leading-relaxed bg-[#04060b]">
                        <code>{currentRepoFile.code}</code>
                      </pre>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN (5 Cols): Media Viewport, Thumbnails & Symmetrical Opaque Action Dock */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-3.5">
          {activeVideo ? (
            <button
              type="button"
              onClick={() => handleOpenCaseStudy(null)}
              aria-label={`Open ${activeTitle} overview modal`}
              className={`relative block w-full text-left group/vid cursor-pointer overflow-hidden rounded-2xl bg-black border shadow-xl aspect-[16/10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-all ${theme.mediaHolderClass}`}
            >
              <SafeVideoPlayer
                src={activeVideo}
                poster={activeImage}
                title={activeTitle}
                className="w-full h-full object-cover group-hover/vid:scale-[1.03] transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/vid:opacity-100 transition-opacity" />

              {project.id === 'rem' && (
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#070e1a]/90 border border-cyan-400/40 text-[10px] font-mono text-cyan-200 pointer-events-none z-10 flex items-center gap-1.5">
                  <img
                    src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                    alt="Myndwell Logo"
                    className="w-3.5 h-3.5 object-contain"
                  />
                  <span>MYNDWELL CORP</span>
                </div>
              )}

              {project.id === 'delirium' && (
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/85 border border-rose-500/40 pointer-events-none z-10 flex items-center">
                  <img
                    src={getAssetUrl('/images/logos/delirium-title-logo.png')}
                    alt="Delirium"
                    className="h-3 object-contain"
                  />
                </div>
              )}

              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-black/80 border border-white/20 text-[10px] font-mono text-white pointer-events-none z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                {hasVersions
                  ? `${currentVersion?.badge || `Version ${activeVersionIndex + 1}`} Capture`
                  : 'Gameplay Capture'}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#0b0e14]/90 border border-sky-400/35 text-xs text-white opacity-0 group-hover/vid:opacity-100 transition-opacity duration-200 z-10">
                <span className="font-semibold text-[11px]">
                  Click Video to Open Case Study
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </div>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleOpenCaseStudy(0)}
              aria-label={`Open ${activeTitle} full-screen capture`}
              className={`relative block w-full text-left group/img cursor-pointer overflow-hidden rounded-2xl bg-slate-950 border shadow-xl aspect-[16/10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-all ${theme.mediaHolderClass}`}
            >
              <img
                src={getAssetUrl(activeImage)}
                alt={activeTitle}
                className="w-full h-full object-cover object-center group-hover/img:scale-[1.03] transition-transform duration-500 ease-out"
                loading="lazy"
              />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#0b0e14]/90 border border-sky-400/35 text-xs text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 z-10">
                <span className="font-semibold text-[11px]">
                  Click Image to Inspect Fullscreen
                </span>
                <ZoomIn className="w-3.5 h-3.5 text-sky-400" />
              </div>
            </button>
          )}

          {/* Gallery Thumbnails */}
          {activeGallery.length > 1 && (
            <div
              className={`grid gap-2.5 ${
                activeGallery.length === 2
                  ? 'grid-cols-2'
                  : activeGallery.length === 3
                  ? 'grid-cols-3'
                  : 'grid-cols-4'
              }`}
            >
              {activeGallery.slice(0, 4).map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={() => handleOpenCaseStudy(tIdx)}
                  aria-label={`Inspect ${activeTitle} capture ${tIdx + 1} of ${activeGallery.length}`}
                  className="relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10 hover:border-sky-400/70 bg-slate-950 group/t cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <img
                    src={getAssetUrl(thumb)}
                    alt={`${activeTitle} capture ${tIdx + 1}`}
                    className="w-full h-full object-cover group-hover/t:scale-105 transition-transform duration-200 opacity-85 group-hover/t:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/t:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white drop-shadow" />
                  </div>
                  {tIdx === 3 && activeGallery.length > 4 && (
                    <div className="absolute inset-0 bg-black/75 flex items-center justify-center text-[11px] font-mono font-bold text-sky-200">
                      +{activeGallery.length - 4} More
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Symmetrical Opaque Action Dock */}
          <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {actionButtons.map((btn, bIdx) => {
              const isLastOdd = isOddButtonCount && bIdx === actionButtons.length - 1;
              return (
                <div key={btn.key} className={isLastOdd ? 'sm:col-span-2' : ''}>
                  {btn.el}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

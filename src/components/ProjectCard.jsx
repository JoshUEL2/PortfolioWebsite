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
  History,
  Globe,
  FileCode
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';
import { MARKETING_REPOS } from '../data/marketingReposData';

export default function ProjectCard({ project, onSelectProject }) {
  const versions = project.versions || project.splitPhases || null;
  const hasVersions = Boolean(versions && versions.length > 0);

  const [activeVersionIndex, setActiveVersionIndex] = useState(0);
  // 'overview' | 'code' | 'marketing'
  const [viewMode, setViewMode] = useState('overview');
  // Sub-tab inside 'marketing': 'live' (interactive iframe) | 'source' (literal repo code)
  const [marketingSubTab, setMarketingSubTab] = useState('live');
  const [activeRepoFileIdx, setActiveRepoFileIdx] = useState(0);

  const currentVersion = hasVersions ? versions[activeVersionIndex] : null;

  const activeTitle = project.title;
  const activeTagline = currentVersion?.label || currentVersion?.phaseSubtitle || project.tagline;
  const activeDesc = currentVersion?.summary || project.shortDesc;
  const activeHighlights = currentVersion?.highlights || project.highlights || [];
  const activeDeepDive = currentVersion?.technicalDeepDive || project.technicalDeepDive;
  const activeVideo =
    currentVersion?.videoPreview !== undefined ? currentVersion.videoPreview
      : currentVersion?.video !== undefined ? currentVersion.video
      : project.videoPreview || project.video;
  const activeImage = currentVersion?.image || project.image;
  const activeGallery = currentVersion?.gallery || project.gallery || [];
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

  const handleOpenCaseStudy = (initialTab = null) => {
    onSelectProject({
      ...project,
      initialVersionIndex: activeVersionIndex,
      initialModalTab: initialTab
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Details, Scoped Version Switcher, Interactive Mode Toggle & Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Top Metadata Row: Discipline, Dates, Badges (No arbitrary project numbers) */}
            <div className="flex flex-wrap items-center gap-2 mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-950/70 border border-indigo-500/35 text-indigo-200">
                {project.discipline}
              </span>

              <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/10">
                {activeDates}
              </span>

              {project.marketingSite && (
                <button
                  type="button"
                  onClick={() => setViewMode('marketing')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/80 transition-colors cursor-pointer"
                >
                  <Globe className="w-3 h-3 text-emerald-400" />
                  <span>Includes Embedded Companion Site &amp; Repo Code</span>
                </button>
              )}

              {project.gradeBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Award className="w-3 h-3 text-emerald-400" />
                  {project.gradeBadge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3
              onClick={() => handleOpenCaseStudy()}
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1.5 font-['Syne',sans-serif] group-hover:text-indigo-200 transition-colors cursor-pointer"
            >
              {activeTitle}
            </h3>

            {/* Tagline & Engine */}
            <p className="text-xs sm:text-sm font-semibold text-indigo-300 mb-4 flex flex-wrap items-center gap-2">
              <span>{activeTagline}</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-xs text-slate-400">{activeEngine}</span>
            </p>

            {/* SCOPED PROJECT ITERATION SWITCHER (Specific to Rastacats & Daydream Believer) */}
            {hasVersions && (
              <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#080b18] to-violet-950/35 border border-indigo-500/40 shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <History className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-200">
                      {project.title} Iteration Switcher:
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/35 px-2 py-0.5 rounded-md">
                    Viewing: {currentVersion?.badge || currentVersion?.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {versions.map((ver, idx) => {
                    const isSelected = activeVersionIndex === idx;
                    return (
                      <button
                        key={ver.id || idx}
                        type="button"
                        onClick={() => setActiveVersionIndex(idx)}
                        className={`px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer flex items-center justify-between gap-2 border ${
                          isSelected ? 'bg-gradient-to-r from-indigo-600/80 to-violet-600/80 text-white border-indigo-300/70 shadow-md shadow-indigo-950/70'
                            : 'bg-[#05070f]/80 hover:bg-white/[0.06] text-slate-400 hover:text-slate-200 border-white/10'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 ${
                                isSelected ? 'bg-emerald-300 animate-pulse' : 'bg-slate-600'
                              }`}
                            />
                            <span className="truncate">{ver.label || ver.phaseLabel}</span>
                          </div>
                          {ver.dates && (
                            <div className="text-[10px] font-mono text-indigo-200/80 pl-4 mt-0.5">
                              {ver.dates}
                            </div>
                          )}
                        </div>
                        {ver.badge && (
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                              isSelected ? 'bg-black/35 text-emerald-300'
                                : 'bg-white/5 text-slate-400'
                            }`}
                          >
                            {ver.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* On-Card View Mode Switcher: [What I Built] | [Under the Hood: Maths & Logic] | [Companion Site & Repo Code] */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#060811] border border-white/10 mb-4 w-fit">
              <button
                type="button"
                onClick={() => setViewMode('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'overview' ? 'bg-indigo-600/35 text-white border border-indigo-500/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>What I Built</span>
              </button>

              {(activeDeepDive || project.codeSnippet) && (
                <button
                  type="button"
                  onClick={() => setViewMode('code')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'code' ? 'bg-indigo-600/35 text-indigo-200 border border-indigo-500/50 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
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
                    viewMode === 'marketing' ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-500/50 shadow-sm'
                      : 'text-emerald-300/80 hover:text-emerald-200'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Companion Website &amp; Repo Code</span>
                </button>
              )}
            </div>

            {viewMode === 'overview' && (
              <>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {activeDesc}
                </p>

                <div className="space-y-2 mb-5">
                  {activeHighlights.slice(0, 4).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {viewMode === 'code' && (
              <div className="space-y-4 mb-5">
                {activeDeepDive && (
                  <div className="p-4 rounded-2xl bg-indigo-950/25 border border-indigo-500/30">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Engineering Problem &amp; How I Solved It</span>
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

            {viewMode === 'marketing' && project.marketingSite && (
              <div className="mb-5 rounded-2xl bg-[#05070f] border border-emerald-500/35 overflow-hidden shadow-2xl">
                {/* Marketing Sub-Header */}
                <div className="p-3.5 bg-emerald-950/25 border-b border-emerald-500/25 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span>{project.marketingSite.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {project.marketingSite.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10">
                    <button
                      type="button"
                      onClick={() => setMarketingSubTab('live')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        marketingSubTab === 'live' ? 'bg-emerald-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Globe className="w-3 h-3" />
                      <span>Live Interactive Site</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMarketingSubTab('source')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        marketingSubTab === 'source' ? 'bg-indigo-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <FileCode className="w-3 h-3" />
                      <span>Literal Repo Code ({repoFiles.length} Files)</span>
                    </button>
                  </div>
                </div>

                {marketingSubTab === 'live' ? (
                  <div>
                    <div className="relative w-full h-[380px] bg-black">
                      <iframe
                        src={getAssetUrl(project.marketingSite.path)}
                        title={project.marketingSite.title}
                        className="w-full h-full border-0"
                        sandbox="allow-scripts allow-same-origin allow-modals"
                      />
                    </div>
                    <div className="px-3.5 py-2.5 bg-[#080b16] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-mono text-[11px] text-emerald-300">
                        Interactive Embedded Build ({project.marketingSite.path})
                      </span>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.marketingSite.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 hover:text-white"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub Repo</span>
                        </a>
                        <a
                          href={getAssetUrl(project.marketingSite.path)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-300 hover:text-emerald-200"
                        >
                          <span>Launch Fullscreen Tab</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* File Selector Bar */}
                    <div className="px-3 py-2 bg-[#090d1a] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {repoFiles.map((file, fIdx) => (
                          <button
                            key={file.name}
                            type="button"
                            onClick={() => setActiveRepoFileIdx(fIdx)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                              activeRepoFileIdx === fIdx ? 'bg-indigo-600/40 text-white border border-indigo-400/50 font-bold'
                                : 'bg-white/5 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <FileCode className="w-3 h-3 text-indigo-400" />
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
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-indigo-300 hover:text-white"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View on GitHub</span>
                      </a>
                    </div>

                    {/* Full Untruncated Source Code Viewer */}
                    {currentRepoFile && (
                      <pre className="p-4 text-[11px] font-mono text-slate-200 overflow-x-auto max-h-[360px] overflow-y-auto leading-relaxed bg-[#04060c]">
                        <code>{currentRepoFile.code}</code>
                      </pre>
                    )}
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

            {project.marketingSite && (
              <button
                type="button"
                onClick={() => {
                  setViewMode('marketing');
                  setMarketingSubTab('live');
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/25 hover:bg-emerald-600/40 text-emerald-200 font-semibold text-xs tracking-wider uppercase border border-emerald-500/40 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
              >
                <Globe className="w-4 h-4 text-emerald-300" />
                <span>Interactive Companion Site</span>
              </button>
            )}

            {project.links?.video && (
              <a
                href={getAssetUrl(project.links.video)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/25 hover:bg-red-600/40 text-red-200 font-semibold text-xs tracking-wider uppercase border border-red-500/40 hover:scale-[1.03] active:scale-95 transition-all"
              >
                <Clapperboard className="w-4 h-4 text-red-400" />
                <span>YouTube Walkthrough</span>
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
              type="button"
              onClick={() => handleOpenCaseStudy()}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-indigo-600/30 text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/10 hover:border-indigo-500/40 transition-all ml-auto cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full Breakdown &amp; Gallery</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Gameplay Video or Artwork Viewport */}
        <div className="lg:col-span-5">
          {activeVideo ? (
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleOpenCaseStudy()}
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
                {hasVersions
                  ? `${currentVersion?.badge || `Version ${activeVersionIndex + 1}`} Capture`
                  : 'Gameplay Capture'}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-0 group-hover/vid:opacity-100 transition-all duration-300 z-10">
                <span className="font-semibold text-[11px]">
                  Open Full Breakdown &amp; {activeGallery.length || 1} Captures
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
          ) : (
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleOpenCaseStudy()}
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
                  Open Full Breakdown &amp; Diagrams
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
          )}

          {/* Thumbnail Strip Preview underneath the main media if gallery has multiple images */}
          {activeGallery.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mt-3">
              {activeGallery.slice(0, 4).map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={() => handleOpenCaseStudy()}
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

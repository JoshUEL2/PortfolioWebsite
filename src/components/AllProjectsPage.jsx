import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowLeft,
  Gamepad2,
  Clapperboard,
  ExternalLink,
  Award,
  X,
  BookOpen,
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ALL_PROJECTS, GAME_FILTER_DISCIPLINES } from '../data/allProjectsData';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';
import { getProjectTheme } from '../utils/projectThemes';
import { ProjectAtmosphere } from './gameAtmospheres';
import { audioEngine } from '../utils/audioEngine';
import SafeVideoPlayer from './SafeVideoPlayer';

export default function AllProjectsPage({ onBackToHome, onSelectProject }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return ALL_PROJECTS.filter((proj) => {
      let matchesFilter = true;
      if (activeFilter === 'playable') {
        matchesFilter = Boolean(proj.links?.itch || proj.links?.demo);
      } else if (activeFilter === 'marketing') {
        matchesFilter = Boolean(proj.marketingSite);
      } else if (activeFilter !== 'all') {
        matchesFilter = proj.category === activeFilter;
      }

      if (!matchesFilter) return false;
      if (!q) return true;

      return (
        proj.title.toLowerCase().includes(q) ||
        proj.shortDesc.toLowerCase().includes(q) ||
        proj.engine.toLowerCase().includes(q) ||
        (proj.role && proj.role.toLowerCase().includes(q)) ||
        (proj.categoryLabel && proj.categoryLabel.toLowerCase().includes(q)) ||
        (proj.tools && proj.tools.some((t) => t.toLowerCase().includes(q))) ||
        (proj.highlights && proj.highlights.some((h) => h.toLowerCase().includes(q)))
      );
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto">
      {/* Top Vault Navigation HUD */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-3.5 rounded-2xl bg-[#0b0e14] border border-white/10">
        <button
          type="button"
          onClick={() => {
            audioEngine.playTick();
            onBackToHome();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600/20 hover:bg-sky-600/35 text-sky-200 hover:text-white border border-sky-400/40 transition-all hover:scale-[1.02] active:scale-95 text-xs font-mono font-bold uppercase tracking-wider cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <ArrowLeft className="w-4 h-4 text-sky-300" />
          <span>Return to Main Portfolio</span>
        </button>

        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#07090f] border border-white/10 text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
          <span>
            PROJECT VAULT // SHOWING {filteredProjects.length} OF {ALL_PROJECTS.length} PROJECTS
          </span>
        </div>
      </div>

      {/* Vault Header & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-400/30 text-sky-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>COMPLETE ARCHIVE // {ALL_PROJECTS.length} GAMES, PROTOTYPES &amp; DESIGN BIBLES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            The Complete Project Vault
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Browse, filter, and search every playable build, shader experiment, level blockout, interactive companion website, and Game Design Document in one place.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-96 shrink-0">
          <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            aria-label="Search projects by title, engine, shader, or mechanic"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, engine, shader, mechanic..."
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-[#0b0e14] border border-white/15 focus:border-sky-400 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              aria-label="Clear search query"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Discipline Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-white/10">
        {GAME_FILTER_DISCIPLINES.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => {
                audioEngine.playTick(600, 250);
                setActiveFilter(filter.id);
              }}
              className={`relative px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-150 cursor-pointer flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                isActive
                  ? 'text-white bg-sky-600 border border-sky-400/60 shadow-md shadow-sky-950/50'
                  : 'text-slate-400 hover:text-slate-100 bg-[#0b0e14] border border-white/10 hover:border-sky-400/40'
              }`}
            >
              <span>{filter.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                  isActive ? 'bg-black/40 text-emerald-300' : 'bg-white/5 text-slate-400'
                }`}
              >
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
          <p className="text-slate-400 text-base mb-4">No projects matched your search criteria.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
            className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const videoSrc = project.videoPreview || project.video;
            const isLiveDemo =
              Boolean(project.links?.demo) && project.links.demo.startsWith('/games/');
            const isLabraz = project.id === 'labraz' || project.id === 'labrats';
            const theme = getProjectTheme(project.id);

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.25,
                  delay: Math.min(index * 0.02, 0.12)
                }}
                className={`group relative rounded-2xl p-5 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border overflow-hidden ${theme.compactContainerClass}`}
              >
                <ProjectAtmosphere projectId={project.id} isCompact={true} />

                <div className="relative z-10">
                  {/* Media Viewport (Accessible Semantic Button Trigger + Viewport-Gated SafeVideoPlayer) */}
                  <div className={`relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 border mb-4 transition-all ${theme.mediaHolderClass}`}>
                    <button
                      type="button"
                      onClick={() =>
                        onSelectProject({
                          ...project,
                          initialLightboxIndex: videoSrc ? null : 0
                        })
                      }
                      aria-label={`Inspect ${project.title}`}
                      className="w-full h-full block cursor-pointer group/thumb relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400"
                    >
                      {videoSrc ? (
                        <>
                          <SafeVideoPlayer
                            src={videoSrc}
                            poster={project.image}
                            title={project.title}
                            className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/85 border border-emerald-500/40 text-[9px] font-mono text-emerald-300 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                            GAMEPLAY CAPTURE
                          </div>
                        </>
                      ) : (
                        <img
                          src={getAssetUrl(project.image)}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      )}
                    </button>

                    {/* Discipline Pill */}
                    <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-md bg-black/85 border border-sky-400/35 text-[10px] font-mono font-bold text-sky-200 pointer-events-none z-10 max-w-[70%] truncate">
                      {project.categoryLabel}
                    </div>

                    {/* Per-Game Insignias */}
                    {isLabraz && (
                      <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/85 border border-emerald-400/50 z-10 pointer-events-none">
                        <img
                          src={getAssetUrl('/images/logos/labrats-logo-transparent.png')}
                          alt="LabR@z Logo"
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-[9px] font-mono font-bold text-emerald-300">LABR@Z</span>
                      </div>
                    )}

                    {project.id === 'rem' && (
                      <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#070e1a]/90 border border-cyan-400/50 z-10 pointer-events-none">
                        <img
                          src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                          alt="Myndwell Logo"
                          className="w-3.5 h-3.5 object-contain"
                        />
                        <span className="text-[9px] font-mono font-bold text-cyan-200">MYNDWELL</span>
                      </div>
                    )}

                    {project.id === 'delirium' && (
                      <div className="absolute top-2 right-2 flex items-center px-2 py-0.5 rounded-md bg-black/90 border border-rose-500/40 z-10 pointer-events-none">
                        <img
                          src={getAssetUrl('/images/logos/delirium-title-logo.png')}
                          alt="Delirium"
                          className="h-2.5 object-contain"
                        />
                      </div>
                    )}

                    {/* Companion Website / Version Indicator */}
                    {project.marketingSite ? (
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-sky-950/90 border border-sky-400/45 text-[9px] font-mono font-bold text-sky-200 pointer-events-none z-10">
                        + COMPANION WEB PORTAL
                      </div>
                    ) : project.versions ? (
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-[9px] font-mono font-bold text-emerald-300 pointer-events-none z-10">
                        PHASE 1 &amp; 2 SWITCHER
                      </div>
                    ) : null}
                  </div>

                  {/* Engine & Dates */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                    <span className="text-sky-400 font-semibold truncate pr-2">
                      {project.engine}
                    </span>
                    <span className="shrink-0">{project.dates}</span>
                  </div>

                  {/* Title Button */}
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-left w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
                  >
                    <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors line-clamp-2 font-['Space_Grotesk',sans-serif]">
                      {project.title}
                    </h3>
                  </button>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-3 font-normal">
                    {project.shortDesc}
                  </p>

                  {/* Exhibition Note */}
                  {project.funFact && (
                    <div className="mb-3 pl-2.5 border-l-2 border-amber-400/60 text-[11px] text-slate-300 flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{project.funFact}</span>
                    </div>
                  )}
                </div>

                {/* Card Footer (>= 36px Icon Tap Targets) */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
                  <div className="flex items-center gap-1.5">
                    {project.links?.itch && (
                      <a
                        href={project.links.itch}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Play on Itch.io"
                        className="p-2 rounded-lg bg-rose-950/70 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/35 transition-colors"
                        title="Play on Itch.io"
                      >
                        <Gamepad2 className="w-4 h-4" />
                      </a>
                    )}

                    {project.links?.video && (
                      <a
                        href={getAssetUrl(project.links.video)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch Video"
                        className="p-2 rounded-lg bg-red-950/70 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/35 transition-colors"
                        title="Watch Video"
                      >
                        <Clapperboard className="w-4 h-4" />
                      </a>
                    )}

                    {isSpecificRepo(project.links?.github) && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Source Code"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
                        title="Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}

                    {isLiveDemo && (
                      <a
                        href={getAssetUrl(project.links.demo)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Play in Browser"
                        className="p-2 rounded-lg bg-sky-950/70 hover:bg-sky-600 text-sky-300 hover:text-white border border-sky-500/35 transition-colors"
                        title="Play in Browser"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {isSpecificLinkedIn(project.links?.linkedin) && (
                      <a
                        href={project.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on LinkedIn"
                        className="p-2 rounded-lg bg-sky-950/70 hover:bg-[#0077b5] text-sky-300 hover:text-white border border-sky-500/35 transition-colors"
                        title="View on LinkedIn"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${theme.buttonClass}`}
                  >
                    <span>Overview</span>
                    <BookOpen className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

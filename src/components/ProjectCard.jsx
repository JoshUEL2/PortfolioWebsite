import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, Sparkles, BookOpen, Video, Award } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelectProject }) {
  // Extract YouTube ID if present
  const youtubeId =
    project.youtubeId ||
    (project.links?.video
      ? project.links.video.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1]
      : null);

  // Grade commendations
  const isTopScore =
    project.tagline?.includes('92%') || project.title?.includes('92%') || project.shortDesc?.includes('92%');
  const isFirstClass =
    project.tagline?.includes('72%') || project.title?.includes('72%') || project.shortDesc?.includes('72%');
  const isSelectedShowcase = project.id === 'vr-showcase' || project.shortDesc?.includes('Sole Level 5');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-3xl bg-[#0a0c18]/90 border border-white/10 hover:border-indigo-500/40 p-6 md:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-[0_12px_45px_rgba(99,102,241,0.16)] hover:-translate-y-1"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Details & Technical Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Header: Number, Discipline & Engine */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-3xl md:text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                {project.number}
              </span>
              <div className="h-4 w-[1px] bg-white/15" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-950/70 border border-indigo-500/35 text-indigo-300">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                {project.discipline}
              </span>

              {/* Special Recognition Ribbons */}
              {isTopScore && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Award className="w-3 h-3 text-emerald-400" />
                  92% 1st Class
                </span>
              )}
              {isFirstClass && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Award className="w-3 h-3 text-emerald-400" />
                  72% 1st Class
                </span>
              )}
              {isSelectedShowcase && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-violet-950/80 border border-violet-500/40 text-violet-300">
                  <Award className="w-3 h-3 text-violet-400" />
                  Sole L5 Exhibitor
                </span>
              )}

              <span className="text-xs font-mono text-slate-400 ml-auto hidden sm:inline-block">
                {project.engine}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 font-['Syne',sans-serif] group-hover:text-indigo-200 transition-colors">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-sm font-semibold text-indigo-400 mb-3 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {project.shortDesc}
            </p>

            {/* Key Technical Highlights */}
            <div className="space-y-2.5 mb-6">
              {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 mt-1.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.links.itch && (
              <a
                href={project.links.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-rose-900/40 hover:scale-105 active:scale-95 transition-all"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Play on Itch.io</span>
              </a>
            )}

            {project.links.video && !youtubeId && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-red-900/40 hover:scale-105 active:scale-95 transition-all"
              >
                <Video className="w-4 h-4" />
                <span>Watch Walkthrough</span>
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/10 hover:scale-105 active:scale-95 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}

            {project.links.demo && !project.links.itch && !project.links.video && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-semibold text-xs tracking-wider uppercase border border-indigo-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Release</span>
              </a>
            )}

            <button
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-300 hover:text-white font-medium text-xs tracking-wider uppercase border border-white/10 transition-all ml-auto hover:border-indigo-500/40 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full Case Study</span>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Media Box, Local Coursework Video, or YouTube Video */}
        <div className="lg:col-span-5">
          {project.video ? (
            /* Local Coursework Testing Video Loop */
            <div
              onClick={() => onSelectProject(project)}
              className="relative group/vid cursor-pointer overflow-hidden rounded-2xl bg-black border border-white/15 shadow-2xl aspect-[16/10] flex items-center justify-center"
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/vid:opacity-100 transition-opacity" />

              {/* Status Badge */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white pointer-events-none z-10 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Gameplay Video
              </div>

              {/* Top Engine Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-slate-200 z-10 shadow-md">
                {project.engine}
              </div>

              {/* Hover Prompt */}
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-0 group-hover/vid:opacity-100 transition-all duration-300 flex items-center gap-1.5 shadow-lg z-10">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span className="font-medium text-[11px]">Click to View Case Study</span>
              </div>
            </div>
          ) : youtubeId ? (
            /* In-Browser Autoplaying Embedded YouTube Video Preview */
            <div className="relative overflow-hidden rounded-2xl bg-black border border-white/15 shadow-2xl aspect-[16/10] flex items-center justify-center">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1&rel=0&modestbranding=1`}
                title={`${project.title} Video Preview`}
                className="w-full h-full border-0 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white pointer-events-none z-10 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Gameplay Video
              </div>
            </div>
          ) : (
            /* Clean Concept / Game Art Viewport */
            <div
              onClick={() => onSelectProject(project)}
              className="relative group/img cursor-pointer overflow-hidden rounded-2xl bg-slate-950 border border-white/15 shadow-2xl aspect-[16/10] flex items-center justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Subtle Glare Sheen Sweep on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-white/10 to-indigo-500/0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Engine Badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-slate-200 z-10 shadow-md">
                {project.engine}
              </div>

              {/* Hover Prompt */}
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center gap-1.5 shadow-lg z-10">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span className="font-medium text-[11px]">Click to View Case Study</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

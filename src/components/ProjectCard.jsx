import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, Sparkles, BookOpen } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelectProject }) {
  const isItch = project.links.itch;
  const isGithub = project.links.github && !isItch;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl bg-[#0c0e1c]/80 border border-white/10 hover:border-indigo-500/40 p-6 md:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(99,102,241,0.18)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Details & Technical Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Header: Number & Category Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-3xl md:text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                {project.number}
              </span>
              <div className="h-4 w-[1px] bg-white/15" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                {project.discipline}
              </span>
              <span className="text-xs font-mono text-slate-400 ml-auto hidden sm:inline-block">
                {project.engine}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 font-['Syne',sans-serif] group-hover:text-indigo-200 transition-colors">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-sm font-semibold text-indigo-400 mb-3 tracking-wide">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {project.shortDesc}
            </p>

            {/* Key Technical Highlights */}
            <div className="space-y-2 mb-6">
              {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-rose-900/40 hover:scale-105 active:scale-95 transition-all"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Play on Itch.io</span>
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

            {project.links.demo && !project.links.itch && (
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
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-xs tracking-wider uppercase border border-white/5 transition-all ml-auto"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Deep Dive</span>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Media Box */}
        <div
          onClick={() => onSelectProject(project)}
          className="lg:col-span-5 relative group/img cursor-pointer overflow-hidden rounded-2xl bg-slate-950 border border-white/10 shadow-2xl aspect-[16/10] flex items-center justify-center"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Glare Sheen Sweep Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-white/10 to-indigo-500/0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Corner Badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-200">
            {project.engine}
          </div>

          {/* Click to Expand Prompt */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#090b16]/80 backdrop-blur-md border border-white/15 text-xs text-white opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>Click to View Full Case Study</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Gamepad2, Terminal, FileText, Play, Sparkles, Layers, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, HERO_REELS, PROJECTS } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

export default function Hero({ onExploreClick, onSelectProject }) {
  const [activeReelIdx, setActiveReelIdx] = useState(0);
  const activeReel = HERO_REELS[activeReelIdx] || HERO_REELS[0];

  const handleOpenReelProject = () => {
    if (!onSelectProject) return;
    const found = PROJECTS.find((p) => p.id === activeReel.projectId);
    if (found) {
      onSelectProject({
        ...found,
        initialPhaseIndex: activeReel.phaseIndex ?? 0
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10 opacity-[0.025]">
        <span className="font-extrabold text-[17vw] leading-none tracking-tighter text-white uppercase text-center font-['Syne',sans-serif]">
          JOSHUA
          <br />
          JOHNSON
        </span>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-transparent blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: First-Person Identity, Pitch & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Role & Availability Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/35 text-indigo-200 text-xs font-mono mb-5 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Technical Game Designer • Unreal Engine 5 • London, UK</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-5 font-['Syne',sans-serif] leading-[1.06]">
              I build gameplay physics,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300">
                custom shaders
              </span>{' '}
              & interactive worlds.
            </h1>

            {/* First-Person Grounded Bio */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 leading-relaxed font-normal max-w-xl">
              I&apos;m <strong className="text-white font-semibold">Josh Johnson</strong>, a London-based Technical Game Designer and BSc Computer Games Design School Representative. I love solving the awkward problems where design and maths collide, whether that means overriding Unreal Engine 5&apos;s planar gravity for{' '}
              <strong className="text-indigo-200 font-semibold">360° cylindrical pipe racing</strong>, writing{' '}
              <strong className="text-indigo-200 font-semibold">multi-directional Kuwahara watercolour shaders</strong>, or anchoring seated VR horror to{' '}
              <strong className="text-indigo-200 font-semibold">physical wheelchair inertia</strong>.
            </p>

            {/* Primary Action Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_40px_rgba(99,102,241,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-200 hover:text-white font-semibold text-xs sm:text-sm border border-rose-500/35 hover:border-rose-400/60 backdrop-blur-md transition-all duration-200 flex items-center gap-2"
              >
                <Gamepad2 className="w-4 h-4 text-rose-400" />
                <span>Play on Itch.io</span>
              </a>

              {PERSONAL_INFO.cv && (
                <a
                  href={getAssetUrl(PERSONAL_INFO.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-white/15 hover:border-indigo-500/40 transition-all duration-200 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>CV (PDF)</span>
                </a>
              )}
            </div>

            {/* 4 Game-Dev Metric Cards */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-white/10">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0a0c18]/80 border border-white/[0.07] hover:border-indigo-500/30 transition-colors"
                >
                  <div className="text-lg sm:text-xl font-extrabold text-white font-['Syne',sans-serif]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-indigo-300 tracking-wide mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5 font-mono">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive UE5 Showreel Viewport Deck */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl bg-[#090b16]/95 border border-indigo-500/35 shadow-[0_20px_70px_rgba(79,70,229,0.22)] overflow-hidden backdrop-blur-2xl">
              {/* Viewport Top HUD Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#06070f] border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="h-3.5 w-[1px] bg-white/15" />
                  <span className="text-[11px] font-mono font-bold text-indigo-300 tracking-wider uppercase flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    {activeReel.code}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {activeReel.itch && (
                    <a
                      href={activeReel.itch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-600/25 hover:bg-rose-600/40 text-rose-200 border border-rose-500/35 text-[10px] font-mono uppercase tracking-wider transition-colors"
                    >
                      <Gamepad2 className="w-3 h-3 text-rose-400" />
                      <span>Play Build</span>
                    </a>
                  )}
                  <button
                    onClick={handleOpenReelProject}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 hover:text-white border border-indigo-500/40 text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Inspect Breakdown</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Active Video Feed */}
              <div
                onClick={handleOpenReelProject}
                className="relative aspect-[16/10] bg-black cursor-pointer group overflow-hidden"
              >
                <video
                  key={activeReel.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster={activeReel.poster ? getAssetUrl(activeReel.poster) : undefined}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                >
                  <source src={getAssetUrl(activeReel.video)} type="video/mp4" />
                </video>

                {/* Bottom Gradient Overlay with Reel Title */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between gap-3">
                  <div>
                    {activeReel.projectId === 'rem' ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cyan-950/90 border border-cyan-400/40 text-[10px] font-mono text-cyan-200 mb-1">
                        <img
                          src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                          alt="Myndwell Logo"
                          className="w-3 h-3 object-contain shrink-0"
                        />
                        <span>MYNDWELL CORP // SUBJECT RECORD</span>
                      </div>
                    ) : activeReel.projectId === 'delirium' ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-950/90 border border-red-500/40 text-[10px] font-mono text-red-200 mb-1">
                        <img
                          src={getAssetUrl('/images/logos/delirium-title-logo.png')}
                          alt="Delirium"
                          className="h-2.5 object-contain shrink-0"
                        />
                        <span className="text-[9px] uppercase tracking-wider text-red-300">ST. JUDE'S VR INERTIA</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-950/90 border border-indigo-400/40 text-[10px] font-mono text-indigo-200 mb-1">
                        <Play className="w-2.5 h-2.5 fill-indigo-400 text-indigo-400" />
                        <span>LIVE ENGINE CAPTURE</span>
                      </div>
                    )}
                    <h2 className="text-lg sm:text-xl font-extrabold text-white font-['Syne',sans-serif] leading-tight">
                      {activeReel.title}
                    </h2>
                    <p className="text-xs text-slate-300 font-medium">
                      {activeReel.subtitle}
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 group-hover:bg-indigo-600 text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-colors shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Open Case Study</span>
                  </span>
                </div>
              </div>

              {/* Live Shader / Physics Telemetry Readout Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 bg-[#070913] border-t border-white/10">
                {activeReel.telemetry.map((t, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                  >
                    <div className="text-[9px] font-mono uppercase tracking-wider text-indigo-400">
                      {t.label}
                    </div>
                    <div className="text-[11px] font-mono font-semibold text-slate-200 truncate mt-0.5">
                      {t.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* 4-Channel Showreel Switcher Tabs */}
              <div className="p-2.5 bg-[#05060c] border-t border-white/10">
                <div className="flex items-center justify-between px-1.5 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-indigo-400" />
                    <span>Switch Showreel Channel (4 Live UE5 Captures):</span>
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400">
                    0{activeReelIdx + 1} / 0{HERO_REELS.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {HERO_REELS.map((reel, idx) => {
                    const isSelected = idx === activeReelIdx;
                    return (
                      <button
                        key={reel.id}
                        type="button"
                        onClick={() => setActiveReelIdx(idx)}
                        className={`p-2 rounded-xl text-left transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-indigo-600/25 border-indigo-400/70 text-white shadow-md shadow-indigo-950/50'
                            : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/[0.06] text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[9px] font-mono text-indigo-300 font-bold">
                            0{idx + 1}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'
                            }`}
                          />
                        </div>
                        <div className="text-[11px] font-bold truncate leading-snug">
                          {reel.title}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

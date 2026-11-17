import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Gamepad2, Terminal, FileText, Play, Sparkles, Layers, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, HERO_REELS, PROJECTS } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';
import { audioEngine } from '../utils/audioEngine';
import SafeVideoPlayer from './SafeVideoPlayer';

export default function Hero({ onExploreClick, onSelectProject }) {
  const [activeReelIdx, setActiveReelIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeReel = HERO_REELS[activeReelIdx] || HERO_REELS[0];

  const handleOpenReelProject = () => {
    audioEngine.playSweep();
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
      className="relative min-h-[88vh] flex flex-col justify-center pt-24 sm:pt-28 pb-14 overflow-hidden"
    >
      {/* Subtle Architectural Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,black_40%,transparent_90%)] max-w-full">
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], scale: [1, 1.01, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex flex-col items-center justify-center w-full max-w-5xl px-4"
        >
          <div className="w-full flex items-center justify-between px-4 mb-2 text-[10px] font-mono tracking-[0.25em] text-white/10 uppercase select-none">
            <span>// ARCH // 51.5074° N, 0.1278° W</span>
            <span className="hidden sm:inline">UE5.8 ENGINE VIEWPORT DECK</span>
            <span>SPEC: 16-BIT //</span>
          </div>

          <span
            className="font-extrabold text-[14vw] sm:text-[13vw] leading-[0.88] tracking-tighter uppercase text-center font-['Space_Grotesk',sans-serif] select-none text-white/[0.04]"
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.04)'
            }}
          >
            JOSHUA
            <br />
            JOHNSON
          </span>

          <div className="w-full flex items-center justify-between px-4 mt-2 text-[9px] font-mono tracking-[0.3em] text-white/[0.07] uppercase select-none">
            <span>[STAGE: ROOT_PHYSICS]</span>
            <span className="h-px flex-1 mx-4 bg-white/10" />
            <span>[RENDER: LUMEN_VIRTUALIZED]</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Steel-Cyan Key Light (Zero Purple Mesh) */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] bg-sky-500/[0.08] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1720px] mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: First-Person Identity, Pitch & CTAs */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Role & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-400/30 text-sky-200 text-[11px] sm:text-xs font-mono mb-5 shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-pulse shrink-0" />
              <span className="truncate">Technical Game Designer • UE5 • London, UK</span>
            </div>

            {/* Headline (Solid High-Contrast Steel-Cyan Accent) */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-5 font-['Space_Grotesk',sans-serif] leading-[1.06]">
              I build gameplay physics,{' '}
              <span className="text-sky-400">
                custom shaders
              </span>{' '}
              &amp; interactive worlds.
            </h1>

            {/* First-Person Grounded Bio */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-7 leading-relaxed font-normal max-w-xl">
              I&apos;m <strong className="text-white font-semibold">Josh Johnson</strong>, a London-based Technical Game Designer and elected UEL School Representative. My rule is simple: <strong className="text-sky-200 font-semibold">if I don&apos;t know it, I learn it; if I need it, I make it</strong>. From overriding Unreal Engine 5&apos;s planar gravity for <strong className="text-sky-200 font-semibold">360° cylindrical pipe racing (92% 1st Class)</strong> and rebuilding optical-kinematic animation pipelines, to writing custom HLSL post-processing shaders and OpenXR VR locomotion.
            </p>

            {/* Primary Action Bar (Opaque, High-Contrast Buttons) */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <button
                type="button"
                onClick={onExploreClick}
                className="px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm tracking-wide border border-sky-400/50 shadow-lg shadow-sky-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs sm:text-sm border border-rose-400/40 shadow-md shadow-rose-950/40 transition-all duration-150 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
              >
                <Gamepad2 className="w-4 h-4 text-rose-100" />
                <span>Play on Itch.io</span>
              </a>

              {PERSONAL_INFO.cv && (
                <a
                  href={getAssetUrl(PERSONAL_INFO.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-2xl bg-[#121620] hover:bg-[#19202e] text-slate-100 hover:text-white font-semibold text-xs sm:text-sm border border-white/15 hover:border-sky-400/40 transition-all duration-150 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>CV (PDF)</span>
                </a>
              )}
            </div>

            {/* 4 Game-Dev Metric Cells */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-white/10">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0b0e14] border border-white/[0.08] hover:border-sky-400/30 transition-colors"
                >
                  <div className="text-lg sm:text-xl font-extrabold text-white font-['Space_Grotesk',sans-serif]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-sky-300 tracking-wide mt-0.5">
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
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl bg-[#0b0e14] border border-white/[0.1] shadow-[0_24px_64px_rgba(2,6,23,0.85)] overflow-hidden">
              {/* Viewport Top HUD Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#07090f] border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="h-3.5 w-[1px] bg-white/15" />
                  <span className="text-[11px] font-mono font-bold text-sky-300 tracking-wider uppercase flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    {activeReel.code}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {activeReel.itch && (
                    <a
                      href={activeReel.itch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white border border-rose-400/40 text-[10px] font-mono uppercase tracking-wider transition-colors"
                    >
                      <Gamepad2 className="w-3 h-3" />
                      <span>Play Build</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={handleOpenReelProject}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white border border-sky-400/40 text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Inspect Breakdown</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Active Video Feed (Semantic Button Trigger) */}
              <button
                type="button"
                onClick={handleOpenReelProject}
                aria-label={`Inspect ${activeReel.title} breakdown`}
                className="relative block w-full text-left aspect-[16/10] bg-black cursor-pointer group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400"
              >
                <SafeVideoPlayer
                  src={activeReel.video}
                  poster={activeReel.poster}
                  title={activeReel.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Bottom Gradient Overlay with Reel Title */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-end justify-between gap-3">
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
                        <span className="text-[9px] uppercase tracking-wider text-red-300">ST. JUDE&apos;S VR INERTIA</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sky-950/90 border border-sky-400/40 text-[10px] font-mono text-sky-200 mb-1">
                        <Play className="w-2.5 h-2.5 fill-sky-400 text-sky-400" />
                        <span>LIVE ENGINE CAPTURE</span>
                      </div>
                    )}
                    <h2 className="text-lg sm:text-xl font-extrabold text-white font-['Space_Grotesk',sans-serif] leading-tight">
                      {activeReel.title}
                    </h2>
                    <p className="text-xs text-slate-300 font-medium">
                      {activeReel.subtitle}
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121620] group-hover:bg-sky-600 text-white text-xs font-semibold border border-white/15 group-hover:border-sky-400/50 transition-colors shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Open Case Study</span>
                  </span>
                </div>
              </button>

              {/* Live Shader / Physics Telemetry Readout Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 bg-[#07090f] border-t border-white/10">
                {activeReel.telemetry.map((t, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 rounded-xl bg-white/[0.025] border border-white/[0.06]"
                  >
                    <div className="text-[9px] font-mono uppercase tracking-wider text-sky-400">
                      {t.label}
                    </div>
                    <div className="text-[11px] font-mono font-semibold text-slate-200 truncate mt-0.5">
                      {t.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* 4-Channel Showreel Switcher Tabs */}
              <div className="p-2.5 bg-[#07090f] border-t border-white/10">
                <div className="flex items-center justify-between px-1.5 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-sky-400" />
                    <span>Switch Showreel Channel ({HERO_REELS.length} Live UE5 Captures):</span>
                  </span>
                  <span className="text-[10px] font-mono text-sky-400">
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
                        onClick={() => {
                          audioEngine.playTick(600 + idx * 80, 250);
                          setActiveReelIdx(idx);
                        }}
                        className={`p-2 min-h-[44px] rounded-xl text-left transition-all cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                          isSelected
                            ? 'bg-sky-600/20 border-sky-400/60 text-white'
                            : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/[0.06] text-slate-400 hover:text-slate-100'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[9px] font-mono text-sky-300 font-bold">
                            0{idx + 1}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? 'bg-emerald-400 motion-safe:animate-pulse' : 'bg-slate-600'
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

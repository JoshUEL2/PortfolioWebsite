import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Gamepad2, Terminal, FileText, Play, Layers, ExternalLink, Activity } from 'lucide-react';
import { PERSONAL_INFO, HERO_REELS, PROJECTS } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';
import { audioEngine } from '../utils/audioEngine';
import SafeVideoPlayer from './SafeVideoPlayer';

export default function Hero({ onExploreClick, onSelectProject }) {
  const [activeReelIdx, setActiveReelIdx] = useState(0);
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
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#070814]"
    >
      {/* Ambient Cosmic Indigo Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] max-w-[90vw] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto w-full">
        {/* Top Architectural Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 border-b border-indigo-500/25 text-[11px] font-mono uppercase tracking-widest text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#F8FAFC] font-semibold">SYS.ENGINE: UNREAL 5.8 // C++ // HLSL</span>
          </div>
          <div className="flex items-center gap-4 text-[#64748B]">
            <span>DEV_LOC: LONDON, UK</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-emerald-400 font-bold">FPS: 60 FIXED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Colossal Architectural Typographic Header & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0c0a22]/90 border border-indigo-500/35 text-indigo-300 text-xs font-mono mb-5 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>TECHNICAL GAME DESIGNER</span>
            </div>

            {/* Colossal Headline (Seth Lukin scale, Space Grotesk) */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#F8FAFC] mb-5 font-['Space_Grotesk',sans-serif] leading-[0.98] uppercase">
              Gameplay Physics.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300">
                Custom Shaders.
              </span>
              <br />
              Interactive Systems.
            </h1>

            {/* Authoritative First-Person Creed */}
            <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed max-w-xl font-['Plus_Jakarta_Sans',sans-serif]">
              I&apos;m <strong className="text-white font-semibold">Josh Johnson</strong>. My creed is simple: <strong className="text-indigo-300 font-medium">&ldquo;If I don&apos;t know it, I learn it; if I need it, I make it.&rdquo;</strong> I engineer custom mechanics from first principles—from 360° cylindrical pipe gravity in Unreal Engine 5 to OpenXR VR locomotion, procedural HLSL shaders, and academic research in neurodiversity-inclusive gameplay systems.
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={() => {
                  audioEngine.playTick(500, 200);
                  if (onExploreClick) onExploreClick();
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer font-mono shadow-[0_0_25px_rgba(99,102,241,0.5)] border border-indigo-400/40 hover:scale-[1.02] active:scale-[0.97]"
              >
                <span>Select Work Deck</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.itch}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioEngine.playTick(700, 150)}
                className="px-5 py-3.5 rounded-xl bg-[#0e0c24] hover:bg-[#161338] active:scale-[0.97] text-white font-semibold text-xs sm:text-sm border border-rose-500/40 hover:border-rose-400 transition-all flex items-center gap-2 font-mono shadow-md shadow-rose-950/30 hover:scale-[1.02]"
              >
                <Gamepad2 className="w-4 h-4 text-rose-400" />
                <span>Play on Itch.io</span>
              </a>

              {PERSONAL_INFO.cv && (
                <a
                  href={getAssetUrl(PERSONAL_INFO.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioEngine.playTick(600, 150)}
                  className="px-5 py-3.5 rounded-xl bg-[#0e0c24] hover:bg-[#161338] active:scale-[0.97] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-cyan-500/40 hover:border-cyan-400 transition-all flex items-center gap-2 font-mono shadow-md hover:scale-[1.02]"
                >
                  <FileText className="w-4 h-4 text-cyan-300" />
                  <span>CV (PDF)</span>
                </a>
              )}
            </div>

            {/* Engine & Metric Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-indigo-500/25">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0c0a22]/90 border border-indigo-500/25 hover:border-indigo-400/40 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5 font-mono">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Diegetic Viewport Deck */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl bg-[#0c0a22]/95 border border-indigo-500/35 shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden">
              {/* Viewport Top Bezel */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#09071a] border-b border-indigo-500/25">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-[#F8FAFC] font-bold">{activeReel.code}</span>
                  <span className="text-[#64748B]">STAGE_FEED</span>
                </div>

                <div className="flex items-center gap-2">
                  {activeReel.itch && (
                    <a
                      href={activeReel.itch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#09071a] hover:bg-[#161338] text-rose-300 border border-rose-500/40 text-[10px] font-mono uppercase tracking-wider transition-colors"
                    >
                      <Gamepad2 className="w-3 h-3 text-rose-400" />
                      <span>Play Build</span>
                    </a>
                  )}
                  <button
                    onClick={handleOpenReelProject}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#09071a] hover:bg-[#161338] text-indigo-300 hover:text-white border border-indigo-500/40 text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Safe Video Player */}
              <div
                onClick={handleOpenReelProject}
                className="relative aspect-[16/10] bg-black cursor-pointer group overflow-hidden"
              >
                <SafeVideoPlayer
                  src={activeReel.video}
                  poster={activeReel.poster}
                  title={activeReel.title}
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />

                {/* Bottom Bezel Data */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 border border-indigo-400/40 text-[10px] font-mono text-indigo-300 mb-1">
                      <Play className="w-2.5 h-2.5 fill-indigo-400" />
                      <span>IN-ENGINE CAPTURE // 60 FPS</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk',sans-serif] leading-tight">
                      {activeReel.title}
                    </h2>
                    <p className="text-xs text-slate-300 font-medium font-['Plus_Jakarta_Sans',sans-serif]">
                      {activeReel.subtitle}
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0c0a22] group-hover:border-indigo-400 text-indigo-300 text-xs font-mono border border-indigo-500/35 transition-colors shrink-0">
                    <span>DOSSIER</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Telemetry Output Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-2.5 bg-[#09071a] border-t border-indigo-500/25">
                {activeReel.telemetry.map((t, idx) => (
                  <div
                    key={idx}
                    className="px-2.5 py-1.5 rounded bg-[#0c0a22] border border-indigo-500/25"
                  >
                    <div className="text-[9px] font-mono uppercase tracking-wider text-indigo-300">
                      {t.label}
                    </div>
                    <div className="text-[11px] font-mono font-medium text-[#F8FAFC] truncate mt-0.5">
                      {t.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Channel Selector Deck */}
              <div className="p-2.5 bg-[#070616] border-t border-indigo-500/25">
                <div className="flex items-center justify-between px-1 mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-indigo-400" />
                    <span>FEED CHANNEL:</span>
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 font-bold">
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
                          audioEngine.playTick(600 + idx * 80, 200);
                          setActiveReelIdx(idx);
                        }}
                        className={`p-2 rounded-lg text-left transition-all cursor-pointer border font-mono ${
                          isSelected
                            ? 'bg-gradient-to-r from-indigo-600/80 to-violet-600/80 border-indigo-300/80 text-white shadow-sm'
                            : 'bg-[#0c0a22] hover:bg-[#161338] border-indigo-500/25 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className={`text-[9px] font-bold ${isSelected ? 'text-white' : 'text-indigo-400'}`}>
                            0{idx + 1}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? 'bg-emerald-300 animate-pulse' : 'bg-slate-700'
                            }`}
                          />
                        </div>
                        <div className="text-[11px] font-bold truncate">
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

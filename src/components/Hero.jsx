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
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#06070D]"
    >
      <div className="max-w-[1360px] mx-auto w-full">
        {/* Top Architectural Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 border-b border-[#1A2234] text-[11px] font-mono uppercase tracking-widest text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#F8FAFC] font-semibold">SYS.ENGINE: UNREAL 5.8 // C++ // HLSL</span>
          </div>
          <div className="flex items-center gap-4 text-[#64748B]">
            <span>DEV_LOC: LONDON, UK</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-[#00F2FE] font-bold">FPS: 60 FIXED</span>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D111A] border border-[#1A2234] text-[#00F2FE] text-xs font-mono mb-5">
              <Activity className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>TECHNICAL GAME DESIGNER</span>
            </div>

            {/* Colossal Headline (Seth Lukin scale, Space Grotesk) */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#F8FAFC] mb-5 font-['Space_Grotesk',sans-serif] leading-[0.98] uppercase">
              Gameplay Physics.
              <br />
              <span className="text-[#00F2FE]">Custom Shaders.</span>
              <br />
              Interactive Systems.
            </h1>

            {/* Authoritative First-Person Creed */}
            <p className="text-sm sm:text-base text-[#94A3B8] mb-6 leading-relaxed max-w-xl font-['Plus_Jakarta_Sans',sans-serif]">
              I&apos;m <strong className="text-[#F8FAFC] font-semibold">Josh Johnson</strong>. My creed is simple: <strong className="text-[#00F2FE] font-medium">&ldquo;If I don&apos;t know it, I learn it; if I need it, I make it.&rdquo;</strong> I engineer custom mechanics from first principles—from 360° cylindrical pipe gravity in Unreal Engine 5 to OpenXR VR locomotion, procedural HLSL shaders, and academic research in neurodiversity-inclusive gameplay systems.
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={() => {
                  audioEngine.playTick(500, 200);
                  if (onExploreClick) onExploreClick();
                }}
                className="px-6 py-3.5 rounded bg-[#00F2FE] hover:bg-[#38BDF8] active:scale-[0.97] text-[#06070D] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer font-mono"
              >
                <span>Select Work Deck</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.itch}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioEngine.playTick(700, 150)}
                className="px-5 py-3.5 rounded bg-[#0D111A] hover:bg-[#131926] active:scale-[0.97] text-[#F8FAFC] font-semibold text-xs sm:text-sm border border-[#1A2234] hover:border-[#00F2FE] transition-all flex items-center gap-2 font-mono"
              >
                <Gamepad2 className="w-4 h-4 text-[#F59E0B]" />
                <span>Play on Itch.io</span>
              </a>

              {PERSONAL_INFO.cv && (
                <a
                  href={getAssetUrl(PERSONAL_INFO.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioEngine.playTick(600, 150)}
                  className="px-5 py-3.5 rounded bg-[#0D111A] hover:bg-[#131926] active:scale-[0.97] text-[#94A3B8] hover:text-[#F8FAFC] font-semibold text-xs sm:text-sm border border-[#1A2234] transition-all flex items-center gap-2 font-mono"
                >
                  <FileText className="w-4 h-4 text-[#00F2FE]" />
                  <span>CV (PDF)</span>
                </a>
              )}
            </div>

            {/* Engine & Metric Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[#1A2234]">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded bg-[#0D111A] border border-[#1A2234]"
                >
                  <div className="text-xl sm:text-2xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#00F2FE] uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-[#64748B] truncate mt-0.5 font-mono">
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
            <div className="rounded bg-[#0D111A] border border-[#1A2234] shadow-2xl overflow-hidden">
              {/* Viewport Top Bezel */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#080C14] border-b border-[#1A2234]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
                  <Terminal className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span className="text-[#F8FAFC] font-bold">{activeReel.code}</span>
                  <span className="text-[#64748B]">STAGE_FEED</span>
                </div>

                <div className="flex items-center gap-2">
                  {activeReel.itch && (
                    <a
                      href={activeReel.itch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#06070D] hover:bg-[#131926] text-[#F59E0B] border border-[#F59E0B]/40 text-[10px] font-mono uppercase tracking-wider transition-colors"
                    >
                      <Gamepad2 className="w-3 h-3 text-[#F59E0B]" />
                      <span>Play Build</span>
                    </a>
                  )}
                  <button
                    onClick={handleOpenReelProject}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#06070D] hover:bg-[#131926] text-[#00F2FE] hover:text-white border border-[#00F2FE]/40 text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
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
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 border border-[#00F2FE]/40 text-[10px] font-mono text-[#00F2FE] mb-1">
                      <Play className="w-2.5 h-2.5 fill-[#00F2FE]" />
                      <span>IN-ENGINE CAPTURE // 60 FPS</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk',sans-serif] leading-tight">
                      {activeReel.title}
                    </h2>
                    <p className="text-xs text-[#94A3B8] font-medium font-['Plus_Jakarta_Sans',sans-serif]">
                      {activeReel.subtitle}
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0D111A] group-hover:border-[#00F2FE] text-[#00F2FE] text-xs font-mono border border-[#1A2234] transition-colors shrink-0">
                    <span>DOSSIER</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Telemetry Output Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-2.5 bg-[#080C14] border-t border-[#1A2234]">
                {activeReel.telemetry.map((t, idx) => (
                  <div
                    key={idx}
                    className="px-2.5 py-1.5 rounded bg-[#0D111A] border border-[#1A2234]"
                  >
                    <div className="text-[9px] font-mono uppercase tracking-wider text-[#00F2FE]">
                      {t.label}
                    </div>
                    <div className="text-[11px] font-mono font-medium text-[#F8FAFC] truncate mt-0.5">
                      {t.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Channel Selector Deck */}
              <div className="p-2.5 bg-[#06070D] border-t border-[#1A2234]">
                <div className="flex items-center justify-between px-1 mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[#00F2FE]" />
                    <span>FEED CHANNEL:</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#00F2FE]">
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
                        className={`p-2 rounded text-left transition-all cursor-pointer border font-mono ${
                          isSelected
                            ? 'bg-[#131926] border-[#00F2FE] text-[#F8FAFC]'
                            : 'bg-[#0D111A] hover:bg-[#131926] border-[#1A2234] text-[#94A3B8] hover:text-[#F8FAFC]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[9px] text-[#00F2FE] font-bold">
                            0{idx + 1}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? 'bg-[#10B981]' : 'bg-[#1A2234]'
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

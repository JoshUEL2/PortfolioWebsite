import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Menu, X, ArrowUpRight, FileText, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ALL_PROJECTS } from '../data/allProjectsData';
import { getAssetUrl } from '../utils/assetUrl';
import { audioEngine } from '../utils/audioEngine';

export default function Navbar({ currentView = 'featured', onViewChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMuted, setIsMuted] = useState(() => audioEngine.isMuted());

  useEffect(() => {
    const handleMuteChange = (e) => {
      setIsMuted(e.detail.isMuted);
    };
    window.addEventListener('portfolio_audio_mute_toggle', handleMuteChange);
    return () => window.removeEventListener('portfolio_audio_mute_toggle', handleMuteChange);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleToggleAudio = () => {
    const next = audioEngine.toggleMute();
    setIsMuted(next);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);

          if (currentView === 'featured') {
            const sections = ['home', 'portfolio', 'research', 'toolkit', 'about', 'contact'];
            for (const section of sections) {
              const el = document.getElementById(section);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 260 && rect.bottom >= 260) {
                  setActiveSection(section);
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navLinks = [
    { id: 'portfolio', label: 'FEATURED', shortLabel: 'FEATURED' },
    { id: 'research', label: 'RESEARCH', shortLabel: 'RESEARCH' },
    { id: 'toolkit', label: 'HARDWARE LAB', shortLabel: 'LAB' },
    { id: 'about', label: 'DOSSIER', shortLabel: 'DOSSIER' },
    { id: 'contact', label: 'CONTACT', shortLabel: 'CONTACT' }
  ];

  const handleBrandClick = () => {
    audioEngine.playTick(900, 300);
    setMobileMenuOpen(false);
    if (currentView !== 'featured' && onViewChange) {
      onViewChange('featured');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    audioEngine.playTick();
    setMobileMenuOpen(false);
    if (currentView !== 'featured' && onViewChange) {
      onViewChange('featured');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 60);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenAllProjects = () => {
    audioEngine.playSweep();
    setMobileMenuOpen(false);
    if (onViewChange) {
      onViewChange('all-projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-4 md:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-5 lg:px-8 pointer-events-none">
        <motion.nav
          initial={{ y: -32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-2 w-full max-w-[1720px] px-3.5 sm:px-5 lg:px-8 xl:px-10 py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-[#0b0e14]/95 backdrop-blur-xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.75)]'
              : 'bg-[#0b0e14]/85 backdrop-blur-md border border-white/10 shadow-lg'
          }`}
        >
          {/* Brand & Instant Home Reset (Squircle Avatar) */}
          <button
            type="button"
            onClick={handleBrandClick}
            className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border border-white/20 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-black/40 group-hover:border-sky-400/50 group-hover:scale-105 transition-all">
              JJ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-sky-200 transition-colors whitespace-nowrap">
                Josh<span className="hidden lg:inline"> Johnson</span>
              </span>
              <span className="flex md:hidden xl:flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                Technical Game Designer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Squircles, Zero Overflow at 768px+) */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-white/[0.03] border border-white/[0.08] rounded-xl p-1 shrink min-w-0">
            {navLinks.map((link) => {
              const isActive = currentView === 'featured' && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-2 lg:px-3 py-1.5 rounded-lg text-[10px] lg:text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.05]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 bg-white/[0.12] border border-white/20 rounded-lg shadow-sm -z-10"
                    />
                  )}
                  <span className="hidden lg:inline">{link.label}</span>
                  <span className="lg:hidden">{link.shortLabel}</span>
                </button>
              );
            })}

            {/* Highlighted Game Vault Launcher Squircle Button */}
            <button
              type="button"
              onClick={handleOpenAllProjects}
              className={`relative ml-0.5 lg:ml-1 px-2 lg:px-3 py-1.5 rounded-lg text-[10px] lg:text-xs font-bold tracking-wider transition-all duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                currentView === 'all-projects'
                  ? 'bg-sky-500/20 text-white border border-sky-400/40'
                  : 'bg-white/[0.07] hover:bg-white/[0.14] text-slate-100 hover:text-white border border-white/15 hover:border-white/30'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="hidden xl:inline">ALL GAMES ({ALL_PROJECTS.length})</span>
              <span className="xl:hidden">ALL ({ALL_PROJECTS.length})</span>
            </button>
          </div>

          {/* Social Links, CV & Mobile Toggle */}
          <div className="flex items-center gap-1 lg:gap-2 shrink-0">
            {PERSONAL_INFO.cv && (
              <a
                href={getAssetUrl(PERSONAL_INFO.cv)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                title="View CV (PDF)"
              >
                <FileText className="w-3.5 h-3.5 text-slate-300" />
                <span>CV</span>
              </a>
            )}

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium p-2 xl:px-3 xl:py-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 hover:text-white border border-sky-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <LinkedinIcon className="w-4 h-4 xl:w-3.5 xl:h-3.5 text-sky-400" />
              <span className="hidden xl:inline">LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:inline-flex p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.itch}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Itch.io Games"
              className="hidden sm:inline-flex p-2 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 hover:text-white border border-rose-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Gamepad2 className="w-4 h-4 text-rose-400" />
            </a>

            {/* Audio SFX Toggle Button */}
            <button
              type="button"
              onClick={handleToggleAudio}
              className={`p-2 rounded-lg border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                isMuted
                  ? 'bg-white/[0.03] text-slate-400 border-white/10 hover:text-slate-200 hover:border-white/25'
                  : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
              }`}
              title={isMuted ? 'Interface SFX: Muted (Click to Enable)' : 'Interface SFX: Active (Click to Mute)'}
              aria-label="Toggle Interface Audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Squircle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/[0.05] text-slate-200 hover:text-white border border-white/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-20 z-40 bg-[#0b0e14]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left py-2.5 px-3.5 rounded-xl text-xs font-semibold tracking-wider text-slate-200 hover:bg-white/5 hover:text-white transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              ))}

              <button
                type="button"
                onClick={handleOpenAllProjects}
                className="w-full text-left py-3 px-3.5 rounded-xl text-xs font-bold tracking-wider bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white transition-all flex items-center justify-between cursor-pointer mt-1"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  EXPLORE ALL {ALL_PROJECTS.length} PROJECTS
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </button>

              <div className="pt-3 mt-2 border-t border-white/10 flex flex-wrap items-center justify-around gap-2">
                {PERSONAL_INFO.cv && (
                  <a
                    href={getAssetUrl(PERSONAL_INFO.cv)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white font-medium py-2 px-3 rounded-lg bg-white/[0.06] border border-white/15"
                  >
                    <FileText className="w-4 h-4 text-slate-300" />
                    CV (PDF)
                  </a>
                )}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-sky-300 font-medium py-2 px-3 rounded-lg bg-sky-500/10 border border-sky-500/30"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-300 font-medium py-2 px-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={PERSONAL_INFO.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-rose-300 font-medium py-2 px-3 rounded-lg bg-rose-500/10 border border-rose-500/30"
                >
                  <Gamepad2 className="w-4 h-4 text-rose-400" />
                  Itch.io
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

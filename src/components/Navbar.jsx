import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Menu, X, FileText, Volume2, VolumeX } from 'lucide-react';
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

  // Keyboard shortcut: 'M' toggles audio, 1-5 navigates
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'm' || e.key === 'M') {
        const next = audioEngine.toggleMute();
        setIsMuted(next);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleAudio = () => {
    const next = audioEngine.toggleMute();
    setIsMuted(next);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);

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
    { id: 'portfolio', label: 'WORK DECK' },
    { id: 'research', label: 'DISSERTATION' },
    { id: 'toolkit', label: 'ENGINE LAB' },
    { id: 'about', label: 'DOSSIER' },
    { id: 'contact', label: 'TRANSMIT' }
  ];

  const handleBrandClick = () => {
    audioEngine.playTick(900, 200);
    if (currentView !== 'featured' && onViewChange) {
      onViewChange('featured');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    audioEngine.playTick(650, 150);
    setMobileMenuOpen(false);
    if (currentView !== 'featured' && onViewChange) {
      onViewChange('featured');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 60);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-12 pointer-events-none transition-all duration-200">
        <div className="w-full max-w-[1360px] pt-3 sm:pt-4">
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`pointer-events-auto flex items-center justify-between w-full px-4 sm:px-6 py-2.5 rounded-xl bg-[#0c0a20]/95 border transition-all ${
              scrolled
                ? 'border-indigo-500/60 shadow-2xl shadow-black/80'
                : 'border-indigo-500/35 shadow-lg'
            }`}
          >
            {/* Brand / Logo */}
            <button
              onClick={handleBrandClick}
              className="flex items-center gap-3 text-left group cursor-pointer focus-visible:ring-1 focus-visible:ring-indigo-400"
            >
              <div className="w-7 h-7 rounded bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-mono font-bold text-xs flex items-center justify-center tracking-tighter shadow-sm shadow-indigo-950/60">
                JJ
              </div>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk',sans-serif] font-bold text-sm tracking-tight text-[#F8FAFC] uppercase">
                  Joshua Johnson
                </span>
                <span className="text-[10px] font-mono text-indigo-300 tracking-wider uppercase">
                  UE5 Systems Designer
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-[#070616] border border-indigo-500/25 rounded-lg p-1">
              {navLinks.map((link) => {
                const isActive = currentView === 'featured' && activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`relative px-3 py-1 text-xs font-mono font-semibold tracking-wider transition-all duration-150 cursor-pointer rounded ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-950/60'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#13112c]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}

              <button
                onClick={handleOpenAllProjects}
                className={`relative ml-1 px-3 py-1 rounded text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                  currentView === 'all-projects'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-[#06070D]'
                    : 'text-amber-300 border border-amber-500/40 hover:bg-amber-500/15'
                }`}
              >
                VAULT ({ALL_PROJECTS.length})
              </button>
            </div>

            {/* Right Action Cluster: Audio Engine, CV, Links */}
            <div className="flex items-center gap-2">
              {/* Procedural Audio Toggle */}
              <button
                type="button"
                onClick={handleToggleAudio}
                aria-label={isMuted ? 'Unmute procedural audio (M key)' : 'Mute procedural audio (M key)'}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 border transition-all cursor-pointer ${
                  isMuted
                    ? 'bg-[#070616] text-[#64748B] border-indigo-500/25 hover:text-[#F8FAFC]'
                    : 'bg-[#070616] text-indigo-300 border-indigo-500/50 shadow-[0_0_12px_rgba(99,102,241,0.25)]'
                }`}
                title="Toggle Web Audio cues [M]"
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-indigo-300" />
                )}
                <span className="hidden sm:inline text-[10px] uppercase font-bold">
                  {isMuted ? 'MUTED' : 'AUDIO'}
                </span>
                <span className="hidden lg:inline text-[9px] text-[#64748B]">[M]</span>
              </button>

              {PERSONAL_INFO.cv && (
                <a
                  href={getAssetUrl(PERSONAL_INFO.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-[#06070D] hover:bg-[#131926] text-[#F8FAFC] border border-[#1A2234] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span>CV</span>
                </a>
              )}

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hidden xl:inline-flex p-1.5 rounded bg-[#06070D] hover:bg-[#131926] text-[#94A3B8] hover:text-[#00F2FE] border border-[#1A2234] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hidden xl:inline-flex p-1.5 rounded bg-[#06070D] hover:bg-[#131926] text-[#94A3B8] hover:text-[#00F2FE] border border-[#1A2234] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => {
                  audioEngine.playTick(500, 150);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                aria-label="Toggle navigation menu"
                className="md:hidden p-2 rounded bg-[#06070D] border border-[#1A2234] text-[#F8FAFC] cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 px-4 md:hidden"
          >
            <div className="p-4 rounded bg-[#0D111A] border border-[#00F2FE] shadow-2xl flex flex-col gap-2 font-mono">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left px-4 py-2.5 rounded bg-[#06070D] text-sm text-[#F8FAFC] hover:text-[#00F2FE] border border-[#1A2234] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={handleOpenAllProjects}
                className="w-full text-left px-4 py-2.5 rounded bg-[#F59E0B]/20 text-sm text-[#F59E0B] border border-[#F59E0B]/40 font-bold"
              >
                PROJECT ARCHIVE VAULT ({ALL_PROJECTS.length})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Menu, X, ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ALL_PROJECTS } from '../data/allProjectsData';
import { getAssetUrl } from '../utils/assetUrl';

export default function Navbar({ currentView = 'featured', onViewChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navLinks = [
    { id: 'portfolio', label: 'FEATURED' },
    { id: 'research', label: 'RESEARCH' },
    { id: 'toolkit', label: 'HARDWARE LAB' },
    { id: 'about', label: 'DOSSIER' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleBrandClick = () => {
    if (currentView !== 'featured' && onViewChange) {
      onViewChange('featured');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
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
    setMobileMenuOpen(false);
    if (onViewChange) {
      onViewChange('all-projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#090b16]/90 backdrop-blur-xl border border-indigo-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
              : 'bg-[#090b16]/75 backdrop-blur-md border border-white/10 shadow-lg'
          }`}
        >
          {/* Brand & Instant Home Reset */}
          <button
            onClick={handleBrandClick}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              JJ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Josh Johnson
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Technical Game Designer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1">
            {navLinks.map((link) => {
              const isActive = currentView === 'featured' && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/40 rounded-full -z-10"
                    />
                  )}
                  {link.label}
                </button>
              );
            })}

            {/* Highlighted Game Vault Launcher Pill */}
            <button
              onClick={handleOpenAllProjects}
              className={`relative ml-1 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                currentView === 'all-projects'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]'
                  : 'bg-indigo-950/70 hover:bg-indigo-900/70 text-indigo-300 hover:text-white border border-indigo-500/40'
              }`}
            >
              <Sparkles className="w-3 h-3 text-indigo-300" />
              <span>ALL GAMES ({ALL_PROJECTS.length})</span>
            </button>
          </div>

          {/* Social Links, CV & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {PERSONAL_INFO.cv && (
              <a
                href={getAssetUrl(PERSONAL_INFO.cv)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/10 transition-all hover:scale-105"
                title="View CV (PDF)"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>CV</span>
              </a>
            )}

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:inline-flex p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.itch}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Itch.io Games"
              className="hidden sm:inline-flex p-2 rounded-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-all hover:scale-105"
            >
              <Gamepad2 className="w-4 h-4 text-rose-400" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/[0.05] text-slate-200 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 bg-[#0c0e1a]/95 backdrop-blur-2xl border border-indigo-500/30 rounded-2xl p-5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider text-slate-200 hover:bg-white/5 hover:text-white transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              ))}

              <button
                onClick={handleOpenAllProjects}
                className="w-full text-left py-3 px-4 rounded-xl text-xs font-bold tracking-wider bg-gradient-to-r from-indigo-600/40 to-violet-600/40 border border-indigo-500/40 text-white transition-all flex items-center justify-between cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                  EXPLORE ALL {ALL_PROJECTS.length} PROJECTS
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-300" />
              </button>

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-wrap items-center justify-around gap-2">
                {PERSONAL_INFO.cv && (
                  <a
                    href={getAssetUrl(PERSONAL_INFO.cv)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white font-medium py-2 px-3 rounded-lg bg-indigo-600/30 border border-indigo-500/40"
                  >
                    <FileText className="w-4 h-4 text-indigo-300" />
                    CV (PDF)
                  </a>
                )}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-indigo-300 font-medium py-2 px-3 rounded-lg bg-indigo-950/50 border border-indigo-500/30"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
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
                  className="flex items-center gap-1.5 text-xs text-rose-300 font-medium py-2 px-3 rounded-lg bg-rose-950/50 border border-rose-500/30"
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

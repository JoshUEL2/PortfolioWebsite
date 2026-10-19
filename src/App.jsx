import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import AllProjectsPage from './components/AllProjectsPage';
import ResearchSection from './components/ResearchSection';
import Competencies from './components/Competencies';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import BackgroundShader from './components/BackgroundShader';
import ShowstopperIntro from './components/ShowstopperIntro';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentView, setCurrentView] = useState('featured');
  const [showIntro, setShowIntro] = useState(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('intro') === '1' || urlParams.get('replay') === '1') {
        return true;
      }
      return !sessionStorage.getItem('hasSeenJoshIntro');
    } catch {
      return true;
    }
  });

  const findProjectByKey = useCallback((key) => {
    if (!key) return null;
    const clean = key.toLowerCase().trim();
    return (
      PROJECTS.find(
        (p) => p.id.toLowerCase() === clean || p.slug?.toLowerCase() === clean
      ) || null
    );
  }, []);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#all-projects') {
        setCurrentView('all-projects');
        setSelectedProject(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#projects' || hash === '#portfolio') {
        setCurrentView('featured');
        setSelectedProject(null);
        setTimeout(() => {
          const el = document.getElementById('portfolio');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else if (hash === '#research') {
        setCurrentView('featured');
        setSelectedProject(null);
        setTimeout(() => {
          const el = document.getElementById('research');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else if (hash.startsWith('#project=')) {
        const key = decodeURIComponent(hash.replace('#project=', ''));
        const found = findProjectByKey(key);
        if (found) {
          setSelectedProject(found);
        }
      } else if (hash === '') {
        setSelectedProject(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [findProjectByKey]);

  const handleSelectProject = (proj) => {
    if (!proj) {
      setSelectedProject(null);
      if (window.location.hash.startsWith('#project=')) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
      return;
    }
    const slug = proj.slug || proj.id;
    const enriched = findProjectByKey(slug) || proj;
    setSelectedProject({
      ...enriched,
      initialPhaseIndex: proj.initialPhaseIndex ?? 0
    });
    history.pushState(
      '',
      document.title,
      `${window.location.pathname}${window.location.search}#project=${slug}`
    );
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    setSelectedProject(null);
    if (view === 'all-projects') {
      history.pushState('', document.title, `${window.location.pathname}${window.location.search}#all-projects`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      history.pushState('', document.title, window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#06070d] text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Interactive 60fps Ambient Particle Shader (Layer 01 Backdrop) */}
      <BackgroundShader />

      {/* Subtle Ambient Vignettes & Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col">
        {/* Floating Capsule Header */}
        <Navbar
          currentView={currentView}
          onViewChange={handleViewChange}
          onReplayIntro={() => setShowIntro(true)}
        />

        {currentView === 'all-projects' ? (
          <main className="flex-1">
            <AllProjectsPage
              onSelectProject={handleSelectProject}
              onBackToHome={() => handleViewChange('featured')}
            />
          </main>
        ) : (
          <main className="flex-1">
            {/* LAYER 01 // Game Engine Viewport: Hero & Featured Showcase + Bottom Vault Portal */}
            <Hero
              onExploreClick={handleExploreClick}
              onSelectProject={handleSelectProject}
            />

            <ProjectShowcase
              onSelectProject={handleSelectProject}
              onViewAllProjects={() => handleViewChange('all-projects')}
            />

            {/* LAYER 02 // Formal Academic Monograph Biome: Provisional BSc Dissertation */}
            <ResearchSection />

            {/* LAYER 03 // Grungy PCB & Hardware Workbench Biome: Engines, Shaders & Hardware Lab */}
            <Competencies />

            {/* LAYER 04 // Corporate-Studio Executive Dossier Biome: Candidate Record & Studio Contact */}
            <AboutSection />

            <ContactSection />
          </main>
        )}

        {/* Footer */}
        <Footer onReplayIntro={() => setShowIntro(true)} />
      </div>

      {/* Full-screen Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            key={`${selectedProject.id}-${selectedProject.initialPhaseIndex ?? 0}`}
            project={selectedProject}
            onClose={() => handleSelectProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Showstopper Windows 11 Intro Experience */}
      <AnimatePresence>
        {showIntro && (
          <ShowstopperIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

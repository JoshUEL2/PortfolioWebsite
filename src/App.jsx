import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import ResearchSection from './components/ResearchSection';
import Competencies from './components/Competencies';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { PROJECTS } from './data/portfolioData';

// Code-split heavy interactive overlays & secondary route pages
const AllProjectsPage = lazy(() => import('./components/AllProjectsPage'));
const CaseStudyModal = lazy(() => import('./components/CaseStudyModal'));
const ShowstopperIntro = lazy(() => import('./components/ShowstopperIntro'));

const SECTION_HASHES = {
  '#projects': 'portfolio',
  '#portfolio': 'portfolio',
  '#research': 'research',
  '#toolkit': 'toolkit',
  '#about': 'about',
  '#contact': 'contact',
};

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
      return false;
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
    let scrollTimer;

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#all-projects') {
        setCurrentView('all-projects');
        setSelectedProject(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (SECTION_HASHES[hash]) {
        const targetId = SECTION_HASHES[hash];
        setCurrentView('featured');
        setSelectedProject(null);
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          const el = document.getElementById(targetId);
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
    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener('hashchange', handleHash);
    };
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
    const initialPhaseIndex = proj.initialPhaseIndex ?? proj.initialVersionIndex ?? 0;

    setSelectedProject({
      ...enriched,
      initialPhaseIndex,
      initialVersionIndex: initialPhaseIndex,
      initialLightboxIndex: proj.initialLightboxIndex ?? null,
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
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#07090f] text-slate-50 overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Subtle Obsidian Grid & Vignette */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
        <div className="fixed inset-0 bg-radial-vignette pointer-events-none z-0" />

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col">
          {/* Floating Squircle Capsule Header */}
          <Navbar
            currentView={currentView}
            onViewChange={handleViewChange}
          />

          {currentView === 'all-projects' ? (
            <main className="flex-1">
              <Suspense fallback={<div className="min-h-screen pt-36 text-center text-slate-400 font-mono text-xs">INITIALIZING ARCHIVE VAULT...</div>}>
                <AllProjectsPage
                  onSelectProject={handleSelectProject}
                  onBackToHome={() => handleViewChange('featured')}
                />
              </Suspense>
            </main>
          ) : (
            <main className="flex-1">
              {/* LAYER 01 // Game Engine Viewport: Hero & Featured Showcase + Vault Portal */}
              <Hero
                onExploreClick={handleExploreClick}
                onSelectProject={handleSelectProject}
              />

              <ProjectShowcase
                onSelectProject={handleSelectProject}
                onViewAllProjects={() => handleViewChange('all-projects')}
              />

              {/* LAYER 02 // Monograph Section: Provisional BSc Dissertation */}
              <ResearchSection />

              {/* LAYER 03 // Systems & Hardware Workbench: Engines, Shaders & Hardware Lab */}
              <Competencies />

              {/* LAYER 04 // Candidate Record & Studio Contact */}
              <AboutSection />

              <ContactSection />
            </main>
          )}

          <Footer />
        </div>

        {/* Full-screen Engine Inspector Modal */}
        <AnimatePresence>
          {selectedProject && (
            <Suspense fallback={null}>
              <CaseStudyModal
                key={`${selectedProject.id}-${selectedProject.initialPhaseIndex ?? 0}`}
                project={selectedProject}
                onClose={() => handleSelectProject(null)}
              />
            </Suspense>
          )}
        </AnimatePresence>

        {/* Intro Experience (bypassed under reduced motion) */}
        <AnimatePresence>
          {showIntro && (
            <Suspense fallback={null}>
              <ShowstopperIntro onComplete={() => setShowIntro(false)} />
            </Suspense>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}

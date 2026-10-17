import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import Competencies from './components/Competencies';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import BackgroundShader from './components/BackgroundShader';
import AllProjectsPage from './components/AllProjectsPage';
import { PROJECTS } from './data/portfolioData';
import { ALL_PROJECTS } from './data/allProjectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentView, setCurrentView] = useState('featured'); // 'featured' | 'all-projects'

  // Resolve any project ID or slug across both lists, preferring the enriched entry
  const findProjectByKey = useCallback((key) => {
    if (!key) return null;
    const clean = key.toLowerCase().trim();
    return (
      ALL_PROJECTS.find((p) => p.id.toLowerCase() === clean || p.slug?.toLowerCase() === clean) ||
      PROJECTS.find((p) => p.id.toLowerCase() === clean) ||
      null
    );
  }, []);

  // Hash-based routing for bookmarking / refreshing directly on #projects or #project=<slug>
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#projects') {
        setCurrentView('all-projects');
        setSelectedProject(null);
      } else if (hash.startsWith('#project=')) {
        const key = decodeURIComponent(hash.replace('#project=', ''));
        const found = findProjectByKey(key);
        if (found) {
          setSelectedProject(found);
        }
      } else {
        if (hash === '') {
          setSelectedProject(null);
        }
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
        const fallbackHash = currentView === 'all-projects' ? '#projects' : '';
        history.pushState('', document.title, window.location.pathname + window.location.search + fallbackHash);
      }
      return;
    }
    const slug = proj.slug || proj.id;
    setSelectedProject(proj);
    history.pushState('', document.title, `${window.location.pathname}${window.location.search}#project=${slug}`);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    setSelectedProject(null);
    if (view === 'all-projects') {
      window.location.hash = 'projects';
    } else {
      if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
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
      {/* Interactive 60fps Ambient Particle Shader */}
      <BackgroundShader />

      {/* Subtle Ambient Vignettes & Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col">
        {/* Floating Capsule Header */}
        <Navbar currentView={currentView} onViewChange={handleViewChange} />

        {/* View Switching: Featured Showcase vs All Projects Catalogue */}
        <main className="flex-1">
          {currentView === 'featured' ? (
            <>
              {/* Hero Section */}
              <Hero onExploreClick={handleExploreClick} />

              {/* Interactive Project Matrix (Flagship Spotlights + 3 Game Disciplines + Vault Quick-Shelf) */}
              <ProjectShowcase
                onSelectProject={handleSelectProject}
                onViewAllProjects={() => handleViewChange('all-projects')}
              />

              {/* Core Disciplines, Technical Competencies & Compact Hardware Strip */}
              <Competencies />

              {/* About Me, Verified 1st Class Module Record & Operating Philosophy */}
              <AboutSection />

              {/* Contact & Inquiry */}
              <ContactSection />
            </>
          ) : (
            <AllProjectsPage
              onBackToHome={() => handleViewChange('featured')}
              onSelectProject={handleSelectProject}
            />
          )}
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Full-screen Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => handleSelectProject(null)}
        />
      )}
    </div>
  );
}

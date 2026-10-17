import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import ResearchSection from './components/ResearchSection';
import Competencies from './components/Competencies';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import BackgroundShader from './components/BackgroundShader';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentView, setCurrentView] = useState('featured');

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
      if (hash === '#projects' || hash === '#portfolio') {
        setSelectedProject(null);
        setTimeout(() => {
          const el = document.getElementById('portfolio');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else if (hash === '#research') {
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

        {/* Unified Non-Duplicating Single-Page Flow */}
        <main className="flex-1">
          {/* 00 // Interactive Showreel Hero Deck */}
          <Hero
            onExploreClick={handleExploreClick}
            onSelectProject={handleSelectProject}
          />

          {/* 01 // Unified 15-Project Showcase by Discipline (Zero Duplication) */}
          <ProjectShowcase onSelectProject={handleSelectProject} />

          {/* 02 // Provisional BSc Dissertation & Academic Research (Counting the Spectrum) */}
          <ResearchSection />

          {/* 03 // Crisp 4-Column Toolkit Spec Sheet & Side Hardware R&D Lab */}
          <Competencies />

          {/* 04 // Grounded Developer Bio & Verified 8x First-Class Honours Record */}
          <AboutSection />

          {/* 05 // Direct Studio Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Full-screen Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          key={`${selectedProject.id}-${selectedProject.initialPhaseIndex ?? 0}`}
          project={selectedProject}
          onClose={() => handleSelectProject(null)}
        />
      )}
    </div>
  );
}

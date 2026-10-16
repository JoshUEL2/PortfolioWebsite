import { useState, useEffect } from 'react';
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

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentView, setCurrentView] = useState('featured'); // 'featured' | 'all-projects'

  // Hash-based routing for bookmarking / refreshing directly on #projects
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#projects') {
        setCurrentView('all-projects');
      } else {
        setCurrentView('featured');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleViewChange = (view) => {
    setCurrentView(view);
    if (view === 'all-projects') {
      window.location.hash = 'projects';
    } else {
      // Clear hash without reload
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

        {/* View Switching: Featured Showcase vs All Projects Catalog */}
        <main className="flex-1">
          {currentView === 'featured' ? (
            <>
              {/* Hero Section */}
              <Hero onExploreClick={handleExploreClick} />

              {/* Interactive Project Matrix (3 Disciplines + Wix Overshoot Motion) */}
              <ProjectShowcase
                onSelectProject={setSelectedProject}
                onViewAllProjects={() => handleViewChange('all-projects')}
              />

              {/* Core Disciplines & Technical Competencies */}
              <Competencies />

              {/* About Me & Operating Philosophy */}
              <AboutSection />

              {/* Contact & Inquiry */}
              <ContactSection />
            </>
          ) : (
            <AllProjectsPage
              onBackToHome={() => handleViewChange('featured')}
              onSelectProject={setSelectedProject}
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
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

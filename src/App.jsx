import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import Competencies from './components/Competencies';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import BackgroundShader from './components/BackgroundShader';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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
        <Navbar />

        {/* Hero Section */}
        <main className="flex-1">
          <Hero onExploreClick={handleExploreClick} />

          {/* Interactive Project Matrix (Accordion tabs) */}
          <ProjectShowcase onSelectProject={setSelectedProject} />

          {/* Core Disciplines & Technical Competencies */}
          <Competencies />

          {/* About Me & Operating Philosophy */}
          <AboutSection />

          {/* Contact & Inquiry */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Full-screen Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

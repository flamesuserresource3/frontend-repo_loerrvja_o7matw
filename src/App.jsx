import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-neutral-950 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Flames Portfolio — Built with care.
      </footer>
    </div>
  );
}

export default App;

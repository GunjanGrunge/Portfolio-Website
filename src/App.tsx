import React from 'react';
import Navigation from './app/components/Navigation';
import Hero from './app/sections/Hero';
import Experience from './app/sections/Experience';
import Education from './app/sections/Education';
import Projects from './app/sections/Projects';
import TechStack from './app/sections/TechStack';
import Footer from './app/components/Footer';
import BootstrapProvider from './app/components/client/BootstrapProvider';
import { DotPattern } from './app/components/client/DotPattern';

function App() {
  return (
    <BootstrapProvider>
      <div style={{ fontFamily: 'Oxanium, cursive' }} className="relative min-h-screen">
        <DotPattern className="opacity-50" glow width={20} height={20} />
        <Navigation />
        <main>
          <Hero />
          <TechStack />
          <Projects />
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </BootstrapProvider>
  );
}

export default App;
import React from 'react';
import Navigation from './app/components/Navigation';
import Hero from './app/sections/Hero';
import Experience from './app/sections/Experience';
import Education from './app/sections/Education';
import Projects from './app/sections/Projects';
import Footer from './app/components/Footer';
import BootstrapProvider from './app/components/client/BootstrapProvider';

function App() {
  return (
    <BootstrapProvider>
      <div style={{ fontFamily: 'Oxanium, cursive' }}>
        <Navigation />
        <main>
          <Hero />
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
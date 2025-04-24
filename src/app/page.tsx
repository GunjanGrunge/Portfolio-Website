import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}

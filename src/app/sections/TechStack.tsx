'use client';

import { Container, Row, Col } from 'react-bootstrap';
import AnimatedSection from '../components/client/AnimatedSection';
import SolarSystemTechStack from '../components/client/SolarSystemTechStack';

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-3 bg-light">
      <Container>
        <AnimatedSection>
          <h2 className="text-center display-4 mb-5">Tech Stack</h2>
          <div className="d-flex justify-content-center">
            <SolarSystemTechStack />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiKubernetes, SiGooglecloud } from 'react-icons/si';
import AnimatedSection from '../components/client/AnimatedSection';

export default function TechStack() {
  const technologies = [
    { icon: <FaHtml5 />, name: 'HTML', color: '#E34F26' },
    { icon: <FaCss3Alt />, name: 'CSS', color: '#1572B6' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <FaDatabase />, name: 'MySQL', color: '#4479A1' },
    { icon: <FaDatabase />, name: 'PostgreSQL', color: '#4169E1' },
    { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
    { icon: <SiKubernetes />, name: 'Kubernetes', color: '#326CE5' },
    { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
    { icon: <SiGooglecloud />, name: 'GCP', color: '#4285F4' },
    { icon: <FaDatabase />, name: 'Azure', color: '#0078D4' },
    { icon: <FaBrain />, name: 'AI/ML', color: '#FF6F00' }
  ];

  return (
    <section id="tech-stack" className="py-3 bg-light">
      <Container>
        <AnimatedSection>
          <h2 className="text-center display-4 mb-5">Tech Stack</h2>
          <Row className="g-4 justify-content-center">
            {technologies.map((tech, index) => (
              <Col key={index} xs={4} sm={3} md={2} className="text-center">
                <div className="tech-icon mb-3">
                  <div className="fs-1 mb-2" style={{ color: tech.color }}>{tech.icon}</div>
                  <p className="mb-0 small">{tech.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </AnimatedSection>
      </Container>
    </section>
  );
}

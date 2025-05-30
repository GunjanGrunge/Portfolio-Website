'use client';

import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import AnimatedSection from '../components/client/AnimatedSection';
import { projects } from '../utils/projectData';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-5">
      <Container>
        <AnimatedSection>
          <h2 className="text-center display-4 mb-5">Hobby Projects</h2>
          <div className="card-hand-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card ${expandedProject === index ? 'expanded' : ''}`}
                style={{
                  '--card-index': index,
                  '--total-cards': projects.length
                } as React.CSSProperties}
                onClick={() => toggleProject(index)}
              >
                <Card className="h-100 shadow-lg border-0">
                  <Card.Body className="p-4">
                    <div className="card-front">
                      <h3 className="h4 fw-bold text-primary mb-3">{project.title}</h3>
                      <p className="text-muted mb-3">{project.description.substring(0, 100)}...</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <Badge bg="primary" className="rounded-pill">
                          {project.technologies[0]}
                        </Badge>
                        <FaChevronDown className="text-primary" />
                      </div>
                    </div>
                    
                    {expandedProject === index && (
                      <div className="card-expanded mt-4">
                        <p className="mb-3">{project.description}</p>
                        
                        {project.features && (
                          <div className="mb-3">
                            <h5 className="h6 fw-bold mb-2">Key Features:</h5>
                            <ul className="list-unstyled">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="mb-1">
                                  <span className="text-primary">•</span> {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="mb-3">
                          <h5 className="h6 fw-bold mb-2">Technologies:</h5>
                          <div className="d-flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} className="tech-badge">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="d-flex gap-2">
                          {project.links?.github && (
                            <Button 
                              variant="outline-primary" 
                              size="sm"
                              href={project.links.github}
                              target="_blank"
                              className="d-flex align-items-center gap-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGithub /> Code
                            </Button>
                          )}
                          {project.links?.demo && (
                            <Button 
                              variant="primary" 
                              size="sm"
                              href={project.links.demo}
                              target="_blank"
                              className="d-flex align-items-center gap-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt /> Demo
                            </Button>
                          )}
                        </div>
                        
                        <div className="text-center mt-3">
                          <FaChevronUp className="text-primary" />
                        </div>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
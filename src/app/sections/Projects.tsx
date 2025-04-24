'use client';

import { Container, Row, Col, Accordion, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaListUl } from 'react-icons/fa';
import AnimatedSection from '../components/client/AnimatedSection';
import { projects } from '../utils/projectData';

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <AnimatedSection>
          <h2 className="text-center display-4 mb-5">Projects</h2>
          <Row className="justify-content-center">
            <Col xs={12} lg={10}>
              <Accordion className="project-accordion">
                {projects.map((project, index) => (
                  <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>
                      <div className="d-flex align-items-center flex-wrap gap-2 w-100">
                        <h3 className="h5 mb-0 me-auto">{project.title}</h3>
                        <Badge className="tech-badge d-none d-sm-inline-block">
                          {project.category}
                        </Badge>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Badge className="tech-badge mb-3 d-sm-none">
                        {project.category}
                      </Badge>
                      <div className="mb-4">
                        <p className="lead mb-3">{project.description}</p>
                        <div className="mb-4">
                          <h4 className="h6 mb-3">
                            <FaListUl className="me-2" />
                            Key Features
                          </h4>
                          <ul className="list-unstyled">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="mb-2 ps-3 position-relative">
                                <span className="bullet-point">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <div className="d-flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge 
                                key={idx}
                                className="tech-badge"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <Button
                            variant="outline-dark"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-inline-flex align-items-center gap-2 w-100 w-sm-auto justify-content-center"
                          >
                            <FaGithub /> View on GitHub
                          </Button>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </AnimatedSection>
      </Container>
    </section>
  );
}
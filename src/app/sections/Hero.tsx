'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

export default function Hero() {
  return (
    <section id="hero" className="bg-light">
      <Container>
        <Row className="justify-content-center text-center py-5">
          <Col lg={8} className="mb-5 mb-lg-0">
            <div className="animate__animated animate__fadeInUp">
              <h1 className="display-4 fw-bold mb-4">
                Hi, I&apos;m{' '}
                <span className="text-primary">Gunjan Sarkar</span>
              </h1>
              <p className="lead mb-4">
                A passionate software engineer specializing in cloud computing, web development,
                and artificial intelligence. I build scalable solutions that solve real-world problems.
              </p>
              <div className="d-flex flex-column align-items-center gap-3">
                <div>
                  <Button 
                    href="#projects" 
                    variant="primary" 
                    size="lg"
                    className="rounded-pill"
                  >
                    View Projects
                  </Button>
                </div>
                <div className="d-flex gap-4">
                  <a
                    href="https://github.com/GunjanGrunge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gunjansarkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.kaggle.com/gunjangrunge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark fs-4"
                  >
                    <SiKaggle />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
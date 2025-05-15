'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import AnimatedSection from '../components/client/AnimatedSection';

interface CredlyBadge {
  id: string;
  image_url: string;
  title: string;
  issued_at: string;
  page_url: string;
}

export default function Certifications() {
  const [badges, setBadges] = useState<CredlyBadge[]>([]);

  useEffect(() => {
    fetch('https://www.credly.com/users/gunjan_sarkar/badges')
      .then(res => res.json())
      .then(data => setBadges(data))
      .catch(err => console.error('Error fetching Credly badges:', err));
  }, []);

  return (
    <section id="certifications" className="py-5">
      <Container>
        <AnimatedSection>
          <h2 className="text-center display-4 mb-5">Certifications & Badges</h2>
          <Row className="g-4 justify-content-center">
            {badges.map((badge) => (
              <Col key={badge.id} xs={6} sm={4} md={3}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-3 text-center">
                    <a 
                      href={badge.page_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-decoration-none"
                    >
                      <img 
                        src={badge.image_url} 
                        alt={badge.title} 
                        className="img-fluid mb-3 transition-transform hover:scale-105"
                        style={{ maxHeight: '120px' }}
                      />
                      <h5 className="h6 mb-2">{badge.title}</h5>
                      <p className="text-muted small mb-0">
                        {new Date(badge.issued_at).toLocaleDateString()}
                      </p>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </AnimatedSection>
      </Container>
    </section>
  );
}

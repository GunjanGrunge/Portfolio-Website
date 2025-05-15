'use client';

import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaGraduationCap, FaCalendar, FaTools, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedSection from '../components/client/AnimatedSection';

const educationData = [
  {
    title: "Masters in Computer Application",
    organization: "AMITY UNIVERSITY",
    date: "Dec 2025",
    description: "Pursuing Masters with specialization in Machine Learning and Artificial Intelligence",
    specializations: ["Machine Learning", "Artificial Intelligence"]
  },
  {
    title: "AI / Machine Learning",
    organization: "Great Lakes & Texas McCombs, The University of Texas",
    date: "Feb 2021 – Feb 2022",
    description: "Advanced certification in AI and Machine Learning with focus on practical applications and industry-relevant projects.",
    skills: [
      "Supervised Learning", "Unsupervised Learning", "Ensemble Techniques",
      "Neural Networks", "Computer Vision", "NLP", "Recommendation Systems"
    ],
    bulletPoints: [
      "Machine Learning: Supervised Learning, Unsupervised Learning, Ensemble Techniques, Featurization, Model Selection & Tuning, Recommendation Systems",
      "Deep Learning: Neural Networks, Computer Vision, Natural Language Processing"
    ],
    links: [
      {
        text: "View Course Projects",
        url: "https://eportfolio.greatlearning.in/gunjan-sarkar"
      }
    ]
  },
  {
    title: "Cloud Computing",
    organization: "Great Lakes",
    date: "Jul 2022 - May 2023",
    description: "Specialized certification in Cloud Computing with focus on AWS services and cloud architecture.",
    skills: [
      "AWS", "Cloud Computing", "Big Data Management", "Analytics",
      "Containers", "Microservices"
    ],
    bulletPoints: [
      "Amazon Web Services (AWS): Cloud Computing on AWS, Managed Services on AWS, Big Data Management & Analytics, Containers, Microservices"
    ],
    links: [
      {
        text: "View Course Projects",
        url: "https://eportfolio.mygreatlearning.com/gunjan-sarkar2"
      }
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-5 bg-light">
      <Container>
        <AnimatedSection>
          <h2 className="text-center display-4 mb-5">Education</h2>
          <Row className="g-4">
            {educationData.map((education, index) => (
              <Col key={index} xs={12} className="mb-4">
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="p-4">
                    <Row className="align-items-center mb-4">
                      <Col xs={12} md={8} className="text-center text-md-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                          <FaGraduationCap className="text-primary me-2 fs-4" />
                          <h3 className="h4 fw-bold mb-0">{education.title}</h3>
                        </div>
                        <h4 className="h5 text-primary mb-2">{education.organization}</h4>
                        <p className="text-muted mb-0 d-flex align-items-center justify-content-center justify-content-md-start">
                          <FaCalendar className="me-2" />
                          {education.date}
                        </p>
                      </Col>
                    </Row>

                    <div className="description-box mb-4">
                      <Card.Text>
                        {education.description}
                        {education.bulletPoints && (
                          <ul className="mt-3 mb-0">
                            {education.bulletPoints.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </Card.Text>
                    </div>

                    {(education.skills || education.specializations) && (
                      <div className="mt-4">
                        <div className="d-flex align-items-center mb-3">
                          <FaTools className="text-primary me-2" />
                          <h5 className="h6 mb-0">
                            {education.specializations ? 'Specializations' : 'Skills & Topics'}
                          </h5>
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                          {(education.skills || education.specializations)?.map((item, idx) => (
                            <Badge 
                              key={idx} 
                              className="tech-badge px-3 py-2"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {education.links && (
                      <div className="mt-4">
                        {education.links.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary rounded-pill d-inline-flex align-items-center gap-2"
                          >
                            {link.text} <FaExternalLinkAlt />
                          </a>
                        ))}
                      </div>
                    )}
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
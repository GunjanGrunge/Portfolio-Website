'use client';

import { Container, Carousel, Card, Badge, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaCalendar, FaTools, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedSection from '../components/client/AnimatedSection';
import { parseResume, ResumeSection } from '../utils/resumeParser';

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
    <section id="education" className="py-5">
      <Container>
        <AnimatedSection>
          <h2 className="text-center display-4 mb-5">Education</h2>
          <div className="position-relative px-4">
            <Carousel 
              interval={6000} 
              className="education-carousel"
              indicators={true}
              pause="hover"
              touch={true}
            >
              {educationData.map((education, index) => (
                <Carousel.Item key={index}>
                  <Card className="mx-auto experience-card" style={{ maxWidth: '800px' }}>
                    <Card.Body className="p-4">
                      <Row className="align-items-center mb-4">
                        <Col xs={12} md={8} className="text-center text-md-start">
                          <div className="d-flex align-items-center mb-2">
                            <FaGraduationCap className="text-primary me-2" />
                            <h3 className="h3 fw-bold mb-0">{education.title}</h3>
                          </div>
                          <h4 className="h5 text-primary fw-semibold mb-2">{education.organization}</h4>
                          <p className="text-muted mb-0">
                            <FaCalendar className="me-2" />
                            {education.date}
                          </p>
                        </Col>
                      </Row>
                      <div className="description-box mb-4">
                        <Card.Text className="mb-4">
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
                          <div className="d-flex align-items-center mb-2">
                            <FaTools className="text-primary me-2" />
                            <h5 className="h6 mb-0">
                              {education.specializations ? 'Specializations' : 'Skills & Topics'}
                            </h5>
                          </div>
                          <div className="d-flex flex-wrap gap-2 mt-2">
                            {(education.skills || education.specializations)?.map((item, idx) => (
                              <Badge 
                                key={idx} 
                                className="tech-badge"
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
                              className="btn btn-outline-primary d-inline-flex align-items-center gap-2"
                            >
                              {link.text} <FaExternalLinkAlt />
                            </a>
                          ))}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
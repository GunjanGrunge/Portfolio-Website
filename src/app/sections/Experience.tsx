'use client';

import { Container, Carousel, Card, Badge, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaCalendar, FaTools } from 'react-icons/fa';
import AnimatedSection from '../components/client/AnimatedSection';

const experiences = [
  {
    title: "Technical Lead",
    company: "NOUS Infosystems",
    date: "2024 - Present",
    description: `Led the development of an innovative AI-powered PDF analysis system that revolutionized risk assessment in the insurance industry. Implemented a cutting-edge LLM-based solution that:
    • Automated policy price calculations with real-time updates
    • Achieved 90% accuracy in risk score predictions
    • Reduced processing time from days to minutes
    • Successfully deployed on AWS ECS with containerized microservices`,
    technologies: ["Python", "FastAPI", "LangChain", "AWS", "ECS", "S3", "ANN", "XGBoost", "LightGBM", "Docker"]
  },
  {
    title: "Data Engineering Lead",
    company: "M&C Saatchi Performance",
    date: "Mar 2024 - July 2024",
    description: `Spearheaded data quality initiatives and AI infrastructure development:
    • Engineered robust data quality pipelines with comprehensive validation checks
    • Implemented advanced data profiling systems for pattern detection
    • Architected LLM infrastructure supporting company-wide AI initiatives
    • Reduced data processing errors by 75% through automated validation`,
    technologies: ["MS SQL Server", "Python", "Excel", "LangChain", "AWS Redshift", "S3"]
  },
  {
    title: "Assistant Manager",
    company: "GENPACT",
    date: "May 2022 - March 2024",
    description: `Drove digital transformation through AI and automation initiatives:
    • Developed an internal ML platform that reduced model training time by 40%
    • Created an intelligent chatbot using RAG architecture with 85% accuracy
    • Optimized critical models using PCA, improving accuracy from 91% to 92%
    • Built a GenAI-powered system for automated SQL query generation`,
    technologies: ["MS SQL Server", "Python", "ReactJS", "OpenCV", "Node.js", "Azure OpenAI", "LLM", "LangChain", "GenAI", "AWS"]
  },
  {
    title: "Senior Analyst",
    company: "LifeWorks",
    date: "July 2021 - May 2022",
    description: `Revolutionized reporting systems and process automation:
    • Developed automated Power BI reports saving 20+ hours weekly
    • Created an NLP-based policy summarization tool with 80% accuracy
    • Built custom Power Apps solutions for streamlined data collection
    • Implemented end-to-end automation for critical business processes`,
    technologies: ["MS SQL", "Python", "Power BI", "Excel", "Power Apps", "NLP"]
  },
  {
    title: "Senior Analyst",
    company: "American Express",
    date: "July 2019 - Feb 2021",
    description: `Led data-driven decision making initiatives:
    • Developed predictive models for business forecasting
    • Created automated ETL pipelines reducing manual effort by 70%
    • Conducted in-depth analysis leading to $500K cost savings
    • Built interactive dashboards for real-time performance monitoring`,
    technologies: ["SQL", "Python", "Excel", "Access", "PowerPoint"]
  },
  {
    title: "Analyst",
    company: "Accenture",
    date: "April 2015 - June 2019",
    description: `Managed multiple Google projects with significant impact:
    • Optimized YouTube content delivery processes
    • Implemented Google Pay integration solutions
    • Developed Cloud infrastructure monitoring systems
    • Achieved 25% improvement in operational efficiency`,
    technologies: ["Excel", "PowerPoint", "Business Analysis", "Data Analytics"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-5">
      <Container>
        <AnimatedSection>
          <h2 className="text-center display-4 mb-5">Experience</h2>
          <div className="position-relative px-4">
            <Carousel 
              interval={6000} 
              className="experience-carousel"
              indicators={true}
              pause="hover"
              touch={true}
              controls={true}
            >
              {experiences.map((experience, index) => (
                <Carousel.Item key={index}>
                  <Card className="mx-auto experience-card" style={{ maxWidth: '800px' }}>
                    <Card.Body className="p-4">
                      <Row className="align-items-center mb-4">
                        <Col xs={12} md={8} className="text-center text-md-start">
                          <div className="d-flex align-items-center mb-2">
                            <FaBriefcase className="text-primary me-2" />
                            <h3 className="h3 fw-bold mb-0">{experience.title}</h3>
                          </div>
                          <h4 className="h5 text-primary fw-semibold mb-2">{experience.company}</h4>
                          <p className="text-muted mb-0">
                            <FaCalendar className="me-2" />
                            {experience.date}
                          </p>
                        </Col>
                      </Row>
                      <div className="description-box mb-4">
                        <Card.Text className="mb-4" style={{ whiteSpace: 'pre-line' }}>
                          {experience.description}
                        </Card.Text>
                      </div>
                      <div className="mt-4">
                        <div className="d-flex align-items-center mb-2">
                          <FaTools className="text-primary me-2" />
                          <h5 className="h6 mb-0">Technologies & Tools</h5>
                        </div>
                        <div className="d-flex flex-wrap gap-2 mt-2">
                          {experience.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              className="tech-badge"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
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
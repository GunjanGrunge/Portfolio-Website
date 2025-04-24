'use client';

import { Card, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-100 shadow-sm">
      {project.image && (
        <Card.Img
          variant="top"
          src={project.image}
          alt={project.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <Card.Body>
        <Card.Title className="h5 mb-3">{project.title}</Card.Title>
        <Card.Text className="text-muted mb-3">{project.description}</Card.Text>
        <div className="mb-3">
          {project.technologies.map((tech, index) => (
            <Badge 
              key={index} 
              bg="primary" 
              className="me-2 mb-2"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="d-flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-5"
            >
              <FaGithub />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-5"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
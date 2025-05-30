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
    <Card className="h-100" 
      style={{ 
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
        margin: '10px 0',
      }}>
      {project.image && (
        <div style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={project.image}
            alt={project.title}
            style={{ 
              height: '250px',
              objectFit: 'cover',
              width: '100%'
            }}
          />
        </div>
      )}
      <Card.Body style={{ padding: '24px' }}>
        <Card.Title 
          style={{ 
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#2d2d2d'
          }}>
          {project.title}
        </Card.Title>
        <Card.Text 
          style={{ 
            fontSize: '1rem',
            color: '#666',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
          {project.description}
        </Card.Text>
        <div style={{ marginBottom: '24px' }}>
          {project.technologies.map((tech, index) => (
            <Badge 
              key={index} 
              style={{
                backgroundColor: '#f0f0f0',
                color: '#444',
                padding: '8px 16px',
                marginRight: '10px',
                marginBottom: '10px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'inline-block'
              }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div style={{ 
          display: 'flex', 
          gap: '12px',
          marginTop: 'auto'
        }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: '#ffffff',
                border: '2px solid #0d6efd',
                borderRadius: '8px',
                color: '#0d6efd',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              <FaGithub size={20} /> View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: '#0d6efd',
                border: '2px solid #0d6efd',
                borderRadius: '8px',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              <FaExternalLinkAlt size={18} /> Live Demo
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
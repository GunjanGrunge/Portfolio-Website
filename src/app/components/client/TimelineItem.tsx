'use client';

import { Card, Badge } from 'react-bootstrap';

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
  position: 'left' | 'right';
}

export default function TimelineItem({
  title,
  company,
  date,
  description,
  technologies,
  position
}: TimelineItemProps) {
  const isLeft = position === 'left';
  
  return (
    <div className={`row mb-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="col-md-5 position-relative">
        <Card className="shadow-sm h-100">
          <Card.Body>
            <Card.Title className="h5">{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-primary">{company}</Card.Subtitle>
            <Card.Text className="text-muted small mb-2">{date}</Card.Text>
            <Card.Text className="mb-3">{description}</Card.Text>
            <div>
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  bg="secondary" 
                  className="me-2 mb-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card.Body>
        </Card>
        {/* Connecting line */}
        <div 
          className={`position-absolute top-50 ${isLeft ? 'end-0' : 'start-0'} translate-middle-y
          border-top border-2 border-primary`} 
          style={{ width: '15%' }}
        />
        {/* Timeline dot */}
        <div 
          className={`position-absolute top-50 ${isLeft ? 'end-0 translate-middle-y translate-x-50' : 'start-0 translate-middle-y -translate-x-50'} 
          rounded-circle bg-primary`} 
          style={{ 
            width: '1rem', 
            height: '1rem',
            transform: isLeft ? 'translateX(50%)' : 'translateX(-50%)'
          }}
        />
      </div>
      <div className="col-md-5 offset-md-2" />
    </div>
  );
}
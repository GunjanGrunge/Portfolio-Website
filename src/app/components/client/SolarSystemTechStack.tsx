'use client';

import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiKubernetes, SiGooglecloud } from 'react-icons/si';

export default function SolarSystemTechStack() {
  const technologies = [
    { icon: <FaHtml5 />, name: 'HTML', color: '#E34F26', orbit: 1, speed: 8, startAngle: 0 },
    { icon: <FaCss3Alt />, name: 'CSS', color: '#1572B6', orbit: 1, speed: 8, startAngle: 180 },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E', orbit: 2, speed: 12, startAngle: 0 },
    { icon: <FaReact />, name: 'React', color: '#61DAFB', orbit: 2, speed: 12, startAngle: 120 },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6', orbit: 2, speed: 12, startAngle: 240 },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933', orbit: 3, speed: 16, startAngle: 0 },
    { icon: <FaPython />, name: 'Python', color: '#3776AB', orbit: 3, speed: 16, startAngle: 180 },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248', orbit: 4, speed: 20, startAngle: 0 },
    { icon: <FaDatabase />, name: 'MySQL', color: '#4479A1', orbit: 4, speed: 20, startAngle: 90 },
    { icon: <FaDocker />, name: 'Docker', color: '#2496ED', orbit: 4, speed: 20, startAngle: 180 },
    { icon: <SiKubernetes />, name: 'Kubernetes', color: '#326CE5', orbit: 4, speed: 20, startAngle: 270 },
    { icon: <FaAws />, name: 'AWS', color: '#FF9900', orbit: 5, speed: 24, startAngle: 0 },
    { icon: <SiGooglecloud />, name: 'GCP', color: '#4285F4', orbit: 5, speed: 24, startAngle: 180 },
    { icon: <FaBrain />, name: 'AI/ML', color: '#FF6F00', orbit: 6, speed: 28, startAngle: 0 }
  ];

  return (
    <div className="solar-system-container">
      {/* Central "Sun" - Tech Stack Text */}
      <div className="tech-sun">
        <h3 className="h5 fw-bold mb-0" style={{ color: 'white' }}>Tech</h3>
        <h3 className="h5 fw-bold mb-0" style={{ color: 'white' }}>Stack</h3>
      </div>

      {/* Orbital paths */}
      {[1, 2, 3, 4, 5, 6].map(orbit => (
        <div key={orbit} className={`orbit orbit-${orbit}`} />
      ))}

      {/* Orbiting tech icons */}
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`planet planet-orbit-${tech.orbit}`}
          style={{
            '--orbit-duration': `${tech.speed}s`,
            '--start-angle': `${tech.startAngle}deg`,
          } as React.CSSProperties}
        >
          <div className="planet-icon" style={{ color: tech.color }}>
            {tech.icon}
          </div>
          <div className="planet-label">{tech.name}</div>
        </div>
      ))}
    </div>
  );
}

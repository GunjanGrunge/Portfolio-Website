'use client';

import { projects } from '../utils/projectData';
import ProjectCard from '../components/client/ProjectCard';
import AnimatedSection from '../components/client/AnimatedSection';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="left">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-800 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my notable projects showcasing my expertise in cloud computing,
            web development, and artificial intelligence.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
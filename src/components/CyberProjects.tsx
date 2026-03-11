import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CLOUD COPILOT",
    desc: "Intelligent AWS assistant using multi-agent architecture with GPT-4 and AWS Bedrock for smart resource management.",
    tags: ["Python", "TypeScript", "FastAPI", "React", "AWS Bedrock", "GPT-4"],
    github: "https://github.com/GunjanGrunge",
    featured: true,
  },
  {
    title: "CHORD PICKER PRO",
    desc: "Music theory tool with interactive circle of fifths, scale explorer, and chord compatibility suggestions.",
    tags: ["React", "Electron", "TypeScript", "Tone.js", "Vite"],
    github: "https://github.com/GunjanGrunge",
    featured: false,
  },
  {
    title: "AWS BACKUP UI",
    desc: "Feature-rich React app for managing AWS S3 buckets with comprehensive file and folder management.",
    tags: ["React", "AWS SDK", "Bootstrap", "JavaScript"],
    github: "https://github.com/GunjanGrunge",
    featured: false,
  },
  {
    title: "AI TWITTER BOT",
    desc: "Automated content generation using GPT-4 with dual daily sessions and smart duplicate prevention.",
    tags: ["Node.js", "GPT-4", "Twitter API v2", "GitHub Actions"],
    github: "https://github.com/GunjanGrunge",
    featured: true,
  },
  {
    title: "SMART TASK MANAGER",
    desc: "Full-stack task management with AI-powered priority suggestions and real-time collaboration.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "OpenAI"],
    github: "https://github.com/GunjanGrunge",
    featured: false,
  },
  {
    title: "WEATHER ANALYTICS",
    desc: "Comprehensive weather analytics platform with multi-source data aggregation and D3.js visualizations.",
    tags: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/GunjanGrunge",
    featured: false,
  },
  {
    title: "ML DEPLOYMENT PIPELINE",
    desc: "Automated ML model deployment using Docker and Kubernetes with scalable inference endpoints.",
    tags: ["Docker", "Kubernetes", "Python", "Flask", "Prometheus"],
    github: "https://github.com/GunjanGrunge",
    featured: false,
  },
  {
    title: "PORTFOLIO WEBSITE",
    desc: "Modern responsive portfolio with smooth animations and interactive components.",
    tags: ["React", "TypeScript", "CSS3", "GitHub Pages"],
    github: "https://github.com/GunjanGrunge/Portfolio-Website",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className={`group relative bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:glow-lime ${
        project.featured ? "md:col-span-2 md:row-span-1" : ""
      }`}
    >
      {/* Lime top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display text-2xl sm:text-3xl text-foreground tracking-wider group-hover:text-primary transition-colors glitch-text" data-text={project.title}>
            {project.title}
          </h3>
          <div className="flex items-center gap-3 flex-shrink-0 ml-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider px-3 py-1 border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Watermark */}
      <div className="absolute top-0 right-0 font-display text-[16rem] leading-none text-foreground/[0.02] pointer-events-none select-none">03</div>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">
              SELECTED WORK
            </h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-16">
            LAP_03 / PROJECTS
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

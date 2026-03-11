import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CLOUD COPILOT",
    desc: "Intelligent AWS assistant using multi-agent architecture with AWS Bedrock for smart resource management.",
    tags: ["Python", "TypeScript", "FastAPI", "React", "AWS Bedrock"],
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
    desc: "Automated content generation using LLMs with dual daily sessions and smart duplicate prevention.",
    tags: ["Node.js", "LLM", "Twitter API v2", "GitHub Actions"],
    github: "https://github.com/GunjanGrunge",
    featured: false,
  },
  {
    title: "SMART TASK MANAGER",
    desc: "Full-stack task management with AI-powered priority suggestions and real-time collaboration.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "LLM"],
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

const featuredProject = projects.find((p) => p.featured)!;
const otherProjects = projects.filter((p) => !p.featured);

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.2 }}
    className="group relative bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col"
    style={{ minHeight: 220 }}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-primary" />
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-xl text-foreground tracking-wider group-hover:text-primary transition-colors glitch-text" data-text={project.title}>
          {project.title}
        </h3>
        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-[10px] tracking-wider px-3 py-1 border border-border text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 right-0 font-display text-[16rem] leading-none text-foreground/[0.02] pointer-events-none select-none">03</div>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">SELECTED WORK</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-16">LAP_03 / PROJECTS</p>
        </ScrollReveal>

        {/* Featured project — full width */}
        <ScrollReveal>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group relative bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden mb-4"
            style={{
              minHeight: 180,
              boxShadow: "0 -2px 20px rgba(210,255,0,0.3)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-primary" />
            {/* Featured badge */}
            <span
              className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-wider px-2 py-1 z-10"
              style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
            >
              ★ FEATURED
            </span>
            <div className="p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl sm:text-3xl text-foreground tracking-wider group-hover:text-primary transition-colors glitch-text" data-text={featuredProject.title}>
                  {featuredProject.title}
                </h3>
                <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                {featuredProject.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-wider px-3 py-1 border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Remaining projects — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.06}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

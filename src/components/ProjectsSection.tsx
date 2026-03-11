import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cloud Copilot",
    desc: "An intelligent AWS assistant using multi-agent architecture to manage AWS resources. Combines OpenAI GPT-4 and AWS Bedrock models.",
    tags: ["Python", "TypeScript", "FastAPI", "React", "AWS Bedrock", "OpenAI GPT-4"],
    link: "https://github.com/GunjanGrunge",
  },
  {
    title: "Chord Picker Pro",
    desc: "A music theory and chord progression tool with interactive circle of fifths, scale explorer, and chord compatibility suggestions.",
    tags: ["React", "Electron", "TypeScript", "Tone.js", "Tonal.js", "Vite"],
    link: "https://github.com/GunjanGrunge",
  },
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio with smooth animations, interactive components, and a clean design showcasing projects and skills.",
    tags: ["React", "TypeScript", "Bootstrap", "CSS3", "GitHub Pages"],
    link: "https://github.com/GunjanGrunge/Portfolio-Website",
  },
  {
    title: "AWS Backup UI",
    desc: "A feature-rich React app for managing AWS S3 buckets with intuitive UI and comprehensive file/folder management.",
    tags: ["React", "AWS SDK", "Bootstrap", "JavaScript", "CSS"],
    link: "https://github.com/GunjanGrunge",
  },
  {
    title: "AI Twitter Bot",
    desc: "Automated Twitter bot generating diverse content using OpenAI GPT-4, with dual daily sessions and smart duplicate prevention.",
    tags: ["Node.js", "OpenAI GPT-4", "Twitter API v2", "GitHub Actions"],
    link: "https://github.com/GunjanGrunge",
  },
  {
    title: "Smart Task Manager",
    desc: "Full-stack task management app with AI-powered priority suggestions, real-time collaboration via Socket.io.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "OpenAI API"],
    link: "https://github.com/GunjanGrunge",
  },
  {
    title: "Weather Analytics Dashboard",
    desc: "Comprehensive weather analytics platform aggregating data from multiple sources with interactive D3.js visualizations.",
    tags: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
    link: "https://github.com/GunjanGrunge",
  },
  {
    title: "ML Model Deployment Pipeline",
    desc: "Automated ML model deployment pipeline using Docker and Kubernetes, supporting multiple frameworks with scalable inference.",
    tags: ["Docker", "Kubernetes", "Python", "Flask", "Prometheus", "Grafana"],
    link: "https://github.com/GunjanGrunge",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-highlight/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Hobby</span> Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Personal projects that showcase my passion for development and innovation
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-xl p-6 group cursor-pointer block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs font-display font-semibold text-primary">
                Featured Project
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "LANGUAGES",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "FRAMEWORKS",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Express", "Flask"],
  },
  {
    category: "AI / ML",
    skills: ["LangChain", "OpenAI GPT-4", "Azure OpenAI", "AWS Bedrock", "XGBoost", "NLP"],
  },
  {
    category: "TOOLS",
    skills: ["Docker", "Kubernetes", "MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "CLOUD",
    skills: ["AWS", "GCP", "Azure", "ECS", "S3", "Redshift"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">
              TECH STACK
            </h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </ScrollReveal>

        <div className="space-y-10">
          {skillCategories.map((cat, catIdx) => (
            <ScrollReveal key={cat.category} delay={catIdx * 0.1}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                {/* Category label */}
                <div className="sm:w-28 flex-shrink-0">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground sm:writing-vertical sm:block">
                    {cat.category}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(72, 100%, 50%)", color: "#03040f" }}
                      transition={{ duration: 0.15 }}
                      className="px-4 py-2 border border-border bg-secondary text-foreground font-mono text-xs tracking-wider cursor-default hover:border-primary transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "LANGUAGES",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
    variant: "default" as const,
  },
  {
    category: "FRAMEWORKS & RUNTIME",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Express", "Flask"],
    variant: "default" as const,
  },
  {
    category: "GENERATIVE AI",
    skills: [
      "LLMs", "RAG Pipelines", "LangChain", "LlamaIndex",
      "Prompt Engineering", "Vector Databases", "Embeddings",
      "AWS Bedrock", "Azure OpenAI", "Hugging Face", "Fine-Tuning",
    ],
    variant: "featured" as const,
  },
  {
    category: "MACHINE LEARNING",
    skills: [
      "Scikit-learn", "XGBoost", "NLP", "Feature Engineering",
      "Model Evaluation", "MLflow", "Supervised Learning",
    ],
    variant: "ml" as const,
  },
  {
    category: "CLOUD & DEVOPS",
    skills: [
      "AWS", "Azure", "GCP", "Docker", "Kubernetes",
      "Microservices", "CI/CD", "ECS", "S3", "Redshift",
      "Serverless", "IaC (Terraform)",
    ],
    variant: "default" as const,
  },
  {
    category: "DATABASES",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Pinecone", "pgvector", "DynamoDB"],
    variant: "default" as const,
  },
];

const pillStyles = {
  default: {
    border: "1px solid rgba(210,255,0,0.25)",
    hoverBg: "hsl(68, 100%, 50%)",
  },
  featured: {
    border: "1px solid rgba(210,255,0,0.5)",
    hoverBg: "hsl(68, 100%, 50%)",
  },
  ml: {
    border: "1px solid rgba(0,191,255,0.4)",
    hoverBg: "#00BFFF",
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-0 right-0 font-display text-[16rem] leading-none text-foreground/[0.03] pointer-events-none select-none">
        02
      </div>

      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">TECH STACK</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-2">SECTOR_02 / SKILLS</p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/60 mb-16">
            FULL STACK · GENERATIVE AI · CLOUD NATIVE
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {skillCategories.map((cat, catIdx) => (
            <ScrollReveal key={cat.category} delay={catIdx * 0.08}>
              <div className="relative flex items-stretch gap-6">
                {/* Category label — vertical */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                  className="hidden sm:flex items-center justify-center w-8 flex-shrink-0"
                >
                  <span
                    className="font-mono text-[11px] tracking-[0.15em] text-primary whitespace-nowrap"
                    style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
                  >
                    {cat.category}
                  </span>
                </motion.div>

                {/* Mobile category label */}
                <div className="sm:hidden mb-2">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-primary">
                    {cat.category}
                  </span>
                </div>

                <div className="flex-1">
                  {/* Featured badge */}
                  {cat.variant === "featured" && (
                    <motion.span
                      initial={{ opacity: 0, y: -8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="inline-block font-mono text-[9px] tracking-[0.2em] text-primary mb-2 border border-primary/30 px-2 py-0.5"
                    >
                      ★ CORE
                    </motion.span>
                  )}

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => {
                      const style = pillStyles[cat.variant];
                      const isML = cat.variant === "ml";

                      return (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.03 }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: style.hoverBg,
                            color: "#03040f",
                            boxShadow: isML
                              ? "0 0 12px rgba(0,191,255,0.5)"
                              : "0 0 12px rgba(210,255,0,0.5)",
                          }}
                          className="px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] uppercase cursor-default transition-colors duration-150 text-foreground"
                          style={{
                            background: "#0f1020",
                            border: style.border,
                            borderRadius: "4px",
                            ...(isML ? { borderLeft: "2px solid #00BFFF" } : {}),
                          }}
                        >
                          {skill}
                        </motion.span>
                      );
                    })}
                  </div>
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

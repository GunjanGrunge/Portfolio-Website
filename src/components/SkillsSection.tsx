import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "LANGUAGES",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "FRAMEWORKS & RUNTIME",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Express", "Flask"],
  },
  {
    category: "GENERATIVE AI",
    skills: [
      "LLMs",
      "RAG Pipelines",
      "LangChain",
      "LlamaIndex",
      "Prompt Engineering",
      "Vector Databases",
      "Embeddings",
      "AWS Bedrock",
      "Azure OpenAI",
      "Hugging Face",
      "Fine-Tuning",
    ],
  },
  {
    category: "MACHINE LEARNING",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "NLP",
      "Feature Engineering",
      "Model Evaluation",
      "MLflow",
      "Supervised Learning",
    ],
  },
  {
    category: "CLOUD & DEVOPS",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Microservices",
      "CI/CD",
      "ECS",
      "S3",
      "Redshift",
      "Serverless",
      "Terraform",
    ],
  },
  {
    category: "DATABASES",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Pinecone", "pgvector", "DynamoDB"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Watermark */}
      <div className="absolute top-0 right-0 font-display text-[16rem] leading-none text-foreground/[0.02] pointer-events-none select-none">
        02
      </div>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">TECH STACK</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-16">SECTOR_02 / SKILLS</p>
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

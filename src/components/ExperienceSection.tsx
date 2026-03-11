import { motion } from "framer-motion";

const experiences = [
  {
    role: "Technical Lead",
    company: "NOUS Infosystems",
    period: "2024 - Present",
    description:
      "Led development of an AI-powered PDF analysis system for risk assessment in insurance. Implemented LLM-based solution achieving 90% accuracy in risk score predictions, reducing processing time from days to minutes. Deployed on AWS ECS with containerized microservices.",
    tags: ["Python", "FastAPI", "LangChain", "AWS", "ECS", "Docker", "XGBoost"],
  },
  {
    role: "Data Engineering Lead",
    company: "M&C Saatchi Performance",
    period: "Mar 2024 - July 2024",
    description:
      "Spearheaded data quality initiatives and AI infrastructure development. Engineered robust data quality pipelines, architected LLM infrastructure, and reduced data processing errors by 75%.",
    tags: ["MS SQL Server", "Python", "LangChain", "AWS Redshift", "S3"],
  },
  {
    role: "Assistant Manager",
    company: "GENPACT",
    period: "May 2022 - March 2024",
    description:
      "Drove digital transformation through AI and automation. Developed internal ML platform reducing training time by 40%, created intelligent chatbot using RAG with 85% accuracy, and built GenAI-powered SQL query generation system.",
    tags: ["Python", "ReactJS", "Azure OpenAI", "LangChain", "AWS"],
  },
  {
    role: "Senior Analyst",
    company: "LifeWorks",
    period: "July 2021 - May 2022",
    description:
      "Revolutionized reporting systems with automated Power BI reports saving 20+ hours weekly. Created NLP-based policy summarization tool with 80% accuracy.",
    tags: ["MS SQL", "Python", "Power BI", "Power Apps", "NLP"],
  },
  {
    role: "Senior Analyst",
    company: "American Express",
    period: "July 2019 - Feb 2021",
    description:
      "Led data-driven decision making with predictive models, automated ETL pipelines reducing manual effort by 70%, and analysis leading to $500K cost savings.",
    tags: ["SQL", "Python", "Excel", "Access"],
  },
  {
    role: "Analyst",
    company: "Accenture",
    period: "April 2015 - June 2019",
    description:
      "Managed multiple Google projects including YouTube content delivery optimization, Google Pay integration, and Cloud infrastructure monitoring. Achieved 25% improvement in operational efficiency.",
    tags: ["Excel", "Business Analysis", "Data Analytics"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
              } pl-14 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[18px] md:left-auto md:right-[-2.5rem] top-2 w-3 h-3 rounded-full bg-primary glow-primary z-10"
                style={i % 2 !== 0 ? { right: "auto", left: "-2.5rem" } : undefined}
              />

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-display font-semibold text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium whitespace-nowrap ml-4">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

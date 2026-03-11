import { ScrollReveal } from "./ScrollReveal";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Technical Lead",
    company: "NOUS Infosystems",
    period: "JUL 2024 — MAR 2026",
    bullets: [
      "Led AI-powered PDF analysis system for insurance risk assessment",
      "Implemented LLM-based solution achieving 90% accuracy in risk predictions",
      "Reduced processing time from days to minutes",
      "Deployed on AWS ECS with containerized microservices",
    ],
    tags: ["Python", "FastAPI", "LangChain", "AWS", "Docker", "XGBoost"],
  },
  {
    role: "Data Engineering Lead",
    company: "M&C Saatchi Performance",
    period: "MAR 2024 — JUL 2024",
    bullets: [
      "Engineered robust data quality pipelines with comprehensive validation",
      "Architected LLM infrastructure supporting company-wide AI initiatives",
      "Reduced data processing errors by 75% through automated validation",
    ],
    tags: ["MS SQL", "Python", "LangChain", "AWS Redshift"],
  },
  {
    role: "Assistant Manager",
    company: "GENPACT",
    period: "MAY 2022 — MAR 2024",
    bullets: [
      "Developed internal ML platform reducing model training time by 40%",
      "Created intelligent chatbot using RAG architecture with 85% accuracy",
      "Built GenAI-powered system for automated SQL query generation",
    ],
    tags: ["Python", "ReactJS", "Azure OpenAI", "LangChain", "AWS"],
  },
  {
    role: "Senior Analyst",
    company: "LifeWorks",
    period: "JUL 2021 — MAY 2022",
    bullets: [
      "Automated Power BI reports saving 20+ hours weekly",
      "Created NLP-based policy summarization tool with 80% accuracy",
    ],
    tags: ["MS SQL", "Python", "Power BI", "NLP"],
  },
  {
    role: "Senior Analyst",
    company: "American Express",
    period: "JUL 2019 — FEB 2021",
    bullets: [
      "Developed predictive models for business forecasting",
      "Created automated ETL pipelines reducing manual effort by 70%",
      "Conducted analysis leading to $500K cost savings",
    ],
    tags: ["SQL", "Python", "Excel"],
  },
  {
    role: "Analyst",
    company: "Accenture",
    period: "APR 2015 — JUN 2019",
    bullets: [
      "Managed multiple Google projects (YouTube, Google Pay, Cloud)",
      "Achieved 25% improvement in operational efficiency",
    ],
    tags: ["Excel", "Business Analysis", "Data Analytics"],
  },
];

const TimelineLine = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate to full height
          setHeight(100);
        }
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={lineRef} className="absolute left-3 md:left-6 top-0 bottom-0 w-px">
      <div
        className="w-full transition-all duration-[3000ms] ease-out border-l-2 border-dashed border-primary/40"
        style={{ height: `${height}%` }}
      />
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Watermark */}
      <div className="absolute top-0 left-0 font-display text-[16rem] leading-none text-foreground/[0.02] pointer-events-none select-none">04</div>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">
              EXPERIENCE
            </h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-16">
            SECTOR_04 / CAREER
          </p>
        </ScrollReveal>

        <div className="relative pl-10 md:pl-16 max-w-4xl">
          <TimelineLine />

          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.company + exp.role} delay={i * 0.1}>
              <div className="relative mb-14 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[calc(2.5rem+5px)] md:-left-[calc(4rem+5px)] top-1.5 w-3 h-3 bg-primary pulse-dot" />

                {/* Card */}
                <div className="bg-card border border-border p-6 sm:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-2xl text-foreground tracking-wider">
                        {exp.role}
                      </h3>
                      <p className="font-body text-primary font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground bg-secondary px-3 py-1 whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className="text-primary font-mono text-xs mt-1 flex-shrink-0">—</span>
                        <span className="font-body text-sm text-muted-foreground leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] tracking-wider px-2 py-1 border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
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

export default ExperienceSection;

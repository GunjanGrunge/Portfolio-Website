import { ScrollReveal } from "./ScrollReveal";

const education = [
  {
    degree: "MASTERS IN COMPUTER APPLICATION",
    school: "AMITY UNIVERSITY",
    period: "2025",
    desc: "Completed MCA with CGPA of 6.04. Specialized in Machine Learning and Artificial Intelligence.",
    tags: ["Machine Learning", "AI", "Software Development", "Data Science"],
  },
  {
    degree: "AI / MACHINE LEARNING CERTIFICATION",
    school: "GREAT LAKES & UT AUSTIN",
    period: "FEB 2021 — FEB 2022",
    desc: "Advanced certification covering supervised/unsupervised learning, deep learning, NLP, and computer vision.",
    tags: ["Neural Networks", "Computer Vision", "NLP", "Recommendation Systems"],
    link: { label: "VIEW PROJECTS →", url: "https://eportfolio.greatlearning.in/gunjan-sarkar" },
  },
  {
    degree: "CLOUD COMPUTING CERTIFICATION",
    school: "GREAT LAKES",
    period: "JUL 2022 — MAY 2023",
    desc: "Specialized in AWS services and cloud architecture including containers and microservices.",
    tags: ["AWS", "Cloud Computing", "Big Data", "Containers", "Microservices"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      {/* Watermark */}
      <div className="absolute top-0 right-0 font-display text-[16rem] leading-none text-foreground/[0.02] pointer-events-none select-none">05</div>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">
              EDUCATION
            </h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-16">
            SECTOR_05 / LEARNING
          </p>
        </ScrollReveal>

        <div className="max-w-4xl space-y-6">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 0.15}>
              <div className="bg-card border border-border p-6 sm:p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-foreground tracking-wider">
                      {edu.degree}
                    </h3>
                    <p className="font-body text-primary font-semibold text-sm">{edu.school}</p>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground bg-secondary px-3 py-1 whitespace-nowrap self-start">
                    {edu.period}
                  </span>
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {edu.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {edu.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] tracking-wider px-2 py-1 border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {edu.link && (
                  <a
                    href={edu.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-mono text-xs text-primary tracking-widest hover:underline"
                  >
                    [{edu.link.label}]
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

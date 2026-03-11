import { motion } from "framer-motion";

const education = [
  {
    degree: "Masters in Computer Application",
    school: "AMITY UNIVERSITY",
    year: "2025",
    desc: "Completed MCA with CGPA of 6.04. Specialized in Machine Learning and Artificial Intelligence with focus on modern software development practices.",
    tags: ["Machine Learning", "Artificial Intelligence", "Software Development", "Data Science"],
  },
  {
    degree: "AI / Machine Learning",
    school: "Great Lakes & Texas McCombs, The University of Texas",
    year: "Feb 2021 – Feb 2022",
    desc: "Advanced certification in AI and Machine Learning with focus on practical applications. Covered supervised/unsupervised learning, deep learning, NLP, and computer vision.",
    tags: ["Neural Networks", "Computer Vision", "NLP", "Recommendation Systems"],
    link: { label: "View Course Projects", url: "https://eportfolio.greatlearning.in/gunjan-sarkar" },
  },
  {
    degree: "Cloud Computing",
    school: "Great Lakes",
    year: "Jul 2022 - May 2023",
    desc: "Specialized certification in Cloud Computing with focus on AWS services and cloud architecture including containers and microservices.",
    tags: ["AWS", "Cloud Computing", "Big Data", "Containers", "Microservices"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-accent/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-display font-semibold text-sm">{edu.school}</p>
                </div>
                <span className="text-xs text-muted-foreground font-medium whitespace-nowrap ml-4">
                  {edu.year}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {edu.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {edu.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              {edu.link && (
                <a
                  href={edu.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-display font-semibold text-accent hover:underline"
                >
                  {edu.link.label} →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

import { ScrollReveal, useCountUp } from "./ScrollReveal";
import professionalPhoto from "@/assets/professional-photo.jpg";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "YEARS EXP", value: 9 },
  { label: "PROJECTS", value: 20 },
  { label: "COMPANIES", value: 6 },
];

const StatCounter = ({ value, label }: { value: number; label: string }) => {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div className="flex-1 text-center px-4 py-3 border border-border">
      <span ref={ref} className="font-display text-3xl sm:text-4xl text-primary text-glow-lime">
        {count}+
      </span>
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground mt-1">
        {label}
      </p>
    </div>
  );
};

const GlitchFrame = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
      });
      setTimeout(() => setOffset({ x: 0, y: 0 }), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={frameRef} className="relative bracket-frame inline-block">
      <div
        className="overflow-hidden border border-border transition-transform duration-100"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <img
          src={professionalPhoto}
          alt="Gunjan Sarkar"
          className="w-72 h-80 sm:w-80 sm:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">ABOUT</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.1}>
            <div className="flex justify-center md:justify-start">
              <GlitchFrame />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="font-body text-foreground/90 leading-relaxed text-base sm:text-lg mb-6">
                A passionate <span className="text-primary font-semibold">Software Engineer</span> specializing
                in <span className="text-primary font-semibold">Cloud Computing</span>,{" "}
                <span className="text-primary font-semibold">Web Development</span>, and{" "}
                <span className="text-primary font-semibold">Artificial Intelligence</span>.
                I build scalable solutions that solve real-world problems.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-sm mb-8">
                With experience at top enterprises including American Express, Genpact, and Accenture,
                I specialize in building AI-powered systems, data pipelines, and full-stack applications
                that drive measurable business impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {stats.map((s) => (
                  <StatCounter key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

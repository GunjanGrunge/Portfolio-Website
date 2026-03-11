import { ScrollReveal, useCountUp } from "./ScrollReveal";
import professionalPhoto from "@/assets/professional-photo.jpg";
import { useEffect, useRef, useState } from "react";

const GlitchFrame = () => {
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
    <div className="relative bracket-frame inline-block">
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

const dossierData = [
  { key: "NATIONALITY", value: "Indian" },
  { key: "TEAM", value: "Red Bull Racing (fan) / Open to Work" },
  { key: "SEASONS", value: "9+ years experience" },
  { key: "RACE NUMBER", value: "#1 (Verstappen)" },
  { key: "RIDING NUMBER", value: "#93 (Marquez)" },
  { key: "CS2 ROLE", value: "AWPer / Entry Fragger" },
  { key: "PLAYSTYLE", value: "Calculated. Patient. One shot." },
  { key: "SPECIALITY", value: "React / Node / AI / Cloud" },
  { key: "FASTEST LAP", value: "Cloud Copilot (AI + AWS)" },
];

const StatCounter = ({ value, label }: { value: number; label: string }) => {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div className="flex-1 text-center px-4 py-3 border border-border">
      <span ref={ref} className="font-display text-3xl sm:text-4xl text-primary text-glow-lando">
        {count}+
      </span>
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground mt-1">
        {label}
      </p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Watermark */}
      <div className="absolute top-0 right-0 font-display text-[16rem] leading-none text-foreground/[0.02] pointer-events-none select-none">
        01
      </div>

      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">DRIVER PROFILE</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-12">
            SECTOR_01 / ABOUT
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="flex justify-center md:justify-start">
              <GlitchFrame />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              {/* Dossier card */}
              <div className="border border-border bg-card p-6 mb-6">
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary mb-4 pb-2 border-b border-border">
                  ═══ DOSSIER ═══
                </div>
                <div className="space-y-2">
                  {dossierData.map((item) => (
                    <div key={item.key} className="flex gap-4">
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground w-32 flex-shrink-0">
                        {item.key}:
                      </span>
                      <span className="font-mono text-xs text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-body text-foreground/90 leading-relaxed text-sm mb-6">
                A passionate Software Engineer specializing in Cloud Computing,
                Web Development, and Artificial Intelligence. Building scalable solutions
                that solve real-world problems — with experience at American Express,
                Genpact, and Accenture.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <StatCounter value={9} label="YEARS EXP" />
                <StatCounter value={20} label="PROJECTS" />
                <StatCounter value={6} label="COMPANIES" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

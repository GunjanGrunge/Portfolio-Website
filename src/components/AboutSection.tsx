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

/* ── Equalizer bars animation ── */
const Equalizer = () => (
  <span className="inline-flex items-end gap-[2px] h-3 ml-1.5 align-middle">
    {[0, 0.15, 0.3].map((delay, i) => (
      <span
        key={i}
        className="w-[3px] bg-primary rounded-sm"
        style={{
          animation: `eq-bounce 0.6s ${delay}s ease-in-out infinite alternate`,
        }}
      />
    ))}
  </span>
);

/* ── Blinking dot ── */
const StatusDot = ({ color }: { color: string }) => (
  <span
    className="inline-block w-[7px] h-[7px] rounded-full flex-shrink-0"
    style={{ backgroundColor: color }}
  />
);

const BlinkingDot = () => (
  <span
    className="inline-block w-[7px] h-[7px] rounded-full flex-shrink-0 pulse-dot"
    style={{ backgroundColor: "#22c55e" }}
  />
);

/* ── AWP badge ── */
const AwpBadge = () => (
  <span
    className="inline-block font-mono text-[9px] px-1.5 py-[2px] rounded-sm ml-1 align-middle"
    style={{
      background: "rgba(0,255,65,0.1)",
      border: "1px solid #00FF41",
      color: "#00FF41",
    }}
  >
    AWP
  </span>
);

type DossierRow = {
  key: string;
  value: React.ReactNode;
};

const onTrack: DossierRow[] = [
  { key: "TEAM", value: <span className="flex items-center gap-2">Open to Work <BlinkingDot /></span> },
  { key: "SEASONS", value: "9+ years exp" },
  { key: "SPECIALITY", value: "React · Node · AI" },
  { key: "FASTEST LAP", value: "Cloud Copilot" },
];

const offTrack: DossierRow[] = [
  { key: "FAV DRIVER", value: <span className="flex items-center gap-2"><StatusDot color="#CC1E4A" /> Verstappen #1</span> },
  { key: "FAV RIDER", value: <span className="flex items-center gap-2"><StatusDot color="#E4002B" /> Marc Marquez #93</span> },
  { key: "FAV CS2", value: <span>Monesy <AwpBadge /></span> },
  { key: "CS2 ROLE", value: "AWPer" },
  { key: "PLAYSTYLE", value: "One tap. Always." },
  { key: "SIDE HUSTLE", value: <span className="flex items-center gap-1">Music Producer <Equalizer /></span> },
];

const DossierSection = ({ label, rows }: { label: string; rows: DossierRow[] }) => (
  <div>
    <div
      className="font-mono text-[10px] tracking-[0.15em] text-primary uppercase mb-2"
    >
      ▸ {label}
    </div>
    <div className="h-px bg-border mb-3" />
    <div
      className="grid gap-y-1"
      style={{ gridTemplateColumns: "140px 1fr" }}
    >
      {rows.map((row) => (
        <>
          <span
            key={`k-${row.key}`}
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground flex items-center min-h-[28px]"
          >
            {row.key}
          </span>
          <span
            key={`v-${row.key}`}
            className="font-mono text-[13px] text-foreground font-medium flex items-center min-h-[28px]"
          >
            {row.value}
          </span>
        </>
      ))}
    </div>
  </div>
);

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
      <div className="absolute top-0 right-0 font-display text-[16rem] leading-none text-foreground/[0.02] pointer-events-none select-none">
        01
      </div>

      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">{">"}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">PROFILE</h2>
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
              <div className="border border-border bg-card p-6 mb-6 space-y-4">
                <DossierSection label="ON TRACK" rows={onTrack} />
                <div className="mt-4">
                  <DossierSection label="OFF TRACK" rows={offTrack} />
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

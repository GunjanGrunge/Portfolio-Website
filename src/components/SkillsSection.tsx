import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { motion, useAnimationFrame } from "framer-motion";

// Each skill: name + icon URL + optional invert flag for light-on-dark icons
const orbitSkills: { name: string; icon: string; invert?: boolean }[] = [
  // Ring 1 — core languages & runtime (6)
  { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "FastAPI",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  // Ring 2 — cloud & infra (7)
  { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Azure",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "GCP",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Terraform",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "GitHub",     icon: "https://cdn.simpleicons.org/github/ffffff" },
  // Ring 3 — AI / data (7)
  { name: "PyTorch",    icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { name: "HuggingFace",icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { name: "LangChain",  icon: "https://cdn.simpleicons.org/langchain/D2FF00" },
  { name: "Meta/Llama", icon: "https://cdn.simpleicons.org/meta/D2FF00" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

// 3 rings — same direction, gentle speed difference so grouping is obvious
const orbits = [
  { radius: 110, speed: 30, startAngle: 0,  indices: [0, 1, 2, 3, 4, 5] },
  { radius: 195, speed: 45, startAngle: 26, indices: [6, 7, 8, 9, 10, 11, 12] },
  { radius: 285, speed: 62, startAngle: 13, indices: [13, 14, 15, 16, 17, 18, 19] },
];

// Concept / framework skills for the marquee — no meaningful logo exists
const marqueeSkills = [
  "Agentic AI", "LLM Fine-Tuning", "Multi-Agent Architecture",
  "RAG Pipelines", "LoRA / QLoRA", "Unsloth", "PEFT",
  "Gemma 2", "Llama 3", "Prompt Engineering", "Guardrails",
  "Embeddings", "Vector Databases", "LlamaIndex", "MLOps",
  "Azure ML", "MLflow", "XGBoost", "Demand Forecasting",
  "Machine Obsolescence", "Multimodal AI", "AWS Bedrock",
  "Scikit-learn", "NLP", "Reinforcement Learning", "Fine-Tuning",
];

// ── Single orbiting node ───────────────────────────────────────────────────
const OrbitNode = ({
  skill,
  cx,
  cy,
  radius,
  phaseOffset,
  angleRef,
}: {
  skill: (typeof orbitSkills)[0];
  cx: number;
  cy: number;
  radius: number;
  phaseOffset: number;
  angleRef: React.MutableRefObject<number>;
}) => {
  const nodeRef = useRef<SVGGElement>(null);

  useAnimationFrame(() => {
    const a = ((angleRef.current + phaseOffset) * Math.PI) / 180;
    const x = cx + radius * Math.cos(a);
    const y = cy + radius * Math.sin(a);
    nodeRef.current?.setAttribute("transform", `translate(${x},${y})`);
  });

  return (
    <g ref={nodeRef}>
      {/* Outer glow ring */}
      <circle r={24} fill="rgba(210,255,0,0.04)" stroke="rgba(210,255,0,0.25)" strokeWidth={0.8} />
      {/* Inner bg */}
      <circle r={19} fill="#08090f" />
      <image
        href={skill.icon}
        x={-13} y={-13}
        width={26} height={26}
        style={{ filter: skill.invert ? "invert(1) brightness(1.4)" : "brightness(1.05) saturate(1.1)" }}
      />
      {/* Label below node */}
      <text
        y={34}
        textAnchor="middle"
        fontSize={7.5}
        fontFamily="'JetBrains Mono', monospace"
        fill="rgba(210,255,0,0.55)"
        letterSpacing="0.06em"
      >
        {skill.name.length > 10 ? skill.name.slice(0, 10) : skill.name}
      </text>
    </g>
  );
};

// ── One orbit ring ─────────────────────────────────────────────────────────
const OrbitRing = ({
  radius,
  speed,
  startAngle,
  indices,
}: {
  radius: number;
  speed: number;
  startAngle: number;
  indices: number[];
}) => {
  const CX = 320;
  const CY = 320;
  const angleRef = useRef(startAngle);

  useAnimationFrame((_, delta) => {
    angleRef.current += (delta / 1000) * (360 / speed);
  });

  return (
    <>
      {/* Dashed orbit track */}
      <circle
        cx={CX} cy={CY} r={radius}
        fill="none"
        stroke="rgba(210,255,0,0.07)"
        strokeWidth={1}
        strokeDasharray="3 10"
      />
      {indices.map((skillIdx, i) => {
        const skill = orbitSkills[skillIdx];
        if (!skill) return null;
        return (
          <OrbitNode
            key={skill.name}
            skill={skill}
            cx={CX}
            cy={CY}
            radius={radius}
            phaseOffset={(360 / indices.length) * i}
            angleRef={angleRef}
          />
        );
      })}
    </>
  );
};

// ── Full orbit field SVG ───────────────────────────────────────────────────
const OrbitField = () => (
  <div className="relative flex items-center justify-center w-full" style={{ height: 680 }}>
    <svg
      viewBox="0 0 640 640"
      className="absolute w-full h-full"
      style={{ maxWidth: 680, left: "50%", transform: "translateX(-50%)" }}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Subtle radial bg glow */}
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(210,255,0,0.07)" />
          <stop offset="100%" stopColor="rgba(210,255,0,0)" />
        </radialGradient>
        <radialGradient id="sectorGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(210,255,0,0.03)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Background sector glow */}
      <circle cx={320} cy={320} r={315} fill="url(#sectorGlow)" />

      {/* Orbit rings + nodes */}
      {orbits.map((o) => (
        <OrbitRing key={o.radius} {...o} />
      ))}

      {/* ── Center hub ──────────────────────────────────────────── */}
      {/* Outer ring */}
      <circle cx={320} cy={320} r={60} fill="none" stroke="rgba(210,255,0,0.2)" strokeWidth={1} strokeDasharray="6 6" />
      {/* Hub bg */}
      <circle cx={320} cy={320} r={52} fill="url(#hubGlow)" stroke="rgba(210,255,0,0.5)" strokeWidth={1.5} />
      <circle cx={320} cy={320} r={44} fill="#04050d" stroke="rgba(210,255,0,0.12)" strokeWidth={0.8} />

      {/* Corner bracket marks on hub */}
      <g stroke="#D2FF00" strokeWidth={1.5} fill="none" opacity={0.6}>
        <path d="M296 270 L296 278 M296 270 L304 270" />
        <path d="M344 270 L344 278 M344 270 L336 270" />
        <path d="M296 370 L296 362 M296 370 L304 370" />
        <path d="M344 370 L344 362 M344 370 L336 370" />
      </g>

      {/* Hub text */}
      <text x={320} y={308} textAnchor="middle" fontSize={9} fontFamily="'JetBrains Mono', monospace" fill="rgba(210,255,0,0.4)" letterSpacing="0.2em">
        ◆ SECTOR_02 ◆
      </text>
      <text x={320} y={325} textAnchor="middle" fontSize={17} fontFamily="'Bebas Neue', sans-serif" fill="#D2FF00" letterSpacing="0.18em">
        TECH
      </text>
      <text x={320} y={344} textAnchor="middle" fontSize={17} fontFamily="'Bebas Neue', sans-serif" fill="#D2FF00" letterSpacing="0.18em">
        STACK
      </text>
      <text x={320} y={360} textAnchor="middle" fontSize={8} fontFamily="'JetBrains Mono', monospace" fill="rgba(210,255,0,0.3)" letterSpacing="0.15em">
        v2.0
      </text>
    </svg>
  </div>
);

// ── Marquee — CSS animation, no JS, no stutter ─────────────────────────────
const MarqueeStrip = () => {
  // Quadruple the list so there's always overflow on any screen width
  const items = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills, ...marqueeSkills];

  return (
    <div
      className="relative overflow-hidden border-t border-b py-3.5"
      style={{ borderColor: "rgba(210,255,0,0.1)" }}
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
      />

      {/*
        CSS keyframe marquee — `translateX(0)` → `translateX(-50%)`
        Because we have 4× the items, -50% lands exactly back at the start of the second copy,
        creating a perfect seamless loop with zero stutter or gap.
      */}
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ animation: "marquee-scroll 45s linear infinite", willChange: "transform" }}
      >
        {items.map((skill, i) => (
          <span
            key={i}
            className="font-mono text-[11px] tracking-[0.18em] uppercase flex-shrink-0 flex items-center gap-2"
            style={{ color: i % 5 === 0 ? "#D2FF00" : "rgba(210,255,0,0.4)" }}
          >
            <span style={{ color: "rgba(210,255,0,0.25)", fontSize: 7 }}>◆</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// ── Section ────────────────────────────────────────────────────────────────
const SkillsSection = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    <style>{`
      @keyframes marquee-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>

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
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/60 mb-10">
          FULL STACK · GENERATIVE AI · CLOUD NATIVE
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <OrbitField />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mt-4">
          <p
            className="font-mono text-[9px] tracking-[0.3em] uppercase text-center mb-4"
            style={{ color: "rgba(210,255,0,0.3)" }}
          >
            ◆ AI / ML SPECIALISATIONS ◆
          </p>
          <MarqueeStrip />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SkillsSection;

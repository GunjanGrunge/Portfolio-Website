import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const papers = [
  {
    file: "FILE-001",
    title: "THE SYNTHESIS LAYER",
    subtitle: "Reducing Command Authority Bottleneck in Production Multi-Agent AI Systems",
    date: "APR 2026",
    doi: "10.5281/zenodo.19373822",
    url: "https://zenodo.org/records/19373822",
    abstract:
      "Addresses scalability challenges in multi-agent systems via a three-part solution: a routing protocol with ESCALATE / INCLUDE_IN_BRIEF / HANDLE_AUTONOMOUSLY verdicts, an institutional memory system tracking WIN/MISS records, and a monitoring principle based on absence of alerts. Reduces command authority triage time from ~20 min to 5 min per cycle.",
    tags: ["Multi-Agent AI", "Command Authority", "Production Systems", "Agentic AI"],
  },
  {
    file: "FILE-002",
    title: "MURPHY",
    subtitle: "Conversational Intent Surveillance with Arc-Based Trajectory Detection for Safe Multi-Agent AI Systems",
    date: "MAR 2026",
    doi: "10.5281/zenodo.19159244",
    url: "https://zenodo.org/records/19159244",
    abstract:
      "Detects harmful intent emerging gradually across conversations via arc-based trajectory scoring across 4 dimensions: topic drift, escalation velocity, sensitive term density, and pattern similarity. Self-amortizing cost model: early LLM inference builds a pattern library, reducing 90% of subsequent threat detection to near-zero-cost DB lookups.",
    tags: ["LLM Safety", "Intent Surveillance", "Trajectory Detection", "Content Moderation"],
  },
  {
    file: "FILE-003",
    title: "SAGE",
    subtitle: "Self-Adapting Governance Engine — Autonomous Knowledge Evolution and Agent Governance",
    date: "MAR 2026",
    doi: "10.5281/zenodo.19116770",
    url: "https://zenodo.org/records/19116770",
    abstract:
      "Framework solving three core challenges in production multi-agent systems: knowledge staleness, agent evaluation, and behavioral versioning. Provides outcome-driven RAG updates, agent trust-band scoring, behavioral version control with zero-redeployment rollback, and tiered policy governance.",
    tags: ["Self-Adapting AI", "Agent Governance", "RAG", "Behavioral Versioning"],
  },
  {
    file: "FILE-004",
    title: "ILP SPEC v1.1.0",
    subtitle: "Instruction Layer Protocol — Open Source Specification",
    date: "MAR 2026",
    doi: "10.5281/zenodo.19101583",
    url: "https://zenodo.org/records/19101583",
    abstract:
      "Open-source specification defining the Instruction Layer Protocol (ILP) v1.1.0 — a structured protocol for instruction passing in multi-agent and agentic AI systems. Archived on Zenodo and linked to the GunjanGrunge/ilp-spec GitHub repository.",
    tags: ["Open Source", "Protocol Spec", "Agentic AI", "ILP"],
  },
];

type Paper = typeof papers[0];

const PaperCard = ({ paper }: { paper: Paper }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bracket-frame group relative flex flex-col h-full gap-0 p-0 overflow-hidden"
      style={{ background: "hsl(232, 30%, 10%)", border: "1px solid hsl(232, 20%, 16%)" }}
    >
      {/* Scanline overlay on hover */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
        }}
      />

      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: "hsl(232, 20%, 16%)", background: "hsl(232, 30%, 7%)" }}
      >
        <span
          className="font-mono text-[10px] tracking-[0.2em] uppercase"
          style={{ color: "rgba(210,255,0,0.5)" }}
        >
          ▸ CLASSIFIED RESEARCH FILE
        </span>
        <span
          className="font-mono text-[10px] tracking-widest"
          style={{ color: "rgba(210,255,0,0.35)" }}
        >
          {paper.file}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Title */}
        <h3
          className="font-display text-2xl leading-tight tracking-wider transition-colors duration-200 group-hover:text-glow-lando"
          style={{ color: "#D2FF00" }}
        >
          {paper.title}
        </h3>
        <p className="font-body text-xs leading-relaxed" style={{ color: "hsl(228,10%,55%)" }}>
          {paper.subtitle}
        </p>

        {/* Metadata */}
        <div
          className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] tracking-widest uppercase border-t border-b py-2"
          style={{ borderColor: "hsl(232, 20%, 16%)", color: "hsl(228,10%,45%)" }}
        >
          <span>
            AUTHOR: <span style={{ color: "hsl(228,20%,70%)" }}>Gunjan Sarkar</span>
          </span>
          <span>
            DATE: <span style={{ color: "hsl(228,20%,70%)" }}>{paper.date}</span>
          </span>
          <span>
            DOI:{" "}
            <span style={{ color: "rgba(210,255,0,0.6)" }}>{paper.doi}</span>
          </span>
        </div>

        {/* Abstract */}
        <div className="relative">
          <p
            className="font-body text-sm leading-relaxed transition-all duration-300"
            style={{
              color: "hsl(228,10%,60%)",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: expanded ? "unset" : 3,
              overflow: expanded ? "visible" : "hidden",
            } as React.CSSProperties}
          >
            {paper.abstract}
          </p>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-1 font-mono text-[10px] tracking-widest transition-colors duration-150 hover:opacity-80"
            style={{ color: "rgba(210,255,0,0.6)" }}
          >
            {expanded ? "[ COLLAPSE ↑ ]" : "[ READ MORE ↓ ]"}
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {paper.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider px-2 py-0.5 uppercase"
              style={{
                color: "rgba(210,255,0,0.7)",
                background: "rgba(210,255,0,0.06)",
                border: "1px solid rgba(210,255,0,0.18)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5">
        <a
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="glitch-hover inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase px-4 py-2 transition-all duration-200"
          style={{
            color: "#111112",
            background: "#D2FF00",
            border: "1px solid #D2FF00",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#D2FF00";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#D2FF00";
            (e.currentTarget as HTMLAnchorElement).style.color = "#111112";
          }}
        >
          <ExternalLink size={12} />
          ACCESS PAPER
        </a>
      </div>
    </motion.div>
  );
};

export const ResearchPapers = () => (
  <section id="research" className="px-6 py-20 max-w-7xl mx-auto">
    <ScrollReveal>
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-2">
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(210,255,0,0.5)" }}
          >
            ▸ PUBLISHED WORKS
          </span>
        </div>
        <h2
          className="font-display text-5xl md:text-6xl tracking-wider"
          style={{ color: "hsl(228,20%,92%)" }}
        >
          RESEARCH /{" "}
          <span style={{ color: "#D2FF00" }} className="text-glow-lando">
            PUBLICATIONS
          </span>
        </h2>
        <div className="mt-3 h-px w-24" style={{ background: "#D2FF00" }} />
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      {papers.map((paper, i) => (
        <ScrollReveal key={paper.file} delay={i * 0.1} className="h-full">
          <PaperCard paper={paper} />
        </ScrollReveal>
      ))}
    </div>
  </section>
);

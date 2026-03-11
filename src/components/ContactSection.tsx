import { ScrollReveal } from "./ScrollReveal";
import { useState } from "react";

const socials = [
  { label: "GITHUB", url: "https://github.com/GunjanGrunge" },
  { label: "LINKEDIN", url: "https://linkedin.com" },
  { label: "KAGGLE", url: "https://kaggle.com" },
];

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "gunjan37@hotmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-32 relative" style={{ backgroundColor: '#03040f' }}>
      {/* Watermark */}
      <div className="absolute top-0 left-0 font-display text-[16rem] leading-none text-foreground/[0.02] pointer-events-none select-none">06</div>
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-6">
            SECTOR_06 / CONTACT
          </p>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-foreground tracking-wider mb-8 glitch-text" data-text="LET'S BUILD SOMETHING.">
            LET'S BUILD
            <br />
            <span className="text-primary text-glow-lando">SOMETHING.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={copyEmail}
              className="font-mono text-sm sm:text-lg text-muted-foreground hover:text-primary transition-colors tracking-wider"
            >
              {email}
            </button>
            <button
              onClick={copyEmail}
              className="font-mono text-[10px] px-3 py-1 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {copied ? "COPIED!" : "COPY"}
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-all duration-200"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">[</span>
                <span className="mx-1">→ {s.label}</span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">]</span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;

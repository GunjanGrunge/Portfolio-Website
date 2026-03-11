import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CyberNavProps {
  activeWorld: "oncode" | "offcode";
  onWorldChange: (world: "oncode" | "offcode") => void;
}

const onCodeLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORK", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

const CyberNav = ({ activeWorld, onWorldChange }: CyberNavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-l-4 border-l-primary ${
        scrolled ? "glass-dark border-b border-b-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="font-mono text-primary font-bold text-lg tracking-tight">
          [GG]
        </a>

        {/* World toggle tabs */}
        <div className="hidden md:flex items-center gap-1 border border-border p-0.5">
          <button
            onClick={() => onWorldChange("oncode")}
            className={`font-mono text-[10px] tracking-[0.2em] px-4 py-1.5 transition-all ${
              activeWorld === "oncode"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            [ON CODE]
          </button>
          <button
            onClick={() => onWorldChange("offcode")}
            className={`font-mono text-[10px] tracking-[0.2em] px-4 py-1.5 transition-all ${
              activeWorld === "offcode"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            [OFF CODE]
          </button>
        </div>

        {/* Desktop links (only show in oncode) */}
        {activeWorld === "oncode" && (
          <div className="hidden md:flex items-center gap-6">
            {onCodeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-mono text-[10px] font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        )}

        {activeWorld === "offcode" && (
          <div className="hidden md:flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
              BEYOND THE CODE
            </span>
          </div>
        )}

        {/* Open to work badge */}
        <div className="hidden md:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Open to Work
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden font-mono text-primary text-sm"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "[✕]" : "[≡]"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-dark border-t border-border"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {/* World toggle */}
            <div className="flex gap-2 mb-3 pb-3 border-b border-border/30">
              <button
                onClick={() => { onWorldChange("oncode"); setMobileOpen(false); }}
                className={`font-mono text-xs tracking-widest px-3 py-1 ${
                  activeWorld === "oncode" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                [ON CODE]
              </button>
              <button
                onClick={() => { onWorldChange("offcode"); setMobileOpen(false); }}
                className={`font-mono text-xs tracking-widest px-3 py-1 ${
                  activeWorld === "offcode" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                [OFF CODE]
              </button>
            </div>
            {activeWorld === "oncode" && onCodeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-xs tracking-widest text-muted-foreground hover:text-primary py-2 border-b border-border/30"
              >
                {">"} {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default CyberNav;

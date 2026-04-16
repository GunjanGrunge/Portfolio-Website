import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CyberNavProps {
  activeWorld: "oncode" | "offcode";
  onWorldChange: (world: "oncode" | "offcode") => void;
}

const onCodeLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORK", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "RESEARCH", href: "#research" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

const offCodeLinks = [
  { label: "F1", href: "#offcode" },
  { label: "MOTOGP", href: "#offcode" },
  { label: "MUSIC", href: "#offcode" },
  { label: "CS2", href: "#offcode" },
];

const CyberNav = ({ activeWorld, onWorldChange }: CyberNavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = activeWorld === "oncode" ? onCodeLinks : offCodeLinks;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-l-4 border-l-primary"
        style={{
          minHeight: 56,
          backgroundColor: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(210,255,0,0.15)" : "1px solid transparent",
        }}
      >
        <div className="flex items-center justify-between h-14 px-6">
          {/* Logo — single line */}
          <a href="#" className="font-mono font-bold text-[28px] leading-none tracking-tight flex-shrink-0">
            <span className="text-primary">[</span>
            <span className="text-foreground">GG</span>
            <span className="text-primary">]</span>
          </a>

          {/* Desktop center: tabs + links */}
          <div className="hidden md:flex items-center gap-8">
            {/* World toggle tabs */}
            <div className="flex items-center gap-1 border border-border p-0.5">
              <button
                onClick={() => onWorldChange("oncode")}
                className={`font-mono text-[10px] tracking-[0.2em] px-4 py-1.5 transition-all ${
                  activeWorld === "oncode"
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                ON CODE
              </button>
              <button
                onClick={() => onWorldChange("offcode")}
                className={`font-mono text-[10px] tracking-[0.2em] px-4 py-1.5 transition-all ${
                  activeWorld === "offcode"
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                OFF CODE
              </button>
            </div>

            {/* Animated link swap */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWorld}
                className="flex items-center"
                style={{ gap: 32 }}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                  exit: { transition: { staggerChildren: 0.05 } },
                }}
              >
                {links.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="relative font-mono font-medium uppercase text-muted-foreground hover:text-primary transition-colors group"
                    style={{ fontSize: 11, letterSpacing: "0.1em" }}
                    variants={{
                      hidden: { opacity: 0, y: -8 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
                      exit: { opacity: 0, y: 8, transition: { duration: 0.15 } },
                    }}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop right: position badge */}
          <div className="hidden md:flex items-center gap-2 px-4 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-primary pulse-dot flex-shrink-0" />
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground whitespace-nowrap">
              <span className="text-primary font-bold">#1</span> / AGENTIC AI / FULL STACK
            </span>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-[60]"
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-[2px] bg-primary transition-all duration-300 origin-center"
              style={mobileOpen ? { transform: "rotate(45deg) translateY(3.5px)" } : {}}
            />
            <span
              className="block w-5 h-[2px] bg-primary transition-all duration-300"
              style={mobileOpen ? { opacity: 0, transform: "scaleX(0)" } : {}}
            />
            <span
              className="block w-5 h-[2px] bg-primary transition-all duration-300 origin-center"
              style={mobileOpen ? { transform: "rotate(-45deg) translateY(-3.5px)" } : {}}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex flex-col pt-16 px-6"
            style={{ backgroundColor: "rgba(3,4,15,0.97)" }}
          >
            {/* World toggle tabs */}
            <div className="flex gap-2 mb-8 pt-4">
              <button
                onClick={() => onWorldChange("oncode")}
                className={`font-mono text-xs tracking-[0.2em] px-5 py-2 transition-all ${
                  activeWorld === "oncode"
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/30 text-muted-foreground"
                }`}
              >
                ON CODE
              </button>
              <button
                onClick={() => onWorldChange("offcode")}
                className={`font-mono text-xs tracking-[0.2em] px-5 py-2 transition-all ${
                  activeWorld === "offcode"
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/30 text-muted-foreground"
                }`}
              >
                OFF CODE
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-sm tracking-widest text-muted-foreground hover:text-primary py-3 border-b border-border/20 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <span className="text-primary text-[10px]">{">"}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Open to Work badge */}
            <div className="flex items-center gap-2 mt-auto mb-8">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                <span className="text-primary font-bold">#1</span> / AGENTIC AI / FULL STACK · OPEN TO WORK
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CyberNav;

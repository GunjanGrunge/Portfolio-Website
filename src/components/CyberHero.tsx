import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fullName = "GUNJAN SARKAR";
const subtitle = "FULL STACK DEVELOPER & AI ENGINEER";

const CyberHero = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedSub, setDisplayedSub] = useState("");
  const [showCTAs, setShowCTAs] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i <= fullName.length) {
        setDisplayedName(fullName.slice(0, i));
        i++;
      } else {
        clearInterval(typeTimer);
        // Start subtitle
        let j = 0;
        const subTimer = setInterval(() => {
          if (j <= subtitle.length) {
            setDisplayedSub(subtitle.slice(0, j));
            j++;
          } else {
            clearInterval(subTimer);
            setShowCTAs(true);
            setTimeout(() => setShowScroll(true), 400);
          }
        }, 25);
      }
    }, 60);

    return () => clearInterval(typeTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle field */}
      <ParticleField />

      {/* Logo top-left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute top-6 left-6 z-10"
      >
        <span className="font-mono text-2xl font-bold text-primary text-glow-lime">
          [GG]
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-wide text-foreground mb-6">
          <span
            className="glitch-text block"
            data-text={displayedName}
          >
            {displayedName}
            {displayedName.length < fullName.length && (
              <span className="text-primary animate-pulse">|</span>
            )}
          </span>
        </h1>

        {/* Subtitle badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-secondary/50 font-mono text-xs sm:text-sm tracking-[0.2em] text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-primary" />
            {displayedSub}
            {displayedSub.length < subtitle.length && (
              <span className="text-primary animate-pulse">|</span>
            )}
            {displayedSub.length === subtitle.length && (
              <span className="blinking-cursor" />
            )}
          </div>
        </div>

        {/* CTAs */}
        {showCTAs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="glitch-hover px-8 py-3 border-2 border-primary text-primary font-mono text-sm tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              [VIEW WORK]
            </a>
            <a
              href="#contact"
              className="glitch-hover px-8 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:bg-primary/80 transition-all duration-200"
            >
              [GET IN TOUCH]
            </a>
          </motion.div>
        )}
      </div>

      {/* Scroll cue */}
      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 right-8 z-10"
        >
          <div
            className="font-mono text-[10px] tracking-widest text-muted-foreground"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            SCROLL TO EXPLORE ↓
          </div>
        </motion.div>
      )}
    </section>
  );
};

const ParticleField = () => {
  const [particles] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: "hsl(72, 100%, 50%)",
            boxShadow: `0 0 ${p.size * 3}px hsl(72, 100%, 50%, 0.4)`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default CyberHero;

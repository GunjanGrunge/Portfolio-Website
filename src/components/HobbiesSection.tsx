import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

/* ═══════════════════════════════════════════
   CARD 1 — FORMULA 1 / VERSTAPPEN
   ═══════════════════════════════════════════ */

const F1Card = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer((t) => t + 0.001), 1);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (t: number) => {
    const mins = Math.floor(t / 60);
    const secs = Math.floor(t % 60);
    const ms = Math.floor((t * 1000) % 1000);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}.${String(ms).padStart(3, "0")}`;
  };

  const [goldGlow, setGoldGlow] = useState(false);

  return (
    <div className="hobby-card-snap relative flex-shrink-0 w-screen h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0820 0%, #1E1645 40%, #0f0d30 100%)" }}
    >
      {/* #1 watermark */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[30rem] leading-none pointer-events-none select-none transition-all duration-300 ${
          goldGlow ? "text-[#FFD700]/20" : "text-white/[0.04]"
        }`}
        onMouseEnter={() => setGoldGlow(true)}
        onMouseLeave={() => setGoldGlow(false)}
        style={{ pointerEvents: "auto", cursor: "default" }}
      >
        1
      </div>

      {/* Circuit line SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <motion.path
          d="M0,300 C200,100 400,500 600,300 S1000,100 1200,300"
          fill="none"
          stroke="#CC1E4A"
          strokeWidth="1"
          strokeDasharray="8 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* HUD index */}
      <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.3em] text-white/40">
        01 / 04
      </div>

      {/* Lap timer */}
      <div className="absolute top-6 right-6 font-mono text-xs text-[#FFD700]/80 tabular-nums">
        LAP {formatTime(timer)}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-[#CC1E4A] mb-2">FORMULA 1</div>
        <h3 className="font-display text-6xl sm:text-8xl tracking-wider text-white mb-4 glitch-text" data-text="P1. ALWAYS.">
          P1. ALWAYS.
        </h3>
        <p className="font-body text-white/60 text-sm mb-6">
          Built different. Four titles say so.
        </p>

        {/* Constructor standings */}
        <div className="inline-block border border-[#1E1645] bg-black/40 px-4 py-3 text-left">
          <div className="font-mono text-[9px] tracking-[0.2em] text-[#FFD700]/50 mb-2">CONSTRUCTOR STANDINGS</div>
          <div className="font-mono text-xs text-white/80 flex items-center gap-2">
            <span className="text-[#FFD700] font-bold">01.</span>
            <span>VERSTAPPEN</span>
            <span className="flex-1 h-2 bg-[#CC1E4A]/30 relative overflow-hidden ml-2">
              <motion.span
                className="absolute inset-y-0 left-0 bg-[#CC1E4A]"
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </span>
            <span className="text-[#FFD700] text-[10px]">400+ PTS</span>
          </div>
        </div>
      </div>

      {/* F1 car silhouette speed streaks */}
      <div className="absolute bottom-12 right-12 opacity-10 pointer-events-none">
        <svg width="300" height="80" viewBox="0 0 300 80">
          <motion.line x1="0" y1="35" x2="200" y2="35" stroke="#CC1E4A" strokeWidth="1"
            initial={{ x2: 0 }} whileInView={{ x2: 200 }} transition={{ duration: 0.8 }} viewport={{ once: true }} />
          <motion.line x1="0" y1="40" x2="250" y2="40" stroke="#CC1E4A" strokeWidth="2"
            initial={{ x2: 0 }} whileInView={{ x2: 250 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} />
          <motion.line x1="0" y1="45" x2="180" y2="45" stroke="#CC1E4A" strokeWidth="1"
            initial={{ x2: 0 }} whileInView={{ x2: 180 }} transition={{ duration: 0.9, delay: 0.2 }} viewport={{ once: true }} />
        </svg>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   CARD 2 — MOTOGP / MARQUEZ
   ═══════════════════════════════════════════ */

const MotoGPCard = () => {
  const [leanAngle, setLeanAngle] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLeanAngle(65), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hobby-card-snap relative flex-shrink-0 w-screen h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0000 0%, #1a0a0a 40%, #0d0505 100%)" }}
    >
      {/* #93 watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] leading-none text-white/[0.04] pointer-events-none select-none">
        93
      </div>

      {/* Racing line arc */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600">
        <motion.path
          d="M1100,50 Q600,200 100,550"
          fill="none"
          stroke="#E4002B"
          strokeWidth="2"
          strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.25 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </svg>

      {/* Sparks on entry */}
      <motion.div
        className="absolute bottom-32 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FFD700]"
            initial={{ x: 0, y: 0, opacity: 1 }}
            whileInView={{
              x: (Math.random() - 0.5) * 80,
              y: Math.random() * -40 - 10,
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
          />
        ))}
      </motion.div>

      {/* HUD */}
      <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.3em] text-white/40">
        02 / 04
      </div>

      {/* Lean gauge */}
      <div className="absolute bottom-8 left-8">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="30" fill="none" stroke="#333" strokeWidth="3" />
          <motion.circle
            cx="40" cy="40" r="30"
            fill="none" stroke="#E4002B" strokeWidth="3"
            strokeDasharray={`${(leanAngle / 90) * 188} 188`}
            strokeLinecap="butt"
            transform="rotate(-90 40 40)"
            initial={{ strokeDasharray: "0 188" }}
            animate={{ strokeDasharray: `${(leanAngle / 90) * 188} 188` }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <text x="40" y="44" textAnchor="middle" className="font-mono text-[10px] fill-white/80">{leanAngle}°</text>
        </svg>
      </div>

      {/* Rocking bike silhouette */}
      <div className="absolute bottom-20 right-20 opacity-10 pointer-events-none"
        style={{ animation: "lean-rock 3s ease-in-out infinite" }}
      >
        <svg width="200" height="120" viewBox="0 0 200 120">
          <ellipse cx="60" cy="100" rx="25" ry="25" fill="none" stroke="#E4002B" strokeWidth="1.5" />
          <ellipse cx="150" cy="100" rx="25" ry="25" fill="none" stroke="#E4002B" strokeWidth="1.5" />
          <path d="M60,100 L80,50 L130,40 L150,100 M80,50 L100,30 L130,40" fill="none" stroke="#E4002B" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-[#E4002B] mb-2">MOTOGP</div>
        <h3 className="font-display text-5xl sm:text-7xl tracking-wider text-white mb-4 italic">
          93. THE COMEBACK.
        </h3>
        <p className="font-body text-white/60 text-sm mb-6">
          Crash. Comeback. Conquer. Repeat.
        </p>

        {/* Championship badge */}
        <div className="inline-block border border-[#E4002B]/30 bg-black/40 px-4 py-3 text-left transform -rotate-1">
          <div className="font-mono text-[9px] tracking-[0.2em] text-[#E4002B]/60 mb-1">CAREER STATS</div>
          <div className="font-mono text-xs text-white/70 space-y-0.5">
            <div>WORLD TITLES: <span className="text-[#E4002B]">8</span></div>
            <div>ELBOW SCRAPES: <span className="text-[#E4002B]">∞</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   CARD 3 — MUSIC PRODUCTION
   ═══════════════════════════════════════════ */

const MusicCard = () => {
  const [beatDrop, setBeatDrop] = useState(false);

  const handleClick = () => {
    setBeatDrop(true);
    setTimeout(() => setBeatDrop(false), 600);
  };

  return (
    <div
      className="hobby-card-snap relative flex-shrink-0 w-screen h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden cursor-pointer"
      style={{ background: "linear-gradient(135deg, #0a0510 0%, #2D0059 30%, #0a0510 100%)" }}
      onClick={handleClick}
    >
      {/* Waveform background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="flex items-center gap-[2px] h-32 opacity-20">
          {Array.from({ length: 80 }, (_, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full"
              style={{
                backgroundColor: i % 3 === 0 ? "#FFB700" : "#2D0059",
                height: `${20 + Math.sin(i * 0.3) * 30 + Math.random() * 20}%`,
                animation: `wave-breathe ${1 + Math.random() * 2}s ease-in-out ${Math.random()}s infinite`,
              }}
              animate={beatDrop ? { scaleY: [1, 2.5, 1], transition: { duration: 0.4 } } : {}}
            />
          ))}
        </div>
      </div>

      {/* HUD */}
      <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.3em] text-white/40">
        03 / 04
      </div>

      {/* BPM counter */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <motion.div
          className="w-2 h-2 rounded-full bg-[#FFB700]"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 60 / 128, repeat: Infinity }}
        />
        <span className="font-mono text-xs text-[#FFB700]/80">128 BPM</span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-[#FFB700] mb-2">MUSIC PRODUCTION</div>
        <h3 className="font-display text-5xl sm:text-7xl tracking-wider text-white mb-4">
          IN THE MIX
        </h3>
        <p className="font-body text-white/60 text-sm mb-6">
          Building worlds one sample at a time.
        </p>
        <p className="font-mono text-[10px] text-[#FFB700]/40 tracking-widest">
          [ CLICK ANYWHERE FOR BEAT DROP ]
        </p>
      </div>

      {/* Mini DAW faders */}
      <div className="absolute bottom-8 left-8 flex items-end gap-2 opacity-30">
        {[60, 80, 45, 70, 55, 90, 40].map((h, i) => (
          <motion.div
            key={i}
            className="w-3 rounded-sm"
            style={{ backgroundColor: i % 2 === 0 ? "#FFB700" : "#9333ea", height: 0 }}
            whileInView={{ height: h }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   CARD 4 — COUNTER-STRIKE / AWPER
   ═══════════════════════════════════════════ */

const CSCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scopePos, setScopePos] = useState({ x: 50, y: 50 });
  const [flashEdge, setFlashEdge] = useState(false);
  const [kills, setKills] = useState<string[]>([]);

  useEffect(() => {
    const feed = [
      "✦ GG [AWP] ▸ enemy_01  headshot",
      "✦ GG [AWP] ▸ enemy_02",
      "✦ GG [AWP] ▸ enemy_03  headshot",
      "✦ GG [AWP] ▸ enemy_04",
      "✦ GG [AWP] ▸ enemy_05  ACE",
    ];
    const timers: NodeJS.Timeout[] = [];
    feed.forEach((line, i) => {
      timers.push(setTimeout(() => {
        setKills((prev) => [...prev, line]);
      }, 800 + i * 400));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setScopePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleClick = () => {
    setFlashEdge(true);
    setTimeout(() => setFlashEdge(false), 150);
  };

  return (
    <div
      ref={cardRef}
      className={`hobby-card-snap relative flex-shrink-0 w-screen h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden cursor-crosshair ${
        flashEdge ? "ring-2 ring-white/50 ring-inset" : ""
      }`}
      style={{ background: "linear-gradient(135deg, #0a0a00 0%, #111108 40%, #0a0a00 100%)" }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Corridor perspective */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 1200 600">
        {/* Corridor lines */}
        <line x1="400" y1="0" x2="500" y2="300" stroke="#00FF41" strokeWidth="0.5" />
        <line x1="800" y1="0" x2="700" y2="300" stroke="#00FF41" strokeWidth="0.5" />
        <line x1="400" y1="600" x2="500" y2="300" stroke="#00FF41" strokeWidth="0.5" />
        <line x1="800" y1="600" x2="700" y2="300" stroke="#00FF41" strokeWidth="0.5" />
        {/* Floor lines */}
        <line x1="0" y1="400" x2="1200" y2="400" stroke="#00FF41" strokeWidth="0.3" />
        <line x1="0" y1="450" x2="1200" y2="450" stroke="#00FF41" strokeWidth="0.3" />
        <line x1="0" y1="500" x2="1200" y2="500" stroke="#00FF41" strokeWidth="0.3" />
        {/* Target dot */}
        <motion.circle
          cx="600" cy="300" r="4"
          fill="#E4002B"
          animate={{ opacity: [0.5, 1, 0.5], r: [3, 5, 3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>

      {/* Scope overlay follows mouse */}
      <div
        className="absolute pointer-events-none z-20"
        style={{
          left: `${scopePos.x}%`,
          top: `${scopePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" style={{ animation: "scope-breathe 3s ease-in-out infinite" }}>
          {/* Scope ring */}
          <circle cx="60" cy="60" r="50" fill="none" stroke="#00FF41" strokeWidth="1" opacity="0.5" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="#00FF41" strokeWidth="0.5" opacity="0.2" />
          {/* Crosshair */}
          <line x1="60" y1="10" x2="60" y2="45" stroke="#00FF41" strokeWidth="0.8" opacity="0.7" />
          <line x1="60" y1="75" x2="60" y2="110" stroke="#00FF41" strokeWidth="0.8" opacity="0.7" />
          <line x1="10" y1="60" x2="45" y2="60" stroke="#00FF41" strokeWidth="0.8" opacity="0.7" />
          <line x1="75" y1="60" x2="110" y2="60" stroke="#00FF41" strokeWidth="0.8" opacity="0.7" />
          {/* Center dot */}
          <circle cx="60" cy="60" r="2" fill="#00FF41" opacity="0.9" />
          {/* Lens glare */}
          <motion.circle
            cx="45" cy="45" r="8"
            fill="rgba(255,255,255,0.05)"
            animate={{ opacity: [0.02, 0.08, 0.02] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* HUD */}
      <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.3em] text-white/40">
        04 / 04
      </div>

      {/* AWP Stats */}
      <div className="absolute top-6 right-6 text-right">
        <div className="font-mono text-[9px] tracking-[0.2em] text-[#F0A500]/50 mb-1">AWP STATS</div>
        <div className="font-mono text-[10px] text-white/60 space-y-0.5">
          <div>ROLE: <span className="text-[#00FF41]">AWPer</span></div>
          <div>HS%: <span className="text-[#F0A500]">74.2</span></div>
          <div>ADR: <span className="text-[#F0A500]">118.4</span></div>
          <div>FIRST BLOODS: <span className="text-[#F0A500]">31</span></div>
        </div>
      </div>

      {/* Kill feed */}
      <div className="absolute bottom-6 right-6 space-y-1">
        {kills.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: [0, 1, 1, 0.7], x: 0 }}
            transition={{ duration: 0.4 }}
            className={`font-mono text-[10px] px-2 py-0.5 whitespace-nowrap ${
              line.includes("ACE")
                ? "text-[#FFD700] bg-[#FFD700]/10 border-l-2 border-[#FFD700]"
                : line.includes("headshot")
                ? "text-[#F0A500] bg-[#F0A500]/5 border-l border-[#F0A500]/30"
                : "text-white/50"
            }`}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-xl">
        <div className="font-mono text-[10px] tracking-[0.3em] text-[#F0A500] mb-2">COUNTER-STRIKE 2</div>
        <h3 className="font-display text-5xl sm:text-7xl tracking-wider text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', system-ui" }}
        >
          ONE SHOT. ONE KILL.
        </h3>
        <p className="font-body text-white/60 text-sm mb-4">
          They never hear the second shot.
        </p>
        <p className="font-mono text-[10px] text-[#00FF41]/40 tracking-widest">
          [ CLICK TO FIRE ]
        </p>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   HOBBIES SECTION WRAPPER
   ═══════════════════════════════════════════ */

const CARD_COUNT = 4;

const HobbiesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasPeeked, setHasPeeked] = useState(false);
  const [isTrapped, setIsTrapped] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  // Compute current card from scroll position
  const updateCardFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      const pct = el.scrollLeft / maxScroll;
      setProgress(pct);
      const card = Math.round(pct * (CARD_COUNT - 1));
      setCurrentCard(card);
      return card;
    }
    return 0;
  }, []);

  // Track scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (!hasInteracted && el.scrollLeft > 20) setHasInteracted(true);
      updateCardFromScroll();
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [hasInteracted, updateCardFromScroll]);

  // Intersection observer for visibility + peek + scroll trap
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio > 0.4;
        setIsInView(visible);
        if (visible) {
          setIsTrapped(true);
          // Peek animation on first visit
          if (!hasPeeked && scrollRef.current) {
            setHasPeeked(true);
            const el = scrollRef.current;
            setTimeout(() => {
              el.scrollTo({ left: 80, behavior: "smooth" });
              setTimeout(() => el.scrollTo({ left: 0, behavior: "smooth" }), 500);
            }, 300);
          }
        }
      },
      { threshold: [0.4, 0.5] }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasPeeked]);

  // Update trap state based on current card
  useEffect(() => {
    if (currentCard >= CARD_COUNT - 1) {
      setIsTrapped(false);
    } else if (isInView) {
      setIsTrapped(true);
    }
  }, [currentCard, isInView]);

  // Scroll trap: intercept vertical wheel events and convert to horizontal card nav
  useEffect(() => {
    const section = sectionRef.current;
    const el = scrollRef.current;
    if (!section || !el) return;

    const handler = (e: WheelEvent) => {
      if (!isInView) return;
      // Only trap if not on the last card (scrolling down) or not on first card (scrolling up)
      const card = Math.round((el.scrollLeft / (el.scrollWidth - el.clientWidth)) * (CARD_COUNT - 1));
      
      if (e.deltaY > 0 && card < CARD_COUNT - 1) {
        // Scrolling down, not at last card — trap and go next
        e.preventDefault();
        const targetCard = Math.min(card + 1, CARD_COUNT - 1);
        el.scrollTo({ left: targetCard * el.clientWidth, behavior: "smooth" });
        setHasInteracted(true);
      } else if (e.deltaY < 0 && card > 0) {
        // Scrolling up, not at first card — trap and go prev
        e.preventDefault();
        const targetCard = Math.max(card - 1, 0);
        el.scrollTo({ left: targetCard * el.clientWidth, behavior: "smooth" });
      }
      // If at last card scrolling down, or first card scrolling up — let it pass through
    };

    section.addEventListener("wheel", handler, { passive: false });
    return () => section.removeEventListener("wheel", handler);
  }, [isInView]);

  // Keyboard arrow keys when section is in view
  useEffect(() => {
    if (!isInView) return;
    const handler = (e: KeyboardEvent) => {
      const el = scrollRef.current;
      if (!el) return;
      const card = Math.round((el.scrollLeft / (el.scrollWidth - el.clientWidth)) * (CARD_COUNT - 1));

      if (e.key === "ArrowRight" && card < CARD_COUNT - 1) {
        e.preventDefault();
        el.scrollTo({ left: (card + 1) * el.clientWidth, behavior: "smooth" });
        setHasInteracted(true);
      } else if (e.key === "ArrowLeft" && card > 0) {
        e.preventDefault();
        el.scrollTo({ left: (card - 1) * el.clientWidth, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isInView]);

  const scrollToCard = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    setHasInteracted(true);
    const card = Math.round((el.scrollLeft / (el.scrollWidth - el.clientWidth)) * (CARD_COUNT - 1));
    const target = dir === "next" ? Math.min(card + 1, CARD_COUNT - 1) : Math.max(card - 1, 0);
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
  };

  // Mouse drag handlers with snap
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.pageX;
    dragScrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.scrollSnapType = "none"; // disable snap during drag
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;
      const dx = e.pageX - dragStartX.current;
      scrollRef.current.scrollLeft = dragScrollLeft.current - dx;
    };
    const onMouseUp = () => {
      if (!isDragging.current || !scrollRef.current) return;
      isDragging.current = false;
      const el = scrollRef.current;
      el.style.cursor = "grab";
      // Snap to nearest card
      const cardWidth = el.clientWidth;
      const nearest = Math.round(el.scrollLeft / cardWidth);
      el.style.scrollSnapType = "x mandatory";
      el.scrollTo({ left: nearest * cardWidth, behavior: "smooth" });
      setHasInteracted(true);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const isOnLastCard = currentCard >= CARD_COUNT - 1;

  return (
    <section
      id="offcode"
      className="relative z-20"
      ref={sectionRef}
      style={{ backgroundColor: "#03040f" }}
    >
      <div className="py-24">
        {/* Section header */}
        <div className="container mx-auto px-6 mb-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-primary text-sm">{">"}</span>
              <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">BEYOND THE CODE</h2>
            </div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              THE PERSON BEHIND THE PORTFOLIO
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          {/* Dashed connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-primary/20 z-10 pointer-events-none" />

          {/* LEFT ARROW */}
          {currentCard > 0 && (
            <button
              onClick={() => scrollToCard("prev")}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center border border-primary/60 text-primary bg-background/80 backdrop-blur-sm hover:glow-lando transition-all"
              style={{ animation: "arrow-pulse 2s ease-in-out infinite" }}
            >
              <span className="font-display text-2xl">‹</span>
            </button>
          )}

          {/* RIGHT ARROW */}
          {currentCard < CARD_COUNT - 1 && (
            <button
              onClick={() => scrollToCard("next")}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center border border-primary/60 text-primary bg-background/80 backdrop-blur-sm hover:glow-lando transition-all"
              style={{ animation: "arrow-pulse 2s ease-in-out infinite" }}
            >
              <span className="font-display text-2xl">›</span>
            </button>
          )}

          {/* DRAG HINT PILL */}
          {!hasInteracted && (
            <motion.div
              className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 items-center gap-2 px-4 py-2 border border-primary rounded-full bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                className="font-mono text-primary text-xs"
                animate={{ x: [-6, 6, -6] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ←
              </motion.span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary">DRAG TO EXPLORE</span>
              <motion.span
                className="font-mono text-primary text-xs"
                animate={{ x: [6, -6, 6] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.div>
          )}

          {/* "Scroll to continue" cue on last card */}
          {isOnLastCard && (
            <motion.div
              className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary">
                ↓ SCROLL TO CONTINUE
              </span>
            </motion.div>
          )}

          {/* Desktop: horizontal scroll */}
          <div
            ref={scrollRef}
            className="hidden md:flex hobby-scroll overflow-x-auto overflow-y-hidden"
            style={{ cursor: "grab" }}
            onMouseDown={onMouseDown}
          >
            <F1Card />
            <MotoGPCard />
            <MusicCard />
            <CSCard />
          </div>

          {/* Progress bar */}
          <div className="hidden md:block relative mx-auto mt-4 max-w-md px-6">
            <div className="h-[2px] bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${Math.max(progress * 100, 2)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-mono text-[9px] text-primary/60 tracking-widest">
                {String(currentCard + 1).padStart(2, "0")}/{String(CARD_COUNT).padStart(2, "0")}
              </span>
              <span className="font-mono text-[9px] text-muted-foreground tracking-widest">PROGRESS</span>
            </div>
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden space-y-4 px-4">
            <div className="rounded overflow-hidden"><F1Card /></div>
            <div className="rounded overflow-hidden"><MotoGPCard /></div>
            <div className="rounded overflow-hidden"><MusicCard /></div>
            <div className="rounded overflow-hidden"><CSCard /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;

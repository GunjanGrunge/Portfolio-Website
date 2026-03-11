import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const crosshairRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (crosshairRef.current) {
        crosshairRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    let raf: number;
    const animateTrail = () => {
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.12;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
      }
      raf = requestAnimationFrame(animateTrail);
    };

    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Crosshair */}
      <div
        ref={crosshairRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <span className="text-lime font-mono text-xs font-bold select-none opacity-80">+</span>
        </div>
      </div>
      {/* Trail dot */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div className="w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: "hsl(72, 100%, 50%)", boxShadow: "0 0 12px hsl(72, 100%, 50%, 0.6)" }}
        />
      </div>
      <style>{`
        @media (hover: hover) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

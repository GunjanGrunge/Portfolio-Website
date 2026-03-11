import { useEffect, useRef } from "react";

const RadarGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 60;
      const offsetX = (time * 20) % spacing;
      const offsetY = (time * 20) % spacing;

      // Vertical lines
      for (let x = -spacing + offsetX; x < canvas.width + spacing; x += spacing) {
        const pulse = Math.sin(time * 2 + x * 0.01) * 0.03 + 0.04;
        ctx.strokeStyle = `rgba(198, 255, 0, ${pulse})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -spacing + offsetY; y < canvas.height + spacing; y += spacing) {
        const pulse = Math.sin(time * 2 + y * 0.01) * 0.03 + 0.04;
        ctx.strokeStyle = `rgba(198, 255, 0, ${pulse})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Intersection glows
      for (let x = -spacing + offsetX; x < canvas.width + spacing; x += spacing) {
        for (let y = -spacing + offsetY; y < canvas.height + spacing; y += spacing) {
          const glowIntensity = Math.sin(time * 3 + x * 0.02 + y * 0.02) * 0.5 + 0.5;
          if (glowIntensity > 0.7) {
            const radius = glowIntensity * 3;
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, `rgba(198, 255, 0, ${glowIntensity * 0.3})`);
            gradient.addColorStop(1, `rgba(198, 255, 0, 0)`);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default RadarGrid;

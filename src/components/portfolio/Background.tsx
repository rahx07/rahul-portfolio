import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export function Background() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* animated grid */}
      <div className="absolute inset-0 grid-bg opacity-70" />

      {/* rotating conic aurora */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 opacity-[0.18]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, oklch(0.72 0.2 320 / 0.5), transparent, oklch(0.65 0.25 300 / 0.5), transparent, oklch(0.74 0.16 165 / 0.4), transparent)",
          filter: "blur(80px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* gradient blobs */}
      <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-electric/20 blur-[120px] animate-float-blob" />
      <div
        className="absolute right-[-10rem] top-1/3 h-[32rem] w-[32rem] rounded-full bg-purple/20 blur-[140px] animate-float-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-[130px] animate-float-blob"
        style={{ animationDelay: "-12s" }}
      />

      {/* drifting motion orbs */}
      {[
        { size: 220, x: ["-10%", "30%", "-10%"], y: ["10%", "60%", "10%"], dur: 24, color: "bg-electric/10" },
        { size: 280, x: ["80%", "50%", "80%"], y: ["70%", "20%", "70%"], dur: 30, color: "bg-purple/10" },
        { size: 180, x: ["40%", "70%", "40%"], y: ["80%", "40%", "80%"], dur: 20, color: "bg-primary/10" },
      ].map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${o.color} blur-[90px]`}
          style={{ width: o.size, height: o.size }}
          animate={{ left: o.x, top: o.y }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* animated network lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.15]" preserveAspectRatio="none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.line
            key={i}
            x1={`${(i * 18) % 100}%`}
            y1="0%"
            x2={`${(i * 27 + 20) % 100}%`}
            y2="100%"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.18 320)" />
            <stop offset="100%" stopColor="oklch(0.65 0.25 300)" />
          </linearGradient>
        </defs>
      </svg>

      {/* floating particles */}
      {Array.from({ length: 26 }).map((_, i) => (
        <span
          key={i}
          className="absolute block rounded-full bg-electric/40 animate-float-badge"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            animationDelay: `${(i % 7) * 0.6}s`,
            animationDuration: `${5 + (i % 5)}s`,
            opacity: 0.4,
          }}
        />
      ))}

      {/* mouse-follow glow */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/10 blur-[100px] will-change-transform"
      />
    </div>
  );
}

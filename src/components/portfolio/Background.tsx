import { useEffect, useRef } from "react";

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

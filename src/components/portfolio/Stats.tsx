import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 2, suffix: "+", label: "Projects Built" },
  { value: 2, suffix: "+", label: "Certifications" },
  { value: 15, suffix: "+", label: "Technologies" },
  { text: "AI & ML", label: "Learning Focus" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16">
      <div className="grid grid-cols-2 gap-4 rounded-3xl glass-strong p-6 glow-border md:grid-cols-4 md:p-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-3xl font-extrabold text-gradient md:text-4xl">
              {s.text ? s.text : <Counter to={s.value!} suffix={s.suffix!} />}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

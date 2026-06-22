import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  ["About", "about"],
  ["Education", "education"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.6 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all ${
          scrolled ? "glass-strong shadow-glow" : "glass"
        }`}
      >
        <button onClick={() => go("hero")} className="text-lg font-bold tracking-tight">
          <span className="text-gradient">Rahul</span>
          <span className="text-foreground">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          className="hidden rounded-lg bg-gradient-to-r from-electric to-purple px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 md:block"
        >
          Let's Talk
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/5 md:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-5xl rounded-2xl glass-strong p-2 md:hidden"
        >
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="block w-full rounded-lg px-4 py-2.5 text-left text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

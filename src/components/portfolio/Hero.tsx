import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail, FolderGit2, MapPin, BadgeCheck } from "lucide-react";
import profileAsset from "@/assets/rahul-photo.jpg.asset.json";

const profile = profileAsset.url;

const roles = [
  "AI & ML Enthusiast",
  "Future AI Engineer",
  "Data-Driven Problem Solver",
  "Generative AI Explorer",
];

const badges = ["Python", "Machine Learning", "LLMs", "Generative AI", "Data Science", "Power BI"];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      const next = del
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1300);
      else if (del && next === "") {
        setDel(false);
        setI((p) => p + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="hero" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-28 pb-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-electric shadow-glow" />
            Available for AI / ML internships & roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl"
          >
            Hi, I'm <span className="text-gradient">Rahul Ranjan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-4 flex h-9 items-center text-xl font-semibold text-foreground/90 sm:text-2xl"
          >
            <span className="text-electric">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse-glow bg-electric" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            MCA (AI &amp; ML) student at Chandigarh University passionate about Artificial
            Intelligence, Machine Learning, Generative AI, and building impactful software
            solutions that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-purple px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <FolderGit2 className="h-4 w-4" /> View Projects
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.35 }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {badges.map((b, idx) => (
              <span
                key={b}
                className="animate-float-badge rounded-full glass px-3.5 py-1.5 text-xs font-medium text-foreground/80 glow-border"
                style={{ animationDelay: `${idx * 0.4}s` }}
              >
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-3xl glass-strong p-5 glow-border shadow-glow">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={profile}
                alt="Rahul Ranjan"
                width={768}
                height={896}
                className="h-72 w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <h3 className="flex items-center gap-1.5 text-lg font-bold">
                  Rahul Ranjan <BadgeCheck className="h-4 w-4 text-electric" />
                </h3>
                <p className="text-sm text-muted-foreground">AI &amp; ML Engineer</p>
              </div>
              <span className="rounded-full bg-electric/15 px-3 py-1 text-xs font-medium text-electric">
                Open to work
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-purple" /> Patna, Bihar, India
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 rounded-2xl glass p-3 text-center">
              {[
                ["2+", "Projects"],
                ["2+", "Certs"],
                ["15+", "Tools"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-lg font-bold text-gradient">{n}</div>
                  <div className="text-[11px] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-float-badge text-muted-foreground md:block"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}

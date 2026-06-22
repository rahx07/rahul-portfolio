import { Mic, UtensilsCrossed, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const projects = [
  {
    icon: Mic,
    title: "Jarvis AI Voice Assistant",
    description:
      "An intelligent voice-controlled AI assistant built using Python, Speech Recognition, Text-to-Speech, and Tkinter.",
    features: [
      "Voice commands",
      "Browser automation",
      "Music control",
      "Time/date assistant",
      "Multi-threaded GUI",
    ],
    tech: ["Python", "SpeechRecognition", "pyttsx3", "Tkinter"],
    stats: [
      ["5+", "Features"],
      ["Real-time", "Response"],
      ["GUI", "Multi-threaded"],
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Food Delivery Management System",
    description:
      "A full-stack food delivery platform built using Flask and MySQL with end-to-end order management.",
    features: ["User management", "Order tracking", "Database integration", "Delivery management"],
    tech: ["Flask", "MySQL", "Python", "HTML/CSS"],
    stats: [
      ["Full", "Stack"],
      ["CRUD", "Operations"],
      ["SQL", "Database"],
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've built"
        subtitle="Selected work that blends AI, automation, and clean engineering."
      />

      <div className="grid gap-7 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="group relative h-full overflow-hidden rounded-3xl glass-strong p-7 glow-border transition-transform hover:-translate-y-2 hover:shadow-glow">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />

              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-purple text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric" />
              </div>

              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {p.stats.map(([n, l]) => (
                  <div key={l} className="rounded-2xl glass p-3 text-center">
                    <div className="text-sm font-bold text-gradient">{n}</div>
                    <div className="text-[11px] text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>

              <ul className="mt-5 grid grid-cols-2 gap-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

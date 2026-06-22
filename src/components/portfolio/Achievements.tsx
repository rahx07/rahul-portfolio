import { Trophy, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Trophy,
    title: "Rising Star Award",
    org: "GyanDhan · 2025",
    text: "Recognized for outstanding performance and dedication.",
  },
  {
    icon: Rocket,
    title: "RealityX Bootcamp",
    org: "AI FEST · 2026",
    text: "Completed immersive XR and innovation-focused training.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-5xl px-5 py-24">
      <SectionHeading eyebrow="Achievements" title="Recognition & milestones" />

      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.1}>
            <div className="group relative overflow-hidden rounded-3xl glass-strong p-7 glow-border transition-transform hover:-translate-y-1.5">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-electric/10 to-purple/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-purple text-primary-foreground shadow-glow animate-pulse-glow">
                <a.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
              <p className="text-sm font-medium text-electric">{a.org}</p>
              <p className="mt-3 text-sm text-muted-foreground">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

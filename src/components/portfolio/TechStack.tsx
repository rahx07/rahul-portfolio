import { Code2, Globe, Cpu, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const groups = [
  { icon: Code2, title: "Programming", items: ["Python", "C++"] },
  { icon: Globe, title: "Web", items: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
  {
    icon: Cpu,
    title: "AI & Data",
    items: ["Machine Learning", "LLMs", "Vector Search", "Prompt Engineering", "Generative AI"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["MySQL", "Pandas", "NumPy", "Matplotlib", "Power BI", "Excel", "VS Code"],
  },
];

export function TechStack() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I build with"
        subtitle="A growing arsenal across AI, data, and full-stack development."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="group h-full rounded-3xl glass-strong p-6 glow-border transition-transform hover:-translate-y-1.5 hover:shadow-glow">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-purple text-primary-foreground transition-transform group-hover:scale-110">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl glass px-3.5 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-electric/15 hover:text-electric"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Code2, Globe, Cpu, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Skill = { name: string; level: number };

const groups: { icon: typeof Code2; title: string; items: Skill[] }[] = [
  {
    icon: Code2,
    title: "Programming",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 75 },
    ],
  },
  {
    icon: Globe,
    title: "Web",
    items: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 72 },
      { name: "Bootstrap", level: 78 },
    ],
  },
  {
    icon: Cpu,
    title: "AI & Data",
    items: [
      { name: "Machine Learning", level: 85 },
      { name: "LLMs", level: 80 },
      { name: "Generative AI", level: 82 },
      { name: "Prompt Engineering", level: 88 },
      { name: "Vector Search", level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "MySQL", level: 80 },
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 78 },
      { name: "Power BI", level: 82 },
      { name: "Excel", level: 90 },
    ],
  },
];

function SkillBar({ name, level, delay }: Skill & { delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground/85">{name}</span>
        <span className="font-semibold text-electric">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-electric to-purple shadow-glow"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I build with"
        subtitle="A growing arsenal across AI, data, and full-stack development — with my proficiency in each."
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
              <div className="mt-6 space-y-4">
                {g.items.map((item, idx) => (
                  <SkillBar key={item.name} {...item} delay={idx * 0.08} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

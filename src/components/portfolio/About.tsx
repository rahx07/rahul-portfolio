import { Brain, Layers, Sparkles, Code2, Database, Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const foundations = [
  { icon: Brain, label: "Machine Learning" },
  { icon: Layers, label: "Deep Learning" },
  { icon: Sparkles, label: "NLP" },
  { icon: Sparkles, label: "Generative AI" },
  { icon: Database, label: "Data Science" },
  { icon: Code2, label: "Software Development" },
];

const experience = [
  "Communication skills",
  "Client management",
  "Problem solving",
  "Business understanding",
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="About"
        title="Engineering intelligence into products"
        subtitle="Turning curiosity about AI into systems that solve real problems."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="rounded-3xl glass-strong p-7 glow-border">
          <h3 className="text-xl font-bold">Who I am</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I'm currently pursuing my{" "}
            <span className="text-foreground">Master of Computer Applications in Artificial
            Intelligence &amp; Machine Learning</span>{" "}
            at Chandigarh University. I love translating cutting-edge AI research into clean,
            usable software — from intelligent assistants to data-driven platforms.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {foundations.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 0.05} className="flex items-center gap-3 rounded-2xl glass p-3 transition-colors hover:bg-white/10">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-purple/20 text-electric">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl glass-strong p-7 glow-border">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-purple text-primary-foreground">
              <Briefcase className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-bold">Experience at GyanDhan</h3>
              <p className="text-sm text-muted-foreground">Where business met technology</p>
            </div>
          </div>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            My time at GyanDhan sharpened skills that make me a stronger engineer — the ability
            to understand stakeholders, communicate clearly, and ship solutions that align with
            real business goals.
          </p>

          <div className="mt-6 space-y-3">
            {experience.map((item, i) => (
              <Reveal key={item} delay={i * 0.06} className="relative rounded-2xl glass p-4">
                <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-electric to-purple" />
                <p className="pl-3 text-sm font-medium">{item}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

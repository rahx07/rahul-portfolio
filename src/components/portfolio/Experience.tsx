import { Briefcase, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const achievements = [
  "Managed 40–60 daily education loan leads",
  "Maintained CRM pipelines",
  "Improved tracking using Google Sheets",
  "Built strong customer relationships",
  "Supported successful loan processing",
];

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="Experience" title="Professional journey" />

      <div className="relative pl-8">
        <span className="absolute left-2 top-3 h-full w-px bg-gradient-to-b from-electric via-purple to-transparent" />
        <Reveal>
          <span className="absolute left-2 top-3 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-electric to-purple text-primary-foreground shadow-glow">
            <Briefcase className="h-4 w-4" />
          </span>

          <div className="rounded-3xl glass-strong p-7 glow-border">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold">Pre-Sales Executive</h3>
                <p className="text-sm font-medium text-electric">GyanDhan</p>
              </div>
              <span className="rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
                December 2024 – June 2025
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {achievements.map((a, i) => (
                <Reveal key={a} delay={i * 0.06} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric/15 text-electric">
                    <Check className="h-3 w-3" />
                  </span>
                  <p className="text-sm text-muted-foreground">{a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

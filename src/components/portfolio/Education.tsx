import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const education = [
  {
    school: "Chandigarh University",
    degree: "Master of Computer Applications (AI & ML)",
    period: "2025 – 2027",
    detail: "Relevant Coursework",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Artificial Intelligence",
      "NLP",
      "Generative AI",
    ],
  },
  {
    school: "Indian Institute of Business Management",
    degree: "Bachelor of Computer Applications",
    period: "2021 – 2024",
    detail: "CGPA",
    tags: ["7.84 / 10"],
  },
];

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-5xl px-5 py-24">
      <SectionHeading eyebrow="Education" title="Academic foundation" />

      <div className="relative">
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-electric via-purple to-transparent md:left-1/2" />

        <div className="space-y-10">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.1}>
              <div className={`relative md:flex ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <span className="absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-electric to-purple text-primary-foreground shadow-glow md:left-1/2">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="md:w-1/2" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="rounded-3xl glass-strong p-6 glow-border transition-transform hover:-translate-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-electric">
                      {e.period}
                    </span>
                    <h3 className="mt-2 text-lg font-bold">{e.school}</h3>
                    <p className="text-sm text-muted-foreground">{e.degree}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {e.detail}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <span key={t} className="rounded-full glass px-3 py-1 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

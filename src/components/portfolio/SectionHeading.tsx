import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-block rounded-full glass px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

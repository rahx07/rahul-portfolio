import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const details = [
  { icon: Mail, label: "Email", value: "rahuldj2003@gmail.com", href: "mailto:rahuldj2003@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7903986178", href: "tel:+917903986178" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rahul-ranjan07", href: "https://www.linkedin.com/in/rahul-ranjan07" },
  { icon: MapPin, label: "Location", value: "Patna, Bihar, India" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rahul-ranjan07" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! Rahul will get back to you soon.");
    }, 900);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something intelligent"
        subtitle="Open to internships, full-time roles, and collaborations in AI & ML."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4">
          {details.map((d) => {
            const Inner = (
              <div className="flex items-center gap-4 rounded-2xl glass-strong p-5 glow-border transition-transform hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-purple text-primary-foreground">
                  <d.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{d.label}</p>
                  <p className="font-medium">{d.value}</p>
                </div>
              </div>
            );
            return d.href ? (
              <a key={d.label} href={d.href} className="block">
                {Inner}
              </a>
            ) : (
              <div key={d.label}>{Inner}</div>
            );
          })}

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl glass p-4 text-sm font-medium transition-colors hover:bg-electric/15 hover:text-electric"
              >
                <s.icon className="h-5 w-5" /> {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-3xl glass-strong p-7 glow-border">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="What's this about?" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about the opportunity..."
                className="w-full resize-none rounded-xl border border-input bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-electric focus:ring-2 focus:ring-electric/30"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-purple px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              <Send className="h-4 w-4" /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-electric focus:ring-2 focus:ring-electric/30"
      />
    </div>
  );
}

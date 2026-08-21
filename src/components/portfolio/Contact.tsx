import { useState, type FormEvent, type ChangeEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const details = [
  { icon: Mail, label: "Email", value: "rahuldj2003@gmail.com", href: "mailto:rahuldj2003@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7903986178", href: "tel:+917903986178" },
  { icon: MapPin, label: "Location", value: "Patna, Bihar, India" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rahul-ranjan07" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const FORMSPREE_FORM_ID =
  import.meta.env.VITE_FORMSPREE_FORM_ID || "YOUR_FORMSPREE_FORM_ID";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [values, setValues] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const update = (field: keyof ContactForm) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const parse = contactSchema.safeParse(values);
    if (!parse.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      parse.error.errors.forEach((err) => {
        const key = err.path[0] as keyof ContactForm;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    if (FORMSPREE_FORM_ID === "YOUR_FORMSPREE_FORM_ID") {
      toast.error("Formspree is not configured", {
        description: "Set VITE_FORMSPREE_FORM_ID in your environment variables.",
      });
      return;
    }

    setSending(true);
    try {
      const formData = new FormData();
      formData.append("name", parse.data.name);
      formData.append("email", parse.data.email);
      formData.append("subject", parse.data.subject);
      formData.append("message", parse.data.message);

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setValues({ name: "", email: "", subject: "", message: "" });
        toast.success("Message sent! Rahul will get back to you soon.");
      } else {
        const data = await response.json().catch(() => null);
        toast.error(data?.error || "Something went wrong. Please try again later.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
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
          <form onSubmit={submit} className="rounded-3xl glass-strong p-7 glow-border" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                placeholder="Your name"
                value={values.name}
                onChange={update("name")}
                error={errors.name}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={values.email}
                onChange={update("email")}
                error={errors.email}
                required
              />
            </div>
            <div className="mt-4">
              <Field
                label="Subject"
                name="subject"
                placeholder="What's this about?"
                value={values.subject}
                onChange={update("subject")}
                error={errors.subject}
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the opportunity..."
                value={values.message}
                onChange={update("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-none rounded-xl border border-input bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-electric focus:ring-2 focus:ring-electric/30"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
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
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border border-input bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-electric focus:ring-2 focus:ring-electric/30"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

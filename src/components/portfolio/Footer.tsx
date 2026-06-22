import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <button
          onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
          className="text-xl font-bold"
        >
          <span className="text-gradient">Rahul Ranjan</span>
        </button>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          Designed &amp; Developed by Rahul Ranjan
          <Heart className="h-3.5 w-3.5 animate-pulse-glow text-electric" />
        </p>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} · Crafted with AI &amp; passion
        </p>
      </div>
    </footer>
  );
}

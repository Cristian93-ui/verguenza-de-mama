import { Instagram, Youtube, Music2 } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[oklch(0.16_0.003_60)] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-display text-3xl tracking-wider text-gradient-gold sm:text-4xl">
            ¿Ya le dijiste a tu mamá que escuchas esto?
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Music2, label: "TikTok" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground/70 transition hover:border-accent hover:text-accent-light hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <Logo size={36} />
              <span className="font-display text-sm tracking-wider text-foreground/60">
                La Vergüenza de Mamá
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 La Vergüenza de Mamá · laverguenzademama.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

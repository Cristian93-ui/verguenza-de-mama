import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  emoji: string;
  role: string;
  description: string;
  gradient: string;
  className?: string;
}

export function CharacterCard({ name, emoji, role, description, gradient, className }: Props) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-soft transition-shadow hover:shadow-glow",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 transition-opacity group-hover:opacity-80"
        style={{ background: gradient }}
      />
      <div className="relative">
        <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-background/40 text-6xl ring-2 ring-accent/30 backdrop-blur">
          {emoji}
        </div>
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
          {role}
        </p>
        <h3 className="mb-3 font-display text-4xl tracking-wide text-foreground">{name}</h3>
        <p className="text-sm leading-relaxed text-foreground/80">{description}</p>
      </div>
    </motion.article>
  );
}

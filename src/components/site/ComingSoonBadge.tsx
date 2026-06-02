import { cn } from "@/lib/utils";

export function ComingSoonBadge({ className, label = "Próximamente" }: { className?: string; label?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-light ring-1 ring-accent/40 animate-pulse-glow",
        className,
      )}
    >
      <span className="text-base leading-none">🎙️</span>
      {label}
    </span>
  );
}

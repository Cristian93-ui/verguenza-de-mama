import { cn } from "@/lib/utils";

export function PawPrints({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={cn("text-accent/10", className)}
      fill="currentColor"
    >
      <ellipse cx="50" cy="65" rx="18" ry="22" />
      <ellipse cx="22" cy="38" rx="9" ry="12" />
      <ellipse cx="42" cy="22" rx="9" ry="12" />
      <ellipse cx="62" cy="22" rx="9" ry="12" />
      <ellipse cx="82" cy="38" rx="9" ry="12" />
    </svg>
  );
}

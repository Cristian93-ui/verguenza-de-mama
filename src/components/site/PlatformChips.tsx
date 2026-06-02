import { Lock } from "lucide-react";

const platforms = [
  { name: "Spotify", emoji: "🎧" },
  { name: "Apple Podcasts", emoji: "🍎" },
  { name: "YouTube", emoji: "▶️" },
];

export function PlatformChips() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {platforms.map((p) => (
        <div
          key={p.name}
          className="group relative flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-5 py-2.5 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-accent/50 hover:text-foreground"
        >
          <span className="text-lg">{p.emoji}</span>
          <span>{p.name}</span>
          <Lock className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
      ))}
    </div>
  );
}

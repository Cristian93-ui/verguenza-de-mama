import logoAsset from "@/assets/logo.jpeg";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  glow?: boolean;
  className?: string;
}

export function Logo({ size = 48, glow = false, className }: LogoProps) {
  return (
    <div
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
        />
      )}
      <img
        src={logoAsset}
        alt="La Vergüenza de Mamá — Entre Acordes y Partidas"
        width={size}
        height={size}
        className="h-full w-full rounded-full object-cover ring-1 ring-border/60"
      />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/site/SectionReveal";
import { ComingSoonBadge } from "@/components/site/ComingSoonBadge";
import { NotifyMeModal } from "@/components/site/NotifyMeModal";
import { PlatformChips } from "@/components/site/PlatformChips";
import { Button } from "@/components/ui/button";
import { Mic, Lock } from "lucide-react";
import logoAsset from "@/assets/logo.jpeg.asset.json";

export const Route = createFileRoute("/episodios")({
  head: () => ({
    meta: [
      { title: "Episodios — La Vergüenza de Mamá" },
      {
        name: "description",
        content:
          "Los primeros episodios del podcast llegan muy pronto. Suscríbete para ser el primero en escucharlos.",
      },
      { property: "og:title", content: "Episodios — La Vergüenza de Mamá" },
      { property: "og:description", content: "Próximamente: los primeros episodios." },
      { property: "og:url", content: "/episodios" },
      { property: "og:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/episodios" }],
  }),
  component: EpisodiosPage,
});

function EpisodiosPage() {
  return (
    <>
      <section className="bg-gradient-hero grain py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <SectionReveal>
            <h1 className="font-display text-6xl tracking-wide sm:text-7xl">
              <span className="text-gradient-gold">Episodios</span>
            </h1>
            <div className="mt-6 flex justify-center">
              <ComingSoonBadge />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionReveal>
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-surface ring-1 ring-border shadow-glow">
              <Mic className="h-20 w-20 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="mt-10 font-display text-4xl tracking-wide sm:text-5xl">
              Los primeros episodios llegan <span className="text-gradient-gold">muy pronto</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/70">
              Suscríbete para ser el primero en escucharlos. Sin spam, solo el aviso cuando salgamos
              al aire.
            </p>
            <div className="mt-8">
              <NotifyMeModal
                trigger={
                  <Button size="lg" className="bg-gradient-accent text-background font-bold h-12 px-7 text-base hover:opacity-90 shadow-glow">
                    Avísame cuando salga 🐾
                  </Button>
                }
              />
            </div>

            <div className="mt-12 grid grid-cols-4 gap-3 sm:gap-6">
              {["DD", "HH", "MM", "SS"].map((u) => (
                <div key={u} className="rounded-xl border border-border bg-surface p-4">
                  <div className="font-display text-3xl tracking-wider text-gradient-gold sm:text-5xl">
                    --
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
                    {u}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionReveal className="text-center">
            <h2 className="font-display text-4xl tracking-wide sm:text-5xl">
              Adelanto del <span className="text-gradient-gold">catálogo</span>
            </h2>
            <p className="mt-3 text-foreground/70">Así se verán los episodios cuando estrenemos.</p>
          </SectionReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((n, i) => (
              <SectionReveal key={n} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6">
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-foreground/70">
                      <Lock className="h-7 w-7" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-light">
                        Próximamente
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl tracking-wider text-accent">
                        EP {String(n).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-muted-foreground">~ 45 min</span>
                    </div>
                    <h3 className="font-display text-2xl tracking-wide text-foreground">
                      Título del episodio
                    </h3>
                    <p className="text-sm text-foreground/60">
                      Descripción placeholder del episodio que pronto verás aquí completa.
                    </p>
                    <div className="flex gap-2 pt-2 text-lg">
                      <span>🎧</span>
                      <span>🍎</span>
                      <span>▶️</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <SectionReveal className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl tracking-wide sm:text-4xl">
            Cuando salgamos, nos encontrarás aquí:
          </h2>
          <div className="mt-8">
            <PlatformChips />
          </div>
        </SectionReveal>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/site/SectionReveal";
import { NotifyMeModal } from "@/components/site/NotifyMeModal";
import { Button } from "@/components/ui/button";
import { Shirt, ShoppingBag, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import logoAsset from "@/assets/logo.jpeg.asset.json";

export const Route = createFileRoute("/merch")({
  head: () => ({
    meta: [
      { title: "Merch — La Vergüenza de Mamá" },
      {
        name: "description",
        content:
          "Próximamente los productos más vergonzosos del mercado. Sé el primero en enterarte cuando salga el merch.",
      },
      { property: "og:title", content: "Merch — La Vergüenza de Mamá" },
      { property: "og:description", content: "Tu mamá va a odiar que uses esto." },
      { property: "og:url", content: "/merch" },
      { property: "og:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/merch" }],
  }),
  component: MerchPage,
});

const categorias = ["Ropa", "Accesorios", "Coleccionables"];
const productos = Array.from({ length: 6 });

function MerchPage() {
  return (
    <>
      <section className="bg-gradient-hero grain relative overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionReveal className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-light ring-1 ring-accent/40">
              <Sparkles className="h-3.5 w-3.5" /> Diseño Futuro 🐾
            </div>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] tracking-wide sm:text-8xl">
              Tu mamá <span className="text-gradient-gold">va a odiar</span>
              <br />
              que uses esto
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/75">
              Estamos trabajando en los productos más chingones para los fans del podcast. Sé el
              primero en enterarte.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15} className="mt-14 flex flex-col items-center">
            {/* Censored hoodie silhouette */}
            <div className="relative w-full max-w-md">
              <div className="relative aspect-square rounded-3xl border border-border bg-surface p-12">
                <div className="absolute inset-0 bg-gradient-accent opacity-5 rounded-3xl" />
                <Shirt
                  className="relative h-full w-full text-foreground/80"
                  strokeWidth={1}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rotate-[-8deg] bg-accent px-6 py-3 font-display text-4xl tracking-widest text-background shadow-glow">
                    CENSORED
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <NotifyMeModal
                title="Avísame cuando haya merch"
                trigger={
                  <Button size="lg" className="bg-gradient-accent text-background font-bold h-12 px-7 text-base hover:opacity-90 shadow-glow">
                    Avísame cuando haya merch 🛍️
                  </Button>
                }
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionReveal className="text-center">
            <h2 className="font-display text-4xl tracking-wide sm:text-5xl">
              Lo que <span className="text-gradient-gold">se viene</span>
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categorias.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </SectionReveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productos.map((_, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
                >
                  <div className="relative aspect-square overflow-hidden bg-[oklch(0.2_0.005_60)]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShoppingBag className="h-20 w-20 text-foreground/15" strokeWidth={1} />
                    </div>
                    <div className="absolute right-3 top-3 rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background">
                      Coming Soon
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="font-display text-3xl tracking-widest text-gradient-gold">
                        Próximamente
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl tracking-wide text-foreground/70">???</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm font-bold text-accent-light">$ ???</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        {categorias[i % categorias.length]}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Logo } from "@/components/site/Logo";
import { ComingSoonBadge } from "@/components/site/ComingSoonBadge";
import { NotifyMeModal } from "@/components/site/NotifyMeModal";
import { PlatformChips } from "@/components/site/PlatformChips";
import { CharacterCard } from "@/components/site/CharacterCard";
import { SectionReveal } from "@/components/site/SectionReveal";
import { PawPrints } from "@/components/site/PawPrints";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Vergüenza de Mamá — Entre Acordes y Partidas" },
      {
        name: "description",
        content:
          "El podcast donde Michito y Ch-peanuts hablan de música, juegos de mesa y todo lo que haría llorar a tu mamá. Próximamente desde CDMX.",
      },
      { property: "og:title", content: "La Vergüenza de Mamá — Entre Acordes y Partidas" },
      {
        property: "og:description",
        content: "Música, juegos de mesa y conversaciones sin filtro. Próximamente.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-hero grain">
        <PawPrints className="absolute -left-10 top-24 h-40 w-40 -rotate-12" />
        <PawPrints className="absolute -right-10 bottom-24 h-48 w-48 rotate-12" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo size={220} glow className="sm:!w-[260px] sm:!h-[260px]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 font-display text-5xl leading-[0.95] tracking-wide text-foreground sm:text-7xl lg:text-8xl"
          >
            La Vergüenza
            <br />
            <span className="text-gradient-gold">de Mamá</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 font-display text-2xl tracking-[0.2em] text-gold sm:text-3xl"
          >
            Entre Acordes y Partidas
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-2xl text-base text-foreground/75 sm:text-lg"
          >
            El podcast donde Michito y Ch-peanuts hablan de música, juegos de mesa y todo lo que
            haría llorar a tu mamá.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8"
          >
            <ComingSoonBadge />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <NotifyMeModal
              trigger={
                <Button
                  size="lg"
                  className="bg-gradient-accent text-background font-bold shadow-glow hover:opacity-90 h-12 px-7 text-base"
                >
                  Notify Me 🐾
                </Button>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-transparent text-foreground hover:bg-surface hover:text-accent-light h-12 px-7 text-base"
            >
              <Play className="h-4 w-4" /> Ver el Trailer
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="border-y border-border bg-surface/40 py-16">
        <SectionReveal className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl">
            Próximamente en tus plataformas favoritas
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Activa las notificaciones para no perderte el estreno.
          </p>
          <div className="mt-8">
            <PlatformChips />
          </div>
        </SectionReveal>
      </section>

      {/* CHARACTERS */}
      <section className="relative py-20 sm:py-28">
        <PawPrints className="absolute right-4 top-10 h-32 w-32 -rotate-6 text-accent/5" />
        <div className="mx-auto max-w-6xl px-4">
          <SectionReveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              El equipo
            </p>
            <h2 className="mt-2 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Conoce al <span className="text-gradient-gold">equipo</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
              Un gato persa con opiniones fuertes y un beagle que siempre tiene un juego bajo la
              manga. ¿Qué podría salir mal?
            </p>
          </SectionReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <SectionReveal delay={0.05}>
              <CharacterCard
                name="Michito"
                emoji="🐈‍⬛"
                role="Host & Gato Gruñón"
                description="El gato persa que opina de todo y no le da pena nada. Experto en música y en ignorarte."
                gradient="linear-gradient(135deg, oklch(0.22 0.005 60) 0%, oklch(0.28 0.01 60) 100%)"
              />
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <CharacterCard
                name="Ch-peanuts"
                emoji="🐶"
                role="Co-host & Beagle Caótico"
                description="El beagle entusiasta que siempre tiene un juego de mesa bajo la manga. Spoiler: siempre hace trampa."
                gradient="linear-gradient(135deg, oklch(0.32 0.04 50) 0%, oklch(0.25 0.02 55) 100%)"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* VIBE */}
      <section className="relative overflow-hidden border-t border-border bg-surface/30 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <SectionReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              El vibe
            </p>
            <h2 className="mt-2 font-display text-5xl leading-none tracking-wide text-foreground sm:text-6xl">
              ¿De qué va <span className="text-gradient-gold">esto?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              La Vergüenza de Mamá es el podcast donde música, juegos de mesa y conversaciones sin
              filtro se mezclan para darte el mejor rato de tu semana.
            </p>
            <p className="mt-3 text-foreground/70">
              Basado en CDMX, hecho para todos los que entienden que la mejor charla pasa entre un
              acorde y una partida.
            </p>
            <Link
              to="/podcast"
              className="mt-8 inline-flex items-center gap-2 font-bold text-accent-light hover:text-gold transition group"
            >
              Conocer más
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface p-8">
              <div className="absolute inset-0 bg-gradient-accent opacity-10" />
              <div className="relative flex h-full flex-col items-center justify-center gap-6">
                <Logo size={180} glow />
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { emoji: "🎵", label: "Música" },
                    { emoji: "🎲", label: "Juegos" },
                    { emoji: "🎙️", label: "Sin filtro" },
                  ].map((i) => (
                    <div key={i.label} className="flex flex-col items-center gap-1">
                      <span className="text-3xl">{i.emoji}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                        {i.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

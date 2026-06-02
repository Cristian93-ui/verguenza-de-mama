import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";
import { SectionReveal } from "@/components/site/SectionReveal";
import { CharacterCard } from "@/components/site/CharacterCard";
import { ComingSoonBadge } from "@/components/site/ComingSoonBadge";
import logoAsset from "@/assets/logo.jpeg.asset.json";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "El Podcast — La Vergüenza de Mamá" },
      {
        name: "description",
        content:
          "Conoce el podcast: música, juegos de mesa y conversaciones sin filtros con Michito y Ch-peanuts desde CDMX.",
      },
      { property: "og:title", content: "El Podcast — La Vergüenza de Mamá" },
      { property: "og:description", content: "Acordes, partidas y sin filtros." },
      { property: "og:url", content: "/podcast" },
      { property: "og:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/podcast" }],
  }),
  component: PodcastPage,
});

const formato = [
  {
    icon: "🎵",
    title: "Acordes",
    desc: "Hablamos de música, bandas, canciones y todo lo que suena. De clásicos a descubrimientos recientes.",
  },
  {
    icon: "🎲",
    title: "Partidas",
    desc: "Reseñas y batallas de juegos de mesa. Spoilers: alguien siempre hace trampa.",
  },
  {
    icon: "🎙️",
    title: "Sin Filtros",
    desc: "Conversaciones reales, opiniones directas y mucha risa. El podcast que tu mamá preferiría que no existiera.",
  },
];

function PodcastPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-hero grain relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionReveal>
            <h1 className="font-display text-6xl tracking-wide text-foreground sm:text-7xl">
              El <span className="text-gradient-gold relative">
                Podcast
                <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-accent" />
              </span>
            </h1>
            <p className="mt-6 font-display text-2xl tracking-[0.2em] text-gold sm:text-3xl">
              Entre Acordes y Partidas
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <SectionReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Historia</p>
            <h2 className="mt-2 font-display text-5xl leading-none tracking-wide sm:text-6xl">
              ¿Cómo <span className="text-gradient-gold">nació esto?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Empezó como una excusa para juntarse a hablar de las dos cosas que más nos importan:
              la música que nos forma y los juegos que nos vuelven competitivos hasta lo absurdo.
            </p>
            <p className="mt-4 text-foreground/70">
              Lo que iba a ser una charla entre amigos se convirtió en un proyecto: capturar esas
              conversaciones que pasarían perdidas y compartirlas con quien sienta lo mismo.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-soft">
              <div className="absolute inset-0 bg-gradient-accent opacity-5" />
              <div className="relative space-y-6">
                <div className="flex justify-center">
                  <Logo size={140} glow />
                </div>
                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground/80">
                    <span>🎙️</span> Próximamente
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground/80">
                    <span>📍</span> Ciudad de México
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground/80">
                    <span>🐾</span> Música + Juegos + Sin Filtros
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FORMATO */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionReveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Formato</p>
            <h2 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">
              Tres <span className="text-gradient-gold">ingredientes</span>
            </h2>
          </SectionReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {formato.map((f, i) => (
              <SectionReveal key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border-l-4 border-l-accent border-y border-r border-border bg-surface p-7 transition hover:shadow-glow">
                  <div className="text-4xl">{f.icon}</div>
                  <h3 className="mt-4 font-display text-3xl tracking-wide text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{f.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionReveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Los hosts</p>
            <h2 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">
              Quiénes están <span className="text-gradient-gold">detrás del micro</span>
            </h2>
          </SectionReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <SectionReveal>
              <CharacterCard
                name="Michito"
                emoji="🐈‍⬛"
                role="Host & Gato Gruñón"
                description="Persa de pelo largo color carbón. Especialista en cortar canciones a la mitad para opinar. Sus playlists son una declaración de principios."
                gradient="linear-gradient(135deg, oklch(0.22 0.005 60), oklch(0.28 0.01 60))"
              />
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <CharacterCard
                name="Ch-peanuts"
                emoji="🐶"
                role="Co-host & Beagle Caótico"
                description="Beagle café y blanco con una colección de juegos de mesa que ya no cabe en la sala. Estrategia: gritar más fuerte que el resto."
                gradient="linear-gradient(135deg, oklch(0.32 0.04 50), oklch(0.25 0.02 55))"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="relative overflow-hidden border-t border-border bg-gradient-hero py-24 sm:py-32 grain">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionReveal>
            <ComingSoonBadge label="Nuestra misión" />
            <blockquote className="mt-8 font-display text-4xl leading-[1.1] tracking-wide text-foreground sm:text-6xl">
              <span className="text-gradient-gold">"</span>
              Hacemos el podcast que nuestras mamás preferirían que no existiera.
              <span className="text-gradient-gold">"</span>
            </blockquote>
            <p className="mt-8 max-w-2xl mx-auto text-foreground/70">
              Porque las mejores conversaciones siempre son las que no deberíamos estar teniendo.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

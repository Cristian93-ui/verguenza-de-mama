import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionReveal } from "@/components/site/SectionReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Instagram, Youtube, Music2 } from "lucide-react";
import logoAsset from "@/assets/logo.jpeg.asset.json";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — La Vergüenza de Mamá" },
      {
        name: "description",
        content:
          "¿Quieres colaborar, mandarnos tu vergüenza o solo saludar? Escríbenos.",
      },
      { property: "og:title", content: "Contacto — La Vergüenza de Mamá" },
      { property: "og:description", content: "Colaboraciones, prensa y saludos." },
      { property: "og:url", content: "/contacto" },
      { property: "og:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [asunto, setAsunto] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
        {/* Info */}
        <SectionReveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Contacto</p>
          <h1 className="mt-2 font-display text-6xl tracking-wide sm:text-7xl">
            Dinos <span className="text-gradient-gold">algo</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-foreground/75">
            ¿Quieres colaborar, mandarnos tu vergüenza o solo saludar? Aquí estamos.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:hola@laverguenzademama.com"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition hover:border-accent hover:shadow-glow"
            >
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="text-sm font-semibold text-foreground">hola@laverguenzademama.com</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ubicación</div>
                <div className="text-sm font-semibold text-foreground">Ciudad de México</div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Síguenos
            </p>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Music2, label: "TikTok" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="group flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:border-accent hover:text-accent-light"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Form */}
        <SectionReveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-soft sm:p-10">
            <div className="absolute inset-0 bg-gradient-accent opacity-[0.03]" />
            <form onSubmit={onSubmit} className="relative space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                  Nombre
                </Label>
                <Input
                  id="nombre"
                  required
                  placeholder="Tu nombre"
                  className="bg-background border-border h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="bg-background border-border h-11"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                  Asunto
                </Label>
                <Select value={asunto} onValueChange={setAsunto}>
                  <SelectTrigger className="bg-background border-border h-11">
                    <SelectValue placeholder="¿De qué quieres hablar?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="colaboracion">Colaboración</SelectItem>
                    <SelectItem value="prensa">Prensa</SelectItem>
                    <SelectItem value="merch">Merch</SelectItem>
                    <SelectItem value="saludo">Solo quiero saludar</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensaje" className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                  Mensaje
                </Label>
                <Textarea
                  id="mensaje"
                  required
                  rows={5}
                  placeholder="Cuéntanos…"
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-accent text-background font-bold h-12 text-base hover:opacity-90"
              >
                Mandar mensaje 🐾
              </Button>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg bg-accent/15 px-4 py-3 text-center text-sm font-semibold text-accent-light ring-1 ring-accent/40"
                  >
                    ¡Recibido! Te respondemos pronto 🐾
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { NotifyMeModal } from "./NotifyMeModal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/podcast", label: "El Podcast" },
  { to: "/episodios", label: "Episodios" },
  { to: "/merch", label: "Merch" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo size={44} />
          <span className="hidden font-display text-xl tracking-wider text-foreground transition-colors group-hover:text-accent-light sm:inline">
            La Vergüenza de Mamá
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent-light" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-semibold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <NotifyMeModal
            trigger={
              <Button className="ml-3 bg-gradient-accent text-background font-bold hover:opacity-90">
                Suscríbete
              </Button>
            }
          />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-foreground"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-accent-light bg-accent/10" }}
                  inactiveProps={{ className: "text-foreground/80" }}
                  className="rounded-md px-3 py-3 text-base font-semibold"
                >
                  {l.label}
                </Link>
              ))}
              <NotifyMeModal
                trigger={
                  <Button className="mt-2 w-full bg-gradient-accent text-background font-bold">
                    Suscríbete
                  </Button>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

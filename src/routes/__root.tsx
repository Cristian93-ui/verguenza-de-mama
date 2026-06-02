import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import logoUrl from "@/assets/logo.jpeg";

const OG_IMAGE = "https://laverguenzademama.com/og-image.jpeg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 pt-20">
      <Navbar />
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-gold">404</h1>
        <h2 className="mt-2 font-display text-3xl tracking-wide text-foreground">
          Esta página se la llevó Michito
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          La página que buscas no existe. Quizá Ch-peanuts se la comió.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-accent px-5 py-2.5 text-sm font-bold text-background transition hover:opacity-90"
          >
            Regresar a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl tracking-wide text-foreground">
          Algo salió mal
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Intenta de nuevo o regresa al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-gradient-accent px-4 py-2 text-sm font-bold text-background"
          >
            Intentar otra vez
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground hover:border-accent"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "La Vergüenza de Mamá — Entre Acordes y Partidas" },
      {
        name: "description",
        content:
          "El podcast donde Michito y Ch-peanuts hablan de música, juegos de mesa y todo lo que haría llorar a tu mamá. Próximamente desde CDMX.",
      },
      { name: "author", content: "La Vergüenza de Mamá" },
      { name: "theme-color", content: "#1C1C1E" },
      { property: "og:site_name", content: "La Vergüenza de Mamá" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:title", content: "La Vergüenza de Mamá — Entre Acordes y Partidas" },
      { name: "twitter:title", content: "La Vergüenza de Mamá — Entre Acordes y Partidas" },
      { property: "og:description", content: "El podcast donde Michito y Ch-peanuts hablan de música, juegos de mesa y todo lo que haría llorar a tu mamá." },
      { name: "twitter:description", content: "El podcast donde Michito y Ch-peanuts hablan de música, juegos de mesa y todo lo que haría llorar a tu mamá." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: logoUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

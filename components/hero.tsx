"use client";
import { M, useFadeUp, riseIn, hoverCard } from "./motion-helpers";
import Link from "next/link";

export function Hero() {
  const title = useFadeUp(0);
  const subtitle = useFadeUp(0.05);
  const ctas = useFadeUp(0.1);

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative overflow-hidden"
    >
      {/* Fondo sólido (sin degradados) */}
      <div aria-hidden className="absolute inset-0 bg-background" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          <div>
            <M.div {...title}>
              <h1
                id="home-title"
                className="text-balance text-4xl md:text-6xl font-semibold tracking-tight"
              >
                POINT — Todos tus servicios esenciales, a un toque de distancia.
              </h1>
            </M.div>
            <M.p
              {...subtitle}
              className="mt-4 md:mt-6 text-pretty text-base md:text-lg text-muted-foreground md:max-w-prose"
            >
              Desde entregas hasta asistencia en carretera, nuestros proveedores
              verificados responden rápidamente con precios transparentes y
              pagos seguros. Diseñado para ofrecer fiabilidad en toda Venezuela.
            </M.p>

            <M.div {...ctas} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/80 disabled:opacity-60"
              >
                Descargar App
              </Link>
              {/* <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/80"
              >
                Conviértete en Proveedor
              </Link> */}
            </M.div>

            {/* Indicadores de confianza */}
            <M.ul
              {...riseIn(0.12)}
              className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-muted-foreground"
            >
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-full bg-primary"
                />
                Soporte 24/7
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-full bg-accent"
                />
                Pagos seguros
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-full bg-secondary"
                />
                Proveedores verificados
              </li>
            </M.ul>
          </div>

          {/* Columna visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <M.figure
                {...hoverCard}
                className="rounded-xl border border-border/50 bg-card-gradient card-sheen p-3 shadow-sm"
              >
                <img
                  src="/delivery-driver-on-motorbike.jpg"
                  alt="Entregas rápidas"
                  className="h-40 w-full rounded-md object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-sm text-foreground">
                  Entregas ultrarrápidas con actualizaciones en tiempo real.
                </figcaption>
              </M.figure>

              <M.figure
                {...hoverCard}
                className="rounded-xl border border-border/50 bg-card-gradient-alt card-sheen p-3 shadow-sm"
              >
                <img
                  src="/roadside-assistance-tow-truck.png"
                  alt="Asistencia en carretera"
                  className="h-40 w-full rounded-md object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-sm text-foreground">
                  Asistencia en carretera 24/7 de socios confiables.
                </figcaption>
              </M.figure>

              <M.figure
                {...hoverCard}
                className="rounded-xl border border-border/50 bg-card-gradient card-sheen p-3 shadow-sm col-span-2"
              >
                <img
                  src="/mechanic-workshop-tools.jpg"
                  alt="Red de mecánicos"
                  className="h-44 w-full rounded-md object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-sm text-foreground">
                  Una red de mecánicos y talleres en toda la ciudad.
                </figcaption>
              </M.figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

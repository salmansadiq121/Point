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
      {/* Solid background only (no gradients) */}
      <div aria-hidden className="absolute inset-0 bg-background" />

      <div className="relative mx-auto max-w-7xl px-6  py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          <div>
            <M.div {...title}>
              <h1
                id="home-title"
                className="text-balance text-4xl md:text-6xl font-semibold tracking-tight"
              >
                POINT — All your essential services, one tap away.
              </h1>
            </M.div>
            <M.p
              {...subtitle}
              className="mt-4 md:mt-6 text-pretty text-base md:text-lg text-muted-foreground md:max-w-prose"
            >
              From deliveries to roadside assistance, our vetted providers
              respond fast with transparent pricing and secure payments. Built
              for reliability across Venezuela.
            </M.p>

            <M.div {...ctas} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/80 disabled:opacity-60"
              >
                Download App
              </Link>
              {/* <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/80"
              >
                Become a Provider
              </Link> */}
            </M.div>

            {/* Trust indicators */}
            <M.ul
              {...riseIn(0.12)}
              className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-muted-foreground"
            >
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-full bg-primary"
                />
                24/7 Support
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-full bg-accent"
                />
                Secure payments
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-full bg-secondary"
                />
                Vetted providers
              </li>
            </M.ul>
          </div>

          {/* Visual column */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <M.figure
                {...hoverCard}
                className="rounded-xl border border-border/50 bg-card-gradient card-sheen p-3 shadow-sm"
              >
                <img
                  src="/delivery-driver-on-motorbike.jpg"
                  alt="Quick deliveries"
                  className="h-40 w-full rounded-md object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-sm text-foreground">
                  Lightning-fast deliveries with live updates.
                </figcaption>
              </M.figure>

              <M.figure
                {...hoverCard}
                className="rounded-xl border border-border/50 bg-card-gradient-alt card-sheen p-3 shadow-sm"
              >
                <img
                  src="/roadside-assistance-tow-truck.png"
                  alt="Roadside assistance"
                  className="h-40 w-full rounded-md object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-sm text-foreground">
                  24/7 roadside help from trusted partners.
                </figcaption>
              </M.figure>

              <M.figure
                {...hoverCard}
                className="rounded-xl border border-border/50 bg-card-gradient card-sheen p-3 shadow-sm col-span-2"
              >
                <img
                  src="/mechanic-workshop-tools.jpg"
                  alt="Mechanics network"
                  className="h-44 w-full rounded-md object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-sm text-foreground">
                  A citywide network of mechanics and workshops.
                </figcaption>
              </M.figure>
            </div>

            {/* Brand image for reinforcement */}
            {/* <M.img
              {...riseIn(0.15)}
              src="/images/point-logo.jpg"
              alt="POINT brand reference"
              width={1200}
              height={600}
              loading="lazy"
              className="mt-6 w-full rounded-xl border border-border/50 shadow-md"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

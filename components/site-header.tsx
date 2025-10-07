"use client";
import Link from "next/link";
import { M, useFadeUp } from "./motion-helpers";
import { useState } from "react";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#payments", label: "Payments" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const fade = useFadeUp(0.05);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <M.nav
        {...fade}
        className="mx-auto max-w-7xl px-6 h-16 md:h-20 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="#home"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        >
          <img
            src="/images/point-logo.jpg"
            alt="POINT logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-sm object-cover"
          />
          <span className="sr-only">POINT Home</span>
          <span aria-hidden className="text-lg font-semibold tracking-tight">
            POINT
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Download APP
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}
            />
          </svg>
        </button>
      </M.nav>

      <M.div
        id="mobile-menu"
        initial={false}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="md:hidden overflow-hidden border-t border-border/60"
      >
        <ul className="px-6 py-4 flex flex-col gap-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-md px-2 py-2 text-sm hover:bg-card/60"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Get Started
            </a>
          </li>
        </ul>
      </M.div>
    </header>
  );
}

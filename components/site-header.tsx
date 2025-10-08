"use client";
import Link from "next/link";
import { M, useFadeUp } from "./motion-helpers";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const nav = [
  { href: "#home", label: "Inicio" },
  { href: "#services", label: "Servicios" },
  { href: "#about", label: "Sobre Nosotros" },
  { href: "#payments", label: "Pagos" },
  { href: "#contact", label: "Contacto" },
];

export function SiteHeader() {
  const fade = useFadeUp(0.05);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <M.nav
        {...fade}
        className="mx-auto max-w-7xl px-6 h-16 md:h-20 flex items-center justify-between"
        aria-label="Principal"
      >
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/Logo1bg.png"
            alt="Logo de POINT"
            width={36}
            height={36}
            className="h-19 w-20"
          />
          <span className="sr-only">Inicio de POINT</span>
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
            Descargar APP
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Alternar navegación</span>
          <IoMenu className="h-6 w-6 text-white" aria-hidden="true" />
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
              Comenzar
            </a>
          </li>
        </ul>
      </M.div>
    </header>
  );
}

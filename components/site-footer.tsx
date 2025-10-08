"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-sm">
          <div>
            <p className="font-semibold">Compañía</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#payments"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  Pagos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Soporte</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  Estado del Servicio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  Términos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Síguenos</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent underline decoration-accent/60"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-xs text-muted-foreground w-full flex items-center justify-center">
          <p>© 2025 POINT Technologies C.A. – Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

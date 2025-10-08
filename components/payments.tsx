"use client";

import { M, SectionShell, useFadeUp } from "./motion-helpers";

export function Payments() {
  const fade = useFadeUp(0.05);

  const features = [
    { t: "Cifrado", d: "TLS 1.2+ en tránsito y AES-256 en reposo." },
    {
      t: "Señales de Fraude",
      d: "Verificaciones de velocidad, huella digital del dispositivo, indicadores de anomalías.",
    },
    {
      t: "Disputas",
      d: "Documentación clara y flujos de respuesta eficientes.",
    },
    {
      t: "Conciliación",
      d: "Informes de pago diarios y exportaciones en formato CSV.",
    },
  ];

  const tags = [
    "Diseño compatible con PCI",
    "Preparado para 3-D Secure",
    "Registros de auditoría",
  ];

  return (
    <SectionShell
      id="payments"
      title="Pagos Digitales"
      description="Transacciones rápidas, seguras y auditables."
    >
      {/* Tarjeta Animada */}
      <M.div
        {...fade}
        className="rounded-xl border border-border/60 bg-card p-6 md:p-8 shadow-sm transition hover:shadow-md"
      >
        <p className="text-pretty text-base/7 text-muted-foreground">
          POINT se integra con APIs bancarias y socios líderes en pagos para
          ofrecer transacciones seguras y rastreables. Soportamos confirmaciones
          instantáneas, reembolsos y recibos exportables para tus registros.
        </p>

        {/* Cuadrícula de Características */}
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          {features.map((f, i) => (
            <li
              key={f.t}
              className={`rounded-lg border border-border/60 p-4 shadow-sm transition hover:shadow-md ${
                i % 2
                  ? "bg-card-gradient-alt card-sheen"
                  : "bg-card-gradient card-sheen"
              }`}
            >
              <p className="font-medium text-foreground">{f.t}</p>
              <p className="mt-1 text-xs text-foreground/90">{f.d}</p>
            </li>
          ))}
        </ul>

        {/* Etiquetas / Insignias */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/60 px-2 py-1 bg-background/50 hover:bg-background/80 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </M.div>
    </SectionShell>
  );
}

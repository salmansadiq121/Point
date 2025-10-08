"use client";

import { M, SectionShell, useFadeUp, useStagger } from "./motion-helpers";

export function About() {
  const fade = useFadeUp(0.05);
  const { container, item } = useStagger(0.08);

  const metrics = [
    { k: "Tiempo de Respuesta Promedio", v: "7 min" },
    { k: "Tasa de Aprobación de Proveedores", v: "92%" },
    { k: "Disponibilidad (12m)", v: "99.9%" },
    { k: "Ciudades", v: "15+" },
  ];

  const timeline = [
    {
      year: "2025",
      text: "Ideación y primeros pilotos en Maracaibo.",
    },
    {
      year: "2025",
      text: "Expansión de la red de proveedores y fortalecimiento de pagos.",
    },
    {
      year: "2025",
      text: "Lanzamiento nacional con cobertura en múltiples ciudades.",
    },
  ];

  const values = [
    {
      t: "Confianza y Seguridad",
      d: "Verificación rigurosa y controles de desempeño continuos.",
    },
    {
      t: "Velocidad",
      d: "Enrutamiento inteligente al proveedor disponible más cercano.",
    },
    {
      t: "Transparencia",
      d: "Precios claros y actualizaciones del estado de principio a fin.",
    },
  ];

  return (
    <SectionShell
      id="about"
      title="Quiénes Somos"
      description="Creado en Venezuela para conectar usuarios con proveedores confiables."
    >
      {/* Texto descriptivo */}
      <M.div {...fade} className="prose prose-invert max-w-none">
        <p>
          POINT es una plataforma creada para unificar los servicios cotidianos
          en una experiencia única y confiable. Nuestra misión es simple:
          conectar a las personas con proveedores verificados y permitir
          transacciones seguras y transparentes.
        </p>
      </M.div>

      {/* Métricas */}
      <M.ul
        {...container}
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {metrics.map((m, i) => (
          <M.li
            key={m.k}
            {...item}
            className={`rounded-xl border border-border/60 p-4 shadow-sm transition hover:shadow-md ${
              i % 2
                ? "bg-card-gradient-alt card-sheen"
                : "bg-card-gradient card-sheen"
            }`}
          >
            <p className="text-2xl font-semibold text-foreground">{m.v}</p>
            <p className="mt-1 text-xs text-foreground/90">{m.k}</p>
          </M.li>
        ))}
      </M.ul>

      {/* Línea de tiempo */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Nuestra Trayectoria</h3>
        <M.ol {...container} className="mt-4 space-y-4">
          {timeline.map((t, i) => (
            <M.li
              key={i}
              {...item}
              className="rounded-xl border border-green-500/60 hover:border-sky-500/70 shadow hover:shadow-sky-500/30 bg-card p-4 transition"
            >
              <p className="text-sm">
                <strong>{t.year}</strong> — {t.text}
              </p>
            </M.li>
          ))}
        </M.ol>
      </div>

      {/* Valores */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Nuestros Valores</h3>
        <M.ul
          {...container}
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {values.map((v) => (
            <M.li
              key={v.t}
              {...item}
              className="rounded-xl border border-border/60 bg-card p-4 transition hover:border-sky-500/70 hover:shadow-sky-500/30 shadow-sm"
            >
              <h4 className="font-medium">{v.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
            </M.li>
          ))}
        </M.ul>
      </div>
    </SectionShell>
  );
}

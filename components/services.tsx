"use client";

import Image from "next/image";
import { M, SectionShell, useStagger, hoverCard } from "./motion-helpers";

const services = [
  {
    title: "Delivery",
    desc: "Comida, bebidas, medicinas y artículos esenciales entregados rápidamente con seguimiento en tiempo real.",
    imgQuery:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/services/courier-flYKwsNz0CRm7M5d1QeJnOVub5Ahqf.jpg",
  },
  {
    title: "Moto Taxi & Taxi",
    desc: "Viajes confiables con conductores verificados y tarifas transparentes.",
    imgQuery:
      "https://img.freepik.com/free-photo/smiley-man-city-holding-mobile_23-2148296633.jpg?semt=ais_incoming&w=740&q=80",
  },
  {
    title: "Mecánicos & Talleres",
    desc: "Diagnósticos en sitio y talleres aliados para trabajos mayores.",
    imgQuery:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/services/roadside-assistance-KNoiSvS9oxvN57BCYtZ73yGshgTRDi.jpg",
  },
  {
    title: "Grúas & Asistencia Vial",
    desc: "Remolques de emergencia, baterías, neumáticos y arranques — disponibles 24/7.",
    imgQuery:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/services/roadside-assistance-KNoiSvS9oxvN57BCYtZ73yGshgTRDi.jpg",
  },
  {
    title: "Gestor de Mandados",
    desc: "Filas, entregas y recogidas — recupera tiempo en tu día.",
    imgQuery:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/services/courier-flYKwsNz0CRm7M5d1QeJnOVub5Ahqf.jpg",
  },
  {
    title: "Última Milla B2B",
    desc: "API de despachos masivos para comercios con acuerdos de entrega (SLA).",
    imgQuery:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/services/logistics-warehouse-MiItdWTukL43eM2g7lxpruOuBOEG2g.jpg",
  },
];

export function Services() {
  const { container, item } = useStagger(0.1);

  return (
    <SectionShell
      id="services"
      title="Servicios"
      description="Todo lo que necesitas, realizado por profesionales verificados."
    >
      <M.ul
        {...container}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services?.map((s) => (
          <M.li
            key={s.title}
            {...item}
            className="relative rounded-xl border hover:border-sky-500/70 shadow hover:shadow-sky-500 p-5 overflow-hidden"
          >
            {/* Capa decorativa */}
            <div className="absolute inset-0 pointer-events-none card-sheen"></div>

            <M.div
              {...hoverCard}
              className="relative overflow-hidden rounded-lg border border-border/40"
            >
              <Image
                src={s.imgQuery}
                alt={s.title}
                width={640}
                height={300}
                className="h-46 w-full object-cover"
                loading="lazy"
              />
            </M.div>

            <div className="mt-4 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <span className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                Disponible
              </span>
            </div>

            <p className="mt-2 text-sm text-foreground/90">{s.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-md border border-border/60 bg-background/20 px-2 py-1">
                Verificado
              </span>
              <span className="rounded-md border border-border/60 bg-background/20 px-2 py-1">
                Asegurado
              </span>
              <span className="rounded-md border border-border/60 bg-background/20 px-2 py-1">
                Rastreo en tiempo real
              </span>
            </div>

            {/* Botón principal */}
            <a
              href="#contact"
              className="mt-4 inline-flex items-center justify-center w-full rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-all z-20 relative"
            >
              Solicitar Servicio
            </a>
          </M.li>
        ))}
      </M.ul>
    </SectionShell>
  );
}

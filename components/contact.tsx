"use client";
import { M, SectionShell, useStagger } from "./motion-helpers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Contact() {
  const { container, item } = useStagger(0.05);
  return (
    <SectionShell
      id="contact"
      title="Contacto"
      description="Nos encantaría saber de ti."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <M.div
          {...item}
          className="rounded-xl border border-sky-500/70 shadow shadow-sky-500 bg-card p-6"
        >
          <dl className="grid grid-cols-1 gap-4">
            <div>
              <dt className="text-sm text-muted-foreground">
                Correo electrónico
              </dt>
              <dd>
                <a
                  className="underline decoration-accent/60 hover:text-accent"
                  href="mailto:contacto@pointechnologiesapp.com"
                >
                  contacto@pointechnologiesapp.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">
                Teléfono / WhatsApp
              </dt>
              <dd>
                <a
                  className="underline decoration-accent/60 hover:text-accent"
                  href="tel:+584149656916"
                >
                  +58 414 965 6916
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Dirección</dt>
              <dd>Maracaibo, Venezuela</dd>
            </div>
          </dl>

          <div className="mt-6">
            <h3 className="text-sm font-semibold">Preguntas Frecuentes</h3>
            <Accordion type="single" collapsible className="mt-2">
              <AccordionItem value="a1">
                <AccordionTrigger>
                  ¿Qué tan rápido es el tiempo de respuesta promedio?
                </AccordionTrigger>
                <AccordionContent>
                  La mayoría de las solicitudes son atendidas en menos de 10
                  minutos, dependiendo de la ubicación y la hora.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a2">
                <AccordionTrigger>
                  ¿Los proveedores están verificados?
                </AccordionTrigger>
                <AccordionContent>
                  Sí. Los proveedores pasan por verificaciones de identidad y
                  revisiones de desempeño antes de estar activos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a3">
                <AccordionTrigger>
                  ¿Qué métodos de pago se aceptan?
                </AccordionTrigger>
                <AccordionContent>
                  Aceptamos transferencias bancarias locales y tarjetas. El pago
                  en efectivo depende del proveedor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </M.div>

        <M.form
          {...container}
          action="#"
          aria-describedby="contact-note"
          className="rounded-xl border hover:border-sky-500/70 shadow hover:shadow-sky-500 bg-card p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <M.div {...item} className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="topic" className="block text-sm font-medium">
                  Tema
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option>General</option>
                  <option>Registro de Proveedores</option>
                  <option>Alianzas</option>
                  <option>Soporte</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <p id="contact-note" className="text-xs text-muted-foreground">
              Este formulario es solo para fines de demostración.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Enviar
              </button>
              <a
                href="mailto:support@pointapp.com"
                className="text-xs underline decoration-accent/60 hover:text-accent"
              >
                O envíanos un correo directamente
              </a>
            </div>
          </M.div>
        </M.form>
      </div>
    </SectionShell>
  );
}

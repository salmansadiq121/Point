import { TableOfContents } from "@/components/table-of-contents";
import {
  FileText,
  Users,
  CreditCard,
  Ban,
  Shield,
  AlertTriangle,
  Scale,
  Mail,
  Truck,
  Wrench,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const tocItems = [
  { id: "aceptacion", title: "1. Aceptación de los Términos", level: 1 },
  { id: "definiciones", title: "2. Definiciones", level: 1 },
  { id: "requisitos", title: "3. Requisitos para el Uso", level: 1 },
  { id: "licencia", title: "4. Licencia de Uso Limitada", level: 1 },
  { id: "conductas-prohibidas", title: "5. Conductas Prohibidas", level: 1 },
  { id: "tarifas", title: "6. Tarifas y Formas de Pago", level: 1 },
  { id: "cancelacion", title: "7. Política de Cancelación", level: 1 },
  { id: "devoluciones", title: "8. Devoluciones y Reclamos", level: 1 },
  {
    id: "modificaciones",
    title: "9. Modificaciones de los Términos",
    level: 1,
  },
  { id: "limitacion", title: "10. Limitación de Responsabilidad", level: 1 },
  { id: "suspension", title: "11. Suspensión de Cuenta", level: 1 },
  { id: "propiedad", title: "12. Propiedad Intelectual", level: 1 },
  { id: "indemnidad", title: "13. Indemnidad", level: 1 },
  { id: "jurisdiccion", title: "14. Jurisdicción", level: 1 },
  { id: "contacto", title: "15. Contacto", level: 1 },
];

export default function TerminosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 bg-gradient-to-br from-sky-950 via-green-950 to-background py-20 border-b">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-shite text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              Última actualización: 01 de Octubre de 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Términos y{" "}
              <span className="bg-gradient-to-r from-sky-500 to-green-600 bg-clip-text text-transparent">
                Condiciones
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Términos y condiciones generales de uso de la aplicación POINT
              Technologies C.A. Por favor, lea cuidadosamente antes de utilizar
              nuestros servicios.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12  px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Content */}
          <article className="prose prose-slate max-w-none min-w-[280px]">
            {/* Aceptación */}
            <section id="aceptacion" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  1. Aceptación de los Términos
                </h2>
              </div>

              <Card className="p-6 bg-gradient-to-br from-sky-700 to-green-700 border-primary/20">
                <p className="text-foreground leading-relaxed m-0">
                  Al registrarse, acceder o utilizar la aplicación POINT, el
                  Usuario declara haber leído, comprendido y aceptado
                  expresamente los presentes Términos y Condiciones, así como la
                  Política de Privacidad, Reembolsos y demás normas internas de
                  la plataforma.
                </p>
              </Card>
            </section>

            {/* Definiciones */}
            <section id="definiciones" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <Users className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">2. Definiciones</h2>
              </div>

              <div className="grid gap-4 not-prose">
                <Card className="p-6 border-l-4 border-l-secondary">
                  <h3 className="font-semibold text-lg mb-2">
                    Usuario o Cliente
                  </h3>
                  <p className="text-muted-foreground leading-relaxed m-0">
                    Persona natural mayor de edad que utiliza la aplicación
                    POINT para solicitar servicios de delivery, transporte,
                    asistencia mecánica, grúas u otros disponibles en la
                    plataforma.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg mb-2">Plataforma</h3>
                  <p className="text-muted-foreground leading-relaxed m-0">
                    Sistema digital (app móvil y backend) administrado por POINT
                    Technologies C.A.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary">
                  <h3 className="font-semibold text-lg mb-2">Pedido</h3>
                  <p className="text-muted-foreground leading-relaxed m-0">
                    Solicitud realizada por el Usuario mediante la app.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg mb-2">Proveedor</h3>
                  <p className="text-muted-foreground leading-relaxed m-0">
                    Negocio aliado registrado que ofrece productos o servicios.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary">
                  <h3 className="font-semibold text-lg mb-2">
                    Conductor / Repartidor
                  </h3>
                  <p className="text-muted-foreground leading-relaxed m-0">
                    Persona autorizada que realiza servicios de traslado o
                    entrega a través de la plataforma.
                  </p>
                </Card>
              </div>
            </section>

            {/* Requisitos */}
            <section id="requisitos" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  3. Requisitos para el Uso
                </h2>
              </div>

              <div className="grid gap-3 not-prose">
                {[
                  "Ser mayor de 18 años",
                  "Disponer de un dispositivo móvil compatible y conexión a internet",
                  "Aportar datos verídicos y actualizados durante el registro y uso de la app",
                  "Mantener sus medios de pago y dirección actualizados",
                  "No compartir su cuenta con terceros",
                ].map((req, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-foreground m-0">{req}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Licencia */}
            <section id="licencia" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  4. Licencia de Uso Limitada
                </h2>
              </div>

              <Card className="p-6">
                <p className="text-foreground leading-relaxed m-0">
                  El Usuario recibe una licencia{" "}
                  <strong>personal, limitada, revocable y no exclusiva</strong>{" "}
                  para utilizar la app conforme a estos Términos y Condiciones.
                  No podrá copiar, modificar, distribuir, vender o explotar
                  comercialmente la app sin autorización de POINT Technologies
                  C.A.
                </p>
              </Card>
            </section>

            {/* Conductas Prohibidas */}
            <section id="conductas-prohibidas" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <Ban className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  5. Conductas Prohibidas
                </h2>
              </div>

              <Card className="p-6 border-l-4 border-l-destructive bg-destructive/5 mb-4">
                <p className="text-foreground font-semibold mb-4">
                  Queda prohibido:
                </p>
                <ul className="space-y-2">
                  {[
                    "Utilizar la app con fines fraudulentos o ilícitos",
                    "Falsificar identidades, direcciones o datos de pago",
                    "Manipular tarifas, promociones o descuentos",
                    "Interferir en el funcionamiento técnico de la plataforma",
                    "Insultar, acosar o amenazar a conductores, proveedores o personal",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-destructive font-bold">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 bg-amber-50 border-amber-200">
                <p className="text-amber-900 font-semibold m-0">
                  ⚠️ POINT podrá suspender o eliminar cuentas de forma inmediata
                  por estas u otras conductas irregulares.
                </p>
              </Card>
            </section>

            {/* Tarifas */}
            <section id="tarifas" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  6. Tarifas y Formas de Pago
                </h2>
              </div>

              <div className="space-y-6 not-prose">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg mb-3">
                    Cálculo de Tarifas
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Las tarifas son calculadas dinámicamente según:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Tipo de servicio",
                      "Distancia",
                      "Demanda",
                      "Promociones",
                    ].map((factor) => (
                      <li
                        key={factor}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary">
                  <h3 className="font-semibold text-lg mb-3">
                    Métodos de Pago
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Pago móvil",
                      "Tarjeta de débito/crédito",
                      "Zelle",
                      "Efectivo (solo transporte)",
                    ].map((method) => (
                      <div
                        key={method}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="h-2 w-2 rounded-full bg-secondary" />
                        {method}
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-sky-50 border-sky-200">
                  <p className="text-sky-900 m-0">
                    <strong>Importante:</strong> En servicios de transporte, el
                    uso de efectivo está permitido, pero no debe solicitar
                    vuelto si no fue notificado previamente. Las propinas son
                    opcionales.
                  </p>
                </Card>
              </div>
            </section>

            {/* Cancelación */}
            <section id="cancelacion" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  7. Política de Cancelación
                </h2>
              </div>

              <div className="grid gap-4 not-prose">
                <Card className="p-6 border-l-4 border-l-green-500 bg-green-50">
                  <h3 className="font-semibold text-lg mb-2 text-green-900">
                    ✓ Sin penalidad
                  </h3>
                  <p className="text-green-800 m-0">
                    El usuario puede cancelar un pedido sin penalidad si aún no
                    ha sido aceptado por el conductor/proveedor.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50">
                  <h3 className="font-semibold text-lg mb-2 text-amber-900">
                    ⚠️ Con cargo
                  </h3>
                  <p className="text-amber-800 m-0">
                    Si cancela después de asignado el conductor o iniciado el
                    trayecto, se aplicará un cargo por cancelación proporcional.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-red-500 bg-red-50">
                  <h3 className="font-semibold text-lg mb-2 text-red-900">
                    ✕ No permitido
                  </h3>
                  <p className="text-red-800 m-0">
                    En productos despachados, no podrá cancelarse.
                  </p>
                </Card>
              </div>
            </section>

            {/* Devoluciones */}
            <section id="devoluciones" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <Truck className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  8. Devoluciones y Reclamos
                </h2>
              </div>

              <div className="space-y-4 not-prose">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg mb-2">
                    Productos Perecederos
                  </h3>
                  <p className="text-muted-foreground m-0">
                    Reclamos solo dentro de las <strong>12 horas</strong>{" "}
                    posteriores a la entrega.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary">
                  <h3 className="font-semibold text-lg mb-2">
                    Productos No Perecederos
                  </h3>
                  <p className="text-muted-foreground m-0">
                    Reclamos hasta <strong>24 horas</strong> después de la
                    entrega.
                  </p>
                </Card>

                <Card className="p-6 bg-muted/50">
                  <p className="text-foreground leading-relaxed m-0">
                    Todos los reclamos deben realizarse a través del canal
                    oficial de soporte. POINT evaluará el caso con el proveedor
                    correspondiente. Si aplica, se procederá con reembolso,
                    reposición o crédito.
                  </p>
                </Card>

                <Card className="p-6 bg-amber-50 border-amber-200">
                  <p className="text-amber-900 m-0">
                    <strong>Nota:</strong> Los reembolsos o devoluciones
                    dependen de la política del proveedor. POINT actúa como
                    intermediario.
                  </p>
                </Card>
              </div>
            </section>

            {/* Modificaciones */}
            <section id="modificaciones" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  9. Modificaciones de los Términos
                </h2>
              </div>

              <Card className="p-6">
                <p className="text-foreground leading-relaxed m-0">
                  Estos términos pueden ser actualizados por POINT en cualquier
                  momento. Se notificará a través de la app o web. La
                  continuidad en el uso implica aceptación de los cambios.
                </p>
              </Card>
            </section>

            {/* Limitación */}
            <section id="limitacion" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  10. Limitación de Responsabilidad
                </h2>
              </div>

              <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50 mb-4">
                <p className="text-amber-900 font-semibold mb-3">
                  POINT no es responsable por:
                </p>
                <ul className="space-y-2">
                  {[
                    "Calidad, cantidad o cumplimiento de los productos o servicios de terceros",
                    "Fallas técnicas, caídas del sistema, errores en GPS",
                    "Lentitud en procesamiento de pagos",
                    "Demoras causadas por tráfico, clima o causas externas a la app",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-amber-800"
                    >
                      <span className="text-amber-600 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* Suspensión */}
            <section id="suspension" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <Ban className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  11. Suspensión y Cancelación de Cuenta
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                POINT podrá suspender temporal o definitivamente una cuenta si
                detecta:
              </p>

              <div className="grid gap-3 not-prose">
                {[
                  "Incumplimiento de estos Términos",
                  "Uso fraudulento o violación a las normas",
                  "Reiterados reclamos justificados por mala conducta",
                ].map((reason, index) => (
                  <Card
                    key={index}
                    className="p-4 border-l-4 border-l-destructive/50"
                  >
                    <p className="text-foreground m-0">{reason}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Propiedad Intelectual */}
            <section id="propiedad" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-700 to-green-700 flex items-center justify-center text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  12. Propiedad Intelectual
                </h2>
              </div>

              <Card className="p-6 bg-gradient-to-br from-sky-700 to-green-700 border-primary/20">
                <p className="text-foreground leading-relaxed m-0">
                  Todo contenido visual, marcas, software, base de datos y
                  derechos sobre la app pertenecen a{" "}
                  <strong>POINT Technologies C.A.</strong> y están protegidos
                  por la ley. No se permite su uso no autorizado.
                </p>
              </Card>
            </section>

            {/* Indemnidad */}
            <section id="indemnidad" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <Scale className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">13. Indemnidad</h2>
              </div>

              <Card className="p-6">
                <p className="text-foreground leading-relaxed m-0">
                  El Usuario acepta indemnizar y mantener indemne a Point
                  technologies C.A, sus representantes y aliados ante cualquier
                  reclamo, daño o pérdida que surja por mal uso de la plataforma
                  o incumplimiento de estos términos.
                </p>
              </Card>
            </section>

            {/* Jurisdicción */}
            <section id="jurisdiccion" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-green-600 flex items-center justify-center text-white">
                  <Scale className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  14. Legislación y Jurisdicción
                </h2>
              </div>

              <Card className="p-6 border-l-4 border-l-primary">
                <p className="text-foreground leading-relaxed m-0">
                  Estos Términos se rigen por las leyes de la{" "}
                  <strong>República Bolivariana de Venezuela</strong>. Las
                  partes se someten a la jurisdicción de los tribunales
                  ordinarios de la ciudad de <strong>Maracaibo</strong>.
                </p>
              </Card>
            </section>

            {/* Contacto */}
            <section id="contacto" className="scroll-mt-24">
              <Card className="p-8 bg-gradient-to-br from-sky-500 to-green-600 text-white border-0">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-6 w-6" />
                  <h2 className="text-2xl font-bold m-0">15. Contacto</h2>
                </div>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Para consultas o reclamos, el usuario podrá comunicarse al
                  correo:
                </p>
                <a
                  href="mailto:contacto@pointechnologiesapp.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-sky-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  contacto@pointechnologiesapp.com
                </a>
              </Card>
            </section>

            {/* Additional Sections Notice */}
            <section className="mt-16">
              <Card className="p-6 bg-muted/50">
                <h3 className="font-semibold text-lg mb-3">
                  Términos Adicionales
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Este documento incluye términos específicos para:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: Truck, text: "Conductores y Repartidores" },
                    { icon: Wrench, text: "Mecánicos y Servicios de Grúa" },
                    { icon: Users, text: "Proveedores Comerciales" },
                    { icon: CreditCard, text: "Métodos de Pago" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-foreground"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </article>

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

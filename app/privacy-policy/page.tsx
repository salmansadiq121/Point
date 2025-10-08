import { TableOfContents } from "@/components/table-of-contents";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Bell,
  Cookie,
  AlertTriangle,
  Scale,
  Mail,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const tocItems = [
  { id: "definiciones", title: "1. Definiciones", level: 1 },
  { id: "consentimiento", title: "2. Consentimiento Informado", level: 1 },
  { id: "informacion", title: "3. Información que Recopilamos", level: 1 },
  { id: "uso", title: "4. Uso de la Información", level: 1 },
  { id: "comparticion", title: "5. Compartición de Datos", level: 1 },
  { id: "derechos", title: "6. Derechos del Usuario", level: 1 },
  { id: "seguridad", title: "7. Seguridad de la Información", level: 1 },
  { id: "menores", title: "8. Menores de Edad", level: 1 },
  { id: "fuerza-mayor", title: "9. Fuerza Mayor", level: 1 },
  { id: "cambios", title: "10. Cambios en la Política", level: 1 },
  { id: "aceptacion", title: "11. Aceptación de la Política", level: 1 },
  {
    id: "comunicaciones",
    title: "12. Comunicaciones con el Usuario",
    level: 1,
  },
  { id: "cookies", title: "13. Cookies y Tecnologías", level: 1 },
  { id: "reorientacion", title: "14. Reorientación", level: 1 },
  { id: "aspectos-seguridad", title: "15. Aspectos de Seguridad", level: 1 },
  { id: "liberacion", title: "16. Liberación de Responsabilidad", level: 1 },
];

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 bg-gradient-to-br from-green-900 via-sky-900 to-background py-20 border-b">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-white text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Última actualización: 01 de Octubre de 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Política de{" "}
              <span className="bg-gradient-to-r from-green-600 to-sky-500 bg-clip-text text-transparent">
                Privacidad
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              En POINT, valoramos la privacidad de nuestros usuarios y nos
              comprometemos a proteger sus datos personales. Esta política
              explica cómo recopilamos, usamos y protegemos su información.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12 px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Content */}
          <article className="prose prose-slate max-w-none min-w-[280px]">
            {/* Definiciones */}
            <section id="definiciones" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Database className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">1. Definiciones</h2>
              </div>

              <div className="grid gap-4 not-prose">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg mb-2">APP</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aplicación operativa para dispositivos móviles iOS y
                    Android, propiedad de Point.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary">
                  <h3 className="font-semibold text-lg mb-2">USUARIO</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cualquier persona que acceda, se registre o utilice los
                    servicios de la app Point, ya sea como cliente, proveedor,
                    conductor, repartidor, mecánico o servicio de grúa.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg mb-2">
                    INFORMACIÓN PERSONAL
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nombre, apellido, correo electrónico, número de teléfono,
                    dirección, ubicación, IP, información de pago y cualquier
                    otro dato que pueda identificar al usuario.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary">
                  <h3 className="font-semibold text-lg mb-2">FUERZA MAYOR</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cualquier evento imprevisible o inevitable fuera del control
                    de Point que impida temporal o permanentemente la prestación
                    del servicio.
                  </p>
                </Card>
              </div>
            </section>

            {/* Consentimiento */}
            <section id="consentimiento" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  2. Consentimiento Informado
                </h2>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <p className="text-foreground leading-relaxed m-0">
                  Al registrarse o utilizar nuestros servicios, el USUARIO
                  acepta de manera <strong>libre, expresa e informada</strong>{" "}
                  que sus datos personales sean recopilados, almacenados y
                  tratados por Point bajo los términos establecidos en esta
                  política.
                </p>
              </Card>
            </section>

            {/* Información que Recopilamos */}
            <section id="informacion" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  3. Información que Recopilamos
                </h2>
              </div>

              <div className="space-y-6 not-prose">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                      1
                    </span>
                    Información proporcionada directamente
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Nombre y apellido",
                      "Teléfono",
                      "Correo electrónico",
                      "Dirección exacta",
                      "Cédula o documento de identidad",
                      "Información de pago",
                      "Datos del vehículo (conductores)",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm">
                      2
                    </span>
                    Información recopilada automáticamente
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Ubicación GPS",
                      "Dirección IP",
                      "Tipo de dispositivo",
                      "Sistema operativo",
                      "Historial de uso",
                      "Cookies y rastreo",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Uso de la Información */}
            <section id="uso" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Database className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  4. Uso de la Información
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Usamos la información recopilada para:
              </p>

              <div className="grid gap-3 not-prose">
                {[
                  "Gestionar el registro y autenticación de usuarios",
                  "Procesar pagos digitales",
                  "Permitir la comunicación entre usuarios y proveedores",
                  "Asignar pedidos y rutas de entrega",
                  "Prevenir fraudes o actividades sospechosas",
                  "Verificar cumplimiento de términos y condiciones",
                  "Mejorar servicios mediante análisis de uso",
                  "Enviar notificaciones operativas y promociones",
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-foreground m-0">{item}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Compartición de Datos */}
            <section id="comparticion" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Lock className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  5. Compartición de Datos
                </h2>
              </div>

              <Card className="p-6 border-l-4 border-l-primary mb-4">
                <p className="text-foreground leading-relaxed m-0">
                  Point podrá compartir información personal con:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Proveedores de servicios tecnológicos y de pago
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Autoridades competentes cuando sea requerido legalmente
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Aliados estratégicos, bajo acuerdos de confidencialidad
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-green-50 border-green-200">
                <p className="text-green-900 font-semibold m-0">
                  ✓ No vendemos la información personal del usuario a terceros.
                </p>
              </Card>
            </section>

            {/* Derechos del Usuario */}
            <section id="derechos" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Scale className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  6. Derechos del Usuario
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 not-prose">
                {[
                  { title: "Acceder", desc: "A sus datos personales" },
                  { title: "Rectificar", desc: "Información inexacta" },
                  { title: "Eliminar", desc: "Su cuenta y datos" },
                  { title: "Oponerse", desc: "Al tratamiento de datos" },
                ].map((right, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {right.title}
                    </h3>
                    <p className="text-muted-foreground m-0">{right.desc}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-sky-50 border-sky-200 mt-6">
                <p className="text-sky-900 m-0">
                  Estas solicitudes podrán hacerse a través del correo oficial
                  de atención al cliente.
                </p>
              </Card>
            </section>

            {/* Seguridad */}
            <section id="seguridad" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Lock className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  7. Seguridad de la Información
                </h2>
              </div>

              <Card className="p-6 bg-gradient-to-br from-green-700 to-sky-700 border-primary/20">
                <p className="text-foreground leading-relaxed m-0">
                  Implementamos medidas{" "}
                  <strong>técnicas, administrativas y físicas</strong> para
                  proteger los datos personales del acceso no autorizado,
                  pérdida o alteración.
                </p>
              </Card>
            </section>

            {/* Menores de Edad */}
            <section id="menores" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">8. Menores de Edad</h2>
              </div>

              <Card className="p-6 border-l-4 border-l-destructive bg-destructive/5">
                <p className="text-foreground leading-relaxed m-0">
                  El uso de la aplicación está permitido{" "}
                  <strong>solo a mayores de 18 años</strong>. Si detectamos que
                  un menor ha registrado una cuenta, procederemos a eliminarla
                  junto a sus datos personales.
                </p>
              </Card>
            </section>

            {/* Fuerza Mayor */}
            <section id="fuerza-mayor" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">9. Fuerza Mayor</h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                En caso de eventos de fuerza mayor que impidan la prestación de
                nuestros servicios, Point no será responsable por el
                incumplimiento temporal o permanente de sus obligaciones,
                conforme a lo previsto en la legislación aplicable.
              </p>
            </section>

            {/* Cambios */}
            <section id="cambios" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Bell className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  10. Cambios en la Política
                </h2>
              </div>

              <Card className="p-6">
                <p className="text-foreground leading-relaxed m-0">
                  Point se reserva el derecho de modificar esta política. Los
                  cambios serán notificados por medio de la aplicación o el
                  sitio web.
                </p>
              </Card>
            </section>

            {/* Aceptación */}
            <section id="aceptacion" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  11. Aceptación de la Política
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                El USUARIO, con la lectura y aceptación expresa de esta
                POLÍTICA, de forma informada, clara, precisa, inequívoca,
                voluntaria, libre y consciente de los alcances de lo aquí
                aceptado, otorga su consentimiento informado para el tratamiento
                de sus datos según lo que aquí se indica.
              </p>

              <Card className="p-6 bg-muted/50">
                <p className="text-foreground leading-relaxed m-0">
                  El USUARIO puede acceder a la información de su cuenta,
                  actualizarla, modificarla o eliminarla en cualquier momento.
                  Si desea desactivar su cuenta, puede hacerlo mediante un
                  mensaje a soporte de la APP.
                </p>
              </Card>
            </section>

            {/* Comunicaciones */}
            <section id="comunicaciones" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Bell className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  12. Comunicaciones con el Usuario
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Todo USUARIO REGISTRADO podrá recibir comunicaciones sobre
                promociones, productos, actualizaciones o cambios en nuestras
                políticas por:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 not-prose">
                {[
                  "Correo electrónico",
                  "Notificaciones push",
                  "SMS",
                  "Mensajes in-app",
                ].map((method) => (
                  <Card key={method} className="p-4">
                    <p className="text-foreground m-0">✓ {method}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-sky-50 border-sky-200 mt-6">
                <p className="text-sky-900 m-0">
                  El USUARIO podrá cancelar estas comunicaciones en cualquier
                  momento utilizando el botón de "unsubscribe" o contactando a
                  soporte técnico.
                </p>
              </Card>
            </section>

            {/* Cookies */}
            <section id="cookies" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Cookie className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  13. Cookies y Tecnologías
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Cuando el USUARIO visita nuestro SITIO WEB y/o usa nuestra APP,
                ciertos datos de navegación son enviados a nuestros servidores:
              </p>

              <div className="space-y-4 not-prose">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg mb-2">
                    Cookies o Galletas Informáticas
                  </h3>
                  <p className="text-muted-foreground m-0">
                    Archivos de texto almacenados en el navegador que permiten
                    recordar preferencias, realizar análisis estadísticos y
                    mejorar la experiencia del usuario.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary">
                  <h3 className="font-semibold text-lg mb-2">Web Beacons</h3>
                  <p className="text-muted-foreground m-0">
                    Archivos de imagen que permiten hacer seguimiento al
                    comportamiento de navegación del USUARIO.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-semibold text-lg mb-2">
                    Servidores Logs
                  </h3>
                  <p className="text-muted-foreground m-0">
                    Registros automáticos del sistema que contienen información
                    sobre el comportamiento del USUARIO y posibles errores
                    técnicos.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary">
                  <h3 className="font-semibold text-lg mb-2">
                    Tecnología de Geolocalización
                  </h3>
                  <p className="text-muted-foreground m-0">
                    Permite determinar la ubicación del USUARIO mediante IP, GPS
                    o redes GSM. El USUARIO puede desactivar esta opción desde
                    su dispositivo.
                  </p>
                </Card>
              </div>
            </section>

            {/* Reorientación */}
            <section id="reorientacion" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">14. Reorientación</h2>
              </div>

              <Card className="p-6">
                <p className="text-foreground leading-relaxed m-0">
                  Utilizamos tecnologías de reorientación como las de Facebook,
                  Google o Instagram, que permiten mostrar publicidad adaptada
                  al comportamiento del USUARIO.
                </p>
              </Card>
            </section>

            {/* Aspectos de Seguridad */}
            <section id="aspectos-seguridad" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <Lock className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  15. Aspectos de Seguridad
                </h2>
              </div>

              <Card className="p-6 bg-gradient-to-br from-green-950 to-sky-950 border-primary/20">
                <p className="text-foreground leading-relaxed m-0">
                  Point adopta medidas de seguridad técnicas y organizativas
                  para proteger la INFORMACIÓN PERSONAL del USUARIO contra
                  pérdida, uso indebido, acceso no autorizado o alteración. Los
                  datos se almacenan en una base de datos propia o de terceros
                  bajo medidas de seguridad técnica y estructural adecuadas.
                </p>
              </Card>
            </section>

            {/* Liberación de Responsabilidad */}
            <section id="liberacion" className="scroll-mt-24 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-sky-500 flex items-center justify-center text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold m-0">
                  16. Liberación de Responsabilidad
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                El USUARIO acepta que el uso del SITIO WEB y/o la APP se realiza
                bajo su total responsabilidad. Point no será responsable de:
              </p>

              <div className="grid gap-3 not-prose">
                {[
                  "Daños por virus, malware, fallas técnicas o cualquier otro elemento que afecte su equipo",
                  "Interrupciones o fallos de la red",
                  "Problemas causados por software o hardware del USUARIO",
                  "Uso indebido o ilegal de la información por parte de terceros no autorizados",
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 border-l-4 border-l-destructive/50"
                  >
                    <p className="text-foreground m-0">{item}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="scroll-mt-24">
              <Card className="p-8 bg-gradient-to-br from-green-600 to-sky-500 text-white border-0">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-6 w-6" />
                  <h2 className="text-2xl font-bold m-0">
                    ¿Preguntas sobre privacidad?
                  </h2>
                </div>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Para consultas sobre esta política de privacidad, contáctenos:
                </p>
                <a
                  href="mailto:contacto@pointechnologiesapp.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  contacto@pointechnologiesapp.com
                </a>
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

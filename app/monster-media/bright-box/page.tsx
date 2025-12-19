"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function BrightBoxPage() {
  const { t } = useLanguage()

  const gallery = [
    "/portada-Bright Box.jpg",
    "/multiple-kiosks-in-retail-environment.jpg",
    "/interactive-kiosk-in-shopping-mall.jpg",
    "/modern-self-service-kiosk-design.jpg",
  ]

  const features = [
    {
      title: t({ es: "Carga Segura", en: "Secure Charging" }),
      description: t({
        es: "Lockers individuales con tecnología de cifrado para garantizar la seguridad de los dispositivos.",
        en: "Individual lockers with encryption technology to ensure device security.",
      }),
    },
    {
      title: t({ es: "Comunicación Dinámica", en: "Dynamic Communication" }),
      description: t({
        es: "Pantallas integradas para mostrar publicidad, avisos o contenido interactivo mientras se carga.",
        en: "Integrated screens to display advertising, notices, or interactive content while charging.",
      }),
    },
    {
      title: t({ es: "Fácil de Usar", en: "Easy to Use" }),
      description: t({
        es: "Interfaz intuitiva que guía al usuario en el proceso de guardado y retiro de su equipo.",
        en: "Intuitive interface that guides the user through the process of storing and retrieving their equipment.",
      }),
    },
    {
      title: t({ es: "Analítica de Uso", en: "Usage Analytics" }),
      description: t({
        es: "Reportes detallados sobre tiempos de carga, frecuencia de uso y perfiles de usuario.",
        en: "Detailed reports on charging times, usage frequency, and user profiles.",
      }),
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3c4130a_1px,transparent_1px),linear-gradient(to_bottom,#a3c4130a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container relative z-10 mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {t({ es: "Interactivos", en: "Interactives" })}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
              Bright Box
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t({
                es: "Bright Box redefine la experiencia de carga en espacios públicos. Nuestras estaciones combinan la seguridad de lockers inteligentes con la potencia de la comunicación digital, permitiendo a las marcas conectar con los usuarios en momentos de alta receptividad.",
                en: "Bright Box redefines the charging experience in public spaces. Our stations combine the security of smart lockers with the power of digital communication, allowing brands to connect with users at moments of high receptivity.",
              })}
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">{t({ es: "Solicitar demo", en: "Request demo" })}</Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://luisgarciamoreno95.wixsite.com/monster1/bright-box"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t({ es: "Fuente", en: "Source" })}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)]">
            {t({ es: "Galería", en: "Gallery" })}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((src) => (
              <div key={src} className="aspect-[3/4] rounded-xl overflow-hidden border border-border bg-card/50">
                <img src={src} alt="Bright Box" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

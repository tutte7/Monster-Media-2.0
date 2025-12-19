"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function KioskosPage() {
  const { t } = useLanguage()

  const gallery = [
    "/portada-kioskos.png",
    "/interactive-kiosk-in-shopping-mall.jpg",
    "/touchscreen-kiosk-with-customer-interaction.jpg",
    "/modern-self-service-kiosk-design.jpg",
    "/multiple-kiosks-in-retail-environment.jpg",
  ]

  const features = [
    {
      title: t({ es: "Centros de Carga", en: "Charging Hubs" }),
      description: t({
        es: "Estaciones equipadas con múltiples cables y puertos para que los usuarios carguen sus dispositivos de forma segura.",
        en: "Stations equipped with multiple cables and ports for users to charge their devices safely.",
      }),
    },
    {
      title: t({ es: "Pantallas Táctiles", en: "Touch Screens" }),
      description: t({
        es: "Interfaces interactivas de alta resolución que permiten navegar por catálogos, mapas o juegos.",
        en: "High-resolution interactive interfaces that allow browsing catalogs, maps, or games.",
      }),
    },
    {
      title: t({ es: "Contenido de Marca", en: "Branded Content" }),
      description: t({
        es: "Espacios publicitarios dinámicos y personalizables para promocionar productos y servicios.",
        en: "Dynamic and customizable advertising spaces to promote products and services.",
      }),
    },
    {
      title: t({ es: "Recolección de Datos", en: "Data Collection" }),
      description: t({
        es: "Herramientas integradas para capturar leads y obtener métricas de interacción en tiempo real.",
        en: "Integrated tools to capture leads and obtain interaction metrics in real-time.",
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
              Kioskos
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t({
                es: "Nuestros kioskos interactivos combinan utilidad y marketing de alto impacto. Ofrecen servicios esenciales como carga de dispositivos mientras captan la atención del usuario con interfaces táctiles, juegos y promociones personalizadas.",
                en: "Our interactive kiosks combine utility and high-impact marketing. They offer essential services like device charging while capturing user attention with touch interfaces, games, and personalized promotions.",
              })}
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">{t({ es: "Solicitar demo", en: "Request demo" })}</Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://luisgarciamoreno95.wixsite.com/monster1/kioskos"
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

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5ueP_qWTJbg"
                title="Kioskos Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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
                <img src={src} alt="Kioskos" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}





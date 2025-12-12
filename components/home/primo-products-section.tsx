"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

export function PrimoProductsSection() {
  const { t } = useLanguage()

  const redwolfBase = "/Im%C3%A1genes%20Red%20Wolf-20251024T151820Z-1-001/Im%C3%A1genes%20Red%20Wolf"

  const products = [
    {
      slug: "/primo-print3d",
      name: "PRIMO PRINT 3D",
      tagline: t({ es: "La funda del futuro, on‑demand", en: "The phone case of the future" }),
      bulletPoints: [
        t({ es: "Cualquier dispositivo (biblioteca de miles de modelos)", en: "Any device (library of thousands of models)" }),
        t({ es: "Producción on‑demand, sin inventario", en: "On‑demand production, no inventory" }),
        t({ es: "Velocidad: funda lista en minutos", en: "Speed: case in minutes" }),
        t({ es: "Personalizable: bumper o full case", en: "Customizable: bumper or full case" }),
        t({ es: "Más verde: menos desperdicio", en: "Greener: less waste" }),
      ],
      image: `${redwolfBase}/Case-For-All-Banner.png`,
      cta: t({ es: "Ver más", en: "Learn more" }),
    },
    {
      slug: "/primo-protect",
      name: "PRIMO PROTECT",
      tagline: t({ es: "Protección flexible, crackless y self‑healing", en: "Flexible, crackless, self‑healing protection" }),
      bulletPoints: [
        t({ es: "Crackless: no se quiebra ni astilla", en: "Crackless: won’t crack or chip" }),
        t({ es: "Flexible y de tacto tipo vidrio", en: "Flexible with glass‑like feel" }),
        t({ es: "Self‑healing: se autorrepara ante rayas", en: "Self‑healing for scratches" }),
        t({ es: "Aplicación en seco o húmedo", en: "Wet or dry application" }),
        t({ es: "Corte on‑demand para cualquier modelo", en: "On‑demand cutting for any model" }),
      ],
      image: `${redwolfBase}/Banner-Mockup.png`,
      cta: t({ es: "Ver más", en: "Learn more" }),
    },
    {
      slug: "#",
      name: "EufyMake",
      tagline: t({ es: "Impresión 3D Industrial de Alta Precisión", en: "High Precision Industrial 3D Printing" }),
      bulletPoints: [
        t({ es: "Resolución de hasta 50 micras", en: "Resolution up to 50 microns" }),
        t({ es: "Volumen de construcción de 1m³", en: "Build volume of 1m³" }),
        t({ es: "Materiales: PLA, ABS, PETG, TPU", en: "Materials: PLA, ABS, PETG, TPU" }),
        t({ es: "Ideal para prototipos y producción", en: "Ideal for prototypes and production" }),
        t({ es: "Tecnología de última generación", en: "State-of-the-art technology" }),
      ],
      image: "/placeholder.jpg",
      cta: t({ es: "Ver más", en: "Learn more" }),
    }
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
              {t({ es: "Ecosistema Primo", en: "Primo Ecosystem" })}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t({
                es: "El primer ecosistema on demand para accesorios de telefono",
                en: "The first on-demand ecosystem for phone accessories",
              })}
            </p>
          </div>
        </FadeIn>

        {/* Layout: Imagen Grande Arriba */}
        <FadeIn delay={0.2} fullWidth>
          <GlassCard variant="default" className="mb-12 w-full max-w-6xl mx-auto overflow-hidden">
            <div className="aspect-[21/9] w-full bg-card/50 relative">
              <img
                src="/interactive-table-with-multiple-users.jpg"
                alt="Ecosistema Primo Overview"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </GlassCard>
        </FadeIn>

        {/* Layout: 3 Columnas Abajo */}
        <StaggerContainer delay={0.4} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <GlassCard variant="dark" hoverEffect className="flex flex-col h-full overflow-hidden">
                <div className="aspect-video w-full bg-card/50 overflow-hidden relative group">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-gradient w-fit">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground mb-4">{p.tagline}</p>

                  <ul className="grid gap-2 text-sm text-foreground/90 flex-grow">
                    {p.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-block size-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_5px_var(--primary)]" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4">
                    <Button asChild className="w-full" variant="neon">
                      <Link href={p.slug}>
                        {p.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

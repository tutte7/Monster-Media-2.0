"use client"

import { HeroBackground } from "@/components/ui/hero-background"
import { useLanguage } from "@/lib/language-context"
import { Smartphone, Palette, Zap } from "lucide-react"

export function MonsterMobileHero() {
  const { t, language } = useLanguage()

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {t({ es: "Impresión UV de Alta Calidad", en: "High Quality UV Printing" })}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
            <span className="text-foreground">Monster</span>
            <span className="text-primary"> Mobile</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            {t({
              es: "Representamos a las marcas más importantes en tecnología de protección y 3D",
              en: "We represent the leading brands in protection and 3D technology",
            })}
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 pt-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold whitespace-nowrap">
                  {t({ es: "+5M teléfonos protegidos", en: "+5M phones protected" })}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t({ es: "Experiencia comprobada", en: "Proven track record" })}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">
                  {t({
                    es: "+1,200 tiendas con nuestros productos en México y Latam",
                    en: "+1,200 stores with our products in Mexico and Latam",
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold whitespace-nowrap">
                  {t({ es: "Producción On-Demand", en: "On-Demand production" })}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t({ es: "Sin inventario, listo en minutos", en: "No inventory, ready in minutes" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">
                  {t({ es: "3M+ teléfonos protegidos", en: "3M+ phones protected" })}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t({ es: "Experiencia comprobada", en: "Proven track record" })}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">
                  {t({ es: "Tiendas con nuestros productos", en: "Stores carrying our products" })}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {language === "es" ? (
                    <ul className="list-none space-y-0.5">
                      <li>
                        <strong>Argentina:</strong> Maransi 10, Claro 36
                      </li>
                      <li>
                        <strong>Chile:</strong> Samsung 17, Claro 51
                      </li>
                      <li>
                        <strong>Guatemala:</strong> Samsung 61
                      </li>
                      <li>
                        <strong>México:</strong> Telcel 450, Coppel 206, Palacio de Hierro 18
                      </li>
                      <li className="italic text-primary/80">Próximamente: El Salvador y CRC</li>
                    </ul>
                  ) : (
                    <ul className="list-none space-y-0.5">
                      <li>
                        <strong>Argentina:</strong> Maransi 10, Claro 36
                      </li>
                      <li>
                        <strong>Chile:</strong> Samsung 17, Claro 51
                      </li>
                      <li>
                        <strong>Guatemala:</strong> Samsung 61
                      </li>
                      <li>
                        <strong>Mexico:</strong> Telcel 450, Coppel 206, Palacio de Hierro 18
                      </li>
                      <li className="italic text-primary/80">Coming soon: El Salvador and CRC</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">
                  {t({ es: "Producción on demand", en: "On-demand production" })}
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

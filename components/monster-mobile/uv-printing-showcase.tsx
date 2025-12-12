"use client"

import { useLanguage } from "@/lib/language-context"
import { Sparkles, Shield, Palette, Zap } from "lucide-react"

export function UVPrintingShowcase() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Sparkles,
      title: { es: "Alta Resolución", en: "High Resolution" },
      description: {
        es: "Impresión de hasta 1440 DPI para detalles perfectos",
        en: "Printing up to 1440 DPI for perfect details",
      },
    },
    {
      icon: Shield,
      title: { es: "Durabilidad Extrema", en: "Extreme Durability" },
      description: {
        es: "Resistente a rayones, agua y uso diario intensivo",
        en: "Resistant to scratches, water and intensive daily use",
      },
    },
    {
      icon: Palette,
      title: { es: "Colores Vibrantes", en: "Vibrant Colors" },
      description: {
        es: "Tecnología CMYK + White para colores brillantes",
        en: "CMYK + White technology for brilliant colors",
      },
    },
    {
      icon: Zap,
      title: { es: "Producción Rápida", en: "Fast Production" },
      description: {
        es: "Capacidad de personalización masiva en tiempo récord",
        en: "Mass customization capability in record time",
      },
    },
  ]

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
            {t({
              es: "Tecnología de Impresión UV",
              en: "UV Printing Technology",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "La mejor calidad en personalización de dispositivos móviles",
              en: "The best quality in mobile device customization",
            })}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-xl hover:border-primary transition-colors text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                  {t(feature.title)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(feature.description)}</p>
              </div>
            )
          })}
        </div>

        {/* Process Visualization */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-8 text-center">
            {t({ es: "Proceso de Personalización", en: "Customization Process" })}
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "01", title: { es: "Diseño", en: "Design" } },
              { step: "02", title: { es: "Preparación", en: "Preparation" } },
              { step: "03", title: { es: "Impresión UV", en: "UV Printing" } },
              { step: "04", title: { es: "Control de Calidad", en: "Quality Control" } },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
                  {item.step}
                </div>
                <p className="font-semibold">{t(item.title)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

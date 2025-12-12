"use client"

import { useLanguage } from "@/lib/language-context"
import { Tv, Printer, Cpu, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

export function PrimoEcosystem() {
  const { t } = useLanguage()

  const products = [
    {
      icon: Tv,
      title: { es: "PRIMO TV", en: "PRIMO TV" },
      description: {
        es: "Impresión UV directa sobre pantallas y dispositivos electrónicos",
        en: "Direct UV printing on screens and electronic devices",
      },
      features: [
        { es: "Alta resolución", en: "High resolution" },
        { es: "Durabilidad extrema", en: "Extreme durability" },
        { es: "Colores vibrantes", en: "Vibrant colors" },
      ],
    },
    {
      icon: Printer,
      title: { es: "PRIMO Make", en: "PRIMO Make" },
      description: {
        es: "Impresión 3D industrial de alta precisión para prototipos y producción",
        en: "High-precision industrial 3D printing for prototypes and production",
      },
      features: [
        { es: "Múltiples materiales", en: "Multiple materials" },
        { es: "Gran formato", en: "Large format" },
        { es: "Producción rápida", en: "Fast production" },
      ],
    },
    {
      icon: Cpu,
      title: { es: "PRIMO Interactive", en: "PRIMO Interactive" },
      description: {
        es: "Soluciones interactivas y experiencias digitales inmersivas",
        en: "Interactive solutions and immersive digital experiences",
      },
      features: [
        { es: "Touch screens", en: "Touch screens" },
        { es: "Realidad aumentada", en: "Augmented reality" },
        { es: "Gamificación", en: "Gamification" },
      ],
    },
    {
      icon: Zap,
      title: { es: "PRIMO Robotics", en: "PRIMO Robotics" },
      description: {
        es: "Automatización y robótica para eventos y producción",
        en: "Automation and robotics for events and production",
      },
      features: [
        { es: "Brazos robóticos", en: "Robotic arms" },
        { es: "Automatización", en: "Automation" },
        { es: "Precisión industrial", en: "Industrial precision" },
      ],
    },
  ]

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
            {t({
              es: "Ecosistema PRIMO",
              en: "PRIMO Ecosystem",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "Soluciones tecnológicas integradas para transformar tu negocio",
              en: "Integrated technology solutions to transform your business",
            })}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={index}
                className="p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                      {t(product.title)}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{t(product.description)}</p>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

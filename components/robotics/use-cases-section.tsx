"use client"

import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"
import { Building2, ShoppingBag, Plane, Hospital } from "lucide-react"

export function UseCasesSection() {
  const { t } = useLanguage()

  const useCases = [
    {
      icon: Building2,
      title: { es: "Corporativo", en: "Corporate" },
      description: {
        es: "Recepción de visitantes, guía en oficinas y asistencia en eventos corporativos",
        en: "Visitor reception, office guidance and assistance at corporate events",
      },
      benefits: [
        { es: "Mejora la imagen corporativa", en: "Improves corporate image" },
        { es: "Reduce carga de recepción", en: "Reduces reception workload" },
        { es: "Disponible 24/7", en: "Available 24/7" },
      ],
    },
    {
      icon: ShoppingBag,
      title: { es: "Retail", en: "Retail" },
      description: {
        es: "Asistencia a compradores, información de productos y promociones interactivas",
        en: "Shopper assistance, product information and interactive promotions",
      },
      benefits: [
        { es: "Aumenta engagement", en: "Increases engagement" },
        { es: "Recopila datos de clientes", en: "Collects customer data" },
        { es: "Experiencia memorable", en: "Memorable experience" },
      ],
    },
    {
      icon: Plane,
      title: { es: "Aeropuertos y Transporte", en: "Airports and Transport" },
      description: {
        es: "Información de vuelos, direcciones y asistencia a pasajeros en múltiples idiomas",
        en: "Flight information, directions and passenger assistance in multiple languages",
      },
      benefits: [
        { es: "Reduce congestión", en: "Reduces congestion" },
        { es: "Soporte multilingüe", en: "Multilingual support" },
        { es: "Información en tiempo real", en: "Real-time information" },
      ],
    },
    {
      icon: Hospital,
      title: { es: "Salud y Hospitalidad", en: "Health and Hospitality" },
      description: {
        es: "Guía de pacientes, información de servicios y entretenimiento en áreas de espera",
        en: "Patient guidance, service information and entertainment in waiting areas",
      },
      benefits: [
        { es: "Reduce ansiedad de pacientes", en: "Reduces patient anxiety" },
        { es: "Optimiza flujo de personas", en: "Optimizes people flow" },
        { es: "Información sanitaria", en: "Health information" },
      ],
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
            {t({
              es: "Casos de Uso",
              en: "Use Cases",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "CRUZR se adapta a múltiples industrias y necesidades",
              en: "CRUZR adapts to multiple industries and needs",
            })}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                      {t(useCase.title)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{t(useCase.description)}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary mb-3">{t({ es: "Beneficios:", en: "Benefits:" })}</p>
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{t(benefit)}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

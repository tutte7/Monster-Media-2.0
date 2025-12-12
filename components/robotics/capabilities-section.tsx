"use client"

import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"
import { Users, Navigation, MessageSquare, Camera, Database, Shield } from "lucide-react"

export function CapabilitiesSection() {
  const { t } = useLanguage()

  const capabilities = [
    {
      icon: Users,
      title: { es: "Atención al Cliente", en: "Customer Service" },
      description: {
        es: "Recepción, información y guía de visitantes con interacción personalizada",
        en: "Reception, information and visitor guidance with personalized interaction",
      },
    },
    {
      icon: Navigation,
      title: { es: "Navegación Autónoma", en: "Autonomous Navigation" },
      description: {
        es: "Movimiento inteligente evitando obstáculos y optimizando rutas",
        en: "Smart movement avoiding obstacles and optimizing routes",
      },
    },
    {
      icon: MessageSquare,
      title: { es: "Comunicación Multilingüe", en: "Multilingual Communication" },
      description: {
        es: "Conversaciones naturales en español, inglés y más idiomas",
        en: "Natural conversations in Spanish, English and more languages",
      },
    },
    {
      icon: Camera,
      title: { es: "Visión Artificial", en: "Computer Vision" },
      description: {
        es: "Reconocimiento facial, detección de emociones y análisis de entorno",
        en: "Facial recognition, emotion detection and environment analysis",
      },
    },
    {
      icon: Database,
      title: { es: "Integración de Datos", en: "Data Integration" },
      description: {
        es: "Conexión con sistemas CRM, bases de datos y plataformas empresariales",
        en: "Connection with CRM systems, databases and business platforms",
      },
    },
    {
      icon: Shield,
      title: { es: "Seguridad y Privacidad", en: "Security and Privacy" },
      description: {
        es: "Protección de datos y cumplimiento de normativas de privacidad",
        en: "Data protection and privacy regulation compliance",
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
              es: "Capacidades de CRUZR",
              en: "CRUZR Capabilities",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "Tecnología avanzada para experiencias excepcionales",
              en: "Advanced technology for exceptional experiences",
            })}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <Card key={index} className="p-6 hover:border-primary transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                  {t(capability.title)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t(capability.description)}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

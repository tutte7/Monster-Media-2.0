"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HighlightsSection() {
  const { t } = useLanguage()

  const highlights = [
    {
      category: { es: "Caso de Estudio", en: "Case Study" },
      title: {
        es: "Impresión UV en 500+ Dispositivos",
        en: "UV Printing on 500+ Devices",
      },
      description: {
        es: "Proyecto masivo de personalización para cliente corporativo",
        en: "Massive customization project for corporate client",
      },
      date: "2024",
    },
    {
      category: { es: "Caso de Estudio", en: "Case Study" },
      title: {
        es: "Protect My Phone: corte on-demand en retail",
        en: "Protect My Phone: on-demand cutting in retail",
      },
      description: {
        es: "Despliegue de estaciones para protección y corte a medida en tiendas minoristas.",
        en: "Deployment of protection and on-demand cutting stations across retail stores.",
      },
      date: "2025",
    },
    {
      category: { es: "Innovación", en: "Innovation" },
      title: {
        es: "Robótica en Eventos Masivos",
        en: "Robotics at Massive Events",
      },
      description: {
        es: "Implementación de brazos robóticos en ferias internacionales",
        en: "Implementation of robotic arms at international fairs",
      },
      date: "2024",
    },
    {
      category: { es: "Tecnología", en: "Technology" },
      title: {
        es: "Interactivos de Realidad Aumentada",
        en: "Augmented Reality Interactive",
      },
      description: {
        es: "Experiencias inmersivas para marcas líderes",
        en: "Immersive experiences for leading brands",
      },
      date: "2024",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
            {t({
              es: "Proyectos Destacados",
              en: "Featured Projects",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "Descubre algunos de nuestros proyectos más innovadores",
              en: "Discover some of our most innovative projects",
            })}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 hover:border-primary transition-all duration-300 group">
              <div className="flex items-center gap-2 text-sm text-primary mb-3">
                <Calendar className="h-4 w-4" />
                <span>{highlight.date}</span>
              </div>
              <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium mb-4">
                {t(highlight.category)}
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3 group-hover:text-primary transition-colors">
                {t(highlight.title)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(highlight.description)}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/experiencia">
              {t({ es: "Ver Todos los Proyectos", en: "View All Projects" })}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

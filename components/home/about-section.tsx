"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: { es: "Misión", en: "Mission" },
      description: {
        es: "Transformar ideas en realidad mediante tecnología de vanguardia y soluciones innovadoras.",
        en: "Transform ideas into reality through cutting-edge technology and innovative solutions.",
      },
    },
    {
      icon: Lightbulb,
      title: { es: "Innovación", en: "Innovation" },
      description: {
        es: "Constantemente exploramos nuevas tecnologías para ofrecer las mejores soluciones a nuestros clientes.",
        en: "We constantly explore new technologies to offer the best solutions to our clients.",
      },
    },
    {
      icon: Heart,
      title: { es: "Compromiso", en: "Commitment" },
      description: {
        es: "Dedicados a la excelencia en cada proyecto, garantizando resultados excepcionales.",
        en: "Dedicated to excellence in every project, ensuring exceptional results.",
      },
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t({ es: "Sobre Nosotros", en: "About Us" })}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
              {t({
                es: "Líderes en Innovación Tecnológica",
                en: "Leaders in Technological Innovation",
              })}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              {t({
                es: "Monster Media es la representación oficial de marcas AAA en México y Latinoamérica. Ofrecemos soluciones integrales en impresión 3D, robótica, interactivos y tecnología de vanguardia.",
                en: "Monster Media is the official representation of AAA brands in Mexico and Latin America. We offer comprehensive solutions in 3D printing, robotics, interactive technology and cutting-edge innovation.",
              })}
            </p>

            <Button size="lg" asChild>
              <Link href="/experiencia">
                {t({ es: "Conoce Nuestra Experiencia", en: "Learn About Our Experience" })}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                        {t(value.title)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{t(value.description)}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

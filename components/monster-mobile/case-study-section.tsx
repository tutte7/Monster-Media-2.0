"use client"

import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Target, Trophy, Users } from "lucide-react"

export function CaseStudySection() {
  const { t } = useLanguage()

  const caseStudies = [
    {
      id: "toluca-fc",
      client: "Toluca FC",
      logo: "/toluca-fc-logo-red-and-white.jpg",
      hero: "/toluca-fc-stadium-with-fans-holding-customized-pho.jpg",
      brief: {
        es: "Toluca FC buscaba una forma innovadora de conectar con sus aficionados y crear merchandising exclusivo para la temporada 2023-2024.",
        en: "Toluca FC was looking for an innovative way to connect with their fans and create exclusive merchandise for the 2023-2024 season.",
      },
      objective: {
        es: "Personalizar 500+ dispositivos móviles con el escudo del club y diseños exclusivos para jugadores, staff y fans VIP.",
        en: "Customize 500+ mobile devices with the club's crest and exclusive designs for players, staff and VIP fans.",
      },
      solution: {
        es: "Implementamos impresión UV directa de alta calidad sobre dispositivos móviles, creando diseños únicos que incluían el escudo oficial, colores del equipo y elementos personalizados para cada categoría de usuario.",
        en: "We implemented high-quality direct UV printing on mobile devices, creating unique designs that included the official crest, team colors and personalized elements for each user category.",
      },
      results: [
        {
          icon: Users,
          value: "500+",
          label: { es: "Dispositivos personalizados", en: "Customized devices" },
        },
        {
          icon: Trophy,
          value: "100%",
          label: { es: "Satisfacción del cliente", en: "Client satisfaction" },
        },
        {
          icon: CheckCircle2,
          value: "48h",
          label: { es: "Tiempo de entrega", en: "Delivery time" },
        },
      ],
      gallery: [
        "/toluca-fc-phone-with-red-and-white-design.jpg",
        "/close-up-of-toluca-fc-logo-on-phone-back.jpg",
        "/multiple-toluca-fc-phones-arranged-in-pattern.jpg",
        "/toluca-fc-player-holding-customized-phone.jpg",
      ],
    },
    {
      id: "fifa-2018",
      client: "FIFA World Cup Russia 2018",
      logo: "/fifa-world-cup-russia-2018-logo.jpg",
      hero: "/fifa-world-cup-2018-stadium-with-customized-phones.jpg",
      brief: {
        es: "Durante el Mundial de Fútbol Rusia 2018, se requería crear merchandising oficial exclusivo para delegaciones, prensa y VIPs.",
        en: "During the 2018 Russia World Cup, exclusive official merchandise was needed for delegations, press and VIPs.",
      },
      objective: {
        es: "Producir dispositivos móviles personalizados con la imagen oficial del Mundial, logos de FIFA y diseños conmemorativos del evento.",
        en: "Produce customized mobile devices with the official World Cup image, FIFA logos and commemorative event designs.",
      },
      solution: {
        es: "Desarrollamos una línea completa de dispositivos personalizados con impresión UV de alta durabilidad, incluyendo diseños específicos para cada selección participante y ediciones limitadas conmemorativas.",
        en: "We developed a complete line of customized devices with high-durability UV printing, including specific designs for each participating team and limited commemorative editions.",
      },
      results: [
        {
          icon: Users,
          value: "1000+",
          label: { es: "Dispositivos producidos", en: "Devices produced" },
        },
        {
          icon: Target,
          value: "32",
          label: { es: "Diseños únicos", en: "Unique designs" },
        },
        {
          icon: Trophy,
          value: "Global",
          label: { es: "Alcance internacional", en: "International reach" },
        },
      ],
      gallery: [
        "/fifa-world-cup-2018-phone-with-russia-design.jpg",
        "/multiple-fifa-phones-with-different-country-flags.jpg",
        "/fifa-world-cup-trophy-design-on-phone.jpg",
        "/collection-of-fifa-2018-customized-phones.jpg",
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
              es: "Casos de Éxito",
              en: "Success Stories",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "Proyectos destacados de personalización masiva",
              en: "Featured mass customization projects",
            })}
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="max-w-6xl mx-auto">
              {/* Hero Image */}
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-secondary">
                <img
                  src={study.hero || "/placeholder.svg"}
                  alt={`${study.client} case study`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <img src={study.logo || "/placeholder.svg"} alt={`${study.client} logo`} className="h-16 md:h-20" />
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Brief */}
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 flex items-center gap-2">
                      <div className="h-8 w-1 bg-primary rounded-full" />
                      {t({ es: "Contexto", en: "Context" })}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{t(study.brief)}</p>
                  </div>

                  {/* Objective */}
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 flex items-center gap-2">
                      <div className="h-8 w-1 bg-primary rounded-full" />
                      {t({ es: "Objetivo", en: "Objective" })}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{t(study.objective)}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Solution */}
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 flex items-center gap-2">
                      <div className="h-8 w-1 bg-primary rounded-full" />
                      {t({ es: "Solución", en: "Solution" })}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{t(study.solution)}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 flex items-center gap-2">
                      <div className="h-8 w-1 bg-primary rounded-full" />
                      {t({ es: "Resultados", en: "Results" })}
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, idx) => {
                        const Icon = result.icon
                        return (
                          <Card key={idx} className="p-4 text-center">
                            <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-primary mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-muted-foreground">{t(result.label)}</div>
                          </Card>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
                  {t({ es: "Galería", en: "Gallery" })}
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {study.gallery.map((image, idx) => (
                    <div key={idx} className="aspect-[3/4] rounded-xl overflow-hidden bg-secondary">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${study.client} gallery ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <Button size="lg">{t({ es: "Quiero algo similar", en: "I want something similar" })}</Button>
              </div>

              {/* Divider */}
              {index < caseStudies.length - 1 && <div className="mt-32 border-t border-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

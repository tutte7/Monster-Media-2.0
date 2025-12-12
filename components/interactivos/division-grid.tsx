"use client"

import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Store, Building2, Users } from "lucide-react"

export function DivisionGrid() {
  const { t } = useLanguage()

  const divisions = [
    {
      id: "kioskos",
      icon: Monitor,
      name: { es: "Kioskos", en: "Kiosks" },
      description: {
        es: "Soluciones de autoservicio interactivo para retail, eventos y espacios públicos con pantallas táctiles de alta precisión.",
        en: "Interactive self-service solutions for retail, events and public spaces with high-precision touch screens.",
      },
      features: [
        { es: "Pantallas táctiles multi-touch", en: "Multi-touch screens" },
        { es: "Software personalizado", en: "Custom software" },
        { es: "Integración con sistemas", en: "System integration" },
        { es: "Diseño modular", en: "Modular design" },
      ],
      gallery: [
        "/interactive-kiosk-in-shopping-mall.jpg",
        "/touchscreen-kiosk-with-customer-interaction.jpg",
        "/modern-self-service-kiosk-design.jpg",
        "/multiple-kiosks-in-retail-environment.jpg",
      ],
    },
    {
      id: "digital-signage",
      icon: Smartphone,
      name: { es: "Digital Signage", en: "Digital Signage" },
      description: {
        es: "Pantallas digitales dinámicas para comunicación visual impactante en puntos de venta y espacios corporativos.",
        en: "Dynamic digital displays for impactful visual communication in retail and corporate spaces.",
      },
      features: [
        { es: "Contenido dinámico", en: "Dynamic content" },
        { es: "Gestión remota", en: "Remote management" },
        { es: "Programación horaria", en: "Scheduled programming" },
        { es: "Analytics en tiempo real", en: "Real-time analytics" },
      ],
      gallery: [
        "/digital-signage-display-in-store.jpg",
        "/large-format-digital-screen-advertising.jpg",
        "/interactive-digital-signage-wall.jpg",
        "/digital-menu-board-in-restaurant.jpg",
      ],
    },
    {
      id: "experiencias-ar",
      icon: Store,
      name: { es: "Experiencias AR", en: "AR Experiences" },
      description: {
        es: "Realidad aumentada para crear experiencias memorables que conectan el mundo físico con el digital.",
        en: "Augmented reality to create memorable experiences that connect the physical world with the digital.",
      },
      features: [
        { es: "AR interactivo", en: "Interactive AR" },
        { es: "Reconocimiento de objetos", en: "Object recognition" },
        { es: "Filtros personalizados", en: "Custom filters" },
        { es: "Experiencias compartibles", en: "Shareable experiences" },
      ],
      gallery: [
        "/augmented-reality-product-visualization.jpg",
        "/ar-experience-at-brand-event.jpg",
        "/customer-using-ar-app-in-store.jpg",
        "/ar-interactive-display-with-phone.jpg",
      ],
    },
    {
      id: "mesas-interactivas",
      icon: Building2,
      name: { es: "Mesas Interactivas", en: "Interactive Tables" },
      description: {
        es: "Superficies táctiles multi-usuario para colaboración, presentaciones y experiencias de grupo inmersivas.",
        en: "Multi-user touch surfaces for collaboration, presentations and immersive group experiences.",
      },
      features: [
        { es: "Multi-touch simultáneo", en: "Simultaneous multi-touch" },
        { es: "Reconocimiento de objetos", en: "Object recognition" },
        { es: "Colaboración en tiempo real", en: "Real-time collaboration" },
        { es: "Contenido personalizable", en: "Customizable content" },
      ],
      gallery: [
        "/interactive-table-with-multiple-users.jpg",
        "/touch-table-displaying-product-catalog.jpg",
        "/collaborative-interactive-surface.jpg",
        "/interactive-table-at-corporate-event.jpg",
      ],
    },
    {
      id: "gamificacion",
      icon: Users,
      name: { es: "Gamificación", en: "Gamification" },
      description: {
        es: "Juegos interactivos y experiencias gamificadas para aumentar el engagement y crear conexiones emocionales con las marcas.",
        en: "Interactive games and gamified experiences to increase engagement and create emotional connections with brands.",
      },
      features: [
        { es: "Juegos personalizados", en: "Custom games" },
        { es: "Sistemas de puntos", en: "Point systems" },
        { es: "Leaderboards", en: "Leaderboards" },
        { es: "Premios y recompensas", en: "Prizes and rewards" },
      ],
      gallery: [
        "/gamification-experience-at-event.jpg",
        "/interactive-game-with-brand-elements.jpg",
        "/customers-playing-interactive-game.jpg",
        "/gamified-brand-experience-display.jpg",
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
              es: "Nuestras Soluciones",
              en: "Our Solutions",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "5 divisiones especializadas en tecnología interactiva",
              en: "5 specialized divisions in interactive technology",
            })}
          </p>
        </div>

        {/* Divisions */}
        <div className="space-y-24">
          {divisions.map((division, index) => {
            const Icon = division.icon
            return (
              <div key={division.id} className="max-w-6xl mx-auto">
                <Card className="p-8 md:p-12">
                  {/* Division Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
                        {t(division.name)}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{t(division.description)}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {division.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{t(feature)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Gallery */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {division.gallery.map((image, idx) => (
                      <div key={idx} className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${t(division.name)} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <Button size="lg">{t({ es: "Solicitar Demo", en: "Request Demo" })}</Button>
                  </div>
                </Card>

                {/* Divider */}
                {index < divisions.length - 1 && <div className="mt-24" />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

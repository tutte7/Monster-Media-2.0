"use client"

import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"
import { Megaphone, Plane, ShoppingBag, Handshake, Globe } from "lucide-react"

export function VerticalsSection() {
  const { t } = useLanguage()

  const verticals = [
    {
      id: "btl",
      icon: Megaphone,
      title: { es: "BTL", en: "BTL" },
      description: {
        es: "Experiencias de marketing Below The Line que conectan marcas con consumidores de manera directa y memorable. Activaciones, eventos y campañas experienciales que generan impacto real.",
        en: "Below The Line marketing experiences that connect brands with consumers directly and memorably. Activations, events and experiential campaigns that generate real impact.",
      },
      highlights: [
        { es: "Activaciones de marca", en: "Brand activations" },
        { es: "Eventos masivos y corporativos", en: "Massive and corporate events" },
        { es: "Experiencias inmersivas", en: "Immersive experiences" },
        { es: "Campañas experienciales", en: "Experiential campaigns" },
      ],
    },
    {
      id: "turismo",
      icon: Plane,
      title: { es: "Turismo", en: "Tourism" },
      description: {
        es: "Desarrollamos campañas digitales que posicionan y promueven los destinos turísticos de México a nivel internacional, a través de contenido testimonial auténtico y en tiempo real, conectando con audiencias globales desde la experiencia real del viajero.",
        en: "We develop digital campaigns that position and promote Mexico's tourist destinations internationally, through authentic real-time testimonial content, connecting with global audiences from the traveler's real experience.",
      },
      highlights: [
        { es: "Testimoniales en tiempo real", en: "Real-time testimonials" },
        { es: "Contratación de medios digitales en otros países", en: "Digital media placement in other countries" },
        { es: "La voz auténtica del turista viviendo la experiencia en México", en: "The authentic voice of the tourist living the experience in Mexico" },
        { es: "Viralización orgánica del contenido", en: "Organic content viralization" },
        { es: "*Award Winning Campaign", en: "*Award Winning Campaign" },
      ],
    },
    {
      id: "digital",
      icon: Globe,
      title: { es: "Digital", en: "Digital" },
      description: {
        es: "Creamos y gestionamos estrategias de comercialización digital que integran productos de forma efectiva en plataformas como TikTok Shop, Amazon y Mercado Libre, conectando marcas con audiencias listas para comprar a través de contenido y distribución estratégica.",
        en: "We create and manage digital marketing strategies that effectively integrate products into platforms like TikTok Shop, Amazon, and Mercado Libre, connecting brands with audiences ready to buy through content and strategic distribution.",
      },
      highlights: [
        { es: "Integración de productos a las plataformas", en: "Product integration into platforms" },
        { es: "Estrategias de contenido", en: "Content strategies" },
        { es: "Gestión y optimización de listings", en: "Listing management and optimization" },
      ],
    },
    {
      id: "comercializadora",
      icon: ShoppingBag,
      title: { es: "Comercializadora", en: "Retail" },
      description: {
        es: "Distribución y comercialización de tecnología de vanguardia para el mercado mexicano y latinoamericano. Representación oficial de marcas AAA con soporte integral.",
        en: "Distribution and commercialization of cutting-edge technology for the Mexican and Latin American market. Official representation of AAA brands with comprehensive support.",
      },
      highlights: [
        { es: "Distribución autorizada", en: "Authorized distribution" },
        { es: "Soporte técnico", en: "Technical support" },
        { es: "Garantías oficiales", en: "Official warranties" },
        { es: "Logística LATAM", en: "LATAM logistics" },
      ],
    },
    {
      id: "business-partners",
      icon: Handshake,
      title: { es: "Business Partners", en: "Business Partners" },
      description: {
        es: "Alianzas estratégicas con las marcas más innovadoras del mercado. Trabajamos junto a líderes tecnológicos para ofrecer las mejores soluciones a nuestros clientes.",
        en: "Strategic alliances with the most innovative brands in the market. We work alongside technology leaders to offer the best solutions to our clients.",
      },
      highlights: [
        { es: "Alianzas estratégicas", en: "Strategic alliances" },
        { es: "Representación oficial", en: "Official representation" },
        { es: "Soporte conjunto", en: "Joint support" },
        { es: "Innovación continua", en: "Continuous innovation" },
      ],
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
            {t({
              es: "Nuestros Verticales",
              en: "Our Verticals",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "Experiencia comprobada en múltiples industrias",
              en: "Proven experience across multiple industries",
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {verticals.map((vertical) => {
            const Icon = vertical.icon
            return (
              <Card key={vertical.id} className="p-8 hover:border-primary transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                      {t(vertical.title)}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t(vertical.description)}</p>
                <div className="space-y-2">
                  {vertical.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{t(highlight)}</span>
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

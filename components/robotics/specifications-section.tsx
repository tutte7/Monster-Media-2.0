"use client"

import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"

export function SpecificationsSection() {
  const { t } = useLanguage()

  const specs = [
    {
      category: { es: "Dimensiones", en: "Dimensions" },
      items: [
        { label: { es: "Altura", en: "Height" }, value: "130 cm" },
        { label: { es: "Peso", en: "Weight" }, value: "35 kg" },
        { label: { es: "Velocidad", en: "Speed" }, value: "0-1.2 m/s" },
      ],
    },
    {
      category: { es: "Hardware", en: "Hardware" },
      items: [
        { label: { es: "Pantalla", en: "Display" }, value: '11.6" Touch Screen' },
        { label: { es: "Cámaras", en: "Cameras" }, value: "3D + RGB" },
        { label: { es: "Batería", en: "Battery" }, value: "8-12 horas" },
      ],
    },
    {
      category: { es: "Software", en: "Software" },
      items: [
        { label: { es: "Sistema", en: "System" }, value: "Android + ROS" },
        { label: { es: "IA", en: "AI" }, value: "Deep Learning" },
        { label: { es: "Idiomas", en: "Languages" }, value: "20+" },
      ],
    },
    {
      category: { es: "Conectividad", en: "Connectivity" },
      items: [
        { label: { es: "Red", en: "Network" }, value: "WiFi + 4G" },
        { label: { es: "Integración", en: "Integration" }, value: "API REST" },
        { label: { es: "Cloud", en: "Cloud" }, value: "Sí" },
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
              es: "Especificaciones Técnicas",
              en: "Technical Specifications",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "Tecnología de vanguardia en cada componente",
              en: "Cutting-edge technology in every component",
            })}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specs.map((spec, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-primary">
                {t(spec.category)}
              </h3>
              <div className="space-y-3">
                {spec.items.map((item, idx) => (
                  <div key={idx}>
                    <div className="text-sm text-muted-foreground mb-1">{t(item.label)}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-8 text-center">
            {t({ es: "Preguntas Frecuentes", en: "Frequently Asked Questions" })}
          </h3>
          <div className="space-y-4">
            {[
              {
                q: { es: "¿Cuánto tiempo toma implementar CRUZR?", en: "How long does it take to implement CRUZR?" },
                a: {
                  es: "La implementación típica toma de 2 a 4 semanas, incluyendo personalización y capacitación.",
                  en: "Typical implementation takes 2 to 4 weeks, including customization and training.",
                },
              },
              {
                q: { es: "¿Se puede personalizar la apariencia?", en: "Can the appearance be customized?" },
                a: {
                  es: "Sí, podemos personalizar la interfaz, voz, idiomas y contenido según las necesidades de tu marca.",
                  en: "Yes, we can customize the interface, voice, languages and content according to your brand needs.",
                },
              },
              {
                q: { es: "¿Qué tipo de mantenimiento requiere?", en: "What type of maintenance does it require?" },
                a: {
                  es: "Mantenimiento mínimo: actualizaciones de software remotas y limpieza básica periódica.",
                  en: "Minimal maintenance: remote software updates and periodic basic cleaning.",
                },
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h4 className="font-semibold mb-2">{t(faq.q)}</h4>
                <p className="text-muted-foreground">{t(faq.a)}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

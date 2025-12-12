"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"

export function CruzrShowcase() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Robot Visual */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#a3c413]/20 to-[#44962a]/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <Bot className="h-48 w-48 text-primary mx-auto mb-6" />
                <p className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
                  {t({ es: "Robot interactivo", en: "Interactive Robot" })}
                </p>
                <p className="text-muted-foreground mt-2">
                  {t({ es: "Distribuidores oficiales", en: "Official distributors" })}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
              {t({
                es: "Robots interactivos de última generación",
                en: "Next-gen interactive robots",
              })}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
              {t({
                es: "Somos distribuidores de robots interactivos para retail, eventos y atención al cliente. IA avanzada, reconocimiento facial y navegación autónoma para experiencias memorables.",
                en: "We distribute interactive robots for retail, events, and customer service. Advanced AI, facial recognition, and autonomous navigation for memorable experiences.",
              })}
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: { es: "Reconocimiento Facial", en: "Facial Recognition" },
                  description: {
                    es: "Identifica y saluda a visitantes recurrentes",
                    en: "Identifies and greets returning visitors",
                  },
                },
                {
                  title: { es: "Procesamiento de Lenguaje Natural", en: "Natural Language Processing" },
                  description: {
                    es: "Conversaciones fluidas en múltiples idiomas",
                    en: "Fluent conversations in multiple languages",
                  },
                },
                {
                  title: { es: "Pantalla Táctil Integrada", en: "Integrated Touch Screen" },
                  description: {
                    es: "Interfaz visual para información y navegación",
                    en: "Visual interface for information and navigation",
                  },
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{t(feature.title)}</h3>
                    <p className="text-sm text-muted-foreground">{t(feature.description)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg">{t({ es: "Solicitar Demostración", en: "Request Demo" })}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

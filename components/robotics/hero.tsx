"use client"

import { HeroBackground } from "@/components/ui/hero-background"
import { useLanguage } from "@/lib/language-context"
import { Bot, Cpu, Zap } from "lucide-react"

export function RoboticsHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {t({ es: "Robots interactivos", en: "Interactive Robots" })}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
            {t({
              es: "Robots interactivos de última generación",
              en: "Next-gen interactive robots",
            })}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            {t({
              es: "Somos distribuidores de robots interactivos para retail, eventos y atención al cliente.",
              en: "We are distributors of interactive robots for retail, events, and customer engagement.",
            })}
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t({ es: "IA Avanzada", en: "Advanced AI" })}</div>
                <div className="text-sm text-muted-foreground">
                  {t({ es: "Reconocimiento facial", en: "Facial recognition" })}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t({ es: "Navegación Autónoma", en: "Autonomous Navigation" })}</div>
                <div className="text-sm text-muted-foreground">
                  {t({ es: "Movimiento inteligente", en: "Smart movement" })}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t({ es: "Interacción Natural", en: "Natural Interaction" })}</div>
                <div className="text-sm text-muted-foreground">
                  {t({ es: "Voz y gestos", en: "Voice and gestures" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

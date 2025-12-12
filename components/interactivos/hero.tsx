"use client"

import { useLanguage } from "@/lib/language-context"
import { Sparkles, TouchpadIcon, Gamepad2 } from "lucide-react"

export function InteractivosHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-card to-background">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3c41310_1px,transparent_1px),linear-gradient(to_bottom,#a3c41310_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {t({ es: "Soluciones Interactivas", en: "Interactive Solutions" })}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
            {t({
              es: "Experiencias Digitales Inmersivas",
              en: "Immersive Digital Experiences",
            })}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            {t({
              es: "Tecnología interactiva de vanguardia para eventos, retail y experiencias de marca",
              en: "Cutting-edge interactive technology for events, retail and brand experiences",
            })}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 items-start justify-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t({ es: "Eventos masivos", en: "Massive events" })}</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {t({ es: "Activaciones masivas", en: "Mass activations" })}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TouchpadIcon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t({ es: "Tótems interactivos", en: "Interactive totems" })}</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {t({ es: "Touch screen", en: "Touch screen" })}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t({ es: "Realidad aumentada", en: "Augmented reality" })}</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {t({ es: "Experiencias AR", en: "AR experiences" })}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Gamepad2 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t({ es: "Juegos interactivos", en: "Interactive games" })}</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {t({ es: "Experiencias lúdicas de marca", en: "Playful brand experiences" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

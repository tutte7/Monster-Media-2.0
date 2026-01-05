"use client"

import { useLanguage } from "@/lib/language-context"
import { HeroBackground } from "@/components/ui/hero-background"
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/motion-wrapper"
import { Sparkles, Zap, Globe } from "lucide-react"

export function ContactHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
      <HeroBackground />

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(163,196,19,0.03)_50%,transparent_51%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49%,rgba(163,196,19,0.03)_50%,transparent_51%,transparent_100%)] bg-[size:100px_100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <StaggerContainer delay={0.1} className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <StaggerItem className="flex justify-center">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase backdrop-blur-md flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              {t({ es: "Estamos para ti", en: "We're here for you" })}
            </div>
          </StaggerItem>

          {/* Main Heading */}
          <StaggerItem>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.95] tracking-tighter">
              {t({
                es: "Construyamos",
                en: "Let's Build",
              })}
              <br />
              <span className="text-gradient">
                {t({
                  es: "el futuro juntos",
                  en: "the future together",
                })}
              </span>
            </h1>
          </StaggerItem>

          {/* Subtitle */}
          <StaggerItem>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty font-light">
              {t({
                es: "Desde México para toda Latinoamérica, estamos listos para escuchar tu proyecto y convertirlo en realidad.",
                en: "From Mexico to all of Latin America, we're ready to hear your project and make it a reality.",
              })}
            </p>
          </StaggerItem>

          {/* Stats/Features */}
          <StaggerItem>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">{t({ es: "Respuesta", en: "Response" })}</p>
                  <p className="font-semibold">{t({ es: "En 24 horas", en: "Within 24h" })}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">{t({ es: "Cobertura", en: "Coverage" })}</p>
                  <p className="font-semibold">{t({ es: "México & LATAM", en: "Mexico & LATAM" })}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

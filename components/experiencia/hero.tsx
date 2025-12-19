"use client"

import { useLanguage } from "@/lib/language-context"
import { HeroBackground } from "@/components/ui/hero-background"

export function ExperienciaHero() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            {t({ es: "Nuestra Experiencia", en: "Our Experience" })}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
            {t({
              es: "Más de 25 años de innovación",
              en: "Over 25 years of innovation",
            })}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            {t({
              es: "100% mexicana desde 2008 | Telco | Telecomunicaciones | Experiencias BTL | Innovación",
              en: "100% Mexican since 2008 | Telco | Telecommunications | BTL Experiences | Innovation",
            })}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t({
              es: "Empresa 100% Mexicana con más de 25 años de experiencia en Retail, Marketing BTL, Producción de Eventos, E-Commerce, Telefonía y ahora también Robótica.",
              en: "100% Mexican company with over 25 years of experience in Retail, BTL Marketing, Event Production, E-Commerce, Telephony and now also Robotics.",
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

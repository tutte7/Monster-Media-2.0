"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { HeroBackground } from "@/components/ui/hero-background"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background">
      <HeroBackground />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          <StaggerContainer delay={0.2} className="space-y-6">
            {/* Badge/Label */}
            <StaggerItem className="flex justify-center">
              <div className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase backdrop-blur-md">
                Monster Media 2.0
              </div>
            </StaggerItem>

            {/* Main Heading */}
            <StaggerItem>
              <h1 className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.9] text-balance tracking-tighter">
                {t({
                  es: "Innovación y Tecnología",
                  en: "Innovation and Technology",
                })}
                <br />
                <span className="text-gradient drop-shadow-lg">
                  {t({
                    es: "para Latinoamérica",
                    en: "for Latin America",
                  })}
                </span>
              </h1>
            </StaggerItem>

            {/* Subtitle */}
            <StaggerItem>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty font-light whitespace-pre-line">
                {t({
                  es: "Representación de marcas, Impresión 3D, soluciones On-Demand\npara telefonía, Robótica e Interactivos para México y LATAM",
                  en: "Brand representation, 3D Printing, On-Demand solutions\nfor telephony, Robotics and Interactives for Mexico and LATAM",
                })}
              </p>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" variant="neon" asChild className="text-lg px-8 h-12 rounded-full">
                <Link href="/contacto">
                  {t({ es: "Contáctanos", en: "Contact Us" })}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-12 rounded-full flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </StaggerItem>
          </StaggerContainer>

          {/* Visual indicators */}
          <FadeIn delay={0.8} direction="up">
            <div className="pt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground font-mono">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)] animate-pulse" />
                <span>{t({ es: "Ecosistema PRIMO", en: "PRIMO Ecosystem" })}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-[#44962a] shadow-[0_0_10px_#44962a] animate-pulse" />
                <span>{t({ es: "Impresión UV", en: "UV Printing" })}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse" />
                <span>{t({ es: "Robótica", en: "Robotics" })}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

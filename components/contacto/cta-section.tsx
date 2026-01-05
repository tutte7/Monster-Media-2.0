"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, Phone, Video, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function ContactCTA() {
  const { t } = useLanguage()

  const ctaOptions = [
    {
      icon: Phone,
      title: { es: "Llámanos", en: "Call us" },
      description: { es: "Habla directamente con un asesor", en: "Speak directly with an advisor" },
      action: { es: "Llamar ahora", en: "Call now" },
      href: "tel:+525512345678",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Video,
      title: { es: "Agenda una videollamada", en: "Schedule a video call" },
      description: { es: "Reunión virtual personalizada", en: "Personalized virtual meeting" },
      action: { es: "Agendar", en: "Schedule" },
      href: "#form",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: { es: "Descarga nuestro catálogo", en: "Download our catalog" },
      description: { es: "Conoce todos nuestros productos", en: "Learn about all our products" },
      action: { es: "Descargar PDF", en: "Download PDF" },
      href: "#",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full border border-primary/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-primary/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            {t({ es: "Más formas de conectar", en: "More ways to connect" })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t({
              es: "Elige la opción que mejor se adapte a tus necesidades",
              en: "Choose the option that best fits your needs",
            })}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <FadeIn key={index} delay={0.1 * (index + 1)} direction="up">
                <GlassCard variant="default" hoverEffect className="p-8 text-center h-full flex flex-col">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                    {t(option.title)}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {t(option.description)}
                  </p>
                  <Button variant="outline" className="w-full group" asChild>
                    <a href={option.href}>
                      {t(option.action)}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </GlassCard>
              </FadeIn>
            )
          })}
        </div>

        {/* Trust badges */}
        <FadeIn delay={0.5} className="mt-20">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500/80" />
              <span>{t({ es: "Respuesta garantizada en 24h", en: "Response guaranteed in 24h" })}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary/80" />
              <span>{t({ es: "Sin compromiso", en: "No commitment" })}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500/80" />
              <span>{t({ es: "Asesoría personalizada", en: "Personalized advice" })}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

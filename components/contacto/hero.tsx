"use client"

import { useLanguage } from "@/lib/language-context"

export function ContactHero() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
            {t({
              es: "Hablemos",
              en: "Let's Talk",
            })}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
            {t({
              es: "Estamos listos para ayudarte a transformar tus ideas en realidad",
              en: "We're ready to help you transform your ideas into reality",
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

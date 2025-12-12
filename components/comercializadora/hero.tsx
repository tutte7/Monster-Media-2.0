"use client"

import { useLanguage } from "@/lib/language-context"

export function ComercializadoraHero() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
      <div 
        className="absolute inset-0 opacity-20 bg-[url('/large-format-digital-screen-advertising.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight text-foreground mb-6">
          {t({ es: "COMERCIALIZADORA", en: "DISTRIBUTION" })}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t({ 
            es: "Conectamos marcas con consumidores a través de canales digitales y retail estratégico.", 
            en: "Connecting brands with consumers through digital channels and strategic retail." 
          })}
        </p>
      </div>
    </section>
  )
}


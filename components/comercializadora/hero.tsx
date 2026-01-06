"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { motion } from "framer-motion"

export function ComercializadoraHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
      <div 
        className="absolute inset-0 opacity-10 bg-[url('/large-format-digital-screen-advertising.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tighter text-foreground mb-8">
            {t({ es: "COMERCIALIZADORA", en: "DISTRIBUTION" })}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t({ 
              es: "Conectamos marcas con consumidores a través de canales digitales y retail estratégico.", 
              en: "Connecting brands with consumers through digital channels and strategic retail." 
            })}
          </p>
        </div>

        {/* Visual Schema directly under title/desc */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Subtle glow behind image */}
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50" />
          
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm p-4 md:p-8">
            <Image
              src="/Esquema-de-representacion-distribucion.jpeg"
              alt="Esquema de representación y distribución"
              width={1200}
              height={675}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}


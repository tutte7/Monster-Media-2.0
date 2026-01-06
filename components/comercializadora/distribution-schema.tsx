"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function DistributionSchema() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decortive background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary-foreground)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t({ es: "Logística ESTRATÉGICA", en: "STRATEGIC Logistics" })}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 tracking-tight">
              {t({ 
                es: "Esquema de Representación", 
                en: "Representation Schema" 
              })}
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              {t({
                es: "Nuestra estructura integral diseñada para conectar marcas globales con el mercado latinoamericano de manera eficiente.",
                en: "Our comprehensive structure designed to efficiently connect global brands with the Latin American market."
              })}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl">
              <div className="aspect-[16/9] relative md:p-8 flex items-center justify-center bg-gradient-to-b from-white/[0.02] to-transparent">
                <Image
                  src="/Esquema-de-representacion-distribucion.jpeg"
                  alt="Esquema de representación y distribución"
                  fill
                  className="object-contain p-6 md:p-12 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

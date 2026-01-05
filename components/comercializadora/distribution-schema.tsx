"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function DistributionSchema() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              {t({ 
                es: "ESQUEMA DE REPRESENTACIÓN Y DISTRIBUCIÓN", 
                en: "REPRESENTATION AND DISTRIBUTION SCHEMA" 
              })}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t({
                es: "Nuestra estructura logística y comercial diseñada para maximizar el alcance de tu marca.",
                en: "Our logistical and commercial structure designed to maximize your brand's reach."
              })}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl"
          >
            <div className="aspect-[16/9] relative">
              <Image
                src="/Esquema-de-representacion-distribucion.jpeg"
                alt="Esquema de representación y distribución"
                fill
                className="object-contain p-4 md:p-8"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

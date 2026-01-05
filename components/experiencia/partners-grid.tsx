"use client"

import { useLanguage } from "@/lib/language-context"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

export function PartnersGrid() {
  const { t } = useLanguage()

  const partners = [
    { name: "Xiaomi", logo: "/Nuestros-Socios/Logo-xiaomi.png" },
    { name: "PRIMO CRAFT", logo: "/primo-craft-hd.png" },
    { name: "PRIMO PROTECT", logo: "/Nuestros-Socios/Logo-Primo-Protect.png" },
    { name: "OPPO", logo: "/Nuestros-Socios/Logo-oppo.png" },
    { name: "Vivo", logo: "/Nuestros-Socios/Logo-vivo.png" },
    { name: "Argon Tec", logo: "/Nuestros-Socios/Logo-argom.png" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
            {t({
              es: "Nuestros Partners",
              en: "Our Partners",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "Trabajamos con las marcas más innovadoras del mercado",
              en: "We work with the most innovative brands in the market",
            })}
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div
                className="group relative aspect-[3/2] bg-white rounded-[2.5rem] p-8 md:p-10 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-black/[0.03] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={partner.logo || `/placeholder.svg?height=80&width=160&query=${partner.name} logo`}
                  alt={`${partner.name} logo`}
                  className="relative z-10 max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

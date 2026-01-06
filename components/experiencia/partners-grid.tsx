"use client"

import { useLanguage } from "@/lib/language-context"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

export function PartnersGrid() {
  const { t } = useLanguage()

  const partners = [
    { name: "Xiaomi", logo: "/Nuestros-Socios/Logo-xiaomi.png" },
    { name: "Samsung", logo: "/Nuestros-Socios/Logo-samsung.png" },
    { name: "Vivo", logo: "/Nuestros-Socios/Logo-vivo.png" },
    { name: "OPPO", logo: "/Nuestros-Socios/Logo-oppo.png" },
    { name: "Argom", logo: "/Nuestros-Socios/Logo-argom.png" },
    { name: "Primo Protect", logo: "/Nuestros-Socios/Logo-Primo-Protect.png" },
    { name: "Primo Craft", logo: "/Nuestros-Socios/Primo-Craft-Pruea.png" },
    { name: "Primo 3D", logo: "/Nuestros-Socios/Logo-Primo3d.png" },
    { name: "Red Wolf", logo: "/Nuestros-Socios/Logo-red-wolf.png" },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-white tracking-tight">
            {t({
              es: "Nuestros Partners",
              en: "Our Partners",
            })}
          </h2>
          <p className="text-lg text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed">
            {t({
              es: "Trabajamos con las marcas más innovadoras del mercado",
              en: "We work with the most innovative brands in the market",
            })}
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 w-full">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div
                className="group flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-20 md:h-24 w-full flex items-center justify-center">
                  <img
                    src={partner.logo || `/placeholder.svg?height=80&width=160&query=${partner.name} logo`}
                    alt={`${partner.name} logo`}
                    className="max-h-full w-auto max-w-[85%] object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 rounded-[20px]"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/30 group-hover:text-primary transition-colors duration-500 text-center">
                  {partner.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

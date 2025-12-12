"use client"

import { useLanguage } from "@/lib/language-context"

export function PartnersGrid() {
  const { t } = useLanguage()

  const partners = [
    { name: "Xiaomi", logo: "/logos/xiaomi-logo-gray.svg" },
    { name: "PRIMO 3D", logo: "/logos/primo-3d-logo-gray.svg" },
    { name: "PRIMO PROTECT", logo: "/logos/primo-protect-logo-gray.svg" },
    { name: "OPPO", logo: "/logos/oppo-logo-gray.svg" },
    { name: "Vivo", logo: "/logos/vivo-logo-gray.svg" },
    { name: "Argon Tec", logo: "/logos/argon-tec-logo-gray.svg" },
    { name: "AFM", logo: "/logos/afm-logo-gray.svg" },
  ]

  return (
    <section className="py-24 bg-secondary/20">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="aspect-[3/2] bg-card border border-border rounded-lg p-6 flex items-center justify-center hover:border-primary transition-colors"
            >
              <img
                src={partner.logo || `/placeholder.svg?height=80&width=160&query=${partner.name} logo`}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

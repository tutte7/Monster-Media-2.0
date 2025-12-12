"use client"

import { useLanguage } from "@/lib/language-context"

export function PartnersSection() {
  const { t } = useLanguage()

  const partners = [
    { name: "PRIMO", category: "Ecosystem", logo: "/logos/primo-3d-logo-gray.svg" },
    { name: "Argom", category: "Tech Accessories", logo: "/logos/argon-tec-logo-gray.svg" },
    { name: "Wmedia", category: "Media", logo: "/logos/logowmedia.png" },
    { name: "Kami Kare", category: "Services", logo: "/placeholder-logo.svg" }, // Placeholder for Kami Kare if no logo exists
    { name: "Vivo", category: "Devices", logo: "/logos/vivo-logo-gray.svg" },
    { name: "Bamboo Labs", category: "3D Printing", logo: "/placeholder-logo.svg" }, // Placeholder for Bamboo Labs
    { name: "Eufy Make", category: "Industrial Printing", logo: "/placeholder-logo.svg" }, // Placeholder for Eufy Make
  ]

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
            {t({
              es: "Nuestros Socios",
              en: "Our Partners",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "Colaboramos con las mejores marcas para ofrecer soluciones de clase mundial",
              en: "We collaborate with the best brands to offer world-class solutions",
            })}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
            >
              <img
                src={partner.logo || `/placeholder.svg?height=60&width=120&query=${partner.name}`}
                alt={`${partner.name} logo`}
                className="max-h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-xs text-muted-foreground mt-3 font-medium uppercase tracking-wider">{partner.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

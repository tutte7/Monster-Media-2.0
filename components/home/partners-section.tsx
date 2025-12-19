"use client"

import { useLanguage } from "@/lib/language-context"

export function PartnersSection() {
  const { t } = useLanguage()

  const partners = [
    { name: "Red Wolf", logo: "/logo-socios/redwolftech.jpg" },
    { name: "Primo UV", logo: "/logos/primo-protect-logo-gray.svg" },
    { name: "Primo Craft", logo: "/logos/primo-3d-logo-gray.svg" },
    { name: "Primo 3D", logo: "/logo-socios/primoprint3d.png" },
    { name: "América Móvil", logo: "/logo-socios/americamovil.JPG" },
    { name: "Telcel", logo: "/logo-socios/Telcel Logo 3.png" },
    { name: "Coppel", logo: "/logo-socios/coppel_logo2.jpg" },
    { name: "Claro", logo: "/logo-socios/Logo Claro .png" },
    { name: "Samsung", logo: "/logo-socios/LOGO SAMSUNG.png" },
    { name: "Palacio de Hierro", logo: "/logo-socios/ElPalacioDelHierro.PNG" },
    { name: "La Casa del Audio", logo: "/logo-socios/casadelaudio_logo3.png" },
    { name: "Kami Care", logo: "/logos/mybatpro_logo.png" },
    { name: "Medaica", logo: "/logos/Merck logo.png" },
    { name: "Vivo", logo: "/logo-socios/Vivo.PNG" },
    { name: "Argom", logo: "/logo-socios/Argom.WEBP" },
    { name: "WMedia", logo: "/logo-socios/logowmedia.png" },
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
              es: "Colaboramos con marcas líderes para ofrecer soluciones de clase mundial, respaldadas por altos estándares de calidad, innovación y excelencia.",
              en: "We collaborate with leading brands to offer world-class solutions, backed by high standards of quality, innovation, and excellence.",
            })}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300 group border border-white/5"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-16 w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              />
              <div className="text-[10px] text-muted-foreground mt-3 font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

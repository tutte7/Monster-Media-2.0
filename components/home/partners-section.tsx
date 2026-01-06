"use client"

import { useLanguage } from "@/lib/language-context"

export function PartnersSection() {
  const { t } = useLanguage()

  // Partners list
  const allPartners = [
    { name: "Xiaomi", logo: "/Nuestros-Socios/Logo-xiaomi.png" },
    { name: "Samsung", logo: "/Nuestros-Socios/Logo-samsung.png" },
    { name: "Vivo", logo: "/Nuestros-Socios/Logo-vivo.png" },
    { name: "OPPO", logo: "/Nuestros-Socios/Logo-oppo.png" },
    { name: "Argom", logo: "/Nuestros-Socios/Logo-argom.png" },
    { name: "América Móvil", logo: "/Nuestros-Socios/Logo-america.png" },
    { name: "Telcel", logo: "/Nuestros-Socios/Logo-telcel.png" },
    { name: "Claro", logo: "/Nuestros-Socios/Logo-claro.png" },
    { name: "Coppel", logo: "/Nuestros-Socios/Logo-coppel.png" },
    { name: "Palacio de Hierro", logo: "/Nuestros-Socios/Logo-palacio.png" },
    { name: "La Casa del Audio", logo: "/Nuestros-Socios/Logo-casa-audio.png" },
    { name: "Red Wolf", logo: "/Nuestros-Socios/Logo-red-wolf.png" },
    { name: "Primo Protect", logo: "/Nuestros-Socios/Logo-Primo-Protect.png" },
    { name: "Primo 3D", logo: "/Nuestros-Socios/Logo-Primo3d.png" },
    { name: "Primo Craft", logo: "/Nuestros-Socios/Primo-Craft-Pruea.png" },
    { name: "Medaica", logo: "/Nuestros-Socios/Logo-medaica.png" },
    { name: "WMedia", logo: "/Nuestros-Socios/Logo-wmedia.png" },
  ]

  return (
    <section className="py-24 md:py-40 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {t({
                es: "Alianzas Estratégicas",
                en: "Strategic Alliances",
              })}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-8 text-white tracking-tight">
            {t({
              es: "Nuestros Socios",
              en: "Trusted by Leaders",
            })}
          </h2>
          <p className="text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
            {t({
              es: "Colaboramos con marcas líderes para ofrecer soluciones de clase mundial, respaldadas por altos estándares de calidad, innovación y excelencia.",
              en: "We collaborate with leading brands to offer world-class solutions, backed by high standards of quality, innovation, and excellence.",
            })}
          </p>
        </div>

        {/* Minimalist Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12 items-center">
          {allPartners.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-20 md:h-24 w-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full w-auto max-w-[85%] object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 rounded-[20px]"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/30 group-hover:text-primary transition-colors duration-500 text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-40 pt-20 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          <StatItem 
            value="16+" 
            label={t({ es: "Socios Activos", en: "Active Partners" })} 
          />
          <StatItem 
            value="10+" 
            label={t({ es: "Años de Alianzas", en: "Years of Trust" })} 
          />
          <StatItem 
            value="5" 
            label={t({ es: "Industrias", en: "Industries" })} 
          />
          <StatItem 
            value="100%" 
            label={t({ es: "Compromiso", en: "Commitment" })} 
          />
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center group">
      <div className="text-4xl font-bold text-white/90 mb-3 font-[family-name:var(--font-space-grotesk)] group-hover:text-primary transition-colors duration-500">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40 font-bold">
        {label}
      </div>
    </div>
  )
}

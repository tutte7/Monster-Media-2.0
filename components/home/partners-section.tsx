"use client"

import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"

export function PartnersSection() {
  const { t } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Partners categorized by type
  const techPartners = [
    { name: "Samsung", logo: "/Nuestros-Socios/Logo-samsung.png", category: "tech" },
    { name: "Vivo", logo: "/Nuestros-Socios/Logo-vivo.png", category: "tech" },
    { name: "Argom", logo: "/Nuestros-Socios/Logo-argom.png", category: "tech" },
  ]

  const telecomPartners = [
    { name: "América Móvil", logo: "/Nuestros-Socios/Logo-america.png", category: "telecom" },
    { name: "Telcel", logo: "/Nuestros-Socios/Logo-telcel.png", category: "telecom" },
    { name: "Claro", logo: "/Nuestros-Socios/Logo-claro.png", category: "telecom" },
  ]

  const retailPartners = [
    { name: "Coppel", logo: "/Nuestros-Socios/Logo-coppel.png", category: "retail" },
    { name: "Palacio de Hierro", logo: "/Nuestros-Socios/Logo-palacio.png", category: "retail" },
    { name: "La Casa del Audio", logo: "/Nuestros-Socios/Logo-casa-audio.png", category: "retail" },
  ]

  const primoEcosystem = [
    { name: "Red Wolf", logo: "/Nuestros-Socios/Logo-red-wolf.png", category: "primo" },
    { name: "Primo Protect", logo: "/Nuestros-Socios/Logo-Primo-Protect.png", category: "primo" },
    { name: "Primo Craft", logo: "/primo-craft-hd.png", category: "primo" },
    { name: "Primo 3D", logo: "/Nuestros-Socios/Logo-Primo3d.png", category: "primo" },
  ]

  const mediaPartners = [
    { name: "Medaica", logo: "/Nuestros-Socios/Logo-medaica.png", category: "media" },
    { name: "WMedia", logo: "/Nuestros-Socios/Logo-wmedia.png", category: "media" },
  ]

  const allPartners = [
    ...primoEcosystem,
    ...telecomPartners,
    ...retailPartners,
    ...techPartners,
    ...mediaPartners,
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/50 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {t({
                es: "Alianzas Estratégicas",
                en: "Strategic Alliances",
              })}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
            {t({
              es: "Nuestros Socios",
              en: "Our Partners",
            })}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
            {t({
              es: "Colaboramos con marcas líderes para ofrecer soluciones de clase mundial, respaldadas por altos estándares de calidad, innovación y excelencia.",
              en: "We collaborate with leading brands to offer world-class solutions, backed by high standards of quality, innovation, and excellence.",
            })}
          </p>
        </div>

        {/* Infinite Scroll Marquee - Row 1 */}
        <div 
          className="relative mb-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden">
            <div 
              className={`flex gap-6 md:gap-8 animate-marquee ${isHovered ? '[animation-play-state:paused]' : ''}`}
              style={{ '--marquee-duration': '35s' } as React.CSSProperties}
            >
              {[...allPartners, ...allPartners].map((partner, index) => (
                <PartnerCard key={`row1-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>

        {/* Infinite Scroll Marquee - Row 2 (Reverse) */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden">
            <div 
              className={`flex gap-6 md:gap-8 animate-marquee-reverse ${isHovered ? '[animation-play-state:paused]' : ''}`}
              style={{ '--marquee-duration': '40s' } as React.CSSProperties}
            >
              {[...allPartners.reverse(), ...allPartners].map((partner, index) => (
                <PartnerCard key={`row2-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          <StatCard 
            value="16+" 
            label={t({ es: "Socios Activos", en: "Active Partners" })} 
          />
          <StatCard 
            value="10+" 
            label={t({ es: "Años de Alianzas", en: "Years of Alliances" })} 
          />
          <StatCard 
            value="5" 
            label={t({ es: "Industrias", en: "Industries" })} 
          />
          <StatCard 
            value="100%" 
            label={t({ es: "Compromiso", en: "Commitment" })} 
          />
        </div>
      </div>

      {/* Custom Styles for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee var(--marquee-duration, 30s) linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse var(--marquee-duration, 30s) linear infinite;
        }
      `}</style>
    </section>
  )
}

function PartnerCard({ partner }: { partner: { name: string; logo: string; category: string } }) {
  return (
    <div 
      className="
        group relative flex-shrink-0 w-44 md:w-56 h-28 md:h-32
        flex items-center justify-center
        bg-secondary/30 hover:bg-secondary/50
        backdrop-blur-sm rounded-2xl
        border border-white/5 hover:border-white/20
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-2xl hover:shadow-white/5
        cursor-pointer
      "
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Logo */}
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="h-14 md:h-16 w-auto max-w-[85%] object-contain 
          opacity-70 grayscale
          group-hover:opacity-100 group-hover:grayscale-0
          transition-all duration-300"
        loading="lazy"
      />
      
      {/* Partner Name Tooltip */}
      <div className="
        absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full
        px-3 py-1.5 rounded-lg
        bg-foreground text-background
        text-xs font-medium whitespace-nowrap
        opacity-0 group-hover:opacity-100
        scale-90 group-hover:scale-100
        transition-all duration-300 delay-100
        pointer-events-none z-20
        shadow-xl
      ">
        {partner.name}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
      </div>
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors duration-300">
      <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </div>
  )
}

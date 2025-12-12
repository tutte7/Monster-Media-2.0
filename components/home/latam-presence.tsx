"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { MapPin, Users, Building2, Award, ShieldCheck, Store, Timer } from "lucide-react"
import { cn } from "@/lib/utils"

export function LatamPresence() {
  const { t } = useLanguage()
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const stats = [
    {
      icon: MapPin,
      value: "15+",
      label: { es: "Países en LATAM", en: "Countries in LATAM" },
    },
    {
      icon: Building2,
      value: "800+",
      label: { es: "Número de Tiendas", en: "Number of Stores" },
    },
    {
      icon: Users,
      value: "200+",
      label: { es: "Socios Estratégicos", en: "Strategic Partners" },
    },
    {
      icon: Award,
      value: "25+",
      label: { es: "Años de Experiencia", en: "Years of Experience" },
    },
    {
      icon: ShieldCheck,
      value: "5M+",
      label: { es: "Dispositivos Protegidos", en: "Protected Devices" },
    },
  ]

  /* 
    Coordenadas ajustadas para el mapa SVG (ViewBox 2752 x 1537).
    Ajuste manual para alinear con la geografía visual.
  */
  const countries = [
    {
      id: "mx",
      name: { es: "México", en: "Mexico" },
      flag: "🇲🇽",
      stores: ["Telcel (450)", "Coppel (206)", "Palacio de Hierro (18)"],
      left: "35%",
      top: "12%",
    },
    {
      id: "gt",
      name: { es: "Guatemala", en: "Guatemala" },
      flag: "🇬🇹",
      stores: ["Samsung (61)"],
      left: "42%",
      top: "17%",
    },
    {
      id: "sv",
      name: { es: "El Salvador", en: "El Salvador" },
      flag: "🇸🇻",
      stores: ["Próximamente"],
      left: "41.5%",
      top: "20.5%",
      comingSoon: true,
    },
    {
      id: "cr",
      name: { es: "Costa Rica", en: "Costa Rica" },
      flag: "🇨🇷",
      stores: ["Próximamente"],
      left: "44%",
      top: "25%",
      comingSoon: true,
    },
    {
      id: "cl",
      name: { es: "Chile", en: "Chile" },
      flag: "🇨🇱",
      stores: ["Claro (51)", "Samsung (17)"],
      left: "53%",
      top: "71%",
    },
    {
      id: "ar",
      name: { es: "Argentina", en: "Argentina" },
      flag: "🇦🇷",
      stores: ["Claro (36)", "Maransi (10)"],
      left: "59%",
      top: "76%",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            {t({
              es: "Presencia en Latinoamérica",
              en: "Presence in Latin America",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            {t({
              es: "Conectando innovación y tecnología en toda la región con una red en constante expansión.",
              en: "Connecting innovation and technology across the region with an ever-expanding network.",
            })}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 max-w-6xl mx-auto mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{t(stat.label)}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Interactive Map Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* 
            Geometry Update: The SVG viewBox is 0 0 2752.77 1537.63.
            To prevent letterboxing and pin drift, the container aspect ratio MUST match 2752.77 / 1537.63 ≈ 1.7902.
            We use aspect-[275/154] effectively.
          */}
          <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl" style={{ aspectRatio: '2752 / 1537' }}>

            {/* 1. Map Image - Perfectly fitted */}
            <img
              src="/Map-Latin_America.svg"
              alt="Mapa Latinoamérica"
              className="absolute h-full w-auto top-0 left-1/2 -translate-x-1/2 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />

            {/* 2. Interactive Pins Layer */}
            <div className="absolute inset-0 z-10">
              {countries.map((country) => (
                <div
                  key={country.id}
                  className="absolute group cursor-pointer"
                  style={{ left: country.left, top: country.top }}
                  onMouseEnter={() => setHoveredCountry(country.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  onClick={() => setHoveredCountry(country.id === hoveredCountry ? null : country.id)}
                >
                  {/* Hit Area */}
                  <div className="absolute -inset-6 rounded-full bg-transparent" />

                  <div className="relative flex flex-col items-center">
                    {/* Radar Effect */}
                    <div className={cn(
                      "absolute w-12 h-12 rounded-full border border-primary/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] -z-10",
                      country.comingSoon ? "border-yellow-500/30" : "border-primary/30",
                      hoveredCountry === country.id ? "opacity-100" : "opacity-30"
                    )} />

                    {/* Pin Core */}
                    <div className={cn(
                      "relative flex items-center justify-center w-4 h-4 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]",
                      country.comingSoon
                        ? "bg-yellow-500 shadow-yellow-500/50"
                        : "bg-primary shadow-primary/50",
                      hoveredCountry === country.id ? "scale-150" : "scale-100"
                    )}>
                      <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    </div>

                    {/* Label */}
                    <div className={cn(
                      "absolute top-6 whitespace-nowrap px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 text-xs font-medium text-white transition-all duration-300 pointer-events-none z-20 flex items-center gap-2 shadow-xl origin-top",
                      hoveredCountry === country.id ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 -translate-y-2"
                    )}>
                      <span className="text-base leading-none">{country.flag}</span>
                      <span>{t(country.name)}</span>
                      {country.comingSoon && <span className="text-[10px] text-yellow-500 bg-yellow-500/10 px-1.5 py-0.5 rounded ml-1 font-bold">SOON</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Info Panel (Floating) */}
            <div className={cn(
              "absolute bottom-6 left-6 z-20 w-72 md:w-80 transition-all duration-500 transform origin-bottom-left",
              hoveredCountry ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
            )}>
              <div className="bg-black/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

                {hoveredCountry && (() => {
                  const country = countries.find(c => c.id === hoveredCountry)!
                  return (
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl shadow-sm">{country.flag}</span>
                          <div>
                            <h3 className="font-bold text-lg text-white leading-none tracking-tight">{t(country.name)}</h3>
                            <p className="text-xs text-muted-foreground mt-1">Monster Media Network</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className={cn(
                          "text-[10px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5",
                          country.comingSoon ? "text-yellow-500" : "text-primary"
                        )}>
                          {country.comingSoon ? <Timer className="h-3 w-3" /> : <Store className="h-3 w-3" />}
                          {country.comingSoon
                            ? t({ es: "Próximamente", en: "Coming Soon" })
                            : t({ es: "Puntos de Venta", en: "Retail Points" })
                          }
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {country.stores.map((store, i) => (
                            <span key={i} className={cn(
                              "px-2.5 py-1 rounded-md text-xs font-medium border transition-colors",
                              country.comingSoon
                                ? "bg-yellow-500/10 text-yellow-200 border-yellow-500/20"
                                : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"
                            )}>
                              {store}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

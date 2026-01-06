"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroBackground } from "@/components/ui/hero-background"
import { useLanguage } from "@/lib/language-context"

export default function FifaRussia2018Page() {
  const { t } = useLanguage()

  const gallery = [
    "/portada-rusia.png",
    "/fifa-world-cup-2018-stadium-with-customized-phones.jpg",
    "/fifa-world-cup-2018-phone-with-russia-design.jpg",
    "/multiple-fifa-phones-with-different-country-flags.jpg",
  ]

  const videos = [
    {
      title: "Micas SNM 2018",
      src: "https://www.youtube.com/embed/iecn2_0QxYQ",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-background">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Monster Mobile
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
              {t({ es: "Mundial FIFA Rusia 2018", en: "FIFA World Cup Russia 2018" })}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t({
                es: "Micas con 3 diseños exclusivos de la Selección Mexicana, disponibles para cualquier modelo. Puntos de venta: Liverpool, Amazon.com.mx y la Tienda Oficial en el FanFest del Zócalo. Más de 13,000 unidades vendidas.",
                en: "Screen protectors with 3 exclusive Mexican National Team designs, available for any model. Points of sale: Liverpool, Amazon.com.mx, and the Official Store at the FanFest in Zócalo. More than 13,000 units sold.",
              })}
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">
                  {t({ es: "Quiero algo similar", en: "I want something similar" })}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://luisgarciamoreno95.wixsite.com/monster1/mundial-fifa-russia-2018" target="_blank" rel="noreferrer">
                  {t({ es: "Fuente", en: "Source" })}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-card/50 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/iecn2_0QxYQ"
                title="Mundial FIFA Rusia 2018"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}




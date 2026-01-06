"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroBackground } from "@/components/ui/hero-background"
import { useLanguage } from "@/lib/language-context"

export default function TolucaFCCocaColaPage() {
  const { t } = useLanguage()

  const gallery = [
    "/portada-toluca.png",
    "/img-1-toluca.png",
    "/img-2-toluca.png",
    "/img-3-toluca.png",
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
              Toluca FC × Coca‑Cola
            </h1>
            <p className="text-lg text-muted-foreground">
              {t({
                es: "En octubre de 2017, se aplicaron más de 5,000 micas exclusivas por el centenario del Club Toluca en el Estadio Nemesio Diez, con 3 puntos de colocación y dinámica promocional junto a Coca‑Cola.",
                en: "In October 2017, more than 5,000 exclusive screen protectors were applied for the centennial of Club Toluca at the Nemesio Diez Stadium, with 3 application points and promotional dynamics together with Coca-Cola.",
              })}
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">
                  {t({ es: "Quiero algo similar", en: "I want something similar" })}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://luisgarciamoreno95.wixsite.com/monster1/toluca-fc-coca-cola" target="_blank" rel="noreferrer">
                  {t({ es: "Fuente", en: "Source" })}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((src) => (
              <div key={src} className="aspect-[3/4] rounded-xl overflow-hidden border border-border bg-card/50">
                <img src={src} alt="Toluca FC project" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}




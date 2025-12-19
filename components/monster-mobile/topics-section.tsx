"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"

export function TopicsSection() {
  const { t } = useLanguage()

  const topics = [
    {
      slug: "/monster-mobile/toluca-fc-coca-cola",
      title: t({ es: "Toluca FC x Coca‑Cola", en: "Toluca FC x Coca‑Cola" }),
      image: "/portada-toluca.png",
      summary: t({
        es: "Aplicación de más de 5,000 micas exclusivas conmemorativas de los 100 años del Toluca FC en el Estadio Nemesio Diez.",
        en: "Applied 5,000+ exclusive screen protectors commemorating Toluca FC's 100 years at Nemesio Diez Stadium.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/toluca-fc-coca-cola",
    },
    {
      slug: "/monster-mobile/mundial-fifa-russia-2018",
      title: t({ es: "Mundial FIFA Rusia 2018", en: "FIFA World Cup Russia 2018" }),
      image: "/portada-rusia.png",
      summary: t({
        es: "Producción de micas con 3 diseños exclusivos de la Selección Mexicana, ventas 13,000+ en Liverpool, Amazon y FanFest.",
        en: "Produced screen protectors with 3 exclusive Mexico NT designs, 13,000+ sales at Liverpool, Amazon and FanFest.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/mundial-fifa-russia-2018",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            {t({ es: "Monster Mobile", en: "Monster Mobile" })}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t({ es: "Casos destacados de personalización UV", en: "Featured UV customization cases" })}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {topics.map((topic) => (
            <Card key={topic.slug} className="overflow-hidden border border-border py-0">
              <div className="aspect-[16/9] w-full bg-card/50">
                <img src={topic.image} alt={topic.title as string} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">{topic.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{topic.summary}</p>
                <div className="mt-6 flex gap-3">
                  <Button asChild>
                    <Link href={topic.slug}>
                      {t({ es: "Ver más", en: "Learn more" })}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}




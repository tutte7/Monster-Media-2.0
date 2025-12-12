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
      slug: "/monster-media/viba",
      title: t({ es: "Viba", en: "Viba" }),
      image: "/interactive-digital-signage-wall.jpg",
      summary: t({
        es: "Atención al cliente 24/7 sin contacto, contenido dinámico, promociones y call center virtual.",
        en: "24/7 contactless customer service, dynamic content, promos and virtual call center.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/viba",
    },
    {
      slug: "/monster-media/motionsphere",
      title: t({ es: "MotionSphere", en: "MotionSphere" }),
      image: "/MotionSphere.png",
      summary: t({
        es: "Activaciones inmersivas con simuladores de alto impacto para marcas líderes.",
        en: "Immersive activations with high‑impact simulators for leading brands.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/motionsphere",
    },
    {
      slug: "/monster-media/climbing-wall",
      title: t({ es: "Climbing Wall", en: "Climbing Wall" }),
      image: "/Climbing Wall.png",
      summary: t({
        es: "Plataforma de juegos para muros de escalar que combina actividad física con diversión interactiva.",
        en: "Game platform for climbing walls combining fitness with interactive fun.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/climbing-wall",
    },
    {
      slug: "/monster-media/kioskos",
      title: t({ es: "Kioskos", en: "Kiosks" }),
      image: "/Kioskos.png",
      summary: t({
        es: "Centros de carga y experiencias táctiles con contenido de marca y juegos interactivos.",
        en: "Charging hubs and touch experiences with branded content and interactive games.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/kioskos",
    },
    {
      slug: "/monster-media/valojump",
      title: t({ es: "ValoJump", en: "ValoJump" }),
      image: "/ValoJump.png",
      summary: t({
        es: "Experiencia de salto gamificada que atrae audiencias y genera alto engagement.",
        en: "Gamified jumping experience that attracts audiences and high engagement.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/valojump",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            {t({ es: "Soluciones Interactivas", en: "Interactive Solutions" })}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t({ es: "Experiencias inmersivas y de alto impacto", en: "Immersive, high‑impact experiences" })}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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




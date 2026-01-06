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
      video: "https://www.youtube.com/watch?v=z0xSsC8dpsA",
      summary: t({
        es: "Atención al cliente 24/7 sin contacto, contenido dinámico, promociones y call center virtual.",
        en: "24/7 contactless customer service, dynamic content, promos and virtual call center.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/viba",
    },
    {
      slug: "/monster-media/motionsphere",
      title: t({ es: "MotionSphere", en: "MotionSphere" }),
      image: "/portada-MotionSphere.jpg",
      video: "https://www.youtube.com/watch?v=Gd53HK_ML8M",
      summary: t({
        es: "Una experiencia inmersiva que transforma el entorno en un simulador interactivo que combina movimiento, visuales y entretenimiento de última generación.",
        en: "An immersive experience that transforms the environment into an interactive simulator that combines movement, visuals, and next-generation entertainment.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/motionsphere",
    },
    {
      slug: "/monster-media/climbing-wall",
      title: t({ es: "Climbing Wall", en: "Climbing Wall" }),
      image: "/portada-Climbing Wall.png",
      video: "https://www.youtube.com/watch?v=zzTtpyzJaVQ",
      summary: t({
        es: "Plataforma de juegos para muros de escalar que combina actividad física con diversión interactiva.",
        en: "Game platform for climbing walls combining fitness with interactive fun.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/climbing-wall",
    },
    {
      slug: "/monster-media/kioskos",
      title: t({ es: "Centros de Carga Interactivos", en: "Interactive Charging Hubs" }),
      image: "/portada-kioskos.png",
      video: "https://www.youtube.com/watch?v=5ueP_qWTJbg",
      summary: t({
        es: "Experiencias digitales personalizadas ideal para campañas publicitarias y eventos de cualquier escala.",
        en: "Customized digital experiences ideal for advertising campaigns and events of any scale.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/kioskos",
    },
    {
      slug: "/monster-media/valojump",
      title: t({ es: "ValoJump", en: "ValoJump" }),
      image: "/portada-valojump.png",
      video: "https://www.youtube.com/watch?v=5ueP_qWTJbg",
      summary: t({
        es: "Experiencia de salto gamificada que atrae audiencias y genera alto engagement.",
        en: "Gamified jumping experience that attracts audiences and high engagement.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/valojump",
    },
    {
      slug: "/monster-media/bright-box",
      title: t({ es: "Bright Box", en: "Bright Box" }),
      image: "/portada-Bright Box.jpg",
      summary: t({
        es: "Estaciones de carga segura con lockers inteligentes y pantallas de comunicación dinámica.",
        en: "Secure charging stations with smart lockers and dynamic communication screens.",
      }),
      source: "https://luisgarciamoreno95.wixsite.com/monster1/bright-box",
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
            <Card key={topic.slug} className="overflow-hidden border border-border py-0 gap-0 flex flex-col h-full">
              <div className="relative w-full pt-[56.25%] bg-card/50 overflow-hidden">
                <img 
                  src={topic.image} 
                  alt={topic.title as string} 
                  className="absolute inset-0 h-full w-full object-cover" 
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">{topic.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{topic.summary}</p>
                <div className="mt-6 flex gap-3">
                  <Button asChild>
                    <Link href={topic.slug}>
                      {t({ es: "Ver más", en: "Learn more" })}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {topic.video && (
                    <Button variant="outline" asChild>
                      <a href={topic.video} target="_blank" rel="noopener noreferrer">
                        {t({ es: "Ver Video", en: "Watch Video" })}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}




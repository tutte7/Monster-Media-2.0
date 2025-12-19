"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function ValoJumpPage() {
  const { t } = useLanguage()

  const gallery = [
    "/portada-valojump.png",
    "/ValoJump.png",
    "/customers-playing-interactive-game.jpg",
    "/gamified-brand-experience-display.jpg",
  ]

  const features = [
    {
      title: t({ es: "Gamificación Real", en: "Real Gamification" }),
      description: t({
        es: "Convierte el salto en un trampolín en una experiencia de videojuego inmersiva.",
        en: "Turns trampoline jumping into an immersive video game experience.",
      }),
    },
    {
      title: t({ es: "Feedback en Tiempo Real", en: "Real-Time Feedback" }),
      description: t({
        es: "Los jugadores ven sus movimientos reflejados en la pantalla al instante.",
        en: "Players see their movements reflected on the screen instantly.",
      }),
    },
    {
      title: t({ es: "Competencia Social", en: "Social Competition" }),
      description: t({
        es: "Tablas de clasificación y modos multijugador para fomentar la competencia amistosa.",
        en: "Leaderboards and multiplayer modes to encourage friendly competition.",
      }),
    },
    {
      title: t({ es: "Compartir en Redes", en: "Social Sharing" }),
      description: t({
        es: "Graba automáticamente las mejores jugadas para que los usuarios las compartan.",
        en: "Automatically records the best plays for users to share.",
      }),
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3c4130a_1px,transparent_1px),linear-gradient(to_bottom,#a3c4130a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container relative z-10 mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {t({ es: "Interactivos", en: "Interactives" })}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
              ValoJump
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t({
                es: "ValoJump es una plataforma de juegos interactiva para trampolines que utiliza visión por computadora para seguir los movimientos del jugador. Es la herramienta perfecta para atraer multitudes y generar un alto nivel de engagement en eventos y centros de entretenimiento.",
                en: "ValoJump is an interactive game platform for trampolines that uses computer vision to track player movements. It's the perfect tool to attract crowds and generate high engagement in events and entertainment centers.",
              })}
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">{t({ es: "Solicitar demo", en: "Request demo" })}</Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://luisgarciamoreno95.wixsite.com/monster1/valojump"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t({ es: "Fuente", en: "Source" })}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5ueP_qWTJbg"
                title="ValoJump Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)]">
            {t({ es: "Galería", en: "Gallery" })}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((src) => (
              <div key={src} className="aspect-[3/4] rounded-xl overflow-hidden border border-border bg-card/50">
                <img src={src} alt="ValoJump" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}





"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function ClimbingWallPage() {
  const { t } = useLanguage()

  const gallery = [
    "/portada-Climbing Wall.png",
    "/Climbing Wall.png",
    "/customers-playing-interactive-game.jpg",
    "/interactive-game-with-brand-elements.jpg",
  ]

  const features = [
    {
      title: t({ es: "Juegos Interactivos", en: "Interactive Games" }),
      description: t({
        es: "Incluye una variedad de juegos como Whack-a-bat, Sparks y Climball que desafían la agilidad y coordinación.",
        en: "Includes a variety of games like Whack-a-bat, Sparks, and Climball that challenge agility and coordination.",
      }),
    },
    {
      title: t({ es: "Entrenamiento Avanzado", en: "Advanced Training" }),
      description: t({
        es: "Herramientas para crear rutas personalizadas y recibir feedback en tiempo real sobre el desempeño del escalador.",
        en: "Tools to create custom routes and receive real-time feedback on the climber's performance.",
      }),
    },
    {
      title: t({ es: "Para Todas las Edades", en: "For All Ages" }),
      description: t({
        es: "Desde niños hasta escaladores profesionales, la plataforma se adapta a diferentes niveles de habilidad.",
        en: "From children to professional climbers, the platform adapts to different skill levels.",
      }),
    },
    {
      title: t({ es: "Grabación de Video", en: "Video Recording" }),
      description: t({
        es: "Permite a los usuarios grabar sus sesiones y compartirlas en redes sociales, aumentando el engagement.",
        en: "Allows users to record their sessions and share them on social media, increasing engagement.",
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
              Climbing Wall
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t({
                es: "Primera plataforma de juegos para muros de escalar en el mundo. Esta dinámica interactiva invita a todo publico, desde los niños mas jovenes, hasta los adultos físicamente activos a tener una experiencia divertida mientras realizan actividad física.",
                en: "The world's first game platform for climbing walls. This interactive dynamic invites all audiences, from the youngest children to physically active adults, to have a fun experience while performing physical activity.",
              })}
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">{t({ es: "Solicitar demo", en: "Request demo" })}</Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://luisgarciamoreno95.wixsite.com/monster1/climbing-wall"
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
                src="https://www.youtube.com/embed/zzTtpyzJaVQ"
                title="Climbing Wall Video"
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
                <img src={src} alt="Climbing Wall" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}




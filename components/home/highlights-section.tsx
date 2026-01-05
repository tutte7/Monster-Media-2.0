"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HighlightsSection() {
  const { t } = useLanguage()

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : url
  }

  const highlights = [
    {
      category: { es: "Caso de Estudio", en: "Case Study" },
      title: {
        es: "Impresión UV",
        en: "UV Printing",
      },
      description: {
        es: "Proyecto masivo de personalización para cliente corporativo",
        en: "Massive customization project for corporate client",
      },
      date: "2024",
      video: "#",
    },
    {
      category: { es: "Caso de Estudio", en: "Case Study" },
      title: {
        es: "Protect my phone",
        en: "Protect my phone",
      },
      description: {
        es: "Despliegue de estaciones para protección y corte a medida en tiendas minoristas.",
        en: "Deployment of protection and on-demand cutting stations across retail stores.",
      },
      date: "2025",
      video: "https://www.dropbox.com/scl/fi/hn4mxrygzy108ce3vdg5l/CV_1010-PROTECT-MY-IPHONE-999.mp4?rlkey=0e93a4xm6xq0mmquqsp3uqw4v&st=esjb5le6&dl=0",
    },
    {
      category: { es: "Innovación", en: "Innovation" },
      title: {
        es: "Robotica en eventos masivos",
        en: "Robotics at massive events",
      },
      description: {
        es: "Implementación de brazos robóticos en ferias internacionales",
        en: "Implementation of robotic arms at international fairs",
      },
      date: "2024",
      video: "https://www.dropbox.com/scl/fi/7b8i6gp1ro2f6xku2k2us/MASTER-ESFERA-CORREGIDO-Y-AUMENTADO-02.02.18.mp4?rlkey=9s57krys2r6wsmyuim8cj8xr3&e=1&st=zfra3wa1&dl=0",
    },
    {
      category: { es: "Tecnología", en: "Technology" },
      title: {
        es: "Interactivos de realidad aumentada: MothionSphere",
        en: "Augmented reality interactive: MothionSphere",
      },
      description: {
        es: "Experiencias inmersivas para marcas líderes",
        en: "Immersive experiences for leading brands",
      },
      date: "2024",
      video: "https://www.youtube.com/watch?v=Gd53HK_ML8M",
    },
    {
      category: { es: "Tecnología", en: "Technology" },
      title: {
        es: "Interactivos de realidad aumentada",
        en: "Augmented reality interactive",
      },
      description: {
        es: "Soluciones interactivas de última generación",
        en: "Next-generation interactive solutions",
      },
      date: "2024",
      video: "https://www.youtube.com/watch?v=5ueP_qWTJbg",
    },
    {
      category: { es: "Tecnología", en: "Technology" },
      title: {
        es: "Interactivos de realidad aumentada: Climbing Wall",
        en: "Augmented reality interactive: Climbing Wall",
      },
      description: {
        es: "Muros de escalada interactivos con realidad aumentada",
        en: "Interactive climbing walls with augmented reality",
      },
      date: "2024",
      video: "https://www.youtube.com/watch?v=zzTtpyzJaVQ",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
            {t({
              es: "Proyectos Destacados",
              en: "Featured Projects",
            })}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t({
              es: "Descubre algunos de nuestros proyectos más innovadores",
              en: "Discover some of our most innovative projects",
            })}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 hover:border-primary transition-all duration-300 group flex flex-col">
              <div className="flex items-center gap-2 text-sm text-primary mb-3">
                <Calendar className="h-4 w-4" />
                <span>{highlight.date}</span>
              </div>
              <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium mb-4 w-fit">
                {t(highlight.category)}
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3 group-hover:text-primary transition-colors">
                {t(highlight.title)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{t(highlight.description)}</p>
              
              {highlight.video !== "#" && (
                <div className="mt-auto">
                  <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted border border-border mb-3">
                    {highlight.video.includes("youtube.com") || highlight.video.includes("youtu.be") ? (
                      <iframe
                        className="w-full h-full"
                        src={getYouTubeEmbedUrl(highlight.video)}
                        title={t(highlight.title)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : highlight.video.includes("dropbox.com") ? (
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                      >
                        <source src={highlight.video.replace("dl=0", "raw=1")} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                        <a href={highlight.video} target="_blank" rel="noopener noreferrer">
                          {t({ es: "Ver Video", en: "Watch Video" })}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                  {(highlight.video.includes("youtube.com") || highlight.video.includes("youtu.be")) && (
                    <a 
                      href={highlight.video} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-primary flex items-center justify-center gap-1 transition-colors"
                    >
                      {t({ es: "Ver en YouTube", en: "Watch on YouTube" })}
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/experiencia">
              {t({ es: "Ver Todos los Proyectos", en: "View All Projects" })}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

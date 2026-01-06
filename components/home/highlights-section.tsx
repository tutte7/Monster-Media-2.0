"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

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
        es: "Impresión 3D",
        en: "3D Printing",
      },
      description: {
        es: "Tecnología de impresión 3D de última generación para fabricar fundas de celulares",
        en: "Next-generation 3D printing technology for manufacturing phone cases",
      },
      date: "2024",
      video: "https://www.youtube.com/watch?v=zTcx2hl7Qv0",
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
      video: "https://www.youtube.com/watch?v=9GcKPEHx73w",
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
        es: "Centros de carga interactivos",
        en: "Interactive charging hubs",
      },
      description: {
        es: "Soluciones de carga segura y comunicación digital para marcas.",
        en: "Secure charging and digital communication solutions for brands.",
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(163,196,19,0.05)_0%,transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 tracking-tight">
              {t({
                es: "Proyectos Destacados",
                en: "Featured Projects",
              })}
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t({
                es: "Innovación y tecnología aplicada a experiencias de marca inolvidables.",
                en: "Innovation and technology applied to unforgettable brand experiences.",
              })}
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div variants={item} key={index}>
              <Card className="group h-full flex flex-col overflow-hidden border-white/5 bg-zinc-900/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 shadow-2xl p-0">
                {/* Video/Image Header */}
                <div className="relative aspect-video overflow-hidden bg-black w-full">
                  {highlight.video !== "#" ? (
                    <div className="w-full h-full">
                      {highlight.video.includes("youtube.com") || highlight.video.includes("youtu.be") ? (
                        <iframe
                          className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                          src={getYouTubeEmbedUrl(highlight.video)}
                          title={t(highlight.title)}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                          controls={false}
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={highlight.video.replace("dl=0", "raw=1")} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-primary/20" />
                    </div>
                  )}
                  
                  {/* Floating Category */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-wider font-bold rounded-full backdrop-blur-md">
                      {t(highlight.category)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-primary/60 mb-2 font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{highlight.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    {t(highlight.title)}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
                    {t(highlight.description)}
                  </p>
                  
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <Link 
                      href={highlight.video !== "#" ? highlight.video : "/experiencia"}
                      target={highlight.video !== "#" ? "_blank" : "_self"}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      {highlight.video !== "#" ? t({ es: "Ver Proyecto", en: "View Project" }) : t({ es: "Saber más", en: "Learn more" })}
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105" asChild>
            <Link href="/experiencia">
              {t({ es: "Explorar Portfolio Completo", en: "Explore Full Portfolio" })}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

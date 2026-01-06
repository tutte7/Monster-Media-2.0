"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { HeroBackground } from "@/components/ui/hero-background"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import * as React from "react"

import { cn } from "@/lib/utils"

const homeImages = [
  "/img-carrousel-home/_DSC8514-Edit 2.jpeg",
  "/img-carrousel-home/_DSC8637-20 copy 2.jpeg",
  "/img-carrousel-home/_DSC8822-32 copy 2.jpeg",
  "/img-carrousel-home/img3carr.png",
]

export function HeroSection() {
  const { t } = useLanguage()
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const timer = setInterval(() => {
      api.scrollNext()
    }, 4000)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    return () => clearInterval(timer)
  }, [api])

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background">
      <HeroBackground />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          <StaggerContainer delay={0.2} className="space-y-6">
            {/* Badge/Label */}
            <StaggerItem className="flex justify-center">
              <div className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase backdrop-blur-md">
                Monster Media 2.0
              </div>
            </StaggerItem>

            {/* Main Heading */}
            <StaggerItem>
              <h1 className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.9] text-balance tracking-tighter">
                {t({
                  es: "Innovación y Tecnología",
                  en: "Innovation and Technology",
                })}
                <br />
                <span className="text-gradient drop-shadow-lg">
                  {t({
                    es: "para Latinoamérica",
                    en: "for Latin America",
                  })}
                </span>
              </h1>
            </StaggerItem>

            {/* Subtitle */}
            <StaggerItem>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty font-light whitespace-pre-line">
                {t({
                  es: "Representación de marcas, Impresión 3D, soluciones On-Demand\npara telefonía, Robótica e Interactivos para México y LATAM",
                  en: "Brand representation, 3D Printing, On-Demand solutions\nfor telephony, Robotics and Interactives for Mexico and LATAM",
                })}
              </p>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" variant="neon" asChild className="text-lg px-8 h-12 rounded-full">
                <Link href="/contacto">
                  {t({ es: "Contáctanos", en: "Contact Us" })}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-12 rounded-full flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </StaggerItem>
          </StaggerContainer>

          {/* Modern Minimalist Carousel */}
          <FadeIn delay={0.8} direction="up" className="pt-16 max-w-4xl mx-auto w-full px-4">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {homeImages.map((src, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md group shadow-2xl">
                        <img
                          src={src}
                          alt={`Gallery image ${index + 1}`}
                          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 h-10 w-10 border-white/5 bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
                <div className="flex gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  {homeImages.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-all duration-300",
                        current === i ? "bg-primary w-3" : "bg-white/20"
                      )}
                    />
                  ))}
                </div>
                <CarouselNext className="static translate-y-0 h-10 w-10 border-white/5 bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
              </div>
            </Carousel>
          </FadeIn>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "PRIMO PRINT 3D | Monster Media",
  description:
    "Fundas personalizadas on‑demand para cualquier dispositivo: rápidas, personalizables y más verdes.",
}

import { HeroBackground } from "@/components/ui/hero-background"

export default function PrimoPrint3DPage() {
  const base = "/Im%C3%A1genes%20Red%20Wolf-20251024T151820Z-1-001/Im%C3%A1genes%20Red%20Wolf"

  const bullets = [
    "Cualquier dispositivo (biblioteca de miles de modelos)",
    "Protección confiable, bumper o full case",
    "On‑demand: menos inventario y desperdicio",
    "Velocidad: impresión en minutos",
    "Personalizable y rentable en retail",
  ]

  const gallery = [
    `${base}/_DSC8827-Edit copy 2.jpeg`,
    `${base}/_DSC8774-31 copy 2.jpeg`,
    `${base}/_DSC8822-32 copy 2.jpeg`,
    `${base}/_DSC8514-Edit 2.jpeg`,
    `${base}/Case-For-All-Banner.png`,
  ]

  const videos = [
    {
      title: "TikTok 1 - PRIMO PRINT 3D",
      src: "https://www.tiktok.com/embed/7315863845489249582",
    },
    {
      title: "TikTok 2 - PRIMO PRINT 3D",
      src: "https://www.tiktok.com/embed/7540007304528252174",
    },
    {
      title: "TikTok 3 - PRIMO PRINT 3D",
      src: "https://www.tiktok.com/embed/7532543085876727053",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-background">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                PRIMO PRINT 3D
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
                The phone case of the future
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Fundas personalizadas on‑demand para cualquier dispositivo. Rápidas, rentables y sostenibles.
              </p>

              <ul className="mt-6 grid gap-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-3">
                <Button asChild>
                  <Link href="/contacto">
                    Contáctanos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.redwolf.io/primo-print3d" target="_blank" rel="noreferrer">
                    Red Wolf info
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-card/50">
                <img src="/primo-3d-hd.png" alt="PRIMO PRINT 3D" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {gallery.map((src) => (
              <div key={src} className="rounded-lg overflow-hidden border border-border bg-card/50">
                <img src={src} alt="Primo Print 3D gallery" className="h-40 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Videos PRIMO PRINT 3D
            </h2>
            <p className="text-muted-foreground mt-3">Demostraciones rápidas de corte e impresión en TikTok.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video) => (
              <div key={video.src} className="aspect-[9/16] rounded-2xl overflow-hidden border border-border bg-card/50 shadow-sm">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}




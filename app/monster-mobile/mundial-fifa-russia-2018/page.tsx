import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroBackground } from "@/components/ui/hero-background"

export const metadata = {
  title: "Mundial FIFA Rusia 2018 | Monster Mobile",
  description:
    "Producción de micas con diseños exclusivos de la Selección Mexicana; ventas 13,000+ en Liverpool, Amazon y FanFest.",
}

export default function FifaRussia2018Page() {
  const gallery = [
    "/fifa-world-cup-2018-stadium-with-customized-phones.jpg",
    "/fifa-world-cup-2018-phone-with-russia-design.jpg",
    "/multiple-fifa-phones-with-different-country-flags.jpg",
    "/collection-of-fifa-2018-customized-phones.jpg",
  ]

  const videos = [
    {
      title: "Micas SNM 2018",
      src: "https://www.youtube.com/embed/iecn2_0QxYQ",
    },
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
              Mundial FIFA Rusia 2018
            </h1>
            <p className="text-lg text-muted-foreground">
              Micas con 3 diseños exclusivos de la Selección Mexicana, disponibles para cualquier modelo. Puntos de venta: Liverpool, Amazon.com.mx y la Tienda Oficial en el FanFest del Zócalo. Más de 13,000 unidades vendidas.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">Quiero algo similar</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://luisgarciamoreno95.wixsite.com/monster1/mundial-fifa-russia-2018" target="_blank" rel="noreferrer">
                  Fuente
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
                <img src={src} alt="FIFA 2018 project" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Video del Proyecto
            </h2>
            <p className="text-muted-foreground mt-3">
              Micas SNM 2018 en acción.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {videos.map((video) => (
              <div key={video.src} className="aspect-video rounded-2xl overflow-hidden border border-border bg-card/50 shadow-sm">
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




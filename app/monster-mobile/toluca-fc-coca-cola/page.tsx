import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroBackground } from "@/components/ui/hero-background"

export const metadata = {
  title: "Toluca FC x Coca‑Cola | Monster Mobile",
  description:
    "Evento en Estadio Nemesio Diez con 5,000+ micas exclusivas conmemorativas de los 100 años del Toluca FC.",
}

export default function TolucaFCCocaColaPage() {
  const gallery = [
    "/portada-toluca.png",
    "/img-1-toluca.png",
    "/img-2-toluca.png",
    "/img-3-toluca.png",
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
              Toluca FC × Coca‑Cola
            </h1>
            <p className="text-lg text-muted-foreground">
              En octubre de 2017, se aplicaron más de 5,000 micas exclusivas por el centenario del Club Toluca en el Estadio Nemesio Diez, con 3 puntos de colocación y dinámica promocional junto a Coca‑Cola.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">Quiero algo similar</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://luisgarciamoreno95.wixsite.com/monster1/toluca-fc-coca-cola" target="_blank" rel="noreferrer">
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
                <img src={src} alt="Toluca FC project" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}




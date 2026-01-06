import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroBackground } from "@/components/ui/hero-background"

export const metadata = {
  title: "Viba | Interactivos",
  description:
    "Atención al cliente 24/7 sin contacto, actualizaciones en tiempo real, promociones, call center virtual y analítica.",
}

export default function VibaPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-background">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">Interactivos</div>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">Viba</h1>
            <p className="text-lg text-muted-foreground">
              Servicios digitales que evolucionan mercados globales: atención al cliente 24/7 sin contacto, actualizaciones en tiempo real, promociones y call center virtual. Recaba información clave y gestiona campañas.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">Solicitar demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://luisgarciamoreno95.wixsite.com/monster1/viba" target="_blank" rel="noreferrer">Fuente</a>
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
                src="https://www.youtube.com/embed/z0xSsC8dpsA"
                title="Viba Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}




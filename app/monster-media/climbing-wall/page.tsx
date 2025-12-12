import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Climbing Wall | Interactivos",
  description:
    "Plataforma pionera de juegos para muros de escalar que une actividad física con diversión interactiva.",
}

export default function ClimbingWallPage() {
  const gallery = [
    "/gamified-brand-experience-display.jpg",
    "/customers-playing-interactive-game.jpg",
    "/interactive-game-with-brand-elements.jpg",
    "/interactive-digital-signage-wall.jpg",
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3c4130a_1px,transparent_1px),linear-gradient(to_bottom,#a3c4130a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container relative z-10 mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">Interactivos</div>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">Climbing Wall</h1>
            <p className="text-lg text-muted-foreground">
              Augmented Climbing Wall es la primera plataforma de juegos para muros de escalar del mundo, ideal para público de todas las edades.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">Solicitar demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://luisgarciamoreno95.wixsite.com/monster1/climbing-wall" target="_blank" rel="noreferrer">Fuente</a>
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
                <img src={src} alt="Climbing Wall" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}




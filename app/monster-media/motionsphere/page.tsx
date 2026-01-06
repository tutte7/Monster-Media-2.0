import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "MotionSphere | Interactivos",
  description:
    "Activaciones inmersivas con simuladores de alto impacto. Ejecución para marcas líderes con despliegue multi‑tienda.",
}

export default function MotionSpherePage() {
  const gallery = [
    "/gamification-experience-at-event.jpg",
    "/interactive-game-with-brand-elements.jpg",
    "/interactive-table-at-corporate-event.jpg",
    "/interactive-table-with-multiple-users.jpg",
  ]

  const videos = [
    {
      title: "MotionSphere - Video 1",
      src: "https://www.youtube.com/embed/Gd53HK_ML8M",
    },
    {
      title: "MotionSphere - Video 2",
      src: "https://www.youtube.com/embed/Jy95QX_r5aw?start=2",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3c4130a_1px,transparent_1px),linear-gradient(to_bottom,#a3c4130a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container relative z-10 mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">Interactivos</div>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">MotionSphere</h1>
            <p className="text-lg text-muted-foreground">
              Una experiencia inmersiva que transforma el entorno en un simulador interactivo permitiendo a los usuarios vivir emociones de alta intensidad a través de tecnología de realidad aumentada que combina movimiento, visuales envolventes y entretenimiento de última generación.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contacto">Solicitar demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://luisgarciamoreno95.wixsite.com/monster1/motionsphere" target="_blank" rel="noreferrer">Fuente</a>
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
                <img src={src} alt="MotionSphere" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Videos MotionSphere
            </h2>
            <p className="text-muted-foreground mt-3">
              Demostraciones en acción para campañas y activaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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




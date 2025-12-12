"use client"

import { Card } from "@/components/ui/card"

export function RoboticsVideosSection() {
  const items = [
    {
      title: "Robot interactivo - Demo 1",
      videoSrc: "https://www.youtube.com/embed/1V-CRUZR-DEMO?rel=0",
      fallback: "/placeholder.jpg",
      description: "Robot interactivo para retail y eventos en acción",
    },
    {
      title: "Robot interactivo - Demo 2",
      videoSrc: "https://www.youtube.com/embed/2Z-PEPPER-DEMO?rel=0",
      fallback: "/placeholder.jpg",
      description: "Interacción natural con personas y asistentes de marca",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {items.map((it) => (
            <Card key={it.title} className="overflow-hidden border border-border">
              <div className="aspect-video w-full bg-card/50">
                <iframe
                  className="h-full w-full"
                  src={it.videoSrc}
                  title={it.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



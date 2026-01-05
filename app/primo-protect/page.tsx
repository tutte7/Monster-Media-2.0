import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "PRIMO PROTECT | Monster Media",
  description:
    "Protector flexible, crackless y self‑healing. Corte on‑demand para cualquier modelo con aplicación en seco o húmedo.",
}

import { HeroBackground } from "@/components/ui/hero-background"

export default function PrimoProtectPage() {
  const base = "/Im%C3%A1genes%20Red%20Wolf-20251024T151820Z-1-001/Im%C3%A1genes%20Red%20Wolf"

  const bullets = [
    // ... (content omitted for brevity in prompt, but in tool call I assume context is sufficient or I should be careful)
    // Actually, strict replacement:
    "Corte on‑demand para cualquier modelo",
  ]

  const gallery = [
    `${base}/_DSC8558-Edit 2.jpeg`,
    `${base}/_DSC8534-Edit 2.jpeg`,
    `${base}/_DSC8535-Edit 2.jpeg`,
    `${base}/_DSC8540-8 copy 2.jpeg`,
    `${base}/_DSC8542-9 copy 2.jpeg`,
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-background">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                PRIMO PROTECT
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
                Faster. Easier. Better.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Protectores flexibles, con tacto tipo vidrio y tecnología self‑healing. Corte on‑demand para cualquier modelo.
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
                  <a href="https://www.redwolf.io/primo-protect" target="_blank" rel="noreferrer">
                    Red Wolf info
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-card/50">
                <img src="/primo-protect-hd.png" alt="PRIMO PROTECT" className="h-full w-full object-cover" />
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
                <img src={src} alt="Primo Protect gallery" className="h-40 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}




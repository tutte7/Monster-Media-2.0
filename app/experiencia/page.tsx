import { ExperienciaHero } from "@/components/experiencia/hero"
import { VerticalsSection } from "@/components/experiencia/verticals-section"
import { PartnersGrid } from "@/components/experiencia/partners-grid"
import { CtaSection } from "@/components/experiencia/cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuestra Experiencia | Monster Media",
  description:
    "Más de 25 años de experiencia en BTL, Turismo, Comercialización y Business Partners. 100% mexicana desde 2008 con presencia en toda Latinoamérica.",
  keywords: [
    "BTL México",
    "marketing experiencial",
    "turismo tecnología",
    "distribución tecnología",
    "business partners",
    "LATAM",
  ],
  openGraph: {
    title: "Nuestra Experiencia | Monster Media",
    description: "Más de 25 años transformando industrias con tecnología e innovación",
    type: "website",
  },
}

export default function ExperienciaPage() {
  return (
    <div className="flex flex-col">
      <ExperienciaHero />
      <VerticalsSection />
      <PartnersGrid />
      <CtaSection />
    </div>
  )
}

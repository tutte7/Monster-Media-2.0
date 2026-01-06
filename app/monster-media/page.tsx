import { InteractivosHero } from "@/components/interactivos/hero"
import { TopicsSection } from "@/components/interactivos/topics-section"
import { RoboticsHero } from "@/components/robotics/hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Monster Media | Soluciones Interactivas y Robótica",
  description:
    "Soluciones tecnológicas interactivas, centros de carga interactivos, digital signage, realidad aumentada y robótica de servicio avanzada.",
  openGraph: {
    title: "Monster Media | Soluciones Interactivas y Robótica",
    description: "Integrando tecnología interactiva y robótica para transformar experiencias.",
    type: "website",
  },
}

export default function MonsterMediaPage() {
  return (
    <div className="flex flex-col">
      <InteractivosHero />
      <TopicsSection />
      <div className="w-full h-px bg-border my-8" /> {/* Separator for visual clarity */}
      <RoboticsHero />
    </div>
  )
}


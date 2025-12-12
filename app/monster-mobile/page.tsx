import { MonsterMobileHero } from "@/components/monster-mobile/hero"
import { TopicsSection } from "@/components/monster-mobile/topics-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Monster Mobile - Personalización UV | Monster Media",
  description:
    "Casos de éxito en personalización de dispositivos móviles con impresión UV. Toluca FC, FIFA World Cup Russia 2018 y más.",
  keywords: ["impresión UV", "personalización móvil", "cases personalizados", "Monster Mobile", "UV printing"],
  openGraph: {
    title: "Monster Mobile - Personalización UV",
    description: "Casos de éxito en personalización de dispositivos móviles con impresión UV",
    type: "website",
  },
}

export default function MonsterMobilePage() {
  return (
    <div className="flex flex-col">
      <MonsterMobileHero />
      <TopicsSection />
    </div>
  )
}

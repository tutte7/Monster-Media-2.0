import { HeroSection } from "@/components/home/hero-section"
import { PrimoProductsSection } from "@/components/home/primo-products-section"
import { LatamPresence } from "@/components/home/latam-presence"
import { AboutSection } from "@/components/home/about-section"
import { PartnersSection } from "@/components/home/partners-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Monster Media | Innovación y Tecnología para LATAM",
  description:
    "Ecosistema PRIMO (PRIMO PRINT 3D + PRIMO PROTECT), impresoras UV eufyMake, soluciones interactivas y robótica. Innovación, tecnología y representación de marcas para México y Latinoamérica.",
  keywords: [
    "PRIMO 3D",
    "PRIMO PROTECT",
    "eufyMake",
    "impresión 3D",
    "impresión UV",
    "tecnología México",
    "innovación LATAM",
    "Monster Media",
  ],
  openGraph: {
    title: "Monster Media | Innovación y Tecnología para LATAM",
    description: "Ecosistema PRIMO, impresoras UV, soluciones interactivas y robótica para México y Latinoamérica",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PrimoProductsSection />
      <LatamPresence />
      <AboutSection />
      <PartnersSection />
      <HighlightsSection />
    </div>
  )
}

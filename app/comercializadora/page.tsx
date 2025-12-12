import { ComercializadoraHero } from "@/components/comercializadora/hero"
import { ChannelsSection } from "@/components/comercializadora/channels-section"
import { ProductCarousel } from "@/components/comercializadora/product-carousel"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comercializadora | Monster Media",
  description:
    "División de comercialización digital y retail de Monster Media. Conectamos marcas con clientes a través de marketplaces, social media, Telcel y Coppel.",
  openGraph: {
    title: "Comercializadora | Monster Media",
    description: "Estrategias integrales de venta en canales digitales y físicos.",
    type: "website",
  },
}

export default function ComercializadoraPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ComercializadoraHero />
      <ChannelsSection />
      <ProductCarousel />
    </div>
  )
}


"use client"

import { useLanguage } from "@/lib/language-context"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function ProductCarousel() {
  const { t } = useLanguage()

  // Using the new product images from the productos-comercializadora folder
  const products = [
    { id: 1, image: "/productos-comercializadora/IMG_3684.JPG", name: t({ es: "Smart Watch", en: "Smart Watch" }) },
    { id: 2, image: "/productos-comercializadora/IMG_3687.jpg", name: t({ es: "Audífonos", en: "Earbuds" }) },
    { id: 3, image: "/productos-comercializadora/IMG_3688.WEBP", name: t({ es: "Cargador", en: "Charger" }) },
    { id: 4, image: "/productos-comercializadora/IMG_3691.jpg", name: t({ es: "Funda de Celular", en: "Phone Case" }) },
    { id: 5, image: "/productos-comercializadora/IMG_3692.WEBP", name: t({ es: "App de Salud", en: "Health App" }) },
    { id: 6, image: "/productos-comercializadora/IMG_3693.WEBP", name: t({ es: "Impresora 3D", en: "3D Printer" }) },
    { id: 7, image: "/productos-comercializadora/IMG_3694.WEBP", name: t({ es: "Dispositivo Médico", en: "Medical Device" }) },
    { id: 8, image: "/productos-comercializadora/IMG_3695.WEBP", name: t({ es: "Suplementos", en: "Supplements" }) },
    { id: 9, image: "/productos-comercializadora/IMG_3696.AVIF", name: t({ es: "Té Detox", en: "Detox Tea" }) },
    { id: 10, image: "/productos-comercializadora/P1S-combo-P3D-logos.png", name: "Bambu Lab P1S" },
    { id: 11, image: "/productos-comercializadora/PPRO-MK1-001.png", name: "Primo Protect MK1" },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
          {t({ es: "Catálogo de Productos", en: "Product Catalog" })}
        </h2>
        
        <div className="max-w-5xl mx-auto relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-border bg-background">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}


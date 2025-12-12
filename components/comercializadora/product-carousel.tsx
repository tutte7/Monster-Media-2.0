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

  // Using placeholder images for now as I don't have specific product images for the carousel yet.
  // I'll use a mix of existing images to simulate product variety.
  const products = [
    { id: 1, image: "/toluca-fc-phone-with-red-and-white-design.jpg", name: "Case Study 1" },
    { id: 2, image: "/fifa-world-cup-2018-phone-with-russia-design.jpg", name: "Case Study 2" },
    { id: 3, image: "/prodigee_logo2.jpg", name: "Accessory 1" },
    { id: 4, image: "/ppmyphone_logo.png", name: "Accessory 2" },
    { id: 5, image: "/mybatpro_logo.png", name: "Accessory 3" },
    { id: 6, image: "/phonesoap-logo.png", name: "Accessory 4" },
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


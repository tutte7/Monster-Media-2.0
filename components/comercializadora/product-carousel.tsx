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

  // Using the new product images from the Nuevos-Productos folder
  const products = [
    { id: 1, image: "/Nuevos-Productos/relojes.png", name: t({ es: "Smart Watch", en: "Smart Watch" }) },
    { id: 2, image: "/Nuevos-Productos/argom.png", name: t({ es: "Accesorios Argom", en: "Argom Accessories" }) },
    { id: 3, image: "/Nuevos-Productos/primo print 3D.png", name: t({ es: "Primo Print 3D", en: "Primo Print 3D" }) },
    { id: 4, image: "/Nuevos-Productos/protector 3D.png", name: t({ es: "Protector 3D", en: "3D Protector" }) },
    { id: 5, image: "/Nuevos-Productos/Kami Care.png", name: t({ es: "Kami Care", en: "Kami Care" }) },
    { id: 6, image: "/Nuevos-Productos/impresora 3D.png", name: t({ es: "Impresora 3D", en: "3D Printer" }) },
    { id: 7, image: "/Nuevos-Productos/medaica.png", name: t({ es: "Medaica", en: "Medaica" }) },
    { id: 8, image: "/Nuevos-Productos/Bio B.png", name: t({ es: "Bio B", en: "Bio B" }) },
    { id: 9, image: "/Nuevos-Productos/leaflife.png", name: t({ es: "Leaf Life", en: "Leaf Life" }) },
    { id: 10, image: "/Nuevos-Productos/primo red wolf.png", name: "Primo Red Wolf" },
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


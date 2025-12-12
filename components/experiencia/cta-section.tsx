"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
            {t({
              es: "¿Listo para Innovar?",
              en: "Ready to Innovate?",
            })}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            {t({
              es: "Contáctanos y descubre cómo podemos ayudarte a transformar tu negocio",
              en: "Contact us and discover how we can help you transform your business",
            })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                {t({ es: "Contactar", en: "Contact Us" })}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

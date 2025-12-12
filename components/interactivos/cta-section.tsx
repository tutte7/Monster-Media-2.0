"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export function InteractivosCTA() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
            {t({
              es: "¿Listo para crear experiencias interactivas?",
              en: "Ready to create interactive experiences?",
            })}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {t({
              es: "Contáctanos para conocer cómo nuestras soluciones pueden transformar tu negocio",
              en: "Contact us to learn how our solutions can transform your business",
            })}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contacto">
                <Mail className="mr-2 h-5 w-5" />
                {t({ es: "Contactar", en: "Contact" })}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

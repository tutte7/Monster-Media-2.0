"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3c41308_1px,transparent_1px),linear-gradient(to_bottom,#a3c41308_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
            {t({
              es: "¿Listo para personalizar tus dispositivos?",
              en: "Ready to customize your devices?",
            })}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {t({
              es: "Contáctanos para cotizar tu proyecto de personalización masiva",
              en: "Contact us to quote your mass customization project",
            })}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contacto">
                <Mail className="mr-2 h-5 w-5" />
                {t({ es: "Solicitar Cotización", en: "Request Quote" })}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-primary mb-1">
                1500+
              </div>
              <div className="text-sm text-muted-foreground">
                {t({ es: "Dispositivos personalizados", en: "Customized devices" })}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-primary mb-1">
                48h
              </div>
              <div className="text-sm text-muted-foreground">{t({ es: "Tiempo de entrega", en: "Delivery time" })}</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-primary mb-1">
                100%
              </div>
              <div className="text-sm text-muted-foreground">{t({ es: "Satisfacción", en: "Satisfaction" })}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

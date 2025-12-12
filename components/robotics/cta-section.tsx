"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Calendar } from "lucide-react"
import Link from "next/link"

export function RoboticsCTA() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3c41308_1px,transparent_1px),linear-gradient(to_bottom,#a3c41308_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
            {t({
              es: "¿Listo para integrar robots interactivos en tu negocio?",
              en: "Ready to integrate interactive robots into your business?",
            })}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {t({
              es: "Somos distribuidores de robots interactivos de última generación. Agenda una demo y conoce las opciones.",
              en: "We distribute next-gen interactive robots. Schedule a demo and explore the options.",
            })}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              {t({ es: "Agendar Demo", en: "Schedule Demo" })}
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
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

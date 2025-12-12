"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react"

export function ContactInfo() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Mail,
      label: { es: "Email", en: "Email" },
      value: "contacto@monstermedia.com.mx",
      href: "mailto:contacto@monstermedia.com.mx",
    },
    {
      icon: Phone,
      label: { es: "Teléfono", en: "Phone" },
      value: "+52 55 1234 5678",
      href: "tel:+525512345678",
    },
    {
      icon: MapPin,
      label: { es: "Ubicación", en: "Location" },
      value: t({ es: "Ciudad de México, México", en: "Mexico City, Mexico" }),
      href: null,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
          {t({ es: "Información de contacto", en: "Contact information" })}
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {t({
            es: "Estamos disponibles para responder tus preguntas y ayudarte con tu proyecto.",
            en: "We're available to answer your questions and help you with your project.",
          })}
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t(method.label)}</p>
                  {method.href ? (
                    <a href={method.href} className="font-medium hover:text-primary transition-colors">
                      {method.value}
                    </a>
                  ) : (
                    <p className="font-medium">{method.value}</p>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="font-semibold mb-4">
          {t({ es: "Contacto directo por WhatsApp", en: "Direct WhatsApp contact" })}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {t({
            es: "¿Necesitas una respuesta rápida? Contáctanos directamente por WhatsApp.",
            en: "Need a quick response? Contact us directly on WhatsApp.",
          })}
        </p>
        <Button className="w-full gap-2">
          <MessageCircle className="h-5 w-5" />
          {t({ es: "Abrir WhatsApp", en: "Open WhatsApp" })}
        </Button>
      </Card>

      <div>
        <h3 className="font-semibold mb-4">{t({ es: "Síguenos", en: "Follow us" })}</h3>
        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

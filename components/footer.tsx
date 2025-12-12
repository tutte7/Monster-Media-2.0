"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              <span className="text-foreground">MONSTER</span>
              <span className="text-primary"> MEDIA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t({
                es: "Innovación, tecnología y representación de marcas para México y Latinoamérica.",
                en: "Innovation, technology and brand representation for Mexico and Latin America.",
              })}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t({ es: "Enlaces", en: "Links" })}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/monster-mobile" className="text-muted-foreground hover:text-primary transition-colors">
                  Monster Mobile
                </Link>
              </li>
              <li>
                <Link href="/comercializadora" className="text-muted-foreground hover:text-primary transition-colors">
                  {t({ es: "Comercializadora", en: "Distribution" })}
                </Link>
              </li>
              <li>
                <Link href="/monster-media" className="text-muted-foreground hover:text-primary transition-colors">
                  Monster Media
                </Link>
              </li>
              <li>
                <Link href="/experiencia" className="text-muted-foreground hover:text-primary transition-colors">
                  {t({ es: "Nuestra experiencia", en: "Our Experience" })}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t({ es: "Contacto", en: "Contact" })}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contacto@monstermedia.com.mx"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contacto@monstermedia.com.mx
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">+52 55 1234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  {t({
                    es: "Ciudad de México, México",
                    en: "Mexico City, Mexico",
                  })}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">{t({ es: "Síguenos", en: "Follow Us" })}</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Monster Media.{" "}
              {t({ es: "Todos los derechos reservados.", en: "All rights reserved." })}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                {t({ es: "Aviso de Privacidad", en: "Privacy Policy" })}
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                {t({ es: "Términos y Condiciones", en: "Terms & Conditions" })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

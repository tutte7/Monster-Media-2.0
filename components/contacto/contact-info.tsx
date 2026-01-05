"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Mail, Phone, MapPin, MessageCircle, Clock, ArrowUpRight, ExternalLink, Facebook, Instagram, Linkedin } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

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
      href: "https://maps.google.com/?q=Ciudad+de+Mexico",
    },
    {
      icon: Clock,
      label: { es: "Horario", en: "Hours" },
      value: t({ es: "Lun-Vie: 9am - 6pm", en: "Mon-Fri: 9am - 6pm" }),
      href: null,
    },
  ]



  return (
    <FadeIn direction="right" delay={0.3}>
      <div className="space-y-6 h-full">
        {/* Contact Methods Grid */}
        <StaggerContainer delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <StaggerItem key={index}>
                <GlassCard
                  variant="default"
                  hoverEffect
                  className="p-5 group cursor-pointer"
                >
                  {method.href ? (
                    <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                          <Icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{t(method.label)}</p>
                          <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">{method.value}</p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{t(method.label)}</p>
                        <p className="font-medium text-sm truncate">{method.value}</p>
                      </div>
                    </div>
                  )}
                </GlassCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* WhatsApp - Integrado como otro método de contacto */}
        <GlassCard variant="default" hoverEffect className="p-5 group cursor-pointer">
          <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#25D366]/50 group-hover:bg-[#25D366]/10 transition-all">
              <MessageCircle className="h-5 w-5 text-foreground group-hover:text-[#25D366] transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">WhatsApp</p>
              <p className="font-medium text-sm group-hover:text-[#25D366] transition-colors">
                {t({ es: "Respuesta inmediata", en: "Immediate response" })}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </GlassCard>

        {/* Map Preview */}
        <GlassCard variant="default" hoverEffect className="overflow-hidden group">
          <div className="relative h-48 bg-gradient-to-br from-secondary to-background">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                </motion.div>
                <p className="font-semibold">Ciudad de México</p>
                <p className="text-sm text-muted-foreground">México</p>
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=Ciudad+de+Mexico" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
            >
              {t({ es: "Ver en Google Maps", en: "View on Google Maps" })}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </GlassCard>

        {/* Social Links - Bento style debajo del mapa */}
        <GlassCard variant="default" hoverEffect={false} className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">
              {t({ es: "Síguenos en redes", en: "Follow us" })}
            </p>
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "https://facebook.com/monstermediamx", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com/monstermediamx", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/company/monstermediamx", label: "LinkedIn" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </GlassCard>


      </div>
    </FadeIn>
  )
}

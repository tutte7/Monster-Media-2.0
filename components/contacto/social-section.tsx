"use client"

import { useLanguage } from "@/lib/language-context"
import { GlassCard } from "@/components/ui/glass-card"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { FadeIn } from "@/components/motion-wrapper"

export function SocialSection() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/monstermediamx", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/monstermediamx", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/monstermediamx", label: "LinkedIn" },
  ]

  return (
    <FadeIn delay={0.4}>
      <GlassCard variant="default" hoverEffect={false} className="p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-1">
              {t({ es: "Síguenos en redes sociales", en: "Follow us on social media" })}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t({ es: "Mantente al día con nuestras novedades", en: "Stay up to date with our news" })}
            </p>
          </div>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </GlassCard>
    </FadeIn>
  )
}

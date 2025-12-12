"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useLanguage } from "@/lib/language-context"
import { Menu, X, MessageCircle } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    {
      name: { es: "Home", en: "Home" },
      href: "/",
    },
    {
      name: { es: "Monster Mobile", en: "Monster Mobile" },
      href: "/monster-mobile",
    },
    {
      name: { es: "Comercializadora", en: "Distribution" },
      href: "/comercializadora",
    },
    {
      name: { es: "Monster Media", en: "Monster Media" },
      href: "/monster-media",
    },
    {
      name: { es: "Nuestra experiencia", en: "Our Experience" },
      href: "/experiencia",
    },
    {
      name: { es: "Contacto", en: "Contact" },
      href: "/contacto",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
              <span className="text-foreground">MONSTER</span>
              <span className="text-primary"> MEDIA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <div className="hidden sm:inline-flex">
              <ModeToggle />
            </div>

            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-secondary rounded-md p-1">
              <button
                onClick={() => setLanguage("es")}
                className={cn(
                  "px-3 py-1 text-sm font-medium rounded transition-colors",
                  language === "es"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1 text-sm font-medium rounded transition-colors",
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                EN
              </button>
            </div>

            {/* WhatsApp CTA */}
            <Button size="sm" className="hidden sm:flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {t(item.name)}
              </Link>
            ))}

            <div className="px-3 py-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{t({ es: "Tema:", en: "Theme:" })}</span>
              <ModeToggle />
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="text-sm text-muted-foreground">{t({ es: "Idioma:", en: "Language:" })}</span>
              <div className="flex items-center gap-1 bg-secondary rounded-md p-1">
                <button
                  onClick={() => setLanguage("es")}
                  className={cn(
                    "px-3 py-1 text-sm font-medium rounded transition-colors",
                    language === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                  )}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "px-3 py-1 text-sm font-medium rounded transition-colors",
                    language === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                  )}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Mobile WhatsApp Button */}
            <div className="px-3 pt-2">
              <Button className="w-full flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

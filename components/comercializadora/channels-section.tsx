"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Store } from "lucide-react"

export function ChannelsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Digital Channel */}
          <Card className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <ShoppingCart className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
                DIGITAL
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-4">
              <ul className="space-y-4">
                <li className="text-xl text-muted-foreground hover:text-foreground transition-colors">
                  Marketplaces
                </li>
                <li className="text-xl text-muted-foreground hover:text-foreground transition-colors">
                  Social Media
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Retail Channel */}
          <Card className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Store className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
                RETAIL
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-4">
              <ul className="space-y-4">
                <li className="text-xl text-muted-foreground hover:text-foreground transition-colors">
                  Telcel
                </li>
                <li className="text-xl text-muted-foreground hover:text-foreground transition-colors">
                  Coppel
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


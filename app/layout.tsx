import type React from "react"
import { Space_Grotesk } from "next/font/google"
import "@fontsource/mona-sans" // Defaults to weight 400
import "@fontsource/mona-sans/400.css"
import "@fontsource/mona-sans/500.css"
import "@fontsource/mona-sans/600.css"
import "@fontsource/mona-sans/700.css"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata = {
  title: "Monster Media | Innovación y Tecnología para LATAM",
  description: "Innovación, tecnología y representación de marcas para México y Latinoamérica",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans antialiased tracking-tight ${spaceGrotesk.variable}`} style={{ fontFamily: "'Mona Sans', system-ui, sans-serif" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

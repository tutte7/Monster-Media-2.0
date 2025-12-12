import { ContactHero } from "@/components/contacto/hero"
import { ContactForm } from "@/components/contacto/contact-form"
import { ContactInfo } from "@/components/contacto/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Monster Media",
  description:
    "Contáctanos para transformar tus ideas en realidad. Innovación, tecnología y representación de marcas para México y Latinoamérica.",
  keywords: ["contacto Monster Media", "cotización", "demo", "México", "LATAM", "tecnología"],
  openGraph: {
    title: "Contacto | Monster Media",
    description: "Estamos listos para ayudarte a transformar tus ideas en realidad",
    type: "website",
  },
}

export default function ContactoPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

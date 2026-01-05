import { ContactHero } from "@/components/contacto/hero"
import { ContactForm } from "@/components/contacto/contact-form"
import { ContactInfo } from "@/components/contacto/contact-info"
import { FAQSection } from "@/components/contacto/faq-section"
import { ContactCTA } from "@/components/contacto/cta-section"
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
      
      {/* Main Contact Section */}
      <section id="form" className="py-24 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,196,19,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactCTA />
    </div>
  )
}

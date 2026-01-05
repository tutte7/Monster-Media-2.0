"use client"

import { useLanguage } from "@/lib/language-context"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FAQSection() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: {
        es: "¿En qué países operan?",
        en: "Which countries do you operate in?",
      },
      answer: {
        es: "Operamos principalmente en México, pero tenemos presencia y capacidad de distribución en toda Latinoamérica. Contamos con socios estratégicos en Colombia, Perú, Chile, Argentina y Brasil.",
        en: "We primarily operate in Mexico, but we have presence and distribution capabilities throughout Latin America. We have strategic partners in Colombia, Peru, Chile, Argentina, and Brazil.",
      },
    },
    {
      question: {
        es: "¿Cuál es el tiempo de respuesta promedio?",
        en: "What is the average response time?",
      },
      answer: {
        es: "Nos comprometemos a responder todas las consultas en un máximo de 24 horas hábiles. Para solicitudes urgentes, recomendamos contactarnos por WhatsApp para una respuesta más rápida.",
        en: "We commit to responding to all inquiries within a maximum of 24 business hours. For urgent requests, we recommend contacting us via WhatsApp for a faster response.",
      },
    },
    {
      question: {
        es: "¿Ofrecen demostraciones de sus productos?",
        en: "Do you offer product demonstrations?",
      },
      answer: {
        es: "¡Sí! Ofrecemos demostraciones presenciales y virtuales de todos nuestros productos interactivos, robótica y soluciones tecnológicas. Agenda una demo desde el formulario de contacto seleccionando 'Agendar demo'.",
        en: "Yes! We offer in-person and virtual demonstrations of all our interactive products, robotics, and technology solutions. Schedule a demo from the contact form by selecting 'Schedule a demo'.",
      },
    },
    {
      question: {
        es: "¿Trabajan con empresas de cualquier tamaño?",
        en: "Do you work with companies of any size?",
      },
      answer: {
        es: "Sí, trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporativos. Adaptamos nuestras soluciones y servicios según las necesidades y presupuesto de cada cliente.",
        en: "Yes, we work with companies of all sizes, from startups to large corporations. We adapt our solutions and services according to each client's needs and budget.",
      },
    },
    {
      question: {
        es: "¿Qué tipos de servicios ofrecen?",
        en: "What types of services do you offer?",
      },
      answer: {
        es: "Ofrecemos una amplia gama de servicios incluyendo: representación de marcas tecnológicas, impresión 3D (Primo Print3D), protección de dispositivos (Primo Protect), soluciones de robótica, experiencias interactivas para eventos, y soluciones BTL innovadoras.",
        en: "We offer a wide range of services including: technology brand representation, 3D printing (Primo Print3D), device protection (Primo Protect), robotics solutions, interactive experiences for events, and innovative BTL solutions.",
      },
    },
    {
      question: {
        es: "¿Cómo puedo solicitar una cotización?",
        en: "How can I request a quote?",
      },
      answer: {
        es: "Puedes solicitar una cotización llenando el formulario de contacto y seleccionando 'Solicitar cotización' como motivo. También puedes escribirnos directamente por WhatsApp o email con los detalles de tu proyecto.",
        en: "You can request a quote by filling out the contact form and selecting 'Request a quote' as the reason. You can also write to us directly via WhatsApp or email with your project details.",
      },
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4" />
            {t({ es: "Preguntas frecuentes", en: "Frequently asked questions" })}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            {t({ es: "¿Tienes dudas?", en: "Have questions?" })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t({
              es: "Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios.",
              en: "Here you'll find answers to the most common questions about our services.",
            })}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/5 border border-white/10 rounded-xl px-6 backdrop-blur-sm data-[state=open]:bg-white/10 data-[state=open]:border-primary/30 transition-all"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5 [&[data-state=open]>svg]:text-primary">
                    {t(faq.question)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {t(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

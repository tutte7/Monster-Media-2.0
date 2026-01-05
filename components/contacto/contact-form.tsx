"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, User, Mail, Building2, MessageSquare, CheckCircle2, Loader2 } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { FadeIn } from "@/components/motion-wrapper"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log("[v0] Form submitted:", values)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const subjects = [
    { value: "cotizacion", label: { es: "Solicitar cotización", en: "Request a quote" } },
    { value: "demo", label: { es: "Agendar demo", en: "Schedule a demo" } },
    { value: "soporte", label: { es: "Soporte técnico", en: "Technical support" } },
    { value: "alianza", label: { es: "Alianza comercial", en: "Business partnership" } },
    { value: "otro", label: { es: "Otro", en: "Other" } },
  ]

  return (
    <FadeIn direction="left" delay={0.2}>
      <GlassCard variant="neon" hoverEffect={false} className="p-8 md:p-10 relative overflow-hidden">
        {/* Decorative corner accent - difuminados */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/20 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-primary/15 blur-[60px] pointer-events-none" />

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-16 text-center space-y-6"
            >
              <div className="p-4 rounded-full bg-primary/20 text-primary">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                {t({ es: "¡Mensaje enviado!", en: "Message sent!" })}
              </h3>
              <p className="text-muted-foreground max-w-sm">
                {t({
                  es: "Gracias por contactarnos. Te responderemos en las próximas 24 horas.",
                  en: "Thank you for contacting us. We'll get back to you within 24 hours.",
                })}
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSubmitted(false)
                  form.reset()
                }}
              >
                {t({ es: "Enviar otro mensaje", en: "Send another message" })}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
                  {t({ es: "Envíanos un mensaje", en: "Send us a message" })}
                </h2>
                <p className="text-muted-foreground">
                  {t({
                    es: "Completa el formulario y nos pondremos en contacto contigo pronto.",
                    en: "Fill out the form and we'll get back to you soon.",
                  })}
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            {t({ es: "Nombre", en: "Name" })}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t({ es: "Tu nombre completo", en: "Your full name" })}
                              className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            {t({ es: "Email", en: "Email" })}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t({ es: "tu@email.com", en: "your@email.com" })}
                              className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-primary" />
                            {t({ es: "Empresa", en: "Company" })}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t({ es: "Nombre de tu empresa", en: "Your company name" })}
                              className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-muted-foreground">
                            {t({ es: "Teléfono (opcional)", en: "Phone (optional)" })}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+52 55 1234 5678"
                              className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t({ es: "¿En qué podemos ayudarte?", en: "How can we help you?" })}</FormLabel>
                        <FormControl>
                          <div className="flex flex-wrap gap-2">
                            {subjects.map((subject) => (
                              <button
                                key={subject.value}
                                type="button"
                                onClick={() => field.onChange(subject.value)}
                                className={`px-4 py-2 rounded-full text-sm transition-all ${
                                  field.value === subject.value
                                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_-5px_var(--primary)]"
                                    : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                                }`}
                              >
                                {t(subject.label)}
                              </button>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                          {t({ es: "Mensaje", en: "Message" })}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t({
                              es: "Cuéntanos los detalles de tu proyecto o consulta...",
                              en: "Tell us about your project or inquiry...",
                            })}
                            className="min-h-32 bg-white/5 border-white/10 focus:border-primary/50 transition-colors resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    variant="neon"
                    className="w-full gap-2 h-12 text-lg rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        {t({ es: "Enviando...", en: "Sending..." })}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        {t({ es: "Enviar mensaje", en: "Send message" })}
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </FadeIn>
  )
}

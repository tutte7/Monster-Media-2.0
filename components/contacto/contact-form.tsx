"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
  const { t } = useLanguage()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("[v0] Form submitted:", values)
    // TODO: Implement form submission logic
  }

  return (
    <div>
      <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
        {t({ es: "Envíanos un mensaje", en: "Send us a message" })}
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t({ es: "Nombre", en: "Name" })}</FormLabel>
                <FormControl>
                  <Input placeholder={t({ es: "Tu nombre", en: "Your name" })} {...field} />
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
                <FormLabel>{t({ es: "Email", en: "Email" })}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t({ es: "tu@email.com", en: "your@email.com" })} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t({ es: "Empresa", en: "Company" })}</FormLabel>
                <FormControl>
                  <Input placeholder={t({ es: "Nombre de tu empresa", en: "Your company name" })} {...field} />
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
                <FormLabel>{t({ es: "Mensaje", en: "Message" })}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t({
                      es: "Cuéntanos sobre tu proyecto...",
                      en: "Tell us about your project...",
                    })}
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full gap-2">
            <Send className="h-5 w-5" />
            {t({ es: "Enviar mensaje", en: "Send message" })}
          </Button>
        </form>
      </Form>
    </div>
  )
}

import type { Metadata } from "next"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { siteConfig, whatsappUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a Rosana Giglio para comprar, vender o alquilar tu propiedad en Berazategui, Quilmes y zona sur del Gran Buenos Aires.",
}

export default function ContactoPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">Contacto</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-foreground sm:text-5xl">Hablemos</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Completá el formulario o escribime directamente. Te respondo a la brevedad para ayudarte con tu consulta.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <a
                href={`tel:${siteConfig.telefono.replace(/\s/g, "")}`}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Teléfono</p>
                  <p className="font-medium text-foreground">{siteConfig.telefono}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Ubicación</p>
                  <p className="font-medium text-foreground">{siteConfig.direccion}</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#1fb959]">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Escribir por WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Enviá tu consulta</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Dejanos tus datos y te contactamos a la brevedad.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

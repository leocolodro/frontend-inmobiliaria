import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Heart, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, whatsappUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Sobre Rosana",
  description:
    "Conocé a Rosana Giglio, asesora inmobiliaria con años de experiencia en Berazategui, Quilmes y zona sur del Gran Buenos Aires.",
}

const valores = [
  {
    icon: Heart,
    title: "Trato cercano",
    desc: "Escucho lo que necesitás y te acompaño con paciencia en cada decisión.",
  },
  {
    icon: Award,
    title: "Experiencia",
    desc: "Conocimiento profundo del mercado local y sus oportunidades reales.",
  },
  {
    icon: MapPin,
    title: "Zona sur",
    desc: "Especialista en Berazategui, Quilmes, Hudson y Ranelagh.",
  },
]

export default function SobreRosanaPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/images/rosana.png"
              alt={`${siteConfig.nombre}, asesora inmobiliaria`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">Sobre mí</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
              {siteConfig.nombre}
            </h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Soy asesora inmobiliaria y desde hace años acompaño a familias e inversores de la zona sur del Gran
                Buenos Aires a encontrar la propiedad que buscan, o a vender la suya en las mejores condiciones.
              </p>
              <p>
                Mi forma de trabajar se basa en la escucha, la honestidad y el compromiso. Sé que comprar o vender una
                propiedad es una de las decisiones más importantes en la vida de una persona, y por eso me involucro
                en cada detalle para que el proceso sea claro, seguro y sin sobresaltos.
              </p>
              <p>
                Me apasiona conectar a las personas con el lugar indicado. Cada llave que entrego representa un nuevo
                comienzo, y ese es el mejor motivo para hacer bien mi trabajo.
              </p>
            </div>
            <Button asChild size="lg" className="mt-8 bg-[#25D366] text-white hover:bg-[#1fb959]">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Hablemos por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {valores.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <v.icon className="size-6" />
                </div>
                <h2 className="mt-5 font-serif text-xl font-semibold text-foreground">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
            Estoy para ayudarte
          </h2>
          <p className="max-w-xl text-pretty text-primary-foreground/80">
            Contame qué estás buscando y encontremos juntos la mejor opción para vos.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

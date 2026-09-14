import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Handshake, Search, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { getPropiedadesDestacadas } from "@/lib/properties"
import { siteConfig, whatsappUrl } from "@/lib/site"

export default function HomePage() {
  const destacadas = getPropiedadesDestacadas().slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[78vh] w-full overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Casa moderna en venta"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
          <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
            <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
              Zona sur · Gran Buenos Aires
            </span>
            <h1 className="max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Encontrá el lugar donde empieza tu próxima historia
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
              Acompañamiento cercano y profesional en la compra, venta y alquiler de propiedades en Berazategui,
              Quilmes y alrededores.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/propiedades">
                  Ver propiedades <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
              >
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">Cómo te ayudamos</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Un servicio inmobiliario integral
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada operación es única. Te asesoramos en cada paso para que tomes decisiones con confianza y tranquilidad.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Home, title: "Venta", desc: "Tasación profesional y difusión de tu propiedad en los mejores canales." },
            { icon: Search, title: "Alquiler", desc: "Búsqueda y gestión de alquileres con contratos claros y seguros." },
            { icon: Handshake, title: "Asesoramiento", desc: "Te acompañamos en la negociación y en todo el proceso legal." },
            { icon: ShieldCheck, title: "Confianza", desc: "Trato honesto y personalizado en cada etapa de la operación." },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Propiedades destacadas */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">Oportunidades</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Propiedades destacadas
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/propiedades">
                Ver todas <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destacadas.map((p) => (
              <PropertyCard key={p.slug} propiedad={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Rosana breve */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/images/rosana.png"
              alt={`${siteConfig.nombre}, asesora inmobiliaria`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">Quién te acompaña</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Hola, soy {siteConfig.nombre}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Con años de experiencia en el mercado inmobiliario de la zona sur, mi objetivo es simple: que vivas cada
              operación con la tranquilidad de estar bien acompañado. Escucho lo que necesitás y trabajo para
              encontrar la mejor opción para vos y tu familia.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Creo en el trato cercano, la transparencia y el compromiso en cada detalle.
            </p>
            <Button asChild className="mt-8">
              <Link href="/sobre-rosana">
                Conocer más <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
            ¿Querés vender o alquilar tu propiedad?
          </h2>
          <p className="max-w-xl text-pretty text-primary-foreground/80">
            Contactame para una tasación sin cargo y descubrí el verdadero valor de tu propiedad en el mercado actual.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacto">Solicitar tasación</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

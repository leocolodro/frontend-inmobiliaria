import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, BedDouble, Bath, Car, Maximize, Ruler, CheckCircle2, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyCard } from "@/components/property-card"
import { formatPrecio, getPropiedad, propiedades } from "@/lib/properties"
import { whatsappUrl } from "@/lib/site"

export function generateStaticParams() {
  return propiedades.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const propiedad = getPropiedad(slug)
  if (!propiedad) return { title: "Propiedad no encontrada" }
  return {
    title: propiedad.titulo,
    description: propiedad.descripcion.slice(0, 155),
  }
}

export default async function PropiedadPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const propiedad = getPropiedad(slug)
  if (!propiedad) notFound()

  const mensaje = `Hola Rosana, me interesa la propiedad "${propiedad.titulo}" (${propiedad.localidad}). ¿Podrías darme más información?`

  const similares = propiedades
    .filter((p) => p.slug !== propiedad.slug && p.operacion === propiedad.operacion)
    .slice(0, 3)

  const specs = [
    { icon: BedDouble, label: "Dormitorios", value: propiedad.dormitorios },
    { icon: Bath, label: "Baños", value: propiedad.banos },
    { icon: Car, label: "Cochera", value: propiedad.cochera ? "Sí" : "No" },
    { icon: Maximize, label: "Cubierta", value: `${propiedad.superficieCubierta} m²` },
    { icon: Ruler, label: "Total", value: `${propiedad.superficieTotal} m²` },
    { icon: CheckCircle2, label: "Estado", value: propiedad.estado },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 text-muted-foreground">
        <Link href="/propiedades">
          <ArrowLeft className="size-4" /> Volver a propiedades
        </Link>
      </Button>

      <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr]">
        <div>
          <PropertyGallery imagenes={propiedad.imagenes} titulo={propiedad.titulo} />

          <div className="mt-10">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Descripción</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{propiedad.descripcion}</p>
          </div>

          <Separator className="my-8" />

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Características</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {specs.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                  <s.icon className="size-5 text-accent-foreground" />
                  <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
                  <p className="font-medium text-foreground">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar de contacto */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap gap-2">
              <Badge>{propiedad.operacion}</Badge>
              <Badge variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent">
                {propiedad.tipo}
              </Badge>
            </div>
            <h1 className="mt-4 font-serif text-2xl font-semibold leading-snug text-foreground">
              {propiedad.titulo}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 text-accent-foreground" />
              {propiedad.barrio}, {propiedad.localidad}
            </p>

            <p className="mt-5 font-serif text-3xl font-semibold text-foreground">
              {formatPrecio(propiedad.precio, propiedad.moneda)}
              {propiedad.operacion === "Alquiler" && (
                <span className="text-base font-normal text-muted-foreground"> /mes</span>
              )}
            </p>

            <Separator className="my-6" />

            <p className="text-sm text-muted-foreground">
              ¿Te interesa esta propiedad? Consultá sin compromiso y coordinamos una visita.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1fb959]">
                <a href={whatsappUrl(mensaje)} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contacto">Enviar consulta</Link>
              </Button>
            </div>
          </div>
        </aside>
      </div>

      {similares.length > 0 && (
        <section className="mt-20">
          <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">Propiedades similares</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similares.map((p) => (
              <PropertyCard key={p.slug} propiedad={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

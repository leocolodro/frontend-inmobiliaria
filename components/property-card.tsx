import Image from "next/image"
import Link from "next/link"
import { BedDouble, Bath, Car, Maximize } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatPrecio, type Propiedad } from "@/lib/properties"

export function PropertyCard({ propiedad }: { propiedad: Propiedad }) {
  return (
    <Link
      href={`/propiedades/${propiedad.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={propiedad.imagenes[0] || "/placeholder.svg"}
          alt={propiedad.titulo}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge className="bg-background/90 text-foreground hover:bg-background/90">{propiedad.operacion}</Badge>
          <Badge variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent">
            {propiedad.tipo}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-sm text-muted-foreground">
            {propiedad.barrio}, {propiedad.localidad}
          </p>
          <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">{propiedad.titulo}</h3>
        </div>

        <p className="mt-auto font-serif text-2xl font-semibold text-foreground">
          {formatPrecio(propiedad.precio, propiedad.moneda)}
          {propiedad.operacion === "Alquiler" && (
            <span className="text-sm font-normal text-muted-foreground"> /mes</span>
          )}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-border/60 pt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="size-4 text-accent-foreground" /> {propiedad.dormitorios}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="size-4 text-accent-foreground" /> {propiedad.banos}
          </span>
          {propiedad.cochera && (
            <span className="flex items-center gap-1.5">
              <Car className="size-4 text-accent-foreground" /> Cochera
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Maximize className="size-4 text-accent-foreground" /> {propiedad.superficieCubierta} m²
          </span>
        </div>
      </div>
    </Link>
  )
}

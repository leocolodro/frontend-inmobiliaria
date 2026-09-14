import type { Metadata } from "next"
import { PropertyExplorer } from "@/components/property-explorer"

export const metadata: Metadata = {
  title: "Propiedades",
  description:
    "Explorá casas, departamentos, PH y terrenos en venta y alquiler en Berazategui, Quilmes y zona sur del Gran Buenos Aires.",
}

export default function PropiedadesPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">Catálogo</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-foreground sm:text-5xl">Propiedades</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Encontrá tu próximo hogar o tu mejor inversión. Usá los filtros para acotar la búsqueda por operación,
            tipo y localidad.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PropertyExplorer />
      </section>
    </>
  )
}

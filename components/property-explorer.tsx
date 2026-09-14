"use client"

import { useMemo, useState } from "react"
import { SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PropertyCard } from "@/components/property-card"
import {
  localidades,
  operaciones,
  propiedades,
  tiposPropiedad,
  type Operacion,
  type TipoPropiedad,
} from "@/lib/properties"

const TODOS = "todos"

const operacionItems: Record<string, string> = {
  [TODOS]: "Todas las operaciones",
  Venta: "Venta",
  Alquiler: "Alquiler",
}

const tipoItems: Record<string, string> = {
  [TODOS]: "Todos los tipos",
  Casa: "Casa",
  Departamento: "Departamento",
  PH: "PH",
  Terreno: "Terreno",
}

const localidadItems: Record<string, string> = {
  [TODOS]: "Todas las localidades",
  Berazategui: "Berazategui",
  Quilmes: "Quilmes",
  Hudson: "Hudson",
  Ranelagh: "Ranelagh",
}

const ordenItems: Record<string, string> = {
  relevancia: "Más relevantes",
  "precio-asc": "Menor precio",
  "precio-desc": "Mayor precio",
}

export function PropertyExplorer() {
  const [operacion, setOperacion] = useState<string>(TODOS)
  const [tipo, setTipo] = useState<string>(TODOS)
  const [localidad, setLocalidad] = useState<string>(TODOS)
  const [orden, setOrden] = useState<string>("relevancia")

  const resultados = useMemo(() => {
    const filtradas = propiedades.filter((p) => {
      if (operacion !== TODOS && p.operacion !== (operacion as Operacion)) return false
      if (tipo !== TODOS && p.tipo !== (tipo as TipoPropiedad)) return false
      if (localidad !== TODOS && p.localidad !== localidad) return false
      return true
    })

    // Ordenamos por precio normalizando a USD aproximado para comparar.
    const aprox = (moneda: string, precio: number) => (moneda === "USD" ? precio : precio / 1000)

    if (orden === "precio-asc") {
      filtradas.sort((a, b) => aprox(a.moneda, a.precio) - aprox(b.moneda, b.precio))
    } else if (orden === "precio-desc") {
      filtradas.sort((a, b) => aprox(b.moneda, b.precio) - aprox(a.moneda, a.precio))
    }

    return filtradas
  }, [operacion, tipo, localidad, orden])

  const hayFiltros = operacion !== TODOS || tipo !== TODOS || localidad !== TODOS

  const limpiar = () => {
    setOperacion(TODOS)
    setTipo(TODOS)
    setLocalidad(TODOS)
    setOrden("relevancia")
  }

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
          <SlidersHorizontal className="size-4 text-accent-foreground" />
          Filtrar propiedades
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Select value={operacion} onValueChange={(v) => setOperacion(v ?? TODOS)} items={operacionItems}>
            <SelectTrigger aria-label="Operación">
              <SelectValue placeholder="Operación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TODOS}>Todas las operaciones</SelectItem>
              {operaciones.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={tipo} onValueChange={(v) => setTipo(v ?? TODOS)} items={tipoItems}>
            <SelectTrigger aria-label="Tipo de propiedad">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TODOS}>Todos los tipos</SelectItem>
              {tiposPropiedad.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={localidad} onValueChange={(v) => setLocalidad(v ?? TODOS)} items={localidadItems}>
            <SelectTrigger aria-label="Localidad">
              <SelectValue placeholder="Localidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TODOS}>Todas las localidades</SelectItem>
              {localidades.map((l) => (
                <SelectItem key={l} value={l}>
                  {l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={orden} onValueChange={(v) => setOrden(v ?? "relevancia")} items={ordenItems}>
            <SelectTrigger aria-label="Ordenar">
              <SelectValue placeholder="Ordenar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevancia">Más relevantes</SelectItem>
              <SelectItem value="precio-asc">Menor precio</SelectItem>
              <SelectItem value="precio-desc">Mayor precio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {hayFiltros && (
          <div className="mt-4">
            <Button variant="ghost" size="sm" onClick={limpiar} className="text-muted-foreground">
              <X className="size-4" /> Limpiar filtros
            </Button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {resultados.length} {resultados.length === 1 ? "propiedad encontrada" : "propiedades encontradas"}
        </p>
      </div>

      {resultados.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resultados.map((p) => (
            <PropertyCard key={p.slug} propiedad={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center">
          <p className="text-muted-foreground">No encontramos propiedades con esos filtros.</p>
          <Button variant="outline" onClick={limpiar} className="mt-4">
            Ver todas las propiedades
          </Button>
        </div>
      )}
    </div>
  )
}

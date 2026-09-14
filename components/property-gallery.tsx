"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function PropertyGallery({ imagenes, titulo }: { imagenes: string[]; titulo: string }) {
  const [activa, setActiva] = useState(0)

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <Image
          src={imagenes[activa] || "/placeholder.svg"}
          alt={`${titulo} — imagen ${activa + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
      </div>
      {imagenes.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {imagenes.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActiva(i)}
              aria-label={`Ver imagen ${i + 1}`}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-xl ring-2 transition-all",
                activa === i ? "ring-accent-foreground" : "ring-transparent hover:ring-border",
              )}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`${titulo} — miniatura ${i + 1}`}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { whatsappUrl } from "@/lib/site"

export function ContactForm() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const nombre = String(data.get("nombre") || "")
    const telefono = String(data.get("telefono") || "")
    const email = String(data.get("email") || "")
    const mensaje = String(data.get("mensaje") || "")

    const texto = `Hola Rosana, soy ${nombre}.\n${mensaje}\n\nTel: ${telefono}\nEmail: ${email}`
    window.open(whatsappUrl(texto), "_blank", "noopener,noreferrer")
    setEnviado(true)
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre y apellido</Label>
          <Input id="nombre" name="nombre" required placeholder="Tu nombre" autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono</Label>
          <Input id="telefono" name="telefono" required placeholder="Tu teléfono" autoComplete="tel" inputMode="tel" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" autoComplete="email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="Contame qué estás buscando o sobre qué propiedad querés consultar."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="size-4" /> Enviar consulta
      </Button>

      {enviado && (
        <p className="flex items-center gap-2 text-sm text-accent-foreground">
          <CheckCircle2 className="size-4" />
          Abrimos WhatsApp para que envíes tu consulta. ¡Gracias por escribir!
        </p>
      )}
    </form>
  )
}

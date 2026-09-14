// Datos de contacto editables. Reemplazar por los datos reales de Rosana.
export const siteConfig = {
  nombre: "Rosana Giglio",
  subtitulo: "Servicios Inmobiliarios",
  // Número de WhatsApp en formato internacional sin "+" ni espacios.
  whatsapp: "5491100000000",
  telefono: "+54 9 11 0000-0000",
  email: "contacto@rosanagiglio.com",
  direccion: "Berazategui, Buenos Aires, Argentina",
  redes: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
}

export function whatsappUrl(mensaje?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base
}

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/propiedades", label: "Propiedades" },
  { href: "/sobre-rosana", label: "Sobre Rosana" },
  { href: "/contacto", label: "Contacto" },
]

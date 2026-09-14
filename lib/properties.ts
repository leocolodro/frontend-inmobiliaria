export type Operacion = "Venta" | "Alquiler"

export type TipoPropiedad = "Casa" | "Departamento" | "PH" | "Terreno"

export type Propiedad = {
  slug: string
  titulo: string
  operacion: Operacion
  tipo: TipoPropiedad
  localidad: string
  barrio: string
  precio: number
  moneda: "USD" | "ARS"
  dormitorios: number
  banos: number
  cochera: boolean
  superficieCubierta: number
  superficieTotal: number
  estado: string
  descripcion: string
  imagenes: string[]
  destacada: boolean
}

export const localidades = ["Berazategui", "Quilmes", "Hudson", "Ranelagh"] as const

export const tiposPropiedad: TipoPropiedad[] = ["Casa", "Departamento", "PH", "Terreno"]

export const operaciones: Operacion[] = ["Venta", "Alquiler"]

export const propiedades: Propiedad[] = [
  {
    slug: "casa-moderna-ranelagh",
    titulo: "Casa moderna con jardín",
    operacion: "Venta",
    tipo: "Casa",
    localidad: "Ranelagh",
    barrio: "Barrio Parque",
    precio: 189000,
    moneda: "USD",
    dormitorios: 3,
    banos: 2,
    cochera: true,
    superficieCubierta: 140,
    superficieTotal: 320,
    estado: "Excelente",
    descripcion:
      "Amplia casa de dos plantas ubicada en una zona tranquila y residencial. Cuenta con living comedor luminoso, cocina integrada, tres dormitorios y un cómodo jardín ideal para disfrutar en familia. Construcción moderna con excelentes terminaciones.",
    imagenes: ["/images/prop-1.png", "/images/prop-interior-1.png", "/images/prop-interior-2.png"],
    destacada: true,
  },
  {
    slug: "departamento-luminoso-quilmes",
    titulo: "Departamento luminoso a estrenar",
    operacion: "Venta",
    tipo: "Departamento",
    localidad: "Quilmes",
    barrio: "Centro",
    precio: 112000,
    moneda: "USD",
    dormitorios: 2,
    banos: 1,
    cochera: true,
    superficieCubierta: 68,
    superficieTotal: 72,
    estado: "A estrenar",
    descripcion:
      "Moderno departamento de dos ambientes con excelente distribución y mucha luz natural. Ubicado a pocas cuadras del centro comercial y con fácil acceso al transporte. Ideal para primera vivienda o inversión.",
    imagenes: ["/images/prop-2.png", "/images/prop-interior-1.png", "/images/prop-interior-2.png"],
    destacada: true,
  },
  {
    slug: "casa-con-pileta-hudson",
    titulo: "Casa con pileta y parque",
    operacion: "Venta",
    tipo: "Casa",
    localidad: "Hudson",
    barrio: "Country",
    precio: 265000,
    moneda: "USD",
    dormitorios: 4,
    banos: 3,
    cochera: true,
    superficieCubierta: 210,
    superficieTotal: 600,
    estado: "Muy bueno",
    descripcion:
      "Espectacular casa en zona de country con amplio parque y pileta. Cuenta con cuatro dormitorios, suite principal, living con hogar y galería con parrilla. Un entorno seguro y natural para vivir todo el año.",
    imagenes: ["/images/prop-3.png", "/images/prop-interior-1.png", "/images/prop-interior-2.png"],
    destacada: true,
  },
  {
    slug: "departamento-alquiler-berazategui",
    titulo: "Departamento en alquiler",
    operacion: "Alquiler",
    tipo: "Departamento",
    localidad: "Berazategui",
    barrio: "Centro",
    precio: 350000,
    moneda: "ARS",
    dormitorios: 1,
    banos: 1,
    cochera: false,
    superficieCubierta: 45,
    superficieTotal: 45,
    estado: "Bueno",
    descripcion:
      "Cómodo departamento de un ambiente amplio, ideal para una persona o pareja. Ubicación céntrica con todos los servicios a mano. Edificio con seguridad y bajas expensas.",
    imagenes: ["/images/prop-4.png", "/images/prop-2.png", "/images/prop-interior-2.png"],
    destacada: true,
  },
  {
    slug: "ph-reciclado-quilmes",
    titulo: "PH reciclado a nuevo",
    operacion: "Venta",
    tipo: "PH",
    localidad: "Quilmes",
    barrio: "Quilmes Oeste",
    precio: 98000,
    moneda: "USD",
    dormitorios: 2,
    banos: 1,
    cochera: false,
    superficieCubierta: 62,
    superficieTotal: 80,
    estado: "Reciclado",
    descripcion:
      "PH totalmente reciclado a nuevo, sin expensas y con patio propio. Dos dormitorios, cocina moderna y living comedor integrado. Excelente relación precio calidad en una zona en crecimiento.",
    imagenes: ["/images/prop-5.png", "/images/prop-interior-1.png", "/images/prop-interior-2.png"],
    destacada: true,
  },
  {
    slug: "casa-familiar-berazategui",
    titulo: "Casa familiar en barrio tranquilo",
    operacion: "Alquiler",
    tipo: "Casa",
    localidad: "Berazategui",
    barrio: "Plátanos",
    precio: 620000,
    moneda: "ARS",
    dormitorios: 3,
    banos: 2,
    cochera: true,
    superficieCubierta: 120,
    superficieTotal: 280,
    estado: "Muy bueno",
    descripcion:
      "Casa ideal para familia en un barrio residencial y tranquilo. Tres dormitorios, dos baños, cochera cubierta y amplio fondo con quincho. A metros de escuelas y comercios.",
    imagenes: ["/images/prop-6.png", "/images/prop-interior-1.png", "/images/prop-interior-2.png"],
    destacada: true,
  },
]

export function formatPrecio(precio: number, moneda: "USD" | "ARS"): string {
  const simbolo = moneda === "USD" ? "USD" : "$"
  return `${simbolo} ${precio.toLocaleString("es-AR")}`
}

export function getPropiedad(slug: string): Propiedad | undefined {
  return propiedades.find((p) => p.slug === slug)
}

export function getPropiedadesDestacadas(): Propiedad[] {
  return propiedades.filter((p) => p.destacada)
}

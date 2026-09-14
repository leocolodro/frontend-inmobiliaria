import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/site"

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold text-foreground">{siteConfig.nombre}</span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              {siteConfig.subtitulo}
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Asesoramiento inmobiliario personalizado en Berazategui, Quilmes y zona sur del Gran Buenos Aires.
          </p>
          <div className="flex gap-3 pt-1">
            <Link
              href={siteConfig.redes.instagram}
              aria-label="Instagram"
              className="rounded-full border border-border bg-background p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <InstagramIcon className="size-4" />
            </Link>
            <Link
              href={siteConfig.redes.facebook}
              aria-label="Facebook"
              className="rounded-full border border-border bg-background p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <FacebookIcon className="size-4" />
            </Link>
            <Link
              href={siteConfig.redes.linkedin}
              aria-label="LinkedIn"
              className="rounded-full border border-border bg-background p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Navegación</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Contacto</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-accent-foreground" />
              <a href={`tel:${siteConfig.telefono.replace(/\s/g, "")}`} className="hover:text-foreground">
                {siteConfig.telefono}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-accent-foreground" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
              <span>{siteConfig.direccion}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {siteConfig.nombre}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

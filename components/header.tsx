"use client"

import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-bold tracking-tight">
              MARTIN ALUMINUM <span className="text-accent">AND SCREEN</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="#services" className="hover:text-accent transition-colors font-medium">
              Servicios
            </Link>
            <Link href="#gallery" className="hover:text-accent transition-colors font-medium">
              Galería
            </Link>
            <Link href="#reviews" className="hover:text-accent transition-colors font-medium">
              Reseñas
            </Link>
            <Link href="#contact" className="hover:text-accent transition-colors font-medium">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link href="tel:813-735-3079" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-5 w-5" />
              <span className="font-medium">813-735-3079</span>
            </Link>
            <Link
              href="mailto:roberqui75@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">roberqui75@gmail.com</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <Link href="tel:813-735-3079" className="hover:text-accent transition-colors">
              <Phone className="h-5 w-5" />
            </Link>
            <Link href="mailto:roberqui75@gmail.com" className="hover:text-accent transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

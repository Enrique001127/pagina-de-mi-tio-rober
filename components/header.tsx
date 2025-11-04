"use client"

import type React from "react"

import { Mail, Facebook, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Header() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

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
            <Link
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "#services")}
              className="hover:text-accent transition-colors font-medium"
            >
              Servicios
            </Link>
            <Link
              href="#gallery"
              onClick={(e) => handleSmoothScroll(e, "#gallery")}
              className="hover:text-accent transition-colors font-medium"
            >
              Galería
            </Link>
            <Link
              href="#reviews"
              onClick={(e) => handleSmoothScroll(e, "#reviews")}
              className="hover:text-accent transition-colors font-medium"
            >
              Reseñas
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="hover:text-accent transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://wa.me/18137353079"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link href="mailto:roberqui75@gmail.com" className="hover:text-accent transition-colors" title="Gmail">
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/share/1FQYVrfnmE/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              title="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <Link
              href="https://wa.me/18137353079"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link href="mailto:roberqui75@gmail.com" className="hover:text-accent transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/share/1FQYVrfnmE/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

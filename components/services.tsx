"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Grid3x3, Fence, Hammer } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Screen Rooms",
    description:
      "Espacios cerrados con malla que protegen de insectos mientras disfrutas del aire libre. Perfectos para patios y terrazas.",
  },
  {
    icon: Grid3x3,
    title: "Rescreen",
    description:
      "Renovación y reemplazo de mallas dañadas. Restauramos tus screens existentes con materiales de primera calidad.",
  },
  {
    icon: Fence,
    title: "Lanais",
    description:
      "Espacios cubiertos estilo Florida que amplían tu área de vida. Diseños personalizados que se adaptan a tu hogar.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialistas en construcción y remodelación de espacios exteriores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-xl group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

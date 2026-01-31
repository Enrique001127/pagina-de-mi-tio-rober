"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const initialReviews = [
  {
    id: 1,
    name: "Amanda Danvers",
    rating: 5,
    comment: "Quedé muy satisfecha con el trabajo realizado en el lanai de mi patio. Fueron responsables, cumplieron con lo acordado y trabajaron con mucha dedicación. El resultado quedó muy bonito y de buena calidad. Los recomiendo por su seriedad y buen trabajo.",
    date: "2025-08-29",
  },
  {
    id: 2,
    name: "Maria Garcia",
    rating: 3,
    comment: "Very satisfied with the porsh installation. Great quality materials and attention to detail.",
    date: "2023-10-20",
  },
  {
    id: 3,
    name: "Robert Johnson",
    rating: 4,
    comment: "Outstanding service from start to finish. The lanai remodeling exceeded our expectations!",
    date: "2024-04-07",
  },
]

export function Reviews() {
  const [reviews, setReviews] = useState(initialReviews)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newReview = {
      id: reviews.length + 1,
      ...formData,
      date: new Date().toISOString().split("T")[0],
    }
    setReviews([newReview, ...reviews])
    setFormData({ name: "", rating: 5, comment: "" })
    setShowForm(false)
  }

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo Que Dicen Nuestros <span className="text-accent">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {showForm ? "Cancelar" : "Dejar una Reseña"}
          </Button>
        </div>

        {/* Formulario de nueva reseña */}
        {showForm && (
          <Card className="max-w-2xl mx-auto p-6 mb-12 border-accent/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Calificación</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="focus:outline-none"
                      aria-label={`Calificación ${star} estrella${star !== 1 ? 's' : ''}`}
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= formData.rating ? "fill-accent text-accent" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium mb-2">
                  Comentario
                </label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  required
                  placeholder="Cuéntanos sobre tu experiencia..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Publicar Reseña
              </Button>
            </form>
          </Card>
        )}

        {/* Lista de reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(review.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="text-foreground mb-4 leading-relaxed">{review.comment}</p>
              <p className="font-semibold text-primary">— {review.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

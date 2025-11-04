"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Screen Room Installation",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.45.05_465694c1-Fjne80We00Ple1rvi0GAAWAN2phrrE.jpg",
    category: "Screen Rooms",
  },
  {
    id: 2,
    title: "Custom Pergola",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.45.05_480cb1fc-fujuNCYuutatSsya1pUxfyUqMkAO2F.jpg",
    category: "Pergolas",
  },
  {
    id: 3,
    title: "Lanai Remodeling",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.45.05_466a5959-vSiGCFqBjJ2yOvGqhG1Vj8GdNnZ6Be.jpg",
    category: "Lanais",
  },
  {
    id: 4,
    title: "Pool Screen Enclosure",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.45.05_08085883-3QoK4RqmdoCeEh7LT2gmLXX8Vv6sHa.jpg",
    category: "Screen Rooms",
  },
  {
    id: 5,
    title: "Rescreen Service",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.45.05_250bfd25-t3KWGh19oCeS9X9ahWRhLY3Eb556sL.jpg",
    category: "Rescreen",
  },
  {
    id: 6,
    title: "Patio Cover",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.45.04_5f686b02-CXbMOHzqZ4HgfmeTSwKoGwrgoU0n1N.jpg",
    category: "Pergolas",
  },
  {
    id: 7,
    title: "Outdoor Living Space",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.45.02_661ce46f-crwalnC5nCFnI2hNOQB8gik3EXvEXb.jpg",
    category: "Screen Rooms",
  },
  {
    id: 8,
    title: "Custom Screen Installation",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.45.02_cb62349c-8EhdYbQlK957ClR6fSc20UpP8ighap.jpg",
    category: "Rescreen",
  },
  {
    id: 9,
    title: "Patio Enclosure",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.45.03_4b72e34e-xX1liYvGsIRabyRmidOFlwPocjkYI6.jpg",
    category: "Lanais",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-accent">Proyectos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra galería de trabajos completados y descubre la calidad de nuestras instalaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(project.id)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl w-full aspect-[4/3]">
              <Image
                src={projects.find((p) => p.id === selectedImage)?.image || ""}
                alt={projects.find((p) => p.id === selectedImage)?.title || ""}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

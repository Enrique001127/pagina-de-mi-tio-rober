export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/pagina-de-mi-tio-rober/img/Imagen%20de%20WhatsApp%202025-11-04%20a%20las%2014.44.58_bfd1c78c-TECal5IVpf65z9oIqhcNBQvqR3LSAM.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg">
          CONSTRUCCIÓN Y REMODELACIÓN DE PATIOS
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed text-pretty drop-shadow-md">
          Diseñamos, fabricamos e instalamos screens que combinan estilo, funcionalidad y resistencia.
          Protege tu espacio exterior del sol y disfruta de mayor confort con soluciones personalizadas y materiales de
          alta calidad.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  )
}

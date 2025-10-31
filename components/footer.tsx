export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              MARTIN ALUMINUM <span className="text-accent">AND SCREEN</span>
            </h3>
            <p className="text-sm text-primary-foreground/80">Construcción y Remodelación de Patios</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Martin Aluminum And SCREEN. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

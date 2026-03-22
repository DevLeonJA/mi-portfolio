export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} Juan Antonio León Cobos. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

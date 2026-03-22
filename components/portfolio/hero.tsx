import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">
              <Image
                src="/profile.jpg"
                alt="Tu Nombre - Foto de perfil"
                fill
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg shadow-primary/10"
                priority
              />
            </div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Disponible para trabajar
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Hola, soy{" "}
            <span className="text-primary">Juan Antonio</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Estudiante de ingeniería de software con pasión por el desarrollo web, aplicaciones móviles y la inteligencia artificial. Siempre buscando aprender nuevas tecnologías y contribuir a proyectos innovadores.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <a href="#contacto">Contactar</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#webs">Ver proyectos</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/julexo/julexo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/juan-antonio-león-cobos-410409290/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:juanantonioleoncobos@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

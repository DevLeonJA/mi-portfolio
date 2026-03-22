import { ProjectCard, Project } from "./project-card"

const webProjects: Project[] = [
  {
    title: "E-Commerce Store",
    description: "Tienda online completa con carrito de compras, pasarela de pago y panel de administración.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    demoUrl: "https://ejemplo.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control con visualización de datos en tiempo real y reportes personalizados.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    demoUrl: "https://ejemplo.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Blog Personal",
    description: "Blog con sistema de gestión de contenido, comentarios y suscripción por email.",
    image: "/projects/blog.jpg",
    technologies: ["Next.js", "MDX", "Supabase", "Tailwind"],
    demoUrl: "https://ejemplo.com",
    repoUrl: "https://github.com",
  },
]

export function WebsSection() {
  return (
    <section id="webs" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Proyectos Web
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis proyectos web más destacados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

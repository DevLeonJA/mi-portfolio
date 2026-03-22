import { ProjectCard, Project } from "./project-card"

const appProjects: Project[] = [
  {
    title: "FitTracker",
    description: "App de seguimiento de entrenamientos con estadísticas, rutinas personalizadas y recordatorios.",
    image: "/projects/fitness.jpg",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "https://ejemplo.com",
    repoUrl: "https://github.com",
  },
  {
    title: "TaskMaster",
    description: "Gestor de tareas con categorías, recordatorios y sincronización en la nube.",
    image: "/projects/tasks.jpg",
    technologies: ["Flutter", "Dart", "SQLite"],
    demoUrl: "https://ejemplo.com",
    repoUrl: "https://github.com",
  },
  {
    title: "WeatherNow",
    description: "App del tiempo con pronóstico extendido, mapas interactivos y alertas meteorológicas.",
    image: "/projects/weather.jpg",
    technologies: ["React Native", "API REST", "Geolocation"],
    demoUrl: "https://ejemplo.com",
    repoUrl: "https://github.com",
  },
]

export function AppsSection() {
  return (
    <section id="apps" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Aplicaciones
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Apps móviles que he desarrollado para iOS y Android
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

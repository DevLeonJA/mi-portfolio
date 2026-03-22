const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "CSS",
  "Tailwind CSS",
  "HTML",
  "JavaScript",
  "MongoDB",
  "sqlDeveloper",
  "Java",
  "C++",
]

export function About() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
              Soy un estudiante de Ingeniería de Informática en la rama de Software terminando mi carrera en la universidad de Huelva (UHU). 
              Me apasiona el desarrollo web y de aplicaciones, además de la inteligencia artificial. 
            </p>
            <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
              He trabajado en proyectos de la universidad usando Java, C++, MongoDB, sqlDeveloper, HTML, CSS y JavaScript.
              Además de mis estudios, he desarrollado proyectos personales utilizando tecnologías como React, Next.js, Node.js, 
              Typescript y Tailwind CSS, lo que me ha permitido ampliar mis conocimientos y aprender nuevas habilidades en el desarrollo de software.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Cuando no estoy programando, me gusta aprender nuevas tecnologías, 
              y explorar el mundo de la inteligencia artificial. Siempre estoy buscando oportunidades para 
              crecer profesionalmente y contribuir a proyectos innovadores.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { WebsSection } from "@/components/portfolio/webs-section"
import { AppsSection } from "@/components/portfolio/apps-section"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <WebsSection />
      <AppsSection />
      <Contact />
      <Footer />
    </main>
  )
}

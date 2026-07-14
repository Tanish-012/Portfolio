import { Navigation } from "@/components/portfolio/navigation"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { Achievements } from "@/components/portfolio/achievements"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}

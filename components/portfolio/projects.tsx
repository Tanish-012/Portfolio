"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Interv AI",
    description: "An AI-powered mock interview platform that simulates technical interviews with real-time voice interactions. Users can practice role-specific interviews, receive AI-generated feedback, and track their performance to improve communication and problem-solving skills.",
    image: "/projects/mock-interview.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Vapi AI", "Gemini API", "Clerk Auth"],
    github: "https://github.com/Tanish-012/Interv-AI",
    category: "ai",
  },
  {
    title: "Phishing URL Detector",
    description: "A full-stack web application that detects malicious and phishing URLs using machine learning and feature extraction techniques. It analyzes website characteristics to provide fast, reliable predictions through an intuitive user interface.",
    image: "/projects/phishing-detector.png",
    tech: ["Java", "Spring Boot", "React.js", "Tailwind CSS", "Weka ML", "Jsoup", "Vite"],
    github: "https://github.com/Tanish-012/phishing-url-detector",
    category: "ai",
  },
  {
    title: "Automated Attendence System",
    description: "A web-based attendance management system that streamlines student attendance tracking through a centralized dashboard. It enables efficient attendance recording, secure data management, and easy access to attendance reports for administrators and instructors.",
    image: "/projects/rural-edufy.png",
    tech: ["React.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/Tanish-012/Automated-Attendence-System",
    category: "fullstack",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "AI & Machine Learning" },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card rounded-2xl overflow-hidden group"
      style={{
        transform: isHovered ? "perspective(1000px) rotateY(2deg) rotateX(2deg)" : "perspective(1000px) rotateY(0) rotateX(0)",
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-secondary/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <Folder className="h-16 w-16 text-primary/30" />
        </div>
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
        />

        {/* Overlay with links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass rounded-full hover:glow"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-6 w-6" />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass rounded-full hover:glow"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="h-6 w-6" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-secondary/50 rounded-full text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-3 py-1 text-xs font-mono bg-secondary/50 rounded-full text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-all duration-300 ${activeCategory === category.id
                ? "bg-primary text-primary-foreground glow"
                : "glass-card hover:bg-secondary/50"
                }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass-card border-primary/30 hover:border-primary/60"
            asChild
          >
            <a href="https://github.com/Tanish-012" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

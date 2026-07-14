"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Layout, Server, Database, Wrench, BookOpen } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "C++", level: 82 },
      { name: "C", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    title: "Cloud & Developer Tools",
    icon: Wrench,
    skills: [
      { name: "AWS Lambda & Services", level: 82 },
      { name: "Git & GitHub", level: 92 },
      { name: "Vercel", level: 88 },
      { name: "Postman", level: 85 },
    ],
  },
  {
    title: "Core CS Subjects",
    icon: BookOpen,
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "Object-Oriented Programming", level: 92 },
      { name: "Database Management Systems", level: 85 },
      { name: "Operating Systems", level: 82 },
      { name: "Computer Networks", level: 80 },
    ],
  },
]

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  const Icon = category.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card rounded-2xl p-6 hover:glow transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          className="p-3 rounded-xl bg-primary/10 text-primary"
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                style={{
                  backgroundSize: "200% 100%",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/10 blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

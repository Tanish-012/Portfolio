"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { GraduationCap, Target, Rocket, Calendar } from "lucide-react"

const stats = [
  { label: "Core Projects", value: 3, suffix: "" },
  { label: "B.Tech CGPA", value: 8, suffix: ".31/10" },
  { label: "Internships Completed", value: 1, suffix: "" },
  { label: "Hackathon Placements", value: 1, suffix: "" },
]

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Vellore Institute of Technology, Chennai",
    year: "Aug 2023 - Present",
    description: "CGPA: 8.31/10.0 | Focused on Data Structures & Algorithms, DBMS, OOP, OS, and Computer Networks.",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate developer on a journey to create impactful software
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {"I'm a B.Tech Computer Science and Engineering student at Vellore Institute of Technology, Chennai. I have a strong foundation in data structures, algorithms, and object-oriented programming, and I enjoy building highly-performant backend services and user interfaces."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {"My hands-on experience includes developing backend automation workflows and data pipelines as a Software Development Intern, as well as engineering end-to-end full-stack applications with Next.js, Spring Boot, React, and AWS."}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Rocket className="h-6 w-6 text-accent" />
                Career Goals
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I'm seeking software engineering roles and internships where I can apply my skills in backend systems, database aggregation, and cloud APIs. I aim to join engineering teams building high-quality products that demand performance, scalability, and robust system designs."}
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />
              
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 w-8 h-8 rounded-full glass-card flex items-center justify-center glow">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <span className="text-sm text-primary font-mono">{item.year}</span>
                    <h4 className="text-xl font-semibold mt-1">{item.degree}</h4>
                    <p className="text-muted-foreground">{item.school}</p>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:glow transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

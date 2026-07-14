"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Medal, Star, Award, Code2, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "2nd Place – GlitchCon Hackathon, VIT Chennai",
    description: "Secured 2nd position in a national-level hackathon by building a real-time collaboration platform; led a 4-member team through ideation, full-stack development, and final pitch within a 36-hour sprint.",
    category: "Hackathon",
    highlight: true,
  },
]

export function Achievements() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
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
            Achievements & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Recognition and milestones from my academic and hackathon journey
          </p>
        </motion.div>

        {/* Centered Achievement Card */}
        <div className="flex justify-center">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card rounded-2xl p-8 hover:glow transition-all duration-300 group ring-1 ring-primary/30 max-w-2xl w-full"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shrink-0"
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-primary/80 mb-2 block uppercase tracking-wider">
                      {achievement.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center sm:justify-start gap-2 border-t border-border/30 pt-4">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs text-muted-foreground font-medium">National-Level Hackathon Placement</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Github, Code, Trophy, TrendingUp, CheckCircle2, Target } from "lucide-react"

const githubStats = {
  contributions: 847,
  repositories: 42,
  stars: 156,
  followers: 234,
}

const leetcodeStats = {
  totalSolved: 523,
  easy: 187,
  medium: 256,
  hard: 80,
  ranking: 15234,
  contestRating: 1847,
}

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
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
  }, [isInView, value, duration])

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}</span>
}

function ContributionHeatmap() {
  const weeks = 52
  const days = 7
  const contributions = useRef(
    Array.from({ length: weeks * days }, () => Math.floor(Math.random() * 5))
  ).current

  const getColor = (level: number) => {
    const colors = [
      "bg-secondary/30",
      "bg-primary/25",
      "bg-primary/50",
      "bg-primary/75",
      "bg-primary",
    ]
    return colors[level]
  }

  return (
    <div className="overflow-x-auto pb-2">
      <div className="inline-flex gap-1">
        {Array.from({ length: weeks }).map((_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.2, 
                  delay: (weekIndex * days + dayIndex) * 0.002 
                }}
                className={`w-3 h-3 rounded-sm ${getColor(contributions[weekIndex * days + dayIndex])}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function LeetCodeProgress({ label, solved, total, color }: { label: string; solved: number; total: number; color: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const percentage = (solved / total) * 100

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-muted-foreground font-mono">{solved}/{total}</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  )
}

export function CodingProfiles() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-accent/10 blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My journey in competitive programming and open source
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">GitHub</h3>
                <p className="text-muted-foreground text-sm">@alexchen</p>
              </div>
            </div>

            {/* Contribution Heatmap */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">
                <AnimatedCounter value={githubStats.contributions} /> contributions in the last year
              </p>
              <ContributionHeatmap />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Repositories", value: githubStats.repositories, icon: Code },
                { label: "Stars Earned", value: githubStats.stars, icon: Trophy },
                { label: "Followers", value: githubStats.followers, icon: TrendingUp },
                { label: "Contributions", value: githubStats.contributions, icon: CheckCircle2 },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-secondary/30 rounded-xl">
                  <stat.icon className="h-5 w-5 text-primary mb-2" />
                  <div className="text-2xl font-bold">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">LeetCode</h3>
                <p className="text-muted-foreground text-sm">@alexchen</p>
              </div>
            </div>

            {/* Total Solved */}
            <div className="text-center mb-6 p-6 bg-secondary/30 rounded-xl">
              <div className="text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter value={leetcodeStats.totalSolved} />
              </div>
              <p className="text-muted-foreground">Problems Solved</p>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4 mb-6">
              <LeetCodeProgress 
                label="Easy" 
                solved={leetcodeStats.easy} 
                total={800} 
                color="bg-green-500"
              />
              <LeetCodeProgress 
                label="Medium" 
                solved={leetcodeStats.medium} 
                total={1700} 
                color="bg-yellow-500"
              />
              <LeetCodeProgress 
                label="Hard" 
                solved={leetcodeStats.hard} 
                total={750} 
                color="bg-red-500"
              />
            </div>

            {/* Rating Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/30 rounded-xl">
                <Target className="h-5 w-5 text-accent mb-2" />
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={leetcodeStats.contestRating} />
                </div>
                <div className="text-xs text-muted-foreground">Contest Rating</div>
              </div>
              <div className="p-4 bg-secondary/30 rounded-xl">
                <TrendingUp className="h-5 w-5 text-accent mb-2" />
                <div className="text-2xl font-bold">
                  Top <AnimatedCounter value={Math.floor((leetcodeStats.ranking / 500000) * 100)} />%
                </div>
                <div className="text-xs text-muted-foreground">Global Ranking</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

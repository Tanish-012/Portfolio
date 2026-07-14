"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Award, Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    type: "internship",
    title: "Software Development Intern",
    company: "Prozo",
    location: "Gurugram, India",
    period: "June 3 – July 3",
    description: [
      "Developed backend automation workflows using Node.js to streamline recurring reporting tasks",
      "Designed MongoDB Aggregation Pipelines to generate merchant and shipment reports for business analysis",
      "Automated scheduled data-processing workflows using AWS Lambda and Amazon EventBridge, reducing manual effort",
      "Integrated REST APIs to enable seamless data exchange between internal backend services",
      "Configured Amazon SES for automated transactional email notifications within backend pipelines",
      "Collaborated with cross-functional engineering teams in an Agile environment, using Git for version control",
    ],
    tech: ["Node.js", "MongoDB", "AWS Lambda", "Amazon EventBridge", "Amazon SES", "REST APIs", "Git"],
  },
]

const certifications = [
  {
    title: "Java Programming",
    issuer: "Professional Certification (OOP, DSA, Exception Handling, Multithreading)",
    date: "Completed",
  },
]

export function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional experience and certified technical expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
            >
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="relative pl-12 pb-10 last:pb-0"
                >
                  <div className="absolute left-0 w-8 h-8 rounded-full glass-card flex items-center justify-center glow">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>

                  <div className="glass-card rounded-xl p-6 hover:glow transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono bg-secondary/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="space-y-10">
            {/* Certifications */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-semibold mb-8 flex items-center gap-3"
              >
                <Award className="h-6 w-6 text-accent" />
                Certifications
              </motion.h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-card rounded-xl p-5 hover:glow transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold group-hover:gradient-text transition-all duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                          <Calendar className="h-3 w-3" />
                          {cert.date}
                        </div>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                          aria-label={`Verify ${cert.title} credential`}
                        >
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

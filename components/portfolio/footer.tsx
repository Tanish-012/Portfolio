"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <a href="#hero" className="text-2xl font-bold gradient-text">
              Tanish Kumar
            </a>
            <p className="text-muted-foreground text-sm mt-1">
              Software Engineer & Full Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: "https://https://github.com/Tanish-012", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tanish-kumar-109b96344/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kumartanish917@gmail.com", label: "Email" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            &copy; {currentYear} Tanish Kumar. Built with
            <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" />
            using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

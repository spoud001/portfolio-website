// src/app/components/Skills.tsx
'use client'
import { motion } from 'framer-motion'
import { Brain, Code2, Cpu, Database, Wrench, Move3D } from 'lucide-react'

const skills = [
  { name: 'JavaScript / TypeScript / React / Next.js', icon: <Code2 /> },
  { name: 'Python / AI / ML / OpenCV', icon: <Brain /> },
  { name: 'C++ / C / Qt / Algorithms', icon: <Cpu /> },
  { name: 'PostgreSQL / SQL / APIs', icon: <Database /> },
  { name: 'AR / VR / Unity / Unreal', icon: <Move3D /> },
  { name: 'Git / GitHub / AWS', icon: <Wrench /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark-surface text-center px-4">
      <motion.h2
        className="text-4xl font-bold text-neon-green mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills & Tools
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-dark-bg border border-neon-green rounded-lg p-6 hover:shadow-neon transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center gap-4 text-xl font-medium">
              <div className="text-neon-green text-3xl">{skill.icon}</div>
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

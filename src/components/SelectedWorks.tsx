import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Chat Application',
    subtitle: 'Real-Time Messaging Platform',
    description: 'Multi-page web app with real-time messaging, Firebase integration, supporting 50+ concurrent users',
    tech: ['React', 'Firebase', 'JavaScript', 'Bootstrap'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'UniTracker',
    subtitle: 'College Management System',
    description: 'Full-stack system for students, faculty, and admins with academic modules and 95% accessibility',
    tech: ['React', 'Node.js', 'MySQL', 'MongoDB'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Control Systems',
    subtitle: 'Polyhouse Smart Drying System',
    description: 'Embedded control system with sensor integration optimizing efficiency by 38%',
    tech: ['ESP32', 'Arduino', 'C++', 'Embedded C'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Database Migration',
    subtitle: 'Virtusa Internship Project',
    description: 'Legacy data migration reducing query failures by 85% with comprehensive testing',
    tech: ['Python', 'MySQL', 'Angular', 'Node.js'],
    gradient: 'from-green-500 to-emerald-500'
  }
]

export default function SelectedWorks() {
  return (
    <section className="bg-bg py-12 md:py-16" id="works">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-8">
          <div className="w-8 h-px bg-stroke inline-block mr-3" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Portfolio</span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1 }} className="text-3xl font-display italic mt-4">Featured <em>Projects</em></motion.h2>
          <p className="text-muted mt-2 max-w-2xl">A selection of projects showcasing full-stack development, embedded systems, and real-time solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <Card key={proj.title} project={proj} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ project, idx }: { project: typeof projects[0]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-surface border border-stroke rounded-3xl overflow-hidden h-64 md:h-72 flex flex-col justify-between p-6 cursor-pointer"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
      <div className="absolute inset-0 halftone opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <h3 className="text-lg font-medium text-text-primary">{project.title}</h3>
        <p className="text-sm text-muted/80 mt-1">{project.subtitle}</p>
        <p className="text-xs text-muted mt-3 leading-relaxed">{project.description}</p>
      </div>

      <div className="relative z-10 pt-4 border-t border-stroke/30">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="inline-block px-2 py-0.5 bg-stroke/30 text-xs text-muted/70 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-20">
        <div className="text-text-primary text-sm font-medium">View Project ↗</div>
      </div>
    </motion.div>
  )
}

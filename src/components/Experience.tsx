import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Database Migration Intern',
    company: 'Virtusa',
    duration: 'June 16 – July 16, 2025',
    highlights: [
      'Migrated legacy data to scalable architecture, reducing query failures by 85%',
      'Developed unit tests for SQL queries, CRUD operations, and edge cases using Python and Ruby',
      'Validated backend API logic, ensuring 100% data accuracy during migration',
      'Monitored migration using Angular dashboard, improving reporting efficiency'
    ],
    tech: ['Node.js', 'Ruby on Rails', 'Python', 'MySQL', 'Angular']
  },
  {
    role: 'Control System Engineer',
    company: 'Sony Spresense | Polyhouse Smart Drying System (Ongoing)',
    duration: 'Current',
    highlights: [
      'Developing modular control system to optimize polyhouse drying efficiency by 38%',
      'Integrating sensors, actuators, and inter-device communication for precise environmental control',
      'Calibrating control logic to reduce energy consumption by ~45%'
    ],
    tech: ['Sony Spresense', 'ESP32', 'Arduino Uno', 'DaisySeed', 'C++', 'Embedded C']
  },
  {
    role: 'Full Stack Developer',
    company: 'UniTracker - College Management System',
    duration: 'Academic Project',
    highlights: [
      'Built college management system supporting students, faculty, and administrators',
      'Implemented academic modules: marks viewing, grade appeals, timetable adjustments, research submissions',
      'Designed responsive UI for mobile, tablet, and desktop; achieved 95% accessibility compliance',
      'Conducted API and unit testing, reducing reported bugs by 30%'
    ],
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Responsive Design']
  },
  {
    role: 'Full Stack Developer',
    company: 'Chat Application - Real-Time Messaging Platform',
    duration: 'Personal Project',
    highlights: [
      'Developed multi-page client-side web app with Sign Up, Login, Chat, Settings, and FAQ',
      'Implemented real-time messaging, user authentication, and contact management',
      'Integrated Firebase for real-time database and cloud hosting; supported 50+ concurrent users'
    ],
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6)', 'Firebase']
  }
]

export default function Experience() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-12">
          <div className="w-8 h-px bg-stroke inline-block mr-3" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Background</span>
          <h2 className="text-3xl font-display italic mt-4">Experience & <em>Projects</em></h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-surface border border-stroke rounded-2xl p-6 md:p-8 hover:border-stroke/50 hover:bg-surface/80 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-text-primary">{exp.role}</h3>
                  <p className="text-sm text-muted mt-1">{exp.company}</p>
                </div>
                <span className="text-xs text-muted/70 mt-2 md:mt-0">{exp.duration}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted/90 flex gap-3">
                    <span className="text-accent-gradient mt-1">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-stroke/30">
                {exp.tech.map((t) => (
                  <span key={t} className="inline-block px-2 py-1 bg-stroke/20 text-xs text-muted/80 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C', 'C++', 'Embedded C', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Web Development',
    skills: ['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Express.js']
  },
  {
    title: 'Backend & Database',
    skills: ['MySQL', 'MongoDB', 'Firebase', 'REST APIs', 'CRUD Operations']
  },
  {
    title: 'Hardware & Embedded',
    skills: ['Arduino', 'ESP32', 'LPC2148', 'Sony Spresense', 'DaisySeed', 'Sensors', 'Actuators']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Visual Studio Code', 'Firebase', 'Angular', 'Docker', 'Linux']
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Technical Writing']
  }
]

export default function Skills() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-12">
          <div className="w-8 h-px bg-stroke inline-block mr-3" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Expertise</span>
          <h2 className="text-3xl font-display italic mt-4">Technical <em>Skills</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-surface border border-stroke rounded-2xl p-6"
            >
              <h3 className="text-sm font-medium text-text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 bg-stroke/30 text-xs text-muted rounded-full hover:bg-stroke/50 transition-colors"
                  >
                    {skill}
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

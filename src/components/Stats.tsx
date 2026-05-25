import React from 'react'

const stats = [
  { label: 'Internships', value: '3+' },
  { label: 'Projects Done', value: '10+' },
  { label: 'Papers Published', value: '1' },
]

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface border border-stroke p-8 rounded-2xl">
              <div className="text-4xl font-display italic mb-2">{s.value}</div>
              <div className="text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

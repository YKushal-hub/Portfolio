import React from 'react'

const entries = [
  { title: 'Design Systems 101', date: 'May 10, 2026', read: '6 min' },
  { title: 'Animating with GSAP', date: 'Apr 22, 2026', read: '8 min' },
  { title: 'HLS for Background Video', date: 'Mar 14, 2026', read: '5 min' },
  { title: 'Parallax Patterns', date: 'Feb 01, 2026', read: '7 min' }
]

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-8">
          <div className="w-8 h-px bg-stroke inline-block mr-3" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Recent thoughts</span>
          <h2 className="text-3xl font-display italic mt-4">Journal</h2>
          <p className="text-muted mt-2">Short essays and notes from work in design and engineering.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {entries.map((e) => (
            <div key={e.title} className="flex items-center gap-4 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px]">
              <div className="w-16 h-16 bg-surface rounded overflow-hidden" />
              <div className="flex-1">
                <div className="font-medium">{e.title}</div>
                <div className="text-sm text-muted">{e.date} • {e.read}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

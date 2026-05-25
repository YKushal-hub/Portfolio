import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = Array.from({ length: 6 }).map((_, i) => ({ id: i, title: `Play ${i + 1}` }))

export default function Explorations() {
  const pinRef = useRef<HTMLDivElement | null>(null)
  const colsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!pinRef.current || !colsRef.current) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: pinRef.current,
          start: 'top top',
          end: 'bottom+=200% top',
          pin: pinRef.current,
          pinSpacing: false
        })

        gsap.fromTo(
          colsRef.current!.children,
          { yPercent: -20 },
          {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: pinRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          }
        )
      }, pinRef)

      return () => ctx.revert()
    })
  }, [])

  return (
    <section className="min-h-[300vh] relative bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div ref={pinRef} className="h-screen flex items-center justify-center">
          <div className="text-center z-10">
            <div className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</div>
            <h2 className="text-4xl font-display italic mt-4">Visual <em>playground</em></h2>
            <p className="text-muted mt-2">A scroll-driven gallery of experiments.</p>
          </div>
        </div>

        <div ref={colsRef} className="absolute inset-0 top-[30vh] pointer-events-none">
          <div className="grid grid-cols-2 gap-12 md:gap-40 max-w-[1400px] mx-auto">
            {items.map((it) => (
              <div key={it.id} className="aspect-square max-w-[320px] bg-surface border border-stroke rounded-3xl m-8 transform-gpu hover:scale-105 pointer-events-auto" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

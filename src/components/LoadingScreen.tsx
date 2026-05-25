import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = { onComplete: () => void }

const words = ['Design', 'Create', 'Inspire']

export default function LoadingScreen({ onComplete }: Props) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    let raf: number | null = null
    const start = performance.now()
    const duration = 2700

    const loop = (t: number) => {
      const elapsed = t - start
      const progress = Math.min(1, elapsed / duration)
      setCount(Math.floor(progress * 100))
      if (progress < 1) raf = requestAnimationFrame(loop)
      else {
        setTimeout(() => onComplete(), 400)
      }
    }

    raf = requestAnimationFrame(loop)

    const wordInterval = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 900)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      clearInterval(wordInterval)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-6 left-6 text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[wordIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="p-8 flex items-end justify-end">
        <div className="text-right">
          <div className="text-6xl md:text-8xl lg:text-9xl font-display tabular-nums">
            {String(count).padStart(3, '0')}
          </div>
          <div className="mt-4 h-[3px] bg-stroke/50 rounded overflow-hidden">
            <div
              className="h-full accent-gradient"
              style={{ transform: `scaleX(${count / 100})`, transformOrigin: 'left center', boxShadow: '0 0 8px rgba(137,170,204,0.35)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

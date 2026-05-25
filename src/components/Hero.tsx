import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import HlsBackground from './HlsBackground'

const roles = ['Creative', 'Fullstack', 'Founder', 'Scholar']

export default function Hero() {
  const nameRef = useRef<HTMLDivElement | null>(null)
  const blurRef = useRef<HTMLDivElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(nameRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.2 })
    tl.fromTo(blurRef.current, { opacity: 0, filter: 'blur(10px)', y: 20 }, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.08, delay: 0.4 }, 0)
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' }, 0.8)
    }
  }, [])

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HlsBackground src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" className="z-0" />
      <div className="absolute inset-0 bg-black/20 z-5" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-10" />

      <div className="relative z-20 text-center px-6">
        <h1 ref={nameRef} className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Yalamanchi Kushal
        </h1>

        

        <p className="text-sm md:text-base text-muted max-w-2xl mx-auto mb-4">CSE @ Amrita Vishwa Vidyapeetham — 4th year BTech student</p>
        <p className="text-xs md:text-sm text-muted/80 max-w-2xl mx-auto mb-8">Building innovative solutions across web development (React, Node.js), embedded systems (ESP32, Arduino), and database optimization. 4th year BTech student with internship experience at Virtusa and a passion for real-time systems.</p>
        
        <div className="flex flex-col sm:flex-row gap-2 text-xs text-muted/80 mb-12 justify-center">
          <a href="tel:+919963683082" className="hover:text-text-primary transition-colors">+91-9963683082</a>
          <span className="hidden sm:inline text-muted/40">•</span>
          <a href="mailto:kushalyalamanchi@gmail.com" className="hover:text-text-primary transition-colors">kushalyalamanchi@gmail.com</a>
          <span className="hidden sm:inline text-muted/40">•</span>
          <a href="https://github.com/YKushal-hub?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">github.com/YKushal-hub</a>
        </div>

        <div ref={ctaRef} className="inline-flex gap-4">
          <motion.a whileHover={{ scale: 1.05 }} href="#works" className="rounded-full text-sm px-7 py-3.5 bg-gradient-to-r from-[#89AACC] to-[#4E85BF] text-bg font-medium cursor-pointer">View Projects</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} href="https://github.com/YKushal-hub" target="_blank" className="rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary font-medium cursor-pointer">GitHub Profile</motion.a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-30">
        <div className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</div>
        <div className="mt-2 w-px h-10 bg-stroke relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-3 bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}

import React, { useEffect, useRef } from 'react'
import HlsBackground from './HlsBackground'
import gsap from 'gsap'

const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/YKushal-hub', icon: '→' },
  { label: 'Email', url: 'mailto:kushalyalamanchi@gmail.com', icon: '✉' },
  { label: 'Phone', url: 'tel:+919963683082', icon: '☎' }
]

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!marqueeRef.current) return
    const el = marqueeRef.current
    gsap.to(el, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
  }, [])

  return (
    <footer className="bg-bg pt-16 pb-12 overflow-hidden relative">
      <HlsBackground src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" flipped className="z-0" />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-2xl md:text-3xl font-display italic text-text-primary mb-6">Let's Build Something Amazing</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:kushalyalamanchi@gmail.com" className="inline-block rounded-full px-6 py-3 bg-gradient-to-r from-[#89AACC] to-[#4E85BF] text-bg font-medium hover:shadow-lg hover:shadow-[#89AACC]/30 transition-all">
              Send Email
            </a>
            <a href="https://github.com/YKushal-hub" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-6 py-3 border-2 border-stroke bg-bg text-text-primary font-medium hover:border-[#89AACC] hover:shadow-lg transition-all">
              View GitHub
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text-primary transition-colors text-sm"
                title={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-muted text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for collaborations & projects
          </div>

          <div className="text-xs text-muted/60 mb-8">
            Hyderabad, Telangana, India | B.Tech CSE @ Amrita Vishwa Vidyapeetham
          </div>

          <div className="pt-8 border-t border-stroke/20">
            <p className="text-xs text-muted/50">© 2026 Yalamanchi Kushal. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div ref={marqueeRef} className="whitespace-nowrap text-xl text-muted/30">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="inline-block mr-8">BUILDING THE FUTURE •</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

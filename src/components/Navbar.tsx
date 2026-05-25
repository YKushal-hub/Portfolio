import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div className={`inline-flex items-center rounded-full backdrop-blur-md border px-2 py-2 bg-surface ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
        <div className="relative w-9 h-9 rounded-full flex items-center justify-center mr-2 logo-ring accent-border">
          <div className="relative z-10 w-full h-full rounded-full bg-bg flex items-center justify-center text-[13px] font-display italic">YK</div>
        </div>

        <div className="hidden sm:block w-px h-5 bg-stroke mx-2" />

        <nav className="flex gap-2 items-center">
          <a href="#" onClick={(e) => handleNav(e, 'body')} className="text-xs sm:text-sm rounded-full px-3 py-1.5 text-muted hover:text-text-primary hover:bg-stroke/50">Home</a>
          <a href="#works" onClick={(e) => handleNav(e, '#works')} className="text-xs sm:text-sm rounded-full px-3 py-1.5 text-muted hover:text-text-primary hover:bg-stroke/50">Work</a>
          <a href="#resume" onClick={(e) => handleNav(e, '#resume')} className="text-xs sm:text-sm rounded-full px-3 py-1.5 text-muted hover:text-text-primary hover:bg-stroke/50">Resume</a>
        </nav>

        <div className="hidden sm:block w-px h-5 bg-stroke mx-2" />

        <a href="mailto:kushalyalamanchi@gmail.com" className="relative rounded-full px-3 py-1.5 text-xs bg-surface border border-stroke ml-2 hover:border-[#89AACC] transition-colors block">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100" />
          <span className="relative">Say hi ↗</span>
        </a>
      </div>
    </div>
  )
}

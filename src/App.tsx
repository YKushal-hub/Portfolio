import React, { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWorks from './components/SelectedWorks'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Stats from './components/Stats'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  return (
    <div className="min-h-screen">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <AnimatePresence mode="wait" initial={false} key={location.pathname}>
        <motion.main
          key={location.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <SelectedWorks />
          <Skills />
          <Experience />
          <Stats />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

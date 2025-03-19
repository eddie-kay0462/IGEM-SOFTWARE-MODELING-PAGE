"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setIsMounted(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-violet-800 to-purple-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, 5, 0],
            rotate: [0, 5, 0],
            x: [0, 10, 0],
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300"
          style={{
            transform: isMounted ? `translate(${(mousePosition.x - dimensions.width / 2) * 0.05}px, ${(mousePosition.y - dimensions.height / 2) * 0.05}px)` : 'none',
            transition: "transform 0.1s ease-out",
          }}
        >
          Software Modeling
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, -3, 0],
            x: [0, -8, 0],
            y: [0, -4, 0],
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.3,
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="mt-4 text-xl text-violet-100"
          style={{
            transform: isMounted ? `translate(${(mousePosition.x - dimensions.width / 2) * 0.02}px, ${(mousePosition.y - dimensions.height / 2) * 0.02}px)` : 'none',
            transition: "transform 0.1s ease-out",
          }}
        >
          Transforming Ideas into Digital Reality
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl"
          style={{
            transform: isMounted ? `translate(${(mousePosition.x - dimensions.width / 2) * 0.03}px, ${(mousePosition.y - dimensions.height / 2) * 0.03}px)` : 'none',
            transition: "transform 0.1s ease-out",
          }}
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
            rotate: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"
          style={{
            transform: isMounted ? `translate(${(mousePosition.x - dimensions.width / 2) * -0.03}px, ${(mousePosition.y - dimensions.height / 2) * -0.03}px)` : 'none',
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
    </div>
  )
} 
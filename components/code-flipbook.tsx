"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function CodeFlipbook() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 15

  const codeImages = [
    "/code-snippets/snip1.png",
    "/code-snippets/snip2.png", 
    "/code-snippets/snip3.png",
    "/code-snippets/snip3.png",
    "/code-snippets/snip5.png",
    "/code-snippets/snip6.png",
    "/code-snippets/snip7.png",
    "/code-snippets/snip8.png",
    "/code-snippets/snip9.png",
    "/code-snippets/snip10.png",
    "/code-snippets/snip11.png",
    "/code-snippets/snip12.png",
    "/code-snippets/snip13.png",
    "/code-snippets/snip14.png",
    "/code-snippets/snip15.png",
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] bg-purple-900/30 backdrop-blur-sm rounded-xl overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={prevPage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-purple-800/50 hover:bg-purple-800/70 text-white p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextPage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-purple-800/50 hover:bg-purple-800/70 text-white p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Page Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-purple-800/50 text-white px-4 py-2 rounded-full">
        Page {currentPage + 1} of {totalPages}
      </div>

      {/* Flipbook Pages */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-full bg-purple-800/20 p-8">
            <div className="relative w-full h-full">
              <Image
                src={codeImages[currentPage]}
                alt={`Code snippet ${currentPage + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
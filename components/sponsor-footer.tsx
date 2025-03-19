"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsors = [
  { id: 1, name: "Sponsor 1", image: "/sponsors/sponsor1.png" },
  { id: 2, name: "Sponsor 2", image: "/sponsors/sponsor2.png" },
  { id: 3, name: "Sponsor 3", image: "/sponsors/sponsor3.png" },
  { id: 4, name: "Sponsor 4", image: "/sponsors/sponsor4.png" },
  { id: 5, name: "Sponsor 5", image: "/sponsors/sponsor5.png" },
  { id: 6, name: "Sponsor 6", image: "/sponsors/sponsor6.png" },
  { id: 7, name: "Sponsor 7", image: "/sponsors/sponsor7.png" },
  { id: 8, name: "Sponsor 8", image: "/sponsors/sponsor8.png" },
]

export default function SponsorFooter() {
  return (
    <footer className="w-full bg-slate-900/50 backdrop-blur-sm py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Our Sponsors
        </h3>
        
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* First set of sponsors */}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex-shrink-0 w-32 h-32 bg-white/10 rounded-lg p-4 flex items-center justify-center"
              >
                <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm text-center">
                    {sponsor.name}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor) => (
              <div
                key={`duplicate-${sponsor.id}`}
                className="flex-shrink-0 w-32 h-32 bg-white/10 rounded-lg p-4 flex items-center justify-center"
              >
                <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm text-center">
                    {sponsor.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 
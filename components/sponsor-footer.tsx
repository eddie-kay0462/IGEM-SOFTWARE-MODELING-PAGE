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
]

export default function SponsorFooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-purple-900/80 via-violet-800/80 to-purple-900/80 backdrop-blur-sm py-12 overflow-hidden relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-300/10 via-purple-400/10 to-pink-400/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h3 className="text-3xl font-bold text-white mb-12 text-center bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
          Our Sponsors
        </h3>
        
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-12"
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
                className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 flex items-center justify-center hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-amber-300/30 shadow-lg hover:shadow-amber-300/20"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100px, 160px"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor) => (
              <div
                key={`duplicate-${sponsor.id}`}
                className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 flex items-center justify-center hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-amber-300/30 shadow-lg hover:shadow-amber-300/20"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100px, 160px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 
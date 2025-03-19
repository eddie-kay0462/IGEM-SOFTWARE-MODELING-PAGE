"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-gradient-to-r from-purple-900/90 via-violet-800/90 to-purple-900/90 backdrop-blur-sm shadow-lg"
          : "bg-gradient-to-r from-purple-900 via-violet-800 to-purple-900",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Left side navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {["Home", "Parts", "Team", "Project"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium relative px-2 py-1 transition-all duration-300",
                  "hover:text-amber-300 group",
                  activeItem === item ? "text-amber-300" : "text-violet-100",
                )}
                onClick={() => setActiveItem(item)}
              >
                {item}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full",
                    activeItem === item ? "w-full" : "",
                  )}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button - only visible on mobile */}
          <button
            className="md:hidden text-violet-100 hover:text-amber-300 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:scale-110">
            <Link href="/">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 p-0.5 shadow-lg shadow-purple-900/30">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
            </Link>
          </div>

          {/* Right side navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {["Safety", "Human Practices", "Awards"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={cn(
                  "text-sm font-medium relative px-2 py-1 transition-all duration-300",
                  "hover:text-amber-300 group",
                  activeItem === item ? "text-amber-300" : "text-violet-100",
                )}
                onClick={() => setActiveItem(item)}
              >
                {item}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full",
                    activeItem === item ? "w-full" : "",
                  )}
                ></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu - only visible when open */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0",
          )}
        >
          <nav className="flex flex-col space-y-3 pt-2">
            {["Home", "Parts", "Team", "Project", "Safety", "Human Practices", "Awards"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={cn(
                  "text-sm font-medium transition-all duration-300 py-2 px-2 rounded-md",
                  activeItem === item
                    ? "bg-purple-700/50 text-amber-300"
                    : "text-violet-100 hover:bg-purple-700/30 hover:text-amber-300",
                )}
                onClick={() => {
                  setActiveItem(item)
                  setIsMobileMenuOpen(false)
                }}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}


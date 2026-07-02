"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RecruiterModal } from "./recruiter-modal"

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Tech Stack" },
  { id: "experience", label: "Experience" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
]

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
)

interface MenuToggleProps {
  toggle: () => void
  isOpen: boolean
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => (
  <button 
    onClick={toggle} 
    className="relative z-50 p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer md:hidden flex items-center justify-center rounded-xl border border-zinc-900 bg-zinc-950/40"
    aria-label="Toggle menu"
  >
    <svg width="18" height="18" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <Path
        variants={{
          closed: { opacity: 1, d: "M 2 9.423 L 20 9.423" },
          open: { opacity: 0 }
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
)

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // triggers when in upper-middle viewport
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const el = document.getElementById(targetId)
    if (el) {
      const offset = 80 // height of header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        isScrolled 
          ? "py-3 bg-zinc-950/85 backdrop-blur-md border-zinc-900/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
          : "py-4 bg-[#09090B]/60 backdrop-blur-sm border-zinc-900/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8 rounded-xl overflow-hidden border border-indigo-500/20 bg-zinc-900 group-hover:border-indigo-500 transition-all duration-300 shadow-md shrink-0">
            <img 
              src="/icons/sankar.png" 
              alt="Sankarapandian" 
              className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <span className="font-heading text-sm font-bold text-white tracking-wide group-hover:text-indigo-400 transition-colors duration-300">
            SANKAR.DEV
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="relative px-1 py-1"
              onMouseEnter={() => setHoveredSection(item.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`px-3 py-1.5 transition-colors relative z-10 block cursor-pointer text-xs font-mono font-medium rounded-lg ${
                  activeSection === item.id ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {item.label}
              </a>
              {/* Sliding hover pill */}
              {hoveredSection === item.id && (
                <motion.span
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-zinc-800/40 border border-zinc-800/20 rounded-lg -z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              {/* Active Indicator underneath */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Recruiter Mode Modal Trigger */}
          <RecruiterModal>
            <Button
              variant="outline"
              size="sm"
              className="border-indigo-500/20 bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-white font-mono text-xs cursor-pointer rounded-xl flex items-center gap-1.5 shadow-[0_0_15px_rgba(99,102,241,0.05)] transition-all duration-300"
            >
              <Sparkles className="size-3 animate-pulse text-indigo-400 group-hover:text-white" />
              Recruiter Mode
            </Button>
          </RecruiterModal>

          <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-800 text-zinc-300 hover:text-white font-mono text-xs cursor-pointer rounded-xl hover:border-zinc-700 transition-colors"
            >
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <MenuToggle toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isOpen={isMobileMenuOpen} />
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 border-b border-zinc-900 bg-zinc-950/95 backdrop-blur-xl flex flex-col overflow-hidden z-40 md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <div className="flex flex-col gap-3.5">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleSmoothScroll(e, item.id)}
                      className={`block font-mono text-sm py-1.5 transition-colors ${
                        activeSection === item.id 
                          ? "text-indigo-400 font-bold border-l-2 border-indigo-500 pl-3.5 -ml-3.5" 
                          : "text-zinc-400 hover:text-white pl-0"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="h-[1px] bg-zinc-900/80 w-full" />

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <RecruiterModal>
                  <Button
                    variant="outline"
                    className="flex-1 justify-center border-indigo-500/20 bg-indigo-500/5 text-indigo-400 font-mono text-xs rounded-xl py-5 hover:bg-indigo-500/10 hover:border-indigo-500"
                  >
                    <Sparkles className="size-3.5 mr-2 animate-pulse" />
                    Activate Recruiter Mode
                  </Button>
                </RecruiterModal>

                <Link 
                  href="#contact" 
                  className="flex-1" 
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                >
                  <Button
                    className="w-full justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs rounded-xl py-5 cursor-pointer"
                  >
                    Hire Me
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

"use client"

import React, { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function InteractiveBackground() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth mouse coordinates with spring animations
  const springConfig = { damping: 30, stiffness: 200 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  // Transform raw values to string pixels for custom CSS properties
  const xPx = useTransform(glowX, (v) => `${v}px`)
  const yPx = useTransform(glowY, (v) => `${v}px`)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      // Offset position relative to client window
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[#09090B]">
      {/* Dynamic Cursor Light mesh */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
        style={{
          background: `radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.05), transparent 70%)`,
          // @ts-ignore
          "--x": xPx,
          // @ts-ignore
          "--y": yPx,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 mix-blend-overlay" />

      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none animate-pulse-slow" />
    </div>
  )
}

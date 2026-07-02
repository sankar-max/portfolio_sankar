"use client"

import React, { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  decimals?: number
  duration?: number // in seconds
}

export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  duration = 1.5,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    if (start === end) {
      setCount(end)
      return
    }

    const totalMiliseconds = duration * 1000
    const startTime = performance.now()

    let animationFrameId: number

    const updateCount = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / totalMiliseconds, 1)
      
      // Easing out quad: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress)
      
      const current = start + easeProgress * (end - start)
      setCount(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(updateCount)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [value, duration, isInView])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

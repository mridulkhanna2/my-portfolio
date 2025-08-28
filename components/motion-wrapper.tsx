"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface MotionWrapperProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: "up" | "down" | "left" | "right" | "scale"
}

export function MotionWrapper({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  direction = "up",
}: MotionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-100px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate3d(0, 30px, 0)"
        case "down":
          return "translate3d(0, -30px, 0)"
        case "left":
          return "translate3d(30px, 0, 0)"
        case "right":
          return "translate3d(-30px, 0, 0)"
        case "scale":
          return "scale(0.8)"
        default:
          return "translate3d(0, 30px, 0)"
      }
    }
    return "translate3d(0, 0, 0) scale(1)"
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      {children}
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface AnimatedBadgeProps {
  children: ReactNode
  variant?: "default" | "secondary" | "outline" | "destructive"
  className?: string
  delay?: number
  glow?: boolean
}

export function AnimatedBadge({
  children,
  variant = "secondary",
  className = "",
  delay = 0,
  glow = false,
}: AnimatedBadgeProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className="inline-block"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        transition: "all 0.4s ease-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"
      }}
    >
      <Badge
        variant={variant}
        className={`${className} ${
          glow
            ? "bg-gradient-to-r from-teal-500/20 to-violet-500/20 text-teal-700 dark:text-teal-300 border-teal-300/50 dark:border-teal-500/50 shadow-lg shadow-teal-500/20"
            : ""
        } transition-all duration-300 hover:shadow-lg`}
      >
        {children}
      </Badge>
    </div>
  )
}

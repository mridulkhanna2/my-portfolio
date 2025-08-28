"use client"

import { useState } from "react"
import type { ReactNode } from "react"

interface GlowingIconProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowingIcon({ children, className = "", glowColor = "teal" }: GlowingIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  const glowColors = {
    teal: "shadow-teal-500/50 bg-gradient-to-r from-teal-500 to-cyan-500",
    violet: "shadow-violet-500/50 bg-gradient-to-r from-violet-500 to-purple-500",
    blue: "shadow-blue-500/50 bg-gradient-to-r from-blue-500 to-indigo-500",
    emerald: "shadow-emerald-500/50 bg-gradient-to-r from-emerald-500 to-teal-500",
  }

  return (
    <div
      className={`w-16 h-16 rounded-xl flex items-center justify-center ${glowColors[glowColor as keyof typeof glowColors]} ${className} animate-pulse-glow cursor-pointer`}
      style={{
        transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-white">{children}</div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface AnimatedHeadlineProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedHeadline({ children, className = "" }: AnimatedHeadlineProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <h1
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </h1>
  )
}

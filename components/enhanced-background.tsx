"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function EnhancedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const dataPoints: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      type: "scatter" | "line" | "node"
    }> = []

    // Create data visualization particles
    for (let i = 0; i < 30; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        type: Math.random() > 0.7 ? "node" : Math.random() > 0.5 ? "scatter" : "line",
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Use theme-appropriate colors
      const isDark = theme === "dark"
      const primaryColor = isDark ? "rgba(20, 184, 166, 0.4)" : "rgba(13, 148, 136, 0.3)"
      const secondaryColor = isDark ? "rgba(139, 92, 246, 0.4)" : "rgba(124, 58, 237, 0.3)"
      const connectionColor = isDark ? "rgba(20, 184, 166, 0.1)" : "rgba(13, 148, 136, 0.08)"

      dataPoints.forEach((point, index) => {
        // Update position
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // Draw different types of data visualization elements
        if (point.type === "scatter") {
          // Scatter plot points
          ctx.beginPath()
          ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.size * 2)
          gradient.addColorStop(0, primaryColor)
          gradient.addColorStop(1, "transparent")
          ctx.fillStyle = gradient
          ctx.fill()
        } else if (point.type === "node") {
          // Network nodes
          ctx.beginPath()
          ctx.arc(point.x, point.y, point.size * 0.8, 0, Math.PI * 2)
          ctx.fillStyle = secondaryColor
          ctx.fill()
          ctx.strokeStyle = primaryColor
          ctx.lineWidth = 1
          ctx.stroke()
        } else {
          // Line chart points
          ctx.beginPath()
          ctx.rect(point.x - point.size / 2, point.y - point.size / 2, point.size, point.size)
          ctx.fillStyle = primaryColor
          ctx.fill()
        }

        // Draw connections for network effect
        dataPoints.slice(index + 1).forEach((otherPoint) => {
          const dx = point.x - otherPoint.x
          const dy = point.y - otherPoint.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150 && (point.type === "node" || otherPoint.type === "node")) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            const connectionOpacity = 0.15 * (1 - distance / 150)
            ctx.strokeStyle = connectionColor.replace("0.1", connectionOpacity.toString())
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw subtle trend lines
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.7)
      for (let x = 0; x < canvas.width; x += 50) {
        const y = canvas.height * 0.7 + Math.sin(x * 0.01 + Date.now() * 0.001) * 20
        ctx.lineTo(x, y)
      }
      ctx.strokeStyle = connectionColor
      ctx.lineWidth = 1
      ctx.stroke()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}

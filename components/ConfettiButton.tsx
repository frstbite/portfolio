"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ConfettiButtonProps {
  label?: string
  onClick?: () => void
  className?: string
}

interface ConfettiParticle {
  id: number
  rotate: number
  color: string
  targetX: number
  targetY: number
  rotateEnd: number
}

const colors = ["#facc15", "#22c55e", "#3b82f6", "#f472b6", "#f97316"]

export default function ConfettiButton({
  label = "Submit",
  onClick,
  className,
}: ConfettiButtonProps) {
  const [particles, setParticles] = useState<ConfettiParticle[]>([])
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [buttonWidth, setButtonWidth] = useState(0)

  useEffect(() => {
    if (buttonRef.current) setButtonWidth(buttonRef.current.offsetWidth)
  }, [])

  const fireConfetti = () => {
    const newParticles: ConfettiParticle[] = Array.from({ length: 20 }).map((_, i) => {
      const initialRotate = Math.random() * 360;
      return {
        id: Date.now() + i,
        rotate: initialRotate,
        color: colors[Math.floor(Math.random() * colors.length)],
        targetX: (Math.random() - 0.5) * 200,
        targetY: (Math.random() - 0.5) * 200,
        rotateEnd: initialRotate + Math.random() * 360,
      };
    })
    setParticles(newParticles)
    onClick?.()
    setTimeout(() => setParticles([]), 800)
  }

  return (
    <div className="relative inline-block overflow-visible">
      <button
        ref={buttonRef}
        onClick={fireConfetti}
        className={cn(
          "relative px-8 py-4 rounded-full font-bold transition-all active:scale-95 shadow-sm border bg-background",
          className
        )}
      >
        <span className="relative z-10">{label}</span>
      </button>

      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: p.color,
              left: buttonWidth / 2,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1, rotate: p.rotate }}
            animate={{
              x: p.targetX,
              y: p.targetY,
              scale: 0,
              opacity: 0,
              rotate: p.rotateEnd,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

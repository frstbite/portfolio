"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
  velocity: number;
}

interface ConfettiButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  particleCount?: number;
}

const COLORS = ["#facc15", "#22c55e", "#3b82f6", "#f472b6", "#f97316"];

export default function ConfettiButton({
  label = "Submit",
  onClick,
  className,
  particleCount = 20,
}: ConfettiButtonProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const fireConfetti = useCallback(() => {
    const newParticles: Particle[] = Array.from({ length: particleCount }).map((_, i) => ({
      id: Date.now() + i,
      x: 0,
      y: 0,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle: Math.random() * Math.PI * 2,
      velocity: Math.random() * 100 + 50,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    // Auto-cleanup after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 800);
  }, [particleCount]);

  const handleClick = () => {
    fireConfetti();
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative px-8 py-4 rounded-full font-bold transition-transform active:scale-95 overflow-visible",
        className
      )}
    >
      <span className="relative z-10">{label}</span>
      
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{
                x: Math.cos(particle.angle) * particle.velocity,
                y: Math.sin(particle.angle) * particle.velocity,
                scale: 0,
                opacity: 0,
                rotate: 360,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-2 h-2 rounded-sm"
              style={{ backgroundColor: particle.color }}
            />
          ))}
        </AnimatePresence>
      </div>
    </button>
  );
}

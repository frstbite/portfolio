"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Marquee({ text, speed = 10, className = "" }: MarqueeProps) {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex gap-12 pr-12"
        animate={{ x: "-50%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex gap-12">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {text}
            </span>
          ))}
        </div>
        <div className="flex gap-12">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

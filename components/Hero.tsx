"use client";

import { useState, useRef } from "react";
import ConfettiButton from "./ConfettiButton";
import { motion, Variants } from "framer-motion";
import { ImageTrail } from "@/components/ui/image-trail";
import ShinyText from "@/components/ui/ShinyText";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingVariants = (delay: number): Variants => ({
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const images = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    ].map((url) => `${url}?auto=format&fit=crop&w=300&q=80`);

    const copyEmail = () => {
    navigator.clipboard.writeText("hi@lukaslagler.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    };

    return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <ImageTrail containerRef={containerRef}>
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-24 h-24 rounded-lg shadow-xl"
            >
              <img
                src={url}
                alt={`Trail image ${index + 1}`}
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium mb-6 overflow-hidden whitespace-nowrap max-w-[300px]">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <div className="flex whitespace-nowrap gap-4">
             <ShinyText 
                text="Currently experimenting with AI" 
                speed={2} 
                delay={0}
                color="#0f0f0f"
                shineColor="#b5b3b3"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
             />
          </div>
        </div>


        {/* Main Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold tracking-tight max-w-5xl leading-[1.1] mb-8"
        >
          <span className="inline-flex items-center">I&apos;m Lukas
            <div
              className="w-12 h-12 md:w-32 md:h-20 rounded-full bg-gray-200 overflow-hidden inline-block align-middle ml-4 border-2 border-foreground drop-shadow-md"
            >
            </div>
            ,
          </span>
          <br />
          a Software Engineer
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-500 max-w-2xl font-medium mb-12"
        >
          Switzerland-based software engineer focused on building solid, impactful solutions and turning ideas into scalable code.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white rounded-full font-bold hover:opacity-90 transition-all shadow-lg active:scale-95"
          >
            Download CV
          </motion.button>
          
          <ConfettiButton 
            onClick={copyEmail}
            label={copied ? "Copied!" : "Copy Email"}
            className="border-gray-200 text-black hover:border-black"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState } from "react";
import ConfettiButton from "./ConfettiButton";
import { motion, Variants } from "framer-motion";

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

  const copyEmail = () => {
    navigator.clipboard.writeText("hi@lukaslagler.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-44 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium mb-12 overflow-hidden whitespace-nowrap max-w-[280px]">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <div className="flex whitespace-nowrap gap-4">
             <span>Currently Experimenting with AI</span>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-40 left-[10%] hidden lg:block shadow-xl rounded-lg overflow-hidden border border-gray-100"
          variants={floatingVariants(0)}
          animate="animate"
        >
           <div className="w-24 h-16 bg-gray-100"></div>
        </motion.div>
        <motion.div 
          className="absolute top-60 right-[15%] hidden lg:block shadow-xl rounded-lg overflow-hidden border border-gray-100"
          variants={floatingVariants(1)}
          animate="animate"
        >
           <div className="w-20 h-28 bg-gray-100"></div>
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-[15%] hidden lg:block shadow-xl rounded-lg overflow-hidden border border-gray-100"
          variants={floatingVariants(0.5)}
          animate="animate"
        >
           <div className="w-32 h-20 bg-gray-100"></div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-8"
        >
          I&apos;m Lukas, <br />
          a <span className="inline-flex items-center gap-4">
            Software
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gray-200 overflow-hidden inline-block align-middle transform translate-y-[-4px] cursor-pointer"
            >
              {/* Profile Image Placeholder */}
            </motion.div>
          </span> Engineer
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

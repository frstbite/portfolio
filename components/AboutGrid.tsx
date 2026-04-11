"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AboutGrid() {
  const [isSpread, setIsSpread] = useState(false);

  const cards = [
    {
      id: 1,
      className: "bg-black text-white p-8 flex flex-col justify-end bg-blue-500",
      content: (
        <p className="text-2xl font-bold leading-tight italic">
          &quot;Turning ideas into projects — and bugs into things to fix later.&quot;
        </p>
      ),
      rotation: -8,
      x: -20,
      y: -10,
    },
    {
      id: 2,
      className: "bg-gray-100 p-8 flex flex-col justify-between",
      content: (
        <>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">TOOLS & TECH</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["TypeScript", "React", "Node.js", "Python", "SQL", "Tailwind"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">And a bit of AI.</p>
        </>
      ),
      rotation: 5,
      x: 25,
      y: 15,
    },
    {
      id: 3,
      className: "bg-[#F8F8F8] p-8 flex flex-col justify-center text-center border border-gray-100",
      content: (
        <>
          <h3 className="text-xl font-bold mb-2 italic">Designed On Purpose™</h3>
          <p className="text-sm text-gray-500 italic">Experience in turning complex problems into (usually) working solutions.</p>
        </>
      ),
      rotation: -3,
      x: -10,
      y: 20,
    },
    {
      id: 4,
      className: "bg-gray-100 flex items-center justify-center p-8 group",
      content: (
        <div className="text-center transition-transform group-hover:scale-110">
          <p className="text-6xl font-black italic underline decoration-blue-500 decoration-8 underline-offset-8">404</p>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-6 font-mono">BUGS REBRANDED AS FEATURES</p>
        </div>
      ),
      rotation: 10,
      x: 30,
      y: -20,
    },
    {
      id: 5,
      className: "bg-gray-50 p-8 flex flex-col justify-between border border-gray-100",
      content: (
        <>
          <p className="text-lg font-bold italic">Expert in Force Push & Pray (FP&P).</p>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">
            🚀
          </div>
        </>
      ),
      rotation: -6,
      x: -25,
      y: 10,
    },
    {
      id: 6,
      className: "bg-[#F0F0F0] p-8 flex flex-col justify-between",
      content: (
        <>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-mono">IDENTITY</p>
            <p className="text-sm italic leading-relaxed text-gray-600">
              &quot;Lukas is a Switzerland-based developer who occasionally overthinks simple solutions, but ends up with something solid in the end.&quot;
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-8 rounded-full bg-blue-500"></div>
            <div>
              <p className="text-xs font-bold italic">Lukas Lagler</p>
              <p className="text-[10px] text-gray-400 font-mono">Software Engineer</p>
            </div>
          </div>
        </>
      ),
      rotation: 4,
      x: 15,
      y: -25,
    },
  ];

  return (
    <section id="about" className="py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4 bg-gray-100 rounded-full px-4 py-2">
          <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">About Me</p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Bring to the Table</h2>
          <p className="text-gray-500 italic max-w-2xl mx-auto">Code, logic, and the ancient art of looking productive while builds run.</p>
        </div>

        <div className="relative w-full flex flex-col items-center min-h-[600px]">
          {/* Main Button */}
          <AnimatePresence>
            {!isSpread && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(30px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setIsSpread(true)}
                className="z-[100] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-5 bg-foreground text-background rounded-full font-bold shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:scale-110 active:scale-95 transition-transform"
              >
                Find out about me
              </motion.button>
            )}
          </AnimatePresence>

          {/* Grid Container */}
          <motion.div
            layout
            className={cn(
              "w-full h-full transition-all duration-700",
              isSpread
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]"
                : "relative flex items-center justify-center min-h-[500px]"
            )}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                layout
                initial={false}
                animate={{
                  rotate: isSpread ? 0 : card.rotation,
                  x: isSpread ? 0 : card.x,
                  y: isSpread ? 0 : card.y,
                  scale: isSpread ? 1 : 0.9 - index * 0.02,
                  opacity: isSpread ? 1 : 0.8 - index * 0.1,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: isSpread ? 350 : 200,
                  damping: isSpread ? 25 : 30,
                  mass: 1,
                }}
                className={cn(
                  "rounded-3xl overflow-hidden shadow-sm",
                  card.className,
                  !isSpread && "absolute w-[300px] h-[380px] md:w-[350px] md:h-[450px] shadow-2xl cursor-pointer"
                )}
                style={{
                  zIndex: isSpread ? 10 : cards.length - index,
                  gridArea: isSpread ? "auto" : "1 / 1 / 2 / 2"
                }}
                onClick={() => !isSpread && setIsSpread(true)}
              >
                {card.content}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

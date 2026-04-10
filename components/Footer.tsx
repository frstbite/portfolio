"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-8 mb-12 font-mono"
        >
          <Link href="#" className="text-sm font-bold hover:underline italic">Connect on LinkedIn</Link>
          <Link href="#" className="text-sm font-bold hover:underline italic">GitHub</Link>
          <Link href="#" className="text-sm font-bold hover:underline italic">Twitter / X</Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="w-full flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] font-bold uppercase tracking-widest gap-4 font-mono">
           <p>© Copyright 2026 — Lukas Lagler</p>
           <p>Designed and engineered with precision in Switzerland.</p>
        </motion.div>

        <div className="mt-20 w-full flex justify-center">
           <motion.h1 
             initial={{ y: "100%", opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true, margin: "200px" }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="text-[15vw] md:text-[20vw] font-black tracking-tighter text-foreground leading-none select-none italic"
           >
              LAGLER
           </motion.h1>
        </div>
      </div>
    </footer>
  );
}

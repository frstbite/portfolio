"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PersonalProject() {
  return (
    <section id="personal" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Coherent Transition Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
           <div className="flex items-center gap-4 mb-4 bg-gray-100 rounded-full px-4 py-2">
             <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Side Projects</p>
           </div>
           <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Personal Projects</h2>
           <p className="text-lg text-foreground/60 max-w-xl mx-auto italic">
             Applications and tools I&apos;ve built independently.
           </p>
        </motion.div>

        {/* The Main Project Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-foreground text-background rounded-[40px] p-12 flex flex-col items-center text-center overflow-hidden relative group"
        >

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-2"
          >
            <Image
              src="/frynds-logo.png"
              alt="Frynds Logo"
              width={220}
              height={70}
              className="mx-auto"
            />
          </motion.div>
          
          <p className="text-white/60 mb-8 italic max-w-lg text-lg">
            A social status application helping friends coordinate meetups in real-time. Built with React Native and Appwrite.
          </p>
          
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1}}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-2xl h-[40vh] md:h-[60vh] mb-12"
          >
             <Image
               src="/frynds-mockup.png"
               alt="Frynds App Mockup"
               fill
               sizes="(max-width: 768px) 100vw, 800px"
               className="object-contain"
               priority
             />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black rounded-full font-bold transition-all flex items-center gap-3 shadow-2xl"
              onClick={() => window.open('https://apps.apple.com/us/app/frynds-social-status/id6747308656', '_blank')}
            >
              Download on AppStore <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PersonalProject() {
  return (
    <section id="personal" className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center overflow-hidden"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-mono">PERSONAL PROJECT</p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src="/frynds-logo.png"
              alt="Frynds Logo"
              width={250}
              height={80}
              className="mx-auto"
            />
          </motion.div>
          <p className="text-gray-500 mb-12 italic max-w-2xl">An app that helps friends meet up</p>
          
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1}}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-md h-[35vh] md:h-[55vh] mb-6"
          >
             <Image
               src="/frynds-mockup.png"
               alt="Frynds App Mockup"
               fill
               sizes="(max-width: 768px) 100vw, 448px"
               className="object-contain"
               priority
             />
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white border border-gray-200 rounded-full font-bold hover:border-black transition-all flex items-center gap-2"
            onClick={() => window.open('https://apps.apple.com/us/app/frynds-social-status/id6747308656', '_blank')}
          >
            Download on AppStore
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

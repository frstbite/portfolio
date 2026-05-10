"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";
import Image from "next/image";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">

      {/* Dashboard showcase — absolutely positioned, left side */}
      <div
        className="absolute left-0 top-5/6 pointer-events-none select-none hidden lg:block w-[620px] [@media(min-width:1920px)]:w-[900px]"
        style={{ transform: "translateY(-50%) translateX(-8rem) rotate(-6deg)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/dashboard-showcase-light.png"
            alt="Dashboard showcase"
            width={1400}
            height={900}
            className="w-full h-auto rounded-2xl shadow-2xl border border-black/8"
          />
        </motion.div>
      </div>

      {/* TypeScript showcase — absolutely positioned, right side */}
      <div
        className="absolute right-0 top-2/6 pointer-events-none select-none hidden lg:block w-[360px] xl:w-[440px]"
        style={{ transform: "translateY(-50%) translateX(7rem) rotate(6deg)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/typescript-showcase-light.png"
            alt="TypeScript showcase"
            width={1400}
            height={900}
            className="w-3/4 h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
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
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight max-w-5xl leading-[1.1] mb-8"
        >
          <span className="inline-flex items-center">I&apos;m Lukas
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden inline-block align-middle ml-4 border-2 border-foreground drop-shadow-sm">
              <Image
                src="/pp.jpg"
                alt="Lukas"
                width={128}
                height={128}
                className="w-full h-full object-cover object-[center_10%]"
              />
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
          I enjoy turning ideas into things people actually use, mostly for startups or myself. Based in Switzerland, always up for interesting problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <CTAButton href="&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6c;&#x75;&#x6b;&#x65;&#x2e;&#x6c;&#x61;&#x67;&#x6c;&#x65;&#x72;&#x40;&#x62;&#x6c;&#x75;&#x65;&#x77;&#x69;&#x6e;&#x2e;&#x63;&#x68;&#x3f;&#x73;&#x75;&#x62;&#x6a;&#x65;&#x63;&#x74;&#x3d;&#x48;&#x65;&#x79;&#x25;&#x32;&#x30;&#x4c;&#x75;&#x6b;&#x61;&#x73;" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function CTAButton({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false);

  // The blue dot is 14px, centered 32px from the button's right edge
  // (pr-2.5=10px + half of w-11=22px). A 600px circle placed at that
  // center point scales from 14/600 → 1, so the dot visually expands
  // to fill the entire button.
  const CIRCLE = 600;
  const dotScale = 14 / CIRCLE;

  return (
    <motion.a
      href={href}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.97 }}
      className="relative flex items-center gap-3 pl-7 pr-2.5 py-2.5 rounded-full cursor-pointer select-none overflow-hidden bg-black"
    >
      {/* Expanding blue circle — the dot that grows to fill the button */}
      <motion.div
        className="absolute rounded-full bg-blue-500 pointer-events-none"
        style={{
          width: CIRCLE,
          height: CIRCLE,
          right: -(CIRCLE / 2 - 32),
          top: "50%",
          translateY: "-50%",
        }}
        animate={{ scale: hovered ? 1 : dotScale }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Text */}
      <div className="relative h-7 overflow-hidden min-w-[120px] z-10">
        <AnimatePresence mode="popLayout" initial={false}>
          {hovered ? (
            <motion.span
              key="hover"
              className="absolute inset-0 flex items-center text-white font-semibold text-lg whitespace-nowrap"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Let&apos;s talk
            </motion.span>
          ) : (
            <motion.span
              key="default"
              className="absolute inset-0 flex items-center text-white font-semibold text-lg whitespace-nowrap"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Get in touch
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Right indicator — arrow appears on hover */}
      <div className="relative w-11 h-11 flex-shrink-0 z-10">
        <AnimatePresence initial={false}>
          {hovered && (
            <motion.div
              key="arrow"
              className="absolute inset-0 rounded-full bg-black flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.a>
  );
}

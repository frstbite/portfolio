"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CircleDot, UserRound, Mail, Globe } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

/* ─── inline mini-UI visuals ─────────────────────────────── */

function SkillsVisual({ animate }: { animate: boolean }) {
  const skills = [
    { name: "React / Next.js", pct: 95 },
    { name: "TypeScript", pct: 90 },
    { name: "Node / Postgres", pct: 85 },
  ];
  return (
    <div className="w-full bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2.5">
      {skills.map(({ name, pct }, i) => (
        <div key={name}>
          <div className="flex justify-between mb-1">
            <span className="text-[10px] font-medium text-gray-600">{name}</span>
            <span className="text-[10px] text-gray-400">{pct}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: animate ? `${pct}%` : 0 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function BarChart({ animate }: { animate: boolean }) {
  const bars = [40, 60, 45, 80, 65, 90, 70, 100];
  return (
    <div className="flex gap-1 items-end h-14">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm"
          style={{ background: i === 7 ? "#2b7fff" : "#E5E5E5" }}
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: animate ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: "easeOut" }}
        >
          <div style={{ height: `${h * 0.56}px` }} />
        </motion.div>
      ))}
    </div>
  );
}

function MetricsDashboard({ animate }: { animate: boolean }) {
  return (
    <div className="h-full flex flex-col bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-200">
            <Image
              src="/pp.jpg"
              alt="Lukas"
              width={128}
              height={128}
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <span className="text-[10px] font-semibold text-gray-600">frstbite · Projects</span>
        </div>
      </div>
      <div className="px-4 py-3 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[9px] text-gray-400 mb-1">Total shipped</p>
          <p className="text-xl font-bold text-gray-900">7 Products</p>
          <div className="inline-block px-2 py-1 bg-blue-100 rounded-full">
            <p className="text-[9px] text-blue-700 font-medium">↑ 3 this year</p>
          </div>
        </div>
        <BarChart animate={animate} />
      </div>
    </div>
  );
}

/* ─── card definitions ───────────────────────────────────── */

function makeCards(isSpread: boolean) {
  return [
    {
      id: 1,
      gridClass: "md:col-span-3 md:row-span-1",
      bg: "bg-white",
      rotation: -5, x: -20, y: -10,
      content: (
        <div className="h-full flex flex-col md:flex-row gap-6 p-7 py-7">
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <UserRound className="mb-5 text-gray-950" size={22} />
              <h3 className="text-[21px] font-bold text-gray-950 leading-snug mb-2">Design with intent</h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                Designing for outcomes, not deliverables. Every decision starts with the user.
              </p>
            </div>
            <a href="&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6c;&#x75;&#x6b;&#x65;&#x2e;&#x6c;&#x61;&#x67;&#x6c;&#x65;&#x72;&#x40;&#x62;&#x6c;&#x75;&#x65;&#x77;&#x69;&#x6e;&#x2e;&#x63;&#x68;&#x3f;&#x73;&#x75;&#x62;&#x6a;&#x65;&#x63;&#x74;&#x3d;&#x48;&#x65;&#x79;&#x25;&#x32;&#x30;&#x4c;&#x75;&#x6b;&#x61;&#x73;" className="mt-6 w-fit bg-white border border-gray-200 text-gray-800 text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              Get in touch
            </a>
          </div>
          <div className="w-full md:w-[55%] shrink-0 md:h-full h-[200px]">
            <MetricsDashboard animate={isSpread} />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      gridClass: "md:col-span-3 md:row-span-2",
      bg: "bg-white",
      rotation: 4, x: 20, y: 10,
      content: (
        <div className="relative h-full min-h-[480px] sm:min-h-0 flex flex-col p-5 sm:p-7 pt-10 sm:pt-16 overflow-hidden">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 text-center mb-2 relative z-10">
            <span className="relative inline-block">
              Clarity
              <motion.span
                className="absolute left-0 -bottom-1 w-full overflow-hidden block"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: isSpread ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              >
                <Image src="/underline-clarity.svg" alt="" fill={false} width={120} height={12} className="w-full h-auto" unoptimized />
              </motion.span>
            </span>
            {" Builds Trust"}
          </h3>
          <div className="relative flex-1 w-full mt-4">
            <Image src="/frynds-mockup.png" alt="Frynds" fill sizes="(max-width: 768px) 80vw, 33vw" className="object-contain object-bottom drop-shadow-2xl" />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      gridClass: "md:col-span-2 md:row-span-1",
      bg: "bg-white",
      rotation: 6, x: -10, y: 20,
      content: (
        <div className="h-full flex flex-col p-7">
          <CircleDot className="mb-5 text-gray-950" size={22} />
          <h3 className="text-[21px] font-bold text-gray-950 leading-snug mb-2">Full-Stack Engineer</h3>
          <p className="text-[13px] text-gray-400 leading-relaxed">
            From database schema to polished UI — I do it all.
          </p>
          <div className="mt-auto pt-5">
            <SkillsVisual animate={isSpread} />
          </div>
        </div>
      ),
    },
    {
      id: 4,
      gridClass: "md:col-span-1 md:row-span-1",
      bg: "bg-white",
      rotation: 8, x: 25, y: -5,
      content: (
        <div className="h-full flex flex-col p-7">
          <Globe className="mb-5 text-gray-950" size={22} />
          <h3 className="text-[21px] font-bold text-gray-950 leading-snug mb-1">Find me online</h3>
          <div className="mt-4   flex flex-col gap-2.5">
            {[
              { icon: FaGithub, label: "GitHub", href: "https://github.com/frstbite" },
              { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/lukaslagler/" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center bg-gray-100 rounded-2xl p-3 border border-gray-200/60 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Icon size={25} className="text-gray-950" />
              </a>
            ))}
            <a
              href="&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6c;&#x75;&#x6b;&#x65;&#x2e;&#x6c;&#x61;&#x67;&#x6c;&#x65;&#x72;&#x40;&#x62;&#x6c;&#x75;&#x65;&#x77;&#x69;&#x6e;&#x2e;&#x63;&#x68;"
              aria-label="Email"
              className="flex items-center justify-center bg-gray-100 rounded-2xl p-3 border border-gray-200/60 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <Mail size={25} className="text-gray-950" />
            </a>
          </div>
        </div>
      ),
    },
  ];
}

/* ─── main component ─────────────────────────────────────── */

export default function AboutGrid() {
  const [isSpread, setIsSpread] = useState(false);
  const cards = makeCards(isSpread);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  useEffect(() => {
    const reset = () => setIsSpread(false);
    const handlePageShow = (e: PageTransitionEvent) => { if (e.persisted) reset(); };
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", reset);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", reset);
    };
  }, []);

  return (
    <section id="about" className="overflow-hidden bg-white relative">

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-[20vw] font-bold tracking-tighter bg-linear-to-b from-blue-500 to-transparent bg-clip-text text-transparent text-center leading-none pt-24 mb-0 select-none"
      >
        about me
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 max-w-2xl mx-auto">
            Code, logic, and the art of looking productive while builds run.
          </p>
        </motion.div>

        <div ref={sectionRef} className="relative w-full flex flex-col items-center min-h-[700px]">
          <AnimatePresence>
            {!isSpread && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(30px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setIsSpread(true)}
                className="z-[100] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 sm:px-10 py-5 bg-gray-950 text-white rounded-full font-bold shadow-[0_0_50px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-transform text-sm sm:text-md"
              >
                Find out about me
              </motion.button>
            )}
          </AnimatePresence>

          <motion.div
            layout
            className={cn(
              "w-full transition-all duration-700 max-w-6xl mx-auto",
              isSpread
                ? "grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[360px]"
                : "relative flex items-center justify-center min-h-[600px]"
            )}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? {
                  rotate: isSpread ? 0 : card.rotation,
                  x: isSpread ? 0 : card.x,
                  y: isSpread ? 0 : card.y,
                  scale: isSpread ? 1 : 0.92 - index * 0.02,
                  opacity: 1,
                } : { opacity: 0, y: 50 }}
                transition={{
                  type: "spring",
                  stiffness: isSpread ? 350 : 200,
                  damping: isSpread ? 25 : 30,
                  mass: 1,
                  delay: isInView && !isSpread ? index * 0.08 : isSpread ? index * 0.04 : 0,
                }}
                className={cn(
                  "rounded-[1.5rem] overflow-hidden border border-gray-200/50",
                  card.bg,
                  card.gridClass,
                  "shadow-[0_2px_20px_rgba(0,0,0,0.06)]",
                  !isSpread && "absolute w-[320px] h-[400px] md:w-[360px] md:h-[460px] shadow-2xl cursor-pointer"
                )}
                style={{
                  zIndex: isSpread ? 10 : cards.length - index,
                  gridArea: isSpread ? undefined : "1 / 1 / 2 / 2",
                }}
                onClick={() => !isSpread && setIsSpread(true)}
              >
                <motion.div
                  className="w-full h-full"
                  animate={{ filter: isSpread ? "blur(0px)" : "blur(8px)" }}
                  transition={{ duration: 0.4, delay: isSpread ? index * 0.04 : 0 }}
                >
                  {card.content}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

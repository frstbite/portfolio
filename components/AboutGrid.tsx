"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LayoutGrid, Zap, CircleDot, UserRound, Mail, Globe } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

/* ─── inline mini-UI visuals ─────────────────────────────── */

function ProjectCards() {
  return (
    <div className="w-full bg-gray-50 rounded-2xl p-3 border border-gray-100 flex gap-2.5">
      <div className="flex-1 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
        <div className="relative h-[80px]">
          <Image
            src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=400&auto=format&fit=crop"
            alt="Project"
            fill
            className="object-cover"
          />
          <span className="absolute top-2 left-2 bg-white text-[9px] font-semibold text-gray-700 px-1.5 py-0.5 rounded-full shadow-sm">
            Shipped ✓
          </span>
        </div>
        <div className="p-2">
          <p className="text-[10px] font-semibold text-gray-800 truncate">Frynds App</p>
          <p className="text-[9px] text-gray-400">Mobile · React Native</p>
        </div>
      </div>
      <div className="flex-1 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
        <div className="relative h-[80px]">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
            alt="Project"
            fill
            className="object-cover"
          />
          <span className="absolute top-2 left-2 bg-white text-[9px] font-semibold text-gray-700 px-1.5 py-0.5 rounded-full shadow-sm">
            Live ✓
          </span>
        </div>
        <div className="p-2">
          <p className="text-[10px] font-semibold text-gray-800 truncate">SaaS Dashboard</p>
          <p className="text-[9px] text-gray-400">Web · Next.js</p>
        </div>
      </div>
    </div>
  );
}

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
          <div className="w-5 h-5 rounded-full bg-gray-200" />
          <span className="text-[10px] font-semibold text-gray-600">frstbite · Projects</span>
        </div>
        <span className="text-[9px] bg-gray-900 text-white px-2 py-0.5 rounded-full">Export</span>
      </div>
      <div className="px-4 py-3 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[9px] text-gray-400 mb-1">Total shipped</p>
          <p className="text-xl font-bold text-gray-900">12+ Products</p>
          <p className="text-[9px] text-green-600 font-medium">↑ 4 this year</p>
        </div>
        <BarChart animate={animate} />
      </div>
    </div>
  );
}

function ContactVisual() {
  const people = [
    { name: "Jana K.", role: "Co-founder", flag: "🇨🇭" },
    { name: "Marc D.", role: "CTO", flag: "🇩🇪" },
    { name: "Sarah P.", role: "PM", flag: "🇬🇧" },
    { name: "Tom B.", role: "Investor", flag: "🇺🇸" },
  ];
  return (
    <div className="h-full flex flex-col bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="text-[10px] font-semibold text-gray-600">Network</span>
        <span className="text-[9px] text-gray-400 underline cursor-pointer">See All</span>
      </div>
      <div className="flex-1 divide-y divide-gray-100">
        {people.map(({ name, role, flag }) => (
          <div key={name} className="flex items-center justify-between px-4 py-2">
            <div>
              <p className="text-[10px] font-semibold text-gray-800">{name}</p>
              <p className="text-[9px] text-gray-400">{role}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">{flag}</span>
              <span className="text-[9px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Connect</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── card definitions ───────────────────────────────────── */

function makeCards(isSpread: boolean) {
  return [
    // {
    //   id: 1,
    //   gridClass: "md:col-span-2 md:row-span-1",
    //   bg: "bg-white",
    //   rotation: -7, x: -30, y: -15,
    //   content: (
    //     <div className="h-full flex flex-col p-7">
    //       <Zap className="mb-5 text-gray-950" size={22} />
    //       <h3 className="text-[21px] font-bold text-gray-950 leading-snug mb-2">0→1 Product Builder</h3>
    //       <p className="text-[13px] text-gray-400 leading-relaxed max-w-[220px]">
    //         Building products for fast-scaling startups — from blank canvas to shipped.
    //       </p>
    //       <div className="mt-auto pt-5">
    //         <ProjectCards />
    //       </div>
    //     </div>
    //   ),
    // },
    {
      id: 4,
      gridClass: "md:col-span-3 md:row-span-1",
      bg: "bg-white",
      rotation: -5, x: -20, y: -10,
      content: (
        <div className="h-full flex gap-6 p-7 py-7">
          <div className="flex flex-col justify-between flex-1 min-w-0 h-full">
            <div>
              <UserRound className="mb-5 text-gray-950" size={22} />
              <h3 className="text-[21px] font-bold text-gray-950 leading-snug mb-2">Design with intent</h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                Designing for outcomes, not deliverables. Every decision starts with the user.
              </p>
            </div>
            <button onClick={() => { window.location.href = "mailto:luke.lagler@bluewin.ch"; }} className="mt-6 w-fit bg-white border border-gray-200 text-gray-800 text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              Get in touch
            </button>
          </div>
          <div className="w-[55%] shrink-0 h-full">
            <MetricsDashboard animate={isSpread} />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      gridClass: "md:col-span-3 md:row-span-2",
      bg: "bg-white",
      rotation: 4, x: 20, y: 10,
      content: (
        <div className="relative h-full flex flex-col p-7 pt-16 overflow-hidden">
          <h3 className="text-5xl font-extrabold text-gray-950 text-center mb-2 relative z-10">
            <span className="relative inline-block">
              Clarity
              <motion.span
                className="absolute left-0 -bottom-1 w-full overflow-hidden block"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: isSpread ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              >
                <Image src="/underline-clarity.svg" alt="" fill={false} width={120} height={12} className="w-full" unoptimized />
              </motion.span>
            </span>
            {" Builds Trust"}
          </h3>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/5 w-4/5 drop-shadow-2xl" style={{ height: "102%" }}>
            <Image src="/frynds-mockup.png" alt="Frynds" fill className="object-contain object-bottom" />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      gridClass: "md:col-span-2 md:row-span-1",
      bg: "bg-white",
      rotation: 6, x: -10, y: 20,
      content: (
        <div className="h-full flex flex-col p-7">
          <CircleDot className="mb-5 text-gray-950" size={22} />
          <h3 className="text-[21px] font-bold text-gray-950 leading-snug mb-2">Full-Stack Engineer</h3>
          <p className="text-[13px] text-gray-400 leading-relaxed">
            From database schema to polished UI — I own the whole stack.
          </p>
          <div className="mt-auto pt-5">
            <SkillsVisual animate={isSpread} />
          </div>
        </div>
      ),
    },
    {
      id: 5,
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
              { icon: Mail, label: "Email", href: "mailto:luke.lagler@bluewin.ch" },
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
    <section id="about" className="py-32 overflow-hidden bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center mb-4 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200/60">
          <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">About Me</p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Bring to the Table</h2>
          <p className="text-gray-500 italic max-w-2xl mx-auto">
            Code, logic, and the art of looking productive while builds run.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center min-h-[700px]">
          <AnimatePresence>
            {!isSpread && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(30px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setIsSpread(true)}
                className="z-[100] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-5 bg-gray-950 text-white rounded-full font-bold shadow-[0_0_50px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-transform"
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
                initial={false}
                animate={{
                  rotate: isSpread ? 0 : card.rotation,
                  x: isSpread ? 0 : card.x,
                  y: isSpread ? 0 : card.y,
                  scale: isSpread ? 1 : 0.92 - index * 0.02,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: isSpread ? 350 : 200,
                  damping: isSpread ? 25 : 30,
                  mass: 1,
                  delay: isSpread ? index * 0.04 : 0,
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

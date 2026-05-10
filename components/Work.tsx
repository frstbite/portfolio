"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiExpo, SiAppwrite, SiApple,
  SiSwift, SiSupabase,
} from "react-icons/si";

const TAG_ICONS: Record<string, React.ElementType> = {
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Tailwind": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Python": SiPython,
  "Expo": SiExpo,
  "Appwrite": SiAppwrite,
  "iOS": SiApple,
  "SwiftUI": SiSwift,
  "Supabase": SiSupabase,
};

interface Project {
  id: string;
  index: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  mockup?: string;
  mockupAlt?: string;
}

const projects: Project[] = [
  {
    id: "0",
    index: "00",
    title: "Meteor — Goal-based savings.",
    company: "Personal Project",
    description: "A savings app that organizes your finances into clear, actionable goals with real-time progress tracking and smart insights.",
    tags: ["SwiftUI", "Supabase", "iOS"],
    year: "2026",
    link: "https://www.meteorsaves.com/",
    mockup: "/meteor-mockup2.png",
    mockupAlt: "Meteor App Showcase",
  },
  {
    id: "1",
    index: "01",
    title: "FitCheck — AI outfit feedback.",
    company: "Personal Project",
    description: "An AI-powered iOS app that gives objective, data-driven outfit feedback. No trends, no opinions — just clarity on fit, color, and style.",
    tags: ["SwiftUI", "Supabase", "iOS"],
    year: "2026",
    link: "https://www.tryfitcheck.co/",
    mockup: "/fitcheck-mockup2.png",
    mockupAlt: "FitCheck App Showcase",
  },
  {
    id: "2",
    index: "02",
    title: "Cortisol Video Maker — Viral Clip Creator.",
    company: "Team Project",
    description: "A community tool for generating low-cortisol style transformation videos with synced music and dynamic text overlays.",
    tags: ["Python", "Next.js", "Movielite"],
    year: "2026",
    link: "https://github.com/King-Phil/low_cortisol_video",
    mockup: "/low-cortisol-mockup.png",
    mockupAlt: "Cortisol Video Maker Mockup",
  },
  {
    id: "3",
    index: "03",
    title: "Frynds — social status app.",
    company: "Personal Project",
    description: "A real-time social status app for iOS that lets friends share what they're up to.",
    tags: ["React Native", "Appwrite", "iOS"],
    year: "2025",
    link: "https://apps.apple.com/us/app/frynds-social-status/id6747308656",
    mockup: "/frynds-mockup2.png",
    mockupAlt: "Frynds App Mockup",
  }
];

function ViewWorkButton({ href, disabled }: { href?: string; disabled?: boolean }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const [expanding, setExpanding] = useState(false);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  function handleClick() {
    if (disabled || !href || expanding) return;
    const el = ref.current;
    if (!el) return;
    window.open(href, "_blank");
    const rect = el.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setExpanding(true);
  }

  function handleAnimationComplete() {
    setExpanding(false);
    setOrigin(null);
  }

  const overlay = origin && (
    <motion.div
      className="fixed inset-0 bg-black z-[99999] pointer-events-none"
      initial={{ clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }}
      animate={
        expanding
          ? { clipPath: `circle(200vmax at ${origin.x}px ${origin.y}px)` }
          : { clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }
      }
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={expanding ? handleAnimationComplete : undefined}
    />
  );

  return (
    <>
      {mounted && createPortal(overlay, document.body)}

      <motion.button
        ref={ref}
        onClick={handleClick}
        whileHover={disabled ? {} : { scale: 1.04 }}
        whileTap={disabled ? {} : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={`group flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-colors select-none ${disabled
          ? "bg-black/8 text-black/30 cursor-default"
          : "bg-black text-white cursor-pointer hover:bg-black/80"
          }`}
      >
        View Work
        <ArrowUpRight className={`w-4 h-4 transition-transform duration-200 ${disabled ? "" : "group-hover:rotate-45"}`} />
      </motion.button>
    </>
  );
}

function MockupPlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full h-full min-h-[280px] bg-neutral-100 rounded-2xl flex items-center justify-center">
      <p className="text-sm font-mono text-black/20 px-8 text-center">{title}</p>
    </div>
  );
}

function TagChip({ tag, Icon, delay }: { tag: string; Icon?: React.ElementType; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-flex"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 200px 0px" }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && Icon && (
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white rounded-full px-3 py-2 flex items-center gap-1.5 whitespace-nowrap pointer-events-none z-10"
            initial={{ opacity: 0, y: 6, scale: 0.85, rotate: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: -5 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>

      <span className="inline-block px-4 py-1.5 rounded-full border border-black/12 text-xs font-medium text-black/55 w-fit cursor-default select-none">
        {tag}
      </span>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imageHovered, setImageHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);


  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[1.5rem] overflow-hidden border border-gray-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-10 md:p-14 bg-white"
    >
      {/* Header: company + index */}
      <div className="flex items-center justify-between mb-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px" }}
          transition={{ duration: 0.5, delay: index * 0.05 + 0.15 }}
          className="text-xs font-semibold uppercase tracking-widest text-black/35"
        >
          {project.company}
        </motion.p>
        <span className="text-xs font-mono text-black/20">{project.year}</span>
      </div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px 200px 0px" }}
        transition={{ duration: 0.6, delay: index * 0.05 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black leading-tight mb-10"
      >
        {project.title}
      </motion.h3>

      {/* Mockup + meta */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">

        {/* Mockup */}
        <motion.div
          className="w-full md:flex-1 overflow-hidden rounded-2xl cursor-pointer"
          onMouseEnter={() => setImageHovered(true)}
          onMouseLeave={() => setImageHovered(false)}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px" }}
          transition={{ duration: 0.7, delay: index * 0.05 + 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ scale: imageHovered ? 1.025 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.mockup ? (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src={project.mockup}
                  alt={project.mockupAlt ?? project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <MockupPlaceholder title={project.title} />
            )}
          </motion.div>
        </motion.div>

        {/* Tags + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px" }}
          transition={{ duration: 0.6, delay: index * 0.05 + 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 md:w-52 lg:w-60 shrink-0"
        >
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, ti) => {
              const Icon = TAG_ICONS[tag];
              return (
                <TagChip key={tag} tag={tag} Icon={Icon} delay={index * 0.05 + 0.35 + ti * 0.06} />
              );
            })}
          </div>

          <div className="mt-4">
            <ViewWorkButton href={project.link} disabled={!project.link} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.05 + 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-black/45 leading-relaxed mt-4 mb-10 max-w-xl"
          >
            {project.description}
          </motion.p>

        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white">

      {/* Section header — full bleed, wider than cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -300px 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-0"
      >
        <h2 className="text-[20vw] font-bold tracking-tighter bg-linear-to-b from-blue-500 to-transparent bg-clip-text text-transparent text-center">
          my work
        </h2>
      </motion.div>

      {/* Projects — constrained, overlaps heading */}
      <div className="max-w-5xl mx-auto px-6 -mt-42 relative z-0">
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
}

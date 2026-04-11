"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  role: string;
  achievement: string;
  company: string;
  theme: "dark" | "light";
  bgColor: string;
  textColor: string;
  accentColor: string;
  imagePath?: string;
}

const projects: Project[] = [
  {
    id: "1",
    index: "01",
    title: "Scalable Microservices",
    subtitle: "Architecture Design",
    description: "Built a robust backend system using Node.js and SQL, focusing on scalability and performance while occasionally overthinking simple solutions.",
    tags: ["Backend", "Node.js", "SQL", "Architecture"],
    role: "Backend Lead",
    achievement: "Zero-downtime migration",
    company: "Lukas.dev",
    theme: "dark",
    bgColor: "bg-[#0B0B0B]",
    textColor: "text-white",
    accentColor: "bg-white/10",
  },
  {
    id: "2",
    index: "02",
    title: "Next.js Frontend",
    subtitle: "Interactive Realities",
    description: "Crafted a high-performance frontend for a complex SaaS application, leveraging the power of TypeScript and TailwindCSS for a seamless user experience.",
    tags: ["Frontend", "Next.js", "TypeScript", "Tailwind"],
    role: "Fullstack Developer",
    achievement: "99.9% Lighthouse",
    company: "SaaS Labs",
    theme: "light",
    bgColor: "bg-[#F5F5F7]",
    textColor: "text-black",
    accentColor: "bg-black/5",
  },
  {
    id: "3",
    index: "03",
    title: "AI Content Engine",
    subtitle: "Future Experiments",
    description: "Developed an automated content generation system using Python and AI models, rebranding bugs as 'unexpected creative features'.",
    tags: ["AI", "Python", "Automation"],
    role: "AI Engineer",
    achievement: "60% Faster Cycles",
    company: "InnovateAI",
    theme: "light",
    bgColor: "bg-[#E8F1EE]",
    textColor: "text-[#1A3C34]",
    accentColor: "bg-[#1A3C34]/5",
  },
  {
    id: "4",
    index: "04",
    title: "Multi-Platform App",
    subtitle: "Actually Makes Sense",
    description: "Designed and built a cross-platform mobile application using Expo, ensuring it works across iOS and Android with a unified codebase.",
    tags: ["Mobile", "Expo", "React Native"],
    role: "Mobile Lead",
    achievement: "10k+ Active Users",
    company: "App Studio",
    theme: "dark",
    bgColor: "bg-[#1A1A1A]",
    textColor: "text-white",
    accentColor: "bg-white/5",
  }
];

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const isDark = project.theme === "dark";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full ${project.bgColor} ${project.textColor} rounded-[40px] p-8 md:p-12 mb-12 overflow-hidden flex flex-col gap-12`}
    >
      {/* Top Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium opacity-50 uppercase tracking-tight">{project.company}</span>
          <span className="text-sm font-medium opacity-50">{project.subtitle}</span>
        </div>
        <span className="text-sm font-medium opacity-50">{project.index}</span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Text */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.9]">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>
            <p className="text-lg md:text-xl opacity-70 max-w-md leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className={`px-4 py-2 ${project.accentColor} rounded-full text-xs font-semibold uppercase tracking-wider`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Visual/Sub-grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sub-box 1: Details */}
          <div className={`${project.accentColor} rounded-[30px] p-8 flex flex-col justify-between h-full min-h-[240px]`}>
             <div className="space-y-6">
               <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Role</p>
                 <p className="text-xl font-medium">{project.role}</p>
               </div>
               <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Achievement</p>
                 <p className="text-xl font-medium">{project.achievement}</p>
               </div>
             </div>
             <div className="flex justify-end">
                <div className={`w-12 h-12 rounded-full ${isDark ? 'bg-white text-black' : 'bg-black text-white'} flex items-center justify-center`}>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
             </div>
          </div>

          {/* Sub-box 2: Placeholder Image/Mockup */}
          <div className={`${project.accentColor} rounded-[30px] p-6 flex items-center justify-center h-full min-h-[240px] relative overflow-hidden group`}>
             <div className={`w-full h-full rounded-2xl ${isDark ? 'bg-white/5' : 'bg-black/5'} flex items-center justify-center text-xs font-mono opacity-20 uppercase tracking-[0.2em]`}>
                Visual Asset
             </div>
             {/* Decorative element like the logo in inspiration */}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-sm font-medium px-4 py-2 rounded-full border border-current">View Case Study</span>
             </div>
          </div>
          
          {/* Sub-box 3: Full width sub-box (optional) */}
          <div className={`${project.accentColor} rounded-[30px] p-8 md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-8`}>
            <div className="flex-1">
              <p className="text-sm opacity-50 mb-2">Technical stack implementation details and architectural patterns used for {project.title}.</p>
              <div className="flex gap-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className={`w-8 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
                 ))}
              </div>
            </div>
            <div className="flex gap-2">
               <div className={`w-12 h-12 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
               <div className={`w-12 h-12 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
               <div className={`w-12 h-12 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
           <div className="flex items-center gap-4 mb-4 bg-gray-100 rounded-full px-4 py-2">
             <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Work</p>
           </div>
           <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Selected <br />Engineering Projects</h2>
           <p className="text-xl text-foreground/60 max-w-xl mx-auto italic">
             Focusing on the intersection of robust backend systems and intuitive frontend experiences.
           </p>
        </motion.div>
        
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

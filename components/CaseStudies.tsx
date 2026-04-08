"use client";

import Image from "next/image";

interface Project {
  id: string;
  tags: string[];
  title: string;
  description: string;
  role: string;
  achievement: string;
  company: string;
  imageColor: string;
}

const projects: Project[] = [
  {
    id: "1",
    tags: ["Backend", "Node.js", "SQL", "Architecture"],
    title: "Scalable Microservices Architecture: Designed (Mostly) On Purpose™",
    description: "Built a robust backend system using Node.js and SQL, focusing on scalability and performance while occasionally overthinking simple solutions.",
    role: "Backend Lead",
    achievement: "Zero-downtime migration",
    company: "Lukas.dev",
    imageColor: "bg-blue-50"
  },
  {
    id: "2",
    tags: ["Frontend", "Next.js", "TypeScript", "Tailwind"],
    title: "Next.js Frontend: Turning Ideas into Interactive Realities",
    description: "Crafted a high-performance frontend for a complex SaaS application, leveraging the power of TypeScript and TailwindCSS for a seamless user experience.",
    role: "Fullstack Developer",
    achievement: "99.9% lighthouse score",
    company: "SaaS Labs",
    imageColor: "bg-indigo-50"
  },
  {
    id: "3",
    tags: ["AI", "Python", "Automation"],
    title: "AI-Powered Content Engine: Experimenting with the Future",
    description: "Developed an automated content generation system using Python and AI models, rebranding bugs as 'unexpected creative features'.",
    role: "AI Engineer",
    achievement: "60% faster content cycles",
    company: "InnovateAI",
    imageColor: "bg-orange-50"
  },
  {
    id: "4",
    tags: ["Mobile", "Expo", "React Native"],
    title: "Multi-Platform App: Simple, Useful, and Actually Makes Sense",
    description: "Designed and built a cross-platform mobile application using Expo, ensuring it works across iOS and Android with a unified codebase.",
    role: "Mobile Lead",
    achievement: "Shipped to 10k+ users",
    company: "App Studio",
    imageColor: "bg-green-50"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col justify-between order-2 lg:order-1">
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-500">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {project.title}
          </h3>
          <p className="text-lg text-gray-500 mb-12 max-w-xl">
            {project.description}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Role</p>
            <p className="text-sm font-semibold">{project.role}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Achievement</p>
            <p className="text-sm font-semibold">{project.achievement}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Company</p>
            <p className="text-sm font-semibold">{project.company}</p>
          </div>
        </div>
      </div>
      
      <div className={`aspect-[4/3] rounded-3xl ${project.imageColor} flex items-center justify-center p-12 order-1 lg:order-2 overflow-hidden group`}>
        <div className="w-full h-full bg-white rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center text-gray-200 font-bold text-2xl">
           Engineering Artifact
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-mono">CODE & SYSTEMS</p>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Engineering Projects</h2>
           <p className="text-gray-500 italic">Designing for scale and performance across the stack.</p>
        </div>
        
        <div className="flex flex-col">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

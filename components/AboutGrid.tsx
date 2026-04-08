"use client";

import Image from "next/image";

export default function AboutGrid() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-mono">ABOUT ME</p>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Bring to the Table</h2>
           <p className="text-gray-500 italic max-w-2xl mx-auto">Code, logic, and the ancient art of looking productive while builds run.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          
          {/* Card 1: Text Block */}
          <div className="bg-black text-white p-8 rounded-3xl flex flex-col justify-end">
            <p className="text-2xl font-bold leading-tight italic">
              "Turning ideas into projects — and bugs into things to fix later."
            </p>
          </div>

          {/* Card 2: Tech Stack */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">TOOLS & TECH</p>
            <div className="flex flex-wrap gap-2 mt-4">
               {["TypeScript", "React", "Node.js", "Python", "SQL", "Tailwind"].map(tech => (
                 <span key={tech} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold border border-gray-200">{tech}</span>
               ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">And a bit of AI.</p>
          </div>

          {/* Card 3: Philosophy Block */}
          <div className="bg-[#F8F8F8] p-8 rounded-3xl flex flex-col justify-center text-center">
            <h3 className="text-xl font-bold mb-2 italic">Designed On Purpose™</h3>
            <p className="text-sm text-gray-500 italic">Experience in turning complex problems into (usually) working solutions.</p>
          </div>

          {/* Card 4: Achievement Block 1 */}
          <div className="bg-gray-100 rounded-3xl flex items-center justify-center p-8 group">
             <div className="text-center transition-transform group-hover:scale-110">
                <p className="text-6xl font-black italic underline decoration-blue-500 decoration-8 underline-offset-8">404</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-6">BUGS REBRANDED AS FEATURES</p>
             </div>
          </div>

          {/* Card 5: Achievement Block 2 */}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col justify-between">
             <p className="text-lg font-bold italic">Expert in Force Push & Pray (FP&P).</p>
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">
                🚀
             </div>
          </div>

          {/* Card 6: Identity */}
          <div className="bg-[#F0F0F0] p-8 rounded-3xl flex flex-col justify-between">
             <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-mono">IDENTITY</p>
                <p className="text-sm italic leading-relaxed text-gray-600">
                  "Lukas is a Switzerland-based developer who occasionally overthinks simple solutions, but ends up with something solid in the end."
                </p>
             </div>
             <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <div>
                   <p className="text-xs font-bold italic">Lukas Lagler</p>
                   <p className="text-[10px] text-gray-400 font-mono">Software Engineer</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

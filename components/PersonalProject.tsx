"use client";

import Image from "next/image";

export default function PersonalProject() {
  return (
    <section id="personal" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center overflow-hidden">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-mono">PERSONAL PROJECT</p>
          <div>
            <Image
              src="/frynds-logo.png"
              alt="Frynds Logo"
              width={250}
              height={80}
              className="mb-6 mx-auto"
            />
          </div>
          <p className="text-gray-500 mb-12 italic max-w-2xl">An app that helps friends meet up</p>
          
          <div className="relative w-full max-w-md aspect-[2/3] overflow-hidden mb-5">
             <Image
               src="/frynds-showcase.png"
               alt="Frynds App Mockup"
               fill
               className="object-cover shadow-2xl"
             />
          </div>

          <button className="px-10 py-4 bg-white border border-gray-200 rounded-full font-bold hover:border-black transition-all flex items-center gap-2">
            Download on AppStore
          </button>
        </div>
      </div>
    </section>
  );
}

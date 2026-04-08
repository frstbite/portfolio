"use client";

import Image from "next/image";
import { useState } from "react";
import ConfettiButton from "./ConfettiButton";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hi@lukaslagler.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium mb-12 overflow-hidden whitespace-nowrap max-w-[280px]">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <div className="flex whitespace-nowrap gap-4">
             <span>Currently Experimenting with AI</span>
          </div>
        </div>

        {/* Floating elements (simplified) */}
        <div className="absolute top-40 left-[10%] hidden lg:block animate-bounce shadow-xl rounded-lg overflow-hidden border border-gray-100" style={{ animationDuration: '3s' }}>
           <div className="w-24 h-16 bg-gray-200"></div>
        </div>
        <div className="absolute top-60 right-[15%] hidden lg:block animate-bounce shadow-xl rounded-lg overflow-hidden border border-gray-100" style={{ animationDuration: '4s', animationDelay: '1s' }}>
           <div className="w-20 h-28 bg-gray-200"></div>
        </div>
        <div className="absolute bottom-20 left-[15%] hidden lg:block animate-bounce shadow-xl rounded-lg overflow-hidden border border-gray-100" style={{ animationDuration: '5s' }}>
           <div className="w-32 h-20 bg-gray-200"></div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-8">
          I'm Lukas, <br />
          a <span className="inline-flex items-center gap-4">
            Software
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gray-300 overflow-hidden inline-block align-middle transform translate-y-[-4px]">
              {/* Profile Image Placeholder */}
            </div>
          </span> Engineer
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-medium mb-12 italic">
          Switzerland-based software engineer focused on building solid, impactful solutions and turning ideas into scalable code.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:opacity-90 transition-all shadow-lg active:scale-95">
            Download CV
          </button>
          
          <ConfettiButton 
            onClick={copyEmail}
            label={copied ? "Copied!" : "Copy Email"}
            className="bg-white border-gray-200 border text-black hover:border-black shadow-sm"
            particleCount={30}
          />
        </div>
      </div>
    </section>
  );
}

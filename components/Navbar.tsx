"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Case Studies", href: "#work" },
  { name: "Personal Project", href: "#personal" },
  { name: "About Me", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tighter text-foreground">
          LUKAS
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            className="px-5 py-2 rounded-full border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Download CV
          </Link>
        </div>


        {/* Mobile menu button could go here */}
      </div>
    </nav>
  );
}

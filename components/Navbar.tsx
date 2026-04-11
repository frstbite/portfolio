"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { name: "Case Studies", href: "#work" },
  { name: "Personal Project", href: "#personal" },
  { name: "About Me", href: "#about" },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const padding = useTransform(
    scrollY,
    [0, 50],
    ["24px 0px", "16px 0px"]
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 1px 2px 0 rgb(0 0 0 / 0.05)"]
  );

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 transition-colors"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        padding,
        boxShadow,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tighter text-foreground">
          LUKAS
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-gray-500 hover:text-foreground transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/resume.pdf"
              className="px-8 py-4 bg-black text-white rounded-full hover:opacity-90 transition-all shadow-lg active:scale-95"
            >
              Download CV
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}


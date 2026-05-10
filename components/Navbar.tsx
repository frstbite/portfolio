"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { name: "My Work", href: "#work" },
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
          <motion.a
            href="&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x6c;&#x75;&#x6b;&#x65;&#x2e;&#x6c;&#x61;&#x67;&#x6c;&#x65;&#x72;&#x40;&#x62;&#x6c;&#x75;&#x65;&#x77;&#x69;&#x6e;&#x2e;&#x63;&#x68;&#x3f;&#x73;&#x75;&#x62;&#x6a;&#x65;&#x63;&#x74;&#x3d;&#x48;&#x65;&#x79;&#x25;&#x32;&#x30;&#x4c;&#x75;&#x6b;&#x61;&#x73;"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-black rounded-full shadow-sm hover:opacity-80 transition-all"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}


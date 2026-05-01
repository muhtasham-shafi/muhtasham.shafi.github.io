"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
          isScrolled ? "bg-ink/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 border border-cyan rounded-lg grid place-items-center relative group overflow-hidden">
              <span className="font-serif italic text-cyan text-sm z-10">MS</span>
              <div className="absolute inset-0 bg-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-text hidden sm:block">
              Muhtasham Shafi
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-[10px] tracking-widest uppercase px-4 py-2 text-text-soft hover:text-text hover:bg-white/5 rounded-lg transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden sm:inline-flex font-mono text-[10px] tracking-widest uppercase px-6 py-2.5 rounded-full border border-cyan text-cyan hover:bg-cyan hover:text-ink hover:shadow-[0_0_20px_rgba(76,201,240,0.3)] transition-all"
            >
              Hire / Invest
            </Link>
            <button
              className="md:hidden p-2 text-text-soft"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-ink pt-32 px-6 flex flex-col gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-serif text-4xl text-text hover:text-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="font-mono text-[10px] tracking-widest uppercase py-4 border-t border-white/5 text-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire / Invest →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

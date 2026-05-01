"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const line1 = "Building the";
  const line2 = "future, one";
  const line3 = "prototype at a time.";

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <header className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
            Dhaka, Bangladesh · 2026
          </span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-[12vw] sm:text-[9vw] leading-[0.9] font-serif tracking-tight mb-16"
        >
          <div className="overflow-hidden">
            <motion.span variants={child} className="block">
              {line1}
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span variants={child} className="block text-gold italic">
              future
            </motion.span>
            <motion.span variants={child} className="block sm:inline">
              , one
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span variants={child} className="block border-b-2 border-white/10 sm:inline pb-2">
              prototype
            </motion.span>
            <motion.span variants={child} className="block sm:inline">
              {" "}at a time.
            </motion.span>
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-end"
        >
          <p className="text-xl sm:text-2xl text-text-soft font-light leading-relaxed max-w-xl">
            I'm <em className="text-text font-serif italic not-italic">Muhtasham Shafi</em> — a young engineer designing{" "}
            <span className="text-text underline decoration-cyan/30 underline-offset-8">
              robotics, AI systems and the software
            </span>{" "}
            that will shape the next decade.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan text-ink px-10 py-5 rounded-full font-mono text-[10px] uppercase tracking-widest hover:shadow-[0_0_40px_rgba(76,201,240,0.4)] hover:-translate-y-1 transition-all duration-300">
              Investor Deck →
            </button>
            <button className="border border-white/20 text-text px-10 py-5 rounded-full font-mono text-[10px] uppercase tracking-widest hover:border-cyan hover:text-cyan transition-all duration-300">
              The Journey →
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

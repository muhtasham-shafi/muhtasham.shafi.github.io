"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { num: "7+", label: "Years building" },
    { num: "2×", label: "FIRST Global Team BD" },
    { num: "6", label: "Investor-ready prototypes" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan mb-2">
              About
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif leading-tight">
              A builder, <span className="italic text-gold">not</span> just a learner.
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-light text-text leading-snug mb-8"
            >
              I'm a young tech enthusiast based in <strong className="font-medium">Bangladesh</strong>, 
              obsessed with robotics, AI and software that does something real in the physical world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-soft space-y-6 max-w-2xl mb-12"
            >
              <p>
                From a line-following robot in 2019 to representing my country at the
                <em> FIRST Global Challenge</em> in Singapore and Panama, I've spent every year
                since shipping things — competitions, prototypes, products and websites.
              </p>
              <p>
                Today I run <strong className="text-text">Miracle Robotics</strong>, a venture I founded in 2026 to turn
                tech into community-scale solutions: factory automation, drone logistics,
                AI-powered smart homes, and smart agriculture.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  <div className="text-4xl sm:text-5xl font-serif text-cyan mb-2">
                    {stat.num}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-text-mute">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src="/assets/img/profile.jpeg"
                alt="Muhtasham Shafi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-ink border border-white/10 p-6 rounded-xl flex items-center gap-4 shadow-2xl">
              <div className="font-mono">
                <div className="text-[10px] text-text-mute uppercase tracking-widest mb-1">Current Focus</div>
                <div className="text-xs text-cyan">Scalable AI Systems</div>
              </div>
              <div className="w-10 h-10 border border-cyan/20 rounded-full grid place-items-center">
                <span className="text-cyan text-lg">↗</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

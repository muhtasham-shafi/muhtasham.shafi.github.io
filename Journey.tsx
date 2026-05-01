"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2019",
    tag: "The first robot",
    title: "A line-follower, and the bug.",
    desc: "Started my robotics journey with a classic LFR project. It was the first time I saw code make something move — and that was the bug.",
    img: "/assets/img/journey/2019-lfr.jpg",
  },
  {
    year: "2022",
    tag: "First system",
    title: "Home automation, and a math medal.",
    desc: "Built an AI-driven system to automate home tasks. Same year, secured 6th place in the National Mental Math Olympiad.",
    img: "/assets/img/journey/2022-olympiad.jpg",
  },
  {
    year: "2023",
    tag: "Bangladesh → Singapore",
    title: "Representing Team BD at FIRST Global.",
    desc: "Ranked 36th out of 186 countries at the FIRST Global Challenge in Singapore. Theme: Hydrogen Horizons.",
    img: "/assets/img/journey/2023-fgc-singapore.jpg",
  },
  {
    year: "2024",
    tag: "MIT · Oxford",
    title: "Going global, going deeper.",
    desc: "MIT robotics workshop and Oxford Union debating. Ranked 4th place in the National Mental Math Olympiad.",
    img: "/assets/img/journey/2024-mit.jpg",
  },
  {
    year: "2025",
    tag: "Hanoi → Panama",
    title: "Global Youth Summit & FGC Panama.",
    desc: "Collaborated on SDG solutions in Vietnam. Represented BD again in Panama, ranking 43rd out of 191 countries.",
    img: "/assets/img/journey/2025-fgc-panama.jpg",
  },
  {
    year: "2026",
    tag: "The company",
    title: "Founded Miracle Robotics.",
    desc: "Turned years of prototyping into a company focused on charity-aligned community tech solutions for Bangladesh.",
    img: "/assets/img/journey/2026-miracle.jpg",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan mb-2 block">
            Timeline
          </span>
          <h2 className="text-5xl sm:text-7xl font-serif">
            One long <span className="italic text-gold">build</span>.
          </h2>
        </div>

        <div className="space-y-32">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-1">
                <div className="text-5xl font-serif text-white/10 lg:rotate-[-90deg] lg:translate-x-[-20%]">
                  {item.year}
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan mb-4 block">
                  {item.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-soft text-lg font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/5 bg-white/5 group">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    onError={(e) => {
                      // Handle missing images gracefully
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-text-mute font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.year} Documentation
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

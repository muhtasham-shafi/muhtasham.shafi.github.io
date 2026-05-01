"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    cat: "Industrial",
    title: "Industrial Robotic Arm",
    desc: "A factory-grade, multi-axis programmable manipulator built for repetitive, hazardous, and precision-critical tasks. Engineered for garment, pharma, and electronics industries.",
    metrics: [
      { val: "−40%", label: "Labour Cost" },
      { val: "3×", label: "Throughput" },
      { val: "24/7", label: "Reliability" },
    ],
    img: "/assets/img/p01-robotic-arm.jpg",
    status: "Scaling Phase",
  },
  {
    id: "02",
    cat: "Logistics",
    title: "Drone Delivery & Rescue",
    desc: "A dual-purpose aerial fleet for Bangladesh. Commercial logistics for port transport and humanitarian aid for flood-stricken communities.",
    metrics: [
      { val: "−45%", label: "Per-unit Cost" },
      { val: "−60%", label: "CO₂ Impact" },
      { val: "∞", label: "Lives Saved" },
    ],
    img: "/assets/img/p02-drone.jpg",
    status: "Seeking Series A",
  },
  {
    id: "03",
    cat: "Consumer",
    title: "AI Smart Home System",
    desc: "Autonomous appliance management using presence sensors and daily schedules to optimize energy and comfort in modern real estate.",
    metrics: [
      { val: "−40%", label: "Energy Bills" },
      { val: "2.1y", label: "Payback" },
      { val: "−1.2t", label: "CO₂/yr" },
    ],
    img: "/assets/img/p03-smart-home.jpg",
    status: "Miniaturising",
  },
  {
    id: "04",
    cat: "AgriTech",
    title: "AI Smart Irrigation",
    desc: "Real-time soil moisture sensors per-plant. AI suggests optimal water and soil composition based on species and local conditions.",
    metrics: [
      { val: "−50%", label: "Water Use" },
      { val: "+30%", label: "Yield Uplift" },
      { val: "Live", label: "Analytics" },
    ],
    img: "/assets/img/p04-irrigation.jpg",
    status: "Investor Priority",
  },
  {
    id: "05",
    cat: "Climate",
    title: "Floor-Lifting Flood Bridge",
    desc: "Hydraulic bridge deck that automatically rises with water levels to keep critical road links open during monsoon disasters.",
    metrics: [
      { val: "৳B", label: "Loss Avoided" },
      { val: "Auto", label: "Trigger" },
      { val: "100%", label: "Uptime" },
    ],
    img: "/assets/img/p05-flood-bridge.jpg",
    status: "Design Complete",
  },
  {
    id: "06",
    cat: "Mobility",
    title: "NFC Smart Toll System",
    desc: "Pre-loaded tap-and-go system that compresses 3-minute toll transactions to 3 seconds, eliminating traffic bottlenecks.",
    metrics: [
      { val: "3s", label: "Transaction" },
      { val: "−85%", label: "Queue Length" },
      { val: "Recurring", label: "Revenue" },
    ],
    img: "/assets/img/p06-nfc-toll.jpg",
    status: "Prototype Ready",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-ink-2/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan mb-2 block">
              Investor Deck
            </span>
            <h2 className="text-5xl sm:text-7xl font-serif">
              Solving <span className="italic text-gold">real</span> problems.
            </h2>
          </div>
          <p className="max-w-md text-text-soft text-lg font-light leading-relaxed">
            Every product below was built to fix a crisis Bangladeshis face daily. Prototypes exist. The science is sound.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-ink border border-white/5 rounded-[24px] overflow-hidden hover:border-cyan/30 transition-all duration-500"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-cyan">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-mute mb-2">
                  {project.id} — {project.cat}
                </div>
                <h3 className="text-2xl font-serif text-text mb-4 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-soft text-sm leading-relaxed mb-8 flex-1">
                  {project.desc}
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-lg font-serif text-gold leading-none mb-1">
                        {metric.val}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-text-mute">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

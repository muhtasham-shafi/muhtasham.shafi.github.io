"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/md-muhtasham-musharof-shafi-055a20317/" },
    { name: "YouTube", href: "https://www.youtube.com/@MuhtashamShafi.07" },
    { name: "WhatsApp", href: "https://wa.me/8801711903180", icon: Phone },
  ];

  return (
    <footer id="contact" className="pt-32 pb-12 bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan mb-6 block">
              Contact
            </span>
            <h2 className="text-5xl sm:text-7xl font-serif leading-[1.1] mb-12">
              Got a project, <span className="italic text-gold">a brief</span>, or a cheque?
            </h2>
            <a 
              href="mailto:md.muhtasham.m.shafi@gmail.com" 
              className="group inline-flex items-center gap-4 text-2xl sm:text-4xl font-serif text-text-soft hover:text-cyan transition-all"
            >
              md.muhtasham.m.shafi@gmail.com
              <span className="inline-block group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">↗</span>
            </a>
          </div>

          <div className="flex flex-col justify-end gap-12">
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 font-mono text-[10px] uppercase tracking-widest text-text-soft hover:border-cyan hover:text-cyan transition-all"
                >
                  {link.icon && <link.icon size={14} />}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-text-mute">
            © {currentYear} Muhtasham Shafi · Miracle Robotics
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-text-mute">
            Designed & Built in Dhaka 🇧🇩
          </div>
        </div>
      </div>
    </footer>
  );
}

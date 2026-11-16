"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Download, Terminal, Sparkles, Layers, Cpu, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { personal, stats } = portfolioData;

  const techBadges = [
    "Python",
    "FastAPI",
    "Django",
    "React 18",
    "SQL / MySQL",
    "SQLAlchemy ORM",
    "FAISS Vector Search",
    "Sentence-Transformers",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Handcrafted Architectural Grid & Subtle Vignette (No AI rainbow neon blobs) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-500/[0.04] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-medium mb-8 shadow-sm hover:border-slate-600 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-200">{personal.statusText}</span>
          <span className="text-slate-600">•</span>
          <span className="text-sky-400 font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {personal.location}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.12] mb-6"
        >
          Designing scalable web apps &{" "}
          <span className="text-gradient-steel">intelligent data systems</span>
        </motion.h1>

        {/* Subtitle / Bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed mb-10"
        >
          Hi, I&apos;m <span className="text-white font-medium">{personal.name}</span> — a{" "}
          <span className="text-slate-200">{personal.role}</span>. I build end-to-end
          applications with clean object-oriented Python, robust REST APIs, MySQL databases, and modern interactive frontends.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm shadow-sm hover:shadow-sky-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-600 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Get In Touch
          </a>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-medium border border-slate-700/80 hover:border-slate-600 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 text-sky-400" />
            View Resume PDF
          </a>
        </motion.div>

        {/* Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-3xl mb-14"
        >
          <div className="text-[11px] uppercase tracking-widest text-slate-500 font-mono mb-3">
            Core Technology Stack
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full max-w-4xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-[#0d1322] border border-slate-800/80 hover:border-slate-700 transition-colors text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

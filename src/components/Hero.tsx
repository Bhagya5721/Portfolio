"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Download, Terminal, Sparkles, Layers, Cpu } from "lucide-react";
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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Gradients & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[350px] bg-purple-500/10 rounded-full blur-[120px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-md shadow-sm shadow-indigo-500/10 hover:border-indigo-500/50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{personal.statusText}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400">{personal.location}</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6"
        >
          Designing scalable web apps &{" "}
          <span className="text-gradient">AI semantic systems</span>
        </motion.h1>

        {/* Subtitle / Bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed mb-10"
        >
          Hi, I&apos;m <span className="text-white font-medium">{personal.name}</span> — a{" "}
          <span className="text-gray-200">{personal.role}</span>. I develop full-stack
          web applications with clean object-oriented Python, robust REST APIs, MySQL databases, and modern interactive frontends.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md"
          >
            Get In Touch
          </a>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-semibold border border-white/10 hover:border-indigo-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-md backdrop-blur-md"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            View Resume PDF
          </a>
        </motion.div>

        {/* Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-3">
            Core Technology Stack
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium text-gray-300 bg-gray-900/80 border border-gray-800 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-gray-900/50 border border-white/[0.07] backdrop-blur-sm hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight text-gradient-cyan">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

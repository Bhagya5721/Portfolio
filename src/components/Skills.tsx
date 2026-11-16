"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Wrench, Sparkles, CheckCircle, BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const { skillCategories, softSkills } = portfolioData;

  const categories = ["All", ...skillCategories.map((c) => c.title)];
  const [activeCategory, setActiveCategory] = useState("All");

  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category.title,
    }))
  );

  const displayedSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-sky-500/10 text-sky-400 border-sky-500/30";
      case "Proficient":
        return "bg-slate-800/80 text-slate-300 border-slate-700/80";
      case "Familiar":
        return "bg-slate-900 text-slate-400 border-slate-800";
      default:
        return "bg-slate-800/80 text-slate-300 border-slate-700/80";
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#070b13]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Core Competencies & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mt-4 text-sm sm:text-base">
            Proficiencies across Python backend engineering, relational databases, AI vector search, and responsive frontend design.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === category
                    ? "bg-slate-800 text-white border border-slate-700 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          <AnimatePresence>
            {displayedSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.015 }}
                key={`${skill.category}-${skill.name}`}
                className="architectural-card p-4 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${getLevelBadge(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {skill.name}
                  </h3>
                </div>
                <div className="text-[10px] text-slate-500 mt-2.5 font-mono">
                  {skill.category.split(" ")[0]}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Soft Skills Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-[#0d1322] border border-slate-800/80">
          <div className="flex items-center gap-2 mb-3.5 text-white text-xs font-mono uppercase tracking-wider">
            <BrainCircuit className="w-4 h-4 text-sky-400" />
            <span>Professional & Interpersonal Strengths</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((trait) => (
              <span
                key={trait}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
              >
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Architectural Highlights Banner */}
        <div className="mt-6 p-6 rounded-2xl bg-[#0d1322] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Continuous Growth & AI Integration</div>
              <div className="text-xs text-slate-400">
                Special interest in embedding local vector search models (FAISS, Sentence-Transformers) into enterprise web applications.
              </div>
            </div>
          </div>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-colors whitespace-nowrap"
          >
            Check GitHub Activity →
          </a>
        </div>
      </div>
    </section>
  );
}

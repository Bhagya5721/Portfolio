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
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
      case "Proficient":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case "Familiar":
        return "bg-gray-500/10 text-gray-400 border-gray-500/30";
      default:
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-gray-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Technical & Practical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Core Competencies
          </h2>
          <p className="text-gray-400 max-w-2xl mt-4 text-sm sm:text-base">
            Proficiencies across Python backend engineering, relational databases, AI vector search, and responsive frontend design.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-gray-900/80 border border-white/[0.08] backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5"
        >
          <AnimatePresence>
            {displayedSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                key={`${skill.category}-${skill.name}`}
                className="group p-4 rounded-xl bg-gray-900/50 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-gray-900/90 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-120 transition-transform" />
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${getLevelBadge(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-snug">
                    {skill.name}
                  </h3>
                </div>
                <div className="text-[10px] text-gray-500 mt-2 font-mono">
                  {skill.category.split(" ")[0]}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Soft Skills Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gray-900/60 border border-white/[0.08] backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4 text-white text-sm font-semibold">
            <BrainCircuit className="w-4 h-4 text-indigo-400" />
            <span>Professional & Interpersonal Strengths</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((trait) => (
              <span
                key={trait}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs font-medium text-indigo-200"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Extra Highlights Banner */}
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-gray-900/40 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Continuous Growth & AI Integration</div>
              <div className="text-xs text-gray-400">
                Special interest in embedding local vector search models (FAISS, Sentence-Transformers) into enterprise web applications.
              </div>
            </div>
          </div>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10 transition-colors whitespace-nowrap"
          >
            Check GitHub Activity →
          </a>
        </div>
      </div>
    </section>
  );
}

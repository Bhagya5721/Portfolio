"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Wrench, CheckCircle, BrainCircuit } from "lucide-react";
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

  return (
    <section id="skills" className="py-20 border-b border-stone-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono uppercase tracking-wider mb-2">
              03 / Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Technical Stack & Expertise
            </h2>
            <p className="text-stone-600 max-w-xl mt-1 text-sm">
              Proficiencies across Python backend engineering, relational databases, AI vector search, and responsive frontend design.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4 sm:mt-0 p-1 bg-stone-50 border border-stone-200 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-white text-stone-900 border border-stone-300 shadow-xs font-semibold"
                    : "text-stone-600 hover:text-stone-900"
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
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2, delay: index * 0.015 }}
                key={`${skill.category}-${skill.name}`}
                className="p-3.5 rounded-lg bg-[#fafaf9] border border-stone-200 flex flex-col justify-between hover:border-stone-400 hover:bg-white transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white border border-stone-200 text-stone-600">
                      {skill.level}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-stone-900 leading-snug">
                    {skill.name}
                  </h3>
                </div>
                <div className="text-[10px] text-stone-400 mt-2 font-mono">
                  {skill.category.split(" ")[0]}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Soft Skills & Working Style */}
        <div className="mt-12 p-6 rounded-xl bg-stone-50 border border-stone-200">
          <div className="flex items-center gap-2 mb-3 text-stone-900 text-xs font-mono uppercase tracking-wider">
            <BrainCircuit className="w-4 h-4 text-stone-700" />
            <span>Professional Strengths & Working Style</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((trait) => (
              <span
                key={trait}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-stone-200 text-xs font-medium text-stone-800 shadow-xs"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

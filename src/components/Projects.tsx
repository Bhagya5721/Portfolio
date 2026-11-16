"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  FolderGit2,
  ExternalLink,
  TrendingUp,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { projects } = portfolioData;

  const categories = ["All", "AI & Full Stack", "Full Stack", "IoT & Embedded"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Engineering Work
          </h2>
          <p className="text-slate-400 max-w-2xl mt-4 text-sm sm:text-base">
            Detailed walkthroughs of end-to-end applications, payment workflows, and intelligent hardware-software IoT solutions.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-800 text-white border border-slate-700 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="architectural-card rounded-xl overflow-hidden flex flex-col justify-between group"
              >
                {/* Architectural Card Header (No neon rainbow gradients) */}
                <div className="bg-[#0b101c] border-b border-slate-800/80 p-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                  
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-900 border border-slate-700 text-slate-300">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-sky-500/10 text-sky-300 border border-sky-500/30">
                        <Sparkles className="w-3 h-3 text-sky-400" />
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metric Highlight */}
                    {project.metrics && (
                      <div className="mt-3.5 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
                        <TrendingUp className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                        <span className="leading-snug text-[11px] font-medium">{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Architecture & Highlights */}
                    {expandedProjectId === project.id && (
                      <div className="mt-3.5 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2 animate-in fade-in duration-200">
                        <div className="text-sky-400 font-semibold flex items-center gap-1.5 text-xs">
                          <Layers className="w-3.5 h-3.5" />
                          Key Architectural Highlights
                        </div>
                        <ul className="space-y-1.5 pl-0.5">
                          {project.highlights.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-slate-400 text-[11px] leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Footer Action Links */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1 transition-colors"
                    >
                      {expandedProjectId === project.id ? (
                        <>
                          Hide details <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                        </>
                      ) : (
                        <>
                          View details <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-800"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Hands-on Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Projects & Systems Built
          </h2>
          <p className="text-gray-400 max-w-2xl mt-4 text-sm sm:text-base">
            Detailed walkthroughs of end-to-end applications, payment workflows, and intelligent hardware-software IoT solutions.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-gray-900/80 border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group rounded-2xl bg-gray-900/60 border border-white/[0.08] hover:border-indigo-500/40 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                {/* Visual Top Banner / Mockup Header */}
                <div
                  className={`h-40 w-full bg-gradient-to-br ${project.imageGradient} p-5 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/60 text-white/90 border border-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metric Highlight */}
                    {project.metrics && (
                      <div className="mt-3.5 p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 flex items-center gap-2 text-xs text-indigo-300">
                        <TrendingUp className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span className="leading-snug">{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono text-gray-300 bg-white/[0.05] border border-white/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Architecture & Highlights */}
                    {expandedProjectId === project.id && (
                      <div className="mt-4 p-3.5 rounded-xl bg-black/50 border border-white/[0.08] text-xs text-gray-300 space-y-2.5 animate-in fade-in duration-200">
                        <div className="text-indigo-300 font-semibold flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-indigo-400" />
                          Key Architectural Highlights
                        </div>
                        <ul className="space-y-1.5 pl-1">
                          {project.highlights.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-gray-400 text-[11px] leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Footer Action Links */}
                  <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-xs text-gray-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      {expandedProjectId === project.id ? (
                        <>
                          Hide details <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          View details <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.06]"
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

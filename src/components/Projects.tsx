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
  ArrowRight,
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
    <section id="projects" className="py-20 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono uppercase tracking-wider mb-2">
              02 / Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Featured Projects & Systems
            </h2>
            <p className="text-stone-600 max-w-xl mt-1 text-sm">
              Hands-on applications covering end-to-end full stack development, payment APIs, and embedded IoT architectures.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4 sm:mt-0 p-1 bg-white border border-stone-200 rounded-lg shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-stone-900 text-white shadow-sm"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isLead = project.id === "ai-task-knowledge-system";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className="editorial-card rounded-xl p-6 sm:p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    {/* Project Info (Left) */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-stone-100 border border-stone-200 text-stone-700">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <Sparkles className="w-3 h-3 text-emerald-600" />
                            Flagship Project
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
                        {project.description}
                      </p>

                      {/* Metric Callout */}
                      {project.metrics && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-800 font-medium">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{project.metrics}</span>
                        </div>
                      )}

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white border border-stone-200 text-stone-600 shadow-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Architecture & Highlights */}
                      {expandedProjectId === project.id && (
                        <div className="mt-4 p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2 animate-in fade-in duration-200">
                          <div className="text-stone-900 font-semibold flex items-center gap-1.5">
                            <Layers className="w-4 h-4 text-stone-700" />
                            Key Architecture Highlights
                          </div>
                          <ul className="space-y-1.5 pl-0.5">
                            {project.highlights.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-stone-600 text-xs leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Right Action & Metadata Area */}
                    <div className="lg:w-64 flex flex-col justify-between items-start lg:items-end gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-stone-200">
                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-lg bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 shadow-sm transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" />
                          Source Code
                        </a>
                      </div>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-xs font-medium text-stone-600 hover:text-stone-900 inline-flex items-center gap-1 transition-colors"
                      >
                        {expandedProjectId === project.id ? (
                          <>
                            Hide details <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            View technical details <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

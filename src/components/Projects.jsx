import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  Terminal,
  ShieldCheck,
  Cpu,
  CreditCard,
  Radio,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons.jsx";

export default function Projects() {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = ["All", "Python", "Web", "AI"];
  const allProjects = portfolioData?.projects || [];

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => {
          if (Array.isArray(p.categories)) {
            return p.categories.includes(activeFilter);
          }
          return p.category === activeFilter;
        });

  const getProjectVisual = (imageType, isDark) => {
    switch (imageType) {
      case "blockchain":
        return (
          <div className="relative w-full h-48 bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-3 backdrop-blur-md shadow-lg shadow-blue-500/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <span className="font-mono text-xs font-semibold text-blue-300 uppercase tracking-widest">
              SHA-256 Ledger • Cryptographic Consensus
            </span>
          </div>
        );
      case "ai-search":
        return (
          <div className="relative w-full h-48 bg-gradient-to-tr from-slate-900 via-purple-950 to-indigo-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-3 backdrop-blur-md shadow-lg shadow-purple-500/20">
              <Cpu className="w-8 h-8" />
            </div>
            <span className="font-mono text-xs font-semibold text-purple-300 uppercase tracking-widest">
              FAISS Vector Embeddings • Sub-second Retrieval
            </span>
          </div>
        );
      case "payment":
        return (
          <div className="relative w-full h-48 bg-gradient-to-tr from-slate-900 via-emerald-950 to-teal-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-3 backdrop-blur-md shadow-lg shadow-emerald-500/20">
              <CreditCard className="w-8 h-8" />
            </div>
            <span className="font-mono text-xs font-semibold text-emerald-300 uppercase tracking-widest">
              Razorpay API • HMAC-SHA256 Signature Verification
            </span>
          </div>
        );
      case "iot":
      default:
        return (
          <div className="relative w-full h-48 bg-gradient-to-tr from-slate-900 via-sky-950 to-blue-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 mb-3 backdrop-blur-md shadow-lg shadow-sky-500/20">
              <Radio className="w-8 h-8" />
            </div>
            <span className="font-mono text-xs font-semibold text-sky-300 uppercase tracking-widest">
              Embedded Microcontroller • Automated GSM Telemetry
            </span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
            style={{
              backgroundColor: isDark ? "rgba(30, 41, 59, 0.6)" : "rgba(239, 246, 255, 0.8)",
              color: isDark ? "#93c5fd" : "#2563eb",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Featured <span className={isDark ? "gradient-text" : "gradient-text-light"}>Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-3 max-w-2xl mx-auto text-base sm:text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Real-world full-stack applications showcasing end-to-end architecture, secure APIs, databases, and AI search integration.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div
            className={`inline-flex p-1.5 rounded-2xl border backdrop-blur-md shadow-sm ${
              isDark
                ? "bg-slate-900/80 border-slate-800"
                : "bg-slate-100/90 border-slate-200"
            }`}
          >
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? isDark
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "bg-white text-blue-600 shadow-sm"
                      : isDark
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id || idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`rounded-3xl overflow-hidden border backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  isDark
                    ? "glass-panel-dark bg-slate-900/80 border-slate-800/80 hover:border-slate-700 shadow-xl shadow-black/30"
                    : "glass-panel-light bg-white/95 border-slate-200/90 hover:border-slate-300 shadow-xl shadow-slate-100"
                }`}
              >
                <div>
                  {/* Visual Header */}
                  {getProjectVisual(project.image, isDark)}

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    {/* Category & Metrics badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                        {project.category || "Full Stack"}
                      </span>
                      {project.metrics && (
                        <span className={`text-[11px] font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          {project.metrics}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm sm:text-base leading-relaxed mb-5 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {project.description}
                    </p>

                    {/* Highlights bullet points if present */}
                    {Array.isArray(project.highlights) && project.highlights.length > 0 && (
                      <ul className="space-y-1.5 mb-5 text-xs sm:text-sm">
                        {project.highlights.map((item, hIdx) => (
                          <li
                            key={hIdx}
                            className={`flex items-start gap-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                      {(project.tags || []).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium ${
                            isDark
                              ? "bg-slate-800/80 text-slate-300 border border-slate-700/50"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons: GitHub & Live Demo */}
                <div
                  className={`px-6 sm:px-7 py-4 border-t flex items-center justify-between gap-4 ${
                    isDark ? "border-slate-800/80 bg-slate-950/40" : "border-slate-100 bg-slate-50/70"
                  }`}
                >
                  <a
                    href={project.githubUrl || portfolioData?.personal?.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                      isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-black"
                    }`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Code</span>
                  </a>

                  <a
                    href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200"
                  >
                    <span>{project.liveUrl !== "#" ? "Live Demo" : "Repository"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

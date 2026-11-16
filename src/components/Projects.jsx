import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import {
  ExternalLink,
  Sparkles,
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

  const getProjectVisual = (imageType) => {
    switch (imageType) {
      case "blockchain":
        return (
          <div className="relative w-full h-44 bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-2.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs font-semibold text-blue-300 uppercase tracking-widest">
              SHA-256 Ledger • Cryptographic Consensus
            </span>
          </div>
        );
      case "ai-search":
        return (
          <div className="relative w-full h-44 bg-gradient-to-tr from-slate-900 via-purple-950 to-indigo-900 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-2.5">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs font-semibold text-purple-300 uppercase tracking-widest">
              FAISS Vector Embeddings • Sub-second Retrieval
            </span>
          </div>
        );
      case "payment":
        return (
          <div className="relative w-full h-44 bg-gradient-to-tr from-slate-900 via-emerald-950 to-teal-900 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-2.5">
              <CreditCard className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs font-semibold text-emerald-300 uppercase tracking-widest">
              Razorpay API • Signature Verification
            </span>
          </div>
        );
      case "iot":
      default:
        return (
          <div className="relative w-full h-44 bg-gradient-to-tr from-slate-900 via-sky-950 to-blue-900 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 mb-2.5">
              <Radio className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs font-semibold text-sky-300 uppercase tracking-widest">
              Embedded Microcontroller • Automated GSM Alert
            </span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
            style={{
              backgroundColor: isDark ? "rgba(30, 41, 59, 0.6)" : "rgba(239, 246, 255, 0.8)",
              color: isDark ? "#93c5fd" : "#2563eb",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Featured <span className={isDark ? "gradient-text" : "gradient-text-light"}>Projects</span>
          </h2>
          <p
            className={`mt-3 max-w-2xl mx-auto text-base sm:text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Real-world full-stack applications showcasing end-to-end architecture, secure APIs, databases, and AI search integration.
          </p>
        </div>

        {/* Filter Tabs - static and immediate, no sliding layout shift */}
        <div className="flex justify-center mb-10">
          <div
            className={`inline-flex p-1.5 rounded-xl border ${
              isDark
                ? "bg-slate-900 border-slate-800"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? isDark
                        ? "bg-blue-600 text-white"
                        : "bg-white text-blue-600 shadow-sm"
                      : isDark
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid - clean, no hover movement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id || idx}
              className={`rounded-2xl overflow-hidden border flex flex-col justify-between transition-colors duration-150 ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              <div>
                {/* Visual Header */}
                {getProjectVisual(project.image)}

                {/* Body Content */}
                <div className="p-6">
                  {/* Category & Metrics badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      {project.category || "Full Stack"}
                    </span>
                    {project.metrics && (
                      <span className={`text-[11px] font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold tracking-tight mb-2.5 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {project.description}
                  </p>

                  {/* Highlights bullet points if present */}
                  {Array.isArray(project.highlights) && project.highlights.length > 0 && (
                    <ul className="space-y-1 mb-4 text-xs sm:text-sm">
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
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(project.tags || []).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2.5 py-0.5 rounded text-xs font-mono font-medium ${
                          isDark
                            ? "bg-slate-800 text-slate-300 border border-slate-700/50"
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
                className={`px-6 py-3.5 border-t flex items-center justify-between gap-4 ${
                  isDark ? "border-slate-800 bg-slate-950/40" : "border-slate-100 bg-slate-50"
                }`}
              >
                <a
                  href={project.githubUrl || portfolioData?.personal?.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors duration-150 ${
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-150"
                >
                  <span>{project.liveUrl !== "#" ? "Live Demo" : "Repository"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

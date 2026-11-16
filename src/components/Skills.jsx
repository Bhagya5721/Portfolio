import React from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import {
  Server,
  Layout,
  Database,
  Cpu,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const { isDark } = useTheme();
  const skillGroups = portfolioData?.skillGroups || [];

  const getGroupIcon = (title) => {
    const t = title?.toLowerCase() || "";
    if (t.includes("backend")) return <Server className="w-5 h-5 text-blue-500" />;
    if (t.includes("frontend")) return <Layout className="w-5 h-5 text-indigo-500" />;
    if (t.includes("database")) return <Database className="w-5 h-5 text-emerald-500" />;
    if (t.includes("ai") || t.includes("ml")) return <Cpu className="w-5 h-5 text-purple-500" />;
    return <Wrench className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
            style={{
              backgroundColor: isDark ? "rgba(30, 41, 59, 0.6)" : "rgba(239, 246, 255, 0.8)",
              color: isDark ? "#93c5fd" : "#2563eb",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            My <span className={isDark ? "gradient-text" : "gradient-text-light"}>Skills</span>
          </h2>
          <p
            className={`mt-3 max-w-2xl mx-auto text-base sm:text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Strong backend foundations in Python & Django coupled with dynamic frontend capabilities and AI/ML vector search.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.title || groupIdx}
              className={`rounded-2xl p-6 border ${
                isDark
                  ? "bg-slate-900/80 border-slate-800"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/30">
                <div
                  className={`p-2 rounded-xl ${
                    isDark ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {getGroupIcon(group.title)}
                </div>
                <h3 className={`font-bold text-base sm:text-lg ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {group.title}
                </h3>
              </div>

              {/* Simple skill chips */}
              <div className="flex flex-wrap gap-2">
                {(group.skills || []).map((skill, sIdx) => (
                  <span
                    key={skill.name || sIdx}
                    className={`px-3 py-1 rounded-md border text-xs sm:text-sm font-medium ${
                      isDark
                        ? "bg-slate-800 border-slate-700 text-slate-200"
                        : "bg-slate-100 border-slate-200 text-slate-700"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
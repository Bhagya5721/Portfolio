import React from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import { motion } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  Cpu,
  Wrench,
  CheckCircle2,
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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
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
            <span>Technical Proficiency</span>
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
            My <span className={isDark ? "gradient-text" : "gradient-text-light"}>Skills</span>
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
            Strong backend foundations in Python & Django coupled with dynamic frontend capabilities and AI/ML vector search.
          </motion.p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title || groupIdx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className={`rounded-3xl p-6 sm:p-7 border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "glass-panel-dark bg-slate-900/70 border-slate-800/80 hover:border-slate-700 shadow-xl shadow-black/20"
                  : "glass-panel-light bg-white/90 border-slate-200/90 hover:border-slate-300 shadow-lg shadow-slate-100"
              }`}
            >
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/20 dark:border-slate-800">
                <div
                  className={`p-2.5 rounded-2xl ${
                    isDark ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {getGroupIcon(group.title)}
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {group.title}
                  </h3>
                  <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {group.skills?.length || 0} Core competencies
                  </span>
                </div>
              </div>

              {/* Skills with Animated Progress Bars */}
              <div className="space-y-4">
                {(group.skills || []).map((skill, sIdx) => {
                  const level = skill.level || 80;
                  return (
                    <div key={skill.name || sIdx}>
                      <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                        <span className={isDark ? "text-slate-200" : "text-slate-700"}>
                          {skill.name}
                        </span>
                        <span className={isDark ? "text-slate-400 font-mono" : "text-slate-500 font-mono"}>
                          {level}%
                        </span>
                      </div>

                      {/* Bar track */}
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${
                          isDark ? "bg-slate-800/90" : "bg-slate-200/90"
                        }`}
                      >
                        {/* Animated fill */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.1 + sIdx * 0.05, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

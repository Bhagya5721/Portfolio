import React from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Code2,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";

export default function About() {
  const { isDark } = useTheme();
  const personal = portfolioData?.personal || {};
  const keyFacts = portfolioData?.keyFacts || [];

  const getFactIcon = (label) => {
    switch (label?.toLowerCase()) {
      case "education":
        return <GraduationCap className="w-5 h-5 text-blue-500" />;
      case "internship":
        return <Briefcase className="w-5 h-5 text-indigo-500" />;
      case "location":
        return <MapPin className="w-5 h-5 text-emerald-500" />;
      case "core specialization":
        return <Code2 className="w-5 h-5 text-violet-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            <span>Know Me Better</span>
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
            About <span className={isDark ? "gradient-text" : "gradient-text-light"}>Me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Photo / Card Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer Glow Ring */}
              <div
                className={`absolute -inset-1 rounded-3xl blur-xl opacity-40 transition duration-1000 group-hover:opacity-100 ${
                  isDark
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
                    : "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                }`}
              />

              {/* Profile Card Container */}
              <div
                className={`relative rounded-3xl p-8 border backdrop-blur-xl shadow-2xl flex flex-col items-center text-center ${
                  isDark
                    ? "glass-panel-dark bg-slate-900/80 border-slate-800"
                    : "glass-panel-light bg-white/90 border-slate-200"
                }`}
              >
                {/* Avatar Placeholder */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-1 shadow-xl shadow-indigo-500/25">
                    <div
                      className={`w-full h-full rounded-2xl flex flex-col items-center justify-center font-mono font-bold text-4xl text-white ${
                        isDark ? "bg-slate-950" : "bg-slate-900"
                      }`}
                    >
                      <span>BU</span>
                      <span className="text-[10px] font-sans tracking-widest text-blue-400 uppercase mt-1">
                        Developer
                      </span>
                    </div>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-md flex items-center gap-1.5 border-2 border-slate-950">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Open to Work</span>
                  </div>
                </div>

                <h3 className={`text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {personal.name || "Bhagya Udapudi"}
                </h3>
                <p className="text-sm font-medium text-blue-500 mt-1 mb-4">
                  Python Full Stack Developer Intern
                </p>

                {/* Micro info pills */}
                <div className="flex flex-wrap gap-2 justify-center text-xs">
                  <span
                    className={`px-3 py-1 rounded-lg border font-medium ${
                      isDark
                        ? "bg-slate-800/60 text-slate-300 border-slate-700/60"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    Pentagon Space
                  </span>
                  <span
                    className={`px-3 py-1 rounded-lg border font-medium ${
                      isDark
                        ? "bg-slate-800/60 text-slate-300 border-slate-700/60"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    ECE 2026 Grad
                  </span>
                  <span
                    className={`px-3 py-1 rounded-lg border font-medium ${
                      isDark
                        ? "bg-slate-800/60 text-slate-300 border-slate-700/60"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    Bengaluru
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio + Key Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Transitioning Analytical Engineering into High-Impact Software Solutions
            </h3>
            
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {personal.bio ||
                "Electronics and Communication Engineering graduate (2022–2026) transitioning into Python Full Stack and Software Developer roles, with hands-on experience in Python programming, SQL database management, and modern front-end fundamentals (HTML, CSS, JavaScript). Strong problem-solving ability, enthusiastic learner, and dedicated to writing clean, maintainable, object-oriented code."}
            </p>

            {/* Key Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {keyFacts.map((fact, index) => (
                <div
                  key={fact.label || index}
                  className={`p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                    isDark
                      ? "bg-slate-900/60 border-slate-800/80 hover:border-slate-700 shadow-lg shadow-black/10"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`p-2 rounded-xl ${
                        isDark ? "bg-slate-800/80" : "bg-slate-100"
                      }`}
                    >
                      {getFactIcon(fact.label)}
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {fact.label}
                    </span>
                  </div>
                  <div className={`font-semibold text-sm sm:text-base leading-snug ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {fact.value}
                  </div>
                  {fact.subtext && (
                    <div className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {fact.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

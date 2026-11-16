import React from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Code2,
  Sparkles,
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span>Know Me Better</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            About <span className={isDark ? "gradient-text" : "gradient-text-light"}>Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <div
                className={`rounded-2xl p-7 border transition-colors duration-150 flex flex-col items-center text-center ${
                  isDark
                    ? "bg-slate-900/80 border-slate-800"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                {/* Avatar Placeholder */}
                <div className="relative mb-5">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-0.5">
                    <div
                      className={`w-full h-full rounded-2xl flex flex-col items-center justify-center font-mono font-bold text-3xl text-white ${
                        isDark ? "bg-slate-950" : "bg-slate-900"
                      }`}
                    >
                      <span>BU</span>
                      <span className="text-[10px] font-sans tracking-widest text-blue-400 uppercase mt-1">
                        Developer
                      </span>
                    </div>
                  </div>
                  {/* Status Badge - solid, no pulse */}
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-sm flex items-center gap-1.5 border border-slate-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
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
                    className={`px-2.5 py-1 rounded-md border font-medium ${
                      isDark
                        ? "bg-slate-800/60 text-slate-300 border-slate-700/60"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    Pentagon Space
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-md border font-medium ${
                      isDark
                        ? "bg-slate-800/60 text-slate-300 border-slate-700/60"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    ECE 2026 Grad
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-md border font-medium ${
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
          </div>

          {/* Right Column: Bio + Key Facts */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Transitioning Analytical Engineering into High-Impact Software Solutions
            </h3>
            
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {personal.bio ||
                "Electronics and Communication Engineering graduate (2022–2026) transitioning into Python Full Stack and Software Developer roles, with hands-on experience in Python programming, SQL database management, and modern front-end fundamentals (HTML, CSS, JavaScript). Strong problem-solving ability, enthusiastic learner, and dedicated to writing clean, maintainable, object-oriented code."}
            </p>

            {/* Key Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyFacts.map((fact, index) => (
                <div
                  key={fact.label || index}
                  className={`p-4 rounded-xl border transition-colors duration-150 ${
                    isDark
                      ? "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                      : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className={`p-2 rounded-lg ${
                        isDark ? "bg-slate-800" : "bg-slate-100"
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
          </div>
        </div>
      </div>
    </section>
  );
}

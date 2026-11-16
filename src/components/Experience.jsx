import React from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Sparkles,
  Award,
} from "lucide-react";

export default function Experience() {
  const { isDark } = useTheme();
  const experiences = portfolioData?.experience || [];
  const education = portfolioData?.education || [];
  const certifications = portfolioData?.certifications || [];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
            style={{
              backgroundColor: isDark ? "rgba(30, 41, 59, 0.6)" : "rgba(239, 246, 255, 0.8)",
              color: isDark ? "#93c5fd" : "#2563eb",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Experience & <span className={isDark ? "gradient-text" : "gradient-text-light"}>Education</span>
          </h2>
          <p
            className={`mt-3 max-w-2xl mx-auto text-base sm:text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            My practical industry training at Pentagon Space coupled with a strong academic foundation in engineering.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Professional Experience & Internships
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 ml-3 sm:ml-4 space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id || idx}
                className="relative"
              >
                {/* Timeline node - solid, no hover pop */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-slate-950" />

                {/* Card */}
                <div
                  className={`rounded-2xl p-6 sm:p-7 border transition-colors duration-150 ${
                    isDark
                      ? "bg-slate-900/80 border-slate-800"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3 pb-3 border-b border-slate-800/30 dark:border-slate-800">
                    <div>
                      <h4 className={`text-lg sm:text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-blue-500">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className={`inline-flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                      <span className={`inline-flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* 3 Bullet Points */}
                  <ul className="space-y-2 mb-4">
                    {(exp.points || []).map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className={`flex items-start gap-2 text-xs sm:text-sm leading-relaxed ${
                          isDark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  {Array.isArray(exp.technologies) && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-0.5 rounded text-xs font-mono font-medium ${
                            isDark
                              ? "bg-slate-800 text-blue-300 border border-slate-700/60"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Education History
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 ml-3 sm:ml-4 space-y-6">
            {education.map((edu, idx) => (
              <div
                key={edu.id || idx}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-slate-950" />

                {/* Card */}
                <div
                  className={`rounded-xl p-5 border transition-colors duration-150 ${
                    isDark
                      ? "bg-slate-900/70 border-slate-800"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                    <h4 className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      {edu.degree}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-blue-500">
                    {edu.institution} <span className="opacity-70 font-normal">({edu.location})</span>
                  </p>

                  {edu.description && (
                    <p className={`text-xs mt-1.5 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications preview */}
        {certifications.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-800/40">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-lg bg-violet-500/10 text-violet-500">
                <Award className="w-4 h-4" />
              </div>
              <h4 className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                Certifications & Achievements
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className={`p-3 rounded-lg border text-xs sm:text-sm font-medium flex items-center gap-2.5 ${
                    isDark
                      ? "bg-slate-900/50 border-slate-800 text-slate-300"
                      : "bg-white border-slate-200 text-slate-700"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import React from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import { motion } from "framer-motion";
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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
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
            <span>Career Milestones</span>
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
            Experience & <span className={isDark ? "gradient-text" : "gradient-text-light"}>Education</span>
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
            My practical industry training at Pentagon Space coupled with a strong academic foundation in engineering.
          </motion.p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Professional Experience & Internships
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 ml-3 sm:ml-4 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id || idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-md shadow-blue-500/50 group-hover:scale-125 transition-transform duration-200" />

                {/* Card */}
                <div
                  className={`rounded-3xl p-6 sm:p-8 border backdrop-blur-xl transition-all duration-300 ${
                    isDark
                      ? "glass-panel-dark bg-slate-900/80 border-slate-800/90 shadow-xl shadow-black/20"
                      : "glass-panel-light bg-white/95 border-slate-200/90 shadow-lg shadow-slate-100"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-4 border-b border-slate-800/20 dark:border-slate-800/60">
                    <div>
                      <h4 className={`text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-blue-500 mt-0.5">
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
                  <ul className="space-y-3 mb-6">
                    {(exp.points || []).map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className={`flex items-start gap-3 text-sm sm:text-base leading-relaxed ${
                          isDark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  {Array.isArray(exp.technologies) && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-medium ${
                            isDark
                              ? "bg-slate-800/80 text-blue-300 border border-slate-700/60"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Education History
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 ml-3 sm:ml-4 space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id || idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 shadow-md shadow-indigo-500/50 group-hover:scale-125 transition-transform duration-200" />

                {/* Card */}
                <div
                  className={`rounded-2xl p-5 sm:p-6 border backdrop-blur-xl transition-all duration-300 ${
                    isDark
                      ? "glass-panel-dark bg-slate-900/70 border-slate-800/80 shadow-md"
                      : "glass-panel-light bg-white/90 border-slate-200/80 shadow-sm"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className={`text-base sm:text-lg font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      {edu.degree}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-blue-500">
                    {edu.institution} <span className="opacity-70 font-normal">({edu.location})</span>
                  </p>

                  {edu.description && (
                    <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {edu.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications preview */}
        {certifications.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-800/40">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-violet-500/10 text-violet-500">
                <Award className="w-5 h-5" />
              </div>
              <h4 className={`text-lg font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                Certifications & Achievements
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-2.5 ${
                    isDark
                      ? "bg-slate-900/50 border-slate-800 text-slate-300"
                      : "bg-white border-slate-200 text-slate-700"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
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

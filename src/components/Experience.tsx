"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-gray-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Internship Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry & Internship Experience
          </h2>
          <p className="text-gray-400 max-w-xl mt-4 text-sm sm:text-base">
            Hands-on exposure across full-stack Python development, database management, and collaborative software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12 ml-2 sm:ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-indigo-500 flex items-center justify-center group-hover:scale-125 group-hover:border-indigo-400 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.8)] transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gray-900/60 border border-white/[0.08] backdrop-blur-md hover:border-indigo-500/30 transition-all">
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-gray-300 flex items-center gap-2 mt-0.5">
                      <span className="text-indigo-400">{exp.company}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-300 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-5">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

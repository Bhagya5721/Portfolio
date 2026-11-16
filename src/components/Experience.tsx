"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono uppercase tracking-wider mb-2">
            04 / Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Industry & Internship Experience
          </h2>
          <p className="text-stone-600 max-w-xl mt-1 text-sm">
            Hands-on exposure across full-stack Python development, database management, and collaborative software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-stone-300 space-y-10 ml-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-stone-800 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
              </div>

              {/* Card Container */}
              <div className="editorial-card p-6 sm:p-7 rounded-xl">
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-stone-700 flex items-center gap-2 mt-0.5">
                      <span className="font-semibold text-stone-900">{exp.company}</span>
                      <span className="text-stone-300">•</span>
                      <span className="text-stone-500 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-100 border border-stone-200 text-xs font-mono text-stone-700 self-start sm:self-auto font-medium">
                    <Calendar className="w-3.5 h-3.5 text-stone-500" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-4">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-stone-100">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono text-stone-600 bg-stone-50 border border-stone-200"
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

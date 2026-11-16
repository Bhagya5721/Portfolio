"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academics & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl mt-4 text-sm sm:text-base">
            Strong academic foundations and professional certifications backing my engineering career.
          </p>
        </div>

        {/* Education Cards */}
        <div className="mb-16">
          <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            Academic Background
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="architectural-card p-6 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-400">
                      <Calendar className="w-3 h-3 text-sky-400" />
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-300">
                      {item.gradeLabel}: {item.grade}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                    {item.degree}
                  </h4>

                  <div className="text-xs font-medium text-slate-300 mb-1">
                    {item.institution}
                  </div>

                  <div className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {item.location}
                  </div>

                  {item.description && (
                    <p className="text-xs text-slate-400 leading-relaxed pt-3 border-t border-slate-800/80">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            Professional Certifications & Hackathons
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="architectural-card p-5 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 mb-3.5 group-hover:border-sky-500/40 transition-colors">
                    <Award className="w-4 h-4" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    {cert.type}
                  </span>

                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors leading-snug mb-2">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  <span>{cert.issuer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

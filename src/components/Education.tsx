"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academics & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mt-4 text-sm sm:text-base">
            Strong academic foundations and professional certifications backing my engineering career.
          </p>
        </div>

        {/* Education Cards */}
        <div className="mb-20">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            Academic Background
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-900/60 border border-white/[0.08] hover:border-indigo-500/40 backdrop-blur-md flex flex-col justify-between transition-all hover:shadow-lg hover:shadow-indigo-500/10 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/[0.05] border border-white/10 text-gray-300">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                      {item.gradeLabel}: {item.grade}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5">
                    {item.degree}
                  </h4>

                  <div className="text-xs font-medium text-gray-300 mb-1">
                    {item.institution}
                  </div>

                  <div className="text-xs text-gray-400 flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3 text-gray-500" />
                    {item.location}
                  </div>

                  {item.description && (
                    <p className="text-xs text-gray-400 leading-relaxed pt-3 border-t border-white/[0.06]">
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
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Professional Certifications & Hackathons
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-gray-900/50 border border-white/[0.08] hover:border-cyan-500/40 hover:bg-gray-900/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 block mb-1">
                    {cert.type}
                  </span>

                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug mb-2">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
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

"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-stone-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono uppercase tracking-wider mb-2">
            05 / Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Academic Honors & Certifications
          </h2>
          <p className="text-stone-600 max-w-xl mt-1 text-sm">
            Strong academic foundations in Electronics & Communication backed by verified industry credentials.
          </p>
        </div>

        {/* Education Cards */}
        <div className="mb-14">
          <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-900" />
            Academic Background
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-5 sm:p-6 rounded-xl bg-[#fafaf9] border border-stone-200 flex flex-col justify-between hover:border-stone-400 hover:bg-white transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono bg-white border border-stone-200 text-stone-600">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-stone-900 text-white shadow-xs">
                      {item.gradeLabel}: {item.grade}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-1 leading-snug">
                    {item.degree}
                  </h4>

                  <div className="text-xs font-medium text-stone-700 mb-1">
                    {item.institution}
                  </div>

                  <div className="text-xs text-stone-400 flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    {item.location}
                  </div>

                  {item.description && (
                    <p className="text-xs text-stone-500 leading-relaxed pt-2.5 border-t border-stone-200">
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
          <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-900" />
            Verified Professional Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="p-4 rounded-xl bg-[#fafaf9] border border-stone-200 flex flex-col justify-between hover:border-stone-400 hover:bg-white transition-all shadow-xs"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-800 mb-3 shadow-xs">
                    <Award className="w-4 h-4" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                    {cert.type}
                  </span>

                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug mb-2">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-2.5 border-t border-stone-200 flex items-center gap-1.5 text-xs text-stone-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
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

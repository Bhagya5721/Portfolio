"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Download, MapPin, Mail, Phone, CheckCircle2, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { personal, stats } = portfolioData;

  const quickBadges = [
    "Python",
    "FastAPI",
    "Django",
    "React 18",
    "MySQL / SQL",
    "FAISS Vector Search",
    "SQLAlchemy",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 border-b border-stone-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm text-xs text-stone-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="font-medium text-stone-900">{personal.statusText}</span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-600 flex items-center gap-1 font-mono text-[11px]">
                <MapPin className="w-3 h-3 text-stone-400" />
                {personal.location}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]"
            >
              Building robust web applications, clean APIs, and{" "}
              <span className="underline decoration-stone-300 decoration-2 underline-offset-4">
                vector search systems.
              </span>
            </motion.h1>

            {/* Subheading / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl"
            >
              I&apos;m <strong className="text-stone-900 font-semibold">{personal.name}</strong>, a{" "}
              <span className="text-stone-900 font-medium">{personal.role}</span> with an Electronics &
              Communication Engineering background (8.9 CGPA). I focus on clean object-oriented Python,
              relational MySQL schemas, and fast REST APIs.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                View Selected Projects
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-stone-50 text-stone-800 font-medium text-xs sm:text-sm border border-stone-300 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-stone-600" />
                Resume PDF
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm text-stone-600 hover:text-stone-900 font-medium hover:underline"
              >
                Get in touch →
              </a>
            </motion.div>

            {/* Core Tech Stack Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-1.5"
            >
              <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mr-1">
                Stack:
              </span>
              {quickBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white border border-stone-200 text-stone-700 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Handcrafted Code & Technical Snapshot Card (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="editorial-code rounded-xl overflow-hidden shadow-xl text-xs font-mono text-zinc-300 border border-zinc-800"
            >
              {/* Window Header */}
              <div className="bg-[#202023] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                  <span className="ml-2 text-zinc-400 text-[11px]">semantic_search.py</span>
                </div>
                <span className="text-[10px] text-zinc-500">Python 3.11</span>
              </div>

              {/* Code Snippet */}
              <div className="p-4 space-y-1.5 leading-relaxed overflow-x-auto text-[11px]">
                <div className="text-zinc-500"># Core semantic search pipeline</div>
                <div>
                  <span className="text-rose-400">from</span> sentence_transformers{" "}
                  <span className="text-rose-400">import</span> SentenceTransformer
                </div>
                <div>
                  <span className="text-rose-400">import</span> faiss
                </div>
                <div className="pt-2 text-zinc-500"># Local embedding model (zero API fee)</div>
                <div>
                  model = SentenceTransformer(<span className="text-emerald-300">&quot;all-MiniLM-L6-v2&quot;</span>)
                </div>
                <div>
                  index = faiss.IndexFlatL2(<span className="text-amber-300">384</span>)
                </div>
                <div className="pt-2 text-rose-400">
                  def <span className="text-sky-300">search_knowledge_base</span>(query: str, top_k=<span className="text-amber-300">5</span>):
                </div>
                <div className="pl-4 text-zinc-300">
                  query_vec = model.encode([query])
                </div>
                <div className="pl-4 text-zinc-300">
                  distances, indices = index.search(query_vec, top_k)
                </div>
                <div className="pl-4 text-zinc-400">
                  <span className="text-rose-400">return</span> fetch_records(indices[<span className="text-amber-300">0</span>])
                </div>
              </div>

              {/* Verified Tag Footer */}
              <div className="bg-[#1c1c1f] px-4 py-2 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  FastAPI TestClient Validated
                </span>
                <span className="text-zinc-500">FAISS Index</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-stone-200">
          {stats.map((stat) => (
            <div key={stat.label} className="p-3 bg-white rounded-lg border border-stone-200 text-left">
              <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-stone-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

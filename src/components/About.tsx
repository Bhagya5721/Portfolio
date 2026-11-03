"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Terminal as TerminalIcon,
  Layout,
  Server,
  Cloud,
  Zap,
  Code2,
  CheckCircle2,
  CornerDownLeft,
  Database,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const { personal, services, terminalCommands } = portfolioData;

  const [inputVal, setInputVal] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<
    Array<{ type: "input" | "output"; text: string }>
  >([
    { type: "input", text: "whoami" },
    {
      type: "output",
      text: "Bhagya Udapudi — Python Full Stack Developer & AI Enthusiast (ECE, CGPA: 8.9).",
    },
    { type: "input", text: "skills" },
    {
      type: "output",
      text: "Python, OOP, FastAPI, Django, React 18, SQL, MySQL, FAISS, Sentence-Transformers, Git.",
    },
  ]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setTerminalHistory([]);
      setInputVal("");
      return;
    }

    const found = terminalCommands.find((c) => c.command.toLowerCase() === trimmed);
    const newEntry = [
      ...terminalHistory,
      { type: "input" as const, text: cmd },
      {
        type: "output" as const,
        text: found
          ? found.response
          : `Command not recognized: '${cmd}'. Type 'help' to see available commands.`,
      },
    ];
    setTerminalHistory(newEntry);
    setInputVal("");
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-6 h-6 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case "Database":
        return <Database className="w-6 h-6 text-emerald-400" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-purple-400" />;
      default:
        return <Code2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Professional Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Clean Code & Scalable Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mt-4 text-sm sm:text-base">
            Transitioning strong analytical engineering foundations from Electronics & Communication into high-performing Python Full Stack development.
          </p>
        </div>

        {/* Bio + Interactive Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left: Bio & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-gray-900/60 border border-white/[0.08] backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4">
                Electronics & Communication Graduate to Python Full Stack Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                {personal.bio}
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                With a high-performing academic background (8.9 CGPA in B.E. ECE and 97.2% in SSLC) and hands-on internship experience at Pentagon Space Pvt. Ltd., I focus on building reliable software: from designing relational database schemas with SQLAlchemy and MySQL to creating local AI semantic search pipelines using Sentence-Transformers and FAISS.
              </p>

              {/* Core Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/[0.08]">
                {[
                  "Clean OOP & Modular Python",
                  "Robust REST APIs (FastAPI & Django)",
                  "Relational SQL & Schema Design",
                  "Local Vector Search & FAISS Pipelines",
                  "Secure JWT Auth & Role-Based Access",
                  "Test-Driven Validation (TestClient)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Playground (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#090d16] border border-white/[0.1] shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Header */}
              <div className="bg-[#111827] px-4 py-3 flex items-center justify-between border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>bhagya@portfolio:~</span>
                </div>
                <div className="w-12 text-right text-[10px] text-gray-500">python3</div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 h-64 overflow-y-auto space-y-2.5 text-gray-300">
                <div className="text-gray-500 italic">
                  # Type a command or click a preset below:
                </div>
                {terminalHistory.map((line, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {line.type === "input" ? (
                      <div className="flex items-center gap-1.5 text-indigo-400">
                        <span className="text-cyan-400 font-bold">$</span>
                        <span>{line.text}</span>
                      </div>
                    ) : (
                      <div className="text-gray-300 pl-4 border-l border-indigo-500/30 text-[11px]">
                        {line.text}
                      </div>
                    )}
                  </div>
                ))}

                {/* Prompt Line */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommand(inputVal);
                  }}
                  className="flex items-center gap-1.5 pt-1"
                >
                  <span className="text-cyan-400 font-bold">$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="whoami, skills, education, projects..."
                    className="flex-1 bg-transparent text-white focus:outline-none text-xs"
                  />
                  <button type="submit" aria-label="Run command" className="text-gray-500 hover:text-white">
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Quick Preset Buttons */}
              <div className="bg-[#0b1120] px-3 py-2 border-t border-white/[0.08] flex items-center gap-1.5 overflow-x-auto text-[11px]">
                <span className="text-gray-500 text-[10px]">Quick:</span>
                {["whoami", "skills", "projects", "education", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-white/[0.06] hover:bg-indigo-600 hover:text-white text-gray-400 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars (Services) */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            Core Technical Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-900/50 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-gray-900/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Server,
  Cpu,
  Database,
  Layout,
  Code2,
  CheckCircle2,
  Terminal as TerminalIcon,
  CornerDownLeft,
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
      text: "Bhagya Udapudi — Python Full Stack Developer (ECE, CGPA: 8.9).",
    },
    { type: "input", text: "skills" },
    {
      type: "output",
      text: "Python, FastAPI, Django, React 18, SQL, MySQL, FAISS, Sentence-Transformers, Git.",
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
        return <Server className="w-5 h-5 text-stone-800" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-stone-800" />;
      case "Database":
        return <Database className="w-5 h-5 text-stone-800" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-stone-800" />;
      default:
        return <Code2 className="w-5 h-5 text-stone-800" />;
    }
  };

  return (
    <section id="about" className="py-20 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono uppercase tracking-wider mb-2">
            01 / Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Background & Engineering Principles
          </h2>
          <p className="text-stone-600 max-w-2xl mt-2 text-sm sm:text-base">
            Transitioning strong analytical engineering foundations from Electronics & Communication into scalable Python Full Stack software development.
          </p>
        </div>

        {/* Bio + Minimal Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="editorial-card p-6 sm:p-7 rounded-xl">
              <h3 className="text-lg font-bold text-stone-900 mb-3">
                Full-Stack Python Engineer with an ECE Foundation
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm mb-4">
                {personal.bio}
              </p>
              <p className="text-stone-600 leading-relaxed text-sm">
                With a consistent track record of academic excellence (8.9 CGPA in B.E. ECE and 97.2% in SSLC) paired with internship experience at Pentagon Space Pvt. Ltd., I focus on building reliable software: from designing relational database schemas with SQLAlchemy and MySQL to creating local AI semantic search pipelines using Sentence-Transformers and FAISS.
              </p>

              {/* Core Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 pt-5 border-t border-stone-100">
                {[
                  "Clean OOP & Modular Python",
                  "Robust REST APIs (FastAPI & Django)",
                  "Relational SQL & Schema Design",
                  "Local Vector Search & FAISS Pipelines",
                  "Secure JWT Auth & Role-Based Access",
                  "Test-Driven Validation (TestClient)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Clean In-Browser Shell (5 cols) */}
          <div className="lg:col-span-5">
            <div className="editorial-card rounded-xl overflow-hidden font-mono text-xs shadow-sm">
              {/* Terminal Header */}
              <div className="bg-stone-100 px-4 py-2.5 flex items-center justify-between border-b border-stone-200">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300 inline-block" />
                  <span className="ml-2 text-stone-600 text-[11px]">bhagya@console:~</span>
                </div>
                <span className="text-[10px] text-stone-400">interactive</span>
              </div>

              {/* Terminal Body */}
              <div className="p-4 h-60 overflow-y-auto space-y-2 text-stone-700 bg-white">
                <div className="text-stone-400 italic text-[11px]">
                  # Type a command (e.g. whoami, skills, projects, education):
                </div>
                {terminalHistory.map((line, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {line.type === "input" ? (
                      <div className="flex items-center gap-1.5 text-stone-900 font-semibold">
                        <span className="text-stone-400 font-bold">$</span>
                        <span>{line.text}</span>
                      </div>
                    ) : (
                      <div className="text-stone-600 pl-3.5 border-l-2 border-stone-200 text-[11px]">
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
                  <span className="text-stone-400 font-bold">$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="help, whoami, skills..."
                    className="flex-1 bg-transparent text-stone-900 focus:outline-none text-xs"
                  />
                  <button type="submit" aria-label="Run command" className="text-stone-400 hover:text-stone-800">
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Quick Preset Buttons */}
              <div className="bg-stone-50 px-3 py-2 border-t border-stone-200 flex items-center gap-1.5 overflow-x-auto text-[11px]">
                <span className="text-stone-400 text-[10px]">Quick:</span>
                {["whoami", "skills", "projects", "education", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-white hover:bg-stone-900 hover:text-white text-stone-600 border border-stone-200 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Technical Capabilities */}
        <div>
          <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-900" />
            Core Technical Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="editorial-card p-5 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center mb-3.5">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1.5">
                    {service.title}
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
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

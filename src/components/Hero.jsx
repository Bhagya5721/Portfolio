import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Send,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
  PythonIcon,
} from "@/components/Icons.jsx";

export default function Hero() {
  const { isDark } = useTheme();
  const personal = portfolioData?.personal || {};

  // Cycling titles: Python Full Stack Developer, Django Developer, Problem Solver
  const titles = personal.titles?.length
    ? personal.titles
    : ["Python Full Stack Developer", "Django Developer", "Problem Solver"];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = titles[currentTitleIndex] || "";

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          // Pause at full word
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(75);
        }
      } else {
        // Deleting backward
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(350);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[550px] rounded-full blur-3xl opacity-35 ${
            isDark
              ? "bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-700"
              : "bg-gradient-to-tr from-sky-200 via-indigo-200 to-purple-200 opacity-60"
          }`}
        />
        <div
          className={`absolute top-1/2 -left-32 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-blue-500" : "bg-sky-300"
          }`}
        />
        <div
          className={`absolute bottom-10 -right-32 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-purple-600" : "bg-violet-300"
          }`}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-8 border backdrop-blur-md shadow-sm transition-colors duration-200"
          style={{
            backgroundColor: isDark ? "rgba(30, 41, 59, 0.7)" : "rgba(241, 245, 249, 0.9)",
            borderColor: isDark ? "rgba(51, 65, 85, 0.8)" : "rgba(203, 213, 225, 0.8)",
            color: isDark ? "#93c5fd" : "#1d4ed8",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personal.statusText || "Available for Full-Time Roles in Bengaluru"}</span>
        </motion.div>

        {/* Big Heading "Hi, I'm Bhagya" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
            <span className={isDark ? "text-slate-100" : "text-slate-900"}>
              Hi, I'm{" "}
            </span>
            <span className={isDark ? "gradient-text" : "gradient-text-light"}>
              Bhagya
            </span>
          </h1>
        </motion.div>

        {/* Typing Animation Cycling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 sm:h-14 flex items-center justify-center mb-6"
        >
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-mono font-semibold tracking-tight">
            <span className={isDark ? "text-slate-300" : "text-slate-700"}>
              I build as a{" "}
            </span>
            <span className="text-blue-500 border-b-2 border-blue-500 pb-0.5">
              {currentText}
            </span>
            <span className="animate-pulse text-indigo-500 font-bold ml-0.5">
              |
            </span>
          </h2>
        </motion.div>

        {/* Short intro line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {personal.tagline ||
            "Passionate Electronics and Communication Engineering graduate transitioning into Python Full Stack Development. Experienced in building clean OOP backends with Django and FastAPI, SQL databases, and responsive modern frontends."}
        </motion.p>

        {/* Action Buttons: View Projects, Download Resume, Contact Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-12"
        >
          {/* View Projects */}
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 inline-flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Download Resume */}
          <a
            href={personal.resumeUrl || "/Bhagya_Udapudi_Resume.pdf"}
            download="Bhagya_Udapudi_Resume.pdf"
            className={`px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-95 ${
              isDark
                ? "bg-slate-800/80 hover:bg-slate-700/90 text-slate-100 border-slate-700 shadow-md shadow-black/20"
                : "bg-white/90 hover:bg-slate-100 text-slate-800 border-slate-200 shadow-md shadow-slate-200/50"
            }`}
          >
            <Download className="w-4 h-4 text-blue-500" />
            <span>Download Resume</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className={`px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-95 ${
              isDark
                ? "bg-slate-900/60 hover:bg-slate-800/80 text-blue-400 border-blue-500/30"
                : "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-3 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                isDark
                  ? "bg-slate-900/80 text-slate-300 hover:text-white border-slate-800 hover:border-slate-600"
                  : "bg-white text-slate-700 hover:text-black border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}

          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`p-3 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                isDark
                  ? "bg-slate-900/80 text-slate-300 hover:text-blue-400 border-slate-800 hover:border-blue-500/50"
                  : "bg-white text-slate-700 hover:text-blue-600 border-slate-200 hover:border-blue-300 shadow-sm"
              }`}
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}

          {personal.whatsappUrl && (
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className={`p-3 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                isDark
                  ? "bg-slate-900/80 text-emerald-400 border-slate-800 hover:border-emerald-500/50"
                  : "bg-white text-emerald-600 border-slate-200 hover:border-emerald-300 shadow-sm"
              }`}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          )}

          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email Bhagya"
              className={`p-3 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                isDark
                  ? "bg-slate-900/80 text-slate-300 hover:text-blue-400 border-slate-800 hover:border-blue-500/50"
                  : "bg-white text-slate-700 hover:text-blue-600 border-slate-200 hover:border-blue-300 shadow-sm"
              }`}
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}

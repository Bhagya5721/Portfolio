import React from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import { ArrowDown, Download, Mail, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons.jsx";

export default function Hero() {
  const { isDark } = useTheme();
  const personal = portfolioData?.personal || {};

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Status Pill - static, clean, no ping/movement */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 border transition-colors duration-150"
          style={{
            backgroundColor: isDark
              ? "rgba(30, 41, 59, 0.7)"
              : "rgba(241, 245, 249, 0.95)",
            borderColor: isDark
              ? "rgba(51, 65, 85, 0.8)"
              : "rgba(203, 213, 225, 0.8)",
            color: isDark ? "#93c5fd" : "#1d4fd88d",
          }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>
            {personal.statusText ||
              "Available for Full-Time Roles in Bengaluru"}
          </span>
        </div>

        {/* Big Heading "Hi, I'm Bhagya" - static and bold */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          <span className={isDark ? "text-slate-100" : "text-slate-900"}>
            Hi, I'm{" "}
          </span>
          <span className={isDark ? "text-sky-300" : "text-sky-500"}>
            Bhagya
          </span>
        </h1>

        {/* Static, confident subtitle - NO typewriter jitter or cursor movement */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-blue-500">
            Python Full Stack Developer
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs sm:text-sm font-medium">
            <span
              className={`px-3 py-1 rounded-md border ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 text-slate-300"
                  : "bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              Python & Django
            </span>
            <span
              className={`px-3 py-1 rounded-md border ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 text-slate-300"
                  : "bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              SQL & Databases
            </span>
            <span
              className={`px-3 py-1 rounded-md border ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 text-slate-300"
                  : "bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              REST APIs & FastAPI
            </span>
            <span
              className={`px-3 py-1 rounded-md border ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 text-slate-300"
                  : "bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              AI Vector Search
            </span>
          </div>
        </div>

        {/* Short intro line */}
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {personal.tagline ||
            "Passionate Electronics and Communication Engineering graduate transitioning into Python Full Stack Development. Experienced in building end-to-end web applications with clean OOP, robust REST APIs, SQL databases, and modern responsive frontends."}
        </p>

        {/* Action Buttons: View Projects, Download Resume, Contact Me - clean, solid, no hover jump */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {/* View Projects */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors duration-150 inline-flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Download Resume */}
          <a
            href={personal.resumeUrl || "/Bhagya_Udapudi_Resume.pdf"}
            download="Bhagya_Udapudi_Resume.pdf"
            className={`px-6 py-3 rounded-xl font-semibold text-sm sm:text-base border transition-colors duration-150 inline-flex items-center gap-2 ${
              isDark
                ? "bg-slate-900 hover:bg-slate-800 text-slate-100 border-slate-700"
                : "bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm"
            }`}
          >
            <Download className="w-4 h-4 text-blue-500" />
            <span>Download Resume</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className={`px-6 py-3 rounded-xl font-semibold text-sm sm:text-base border transition-colors duration-150 inline-flex items-center gap-2 ${
              isDark
                ? "bg-slate-900 hover:bg-slate-800 text-blue-400 border-blue-500/40"
                : "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Icons - clean, no hover translation */}
        <div className="flex items-center justify-center gap-3">
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-2.5 rounded-xl border transition-colors duration-150 ${
                isDark
                  ? "bg-slate-900 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700"
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
              className={`p-2.5 rounded-xl border transition-colors duration-150 ${
                isDark
                  ? "bg-slate-900 text-slate-300 hover:text-blue-400 border-slate-800 hover:border-slate-700"
                  : "bg-white text-slate-700 hover:text-blue-600 border-slate-200 hover:border-slate-300 shadow-sm"
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
              className={`p-2.5 rounded-xl border transition-colors duration-150 ${
                isDark
                  ? "bg-slate-900 text-emerald-400 border-slate-800 hover:border-slate-700"
                  : "bg-white text-emerald-600 border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          )}

          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email Bhagya"
              className={`p-2.5 rounded-xl border transition-colors duration-150 ${
                isDark
                  ? "bg-slate-900 text-slate-300 hover:text-blue-400 border-slate-800 hover:border-slate-700"
                  : "bg-white text-slate-700 hover:text-blue-600 border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

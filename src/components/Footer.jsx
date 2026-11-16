import React from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import { ArrowUp, Heart } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/Icons.jsx";

export default function Footer() {
  const { isDark } = useTheme();
  const personal = portfolioData?.personal || {};
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200 ${
        isDark
          ? "bg-slate-950 border-slate-800/80 text-slate-400"
          : "bg-slate-50 border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand / Name & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md shadow-indigo-500/20">
            BU
          </div>
          <div>
            <p className={`text-sm font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
              {personal.name || "Bhagya Udapudi"}
            </p>
            <p className="text-xs opacity-80">
              © {currentYear} • Python Full Stack Developer • Bengaluru, India
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-lg transition-colors ${
                isDark ? "hover:text-white hover:bg-slate-900" : "hover:text-black hover:bg-slate-200"
              }`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2 rounded-lg transition-colors ${
                isDark ? "hover:text-blue-400 hover:bg-slate-900" : "hover:text-blue-600 hover:bg-slate-200"
              }`}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}

          {personal.whatsappUrl && (
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`p-2 rounded-lg transition-colors ${
                isDark ? "hover:text-emerald-400 hover:bg-slate-900" : "hover:text-emerald-600 hover:bg-slate-200"
              }`}
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          )}

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              isDark
                ? "bg-slate-900 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700"
                : "bg-white text-slate-700 hover:text-black border-slate-200 hover:border-slate-300 shadow-sm"
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

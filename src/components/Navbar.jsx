import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-100/50"
          : isDark
          ? "bg-slate-950/40 backdrop-blur-sm border-b border-transparent"
          : "bg-white/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Initials */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-mono font-bold text-base shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              BU
            </div>
            <div className="flex flex-col">
              <span className={`font-semibold text-base sm:text-lg tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {portfolioData?.personal?.name || "Bhagya Udapudi"}
              </span>
              <span className="text-xs text-blue-500 font-medium">
                Python Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "text-blue-400 bg-slate-800/80 shadow-inner"
                        : "text-blue-600 bg-blue-50 shadow-sm"
                      : isDark
                      ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className={`p-2 rounded-xl transition-all duration-200 focus:outline-none ${
                isDark
                  ? "bg-slate-800/80 text-yellow-400 hover:bg-slate-700/80 border border-slate-700/60"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            {/* Resume button quick link */}
            <a
              href={portfolioData?.personal?.resumeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20 hover:from-blue-500 hover:to-indigo-500 hover:shadow-indigo-600/30 transition-all duration-200 active:scale-95"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-slate-800 text-yellow-400"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className={`p-2 rounded-lg ${
                isDark ? "text-slate-300 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 border-b transition-all ${
            isDark
              ? "bg-slate-950/95 border-slate-800 text-slate-200 backdrop-blur-xl"
              : "bg-white/95 border-slate-200 text-slate-800 backdrop-blur-xl shadow-lg"
          }`}
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? isDark
                        ? "bg-slate-800 text-blue-400 font-semibold"
                        : "bg-blue-50 text-blue-600 font-semibold"
                      : isDark
                      ? "hover:bg-slate-900"
                      : "hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between">
              <a
                href={portfolioData?.personal?.resumeUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

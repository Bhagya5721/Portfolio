"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "skills", "experience", "education", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
      else if (window.scrollY < 300) setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf9]/90 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-stone-900 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center font-mono font-bold text-xs tracking-tight shadow-sm group-hover:bg-stone-800 transition-colors">
            BU
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-900 text-sm tracking-tight">
              {portfolioData.personal.name}
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
              Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-white border border-stone-200 rounded-full px-2.5 py-1 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? "text-stone-900 bg-stone-100 font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Social */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 border border-stone-300 transition-colors shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-stone-600" />
            Resume PDF
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white border-b border-stone-200 shadow-lg space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-300 inline-flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-stone-900 text-white"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

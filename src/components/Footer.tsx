"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-stone-200 bg-white py-8 text-xs text-stone-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
          <span className="font-semibold text-stone-900">
            © {currentYear} {personal.name}
          </span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="text-stone-500">Python Full Stack Developer</span>
        </div>

        {/* Center: Note */}
        <div className="text-stone-400 font-mono text-[11px]">
          Bangalore, India
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-2">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors border border-stone-200"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

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
    <footer className="border-t border-white/[0.08] bg-[#02050e] py-12 text-xs text-gray-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-gray-300">
            © {currentYear} {personal.name}.
          </span>
          <span className="hidden sm:inline text-gray-700">•</span>
          <span>All rights reserved.</span>
        </div>

        {/* Center: Tech Stack note */}
        <div className="flex items-center gap-1.5 text-gray-400">
          <span>Engineered with Next.js & Tailwind CSS</span>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 border border-indigo-500/30"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { useTheme } from "@/context/ThemeContext.jsx";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Skills from "@/components/Skills.jsx";
import Projects from "@/components/Projects.jsx";
import Experience from "@/components/Experience.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";

export default function App() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-blue-500 selection:text-white ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* 1. Navbar: sticky, logo/initials, links, dark/light toggle, mobile menu */}
      <Navbar />

      <main>
        {/* 2. Hero: big heading, typing animation, buttons, social icons */}
        <Hero />

        {/* 3. About: short bio, profile photo placeholder, key facts */}
        <About />

        {/* 4. Skills: grouped cards with icons and animated progress bars */}
        <Skills />

        {/* 5. Projects: project cards with tech tags, buttons, filter tabs */}
        <Projects />

        {/* 6. Experience: vertical timeline with Pentagon Space internship and education */}
        <Experience />

        {/* 7. Contact: form, links, WhatsApp/mail buttons */}
        <Contact />
      </main>

      {/* 8. Footer: copyright and social links */}
      <Footer />
    </div>
  );
}

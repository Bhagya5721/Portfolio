"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Send,
  Copy,
  Check,
  Phone,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export default function Contact() {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-gray-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect & Discuss Opportunities
          </h2>
          <p className="text-gray-400 max-w-xl mt-4 text-sm sm:text-base">
            Seeking a Python Full Stack Developer role. Feel free to connect for job opportunities, collaborations, or technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-gray-900/60 border border-white/[0.08] backdrop-blur-md space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5">Direct Contact</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Reach out directly via email, phone, or professional networks.
                </p>
              </div>

              {/* Email Card with 1-click copy */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-gray-500 uppercase font-mono">Email Address</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-indigo-300 truncate font-mono block transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <Check className="w-4 h-4" />
                      Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card with 1-click copy / call */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-gray-500 uppercase font-mono">Phone Number</div>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 truncate font-mono block transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <Check className="w-4 h-4" />
                      Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-mono">Location</div>
                  <div className="text-xs sm:text-sm font-medium text-white">{personal.location}</div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
                <span className="relative flex h-2.5 w-2.5 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-emerald-300">Target Role</div>
                  <div className="text-xs text-gray-400 mt-0.5">{personal.availability}</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-gray-500 uppercase mb-3">Professional Profiles</div>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-gray-300 hover:text-white border border-white/[0.08] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-gray-300 hover:text-white border border-white/[0.08] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-gray-900/60 border border-white/[0.08] backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Fill out the form below and I&apos;ll get back to you promptly.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will reply as soon as possible!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Recruiter / Collaborator Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Python Full Stack Developer Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Bhagya, we reviewed your projects and would love to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

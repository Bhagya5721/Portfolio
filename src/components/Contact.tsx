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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono uppercase tracking-wider mb-2">
            06 / Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Let&apos;s Connect & Discuss Opportunities
          </h2>
          <p className="text-stone-600 max-w-xl mt-1 text-sm">
            Actively seeking a Python Full Stack Developer role in Bangalore. Feel free to connect for job opportunities or technical conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="editorial-card p-6 rounded-xl space-y-4">
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-1">Direct Contact Details</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Fastest way to reach me directly for engineering opportunities.
                </p>
              </div>

              {/* Email Card with 1-click copy */}
              <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 flex-shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-stone-400 uppercase font-mono">Email Address</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-medium text-stone-900 hover:underline truncate font-mono block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Card with 1-click copy / call */}
              <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 flex-shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-stone-400 uppercase font-mono">Phone Number</div>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-xs sm:text-sm font-medium text-stone-900 hover:underline truncate font-mono block"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-md bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200 transition-colors flex-shrink-0"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 flex-shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-stone-400 uppercase font-mono">Current & Target Location</div>
                  <div className="text-xs sm:text-sm font-medium text-stone-900">{personal.location}</div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-start gap-2.5">
                <span className="relative flex h-2 w-2 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-emerald-900">Current Availability</div>
                  <div className="text-xs text-emerald-800 mt-0.5">{personal.availability}</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-stone-200">
                <div className="text-[10px] font-mono text-stone-400 uppercase mb-2">Professional Profiles</div>
                <div className="flex items-center gap-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-stone-50 text-xs font-medium text-stone-700 border border-stone-200 transition-colors shadow-xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-stone-50 text-xs font-medium text-stone-700 border border-stone-200 transition-colors shadow-xs"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-6 sm:p-7 rounded-xl">
              <h3 className="text-base font-bold text-stone-900 mb-1">Send a Direct Message</h3>
              <p className="text-xs text-stone-500 mb-5">
                Fill out the brief note below and I&apos;ll get back to you promptly.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-lg bg-stone-50 border border-stone-200 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900">Message Transmitted!</h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will reply as soon as possible!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-stone-900 underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-stone-700 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Recruiter / Collaborator Name"
                        className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-stone-800 transition-colors placeholder:text-stone-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-stone-700 mb-1">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-stone-800 transition-colors placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-stone-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Python Full Stack Developer Opportunity"
                      className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-stone-800 transition-colors placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-stone-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Bhagya, we reviewed your projects and would love to discuss..."
                      className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-stone-800 transition-colors placeholder:text-stone-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5 text-stone-300" />
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

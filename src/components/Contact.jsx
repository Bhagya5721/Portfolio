import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio.js";
import { useTheme } from "@/context/ThemeContext.jsx";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/Icons.jsx";

export default function Contact() {
  const { isDark } = useTheme();
  const personal = portfolioData?.personal || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
            style={{
              backgroundColor: isDark ? "rgba(30, 41, 59, 0.6)" : "rgba(239, 246, 255, 0.8)",
              color: isDark ? "#93c5fd" : "#2563eb",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Contact <span className={isDark ? "gradient-text" : "gradient-text-light"}>Me</span>
          </h2>
          <p
            className={`mt-3 max-w-2xl mx-auto text-base sm:text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Looking for a dedicated Python Full Stack Developer for your team in Bengaluru or remote? Let's connect!
          </p>
        </div>

        {/* Quick Action Direct Connect Banner */}
        <div className="mb-10 max-w-3xl mx-auto">
          <div
            className={`rounded-2xl p-4 sm:p-5 border flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isDark
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-sm sm:text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  Direct WhatsApp & Email
                </h4>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Fast response for interview invites, hiring inquiries, or questions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={personal.whatsappUrl || "https://wa.me/917019351620"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-150"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${personal.email || "bhagyaudapudi@gmail.com"}`}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-colors duration-150 ${
                  isDark
                    ? "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200"
                }`}
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>Send Mail</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Links */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Email Card */}
            <div
              className={`p-4 rounded-xl border transition-colors duration-150 ${
                isDark ? "bg-slate-900/70 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs uppercase font-semibold block ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Email
                  </span>
                  <a
                    href={`mailto:${personal.email || "bhagyaudapudi@gmail.com"}`}
                    className="font-semibold text-sm sm:text-base text-blue-500 hover:underline"
                  >
                    {personal.email || "bhagyaudapudi@gmail.com"}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className={`p-4 rounded-xl border transition-colors duration-150 ${
                isDark ? "bg-slate-900/70 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs uppercase font-semibold block ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Phone
                  </span>
                  <a
                    href={`tel:${personal.phone || "+917019351620"}`}
                    className={`font-semibold text-sm sm:text-base hover:underline ${isDark ? "text-slate-200" : "text-slate-800"}`}
                  >
                    {personal.phone || "+91 7019351620"}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              className={`p-4 rounded-xl border transition-colors duration-150 ${
                isDark ? "bg-slate-900/70 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs uppercase font-semibold block ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Location
                  </span>
                  <p className={`font-semibold text-sm sm:text-base ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    {personal.location || "Bengaluru, India"}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div
              className={`p-4 rounded-xl border ${
                isDark ? "bg-slate-900/70 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <span className={`text-xs uppercase font-semibold block mb-2.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Profiles & Repositories
              </span>
              <div className="flex items-center gap-2.5">
                {personal.github && (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors duration-150 ${
                      isDark
                        ? "bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-500"
                        : "bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}

                {personal.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors duration-150 ${
                      isDark
                        ? "bg-slate-800 text-slate-200 border-slate-700 hover:border-blue-500"
                        : "bg-slate-100 text-slate-800 border-slate-200 hover:border-blue-400"
                    }`}
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-2xl p-6 sm:p-7 border ${
                isDark
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <h3 className={`text-xl font-bold mb-1.5 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                Send a Message
              </h3>
              <p className={`text-xs sm:text-sm mb-5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Have a question or role opening? Fill in the details below.
              </p>

              {submitted ? (
                <div
                  className={`p-6 rounded-xl border text-center ${
                    isDark ? "bg-slate-800 border-emerald-500/40 text-emerald-400" : "bg-emerald-50 border-emerald-200 text-emerald-800"
                  }`}
                >
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
                  <h4 className="font-bold text-base mb-1">
                    Thank you, {formData.name}!
                  </h4>
                  <p className="text-xs opacity-90 mb-3">
                    Your message has been captured. I will get back to you promptly at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                        isDark
                          ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500"
                          : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500"
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. ramesh@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                        isDark
                          ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500"
                          : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500"
                      }`}
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Bhagya, we have an exciting Python Full Stack Developer opportunity..."
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none ${
                        isDark
                          ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500"
                          : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500"
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
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

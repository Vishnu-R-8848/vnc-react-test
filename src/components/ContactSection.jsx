import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Copy, Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const channels = [
  {
    id: "email",
    name: "Email",
    domain: "mailto",
    handle: "vishnu6364748848@gmail.com",
    icon: Mail,
    url: "mailto:vishnu6364748848@gmail.com",
    copyValue: "vishnu6364748848@gmail.com",
  },
  {
    id: "github",
    name: "GitHub",
    domain: "github.com",
    handle: "Vishnu-R-8848",
    icon: GithubIcon,
    url: "https://github.com/Vishnu-R-8848",
    copyValue: "https://github.com/Vishnu-R-8848",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    domain: "linkedin.com/in",
    handle: "vishnu-naik-chouhan",
    icon: LinkedinIcon,
    url: "https://linkedin.com/in/vishnu-naik-chouhan",
    copyValue: "https://linkedin.com/in/vishnu-naik-chouhan",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    domain: "x.com",
    handle: "vnc_xt",
    icon: TwitterIcon,
    url: "https://x.com/vnc_xt",
    copyValue: "https://x.com/vnc_xt",
  },
];

export function ContactSection() {
  const [activeChannel, setActiveChannel] = useState(channels[0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copied, setCopied] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyChannel = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(activeChannel.copyValue);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 3500);
    }, 800);
  };

  return (
    <section id="contact" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 font-sans select-none">
      {/* Clean Header */}
      <div className="flex flex-col items-start gap-2 mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">
          // 05.00 CONTACT
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
          Open for full-stack engineering roles and client projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Address & Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Interactive Address Display (Click to Copy Active Channel) */}
          <div
            onClick={handleCopyChannel}
            title="Click to copy"
            className="group cursor-pointer rounded-2xl bg-[#0e0e11] border border-neutral-800 p-5 hover:border-neutral-700 hover:bg-[#141418] transition-all space-y-2 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                Selected Channel ({activeChannel.name})
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-md">
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </span>
            </div>

            <div className="font-mono text-sm sm:text-base font-bold text-white truncate group-hover:text-neutral-200">
              <span className="text-neutral-500 mr-1 font-normal">@</span>
              <span className="text-neutral-400">{activeChannel.domain}/</span>
              <span className="text-white ml-0.5">{activeChannel.handle}</span>
            </div>
          </div>

          {/* Social Channel Selector (Dual-Pill Spring Transition) */}
          <div
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative flex items-center justify-between p-1.5 rounded-2xl border border-neutral-800 bg-[#0e0e11] shadow-lg"
          >
            {channels.map((channel, idx) => {
              const Icon = channel.icon;
              const isActive = activeChannel.id === channel.id;

              return (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`relative flex-1 flex items-center justify-center py-2.5 rounded-xl cursor-pointer transition-colors duration-200 z-10 ${
                    isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <Icon className="w-4 h-4 relative z-10" />

                  {/* Active Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="contact-active-pill"
                      className="absolute inset-0 bg-[#222226] rounded-xl border border-neutral-700/80 shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}

                  {/* Hover Pill Indicator */}
                  {hoveredIndex === idx && !isActive && (
                    <motion.div
                      layoutId="contact-hover-pill"
                      className="absolute inset-0 bg-neutral-800/60 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Direct External Link Out */}
          <a
            href={activeChannel.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#0e0e11] border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all text-xs font-mono"
          >
            <span>Open {activeChannel.name} Profile</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-500" />
          </a>
        </div>

        {/* Right Column: Clean Contact Form */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0e0e11] border border-neutral-800 p-6 sm:p-7 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 text-xs sm:text-sm font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 text-xs sm:text-sm font-sans"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="What are you building or looking for?"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 text-xs sm:text-sm font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting || submitted}
              className={cn(
                "w-full py-3 px-5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer",
                submitted
                  ? "bg-emerald-500 text-black border border-emerald-400"
                  : "bg-white text-black hover:bg-neutral-200 active:scale-[0.99]"
              )}
            >
              {submitting ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : submitted ? (
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Message Sent!
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
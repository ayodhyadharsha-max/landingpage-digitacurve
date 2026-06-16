"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onWebsiteSubmit: (url: string) => void;
}

export default function Hero({ onWebsiteSubmit }: HeroProps) {
  const [websiteUrl, setWebsiteUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onWebsiteSubmit(websiteUrl.trim());
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950 bg-grid-pattern">
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-900/10 border border-white/[0.01] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Avatar Trust Pile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 text-xs font-semibold mb-8 backdrop-blur-sm"
        >
          <div className="flex -space-x-2">
            <img src="/representative2.png" alt="Rishabh Jaiswal" className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 object-cover z-30" />
            <img src="/representative1.png" alt="Vivek Singh" className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 object-cover z-20" />
            <img src="/representative3.png" alt="Khushi" className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 object-cover z-10" />
            <span className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-orange-500 text-[9px] font-black flex items-center justify-center text-slate-950 z-0">50+</span>
          </div>
          <span className="text-[11px] font-medium tracking-wide">Over 50+ high-growth brands scaled to date</span>
        </motion.div>

        {/* H1 Heading - High impact value proposition */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans max-w-4xl"
        >
          Digitacurve scales your <br className="hidden sm:inline" />
          customer acquisition{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-blue-400 glow-orange">
            autonomously
          </span>
        </motion.h1>

        {/* Sub-copy incorporating key services */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
        >
          Unlock high-value leads from Google, Paid Ads, and AI Search with a custom-engineered conversion engine.
        </motion.p>

        {/* Website URL input container (Pill layout) */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="mt-10 w-full max-w-lg p-1.5 rounded-full bg-slate-900/70 border border-white/10 flex items-center justify-between shadow-2xl focus-within:border-orange-500/40 transition-all duration-300 group"
        >
          <input
            type="text"
            required
            placeholder="Enter your website URL (e.g. www.yoursite.com)"
            className="w-full px-5 py-3 rounded-full bg-transparent text-white placeholder-slate-500 outline-none text-xs sm:text-sm font-sans"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
          <button
            type="submit"
            className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-orange-600 transition-all active:scale-95 whitespace-nowrap cursor-pointer mr-0.5 btn-pulse-shimmer shadow-lg"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-1.5 text-slate-950" />
          </button>
        </motion.form>

        {/* Google Reviews Badge */}
        <motion.a
          href="https://share.google/IszwEKC0pok3prxtr"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-white/5 hover:border-orange-500/20 hover:bg-slate-900 transition-all duration-300 active:scale-95 group text-[11px] font-semibold"
        >
          <div className="flex items-center gap-0.5 text-orange-500">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <span className="text-slate-400 group-hover:text-white transition-colors">4.9/5 Rating on Google Reviews</span>
        </motion.a>

      </div>
    </section>
  );
}

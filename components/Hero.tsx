"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import AuditForm from "./AuditForm";

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("hero-audit-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950 bg-grid-pattern">
      {/* Background Neon Glowing Orbs - Simplified blur sizes for mobile-first Performance optimizations */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-slate-900/20 border border-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <BadgeCheck className="w-4 h-4 text-orange-500" />
              <span>Full-Suite Digital Growth Agency</span>
            </motion.div>

            {/* H1 Heading - High impact value proposition */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans"
            >
              Accelerate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-blue-400 glow-orange">
                Digital Presence
              </span>
            </motion.h1>

            {/* Sub-copy incorporating key services */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Stop wasting time and money on templated solutions. Digitacurve engineers high-performance custom websites, advanced SEO (including AEO, LLMSEO, and GEO), high-ROI paid ad funnels (Google & Meta), and organic social media growth.
            </motion.p>

            {/* Value Proposition Bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 w-full max-w-lg text-left"
            >
              {[
                "Custom Next.js Speed (<1s)",
                "Advanced AI-Ready SEO",
                "ROI-Driven Paid Ads (Google/Meta)",
                "Organic Social Media Growth",
                "No Lock-In Contracts"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-200 text-xs sm:text-sm font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* High-Converting CTA Area */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
            >
              {/* Primary Form Scroll Button */}
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 active:scale-95 group"
              >
                Get Free Audit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Secondary WhatsApp Button */}
              <a
                href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I'm%20inquiring%20about%20your%20Digital%20Growth%20services%20%28Web%2C%20SEO%2C%20PPC%2C%20Social%20Media%29.%20I'd%20like%20to%20get%20more%20details%20about%20your%20free%20strategy%20audit."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 hover:bg-emerald-950/50 hover:border-emerald-500/40 transition-all active:scale-95 gap-2"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 text-emerald-400">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>WhatsApp Inquiry</span>
              </a>
            </motion.div>

          </div>

          {/* Right Lead Intake Form Column (Mounted Above the Fold) */}
          <div id="hero-audit-form" className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full"
            >
              <AuditForm compact={true} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

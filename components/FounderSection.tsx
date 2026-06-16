"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export default function FounderSection() {
  const scrollToForm = () => {
    const element = document.getElementById("audit-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="founder-section" className="relative py-20 bg-slate-900 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Top accent glow line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-emerald-500 to-blue-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Founder Professional Headshot */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative group">
                {/* Glowing rings behind the portrait */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-orange-500 to-emerald-500 opacity-30 blur-md group-hover:opacity-50 transition duration-300" />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                  <img
                    src="/rishabh.png"
                    alt="Rishabh Jaiswal - Founder & Lead Growth Engineer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="text-center mt-5">
                <h4 className="text-lg font-bold text-white tracking-tight">Rishabh Jaiswal</h4>
                <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mt-0.5">Founder & Lead Growth Engineer</p>
              </div>
            </div>

            {/* Right: Personal Message & Trust Factors */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Direct Founder Advisory
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                "We don't sell cookie-cutter templates. <br />
                We engineer custom pipelines that convert."
              </h3>

              <p className="mt-5 text-slate-350 text-sm sm:text-base leading-relaxed">
                I founded Digitacurve because I was tired of seeing businesses waste up to 40% of their digital budgets on slow WordPress setups and hands-off, set-and-forget agencies. When you request a strategy audit from us, I don't hand it off to a salesperson. 
              </p>

              <p className="mt-4 text-slate-350 text-sm sm:text-base leading-relaxed">
                I personally crawl your website code, analyze your search competitors, map out your AI search visibility (SEO/GEO), and inspect your ad campaigns. You get a direct, conversion-focused blueprint built for your brand's bottom line.
              </p>

              {/* Highlight Bullets */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-b border-white/5 py-5 my-2">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 text-xs sm:text-sm font-semibold">Founder-Led Audits & Roadmaps</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 text-xs sm:text-sm font-semibold">100% Zero sales pressure</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToForm}
                className="mt-6 inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-md shadow-orange-500/15 active:scale-95 group cursor-pointer btn-pulse-shimmer"
              >
                Claim Your Audit with Rishabh
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

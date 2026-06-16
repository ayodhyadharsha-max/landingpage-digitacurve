"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function FounderSection() {
  const scrollToForm = () => {
    const element = document.getElementById("audit-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const representatives = [
    {
      name: "Rishabh Jaiswal",
      title: "Lead Web & SEO Growth Engineer",
      image: "/representative2.png",
      bio: "Custom Next.js developer and Core Web Vitals expert. Rishabh specializes in building high-speed conversion architectures and advanced AI search engine optimization (AEO/GEO).",
      highlights: [
        "100/100 Mobile Speed specialist",
        "AI Search (AEO, LLMSEO) strategist",
        "Personally audits site code & search index"
      ]
    },
    {
      name: "Vivek Singh",
      title: "Senior Ads & PPC Campaign Strategist",
      image: "/representative1.png",
      bio: "Paid search expert with years of experience managing high-performance Google & Meta ad campaigns. Vivek specializes in bid optimization and eliminating wasted ad spend.",
      highlights: [
        "Google & Meta Ads Certified",
        "Recovered $1M+ in wasted agency budgets",
        "Personally plans search terms & negatives"
      ]
    }
  ];

  return (
    <section id="founder-section" className="relative py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Growth Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Meet Your Lead Strategy Representatives
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            We don't hand your project off to pushy sales reps or junior account interns. You work directly with experienced growth engineers who audit, build, and optimize your campaigns.
          </p>
        </div>

        {/* Representatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {representatives.map((rep, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-orange-500/20 transition-all duration-300 relative group">
              {/* Highlight line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
              
              <div>
                {/* Photo & Identity Row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 opacity-0 group-hover:opacity-50 blur-sm transition duration-300" />
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/10 bg-slate-950">
                      <img
                        src={rep.image}
                        alt={rep.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">{rep.name}</h4>
                    <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mt-0.5">{rep.title}</p>
                  </div>
                </div>

                {/* Short Bio */}
                <p className="text-slate-350 text-xs sm:text-sm leading-relaxed mb-6">
                  "{rep.bio}"
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 border-t border-white/5 pt-5 mb-8">
                  {rep.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-200 text-xs sm:text-sm font-semibold">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action Button */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/15 active:scale-95 group cursor-pointer btn-pulse-shimmer"
          >
            Claim Your Free Audit with Rishabh & Vivek
            <ArrowRight className="w-4.5 h-4.5 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

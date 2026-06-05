"use client";

import React from "react";
import { Target, Search, BarChart4, ChevronRight, Layers, HeartHandshake, Eye } from "lucide-react";

export default function IntentClusters() {
  const clusters = [
    {
      id: "seo",
      title: "Advanced SEO & AEO",
      keywords: ["AEO optimization", "LLMSEO strategy", "generative engine optimization (GEO)", "SEO agency"],
      icon: <Search className="w-6 h-6 text-orange-500" />,
      tagline: "AI & Search Engine Dominance",
      bullets: [
        "AEO (Answer Engine Optimization) for voice & smart assistant queries",
        "LLMSEO targeting AI engines like Gemini, ChatGPT, and Claude",
        "GEO (Generative Engine Optimization) for Google's AI Overviews",
        "Technical audit, on-page optimization, and authority building",
        "Deep competitor mapping and generative keyword search profiling"
      ],
      ctaText: "Get SEO Growth Strategy",
      borderColor: "hover:border-orange-500/30",
      glowColor: "group-hover:shadow-orange-500/5"
    },
    {
      id: "webdesign",
      title: "Bespoke Web Design",
      keywords: ["custom web design", "Next.js web developer", "CRO landing pages"],
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      tagline: "Next-Gen Speeds & Interfaces",
      bullets: [
        "Hand-crafted layout designs built completely from scratch",
        "Frameworks like Next.js & Tailwind CSS for load times < 1 second",
        "Perfect Core Web Vitals to lower your Google Ads CPC costs",
        "Conversion-optimized UI layouts designed to maximize lead logs",
        "Interactive tools, calculation widgets, and secure backend APIs"
      ],
      ctaText: "Request Web Build Quote",
      borderColor: "hover:border-blue-500/30",
      glowColor: "group-hover:shadow-blue-500/5"
    },
    {
      id: "ppc",
      title: "PPC Management",
      keywords: ["google ads management", "meta ads agency", "adwords consultant"],
      icon: <Target className="w-6 h-6 text-amber-400" />,
      tagline: "Google Ads & Meta Ads Mastery",
      bullets: [
        "End-to-end setups on Google Search, Display, and Shopping networks",
        "High-performance Meta Ads (Facebook & Instagram) campaigns",
        "Eliminate up to 40%+ wasted ad spend via negative matches",
        "Daily bid monitoring, quality score optimizations, and copy tests",
        "Transparent, live-updating custom conversion reporting dashboards"
      ],
      ctaText: "Claim Paid Ads Audit",
      borderColor: "hover:border-amber-500/30",
      glowColor: "group-hover:shadow-amber-500/5"
    },
    {
      id: "socialmedia",
      title: "Social Media SMO",
      keywords: ["social media optimization", "organic content marketing", "brand presence"],
      icon: <HeartHandshake className="w-6 h-6 text-pink-400" />,
      tagline: "Brand Growth & Engagement",
      bullets: [
        "End-to-end organic social calendars (Instagram, LinkedIn, Facebook)",
        "High-CTR visual asset design and dynamic copy creation",
        "Social Media Optimization (SMO) to amplify your digital reach",
        "Community interactions, audience cultivation, and authority growth",
        "Influencer outreach campaigns and multi-channel brand marketing"
      ],
      ctaText: "Get Social Media Plan",
      borderColor: "hover:border-pink-500/30",
      glowColor: "group-hover:shadow-pink-500/5"
    }
  ];

  const scrollToForm = () => {
    const element = document.getElementById("audit-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services-section" className="relative py-24 bg-slate-950 bg-grid-pattern border-t border-white/5">
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-72 h-72 rounded-full bg-orange-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
            Engineered Search Intent Blocks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            How Do You Search For Premium Digital Growth?
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            We structure our operations explicitly around your custom business goals. Choose the targeted approach that matches your immediate needs.
          </p>
        </div>

        {/* Intent Cluster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clusters.map((cluster) => (
            <div
              key={cluster.id}
              className={`group flex flex-col justify-between rounded-2xl glass-panel p-5 sm:p-6 border border-white/5 transition-all duration-300 ${cluster.borderColor} ${cluster.glowColor} hover:translate-y-[-4px] relative overflow-hidden`}
            >
              
              {/* Card Core Content */}
              <div>
                {/* Header Row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {cluster.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{cluster.title}</h3>
                    <p className="text-xs text-orange-500/90 font-bold uppercase tracking-wider mt-0.5">{cluster.tagline}</p>
                  </div>
                </div>

                {/* Targeted SEO Keywords Panel */}
                <div className="mb-6 p-3 rounded-lg bg-slate-900/60 border border-white/[0.03]">
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">TARGET SEARCH MATCHES:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cluster.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-950 text-slate-300 border border-white/5 px-2 py-0.5 rounded font-mono font-medium"
                      >
                        "{kw}"
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8 text-left">
                  {cluster.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                      <span className="text-slate-300 text-sm leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-slate-800 transition-all cursor-pointer active:scale-98"
              >
                <span>{cluster.ctaText}</span>
                <ChevronRight className="w-4 h-4 ml-1.5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

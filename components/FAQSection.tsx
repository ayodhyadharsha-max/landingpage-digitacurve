"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is AI-Ready SEO (AEO, LLMSEO, GEO)?",
      a: "Traditional SEO focuses on ranking websites in traditional search results (like Google's blue links). AI-Ready SEO is designed to get your brand recommended by AI search engines and agents. AEO (Answer Engine Optimization) optimizes content for voice and smart assistant answers. LLMSEO (Large Language Model SEO) ensures your business is cited and recommended inside conversational models like Gemini, ChatGPT, and Claude. GEO (Generative Engine Optimization) structures website schema and authoritative sources to rank in Google's AI Overviews.",
    },
    {
      q: "Why does Digitacurve build custom websites instead of using WordPress templates?",
      a: "WordPress and page-builder templates (like Elementor or Divi) load hundreds of heavy, unused script dependencies that slow down page load times. Digitacurve custom-codes all websites using Next.js and Tailwind CSS. This guarantees mobile load speeds under 1 second. Near-perfect speed scores prevent mobile bounce rates, boost organic search ranks, and lower your PPC Cost-Per-Click (CPC) by increasing your Quality Score.",
    },
    {
      q: "How does your PPC management cover Google Ads and Meta Ads?",
      a: "We develop multi-channel paid ad funnels tailored to your customer acquisition costs. For Google Ads, we target high-intent search keywords and implement strict negative match exclusions to stop wasted click spend. For Meta Ads (Facebook & Instagram), we design high-converting visual creatives, script engaging video hooks, and build custom lookalike and retargeting audiences to drive social conversions.",
    },
    {
      q: "What is Social Media Optimization (SMO)?",
      a: "SMO builds organic trust, authority, and engagement across networks like LinkedIn, Instagram, and Facebook. We design custom content calendars, manage your community interactions, and structure social copy to support overall brand search authority. This creates a cohesive marketing funnel that funnels active social referral traffic directly to your website.",
    },
    {
      q: "Do you require long-term lock-in contracts?",
      a: "No. We operate with zero lock-in contracts. We earn your partnership month-over-month through clear results, transparent reporting dashboards, and direct expert communication. You always retain 100% ownership of all your code, design assets, and ad accounts.",
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="relative py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <HelpCircle className="w-3.5 h-3.5" />
            AI & Search Engine Optimizations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Providing direct, transparent, and authoritative answers to your core SEO, Web Design, PPC, and Social Media optimization inquiries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-slate-950 border border-orange-500/25 shadow-lg shadow-orange-500/5" 
                    : "bg-slate-950/40 border border-white/5 hover:border-white/10"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 cursor-pointer text-left focus:outline-none"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight leading-snug">
                    {faq.q}
                  </h3>
                  <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center flex-shrink-0 text-slate-400 hover:text-white transition-all duration-200 ${
                    isOpen ? "border-orange-500/25 text-orange-500" : ""
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-orange-500" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-72 border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-medium">
                    {faq.a}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* FAQ Support strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Have a specific campaign scenario?</h4>
            <p className="text-xs text-slate-400 mt-1">Get an instant campaign assessment directly from our AdWords specialists.</p>
          </div>
          <a
            href="#audit-form-section"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold bg-orange-500 hover:bg-orange-600 transition-colors text-slate-950 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            Ask an Expert Consultant
          </a>
        </div>

      </div>
    </section>
  );
}

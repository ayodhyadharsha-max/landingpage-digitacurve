"use client";

import React, { useState } from "react";
import { Sparkles, Send, Lock, Loader2 } from "lucide-react";

interface AuditFormProps {
  compact?: boolean;
}

export default function AuditForm({ compact = false }: AuditFormProps) {
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const website = formData.get("website") as string;
    const service = formData.get("service") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string || "N/A";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4888f5a9-e0a1-4fe6-97e0-04028ceb1154",
          subject: `New Digital Audit Lead - ${name} (${service})`,
          name,
          email,
          whatsapp,
          website: website || "N/A",
          service,
          budget,
          message,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        // Redirect to WhatsApp on successful form submission
        const waText = encodeURIComponent(
          `Hi Digitacurve,\n\nI have submitted the Audit/Inquiry form on your website with the following details:\n` +
          `- Name: ${name}\n` +
          `- Email: ${email}\n` +
          `- WhatsApp: ${whatsapp}\n` +
          `- Website: ${website || "N/A"}\n` +
          `- Service Focus: ${service}\n` +
          `- Budget Range: ${budget}\n` +
          `- Project Details: ${message}\n\n` +
          `Please review my request and share your strategy recommendation.`
        );
        window.location.href = `https://wa.me/917572094201?text=${waText}`;
      } else {
        setStatusMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatusMsg("Connecting to WhatsApp...");
      // Fallback redirect to WhatsApp even if API fails
      setTimeout(() => {
        const waText = encodeURIComponent(
          `Hi Digitacurve,\n\nI would like to get a free strategy audit. My details:\n` +
          `- Name: ${name}\n` +
          `- Email: ${email}\n` +
          `- WhatsApp: ${whatsapp}\n` +
          `- Service Focus: ${service}\n` +
          `- Website: ${website || "N/A"}`
        );
        window.location.href = `https://wa.me/917572094201?text=${waText}`;
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  const formFields = (
    <div className={compact ? "space-y-3.5 text-left" : "space-y-5 text-left"}>
      {/* Name & Email Group */}
      <div className={compact ? "space-y-3.5" : "grid grid-cols-1 md:grid-cols-2 gap-5"}>
        <div className="flex flex-col text-left">
          <label htmlFor={compact ? "hero-name" : "name"} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">
            Name <span className="text-orange-500 font-black">*</span>
          </label>
          <input
            type="text"
            name="name"
            id={compact ? "hero-name" : "name"}
            required
            placeholder="Enter your name"
            className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor={compact ? "hero-email" : "email"} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">
            Email Address <span className="text-orange-500 font-black">*</span>
          </label>
          <input
            type="email"
            name="email"
            id={compact ? "hero-email" : "email"}
            required
            placeholder="Enter your email"
            className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs"
          />
        </div>
      </div>

      {/* WhatsApp & Website Group */}
      <div className={compact ? "space-y-3.5" : "grid grid-cols-1 md:grid-cols-2 gap-5"}>
        <div className="flex flex-col text-left">
          <label htmlFor={compact ? "hero-whatsapp" : "whatsapp"} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">
            WhatsApp Number <span className="text-orange-500 font-black">*</span>
          </label>
          <input
            type="tel"
            name="whatsapp"
            id={compact ? "hero-whatsapp" : "whatsapp"}
            required
            placeholder="e.g. +91 75720 94201"
            className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor={compact ? "hero-website" : "website"} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">
            Website URL <span className="text-slate-500 font-medium">(Optional)</span>
          </label>
          <input
            type="text"
            name="website"
            id={compact ? "hero-website" : "website"}
            placeholder="e.g. www.mybusiness.com"
            className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs"
          />
        </div>
      </div>

      {/* Service & Budget Dropdowns */}
      <div className={compact ? "space-y-3.5" : "grid grid-cols-1 md:grid-cols-2 gap-5"}>
        <div className="flex flex-col text-left">
          <label htmlFor={compact ? "hero-service" : "service"} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">
            Target Service Focus
          </label>
          <select
            name="service"
            id={compact ? "hero-service" : "service"}
            defaultValue="SEO & AEO Optimization"
            className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs cursor-pointer"
          >
            <option value="SEO & AEO Optimization">SEO & AEO Optimization</option>
            <option value="Bespoke Web Design">Bespoke Web Design</option>
            <option value="PPC Management">PPC Ads (Google & Meta)</option>
            <option value="Social Media SMO">Social Media SMO</option>
            <option value="Full-Suite Digital Growth">Full Digital Package</option>
          </select>
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor={compact ? "hero-budget" : "budget"} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">
            Monthly Budget
          </label>
          <select
            name="budget"
            id={compact ? "hero-budget" : "budget"}
            defaultValue="$1,500 – $3,000"
            className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs cursor-pointer"
          >
            <option value="Under $1,500">Under $1,500</option>
            <option value="$1,500 – $3,000">$1,500 – $3,000</option>
            <option value="$3,000 – $5,000">$3,000 – $5,000</option>
            <option value="$5,000+">$5,000+</option>
          </select>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="flex flex-col text-left">
        <label htmlFor={compact ? "hero-message" : "message"} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">
          Tell Us About Your Project <span className="text-slate-500 font-medium">(Optional)</span>
        </label>
        <textarea
          name="message"
          id={compact ? "hero-message" : "message"}
          rows={2}
          placeholder="Briefly describe your business goals..."
          className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs resize-none"
        />
      </div>

      {statusMsg && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl text-center">
          {statusMsg}
        </div>
      )}

      {/* Submission Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md shadow-orange-500/10 cursor-pointer active:scale-[0.99] disabled:opacity-50 mt-2 ${!loading ? "btn-pulse-shimmer" : ""}`}
      >
        {loading ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-950" />
            <span>Submitting Lead...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5 text-slate-950" />
            <span>Get Free Strategy recommendation</span>
          </>
        )}
      </button>

      {/* Privacy lock indicator */}
      <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">
        <Lock className="w-3 h-3 text-slate-500" />
        <span>100% Privacy Protected. Zero Sales Spam.</span>
      </div>
    </div>
  );

  if (compact) {
    return (
      <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl w-full max-w-md">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-500 to-blue-500" />
        <div className="mb-4 text-center">
          <span className="px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3 h-3 text-orange-500" />
            Free Digital Strategy Session
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white mt-3 leading-tight tracking-tight">Claim Your Website Consultation</h3>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">Tell us about your project and we’ll recommend a free wireframe strategy.</p>
        </div>
        <form onSubmit={handleSubmit}>
          {formFields}
        </form>
      </div>
    );
  }

  return (
    <section id="audit-form-section" className="relative py-20 bg-slate-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Zero Obligation, Maximum Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Claim Your Free Digital Audit & Plan
          </h2>
          <p className="text-slate-400 mt-3 text-sm">
            No lock-in contracts. Get an expert review of your current site, advanced SEO audits, paid ads efficiency, and social media presence.
          </p>
        </div>

        {/* Lead Form Box */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-500 to-blue-500" />
          <form onSubmit={handleSubmit}>
            {formFields}
          </form>
        </div>

      </div>
    </section>
  );
}

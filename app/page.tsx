"use client";

import React, { useState } from "react";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import IntentClusters from "@/components/IntentClusters";
import ROICalculator from "@/components/ROICalculator";
import PainPoints from "@/components/PainPoints";
import FounderSection from "@/components/FounderSection";
import AuditForm from "@/components/AuditForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [prefilledWebsite, setPrefilledWebsite] = useState("");

  const handleWebsiteSubmit = (url: string) => {
    setPrefilledWebsite(url);
    const element = document.getElementById("audit-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Focus the name field in the form after scroll finishes
      setTimeout(() => {
        const nameInput = document.getElementById("name") || document.getElementById("hero-name");
        if (nameInput) {
          nameInput.focus();
        }
      }, 800);
    }
  };

  return (
    <>
      {/* Injects schema data blocks (LocalBusiness, Service, FAQPage) */}
      <SchemaMarkup />

      {/* Navigation Header */}
      <Navigation />

      <main className="flex-1 flex flex-col">
        {/* Hero Section containing the main value proposition */}
        <Hero onWebsiteSubmit={handleWebsiteSubmit} />

        {/* Metric Trust Strip */}
        <TrustStrip />

        {/* Search Intent Clusters */}
        <IntentClusters />

        {/* Interactive ROI Calculator */}
        <ROICalculator />

        {/* US vs THEM Comparison Pain points */}
        <PainPoints />

        {/* Meet the Founder Trust Section */}
        <FounderSection />

        {/* Conversion optimized Audit Intake Form */}
        <AuditForm prefilledWebsite={prefilledWebsite} />

        {/* AEO FAQ accordion panel */}
        <FAQSection />
      </main>

      {/* Physical Coordinates & Links Footer */}
      <Footer />
    </>
  );
}

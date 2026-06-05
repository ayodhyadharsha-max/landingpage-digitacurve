import React from "react";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digitacurve",
    "image": "https://www.digitacurve.com/images/digital-marketing-og.png",
    "@id": "https://www.digitacurve.com/#localbusiness",
    "url": "https://www.digitacurve.com",
    "telephone": "+917572094201",
    "email": "sale@digitacurve.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201309",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6273",
      "longitude": "77.3725"
    },
    "sameAs": [
      "https://www.instagram.com/digitacurve/",
      "https://www.facebook.com/profile.php?id=61586495587348",
      "https://www.linkedin.com/in/rishabhjaisal0425/",
      "https://share.google/IszwEKC0pok3prxtr"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Premium Digital Marketing & Custom Web Design Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Digitacurve",
      "url": "https://www.digitacurve.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Business Owners"
    },
    "description": "High-performance custom web design, advanced search optimization (including AEO, LLMSEO, GEO), multi-channel paid ads (Google & Meta), and organic social media marketing services."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-Ready SEO (AEO, LLMSEO, GEO)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional SEO focuses on ranking websites in traditional search results (like Google's blue links). AI-Ready SEO is designed to get your brand recommended by AI search engines and agents. AEO (Answer Engine Optimization) optimizes content for voice and smart assistant answers. LLMSEO (Large Language Model SEO) ensures your business is cited and recommended inside conversational models like Gemini, ChatGPT, and Claude. GEO (Generative Engine Optimization) structures website schema and authoritative sources to rank in Google's AI Overviews."
        }
      },
      {
        "@type": "Question",
        "name": "Why does Digitacurve build custom websites instead of using WordPress templates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WordPress and page-builder templates (like Elementor or Divi) load hundreds of heavy, unused script dependencies that slow down page load times. Digitacurve custom-codes all websites using Next.js and Tailwind CSS. This guarantees mobile load speeds under 1 second. Near-perfect speed scores prevent mobile bounce rates, boost organic search ranks, and lower your PPC Cost-Per-Click (CPC) by increasing your Quality Score."
        }
      },
      {
        "@type": "Question",
        "name": "How does your PPC management cover Google Ads and Meta Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop multi-channel paid ad funnels tailored to your customer acquisition costs. For Google Ads, we target high-intent search keywords and implement strict negative match exclusions to stop wasted click spend. For Meta Ads (Facebook & Instagram), we design high-converting visual creatives, script engaging video hooks, and build custom lookalike and retargeting audiences to drive social conversions."
        }
      },
      {
        "@type": "Question",
        "name": "What is Social Media Optimization (SMO)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMO builds organic trust, authority, and engagement across networks like LinkedIn, Instagram, and Facebook. We design custom content calendars, manage your community interactions, and structure social copy to support overall brand search authority. This creates a cohesive marketing funnel that funnels active social referral traffic directly to your website."
        }
      },
      {
        "@type": "Question",
        "name": "Do you require long-term lock-in contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We operate with zero lock-in contracts. We earn your partnership month-over-month through clear results, transparent reporting dashboards, and direct expert communication. You always retain 100% ownership of all your code, design assets, and ad accounts."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

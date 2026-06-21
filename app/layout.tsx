import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Premium Digital Growth Services | Digitacurve Agency",
  description: "Accelerate your online growth with Digitacurve. Premium custom-coded Web Design, SEO (including AEO, LLMSEO, GEO), high-ROI PPC campaigns, and Social Media management. Claim your free digital strategy review today!",
  keywords: [
    "digital marketing services",
    "custom web design agency",
    "search engine optimization seo",
    "answer engine optimization aeo",
    "llmseo",
    "generative engine optimization geo",
    "google ads PPC management",
    "meta ads agency",
    "social media management company",
    "roi focused digital agency",
    "performance web development",
    "digitacurve services"
  ],
  authors: [{ name: "Digitacurve Team" }],
  alternates: {
    canonical: "https://www.digitacurve.com",
  },
  openGraph: {
    title: "Premium Digital Growth & Web Design Services | Digitacurve",
    description: "Premium, ROI-driven Web Design, advanced SEO (AEO/LLMSEO/GEO), paid search (Google/Meta Ads), and organic social media marketing. Schedule a strategy review.",
    url: "https://www.digitacurve.com",
    siteName: "Digitacurve",
    images: [
      {
        url: "https://www.digitacurve.com/images/digital-marketing-og.png",
        width: 1200,
        height: 630,
        alt: "Digitacurve Premium Digital Services and Web Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Digital Growth & Web Design Services | Digitacurve",
    description: "Convert high-intent search traffic into paying customers. Custom web builds, advanced SEO, paid ads, and social media. Free growth audit included.",
    images: ["https://www.digitacurve.com/images/digital-marketing-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${outfit.variable} ${inter.variable} h-full antialiased dark`}
    >

      <head>
        {/* Google Tag Manager - Script Injection */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K63647ZH');
            `,
          }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-orange-500 selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K63647ZH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

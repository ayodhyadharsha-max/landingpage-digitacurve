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
        {/* PostHog - Script Injection */}
        <Script
          id="posthog-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Rn Ln init Gn Jn Si Zn Yn Vn capture calculateEventProperties ns register register_once register_for_session unregister unregister_for_session ls getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync us identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty ss ts createPersonProfile setInternalOrTestUser os Un ds opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Xn debug Ii mr getPageViewId captureTraceFeedback captureTraceMetric jn".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_tJbbMaK8xrHjW7TzoAE3chVGK28vuJ25vfMt9UbS6ex4', {
                  api_host: 'https://us.i.posthog.com',
                  defaults: '2026-05-30',
                  person_profiles: 'identified_only'
              })
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

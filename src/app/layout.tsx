import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const SITE_URL = "https://infrovel.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Infrovel — Ship Code Faster. Waste Less Compute.",
    template: "%s · Infrovel",
  },
  description:
    "Infrovel is a developer infrastructure startup in Kathmandu, Nepal, cutting CI time through remote caching, parallel execution, and pipeline insights.",
  keywords: [
    "Infrovel",
    "CI performance startup",
    "developer infrastructure",
    "remote build cache",
    "CI pipeline optimization",
    "build time analytics",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Infrovel — Ship Code Faster. Waste Less Compute.",
    description:
      "Remote caching, parallel execution, and pipeline performance insights that cut CI time and compute waste.",
    siteName: "Infrovel",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infrovel — Ship Code Faster. Waste Less Compute.",
    description:
      "Remote caching, parallel execution, and pipeline performance insights that cut CI time and compute waste.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Infrovel",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Infrovel is a developer infrastructure startup based in Kathmandu, Nepal, helping engineering teams cut CI time through remote caching, parallel execution, and pipeline performance insights.",
  email: "hello@infrovel.ltd",
  telephone: "+977-982-7788990",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chabahil",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

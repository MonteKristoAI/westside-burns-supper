import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://westsideburnssupper.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Westside Burns Night Association | Houston's Burns Supper",
    template: "%s | Westside Burns Night Association",
  },
  description:
    "Houston's annual Burns Supper — a candlelit evening of haggis, whisky, the Address to a Haggis and live ceilidh dancing at the Omni Galleria. A 501(c)(3) raising funds for charity since 2001.",
  keywords: [
    "Burns Supper Houston",
    "Burns Night",
    "Robert Burns dinner",
    "Scottish gala Houston",
    "ceilidh Houston",
    "Westside Burns Night Association",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Westside Burns Night Association",
    title: "Westside Burns Night Association | Houston's Burns Supper",
    description:
      "A candlelit evening of haggis, whisky and ceilidh dancing — Houston's traditional Burns Supper, raising funds for charity since 2001.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Westside Burns Night Association",
    description:
      "Houston's traditional Burns Supper — haggis, whisky and ceilidh dancing at the Omni Galleria.",
  },
  robots: { index: true, follow: true },
};

/* Structured data. Facts come from the 2026 programme and the board, nothing inferred.
   No offers block: ticket prices are per table and per couple, not per head, and a
   single price here would read as admission. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Westside Burns Night Association",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-badge.png`,
      email: "westsideburns@gmail.com",
      foundingDate: "2001",
      nonprofitStatus: "Nonprofit501c3",
      sameAs: ["https://www.linkedin.com/company/westsideburnsnight/"],
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#event-2027`,
      name: "Westside Burns Supper 2027",
      description:
        "Houston's traditional Burns Supper. Haggis and whisky, the Address to a Haggis, the Immortal Memory and live ceilidh dancing, in aid of charity.",
      startDate: "2027-01-30T18:30:00-06:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      url: `${SITE_URL}/tickets`,
      image: [`${SITE_URL}/images/hero.jpg`],
      location: {
        "@type": "Place",
        name: "Omni Houston Hotel",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4 Riverway Drive",
          addressLocality: "Houston",
          addressRegion: "TX",
          postalCode: "77056",
          addressCountry: "US",
        },
      },
      organizer: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}

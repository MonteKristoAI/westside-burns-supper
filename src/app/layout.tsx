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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

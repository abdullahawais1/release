import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "TestForge — QA Automation & Quality Engineering";
const DESCRIPTION =
  "QA automation and quality engineering for growing software teams. TestForge helps teams build reliable automated testing, API testing, manual QA, and performance testing systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — TestForge",
  },
  description: DESCRIPTION,
  applicationName: "TestForge",
  keywords: [
    "QA automation",
    "quality engineering",
    "Playwright testing",
    "test automation agency",
    "API testing",
    "performance testing",
    "JMeter",
    "CI/CD testing",
  ],
  authors: [{ name: "TestForge" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TestForge",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

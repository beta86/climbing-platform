import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://groundupclimb.co.uk"),
  title: {
    default: "Ground Up",
    template: "%s | Ground Up",
  },
  description:
    "Structured progression for indoor, sport, and trad climbers — built step by step.",
  openGraph: {
    type: "website",
    url: "https://groundupclimb.co.uk",
    siteName: "Ground Up",
    title: "Ground Up",
    description:
      "Structured progression for indoor, sport, and trad climbers — built step by step.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ground Up",
    description:
      "Structured progression for indoor, sport, and trad climbers — built step by step.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-stone-100 text-stone-900`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

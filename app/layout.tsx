import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import InquiryModal from "@/components/InquiryModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// THE META PROTOCOL: Engineering Global & Local Search Authority
export const metadata: Metadata = {
  title: {
    default: "Ordained Digitals | Engineering Premium Identities",
    template: "%s | Ordained Digitals"
  },
  description: "High-fidelity digital ecosystems and aesthetic spreadsheet protocols engineered for absolute stewardship. Sub-300ms performance for the digital sovereign.",
  keywords: ["Next.js 15", "Digital Agency Gauteng", "Python Automation", "Aesthetic Spreadsheets", "South Africa Tech Creator"],
  authors: [{ name: "Siphokazi" }],
  creator: "Siphokazi",
  metadataBase: new URL("https://ordaineddigitals.com"), // Update with your live domain later
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://ordaineddigitals.com",
    siteName: "Ordained Digitals",
    title: "Ordained Digitals | Digital Sovereignty Engineered",
    description: "Transforming ambitious visions into high-conversion digital ecosystems with sub-300ms precision.",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists in your /public folder
        width: 1200,
        height: 630,
        alt: "Ordained Digitals Neural Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ordained Digitals",
    description: "Engineering Premium Identities with Absolute Stewardship.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        {/* 1. INTERACTIVE LAYERS */}
        <CustomCursor />
        <InquiryModal />

        {/* 2. CORE SYSTEM CONTENT */}
        {children}
      </body>
    </html>
  );
}
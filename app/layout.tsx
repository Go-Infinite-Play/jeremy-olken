import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeremy Olken - AI-Native Operator & Consultant",
  description: "AI-native operator bridging emerging technology and business impact. I build with Claude Code, Cursor, N8N, and Lindy.AI to help teams transform for the AI era.",
  keywords: ["AI consultant", "AI-native operator", "Claude Code", "Cursor", "N8N", "Lindy.AI", "digital transformation", "AI automation"],
  authors: [{ name: "Jeremy Olken" }],
  openGraph: {
    title: "Jeremy Olken - AI-Native Operator & Consultant",
    description: "Bridging the gap between emerging technology and business impact",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

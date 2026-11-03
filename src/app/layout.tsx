import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bhagya Udapudi | Python Full Stack Developer",
  description:
    "Portfolio of Bhagya Udapudi — Python Full Stack Developer specializing in FastAPI, Django, React 18, SQL/MySQL, and AI Vector Search pipelines.",
  keywords: [
    "Bhagya Udapudi",
    "Python Full Stack Developer",
    "FastAPI",
    "Django",
    "React",
    "MySQL",
    "FAISS",
    "Sentence-Transformers",
    "Vijayapura",
  ],
  authors: [{ name: "Bhagya Udapudi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#030712] text-gray-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        {children}
      </body>
    </html>
  );
}

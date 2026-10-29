import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Architect & Full-Stack Developer Portfolio",
  description: "Senior Backend Architect & Full Stack Engineer specialized in Next.js, NestJS, and Distributed Systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased min-h-screen`}>
        {/* Soft, professional gradient accent top right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/70 via-slate-50 to-slate-50 -z-10" />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { montserrat } from '@/utils/fonts';
import Navbar from "@/components/navbar/navbar";
import Footer from '@/components/footer/footer';
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Rosyid | Enterprise Systems Architect",
  description: "Architecting and deploying high-volume B2B automation pipelines and private AI infrastructure.",
};

const navbarLinks = [
  {name: "Home", url: "#hero"},
  {name: "About", url: "#about"},
  {name: "Education", url: "#education"},
  {name: "Skills", url: "#skills"},
  {name: "Services", url: "#services"},
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${montserrat.className} antialiased`}>
        <Navbar links={navbarLinks} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

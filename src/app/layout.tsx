import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexoo - Software House",
  description: "Flexoo software house TC",
  icons: {
    apple: ["/logo/logo.png"],
    icon: ["/logo/logo.png"],
    shortcut: ["/logo/logo.png"]
  },
  openGraph: {
    title: "Flexoo - Software House",
    description: "Flexoo software house TC",
    siteName: "Flexoo",
    images: ["https://flexoo.vercel.app/logo-with-text.png"],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    title: "Flexoo - Software House",
    card: "summary_large_image",
    description: "Flexoo software house TC",
    images: ["https://flexoo.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={jakartaSans.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

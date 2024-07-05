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
  }
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

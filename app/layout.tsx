import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";

export const metadata: Metadata = {
  title: "codeSarv - Grow your skills with codeSarv",
  description:
    "codeSarv is a platform to learn coding and development. And the best part is it's totally free. So, don't wait just join.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

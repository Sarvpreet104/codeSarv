import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "codeSarv - Grow your skills with codeSarv",
  description:
    "codeSarv is a platform to learn coding and development. And the best part is it's totally free. So don't wait, just join.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className="relative">
        <Providers session={session}>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

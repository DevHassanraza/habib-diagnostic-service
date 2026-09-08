import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Habib Diagnostic Service",
  description:
    "Habib Diagnostic Service provides reliable diagnostic, medical and healthcare solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
        <WhatsAppButton />

      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ReactLenis } from "@/utils/lenis";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanshavli - DNA Analysis",
  description: "A user-friendly, privacy-focused DNA analysis platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}

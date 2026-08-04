import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import { SkeletonHero } from "@/ui/skeletonHero";

import "./globals.css";
import "./styles.sass";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyberlim QR Code Generator",
  description:
    "Generate stunning, high-resolution QR codes with vibrant cyber aesthetics. Custom colors, sizes, error correction, and embedded logos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProvider>
          {" "}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<SkeletonHero />}>{children}</Suspense>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

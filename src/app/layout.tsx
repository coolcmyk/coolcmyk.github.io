import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});


export const metadata: Metadata = {
  title: "ky0.dev",
  description: "Interact with Mitsuki, about my skills, projects, etc.",
  keywords: [
    "kyomoto",
    "ky0",
    "Portfolio", 
    "Developer", 
    "AI", 
    "Interactive", 
    "Memoji", 
    "Web Development",
    "Full Stack",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "ky0",
      url: "https://ky0.dev",
    },
  ],
  creator: "ky0m0to",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ky0.dev",
    title: "coolcmyk's portfolio",
    description: "Interact with Mitsuki, about my skills, projects, etc.",
    siteName: "ky0.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toukoum Portfolio",
    description: "Interact with Mitsuki, about my skills, projects, etc.",
    creator: "@kyomoto",
  },
  icons: {
    icon: [
      {
        url: "/logo-preview.png",
        sizes: "any",
      }
    ],
    shortcut: "/logo-preview.png?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo-preview.png" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          jetbrainsMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

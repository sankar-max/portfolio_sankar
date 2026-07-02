import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sankarapandian R | Frontend Engineer | React | Next.js | TypeScript",
  description:
    "Portfolio of Sankarapandian R, a Frontend Engineer with 3.2+ years of experience building enterprise-grade SaaS applications using React, Next.js, TypeScript, PostgreSQL, and modern web technologies.",
  keywords: [
    "React Developer",
    "Frontend Engineer",
    "Next.js Developer",
    "TypeScript",
    "React Native",
    "Full Stack Developer",
    "SaaS",
    "Portfolio",
    "PostgreSQL",
    "Node.js",
  ],
  authors: [{ name: "Sankarapandian R" }],
  openGraph: {
    title: "Sankarapandian R | Frontend Engineer",
    description:
      "Enterprise SaaS & Frontend Architecture specializing in React, Next.js, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankarapandian R | Frontend Engineer",
    description:
      "Enterprise SaaS & Frontend Architecture specializing in React, Next.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-indigo-500/20 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

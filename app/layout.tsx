import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lukas Lagler — Software Engineer",
  description: "Portfolio of Lukas Lagler, a Switzerland-based Software Engineer focusing on full-stack development, AI, and building things that work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
        {children}
      </body>
    </html>
  );
}

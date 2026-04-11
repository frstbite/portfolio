import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("antialiased", inter.variable, "font-sans", geist.variable)}>
      <body className="bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fonteSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fonteMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo Dev - Landing Page Moderna",
  description: "Landing page profissional desenvolvida com Next.js 14, React 18 e Tailwind CSS",
};

export default function LayoutRaiz({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="pt-BR" className={`${fonteSans.variable} ${fonteMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white antialiased">
        {children}
      </body>
    </html>
  );
}

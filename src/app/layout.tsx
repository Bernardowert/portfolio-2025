import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manRope = Manrope({
  variable: "--font-Manrope",
  display: "swap",
  style: "normal",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bernardowert | Portfolio",
  description: "Portfolio pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${manRope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

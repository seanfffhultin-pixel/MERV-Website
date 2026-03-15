import type { Metadata } from "next";
import { Bricolage_Grotesque, Rock_Salt, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const rockSalt = Rock_Salt({
  variable: "--font-rock-salt",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "MERVÅ",
  description: "MERVÅ is an umbrella portfolio for websites, videos, and games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${spaceGrotesk.variable} ${rockSalt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Radium Residence | Luxury Apartments in Nyali",
  description:
    "Experience premium living in Nyali with luxury apartments featuring swimming pool, elevator, secure parking and modern finishes.",
  keywords: [
    "Nyali apartments",
    "Luxury apartments Mombasa",
    "Airbnb Nyali",
    "Radium Residence",
    "Faith Cosy Homes"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
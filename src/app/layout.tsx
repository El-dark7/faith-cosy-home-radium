import "./globals.css";

export const metadata = {
  title: "Faith cosy homes",
  description:
    "Luxury 3 Bedroom Apartment in Nyali Mombasa"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

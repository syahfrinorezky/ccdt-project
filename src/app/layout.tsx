import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Bali Wanderlust - Unleash Your Inner Explorer in Paradise",
  description: "Discover hidden gems, authentic culture, and unforgettable adventures across the Island of Gods. Bali Wanderlust offers curated exploration experiences that combine natural beauty, rich heritage, and authentic local encounters.",
  keywords: "Bali wanderlust, Bali exploration, hidden gems Bali, authentic Bali tours, Island of Gods, Bali culture, adventure travel, Indonesia tourism, Bali experiences",
  authors: [{ name: "Syahfrino Rezky Oktaviant" }, { name: "Jeri Sanda Langi'" }],
  openGraph: {
    title: "Bali Wanderlust - Unleash Your Inner Explorer in Paradise",
    description: "Discover hidden gems, authentic culture, and unforgettable adventures across the Island of Gods.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

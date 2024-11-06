import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Buy AirPods Online | Best Prices & Fast Shipping - AirPod Haven",
  description: "Shop the latest AirPods models at unbeatable prices. Enjoy superior sound quality, wireless convenience, and fast shipping. Get your AirPods now at AirPod Haven.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <div>
        {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

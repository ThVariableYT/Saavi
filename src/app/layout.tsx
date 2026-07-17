import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Petit_Formal_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const petit = Petit_Formal_Script({
  variable: "--font-petit",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Saavi — 25th July",
  description: "A little world made with love to celebrate Saavi's birthday.",
  icons: { icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0c0810",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${bodoni.variable} ${cormorant.variable} ${petit.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

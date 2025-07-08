import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NavMenu from '../components/NavMenu';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "馬主デザイン | UMANUSI Design - 馬主・厩舎向けオリジナルグッズ制作",
  description: "馬主・牧場・厩舎の皆さまへ。愛馬との一勝を、一生の誇りに。記念品・ロゴ・名刺など、競馬にまつわるオリジナルデザイン制作はUMANUSI Designへ。",
  robots: "index, follow",
  authors: [{ name: "UMANUSI Design" }],
  openGraph: {
    title: "馬主デザイン | UMANUSI Design - 馬主・厩舎向けオリジナルグッズ制作",
    description: "馬主・牧場・厩舎の皆さまへ。愛馬との一勝を、一生の誇りに。記念品・ロゴ・名刺など、競馬にまつわるオリジナルデザイン制作はUMANUSI Designへ。",
    url: "https://www.umanusi-design.com/",
    type: "website",
    siteName: "UMANUSI Design",
    images: [
      {
        url: "https://www.umanusi-design.com/ogp.png",
        width: 1200,
        height: 630,
        alt: "UMANUSI Design OGP画像"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@furakutaru"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  metadataBase: new URL("https://www.umanusi-design.com/")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavMenu />
      <html lang="ja">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-VYY9Y5V89Q"
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VYY9Y5V89Q');
          `}
          </Script>
          {children}
        </body>
      </html>
    </>
  );
}

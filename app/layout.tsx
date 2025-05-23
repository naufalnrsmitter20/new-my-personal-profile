import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Naufalnr Portfolio | Personal Website",
  description: "Situs pribadi Naufal Nabil Ramadhan - Fullstack Developer | Software Engineer | General Manager of MokletDev. Lihat proyek, portofolio, dan artikel seputar web development dan teknologi.",
  openGraph: {
    title: "Naufal Nabil Ramadhan - Fullstack Developer | Software Engineer | General Manager of MokletDev",
    description: "Fullstack Developer dan Software Engineer. Lihat karya dan kontribusi saya di bidang teknologi.",
    url: "https://naufalnr.my.moklet.org/",
    type: "website",
    locale: "id_ID",
    siteName: "Naufal Nabil Ramadhan",
    images: [
      {
        url: "https://naufalnr.my.moklet.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "OG Image - Naufal Nabil Ramadhan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naufal Nabil Ramadhan - Fullstack Developer | Software Engineer | General Manager of MokletDev",
    description: "General Manager MokletDev dan Fullstack Developer. Lihat karya dan kontribusi saya di bidang teknologi.",
    images: ["https://naufalnr.my.moklet.org/og-image.png"],
  },
};

const oneDay = localFont({
  src: [
    {
      path: "../public/fonts/ONEDAY.ttf",
      style: "normal",
    },
  ],
  variable: "--font-oneday",
});

const ClashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Bold.otf",
      style: "bold",
      weight: "700",
    },
    {
      path: "../public/fonts/ClashDisplay-Extralight.otf",
      style: "extralight",
      weight: "200",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.otf",
      style: "light",
      weight: "300",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.otf",
      style: "medium",
      weight: "500",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.otf",
      style: "regular",
      weight: "400",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.otf",
      style: "semibold",
      weight: "600",
    },
  ],
  variable: "--font-clash-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ClashDisplay.className} ${oneDay.variable}`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullstack Developer | Software Engineer | General Manager of MokletDev",
  description: "Situs pribadi Naufal Nabil Ramadhan - General Manager MokletDev & Fullstack Developer. Lihat proyek, portofolio, dan artikel seputar web development dan teknologi.",
  openGraph: {
    title: "Naufal Nabil Ramadhan - Fullstack Developer | Software Engineer | General Manager of MokletDev",
    description: "General Manager MokletDev dan Fullstack Developer. Lihat karya dan kontribusi saya di bidang teknologi.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${oneDay.variable}`}>{children}</body>
    </html>
  );
}

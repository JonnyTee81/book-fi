import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BookFi - Personal Finance Books & Reviews",
    template: "%s | BookFi"
  },
  description: "Discover the best personal finance books to transform your relationship with money. Expert-curated reviews, collections, and recommendations to build wealth and achieve financial independence.",
  keywords: "personal finance books, investing books, budgeting, financial education, money management, wealth building, retirement planning, debt management, entrepreneurship, real estate investing",
  authors: [{ name: "BookFi Team" }],
  creator: "BookFi",
  publisher: "BookFi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://book-fi.vercel.app'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://book-fi.vercel.app',
    title: 'BookFi - Personal Finance Books & Reviews',
    description: 'Discover the best personal finance books to transform your relationship with money. Expert-curated reviews, collections, and recommendations to build wealth and achieve financial independence.',
    siteName: 'BookFi',
    images: [
      {
        url: '/images/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'BookFi - Personal Finance Books & Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookFi - Personal Finance Books & Reviews',
    description: 'Discover the best personal finance books to transform your relationship with money.',
    images: ['/images/og-image.jpg'],
    creator: '@bookfi', // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Add Google Search Console verification code
    yandex: '', // Add Yandex verification code if needed
    yahoo: '', // Add Yahoo verification code if needed
  },
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
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./fonts.css";
import Layout from "@/components/layout/Layout";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "삼지상사총판 - 프리미엄 축산물 가공품 전문",
  description: "러시아, 남미, 인도, 뉴질랜드 등에서 직접구매한 최고품질의 갈비탕, 갈비찜, 도가니탕, 곱창 등 프리미엄 축산물 가공품을 공급합니다.",
  keywords: "삼지상사, 갈비탕, 갈비찜, 도가니탕, 곱창, 소고기탕, 스지, 소스 수입가공품, 삼지상사 총판",
  authors: [{ name: "삼지상사총판" }],
  generator: "Next.js",
  applicationName: "삼지상사총판",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "삼지상사총판 - 프리미엄 축산물 가공품 전문",
    description: "러시아, 남미, 인도, 뉴질랜드 등에서 직접구매한 최고품질의 축산물 가공품을 공급합니다.",
    url: "http://samjitrade.co.kr/",
    siteName: "삼지상사총판",
    images: [
      {
        url: "/img/kakao_image.jpg",
        width: 1200,
        height: 630,
        alt: "삼지상사총판",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "삼지상사총판 - 프리미엄 축산물 가공품 전문",
    description: "최고품질의 축산물 가공품을 수입유통하는 삼지상사총판입니다.",
    images: ["/img/kakao_image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/favicon.ico",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "http://samjitrade.co.kr/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

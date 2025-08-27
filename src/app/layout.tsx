// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Kukuttor – エンジニア単発案件のマッチング",
  description: "Kukuttorは、スキマ時間でできるエンジニア向け単発バイトを見つけて応募できるMVPです。",
  openGraph: {
    title: "Kukuttor – エンジニア単発案件のマッチング",
    description: "スキマ時間でエンジニア案件をサクッと。",
    url: "https://example.com", // 後でVercelのURLに差し替え
    siteName: "Kukuttor",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kukuttor" }],
    locale: "ja_JP",
    type: "website",
    
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-white text-slate-800 antialiased">{children}</body>
    </html>
  );
}

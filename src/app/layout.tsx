import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CBT IPS Kelas IX - PSAJ 2026 | SMP PGRI 1 Kuwarasan",
  description: "Sistem Computer Based Test (CBT) Penilaian Sumatif Akhir Jenjang IPS Kelas IX Tahun Ajaran 2025/2026 - SMP PGRI 1 Kuwarasan",
  keywords: ["CBT", "IPS", "Kelas IX", "PSAJ", "Ujian", "SMP PGRI 1 Kuwarasan"],
  authors: [{ name: "Catur Pamungkas, S.Pd., Gr." }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "CBT IPS Kelas IX - PSAJ 2026",
    description: "Sistem CBT Penilaian Sumatif Akhir Jenjang IPS Kelas IX - SMP PGRI 1 Kuwarasan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBT IPS Kelas IX - PSAJ 2026",
    description: "Sistem CBT Penilaian Sumatif Akhir Jenjang IPS Kelas IX - SMP PGRI 1 Kuwarasan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

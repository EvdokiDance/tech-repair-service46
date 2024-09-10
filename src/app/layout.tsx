import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";

const nunito = Nunito({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Сервис ремонта техники в Курске",
  description: "Сервис качественного ремонта телефонов и планшетов, компьютеров и ноутбуков, также техники Apple в Курске по адресу Союзная 16",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script src="//code.jivo.ru/widget/P6gv3c0lG9" async></script>
      </head>
      <body suppressHydrationWarning={true} className={nunito.className}>{children}</body>
    </html>
  );
}

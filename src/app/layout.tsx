import type { Metadata, Viewport } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";

const nunito = Nunito({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Сервисный центр ремонта телефонов и других устройств в г.Курске",
  description: "Сервис Инспектор гаджет это сервис починки цифровых устройств. Ремонт телефонов, планшетов, ноутбуков и других устройств в Курске. Подробнее об услугах на сайте. 8 (951) 312-77-69 с 9:00 до 21:00 пн-вс.",
  robots: "index, follow",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

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
      <body suppressHydrationWarning className={nunito.className}>{children}</body>
    </html>
  );
}

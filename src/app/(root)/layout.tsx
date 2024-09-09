
import { Footer, Header } from "@/shared/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сервис ремонта техники в Курске",
  description: "Сервис качественного ремонта телефонов и планшетов, компьютеров и ноутбуков, также техники Apple в Курске по адресу Союзная 16",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}

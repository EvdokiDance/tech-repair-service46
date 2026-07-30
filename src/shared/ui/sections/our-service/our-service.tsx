import React from "react";
import { cn } from "@/shared/lib";
import { Container, Title } from "../..";
import { LaptopMinimal, TabletSmartphone } from "lucide-react";
import { OurServiceItem } from "./our-service-item";
import Image from "next/image";
interface Props {
  className?: string;
}

const ourServiceItems = [
  {
    icon: <LaptopMinimal className="text-primary" size={52} />,
    title: "Ремонт компьютеров и ноутбуков",
    text: "Если компьютер или ноутбук не включается, перегревается, зависает или работает без изображения, проведем диагностику и подберем ремонт под вашу задачу.",
  },
  {
    icon: <TabletSmartphone className="text-primary" size={52} />,
    title: "Ремонт телефонов и планшетов",
    text: `Ремонтируем смартфоны и планшеты разных брендов: меняем экраны,
  аккумуляторы, разъемы, динамики, камеры и восстанавливаем устройства
  после сложных поломок.`,
  },
  {
    icon: (
      <Image
        src="/assets/icons/apple.svg"
        alt="Apple logo"
        className="min-w-[52px] h-[52px]"
        width={52}
        height={52}
      />
    ),
    title: "Ремонт техники Apple",
    text: `Техника Apple — символ высокого качества. Работая над ремонтом
  iPhone, iPad и MacBook, мы бережно относимся к устройству, данным
  владельца и качеству каждой установленной детали.`,
  },
];

export const OurService: React.FC<Props> = ({ className }) => {
  return (
    <section
      id="our-services"
      className={cn("bg-bagroundSecondary py-10 scroll-m-16", className)}
    >
      <Container>
        <h2 className="text-2xl font-bold text-center break-words lg:text-4xl">
          Сервисный центр в Курске выполняет
          <span className="text-primary "> профессиональный ремонт</span>{" "}
          телефонов, планшетов, ноутбуков и техники Apple
        </h2>

        <div className="mt-10 flex-col lg:flex lg:flex-row">
          <div className="flex flex-col gap-16 items-center lg:items-baseline">
            {ourServiceItems.map((item) => (
              <OurServiceItem key={item.title} {...item} />
            ))}
          </div>

          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/assets/images/devices.png"
              alt="смартфоны, планшеты и ноутбуки для ремонта в сервисном центре Инспектор Гаджет"
              width={3000}
              height={1800}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

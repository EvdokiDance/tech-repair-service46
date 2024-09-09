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
    text: "Ваш компьютер или ноутбук не включается, нет изображения или перегревается? Не волнуйтесь, мы поможем вам справиться с любыми проблемами вашего устройства!",
  },
  {
    icon: <TabletSmartphone className="text-primary" size={52} />,
    title: "Ремонт телефонов и планшетов",
    text: `Не имеет значения, какой фирмы ваше устройство – мы
  профессионально выполним любой ремонт. От замены разъемов до
  восстановления материнской платы, все будет сделано на высшем
  уровне.`,
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
    title: "Ремонт компьютеров и ноутбуков",
    text: `Техника Apple — символ высокого качества. Работая над ремонтом
  этих устройств, мы перенимаем философию компании и выполняем
  свою работу с максимальной ответственностью.`,
  },
];

export const OurService: React.FC<Props> = ({ className }) => {
  return (
    <section
      id="our-services"
      className={cn("bg-bagroundSecondary py-10 scroll-m-16", className)}
    >
      <Container>
        <h2 className="text-4xl font-bold text-center">
          Наш сервис оказывает услуги по{" "}
          <span className="text-primary"> профессиональному ремонту </span>
          компьютерной и мобильной техники в Курске
        </h2>

        <div className="mt-10 flex-col lg:flex lg:flex-row">
          <div className="flex flex-col gap-16 items-center lg:items-baseline">
            {ourServiceItems.map((item) => (
              <OurServiceItem key={item.title} {...item} />
            ))}
          </div>

          <div className="flex flex-1 items-center justify-center">
            <img src="/assets/images/devices.png" alt="our-service" />
          </div>
        </div>
      </Container>
    </section>
  );
};

import React from "react";
import { cn } from "@/shared/lib";
import { Container, Title } from "..";
import { LaptopMinimal, TabletSmartphone } from "lucide-react";

interface Props {
  className?: string;
}

export const OurService: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-bagroundSecondary py-[3rem]", className)}>
      <Container>
        <h2 className="text-4xl font-bold text-center">
          Наш сервис оказывает услуги по <span className="text-primary"> профессиональному ремонту </span>
          компьютерной и мобильной техники в Курске
        </h2>

        <div className="mt-10 flex-col lg:flex lg:flex-row">
          <div className="flex flex-col gap-16 items-center lg:items-baseline">
            <div className="flex items-start gap-5">
              <div className="bg-bagroundPrimary p-5 rounded-full">
                <LaptopMinimal className="text-primary" size={52} />
              </div>
              <div>
                <Title size="md" text="Ремонт компьютеров и ноутбуков" />
                <p className="text-gray-300 max-w-[360px] font-medium">
                  Твой железный друг не включается? Нет изображения? Греется?
                  Ничего страшного, Джонни сможет решить все проблемы с твоим
                  компьютером или ноутбуком.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-bagroundPrimary p-5 rounded-full">
                <TabletSmartphone className="text-primary" size={52} />
              </div>
              <div>
                <Title size="md" text="Ремонт телефонов и планшетов" />
                <p className="text-gray-300 max-w-[360px] font-medium">
                  Твой железный друг не включается? Нет изображения? Греется?
                  Ничего страшного, Джонни сможет решить все проблемы с твоим
                  компьютером или ноутбуком.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-bagroundPrimary p-5 rounded-full">
                <img
                  src="/assets/icons/apple.svg"
                  alt=""
                  className="min-w-[52px] h-[52px]"
                />
              </div>
              <div>
                <Title
                  size="md"
                  text="Ремонт техники Эпл"
                />
                <p className="text-gray-300 max-w-[360px] font-medium">
                  Твой железный друг не включается? Нет изображения? Греется?
                  Ничего страшного, Джонни сможет решить все проблемы с твоим
                  компьютером или ноутбуком.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <img src="/assets/images/devices.png" alt="our-service" />
          </div>
        </div>
      </Container>
    </section>
  );
};

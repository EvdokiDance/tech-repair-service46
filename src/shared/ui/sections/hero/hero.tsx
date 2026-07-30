import React from "react";
import { cn } from "@/shared/lib";


import { ClockArrowUp, Pocket, WrenchIcon } from "lucide-react";
import { Container, ModalForm } from "../..";
import { HeroCard, HeroParallaxVisual } from ".";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <section id="hero" className={cn("min-h-screen pb-10 scroll-m-96", className)}>
      <Container>
        <div className="mt-[100px] flex flex-col gap-10 items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className=" font-bold leading-[1] text-center text-4xl lg:text-left lg:text-6xl max-w-[600px]">
              Ремонт телефонов и техники{" "}
              <span className="text-primary block">в Курске</span>
            </h1>
            <p className="mt-5 text-gray-300 text-xl max-w-[540px] text-center xl:text-lg lg:text-left">
              Инспектор Гаджет ремонтирует смартфоны, планшеты, ноутбуки и
              технику Apple. Бесплатно диагностируем устройство, согласуем
              стоимость заранее и даем гарантию на выполненные работы.
            </p>
            <ModalForm className="mt-10"/>
          </div>
          <HeroParallaxVisual />
        </div>
        <div className="mt-20 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          <HeroCard
            icon={<WrenchIcon size={36} />}
            title="Меняем дисплеи, стекла, аккумуляторы, разъемы и устраняем сложные неисправности"
          />
          <HeroCard
            icon={<Pocket size={36} />}
            title="Сохраняем личные данные и заранее согласуем все работы с владельцем устройства"
          />
          <HeroCard
            icon={<ClockArrowUp size={36} />}
            title="Выполняем популярные виды ремонта от 20-30 минут при наличии запчастей"
          />
        </div>
      </Container>
    </section>
  );
};

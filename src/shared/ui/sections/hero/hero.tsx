import React from "react";
import { cn } from "@/shared/lib";


import { ClockArrowUp, Pocket, WrenchIcon } from "lucide-react";
import { Button } from "antd";
import { Container, ModalForm } from "../..";
import { HeroCard } from ".";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <section id="hero" className={cn("min-h-screen pb-10 scroll-m-96", className)}>
      <Container>
        <div className="mt-[100px] flex flex-col gap-10 items-center lg:flex-row lg:justify-between">
          <div className="text-[48px] font-bold leading-[1] xl:text-[60px]">
            <h1>
              Сервис ремонта
              <span className="text-primary">
                <br /> техники в Курске
              </span>
            </h1>
            <p className="mt-5 text-gray-400 text-xl max-w-[540px] xl:text-lg">
              Профессиональный ремонт любой техники. Независимо от поломки —
              будь то смартфон, ноутбук, планшет или другое устройство — мы
              быстро и качественно вернем его в строй!
            </p>
            <ModalForm />
          </div>
          <div className="relative bg-primary/40 w-[375px] h-[400px] mt-16 lg:mt-0 rounded-[86%_19%_30%_30%_/_42%_70%_30%_58%_]">
            <img
              className="relative w-[375px] h-[400px] object-cover"
              src={"/assets/images/man-smiling.png"}
              alt="hero"
            />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-[repeat(auto-fill,minmax(370px,1fr))] gap-5">
          <HeroCard
            icon={<WrenchIcon size={36} />}
            title="Устранение любых технических неисправностей, таких как поврежденные экраны, проблемы с аккумулятором"
          />
          <HeroCard
            icon={<Pocket size={36} />}
            title="Обеспечение безопасности и сохранности личных данных при ремонте устройства"
          />
          <HeroCard
            icon={<ClockArrowUp size={36} />}
            title="Качественный ремонт, который продлит срок службы вашего устройства"
          />
        </div>
      </Container>
    </section>
  );
};

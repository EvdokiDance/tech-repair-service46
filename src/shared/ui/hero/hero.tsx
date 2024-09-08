import React from "react";
import { cn } from "@/shared/lib";
import { Container, HeroCard, Modal, ModalForm } from "..";

import { ClockArrowUp, Pocket, WrenchIcon } from "lucide-react";
import { Button } from "antd";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn('min-h-screen pb-10',className)}>
      <Container>
        <div className="mt-10 flex flex-col gap-10 items-center lg:flex-row lg:justify-between">
          <div className="text-[48px] font-bold leading-[1] xl:text-[60px]">
            <h1>Сервис ремонта <span className="text-primary"> <br/> техники в Курске</span></h1>
            <p className="mt-5 text-gray-400 text-xl max-w-[540px] xl:text-lg">
              Наша команда профессионалов быстро и качественно восстановит ваш
              телефон, чтобы вы снова могли наслаждаться всеми его
              возможностями. Независимо от поломки — будь то разбитый экран,
              проблемы с зарядкой или любая другая неисправность — мы вернем
              вашему устройству новую жизнь.
            </p>
            <ModalForm/>
          </div>
          <div className="relative bg-primary/40 w-[400px] h-[400px] rounded-[86%_14%_70%_30%_/_42%_70%_30%_58%_]">
            <img className="absolute ml-5 -translate-y-3 object-[5px,15px] scale-[1.125]" src={"/assets/images/hero.png"} alt="hero"/>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(370px,1fr))] gap-5">
          <HeroCard icon={<WrenchIcon size={36} />} title="Устранение любых технических неисправностей, таких как поврежденные экраны, проблемы с аккумулятором"/>
          <HeroCard icon={<Pocket size={36}/>} title="Обеспечение безопасности и сохранности личных данных при ремонте устройства"/>
          <HeroCard icon={<ClockArrowUp size={36}/>} title="Качественный ремонт, который продлит срок службы вашего устройства"/>
        </div>
      </Container>
    </section>
  );
};

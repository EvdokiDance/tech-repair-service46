import React from "react";
import { cn } from "@/shared/lib";
import { Container, ModalForm } from "../..";
import { Calculator, ClipboardList, Microscope, ThumbsUp } from "lucide-react";
import { StageItem } from ".";
import { Button } from "antd";

interface Props {
  className?: string;
}

export const StagesWork: React.FC<Props> = ({ className }) => {
  return (
    <section id="stages-work" className={cn("bg-bagroundSecondary py-10 scroll-m-16", className)}>
      <Container className="flex flex-col items-center">
        <h2 className="text-[36px] font-bold text-center">Этапы работы</h2>
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-4 sm:grid-cols-2">
          <StageItem
            icon={<ClipboardList className="text-gray-400" size={72} />}
            title="Заявка"
            text="Вы оставляете заявку, наш специалист связывается с вами в течение нескольких минут"
            className=" after:absolute after:top-5 after:-right-10 after:content-none sm:after:content-moveRightIcon"
          />
          <StageItem
            icon={<Microscope className="text-gray-400" size={72} />}
            title="Диагностика"
            text="Проводим диагностику устройства, которая является бесплатной"
            className="after:absolute after:top-5 after:-right-10 after:content-none lg:after:content-moveRightIcon"
          />
          <StageItem
            icon={<Calculator className="text-gray-400" size={72} />}
            title="Оптимизация"
            text="Согласовываем цену и только после этого начинаем ремонт вашего устройства"
            className="after:absolute after:top-5 after:-right-10 after:content-none sm:after:content-moveRightIcon"
          />
          <StageItem
            icon={<ThumbsUp className="text-gray-400" size={72} />}
            title="Результат"
            text="Вы проверяете ваше отремонтированное устройство и оплачиваете работу"
          />
        </div>
        <ModalForm className="mt-10" />
      </Container>
    </section>
  );
};

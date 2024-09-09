"use client";

import React, { CSSProperties } from "react";
import { cn } from "@/shared/lib";
import { Container } from "../..";
import { Collapse, CollapseProps, ConfigProvider, theme } from "antd";
import { Nunito } from "next/font/google";

interface Props {
  className?: string;
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const nunito = Nunito({ subsets: ["cyrillic"] });

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Сколько стоит ремонт моего устройства?",
    children: (
      <p>
        Цены на такие виды ремонта как замена дисплея или аккумулятора менеджер
        сможет сказать вам сразу же во время звонка. Точную стоимость сложного
        ремонта вашего устройства мастер сможет сказать после его диагностики,
        которая является бесплатной в нашем сервисном центре.
      </p>
    ),
  },
  {
    key: "2",
    label: "Даете ли вы гарантию на ремонт устройств?",
    children: <p>Да. На все виды работ мы даем гарантию от 1 до 6 месяцев.</p>,
  },
  {
    key: "3",
    label: "Какие способы оплаты есть в вашем сервисе?",
    children: <p>Оплатить вы можете наличным или безналичным расчётом.</p>,
  },
  {
    key: "4",
    label: "Сколько времени займет ремонт моего устройства?",
    children: (
      <p>
        Замена, к примеру, дисплея или аккумулятора проходит за 20-30 минут при
        наличии запчастей на складе. Если ремонт сложный, то может потребоваться
        несколько дней, такие вопросы согласовываются с мастером.
      </p>
    ),
  },
];

export const Faq: React.FC<Props> = ({ className }) => {
  return (
    <section id="faq" className={cn("py-10 scroll-m-16", className)}>
      <Container>
        <h2 className="text-[36px] font-bold text-center ">
          Часто задаваемые вопросы
        </h2>
        <div className="mt-10">
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  headerPadding: 20,
                  colorTextHeading: "rgb(81, 120, 251)",
                  colorBorder: "rgb(81, 120, 251)",
                  fontSize: 20,
                  colorBgContainer: "rgb(36, 36, 35)",
                  colorText: "white",
                },
              },
            }}
          >
            <Collapse className={cn(nunito.className)} items={items}></Collapse>
          </ConfigProvider>
        </div>
      </Container>
    </section>
  );
};

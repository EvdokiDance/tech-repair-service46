"use client";

import React from "react";
import { cn } from "@/shared/lib";
import { Container } from "../..";
import { faqItems } from "@/shared/constants";
import { Collapse, CollapseProps, ConfigProvider } from "antd";
import { Nunito } from "next/font/google";

interface Props {
  className?: string;
}

const nunito = Nunito({ subsets: ["cyrillic"] });

const items: CollapseProps["items"] = faqItems.map((item, index) => ({
  key: String(index + 1),
  label: item.question,
  children: <p>{item.answer}</p>,
}));

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

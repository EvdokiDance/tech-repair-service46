'use client'
import React from "react";
import { cn } from "@/shared/lib";
import { Container } from "..";
import { Carousel } from "antd";


interface Props {
  className?: string;
}

const contentStyle: React.CSSProperties = {
  width: "100%",
  color: "#fff",
  textAlign: "center",
  padding: "0 5px",
  objectFit: "contain",
  userSelect: "none",
};

export const AboutUs: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("py-10", className)}>
      <Container>
        <h2 className="text-[36px] font-bold text-center">
          Наш сервис в фотографиях
        </h2>
        <div className="mt-10">
          <Carousel arrows autoplay slidesToShow={3}>
            <div>
              <img
                style={contentStyle}
                src="/assets/images/about-us-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                style={contentStyle}
                src="/assets/images/about-us-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                style={contentStyle}
                src="/assets/images/about-us-3.jpg"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

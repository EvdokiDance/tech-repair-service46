'use client'
import React from "react";
import { cn } from "@/shared/lib";
import { Container } from "../..";
import { Carousel, ConfigProvider } from "antd";


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


const courouselItems = ["/assets/images/about-us-1.jpg", "/assets/images/about-us-2.jpg", "/assets/images/about-us-3.jpg"];




export const Gallery: React.FC<Props> = ({ className }) => {
  return (
    <section id="gallery" className={cn("py-10 scroll-m-16", className)}>
      <Container>
        <h2 className="text-[36px] font-bold text-center">
          Наш сервис в фотографиях
        </h2>
        <div className="mt-10">
          <ConfigProvider theme={{ components: { Carousel: {
            arrowSize: 60,
          } } }}>
            <Carousel arrows  autoplay slidesToShow={3}>
              {courouselItems.map((item) => (
                <div>
                  <img
                    style={contentStyle}
                    src={item}
                    alt="наши фотографии"
                  />
                </div>
              ))}
            </Carousel>
          </ConfigProvider>
        </div>
      </Container>
    </section>
  );
};

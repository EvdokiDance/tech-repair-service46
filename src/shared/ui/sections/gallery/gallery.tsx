'use client'
import React, { useEffect, useState } from "react";
import { cn } from "@/shared/lib";
import { Container } from "../..";
import { Carousel, ConfigProvider } from "antd";
import Image from "next/image";


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


const carouselItems = [
  {
    src: "/assets/images/about-us-1.jpg",
    alt: "рабочее место сервисного центра Инспектор Гаджет в Курске",
  },
  {
    src: "/assets/images/about-us-2.jpg",
    alt: "ремонт цифровой техники в сервисном центре Инспектор Гаджет",
  },
  {
    src: "/assets/images/about-us-3.jpg",
    alt: "фотография сервиса ремонта телефонов и ноутбуков в Курске",
  },
];




export const Gallery: React.FC<Props> = ({ className }) => {


  const [width, setWidth] = useState(1024);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = (e: UIEvent) => {
      const w = e.target as Window;
      setWidth(w.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




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
            <Carousel arrows  autoplay slidesToShow={width < 768 ? 1 : 3}>
              {carouselItems.map((item) => (
                <div key={item.src}>
                  <Image
                    style={contentStyle}
                    src={item.src}
                    alt={item.alt}
                    width={1620}
                    height={2160}
                    sizes={width < 768 ? "100vw" : "33vw"}
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

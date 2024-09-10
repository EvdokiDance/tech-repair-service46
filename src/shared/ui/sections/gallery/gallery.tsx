'use client'
import React, { useEffect, useState } from "react";
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


  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
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
              {courouselItems.map((item, index) => (
                <div key={index}>
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

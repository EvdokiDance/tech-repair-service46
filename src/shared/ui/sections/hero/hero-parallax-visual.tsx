"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/shared/lib";

interface Props {
  className?: string;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const HeroParallaxVisual: React.FC<Props> = ({ className }) => {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      root.style.setProperty("--parallax-backdrop-y", "0px");
      root.style.setProperty("--parallax-panel-x", "0px");
      root.style.setProperty("--parallax-panel-y", "0px");
      root.style.setProperty("--parallax-rail-x", "0px");
      root.style.setProperty("--parallax-rail-y", "0px");
      root.style.setProperty("--parallax-image-y", "0px");
      return;
    }

    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;

      const rect = root.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const visualCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const progress = clamp((visualCenter - viewportCenter) / viewportHeight, -1, 1);

      root.style.setProperty("--parallax-backdrop-y", `${(progress * 28).toFixed(1)}px`);
      root.style.setProperty("--parallax-panel-x", `${(progress * -18).toFixed(1)}px`);
      root.style.setProperty("--parallax-panel-y", `${(progress * 34).toFixed(1)}px`);
      root.style.setProperty("--parallax-rail-x", `${(progress * 14).toFixed(1)}px`);
      root.style.setProperty("--parallax-rail-y", `${(progress * -42).toFixed(1)}px`);
      root.style.setProperty("--parallax-image-y", `${(progress * -24).toFixed(1)}px`);
    };

    const scheduleUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(
        "hero-parallax relative isolate mt-16 h-[330px] w-[280px] sm:h-[470px] sm:w-[420px] lg:mt-0",
        className
      )}
    >
      <div
        data-parallax-layer="backdrop"
        aria-hidden="true"
        className="absolute inset-x-2 bottom-3 top-10 rounded-lg border border-white/10 bg-primary/25 shadow-[0_35px_120px_rgba(81,120,251,0.22)]"
      />
      <div
        data-parallax-layer="panel"
        aria-hidden="true"
        className="absolute left-0 top-8 h-24 w-32 rounded-md border border-white/10 bg-white/[0.07] backdrop-blur-sm sm:h-32 sm:w-44"
      />
      <div
        data-parallax-layer="rail"
        aria-hidden="true"
        className="absolute right-4 top-3 h-28 w-[2px] rounded-full bg-gradient-to-b from-white/40 via-primary/80 to-transparent sm:h-40"
      />
      <div
        data-parallax-layer="image"
        className="absolute inset-0 overflow-hidden rounded-lg"
      >
        <Image
          className="h-full w-full object-cover object-center"
          src="/assets/images/man-smiling.png"
          alt="мастер сервисного центра Инспектор Гаджет в Курске"
          width={1000}
          height={667}
          priority
        />
      </div>
    </div>
  );
};

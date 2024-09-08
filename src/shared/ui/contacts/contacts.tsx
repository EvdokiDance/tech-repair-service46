"use client";
import React from "react";
import { cn } from "@/shared/lib";
import { Container } from "..";

import Image from "next/image";
import { BiLogoTelegram } from "react-icons/bi";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { AddressTag } from "../address-tag";
import { contacts } from "@/shared/constants";
import { AlarmClock, Mail, Smartphone } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Contacts: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("py-10 bg-bagroundSecondary", className)}>
      <Container>
        <h2 className="text-[36px] font-bold text-center">
          Контакты
        </h2>
        <div className="flex mt-10 gap-10 flex-col items-center lg:flex-row lg:justify-between ">
        <div className="flex flex-col justify-center flex-1 gap-10">
          <div className="flex items-center gap-3 text-xl">
            <Smartphone size={32} />
            <span className="font-bold">Телефон: </span>
            <Link  href={`tel:${contacts.phone}`} className="text-primary underline underline-offset-4 whitespace-nowrap">{contacts.phone}</Link>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <Mail size={32} />
            <span className="font-bold">Почта: </span>
            <Link  href={`tel:${contacts.email}`} className="text-primary underline underline-offset-4 whitespace-nowrap">{contacts.email}</Link>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <BiLogoTelegram  size={32} />
            <span className="font-bold">Телеграм: </span>
            <Link  href={`tel:${contacts.telegram}`} className="text-primary underline underline-offset-4 whitespace-nowrap">@abobadance</Link>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <AlarmClock size={32} />
            <span className="font-bold">Часы работы: </span>
            <Link  href={`tel:${contacts.telegram}`} className="text-primary underline underline-offset-4 whitespace-nowrap">пн. - вс. c 9:00 до 18:00</Link>
          </div>
        </div>
          <div className="w-[400px]">
          <YMaps query={{ lang: "ru_RU" }}>
              <div className="flex justify-center">
                    <AddressTag className="inline-flex  mb-5" address={contacts.address}/>
                </div>
                <Map
                    defaultState={{ center: [51.7469526, 36.2445119], zoom: 16}}
                    width={'100%'}
                    options={{autoFitToViewport: "always"}}
                  >
                    <ZoomControl options={{ position: { right: 10, top: 50 } }} />
                    <Placemark
                      geometry={[51.74719, 36.2445]}
                      options={{ iconColor: "red" }}
                    />
                  </Map>
            </YMaps>
          </div>
        </div>
      </Container>
    </section>
  );
};

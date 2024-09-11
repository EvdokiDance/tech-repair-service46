"use client";
import React, { Suspense } from "react";
import { cn } from "@/shared/lib";
import { Container } from "../..";

import { BiLogoTelegram } from "react-icons/bi";

import { AddressTag } from "../../address-tag";
import { contacts } from "@/shared/constants";
import { AlarmClock, Mail, Smartphone } from "lucide-react";

import { ContactItem } from "./contact-item";

interface Props {
  className?: string;
}

const LazyYandexMap = React.lazy(() =>
  import("../../yandex-map").then((module) => ({ default: module.YandexMap }))
);

export const Contacts: React.FC<Props> = ({ className }) => {
  return (
    <section
      id="contacts"
      className={cn("py-10 bg-bagroundSecondary scroll-m-16", className)}
    >
      <Container>
        <h2 className="text-[36px] font-bold text-center">Контакты</h2>
        <div className="flex mt-10 gap-10 flex-col items-center lg:flex-row lg:justify-between ">
          <div className="flex flex-col justify-center flex-1 gap-10">
            <ContactItem
              href={`tel:${contacts.phone}`}
              icon={<Smartphone size={32} />}
              title="Телефон:"
              text="8 (951) 312-77-69"
            />
            <ContactItem
              href={`mailto:${contacts.email}`}
              icon={<Mail size={32} />}
              title="Почта:"
              text={contacts.email}
            />
            <ContactItem
              href={`https://t.me/${contacts.phone}`}
              icon={<BiLogoTelegram size={32} />}
              title="Телеграм:"
              text="@abobadance"
            />
            <ContactItem
              icon={<AlarmClock size={32} />}
              title="Часы работы:"
              text="пн. - вс. c 9:00 до 21:00"
            />
          </div>
          <div className="max-w-[600px] w-full">
            <div className="flex justify-center">
              <AddressTag
                className="inline-flex  mb-5"
                address={contacts.address}
              />
            </div>
            <Suspense fallback={<div>Загрузка карты...</div>}>
              <LazyYandexMap />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
};

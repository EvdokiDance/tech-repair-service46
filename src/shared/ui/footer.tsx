import React from "react";
import { cn } from "@/shared/lib";
import { Container } from ".";
import { FaTelegram, FaVk } from "react-icons/fa6";
import { contacts } from "../constants";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer
      className={cn(
        "py-10 bg-[rgb(15,15,15)] border-t border-t-gray-600/40",
        className
      )}
    >
      <Container>
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:justify-between">
          <div className="flex flex-col text-xl">
            <address>Россия, г.Курск, Союзная ул. 16</address>
            <div>пн. - вс. c 9:00 до 21:00</div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <a href={`tel:${contacts.phone}`} className="text-xl">
                8 (951) 312-77-69
              </a>
              <div className="text-sm text-gray-500">9:00-21:00</div>
            </div>
            <a href={`tel:${contacts.email}`} className="text-xl">
              {contacts.email}
            </a>

            <div>
              <h3 className="text-xl">Мы в соцсетях</h3>
              <div className="flex justify-center md:justify-start mt-2 gap-3">

                <Link aria-label="Телеграм" href="https://t.me/+79513127769" target="_blank">
                  <FaTelegram size={32} className="text-primary" />
                </Link>

                <Link aria-label="ВКонтакте" href="https://vk.com/youphonevk" target="_blank">
                  <FaVk size={32} className="text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-4">
          2021-{new Date().getFullYear()} © Все права защищены
        </div>
      </Container>
    </footer>
  );
};

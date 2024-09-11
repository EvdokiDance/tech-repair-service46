"use client";

import React from "react";

import { Modal, NavItem } from ".";
import { Menu } from "lucide-react";

import { contacts, navigation } from "../constants";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

export const ModalNav: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Menu onClick={() => setOpen(true)} />
      <Modal width={400} isModalOpen={open} handleCancel={() => setOpen(false)}>
        <div className="flex flex-col text-center">
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => (
              <NavItem className="p-2 text-xl" onClick={() => setOpen(false)} key={item.href} href={item.href}>
                {item.title}
              </NavItem>
            ))}
          </nav>
          <div className="flex justify-center items-center mt-2">
          <Link className="p-2" href={"https://t.me/+79513127769"} target="_blank">
            <Image
              width={25}
              height={25}
              alt="telegram"
              src="/assets/icons/telegram.svg"
            />
          </Link>
          <Link className="p-2 text-xl" href={`tel:${contacts.phone}`}>8 (951) 312-77-69</Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

"use client";

import React from "react";

import { Modal, NavItem } from ".";
import { Menu } from "lucide-react";

import { contacts, navigation } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { AddressTag } from "./address-tag";

interface Props {
  className?: string;
}

export const ModalNav: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Menu onClick={() => setOpen(true)} />
      <Modal isModalOpen={open} handleCancel={() => setOpen(false)}>
        <nav className="flex flex-col gap-3">
          {navigation.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.title}
            </NavItem>
          ))}
          
          <Link href={"/"}>
            <AddressTag address={contacts.address} />
          </Link>
          <Link href={"/"}>{contacts.phone}</Link>
          <Link href={"/"} target="_blank">
            <Image
              width={25}
              height={25}
              alt="telegram"
              src="/assets/icons/telegram.svg"
            />
          </Link>
        </nav>
      </Modal>
    </>
  );
};

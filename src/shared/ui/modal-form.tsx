'use client'

import React from 'react';
import { cn } from '@/shared/lib';
import { Button } from 'antd';
import { Modal } from '.';
import { Nunito } from 'next/font/google';

interface Props {
    className?: string;
}
const nunito = Nunito({ subsets: ["cyrillic"] });

export const ModalForm: React.FC<Props> = ({className}) => {

    const [open, setOpen] = React.useState(false);


  return (
    <>
        <Button className={cn('w-[380px] h-[60px] text-xl mt-5', nunito.className, className)} type='primary' onClick={() => setOpen(true)}>Оставить заявку</Button>
        <Modal isModalOpen={open} handleCancel={() => setOpen(false)}>
            <div>Форма</div>
        </Modal>
    </>
  );
};
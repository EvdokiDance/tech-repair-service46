'use client'

import React from 'react';
import { cn } from '@/shared/lib';
import { Button, Input } from 'antd';
import { Modal } from '.';
import { Nunito } from 'next/font/google';

interface Props {
    className?: string;
}
const nunito = Nunito({ subsets: ["cyrillic"] });

export const ModalForm: React.FC<Props> = ({className}) => {

    const [open, setOpen] = React.useState(false);
  


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const target = e.target as HTMLFormElement;
        
        const formData = new FormData()

        formData.append("firstName", "John");
        
        console.log(formData);
        e.preventDefault();
       
    }

  return (
    <>
        <Button className={cn('w-[380px] h-[60px] text-xl mt-5', nunito.className, className)} type='primary' onClick={() => setOpen(true)}>Оставить заявку</Button>
        <Modal isModalOpen={open} handleCancel={() => setOpen(false)}>
            <form onSubmit={handleSubmit}>
                <div>Форма</div>
                <input type='text' id='name' name='имя'/>
                <Input name='телефон'/>
                <button type='submit'>Отправить</button>
            </form>
        </Modal>
    </>
  );
};
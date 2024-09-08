import React from 'react';
import { cn } from '@/shared/lib';
import { Container } from './container';
import { NavItem } from './nav-item';
import Link from 'next/link';
import { Modal } from '.';

import { AddressTag } from './address-tag';
import { contacts, navigation } from '../constants';
import Image from 'next/image';
import { ModalNav } from './modal-nav';


interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
      <header className={cn('top-3 sticky z-10 px-5', className)}>
                <Container className='py-3 flex items-center justify-between bg-zinc-900/90 rounded-2xl'>
                    <div className='w-30 leading-5 font-bold text-lg'>
                        Ремонтный сервис <br/> Ивана Святого
                    </div>
                    <nav className='hidden lg:flex lg:gap-3'>
                        {navigation.map((item) => (
                            <NavItem key={item.href} href={item.href} className='font-semibold'>{item.title}</NavItem>
                        ))}
                    </nav>
                    <div className='hidden lg:flex lg:gap-3 lg: items-center'>
                        <Link href={'/'}><AddressTag address={contacts.address}/></Link>
                        <Link href={'/'}>{contacts.phone}</Link>
                        <Link href={'/'} target='_blank'><Image width={25} height={25} alt='telegram' src='/assets/icons/telegram.svg'/></Link>
                    </div>
                    <div className='lg:hidden'>
                        <ModalNav/>
                    </div>
                </Container>
    </header>
  );
};
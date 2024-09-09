import React from 'react';
import { cn } from '@/shared/lib';
import Image from 'next/image';

interface Props {
    className?: string;
    title: string;
    icon: React.ReactNode;
}

export const HeroCard: React.FC<Props> = ({ className, title, icon }) => {
  return (
    <div className={cn('rounded-3xl bg-gray-500/20 text-white', className)}>
      <div className="p-5 pb-0 flex justify-end">{icon}</div>
      <h3 className='p-5 font-medium'>{title}</h3>
    </div>
  );
};
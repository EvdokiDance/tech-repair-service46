import React from 'react';
import { cn } from '@/shared/lib';

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn('max-w-[1200px] mx-auto px-5',className)}>
        {children}
    </div>
  );
};
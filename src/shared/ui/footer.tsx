import React from 'react';
import { cn } from '@/shared/lib';

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn(className)}>Подвал</footer>
  );
};
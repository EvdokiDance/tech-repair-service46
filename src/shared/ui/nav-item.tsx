import React from 'react';
import { cn } from '@/shared/lib';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps {
    className?: string;
    children?: React.ReactNode;
    target?: '_blank' | '_self' | '_parent' | '_top'
} 

export const NavItem: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <Link {...props} className={cn('p-2 h-full text-sm font-medium hover:text-primary transition-all', className)}>
        {children}
    </Link>
  );
};
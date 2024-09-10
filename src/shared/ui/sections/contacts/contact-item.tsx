import React from 'react';
import { cn } from '@/shared/lib';
import Link from 'next/link';

interface Props {
    className?: string;
    icon: React.ReactNode;
    href: string;
    title: string;
    text: string;
}

export const ContactItem: React.FC<Props> = ({ className, href, icon, title, text }) => {
  return (
    <div className={cn('flex flex-wrap items-start gap-3 text-xl', className)}>
            <div className="flex items-center gap-2">
              {icon}
              <span className="font-bold">{title}</span>
            </div>
            <Link  href={href} className="text-primary underline underline-offset-4">{text}</Link>
    </div>
  );
};
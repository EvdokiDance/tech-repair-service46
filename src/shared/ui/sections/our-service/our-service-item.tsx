import React from 'react';
import { cn } from '@/shared/lib';
import { Title } from '../..';

interface Props {
    className?: string;
    icon: React.ReactNode;
    title: string;
    text: string;
}

export const OurServiceItem: React.FC<Props> = ({ className, icon, title, text }) => {
  return (
    <div className={cn("flex items-start gap-5", className)}>
              <div className="bg-bagroundPrimary p-5 rounded-full">
                {icon}
              </div>
              <div>
                <Title size="md" text={title} />
                <p className="text-gray-300 max-w-[360px] font-medium">
                  {text}
                </p>
              </div>
    </div>
  );
};
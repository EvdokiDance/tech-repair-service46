'use client';

import React from 'react';
import { cn } from '@/shared/lib';
import { SquareArrowUp } from 'lucide-react';

interface Props {
    className?: string;
}

export const ScrollToTop: React.FC<Props> = ({ className }) => {

    const [isVisible, setIsVisible] = React.useState(false);


    const toggleVisibility = () => {
      if (window.pageYOffset > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    };
  
    React.useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);
  


  return (
        <>
            <SquareArrowUp size={50} onClick={scrollToTop} className={cn('fixed text-primary left-10 bottom-10 cursor-pointer hover:text-primary/80 transition-all opacity-0 z-50', isVisible && 'opacity-100' , className)}/>
        </>
  );
};
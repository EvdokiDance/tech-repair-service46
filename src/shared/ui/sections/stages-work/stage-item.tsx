import React from "react";
import { cn } from "@/shared/lib";
import { ClipboardList } from "lucide-react";

interface Props {
  className?: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}

export const StageItem: React.FC<Props> = ({ className, text, icon, title }) => {
  return (
    <div className={cn("flex flex-col items-center gap-2 relative", className)}>
    {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 text-center max-w-[300px]">
        {text}
      </p>
    </div>
  );
};

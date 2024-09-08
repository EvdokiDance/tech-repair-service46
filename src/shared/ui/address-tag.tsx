import React from "react";
import { cn } from "@/shared/lib";
import { MapPin } from "lucide-react";

interface Props {
  className?: string;
  address: string;
}

export const AddressTag: React.FC<Props> = ({ className, address }) => {
  return (
    <address className={cn("flex items-center bg-gray-500/50 text-sm px-3 py-1 rounded-xl text-center ", className)}>
      <MapPin size={16} className="mr-2" />
      {address}
    </address>
  );
};

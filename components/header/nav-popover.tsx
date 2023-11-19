import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

type NavPopoverProps = {
  title: string;
};

export const NavPopover = ({ title }: NavPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex justify-between gap-1">
          {title}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="grid w-60 gap-1 rounded-lg bg-slate-100 p-1">
        <Button variant="outline">Omnichannel Chat</Button>
        <Button variant="outline">In-App Chat SDK</Button>
      </PopoverContent>
    </Popover>
  );
};

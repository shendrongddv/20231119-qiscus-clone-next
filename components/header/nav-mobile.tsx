import Link from "next/link";

import { testMenuMain } from "@/config/site";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideIcon } from "lucide-react";
import { SheetClose } from "../ui/sheet";

export const NavMobile = () => {
  return (
    <nav className="overflow-y-auto">
      <Accordion type="single" collapsible>
        {testMenuMain?.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id.toString()}
            className="border-none"
          >
            {item.isGroup ? (
              <>
                <AccordionTrigger className="h-10 px-4 text-sm font-medium text-foreground hover:bg-accent/40 hover:no-underline [&[data-state=open]]:bg-accent">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent className="bg-accent px-4">
                  <ul className="grid grid-cols-3 gap-2">
                    {item.links?.map((item) => (
                      <li key={item.id}>
                        <LinkItemBeta
                          label={item.label}
                          url={item.url}
                          icon={item.icon}
                        />
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </>
            ) : (
              <LinkItem label={item.label} url={item.url} />
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </nav>
  );
};

// Components
type LinkItemProps = {
  label: string;
  url: string;
  icon?: LucideIcon;
};
const LinkItem = ({ label, url, icon: Icon }: LinkItemProps) => {
  return (
    <SheetClose asChild>
      <Link
        href={url}
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "default",
            className:
              "flex w-full justify-start rounded-none text-foreground hover:bg-accent/40",
          }),
        )}
      >
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {label}
      </Link>
    </SheetClose>
  );
};

const LinkItemBeta = ({ label, url, icon: Icon }: LinkItemProps) => {
  return (
    <SheetClose asChild>
      <Link
        href={url}
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "default",
            className:
              "flex h-full flex-col items-center gap-2 whitespace-normal p-4 text-center",
          }),
        )}
      >
        {Icon && <Icon className="h-6 w-6 text-primary" />}
        <span className="text-[10px] font-normal leading-tight text-foreground">
          {label}
        </span>
      </Link>
    </SheetClose>
  );
};

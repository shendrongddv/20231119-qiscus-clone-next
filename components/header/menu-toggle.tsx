import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NavMobile } from "./nav-mobile";

export const MenuToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button
          aria-label="Toggle Menu"
          variant="outline"
          size="icon"
          className="rounded-lg"
        >
          <Menu className="h-5 w-5 text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-screen w-full flex-col p-0 md:hidden"
      >
        {/* # */}
        <SheetHeader>
          <div className="flex h-16 justify-start border-b p-4">
            <SheetClose asChild>
              <Link href="/" aria-label="Qiscus">
                <Image
                  priority
                  aria-hidden
                  src="/logo.svg"
                  alt="Qiscus"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* # */}
        <NavMobile />
      </SheetContent>
    </Sheet>
  );
};

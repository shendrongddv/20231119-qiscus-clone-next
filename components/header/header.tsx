"use client";

import { useEffect, useState } from "react";
import { SiteLogo } from "../site-logo";
import { cn } from "@/lib/utils";
import { MenuToggle } from "./menu-toggle";
import { Button } from "../ui/button";
import { NavPopover } from "./nav-popover";
import { NavDesktop } from "./nav-desktop";

const TOP_OFFSET = 64;

export const Header = () => {
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full bg-background px-4 transition duration-300",
        navScroll ? "border-b" : "",
      )}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* SiteLogo */}
          <SiteLogo />

          {/* Nav */}
          <NavDesktop />

          {/* Show Desktop */}
          <div className="hidden md:flex md:items-center md:justify-between md:gap-2">
            <NavPopover title="Masuk" />
            <Button variant="default">Kontak</Button>
          </div>

          {/*Show Mobile */}
          <div className="flex items-center justify-center gap-2 md:hidden">
            <MenuToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { SiteLogo } from "../site-logo";
import { cn } from "@/lib/utils";
import { MenuToggle } from "./menu-toggle";
import { Button } from "../ui/button";
import { NavPopover } from "./nav-popover";

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
          <nav className="flex items-center justify-center gap-2">
            <NavPopover title="Solusi" />
            <NavPopover title="Produk" />
            <Button variant="ghost">Harga</Button>
            <Button variant="ghost">Perusahaan</Button>
            <Button variant="ghost">Bantuan</Button>
          </nav>

          {/* # */}
          <div className="flex items-center justify-center gap-2">
            {/* Desktop */}
            <NavPopover title="Masuk" />
            <Button>Kontak</Button>

            {/* Mobile */}
            {/* MenuToggle */}
            <MenuToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

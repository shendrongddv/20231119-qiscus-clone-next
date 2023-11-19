"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { SiteLogo } from "../site-logo";
import { cn } from "@/lib/utils";

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

          {/* ModeToggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

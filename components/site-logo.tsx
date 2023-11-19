"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const SiteLogo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/" aria-label="Qiscus">
      <Image
        priority
        aria-hidden
        src={theme === "dark" ? "/logo-white.svg" : "/logo.svg"}
        alt="Logo"
        width={40}
        height={40}
        className="h-8 w-auto"
      />
    </Link>
  );
};

export const SiteLogoFooter = () => {
  return (
    <Link href="/" aria-label="Qiscus">
      <Image
        priority
        aria-hidden
        src="/logo-white.svg"
        alt="Qiscus"
        width={40}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
  );
};

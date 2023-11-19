import { siteLegals, siteNavFoooter, siteSocials } from "@/config/site";
import Link from "next/link";
import { SiteLogoFooter } from "../site-logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { Item } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#01416c] px-4 pt-24 text-sm text-white/75">
      <div className="container space-y-12">
        {/* Row */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-center gap-2 text-center md:w-3/12 md:items-start md:text-start">
            {/* # */}
            <SiteLogoFooter />
            {/* # */}
            <h4 className="mt-4 font-semibold text-white">Singapore:</h4>
            <address className="not-italic">
              21 Tan Quee Lan Street, #02-04 Heritage Place, Singapore 188108
            </address>

            {/* # */}
            <h4 className="mt-4 font-semibold text-white">Jakarta:</h4>
            <address className="not-italic">
              Sampoerna Strategic Square North Tower Lantai 25, Jl. Jenderal
              Sudirman No.Kav. 45, Karet Semanggi, Setiabudi, South Jakarta
              City, Jakarta 12930
            </address>

            {/* # */}
            <h4 className="mt-4 font-semibold text-white">Yogyakarta:</h4>
            <address className="not-italic">
              Jl. Timoho No. 43, Muja Muju, Yogyakarta 55165
            </address>
          </div>

          {siteNavFoooter?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-3 md:items-start"
            >
              {/* # */}
              <h4 className="font-semibold text-white">{item.title}</h4>

              {/* # */}
              <ul className="grid w-full grid-cols-2 gap-2 max-md:gap-x-4 md:grid-cols-1">
                {item.links?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      aria-label={item.label}
                      className="text-center hover:text-white hover:underline hover:underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Row */}
        <div className="flex flex-col items-center gap-4 border-t border-white/25 py-8 md:flex-row md:justify-between">
          {/* Col */}
          <span className="md:order-2">Qiscus © 2023</span>

          {/*Col# */}
          <ul className="flex items-center justify-center gap-4 md:order-first">
            {siteSocials?.map((item) => (
              <li key={item.id}>
                <SocialItem
                  label={item.label}
                  icon={item.icon}
                  url={item.url}
                />
              </li>
            ))}
          </ul>

          {/* Col */}
          <ul className="flex items-center justify-center gap-4 md:order-last">
            {siteLegals?.map((item) => (
              <li key={item.id}>
                <Image
                  aria-hidden
                  src={`/${item.media}`}
                  alt={item.label}
                  width={128}
                  height={128}
                  className="h-10 w-auto opacity-75 transition duration-300 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Components
type SocialItemProps = {
  label: string;
  icon: LucideIcon;
  url: string;
};

const SocialItem = ({ label, icon: Icon, url }: SocialItemProps) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "link",
          size: "default",
          className: "h-max px-0 py-0 text-white hover:text-inherit",
        }),
      )}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
};

import { dummyHowToUse } from "@/config/dummy";
import { ReviewSlides } from "./review-slides";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { url } from "inspector";
import { lazy } from "react";
import { cn } from "@/lib/utils";

const HowToUse = () => {
  return (
    <section className="bg-slate-100 px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <h2 className="h2 text-center md:w-3/5">
          Maksimalkan Customer Experience di setiap tahapan Customer Journey
        </h2>

        {/* Row */}
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {dummyHowToUse?.map((item) => (
            <li key={item.id}>
              <ItemCard
                title={item.title}
                highlight={item.highlight}
                desc={item.desc}
                icon={item.icon}
                color={item.color}
                linkLabel={item.link.label}
                linkUrl={item.link.url}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowToUse;

// Components
type ItemCardProps = {
  title: string;
  highlight: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  linkLabel: string;
  linkUrl: string;
};
const ItemCard = ({
  title,
  highlight,
  desc,
  icon: Icon,
  color,
  linkLabel,
  linkUrl,
}: ItemCardProps) => {
  const fixColor = color;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
      {/* # */}
      <div
        style={{ backgroundColor: color }}
        className="grid h-20 place-content-center text-white"
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* # */}
      <div className="flex h-full flex-col items-start gap-4 p-4 md:py-6">
        <h3 className="text-lg font-bold text-foreground md:w-3/5 md:text-xl">
          {title}
        </h3>

        <p className="font-semibold text-foreground">{highlight}</p>

        <p className="text-sm">{desc}</p>

        <Button asChild className="mt-auto">
          <Link href={linkUrl} aria-label={linkLabel}>
            {linkLabel}
          </Link>
        </Button>
      </div>
    </div>
  );
};

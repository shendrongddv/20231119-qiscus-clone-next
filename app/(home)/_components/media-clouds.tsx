import { dummyLogoClouds } from "@/config/dummy";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MediaClouds = () => {
  return (
    <section className="pb-8 pt-16 md:pb-12 md:pt-24">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Row */}
        <span className="font-semibold text-primary">Telah Diliput Oleh:</span>

        {/* Row */}
        <Marquee speed={30}>
          {dummyLogoClouds?.slice(0, 10)?.map((item) => (
            <figure
              key={item.id}
              className="group mr-6 flex h-7 w-auto items-center justify-center md:mr-16 md:h-10"
            >
              <Image
                src={`https://img.logoipsum.com/2${item.image}.svg`}
                alt={item.image.toString()}
                width={40}
                height={40}
                className="h-full w-auto transition duration-300 group-hover:scale-90"
              />
            </figure>
          ))}
        </Marquee>

        {/* Row */}
        <Marquee speed={30} direction="right">
          {dummyLogoClouds?.slice(9, 20)?.map((item) => (
            <figure
              key={item.id}
              className="group mr-6 flex h-7 w-auto items-center justify-center md:mr-16 md:h-10"
            >
              <Image
                src={`https://img.logoipsum.com/2${item.image}.svg`}
                alt={item.image.toString()}
                width={40}
                height={40}
                className="h-full w-auto transition duration-300 group-hover:scale-90"
              />
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MediaClouds;

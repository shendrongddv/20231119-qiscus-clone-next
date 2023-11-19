import { dummyLogoClouds } from "@/config/dummy";
import Image from "next/image";

const MediaClouds = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-8">
        {/* Row */}
        <h2 className="h2 text-center md:w-3/5">Telah Diliput Oleh</h2>

        {/* Row */}
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {dummyLogoClouds?.slice(0, 14)?.map((item) => (
            <li key={item.id} className="group">
              <figure className="flex h-5 w-auto items-center justify-center md:h-8">
                <Image
                  src={`https://img.logoipsum.com/2${item.image}.svg`}
                  alt={item.image.toString()}
                  width={128}
                  height={128}
                  className="h-full w-auto transition duration-300 group-hover:scale-90"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MediaClouds;

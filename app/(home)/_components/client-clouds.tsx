import { dummyLogoClouds } from "@/config/dummy";
import Image from "next/image";

const ClientClouds = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <h2 className="h2 text-center md:w-3/5">
          Digunakan Oleh 2000+ Perusahaan Terpercaya
        </h2>

        {/* Row */}
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {dummyLogoClouds?.slice(0, 24)?.map((item) => (
            <li key={item.id} className="group">
              <figure className="flex h-6 w-auto items-center justify-center md:h-8">
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

        {/* Row */}
        <p className="text-center font-medium">
          Dan masih banyak lagi perusahaan dari berbagai industri.
        </p>
      </div>
    </section>
  );
};

export default ClientClouds;

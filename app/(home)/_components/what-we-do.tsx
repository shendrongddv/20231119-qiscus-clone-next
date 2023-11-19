import { dummyWhatWeDo } from "@/config/dummy";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="px-4 py-24">
      <div className="container">
        <ul className="grid w-full gap-12">
          {dummyWhatWeDo?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between md:even:flex-row-reverse"
            >
              {/* Col */}
              <div className="md:w-6/12">
                <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
                  <h3 className="h3">{item.title}</h3>
                  <p className="font-medium md:text-lg">{item.desc}</p>
                </div>
              </div>

              {/* Col */}
              <div className="md:w-5/12">
                <figure className="mx-auto h-auto w-4/5 overflow-hidden rounded-2xl md:w-full">
                  <Image
                    src={`/${item.image}`}
                    alt="Image"
                    width={640}
                    height={453}
                    className="h-auto w-full"
                  />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;

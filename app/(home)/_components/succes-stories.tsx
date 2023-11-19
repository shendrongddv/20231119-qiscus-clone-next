import { dummyReviews } from "@/config/dummy";
import { ReviewSlides } from "./review-slides";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

const SuccesStories = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <h2 className="h2 text-center md:w-3/5">
          Kisah Sukses Perusahaan yang Telah Gunakan Qiscus
        </h2>

        {/* Row */}
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {dummyReviews?.slice(0, 3)?.map((item) => (
            // Col
            <li
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-white"
            >
              {/* # */}
              <figure
                aria-hidden
                className="aspect-h-9 aspect-w-16 relative isolate flex overflow-hidden"
              >
                <Image
                  aria-hidden
                  src="/video-thumbnail.webp"
                  alt="Thumbnail"
                  width={640}
                  height={320}
                  className="z-0 h-full w-auto object-cover transition duration-500 group-hover:scale-110"
                />

                <span
                  aria-hidden
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
                >
                  <div className="grid h-14 w-14 cursor-pointer place-content-center rounded-full bg-white bg-opacity-20">
                    <PlayCircle className="h-5 w-5 scale-150 text-white" />
                  </div>
                </span>
              </figure>

              {/* # */}
              <div className="flex h-full flex-col gap-3 p-4 md:p-6">
                {/* ## */}
                <p className="line-clamp-2 text-foreground">
                  &quot;{item.review}&quot;
                </p>

                {/* ## */}
                <div className="mt-auto flex items-end gap-2">
                  <h4 className="font-semibold text-foreground">
                    {item.user.name},
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {item.institution.position}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Row */}
        <div className="space-y-3 text-center md:w-3/5">
          <p>
            Temukan beragam kisah sukses lainnya bagaimana solusi Qiscus secara
            nyata dapat memberikan efek positif pada performa bisnis Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccesStories;
